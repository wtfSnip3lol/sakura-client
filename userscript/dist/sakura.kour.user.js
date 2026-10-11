// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      2.0.5
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
(function(_0x44d144,_0x5b0242){var _0x4f1a82=_0x2152,_0xb251ae=_0x44d144();while(!![]){try{var _0x1b6a76=-parseInt(_0x4f1a82(0x31a))/(0x865+-0x17a9+-0xf45*-0x1)*(parseInt(_0x4f1a82(0x3e0))/(0x1*-0xade+0x11eb+-0x70b))+parseInt(_0x4f1a82(0x518))/(0x19*-0x64+0x1ce0+-0x1319)+parseInt(_0x4f1a82(0x14a))/(-0x1*0x24da+-0x1a86+-0x1*-0x3f64)+parseInt(_0x4f1a82(0x2dc))/(-0x7ab+-0x8ca+0x107a)*(parseInt(_0x4f1a82(0x3d2))/(0x1647+-0x1755+0x114))+-parseInt(_0x4f1a82(0x3b9))/(0x1*0x238f+0x156+-0x24de)*(parseInt(_0x4f1a82(0x668))/(0x6bb*-0x4+0x1169+0x98b))+parseInt(_0x4f1a82(0x3d3))/(-0x1163+0x5*0x509+-0x1*0x7c1)+parseInt(_0x4f1a82(0x1c0))/(-0x1344+0x4*-0x397+-0x8b*-0x3e)*(-parseInt(_0x4f1a82(0x515))/(0x65*-0x52+-0x1188+0x31ed));if(_0x1b6a76===_0x5b0242)break;else _0xb251ae['push'](_0xb251ae['shift']());}catch(_0x36499c){_0xb251ae['push'](_0xb251ae['shift']());}}}(_0x2392,-0x32135+0x14ba1+0x6ce*0x92),((()=>{'use strict';var _0x5c9e99=_0x2152,_0x2e2177={'FCloh':'optio'+'n','emqvm':_0x5c9e99(0x12d),'iLoCE':_0x5c9e99(0x2ce)+_0x5c9e99(0x520)+'r.v1','EkqUi':_0x5c9e99(0x3ef),'LoSdl':function(_0x232c28,_0x364515){return _0x232c28+_0x364515;},'tojxt':function(_0x59fbf2,_0x24b442){return _0x59fbf2(_0x24b442);},'pWNrm':_0x5c9e99(0x341)+'d','uGalU':'loadi'+'ng','GOSsJ':_0x5c9e99(0x215)+_0x5c9e99(0x483)+'\x20','rIAOR':function(_0xcd59dd,_0x26ddee){return _0xcd59dd!==_0x26ddee;},'kNntQ':function(_0x9aa0e6,_0x13059d){return _0x9aa0e6>_0x13059d;},'FemlY':function(_0x32fbc6,_0x4e1a74){return _0x32fbc6===_0x4e1a74;},'SRhQs':function(_0x5a21c7,_0x3f1ef8){return _0x5a21c7===_0x3f1ef8;},'yvxBH':'BnXYx','mWEAZ':function(_0x5489d0,_0x2ca118,_0x66f67f){return _0x5489d0(_0x2ca118,_0x66f67f);},'wFFpY':_0x5c9e99(0x128),'fmsMx':'rUEAr','vrSif':function(_0x4ca2c4,_0x5ebbf6){return _0x4ca2c4!=_0x5ebbf6;},'XvhsH':function(_0x516ac4,_0x201d03,_0x248b94,_0x7c0ee,_0x30fdd6){return _0x516ac4(_0x201d03,_0x248b94,_0x7c0ee,_0x30fdd6);},'rqFqX':function(_0x2b283e,_0x14e77c){return _0x2b283e*_0x14e77c;},'BjsPN':function(_0x21c5c5,_0x2f43f2){return _0x21c5c5===_0x2f43f2;},'OQPnp':'XimbG','dOSkK':function(_0x833965,_0x10386e){return _0x833965===_0x10386e;},'eAlbB':_0x5c9e99(0x2e4),'gyYyN':_0x5c9e99(0x649)+_0x5c9e99(0x4f6)+'ur]\x20h'+_0x5c9e99(0x424)+'eg\x20fa'+_0x5c9e99(0x377),'susWU':function(_0x17633c){return _0x17633c();},'saeBD':'0|1|2'+_0x5c9e99(0x5ea),'hyKLg':function(_0x20073e,_0x4d9da8){return _0x20073e!==_0x4d9da8;},'xhfvc':_0x5c9e99(0x5c2),'EoJPf':function(_0x1e4631,_0x3089e9,_0x14a0ae,_0x1edcd4,_0x10ffe4){return _0x1e4631(_0x3089e9,_0x14a0ae,_0x1edcd4,_0x10ffe4);},'wPgxW':function(_0x4f298e,_0x53f47a){return _0x4f298e/_0x53f47a;},'SlVfw':function(_0x4c2d1e,_0x46ab93){return _0x4c2d1e/_0x46ab93;},'nLhcY':function(_0x564339,_0x5a72bf){return _0x564339(_0x5a72bf);},'WIEhK':function(_0x2a11d0,_0x9ec28){return _0x2a11d0/_0x9ec28;},'lVrii':function(_0x52bff8,_0xbd0158){return _0x52bff8!==_0xbd0158;},'eWEcg':function(_0x211bf3,_0x5b4266){return _0x211bf3<_0x5b4266;},'fRhBL':'f32','dvHDD':function(_0x836c00,_0x56a08a,_0x3a41bc,_0x1d1fbb,_0x3ce737){return _0x836c00(_0x56a08a,_0x3a41bc,_0x1d1fbb,_0x3ce737);},'Vfear':function(_0x4f508d,_0x2f9d08){return _0x4f508d===_0x2f9d08;},'zQpgr':_0x5c9e99(0x1d4),'thkur':function(_0x278122,_0x499f5a){return _0x278122!==_0x499f5a;},'cuqjf':'kSbSd','opwEh':function(_0x11e736,_0x159b74,_0xc7b5ef,_0x2aa428,_0x48f36b){return _0x11e736(_0x159b74,_0xc7b5ef,_0x2aa428,_0x48f36b);},'Wcjel':_0x5c9e99(0x173),'DtKnL':function(_0x3fa6cc,_0x371f88,_0x429812,_0xda6694,_0x45aa7e){return _0x3fa6cc(_0x371f88,_0x429812,_0xda6694,_0x45aa7e);},'ozlhP':function(_0x1f6682,_0x1e0d21){return _0x1f6682+_0x1e0d21;},'dzelU':_0x5c9e99(0x50b),'BuisB':'mouse','OHFlk':function(_0x1bbc38,_0xa4dbd1){return _0x1bbc38===_0xa4dbd1;},'QzZog':_0x5c9e99(0x3e1)+'wn','UrmSI':_0x5c9e99(0x61f)+'up','rjqql':'kour-'+_0x5c9e99(0x646)+_0x5c9e99(0x5de)+_0x5c9e99(0x462)+'nt','HStox':_0x5c9e99(0x322)+_0x5c9e99(0x231)+'-banr'+'s','HyTwK':'none','LVwkG':_0x5c9e99(0x246),'YPDox':function(_0x48c34a,_0x3bbc3a){return _0x48c34a-_0x3bbc3a;},'kdoUD':_0x5c9e99(0x1d7)+'ntent'+_0x5c9e99(0x482)+'d','SiiEi':function(_0x1ca4c8,_0x5c4f7c,_0x5c0a6f,_0x491be7,_0x3cc8c6,_0x2772f4,_0x15ddcf,_0x1d3774){return _0x1ca4c8(_0x5c4f7c,_0x5c0a6f,_0x491be7,_0x3cc8c6,_0x2772f4,_0x15ddcf,_0x1d3774);},'DRLQl':_0x5c9e99(0x547),'byMhn':function(_0x463b0f,_0xdfc29b){return _0x463b0f(_0xdfc29b);},'Snjqj':_0x5c9e99(0x162),'XMWEc':_0x5c9e99(0x2a4),'fJLfV':function(_0x303a2b,_0x4457cc){return _0x303a2b+_0x4457cc;},'bwvLy':function(_0x3a40aa,_0x27e454,_0x42599f,_0x12db66,_0x104ce0,_0x34e306,_0xab9ae1){return _0x3a40aa(_0x27e454,_0x42599f,_0x12db66,_0x104ce0,_0x34e306,_0xab9ae1);},'cOGix':function(_0x2f83ea,_0x3783d1){return _0x2f83ea*_0x3783d1;},'pTscG':function(_0x2407ea,_0x1beb44){return _0x2407ea*_0x1beb44;},'SNWzf':function(_0x29f9be,_0x2623de){return _0x29f9be*_0x2623de;},'ekdDy':_0x5c9e99(0x15f),'xxcjU':function(_0x4bef22,_0x4a3c10){return _0x4bef22+_0x4a3c10;},'SaXEH':function(_0x2b799c,_0x364bc0){return _0x2b799c+_0x364bc0;},'soDev':function(_0x211b38,_0xc0523c){return _0x211b38/_0xc0523c;},'QEVsr':function(_0x19fcd6,_0x2d2f88){return _0x19fcd6*_0x2d2f88;},'TBKZD':'true','PjrCj':'switc'+'h','vNLOC':_0x5c9e99(0x577)+_0x5c9e99(0x2e2),'VlKqk':_0x5c9e99(0xfb)+'t','NOOGv':_0x5c9e99(0x1a4),'hFpoN':function(_0x165a7e,_0x15bafe){return _0x165a7e===_0x15bafe;},'lBwff':function(_0x152ab1,_0x1ab4fe){return _0x152ab1+_0x1ab4fe;},'tSXSL':'div','wwSZR':_0x5c9e99(0x1f9)+'rd','vZbjS':_0x5c9e99(0x1f9)+_0x5c9e99(0x22e)+'ad','jPRID':_0x5c9e99(0x1f9)+_0x5c9e99(0x37c)+_0x5c9e99(0x2ff),'LuOgA':function(_0x3eca7b,_0x5aa1ec,_0x22655a){return _0x3eca7b(_0x5aa1ec,_0x22655a);},'lsDru':function(_0x27ed20,_0x583bce){return _0x27ed20===_0x583bce;},'oplPH':_0x5c9e99(0x110),'HfHxU':_0x5c9e99(0x2ea)+'ody','WRPYj':_0x5c9e99(0x2d7)+'s','DxjZg':'UWMK\x20'+_0x5c9e99(0x10f)+_0x5c9e99(0x629)+_0x5c9e99(0x1a7)+_0x5c9e99(0x44a)+_0x5c9e99(0x601)+_0x5c9e99(0x2b1)+_0x5c9e99(0x4d7)+_0x5c9e99(0x556)+_0x5c9e99(0x617)+_0x5c9e99(0x439),'azQdG':function(_0x2e318f,_0x5225fd){return _0x2e318f+_0x5225fd;},'aWBfF':'\x20|\x20ER'+'R:\x20','QCKPM':_0x5c9e99(0x4da)+'s','Zvuuq':'calls'+_0x5c9e99(0x4bf)+_0x5c9e99(0x60f)+'ne.Ap'+'plica'+'tion.'+_0x5c9e99(0x406)+_0x5c9e99(0x28f)+'Frame'+_0x5c9e99(0x4b8),'JqYIu':'5|4|0'+_0x5c9e99(0x590)+'1','JsRaE':function(_0x589e08){return _0x589e08();},'YJzGF':'Inser'+'t','iIapG':_0x5c9e99(0x501),'Wlifu':'#fff','iQJnl':function(_0x12570d,_0x187a75){return _0x12570d+_0x187a75;},'zMWpo':function(_0x5b005a,_0x2183d6){return _0x5b005a+_0x2183d6;},'ckpjE':'rgba('+_0x5c9e99(0x2de)+_0x5c9e99(0x3de)+'0,0.7'+'5)','SGmdJ':_0x5c9e99(0x106)+'9d','EUcmL':_0x5c9e99(0x57e)+_0x5c9e99(0x2c0)+'i-mon'+_0x5c9e99(0x4fb)+_0x5c9e99(0x35e)+'ospac'+'e','tomqH':_0x5c9e99(0x2ce)+_0x5c9e99(0x520)+'r.ui.'+'v1','oSvwN':_0x5c9e99(0x180),'hsHNu':'sk-sl'+_0x5c9e99(0x120),'JzIfu':'wszAO','woYAC':_0x5c9e99(0x406)+_0x5c9e99(0x28f)+_0x5c9e99(0x3c6)+_0x5c9e99(0x4b8),'reLBm':function(_0x3410e2){return _0x3410e2();},'OGPgH':_0x5c9e99(0x2e8)+_0x5c9e99(0x500),'bsYyP':_0x5c9e99(0x114)+_0x5c9e99(0x21a)+'alth.'+'Initi'+'ateTa'+'keHea'+_0x5c9e99(0x5a4)+_0x5c9e99(0x165)+'ealth'+_0x5c9e99(0x30f)+'lDie,'+_0x5c9e99(0x378)+_0x5c9e99(0x64c)+'g\x20can'+_0x5c9e99(0x49e)+_0x5c9e99(0x159)+'ill\x20y'+_0x5c9e99(0x2f7),'ZrfTn':_0x5c9e99(0x3d5)+_0x5c9e99(0x414)+'ue','NIGyM':function(_0x19610c,_0x5718c7,_0x1940fe,_0x5c212d,_0x594757,_0x3b08f4){return _0x19610c(_0x5718c7,_0x1940fe,_0x5c212d,_0x594757,_0x3b08f4);},'YBbaa':'Speed','ecepO':_0x5c9e99(0x33d)+'\x20defa'+'ult','sfASr':function(_0x327933,_0x5bfda2,_0x51e033,_0x53d68b){return _0x327933(_0x5bfda2,_0x51e033,_0x53d68b);},'RsXeg':_0x5c9e99(0x58e)+_0x5c9e99(0x349)+_0x5c9e99(0x209)+_0x5c9e99(0x308)+_0x5c9e99(0x5eb)+'ime\x20s'+'o\x20the'+_0x5c9e99(0x260)+_0x5c9e99(0x498)+_0x5c9e99(0x256)+_0x5c9e99(0x321)+'\x20appl'+_0x5c9e99(0x5c5),'cDhZz':_0x5c9e99(0x214)+'l','IcTJW':'Posit'+_0x5c9e99(0x151),'KOjEO':'Custo'+'m\x20cen'+'ter\x20c'+'rossh'+_0x5c9e99(0x35d),'XbVIt':_0x5c9e99(0x15d)+_0x5c9e99(0x334)+'r','kdjFW':'No\x20en'+_0x5c9e99(0x143)+'ounte'+'r:\x20th'+'is\x20bu'+_0x5c9e99(0x66e)+_0x5c9e99(0x250)+'\x20GetV'+'isibl'+'ePlay'+_0x5c9e99(0x232)+'o\x20pig'+_0x5c9e99(0x230)+'k\x20on.','yJRGS':'Takes'+_0x5c9e99(0x5b4)+_0x5c9e99(0x352)+_0x5c9e99(0x493)+_0x5c9e99(0x3a8)+_0x5c9e99(0x192)+_0x5c9e99(0x4dd)+'.','FQGVq':function(_0x26cdd8,_0x18a444){return _0x26cdd8(_0x18a444);},'uInqG':function(_0xb12b53,_0x54976b,_0x5afaa7,_0x3118cc){return _0xb12b53(_0x54976b,_0x5afaa7,_0x3118cc);},'DBbiq':_0x5c9e99(0x193)+'Kille'+'r','aksGK':_0x5c9e99(0x222)+'r','OBkcU':'uuYZY','oYRub':_0x5c9e99(0x31d),'dQCJQ':'mn-pa'+_0x5c9e99(0x32c),'EHOZN':'Sakur'+_0x5c9e99(0x28b)+'r','WSTTR':'<svg\x20'+_0x5c9e99(0x441)+_0x5c9e99(0x10d)+_0x5c9e99(0x191)+_0x5c9e99(0x1e7)+_0x5c9e99(0x104)+'\x20d=\x22M'+'6\x206l1'+_0x5c9e99(0x429)+_0x5c9e99(0x2f5)+_0x5c9e99(0x3c8)+'/></s'+_0x5c9e99(0x331),'vdiKF':_0x5c9e99(0x591)+'t','sqrpH':'canva'+'s','DrDBc':'posit'+_0x5c9e99(0x52e)+_0x5c9e99(0x240)+'inset'+':0;z-'+'index'+':2147'+'48364'+_0x5c9e99(0x3f7)+'nter-'+_0x5c9e99(0x399)+'s:non'+'e;','VkyQT':function(_0x519844,_0x326fcf){return _0x519844===_0x326fcf;},'dxCrU':_0x5c9e99(0x3e6),'jrueI':_0x5c9e99(0x66a),'ZiCzS':_0x5c9e99(0x519)+'t','pIOmX':'Move','lNojL':_0x5c9e99(0x2a8)+'l','egdrl':'Safet'+'y','bldhC':_0x5c9e99(0x1e3)+_0x5c9e99(0x441)+_0x5c9e99(0x10d)+'\x200\x2024'+_0x5c9e99(0x1e7)+'<path'+_0x5c9e99(0x5bb)+_0x5c9e99(0x13a)+'c-1.5'+'-2.5-'+'4-4.5'+'-4-7.'+'5\x200-2'+_0x5c9e99(0x383)+_0x5c9e99(0x3a2)+_0x5c9e99(0x476)+_0x5c9e99(0x56a)+'\x204\x204.'+'5c0\x203'+_0x5c9e99(0x623)+_0x5c9e99(0x603)+_0x5c9e99(0x15b)+_0x5c9e99(0x1be)+_0x5c9e99(0x539)+_0x5c9e99(0x3fd)+_0x5c9e99(0x300)+_0x5c9e99(0x106)+_0x5c9e99(0x5da)+_0x5c9e99(0x61b)+'-widt'+_0x5c9e99(0x5e8)+_0x5c9e99(0x5ca)+_0x5c9e99(0x1e9)+'necap'+'=\x22rou'+_0x5c9e99(0x2f6)+_0x5c9e99(0x61b)+'-line'+_0x5c9e99(0x356)+_0x5c9e99(0x486)+'d\x22/><'+'circl'+_0x5c9e99(0x4d5)+'\x2212\x22\x20'+'cy=\x221'+'0\x22\x20r='+_0x5c9e99(0x61d)+_0x5c9e99(0x5fb)+_0x5c9e99(0x4f1)+'6b9d\x22'+_0x5c9e99(0x199)+_0x5c9e99(0x331),'rQSHF':function(_0x29de49){return _0x29de49();},'ZYlfw':_0x5c9e99(0x4a3),'Gqkaa':'CzSck','fJQIB':_0x5c9e99(0x2c1)+'bly-C'+'Sharp'+_0x5c9e99(0x555),'ferAm':'god','IvUFY':_0x5c9e99(0x5f8)+'th','wEPQf':_0x5c9e99(0x4c7)+_0x5c9e99(0x11c)+_0x5c9e99(0x455)+'.Over'+_0x5c9e99(0x641)+_0x5c9e99(0x55b)+'lMoti'+'on','IizRQ':'Tick','bDmXs':'capSh'+'ooter','jGmAp':'Legio'+_0x5c9e99(0x11c)+'forms'+_0x5c9e99(0x23b)+_0x5c9e99(0x641)+_0x5c9e99(0x4c6)+'ent','MzZAy':function(_0x20793d,_0x6e6ca6,_0x77ea96){return _0x20793d(_0x6e6ca6,_0x77ea96);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location['hostn'+_0x5c9e99(0x46f)]||''))return;if(window[_0x5c9e99(0x229)+_0x5c9e99(0x248)+_0x5c9e99(0x597)])return;window['__SAK'+_0x5c9e99(0x248)+_0x5c9e99(0x597)]=!![];var _0x47bcc3=_0x2e2177[_0x5c9e99(0x485)],_0x3efed8='#ffb3'+'c6',_0x408c44={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x2e2177['SGmdJ'],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x27ecfa={..._0x408c44};try{Object['assig'+'n'](_0x27ecfa,JSON[_0x5c9e99(0x328)](localStorage[_0x5c9e99(0x5b3)+'em']('sakur'+_0x5c9e99(0x520)+_0x5c9e99(0x5dd))||'{}'));}catch(_0x3f8a84){}function _0x37c03d(){var _0x13607f=_0x5c9e99,_0x3a183b={'ZNVfl':_0x2e2177['FCloh']};if(_0x13607f(0x12d)===_0x2e2177['emqvm'])try{localStorage[_0x13607f(0x3cf)+'em'](_0x2e2177['iLoCE'],JSON[_0x13607f(0x5dc)+_0x13607f(0x197)](_0x27ecfa));}catch(_0x20074d){}else{var _0x3ae61a=_0x36e232['creat'+_0x13607f(0x1d2)+'ent'](_0x3a183b[_0x13607f(0x4df)]);_0x3ae61a[_0x13607f(0x133)]=_0x4cb5c5,_0x3ae61a[_0x13607f(0x458)+'onten'+'t']=_0xcc0f99,_0x2d1677['appen'+_0x13607f(0x26f)+'d'](_0x3ae61a);}}var _0x362a0f={'uwmk':!!window[_0x5c9e99(0x60e)+'WebMo'+_0x5c9e99(0x57f)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x27ecfa[_0x5c9e99(0x469)+'ode'],'lastError':''};try{window[_0x5c9e99(0x54b)+_0x5c9e99(0x650)+_0x5c9e99(0x34b)+'r'](_0x2e2177['ZYlfw'],_0x452cf6=>{var _0x1db229=_0x5c9e99;if(_0x2e2177[_0x1db229(0x526)]===_0x2e2177[_0x1db229(0x526)])try{var _0x5ce320=_0x452cf6&&(_0x452cf6[_0x1db229(0x45e)+'ge']||_0x452cf6[_0x1db229(0x4a3)]&&_0x452cf6[_0x1db229(0x4a3)]['messa'+'ge'])||'unkno'+'wn';if(_0x452cf6&&_0x452cf6['filen'+'ame'])_0x5ce320+=_0x2e2177[_0x1db229(0x573)]('\x20@\x20'+_0x2e2177[_0x1db229(0x45a)](String,_0x452cf6[_0x1db229(0x56b)+_0x1db229(0x46f)])['split']('/')[_0x1db229(0x4f8)]()+':',_0x452cf6['linen'+'o']||'?');_0x362a0f[_0x1db229(0x4c3)+_0x1db229(0x2ed)]=String(_0x5ce320)[_0x1db229(0x41d)](0x494*-0x2+0x371+0x5b7,-0x35*0xe+-0x91d*-0x1+-0x597);}catch(_0x8d191e){}else _0x2a57e6['hookG'+'od']=_0x55c593,_0x1bc43e();});}catch(_0x149691){}var _0x26095d=null,_0x52913d=null,_0x153449={},_0x5dc460=[],_0x1b16a6=[],_0x41a196=new Map();function _0x246dcc(_0x14a1b0,_0x1ef78c){var _0x46de27=_0x5c9e99,_0x45563d={'GcqzX':function(_0x3722db,_0x105441){return _0x3722db+_0x105441;},'LSnLN':function(_0x39418e,_0xc6c512){var _0x3cacc2=_0x2152;return _0x2e2177[_0x3cacc2(0x573)](_0x39418e,_0xc6c512);},'xKAWQ':_0x46de27(0x3e9)+'bound'+'\x20','ZkWrZ':_0x46de27(0x2d7)+'s','cmAXi':_0x2e2177['pWNrm'],'vsTBj':_0x2e2177[_0x46de27(0x279)],'Vriuu':_0x2e2177[_0x46de27(0x405)],'yUzKM':'held','obusK':_0x46de27(0x1e5)+'vemen'+'t\x20','wJzcE':function(_0x11734f,_0x1c823f){return _0x11734f+_0x1c823f;}};if(_0x2e2177[_0x46de27(0x255)]('diaHT','diaHT'))_0x27e6d9[_0x46de27(0x458)+'onten'+'t']=_0x57cac0['safeM'+_0x46de27(0x1ef)]?_0x46de27(0x364)+_0x46de27(0x64b)+_0x46de27(0x1f3)+_0x46de27(0x2f0)+_0x46de27(0x218)+_0x46de27(0x368)+'ooks\x20'+_0x46de27(0x2df)+_0x46de27(0x2c8)+_0x46de27(0x47f)+')':_0x38d26b[_0x46de27(0x568)]?_0x45563d['GcqzX'](_0x45563d['LSnLN'](_0x45563d[_0x46de27(0x194)](_0x45563d['xKAWQ']+(_0x51bb12['hooks'+'Total']?_0x45563d[_0x46de27(0x62b)](_0x570824[_0x46de27(0x392)+'Ok'],'/')+_0x4a17c9[_0x46de27(0x392)+_0x46de27(0x21c)]+_0x45563d['ZkWrZ']:'0\x20hoo'+'ks\x20ar'+_0x46de27(0x138)+'all\x20o'+_0x46de27(0x237)),'\x20|\x20ga'+_0x46de27(0x4ae)),_0x418712[_0x46de27(0x5ad)+_0x46de27(0x523)]?_0x45563d[_0x46de27(0x4fc)]:_0x45563d[_0x46de27(0x5ac)])+_0x45563d[_0x46de27(0x635)],_0x2e0b95[_0x46de27(0x449)+_0x46de27(0x22d)]?_0x45563d[_0x46de27(0x27c)]:_0x46de27(0x50c))+_0x45563d[_0x46de27(0x5ce)]+(_0x204b1e['movem'+_0x46de27(0x12f)]?_0x46de27(0x31d):_0x46de27(0x50c))+(_0x2977a7['lastE'+'rror']?_0x45563d[_0x46de27(0x62e)]('\x20|\x20ER'+_0x46de27(0x3ee),_0x57fcd8[_0x46de27(0x4c3)+_0x46de27(0x2ed)]):''):'UWMK\x20'+_0x46de27(0x10f)+'NG\x20-\x20'+_0x46de27(0x1a7)+_0x46de27(0x44a)+_0x46de27(0x601)+'einst'+_0x46de27(0x4d7)+'he\x20us'+_0x46de27(0x617)+_0x46de27(0x439);else{if(!_0x1ef78c||_0x14a1b0['inclu'+'des'](_0x1ef78c)||_0x2e2177['kNntQ'](_0x14a1b0[_0x46de27(0x422)+'h'],-0x67*-0x6+0x209b+-0x22c5))return;_0x14a1b0['push'](_0x1ef78c);}}function _0x1d8aaa(_0x390232,_0x5065d1,_0x3ab8c6,_0x3fc10f){var _0x3b3b64=_0x5c9e99,_0x4adc8d=-0x7*0x144+-0xcf2+0x1*0x15ce;try{_0x4adc8d=_0x5065d1&&_0x5065d1[_0x3b3b64(0x168)]?_0x5065d1[_0x3b3b64(0x168)]():0xe12+0x14cc+-0x22de;}catch(_0x323796){}if(!_0x4adc8d)return;_0x246dcc(_0x390232,_0x4adc8d),_0x3ab8c6[_0x3fc10f]=_0x390232[_0x3b3b64(0x422)+'h'];if(_0x2e2177['FemlY'](_0x3fc10f,_0x3b3b64(0x537)+_0x3b3b64(0x12f))&&_0x390232[_0x3b3b64(0x422)+'h']){var _0x54cec0=_0x153449['capMo'+'ve'];if(_0x54cec0){if(_0x2e2177['SRhQs'](_0x2e2177['yvxBH'],_0x2e2177['yvxBH']))try{_0x54cec0[_0x3b3b64(0x50f)+'ed']=![];}catch(_0x1e369d){}else try{_0x4a6841[_0x3b3b64(0x61a)][_0x3b3b64(0x583)+'dChil'+'d'](_0x458bbc);}catch(_0x188453){}}}}function _0x56eb65(_0x5174d0,_0x2dbde2,_0x1c9463){var _0x4e3102=_0x5c9e99;if(_0x2e2177['wFFpY']!==_0x2e2177['wFFpY'])_0x36bc19[_0x4e3102(0x64f)]=_0x19b7bc,_0x32c4d4(),_0x2e2177[_0x4e3102(0x149)](_0x546dce,'god',_0x473cff),_0x2e2177[_0x4e3102(0x149)](_0x58e009,'godDi'+'e',_0x3eef83);else{var _0x58a35a=_0x41a196['get'](_0x5174d0);!_0x58a35a&&(_0x58a35a=new Map(),_0x41a196['set'](_0x5174d0,_0x58a35a));if(!_0x58a35a['has'](_0x2dbde2)){if(_0x4e3102(0x187)===_0x2e2177[_0x4e3102(0x3d9)])try{var _0xf0ca29=new _0x26095d(_0x5174d0)[_0x4e3102(0x55c)+_0x4e3102(0x630)](_0x2dbde2,_0x1c9463);_0x58a35a['set'](_0x2dbde2,_0x2e2177[_0x4e3102(0x255)](_0xf0ca29,undefined)?_0xf0ca29[_0x4e3102(0x168)]():null);}catch(_0x2aecaa){_0x58a35a['set'](_0x2dbde2,null);}else _0x449f70[_0x4e3102(0x584)+'or']=_0x6a14e8,_0xba549();}return _0x58a35a[_0x4e3102(0x37b)](_0x2dbde2);}}function _0x32410d(_0x360f8d,_0x2d0a91,_0x5d8d93,_0x2f1f88){var _0x4319e0=_0x5c9e99;try{new _0x26095d(_0x360f8d)['write'+_0x4319e0(0x245)](_0x2d0a91,_0x5d8d93,_0x2f1f88);}catch(_0x3d39f8){}}function _0x5de931(_0x2d7b03,_0x357fa5){var _0x1e75a4=_0x5c9e99;try{var _0x201c41=new _0x26095d(_0x2d7b03)[_0x1e75a4(0x55c)+_0x1e75a4(0x630)](_0x357fa5,_0x1e75a4(0x14f));return _0x201c41?_0x201c41['val']():0x6b*0x22+0x5d*-0x27+0xb*-0x1;}catch(_0x6f7ced){return 0x935+0xc5d+0x16*-0xfb;}}function _0x41a2ef(_0xf8510,_0x10ce00,_0x525d32,_0x4c6a1d){var _0x183927=_0x5c9e99,_0xe06049=_0x56eb65(_0xf8510,_0x10ce00,_0x525d32);if(_0x2e2177['vrSif'](_0xe06049,null))_0x2e2177[_0x183927(0x2e5)](_0x32410d,_0xf8510,_0x10ce00,_0x525d32,_0x2e2177[_0x183927(0x39d)](_0xe06049,_0x4c6a1d));}function _0x4a1d0a(_0x2952f9,_0x3e9583,_0x2a49eb,_0x107ec2,_0x2a16fd,_0xf29723,_0x1ba202){var _0x1b39c7=_0x5c9e99,_0x405f39={'ukUjD':function(_0x309542){return _0x309542();},'divmb':_0x1b39c7(0x213)+'|3|0|'+'4','tIBwR':_0x1b39c7(0x4e7)+'n'};try{if(_0x2e2177[_0x1b39c7(0x3ff)](_0x2e2177['OQPnp'],'XimbG')){var _0x409cff=_0x52913d[_0x1b39c7(0x5f0)+'refix']({'typeName':_0x3e9583,'methodName':_0x2a49eb,'params':_0x107ec2,'returnType':_0x2a16fd},_0xf29723);return _0x409cff[_0x1b39c7(0x50f)+'ed']=_0x1ba202!==![],_0x153449[_0x2952f9]=_0x409cff,_0x362a0f[_0x1b39c7(0x392)+_0x1b39c7(0x21c)]++,_0x409cff;}else _0x409ea2[_0x1b39c7(0x125)+'ead']=_0x466a70,_0x591ae1();}catch(_0x11b95a){if(_0x2e2177[_0x1b39c7(0x65e)](_0x2e2177[_0x1b39c7(0x33e)],'JBfzj'))return console[_0x1b39c7(0x294)](_0x2e2177[_0x1b39c7(0x338)],_0x2952f9,_0x11b95a&&_0x11b95a[_0x1b39c7(0x45e)+'ge']),null;else{var _0x5226e9=_0x405f39[_0x1b39c7(0x508)][_0x1b39c7(0x140)]('|'),_0x4d494f=-0x1*-0x718+-0xdca+0x6b2;while(!![]){switch(_0x5226e9[_0x4d494f++]){case'0':_0x4b1379['oncli'+'ck']=_0x43c2c5=>{var _0x166b8d=_0x1b39c7;_0x43c2c5[_0x166b8d(0x3b3)+'ropag'+_0x166b8d(0x2e1)](),_0x405f39[_0x166b8d(0x2da)](_0x40d9e3);};continue;case'1':_0x4b1379['type']=_0x405f39['tIBwR'];continue;case'2':_0x4b1379['class'+_0x1b39c7(0x4b7)]=_0x1b39c7(0x15c)+'n';continue;case'3':_0x4b1379[_0x1b39c7(0x458)+_0x1b39c7(0x153)+'t']=_0x2316cb;continue;case'4':return _0x4b1379;case'5':var _0x4b1379=_0x206a9e[_0x1b39c7(0x37e)+_0x1b39c7(0x1d2)+_0x1b39c7(0x285)](_0x1b39c7(0x4e7)+'n');continue;}break;}}}}function _0x3c2c8c(_0x1c9cab,_0x12f9c5,_0x497b02,_0xc60c2a,_0x150357,_0x778d12,_0x263354){var _0x49e902=_0x5c9e99;try{var _0x41fc0b=_0x2e2177['saeBD']['split']('|'),_0xe218f9=-0x219c+-0x201f+-0x3*-0x15e9;while(!![]){switch(_0x41fc0b[_0xe218f9++]){case'0':var _0x210fc9=_0x52913d['hookP'+_0x49e902(0x252)+'x']({'typeName':_0x12f9c5,'methodName':_0x497b02,'params':_0xc60c2a,'returnType':_0x150357},_0x778d12);continue;case'1':_0x210fc9['enabl'+'ed']=_0x263354!==![];continue;case'2':_0x153449[_0x1c9cab]=_0x210fc9;continue;case'3':_0x362a0f['hooks'+_0x49e902(0x21c)]++;continue;case'4':return _0x210fc9;}break;}}catch(_0x57a0ba){if(_0x2e2177['hyKLg'](_0x49e902(0x4ab),'xWJAZ'))return console['warn'](_0x49e902(0x649)+_0x49e902(0x4f6)+'ur]\x20h'+'ook\x20r'+_0x49e902(0x2ec)+_0x49e902(0x377),_0x1c9cab,_0x57a0ba&&_0x57a0ba[_0x49e902(0x45e)+'ge']),null;else _0x2fd894={..._0x584df4},_0x2e2177['susWU'](_0x1d3e07),_0x123252[_0x49e902(0x622)+'d']();}}var _0x3b4da2=()=>![];try{if(_0x2e2177[_0x5c9e99(0x5a1)]('HuxvW',_0x2e2177['Gqkaa']))_0x42bf8b[_0x5c9e99(0x270)+_0x5c9e99(0x21b)]=_0x3618a5,_0x2e2177[_0x5c9e99(0x136)](_0x357c08);else{if(window['Unity'+'WebMo'+_0x5c9e99(0x57f)]&&!_0x27ecfa[_0x5c9e99(0x469)+'ode']){_0x26095d=window[_0x5c9e99(0x60e)+_0x5c9e99(0x673)+_0x5c9e99(0x57f)][_0x5c9e99(0x558)+'Wrapp'+'er'],_0x52913d=window[_0x5c9e99(0x60e)+'WebMo'+_0x5c9e99(0x57f)]['Runti'+'me']['creat'+_0x5c9e99(0x489)+'in']({'name':_0x5c9e99(0x1fe)+'aKour','version':_0x5c9e99(0x417),'referencedAssemblies':[_0x2e2177['fJQIB']]});if(_0x27ecfa[_0x5c9e99(0x22a)+'od'])_0x4a1d0a(_0x2e2177[_0x5c9e99(0x43c)],_0x2e2177['IvUFY'],_0x5c9e99(0x5e6)+_0x5c9e99(0x18a)+_0x5c9e99(0x534)+'lth',[_0x5c9e99(0x173),_0x5c9e99(0x173)],undefined,_0x3b4da2,!!_0x27ecfa[_0x5c9e99(0x64f)]);if(_0x27ecfa[_0x5c9e99(0x22a)+'odDie'])_0x4a1d0a(_0x5c9e99(0x14b)+'e',_0x5c9e99(0x5f8)+'th','Local'+_0x5c9e99(0x115),[_0x5c9e99(0x173),_0x2e2177[_0x5c9e99(0x5cf)],_0x5c9e99(0x173),'i32',_0x2e2177['Wcjel']],undefined,_0x3b4da2,!!_0x27ecfa[_0x5c9e99(0x64f)]);if(_0x27ecfa[_0x5c9e99(0x44e)+_0x5c9e99(0x32b)+'il'])_0x4a1d0a(_0x5c9e99(0x440)+_0x5c9e99(0x5f2),_0x2e2177['wEPQf'],_0x2e2177['IizRQ'],[_0x5c9e99(0x173)],undefined,_0x3b4da2,!!_0x27ecfa['noRec'+_0x5c9e99(0x5f2)]);if(_0x27ecfa[_0x5c9e99(0x5ae)+'aptur'+'e'])_0x2e2177['SiiEi'](_0x3c2c8c,_0x2e2177[_0x5c9e99(0x578)],'OShoo'+_0x5c9e99(0x1b2),'SetGa'+_0x5c9e99(0x56e)+'ning',['i32',_0x5c9e99(0x173)],undefined,(_0x51273a,_0x2e28c6)=>{var _0x4eb4ad=_0x5c9e99,_0x48cbfc={'bwaHh':function(_0x25d441){var _0x17e187=_0x2152;return _0x2e2177[_0x17e187(0x136)](_0x25d441);}};_0x4eb4ad(0x600)!==_0x2e2177['xhfvc']?_0x1d8aaa(_0x1b16a6,_0x2e28c6,_0x362a0f,_0x4eb4ad(0x449)+'ers'):(_0xdc5e79[_0x4eb4ad(0x24f)+'ill']=_0x3c6b16,_0x48cbfc[_0x4eb4ad(0x643)](_0x2eba2e));},!![]);if(_0x27ecfa[_0x5c9e99(0x5ae)+'aptur'+'e'])_0x3c2c8c(_0x5c9e99(0x54d)+'ve',_0x2e2177[_0x5c9e99(0x472)],_0x5c9e99(0x2f9)+'unded',[_0x2e2177[_0x5c9e99(0x5cf)]],_0x2e2177[_0x5c9e99(0x5cf)],(_0x5eab81,_0x32f9f2)=>{var _0x2e14a9=_0x5c9e99;_0x2e2177[_0x2e14a9(0x19e)](_0x1d8aaa,_0x5dc460,_0x32f9f2,_0x362a0f,_0x2e14a9(0x537)+_0x2e14a9(0x12f));},!![]);}}}catch(_0x4c416f){if(_0x5c9e99(0x290)!=='fdYYJ')console[_0x5c9e99(0x294)](_0x5c9e99(0x649)+'ra-ko'+_0x5c9e99(0x11e)+'WMK\x20i'+'nit\x20f'+'ailed'+':',_0x4c416f&&_0x4c416f['messa'+'ge']);else{var _0x53a823=_0x4e2881[_0x5c9e99(0x37e)+_0x5c9e99(0x1d2)+'ent'](_0x5c9e99(0x309));_0x53a823['class'+'Name']=_0x5c9e99(0x411)+'l';var _0x1bc1ce=_0x28c450[_0x5c9e99(0x37e)+_0x5c9e99(0x1d2)+_0x5c9e99(0x285)]('span');_0x1bc1ce['class'+_0x5c9e99(0x4b7)]='sk-la'+_0x5c9e99(0x257),_0x1bc1ce[_0x5c9e99(0x458)+_0x5c9e99(0x153)+'t']=_0x2e1953;if(_0x203f11){var _0x431315=_0x575df0['creat'+_0x5c9e99(0x1d2)+_0x5c9e99(0x285)]('small');_0x431315['class'+_0x5c9e99(0x4b7)]='sk-hi'+'nt',_0x431315[_0x5c9e99(0x458)+'onten'+'t']=_0x3833b6,_0x1bc1ce[_0x5c9e99(0x583)+_0x5c9e99(0x26f)+'d'](_0x431315);}return _0x53a823[_0x5c9e99(0x583)+'d'](_0x1bc1ce,_0x67c7eb),_0x53a823;}}function _0x97cf8(_0x14eb25,_0x2b6982){var _0x34c2f6=_0x153449[_0x14eb25];if(_0x34c2f6)try{_0x34c2f6['enabl'+'ed']=!!_0x2b6982;}catch(_0xe56a22){}}setInterval(()=>{var _0x10728a=_0x5c9e99,_0x34d7e1={'zmvRu':function(_0x47aa57){return _0x2e2177['susWU'](_0x47aa57);}};if(!_0x26095d||!window[_0x10728a(0x29f)+'Insta'+_0x10728a(0x372)])return;var _0x3686ff=_0x2e2177['wPgxW'](_0x2e2177[_0x10728a(0x45a)](Number,_0x27ecfa['speed'+'Pct'])||0xf41*-0x1+0x1c6+0xddf,0x1574+0xc*-0x65+-0x1054),_0x256ebb=_0x2e2177['SlVfw'](_0x2e2177['nLhcY'](Number,_0x27ecfa[_0x10728a(0x3e2)+'ct'])||0x218*-0x3+-0x2310+-0x2*-0x14de,0x3*0x950+0x16d3*-0x1+-0x4b9),_0x3f0c52=_0x2e2177['WIEhK'](Number(_0x27ecfa[_0x10728a(0x270)+'tyPct'])||-0x17*-0x10f+0x1*-0x5f9+-0x11fc,-0x2570+-0x11*-0x241+-0x7d),_0x375941=Math['max'](0x1a38+0xe*-0x21b+-0xa7*-0x5,Number(_0x27ecfa[_0x10728a(0x64e)+'eValu'+'e'])||-0x969+0x145*-0x1a+-0x6d*-0x65),_0x1c8e41=_0x2e2177[_0x10728a(0x255)](_0x3686ff,-0x1057+-0x245d+0x1*0x34b5)||_0x2e2177[_0x10728a(0x1c6)](_0x256ebb,0x12ea+-0x612*0x4+0x55f)||_0x2e2177['rIAOR'](_0x3f0c52,-0x16b4+0x5*-0x4e5+0x2f2e)||_0x27ecfa[_0x10728a(0x28c)],_0x5f54df=_0x27ecfa['noSpr'+_0x10728a(0x4ee)]||_0x27ecfa['damag'+_0x10728a(0x1b9)]||_0x27ecfa[_0x10728a(0x362)+_0x10728a(0x1ba)]||_0x27ecfa[_0x10728a(0x355)+'Exp'];if(!_0x1c8e41&&!_0x5f54df)return;try{for(var _0x241532=0x579+-0x7*-0x13f+-0x2*0x719;_0x2e2177[_0x10728a(0x65f)](_0x241532,_0x5dc460['lengt'+'h']);_0x241532++){var _0x24b34a=_0x5dc460[_0x241532];if(!_0x24b34a)continue;_0x3686ff!==-0x1*0xbfe+-0x52b*-0x3+-0x382&&(_0x2e2177['XvhsH'](_0x41a2ef,_0x24b34a,0xf*0x32+0x7*-0x1fb+0x11*0xa7,_0x2e2177[_0x10728a(0x4ca)],_0x3686ff),_0x41a2ef(_0x24b34a,0x13c0+-0x6b3+-0xce1,'f32',_0x3686ff),_0x41a2ef(_0x24b34a,-0x25a8+-0x25d3*-0x1+-0x5*-0x1,_0x2e2177[_0x10728a(0x4ca)],_0x3686ff),_0x2e2177[_0x10728a(0x566)](_0x41a2ef,_0x24b34a,-0x1b36+0x1732+0x1b*0x28,_0x2e2177['fRhBL'],_0x3686ff),_0x41a2ef(_0x24b34a,-0x12*-0x85+0x1289+-0x223*0xd,'f32',_0x3686ff),_0x41a2ef(_0x24b34a,-0x1*0x99e+-0xb7*0x2e+0x2aa0,'f32',_0x3686ff));if(_0x256ebb!==-0x106d+0x24*-0x39+0xe*0x1bf)_0x41a2ef(_0x24b34a,0x61b*0x6+-0x21a3+-0x2af,_0x10728a(0x448),_0x256ebb);_0x2e2177['lVrii'](_0x3f0c52,0x1a5d+-0x22c1+-0x865*-0x1)&&(_0x2e2177['Vfear'](_0x2e2177[_0x10728a(0x244)],_0x2e2177[_0x10728a(0x244)])?(_0x41a2ef(_0x24b34a,-0x2*-0xf0d+0xa06+-0x27d8,_0x2e2177['fRhBL'],_0x3f0c52),_0x2e2177['dvHDD'](_0x41a2ef,_0x24b34a,-0x493*0x2+0x2260+-0x1*0x18ee,_0x10728a(0x448),_0x3f0c52)):(_0x5a5fea['hookG'+'od']=_0xff113,_0x586cf0['hookG'+'odDie']=_0x2079cc,_0x44386d[_0x10728a(0x44e)+_0x10728a(0x32b)+'il']=_0x304670,_0x3794f3['hookC'+'aptur'+'e']=_0x270f96,_0x34d7e1[_0x10728a(0x21e)](_0x529221),_0x4cb999[_0x10728a(0x622)+'d']()));if(_0x27ecfa['bhop'])_0x32410d(_0x24b34a,-0x1153*-0x2+0x232b+-0x9e3*0x7,'f32',-(0x2342+-0x2d*-0x5f+-0x300e));}}catch(_0x30e74e){}try{if(_0x2e2177['thkur'](_0x2e2177[_0x10728a(0x4ea)],_0x2e2177[_0x10728a(0x4ea)]))_0x1ddffa['assig'+'n'](_0x35fbad,_0x2b4f96[_0x10728a(0x328)](_0xf5ee0[_0x10728a(0x5b3)+'em']('sakur'+_0x10728a(0x520)+_0x10728a(0x5dd))||'{}'));else for(var _0x527dc8=0x11e3+0x329+0x543*-0x4;_0x527dc8<_0x1b16a6[_0x10728a(0x422)+'h'];_0x527dc8++){var _0x249bdd=_0x5de931(_0x1b16a6[_0x527dc8],0x20ba+0x767*0x1+-0x27e9);if(!_0x249bdd)continue;_0x27ecfa[_0x10728a(0x64e)+'eExp']&&(_0x32410d(_0x249bdd,0x2*0x1367+-0x1299+0x6a3*-0x3,'i32',_0x375941),_0x2e2177[_0x10728a(0x14e)](_0x32410d,_0x249bdd,-0x2*0xf4f+0x1*-0xbcb+0x2abd,_0x2e2177[_0x10728a(0x5cf)],_0x375941));_0x27ecfa['noSpr'+'ead']&&(_0x32410d(_0x249bdd,0x2*-0x5a1+0x17f*-0x19+0x3131,'f32',0x59*-0xd+0x1686*0x1+-0xb*0x1a3),_0x32410d(_0x249bdd,-0x105c+0x316+-0x6d7*-0x2,_0x10728a(0x448),-0x7ac*-0x1+0x2a*0x29+-0xe65));if(_0x27ecfa['infAm'+'moExp'])_0x2e2177[_0x10728a(0x19e)](_0x32410d,_0x249bdd,0x2d*0x25+-0x11*-0x176+0x67*-0x4d,_0x10728a(0x173),0x1cb8+0x1*0x4ff+0x4*-0x774);_0x27ecfa[_0x10728a(0x355)+_0x10728a(0x465)]&&(_0x2e2177[_0x10728a(0x19b)](_0x41a2ef,_0x249bdd,-0x5d7+0xbbe*0x3+-0x99d*0x3,_0x2e2177[_0x10728a(0x4ca)],0x2331+0x103c+-0x336d+0.1),_0x32410d(_0x249bdd,0x1e3c+-0x238d+-0x5b1*-0x1,_0x2e2177[_0x10728a(0x4ca)],-0xd4d+-0x6c5*-0x2+-0x3d+0.1));}}catch(_0x548b18){}},0x2028+-0x11*0xa7+0x1449*-0x1),_0x2e2177['MzZAy'](setInterval,()=>{var _0x4c7185=_0x5c9e99;_0x362a0f[_0x4c7185(0x5ad)+_0x4c7185(0x523)]=!!window[_0x4c7185(0x29f)+'Insta'+_0x4c7185(0x372)];try{var _0x1e43d2=0xd3a+0x29*0x49+-0x18eb;for(var _0x30cca9 in _0x153449){if(_0x153449[_0x30cca9]&&_0x153449[_0x30cca9][_0x4c7185(0x41e)+'ed'])_0x1e43d2++;}_0x362a0f['hooks'+'Ok']=_0x1e43d2;}catch(_0x1dd5e2){}},-0x57*0xd+0xa*-0x32e+-0x281f*-0x1);var _0x4a440d=new Set(),_0x12c79f={0x1:[],0x3:[]},_0x5e6766=![];function _0x2d66ae(_0x123582){var _0x1f3040=_0x5c9e99;if(_0x1f3040(0x50b)===_0x2e2177['dzelU'])_0x4a440d[_0x1f3040(0x419)](_0x123582[_0x1f3040(0x433)]);else{if(_0x3c1e46['__sak'+'ura'])return;_0x394f98[_0x1f3040(0x419)](_0x2e2177[_0x1f3040(0x573)](_0x1f3040(0x61f),_0x5c2a6a[_0x1f3040(0x4e7)+'n']+(0x16f*-0x2+-0x15cd+-0x2*-0xc56)));var _0x309092=_0x4aa60e[_0x2e2177[_0x1f3040(0x204)](_0x1e341e[_0x1f3040(0x4e7)+'n'],-0x4*0x359+-0x1*0x20e+0x23*0x71)];if(_0x309092){_0x309092['push'](_0x239e86[_0x1f3040(0x57a)]());if(_0x309092['lengt'+'h']>0x9df+0x3*-0xa75+-0x4*-0x56a)_0x309092[_0x1f3040(0x3fe)]();}}}function _0x5eec13(_0x4e0eca){var _0x46c405=_0x5c9e99;_0x4a440d[_0x46c405(0x453)+'e'](_0x4e0eca[_0x46c405(0x433)]);}function _0x3c3ac8(_0x849307){var _0x2972f0=_0x5c9e99;if(_0x849307['__sak'+'ura'])return;_0x4a440d[_0x2972f0(0x419)](_0x2e2177[_0x2972f0(0x3e4)]+_0x2e2177[_0x2972f0(0x204)](_0x849307['butto'+'n'],-0x25c1+-0x210b+0x46cd));var _0x17c0d6=_0x12c79f[_0x849307[_0x2972f0(0x4e7)+'n']+(-0x1621+-0x33+0x1655)];if(_0x17c0d6){if(_0x2e2177[_0x2972f0(0x3c1)]('RkkYr',_0x2972f0(0x605))){_0x17c0d6['push'](performance['now']());if(_0x17c0d6[_0x2972f0(0x422)+'h']>0x9*-0x11+0x20ac+0x1feb*-0x1)_0x17c0d6['shift']();}else try{_0x4d2d2c[_0x2972f0(0x3cf)+'em'](_0x2972f0(0x2ce)+_0x2972f0(0x520)+'r.v1',_0x236400['strin'+_0x2972f0(0x197)](_0x29e1bc));}catch(_0x18bcef){}}}function _0x3bf12b(_0x1dcd57){var _0x2fd3f9=_0x5c9e99;if(!_0x1dcd57['__sak'+'ura'])_0x4a440d['delet'+'e'](_0x2e2177['BuisB']+(_0x1dcd57[_0x2fd3f9(0x4e7)+'n']+(-0x4*0x9b3+0x22f*0x11+0x1ae)));}function _0x498c25(){_0x4a440d['clear']();}function _0x2a70ee(){var _0x4a24fe=_0x5c9e99;if(_0x5e6766)return;_0x5e6766=!![],window[_0x4a24fe(0x54b)+_0x4a24fe(0x650)+_0x4a24fe(0x34b)+'r'](_0x2e2177['QzZog'],_0x2d66ae,!![]),window[_0x4a24fe(0x54b)+_0x4a24fe(0x650)+'stene'+'r'](_0x4a24fe(0x318),_0x5eec13,!![]),window['addEv'+_0x4a24fe(0x650)+_0x4a24fe(0x34b)+'r'](_0x4a24fe(0x61f)+_0x4a24fe(0x37d),_0x3c3ac8,!![]),window['addEv'+_0x4a24fe(0x650)+_0x4a24fe(0x34b)+'r'](_0x2e2177['UrmSI'],_0x3bf12b,!![]),window[_0x4a24fe(0x54b)+'entLi'+_0x4a24fe(0x34b)+'r'](_0x4a24fe(0x44c),_0x498c25);}function _0x136972(_0x1d7387){var _0x3b3674=_0x5c9e99;if(_0x2e2177['LVwkG']!==_0x3b3674(0x246))for(var _0x15d3ca of[_0x2e2177[_0x3b3674(0x27e)],_0x3b3674(0x390)+_0x3b3674(0x5d6)+'8x90-'+_0x3b3674(0x4b0)+'t',_0x3b3674(0x390)+'io_30'+_0x3b3674(0x55f)+_0x3b3674(0x462)+'nt',_0x2e2177['HStox']]){var _0x5650fb=_0x2391dc[_0x3b3674(0x402)+'ement'+'ById'](_0x15d3ca);if(_0x5650fb&&_0x15d3ca===_0x2e2177[_0x3b3674(0x626)]){var _0xac9f4a=_0x5650fb['child'+'ren'];for(var _0x494c1e=-0x46*-0x20+0x2*0x1d9+-0xc72;_0x2e2177['eWEcg'](_0x494c1e,_0xac9f4a['lengt'+'h']);_0x494c1e++){if(_0xac9f4a[_0x494c1e]['id']&&_0x2e2177[_0x3b3674(0x3c1)](_0xac9f4a[_0x494c1e]['id']['index'+'Of'](_0x3b3674(0x390)+'io_'),-0x74c*-0x1+0x1*-0x2669+0x1f1d))_0xac9f4a[_0x494c1e][_0x3b3674(0x1e4)][_0x3b3674(0x3b2)+'ay']=_0x2e2177[_0x3b3674(0x2c9)];}}else{if(_0x5650fb)_0x5650fb[_0x3b3674(0x1e4)][_0x3b3674(0x3b2)+'ay']=_0x3b3674(0x50c);}}else{var _0x381b33=_0x12c79f[_0x1d7387]||[],_0x5a073c=performance['now']();while(_0x381b33[_0x3b3674(0x422)+'h']&&_0x2e2177[_0x3b3674(0xf5)](_0x5a073c,_0x381b33[0x1b78+-0x1f7*0x6+-0x1*0xfae])>0x1c65+0x10*0x264+-0x3ebd)_0x381b33['shift']();return _0x381b33[_0x3b3674(0x422)+'h'];}}function _0x538d9c(_0x12eed0){var _0x406f57=_0x5c9e99;if(document['body']&&(document[_0x406f57(0x376)+_0x406f57(0x1aa)]===_0x406f57(0x35c)+_0x406f57(0xf7)+'e'||_0x2e2177[_0x406f57(0x3c1)](document['ready'+_0x406f57(0x1aa)],_0x406f57(0x2cb)+'ete')))_0x2e2177[_0x406f57(0x136)](_0x12eed0);else document[_0x406f57(0x54b)+_0x406f57(0x650)+'stene'+'r'](_0x2e2177[_0x406f57(0x30c)],_0x12eed0,{'once':!![]});}_0x538d9c(()=>{var _0x84837d=_0x5c9e99,_0x361784={'oSRPt':'fulls'+_0x84837d(0x231)+_0x84837d(0xf6)+'s','zJOUT':_0x2e2177[_0x84837d(0x2c9)],'wPHqs':'IHJIE','buUda':function(_0x40cd65,_0x1ebf32){return _0x40cd65!==_0x1ebf32;},'IRIgO':'CANVA'+'S','bdtFm':_0x84837d(0x5d0)+_0x84837d(0x53f)+_0x84837d(0x10b)+'|5','SSSyc':function(_0x44f222,_0x2c8647){var _0x2a5dd4=_0x84837d;return _0x2e2177[_0x2a5dd4(0x545)](_0x44f222,_0x2c8647);},'GysEi':_0x2e2177['Wlifu'],'ktmOp':_0x84837d(0x167)+_0x84837d(0x2de)+_0x84837d(0x3de)+_0x84837d(0x495)+')','nQZpA':function(_0x512633,_0x322ce4){return _0x512633+_0x322ce4;},'LrAqd':function(_0xe30726,_0x64e42b){return _0xe30726/_0x64e42b;},'GUyPI':function(_0x2ddd76,_0x22579f){return _0x2ddd76*_0x22579f;},'CFzqz':_0x84837d(0x51a),'etZQI':function(_0x9c1ed7,_0x6d1fa){return _0x9c1ed7+_0x6d1fa;},'kdslJ':function(_0x15ba86,_0x3fee14){var _0x541519=_0x84837d;return _0x2e2177[_0x541519(0x40c)](_0x15ba86,_0x3fee14);},'GyjBV':_0x84837d(0x167)+_0x84837d(0x581)+_0x84837d(0x17a)+_0x84837d(0x29d)+'5)','EfjkW':function(_0x31492b,_0x35b252){return _0x31492b-_0x35b252;},'Fcwmk':function(_0x510ea3,_0x5e5ef5){return _0x2e2177['zMWpo'](_0x510ea3,_0x5e5ef5);},'sYQXr':function(_0x461935,_0x30f511){return _0x461935-_0x30f511;},'TfLhO':function(_0x44d40a,_0x500762){var _0x79507=_0x84837d;return _0x2e2177[_0x79507(0x2d8)](_0x44d40a,_0x500762);},'VvkWE':function(_0xe7aaaa,_0x154a90){var _0x32a388=_0x84837d;return _0x2e2177[_0x32a388(0xf5)](_0xe7aaaa,_0x154a90);},'iJSSM':function(_0x218f1a,_0x42da34){return _0x218f1a(_0x42da34);},'Jpqfq':function(_0x2e2e39,_0x3dbce3){return _0x2e2e39-_0x3dbce3;},'eHRcM':_0x2e2177['ckpjE'],'BmpxQ':_0x84837d(0x425)+_0x84837d(0x468)+'7|1|2'+'|6|9','WanSG':function(_0x509340,_0x5b2713,_0x4314bd){return _0x509340(_0x5b2713,_0x4314bd);},'HIVmH':_0x2e2177['SGmdJ'],'tiUjL':_0x2e2177[_0x84837d(0x1fd)],'ObEgR':'top','nyAwA':_0x84837d(0x497),'qwiKC':_0x2e2177['tomqH'],'aLmEp':_0x2e2177['oSvwN'],'zEBrt':_0x2e2177[_0x84837d(0x4b2)],'TCIsi':_0x84837d(0x221)+'l','pqyNI':_0x2e2177[_0x84837d(0x1bc)],'vYKMo':'sk-la'+'bel','wZjXK':'small','YwFcw':function(_0xadbb17,_0x46a5e8){return _0xadbb17-_0x46a5e8;},'nxZfi':function(_0x22e58f){return _0x22e58f();},'yUseD':_0x2e2177[_0x84837d(0x58b)],'tIzOv':function(_0x3be819){return _0x3be819();},'zjENx':function(_0x32b63a){return _0x32b63a();},'TPRym':function(_0x1f0907){var _0x5aab2e=_0x84837d;return _0x2e2177[_0x5aab2e(0xf3)](_0x1f0907);},'FeBci':function(_0x3b5b78){return _0x3b5b78();},'tKoOW':function(_0x24a0c8){return _0x24a0c8();},'dXhSK':function(_0x56bdb2){return _0x56bdb2();},'azxck':'LgEAc','yHPuy':_0x2e2177['OGPgH'],'LXQsB':_0x84837d(0x20d),'euqKf':function(_0x57fce5,_0x4489e7){return _0x57fce5===_0x4489e7;},'daJaE':function(_0x1bf13c){return _0x1bf13c();},'LPmzv':_0x2e2177['bsYyP'],'rBWHp':function(_0x23bab6,_0x208c74,_0x414909,_0x31c37a,_0x2a5a9b,_0x4358e5){return _0x23bab6(_0x208c74,_0x414909,_0x31c37a,_0x2a5a9b,_0x4358e5);},'OdSPI':_0x84837d(0x264)+_0x84837d(0x2bd),'iVbfw':function(_0x1fff17,_0x5580df,_0x1e8b11,_0x1ec001,_0x339261,_0x2e66f5){return _0x1fff17(_0x5580df,_0x1e8b11,_0x1ec001,_0x339261,_0x2e66f5);},'rNZCV':'Rapid'+_0x84837d(0x1df)+_0x84837d(0x49a)+']','OXuop':_0x84837d(0x3d5)+'e\x20[EX'+'P]','yKVZI':'Overw'+_0x84837d(0x25f)+'\x20Over'+'tideW'+_0x84837d(0x11b)+_0x84837d(0x13e)+_0x84837d(0x550)+_0x84837d(0x456)+_0x84837d(0x1e6)+_0x84837d(0x3ad)+'serve'+_0x84837d(0x37a)+'idate'+'s.','HyJmp':_0x2e2177['ZrfTn'],'IGLLx':function(_0x6deda7,_0x27e314,_0x1d9d94,_0x17d3a7,_0x3b9e0d,_0x168e93){return _0x2e2177['NIGyM'](_0x6deda7,_0x27e314,_0x1d9d94,_0x17d3a7,_0x3b9e0d,_0x168e93);},'bpnoi':_0x84837d(0x301)+_0x84837d(0x1e8)+_0x84837d(0x223)+'EXP]','CaRGW':function(_0x2f4feb,_0x53eb48,_0x4cd15d,_0x5bad75,_0x1ba42d,_0x371528){return _0x2f4feb(_0x53eb48,_0x4cd15d,_0x5bad75,_0x1ba42d,_0x371528);},'vtFEa':_0x2e2177[_0x84837d(0x275)],'dDdMb':_0x84837d(0x202)+_0x84837d(0x49f)+_0x84837d(0x565)+'\x20Move'+_0x84837d(0x3f0)+'speed'+_0x84837d(0x1de)+_0x84837d(0x20f)+_0x84837d(0x1db)+_0x84837d(0x3dc)+_0x84837d(0x2e1)+'.','boMTa':function(_0x475c65,_0x10c0b6,_0x14953b,_0x12fd03){return _0x475c65(_0x10c0b6,_0x14953b,_0x12fd03);},'iEAVF':_0x2e2177[_0x84837d(0x611)],'BcolI':function(_0x1abfe2,_0x5820b6,_0x551f84,_0x52f86b,_0x424f60,_0x132fe4){return _0x1abfe2(_0x5820b6,_0x551f84,_0x52f86b,_0x424f60,_0x132fe4);},'mwizD':_0x84837d(0x5f3)+'%','CpISl':function(_0xa4c641,_0xbf669b,_0x2dcd7d,_0x28ed1e){var _0x4b89d6=_0x84837d;return _0x2e2177[_0x4b89d6(0x190)](_0xa4c641,_0xbf669b,_0x2dcd7d,_0x28ed1e);},'xFXLd':'Gravi'+'ty\x20%','GRFRy':'lower'+_0x84837d(0x436)+_0x84837d(0x1fb),'odqNF':_0x84837d(0x36e)+_0x84837d(0x4d8),'hWlmY':_0x2e2177['RsXeg'],'psgQc':function(_0x143a23,_0x58a776){return _0x143a23===_0x58a776;},'WqsPE':_0x2e2177[_0x84837d(0x2a0)],'SrcaF':_0x2e2177['IcTJW'],'wtNVd':function(_0xd204a8,_0x403fc7,_0xe1375d,_0x43653e){return _0xd204a8(_0x403fc7,_0xe1375d,_0x43653e);},'dqKGG':function(_0x129063,_0x5f03b3,_0xb1237b){return _0x2e2177['LuOgA'](_0x129063,_0x5f03b3,_0xb1237b);},'alrYr':_0x2e2177[_0x84837d(0x139)],'cowVf':function(_0x5150a6,_0x508114,_0x3b4d9c,_0x393367){return _0x5150a6(_0x508114,_0x3b4d9c,_0x393367);},'VNmRK':_0x84837d(0x660),'VTuKS':_0x84837d(0x55e)+'ers','pIyTg':_0x2e2177[_0x84837d(0x64a)],'oADLd':_0x2e2177['kdjFW'],'qufiG':'Hides'+'\x20kour'+'-io_*'+'\x20bann'+_0x84837d(0x4f4)+'ots.','WVAPC':_0x2e2177[_0x84837d(0x157)],'KKcjM':_0x84837d(0x1a8)+'Mode\x20'+'(over'+'lay\x20o'+'nly)','zNCTx':function(_0x1abfb1,_0x44a820){return _0x2e2177['FQGVq'](_0x1abfb1,_0x44a820);},'VCwNl':_0x84837d(0x176)+'risk\x20'+_0x84837d(0x43d)+_0x84837d(0x2b0),'GYheq':_0x84837d(0x14b)+_0x84837d(0x5d5)+_0x84837d(0x59b)+_0x84837d(0x30f)+_0x84837d(0x4ba),'TXCvT':function(_0x4d855c,_0x4c5be7,_0xd39b4c){return _0x4d855c(_0x4c5be7,_0xd39b4c);},'IrNHr':function(_0x2d9205,_0x2a6707,_0x5df1fa,_0x45cde1){var _0x1d5252=_0x84837d;return _0x2e2177[_0x1d5252(0x2fa)](_0x2d9205,_0x2a6707,_0x5df1fa,_0x45cde1);},'eObJz':_0x84837d(0x59e)+'re\x20(S'+_0x84837d(0x5fe)+_0x84837d(0x3ba)+_0x84837d(0x4a7)+'\x20IsGr'+_0x84837d(0x219)+'d)','pNVWW':'no\x20ch'+_0x84837d(0x4cf)+_0x84837d(0x5d1)+_0x84837d(0x59c)+'ut\x20th'+'is','GRCLn':_0x2e2177[_0x84837d(0x52f)],'lzGRs':function(_0x529cb4,_0x42d42d,_0xecd9ab,_0x53d5fe,_0x1eec3c,_0x1da2b5){return _0x2e2177['NIGyM'](_0x529cb4,_0x42d42d,_0xecd9ab,_0x53d5fe,_0x1eec3c,_0x1da2b5);},'AHVnA':_0x2e2177['aksGK'],'fRMMZ':function(_0x2e4fe8,_0x41f2f3,_0x4e57a7,_0x20272b){var _0x1fcd50=_0x84837d;return _0x2e2177[_0x1fcd50(0x2fa)](_0x2e4fe8,_0x41f2f3,_0x4e57a7,_0x20272b);},'UPgCP':'Wipe\x20'+'my\x20se'+'tting'+'s','KLeRo':_0x84837d(0x333),'WCKpE':_0x2e2177[_0x84837d(0x2b5)],'fHpSr':_0x84837d(0x30e),'meauM':function(_0x46fd02,_0xdb78de){return _0x2e2177['hyKLg'](_0x46fd02,_0xdb78de);},'QgNac':function(_0x30a259,_0x49ddac){return _0x30a259===_0x49ddac;},'GsiZb':_0x2e2177['oYRub'],'npMrB':_0x84837d(0x2e0)+_0x84837d(0x3ee),'XrlXm':_0x2e2177[_0x84837d(0x529)],'pSwsP':'nav','UHUIW':_0x84837d(0x326)+'de','LVMtk':_0x84837d(0x16e)+'go','zqPpo':'<svg\x20'+_0x84837d(0x441)+'ox=\x220'+_0x84837d(0x191)+_0x84837d(0x53b)+'class'+_0x84837d(0x4de)+_0x84837d(0x50e)+'svg\x22>'+_0x84837d(0x104)+_0x84837d(0x5bb)+_0x84837d(0x13a)+'c-1.5'+_0x84837d(0x618)+'4-4.5'+_0x84837d(0x546)+_0x84837d(0x26d)+_0x84837d(0x383)+_0x84837d(0x3a2)+'\x204-4.'+'5s4\x202'+'\x204\x204.'+_0x84837d(0x29a)+'-2.5\x20'+'5-4\x207'+_0x84837d(0x15b)+_0x84837d(0x1be)+'\x22none'+_0x84837d(0x3fd)+_0x84837d(0x300)+_0x84837d(0x106)+'9d\x22\x20s'+'troke'+_0x84837d(0x4c4)+'h=\x222\x22'+'\x20stro'+_0x84837d(0x1e9)+_0x84837d(0x576)+_0x84837d(0x536)+_0x84837d(0x2f6)+_0x84837d(0x61b)+_0x84837d(0x2e6)+_0x84837d(0x356)+'\x22roun'+'d\x22/><'+_0x84837d(0x361)+_0x84837d(0x4d5)+'\x2212\x22\x20'+'cy=\x221'+_0x84837d(0x430)+'\x221.5\x22'+'\x20fill'+_0x84837d(0x4f1)+'6b9d\x22'+'/></s'+_0x84837d(0x331),'MUNTl':_0x2e2177[_0x84837d(0x30d)],'Xqogt':'mn-h','IxJGs':_0x2e2177['EHOZN'],'dnSzr':_0x84837d(0x48c)+'b','avUiC':'kours'+_0x84837d(0x666)+_0x84837d(0x307)+'enu','jKdWt':_0x84837d(0x4e7)+'n','PqXsU':_0x84837d(0x145)+_0x84837d(0x642),'JXjor':_0x84837d(0x280),'mOsBL':_0x2e2177[_0x84837d(0x12a)],'kvqJW':_0x84837d(0x21f)+'l>','xohMJ':_0x2e2177['vdiKF'],'yVGtO':function(_0xe35bab){return _0xe35bab();}};_0x27ecfa[_0x84837d(0x311)+'ck']&&setInterval(()=>{var _0x1f4efb=_0x84837d;try{for(var _0x3b34d3 of['kour-'+_0x1f4efb(0x646)+_0x1f4efb(0x5de)+'-pare'+'nt','kour-'+_0x1f4efb(0x5d6)+'8x90-'+'paren'+'t','kour-'+_0x1f4efb(0x646)+'0x600'+'-pare'+'nt',_0x361784[_0x1f4efb(0x5fa)]]){if('lHShq'===_0x1f4efb(0x41b)){var _0x158091=document[_0x1f4efb(0x402)+'ement'+_0x1f4efb(0x540)](_0x3b34d3);if(_0x158091&&_0x3b34d3===_0x1f4efb(0x322)+'creen'+_0x1f4efb(0xf6)+'s'){var _0x5ea4bd=_0x158091[_0x1f4efb(0x314)+_0x1f4efb(0x3f5)];for(var _0x4625fa=-0x25*-0xed+-0x1332+-0xf0f;_0x4625fa<_0x5ea4bd['lengt'+'h'];_0x4625fa++){if(_0x5ea4bd[_0x4625fa]['id']&&_0x5ea4bd[_0x4625fa]['id']['index'+'Of'](_0x1f4efb(0x390)+'io_')===-0x3b2+-0x248d+0x283f*0x1)_0x5ea4bd[_0x4625fa][_0x1f4efb(0x1e4)][_0x1f4efb(0x3b2)+'ay']=_0x361784['zJOUT'];}}else{if(_0x158091)_0x158091[_0x1f4efb(0x1e4)][_0x1f4efb(0x3b2)+'ay']=_0x361784[_0x1f4efb(0x1ee)];}}else try{_0xddba3b[_0x1f4efb(0x3cf)+'em']('sakur'+'a.kou'+_0x1f4efb(0x452)+'v1',_0x2ba893['strin'+'gify'](_0x2b4fd8));}catch(_0x1cb7fd){}}}catch(_0x7f5736){}},-0x1321+-0x5c2+0x20b3);var _0x526dba=document[_0x84837d(0x37e)+'eElem'+'ent'](_0x2e2177['sqrpH']);_0x526dba['style'][_0x84837d(0x59d)+'xt']='posit'+_0x84837d(0x52e)+_0x84837d(0x240)+_0x84837d(0x606)+_0x84837d(0x52b)+'dth:1'+_0x84837d(0x18d)+_0x84837d(0x39e)+'t:100'+_0x84837d(0x3f8)+_0x84837d(0x3e5)+_0x84837d(0x637)+_0x84837d(0x102)+'6;poi'+'nter-'+'event'+_0x84837d(0x670)+'e';var _0x5a3edc=_0x526dba[_0x84837d(0x3dd)+_0x84837d(0x47e)]('2d');function _0x4c425a(){var _0x5d0340=_0x84837d,_0x1a47fb={'Lvutb':_0x5d0340(0x50c)};if('IHJIE'===_0x361784[_0x5d0340(0x5e4)])try{var _0x120883=document[_0x5d0340(0x322)+'creen'+_0x5d0340(0x183)+'nt'],_0x2a35a0=_0x120883&&_0x361784['buUda'](_0x120883['tagNa'+'me'],_0x361784[_0x5d0340(0x1b3)])?_0x120883:document['body']||document[_0x5d0340(0x549)+'entEl'+_0x5d0340(0x209)];if(_0x526dba['paren'+_0x5d0340(0x2ab)]!==_0x2a35a0)_0x2a35a0['appen'+'dChil'+'d'](_0x526dba);}catch(_0x2e81d1){try{document[_0x5d0340(0x61a)][_0x5d0340(0x583)+_0x5d0340(0x26f)+'d'](_0x526dba);}catch(_0x124b57){}}else{var _0x5611d6=_0x3b48f7[_0x5d0340(0x314)+_0x5d0340(0x3f5)];for(var _0x1f3f90=0x1a9+0x1*-0x931+-0x1e2*-0x4;_0x1f3f90<_0x5611d6[_0x5d0340(0x422)+'h'];_0x1f3f90++){if(_0x5611d6[_0x1f3f90]['id']&&_0x5611d6[_0x1f3f90]['id'][_0x5d0340(0x3e5)+'Of'](_0x5d0340(0x390)+_0x5d0340(0x170))===0x29*-0x16+0x13b1+0x1*-0x102b)_0x5611d6[_0x1f3f90][_0x5d0340(0x1e4)]['displ'+'ay']=_0x1a47fb[_0x5d0340(0x118)];}}}var _0x432522={'w':0x0,'h':0x0,'dpr':0x0};function _0x3d681d(){var _0x271272=_0x84837d,_0x398034=_0x361784[_0x271272(0x3e7)][_0x271272(0x140)]('|'),_0x555ba1=0x104*-0xe+0x116e+0x89*-0x6;while(!![]){switch(_0x398034[_0x555ba1++]){case'0':var _0x7bc5da=window[_0x271272(0x396)+_0x271272(0x18c)+'lRati'+'o']||-0xe58+-0x2477+0x32d0;continue;case'1':_0x432522['h']=_0x50d0a1;continue;case'2':var _0x170054=window[_0x271272(0x2d2)+_0x271272(0x511)],_0x50d0a1=window['inner'+_0x271272(0x499)+'t'];continue;case'3':_0x526dba[_0x271272(0x62d)]=Math['round'](_0x361784[_0x271272(0x310)](_0x170054,_0x7bc5da));continue;case'4':_0x432522['w']=_0x170054;continue;case'5':_0x5a3edc[_0x271272(0x66f)+'ansfo'+'rm'](_0x7bc5da,-0x1479+0x25c8+0x1*-0x114f,-0x2665+0x1900+0xd65,_0x7bc5da,0x2c3*-0x7+-0x47d+-0x17d2*-0x1,-0xce6+-0x7cd*0x5+0x33e7);continue;case'6':_0x432522[_0x271272(0x659)]=_0x7bc5da;continue;case'7':if(_0x170054===_0x432522['w']&&_0x50d0a1===_0x432522['h']&&_0x7bc5da===_0x432522['dpr'])return;continue;case'8':_0x526dba['heigh'+'t']=Math['round'](_0x50d0a1*_0x7bc5da);continue;}break;}}var _0x58093f=0x4*-0x695+-0x1*-0x166d+-0x1*-0x3e7,_0xbe71db=performance[_0x84837d(0x57a)](),_0x53f2f5=-0x37*0x7f+0x487+0x16c2*0x1;function _0x3cccf3(_0x418e5f){var _0x5a753f=_0x84837d,_0xd747bd=('11|7|'+_0x5a753f(0x2b6)+_0x5a753f(0x5a6)+'5|4|6'+_0x5a753f(0x254)+_0x5a753f(0x317)+'9')[_0x5a753f(0x140)]('|'),_0x9c7985=-0x1*-0x25ce+-0xb15*0x1+0x1*-0x1ab9;while(!![]){switch(_0xd747bd[_0x9c7985++]){case'0':var _0x18c8a7=_0x27ecfa[_0x5a753f(0x4e5)];continue;case'1':_0x2e2177[_0x5a753f(0x148)](_0x20ab28,'LMB','mouse'+'1',_0x571ce4,_0xca1c5c,_0x12e244,_0x373ee0,_0x27ecfa['ksCps']?_0x136972(-0xa12+-0x1ff9+0x2a0c)+_0x5a753f(0x162):'');continue;case'2':var _0x12e244=_0x2e2177['YPDox'](_0x1c0bcb,_0x56c202)/(-0xaa9*0x2+-0x21d3+0x3727),_0xca1c5c=_0x94ad6e+(_0x373ee0+_0x56c202)*(0x2ea*0xb+-0x340+0x1ccc*-0x1);continue;case'3':_0x20ab28(_0x2e2177[_0x5a753f(0x513)],'mouse'+'3',_0x2e2177[_0x5a753f(0x573)](_0x571ce4+_0x12e244,_0x56c202),_0xca1c5c,_0x12e244,_0x373ee0,_0x27ecfa[_0x5a753f(0x2af)]?_0x2e2177['ozlhP'](_0x2e2177['byMhn'](_0x136972,-0x59c+-0x1df+0x2*0x3bf),_0x2e2177[_0x5a753f(0x55d)]):'');continue;case'4':_0x20ab28('A',_0x2e2177['XMWEc'],_0x571ce4,_0x2e2177[_0x5a753f(0x39a)](_0x94ad6e+_0x373ee0,_0x56c202),_0x373ee0,_0x373ee0);continue;case'5':_0x20ab28('W','KeyW',_0x2e2177[_0x5a753f(0x39a)](_0x2e2177['ozlhP'](_0x571ce4,_0x373ee0),_0x56c202),_0x94ad6e,_0x373ee0,_0x373ee0);continue;case'6':_0x2e2177[_0x5a753f(0x205)](_0x20ab28,'S','KeyS',_0x571ce4+_0x373ee0+_0x56c202,_0x2e2177['fJLfV'](_0x94ad6e,_0x373ee0)+_0x56c202,_0x373ee0,_0x373ee0);continue;case'7':var _0x1c0bcb=_0x2e2177['rqFqX'](_0x373ee0,-0x61*0x3f+-0x242+-0x1c*-0xef)+_0x2e2177[_0x5a753f(0x273)](_0x56c202,0xb*0x367+0xb5b+-0x6*0x821),_0x14ed73=_0x2e2177['pTscG'](_0x373ee0,-0x6f1*0x1+-0x57d+0x1*0xc71)+_0x2e2177['SNWzf'](_0x56c202,0x174c+-0x2679+-0xd*-0x12b);continue;case'8':var _0x571ce4=_0x18c8a7==='br'?_0x418e5f['right']-(0xfb*0x2+0x13bb+-0x15a1)-_0x1c0bcb:_0x418e5f['left']+(0x1c2b+0x1042+-0x1*0x2c5d);continue;case'9':_0x20ab28('',_0x2e2177[_0x5a753f(0x491)],_0x571ce4,_0xca1c5c+_0x373ee0+_0x56c202,_0x1c0bcb,_0x2e2177['cOGix'](_0x373ee0,0x23fa+-0x875+0x1b85*-0x1+0.45));continue;case'10':var _0x20ab28=(_0x1076f7,_0x473027,_0x4a87e9,_0x9081f,_0x40b071,_0x97d32e,_0x26f419)=>{var _0x1b0b0c=_0x5a753f,_0x14e363=(_0x1b0b0c(0x2d3)+_0x1b0b0c(0x105)+_0x1b0b0c(0x288)+'14|10'+_0x1b0b0c(0x33c)+'3|8|4'+'|11|5'+'|9|15')['split']('|'),_0x129e9f=-0x9ae+0x1*-0x1525+0x1*0x1ed3;while(!![]){switch(_0x14e363[_0x129e9f++]){case'0':_0x5a3edc[_0x1b0b0c(0x339)+_0x1b0b0c(0x5d3)]();continue;case'1':var _0x166d86=_0x4a440d[_0x1b0b0c(0x543)](_0x473027);continue;case'2':_0x5a3edc['strok'+'e']();continue;case'3':_0x5a3edc['fillS'+_0x1b0b0c(0x216)]=_0x166d86?_0x361784['GysEi']:_0x361784[_0x1b0b0c(0x463)];continue;case'4':_0x5a3edc['textB'+_0x1b0b0c(0x46a)+'ne']=_0x1b0b0c(0x5b5)+'e';continue;case'5':_0x5a3edc['fillT'+'ext'](_0x1076f7,_0x361784[_0x1b0b0c(0x504)](_0x4a87e9,_0x361784[_0x1b0b0c(0x1af)](_0x40b071,-0x1*-0x56c+-0xf66+-0x4*-0x27f)),_0x9081f+_0x97d32e/(0x115c+-0x230e+-0x11b4*-0x1)-(_0x26f419?_0x361784['GUyPI'](-0x2635+-0x2*0x7b5+0x35a4,_0x209333):-0x1*0x40e+0x1b7*0xd+-0x123d));continue;case'6':_0x5a3edc[_0x1b0b0c(0x337)]();continue;case'7':_0x166d86&&(_0x5a3edc['shado'+_0x1b0b0c(0x29e)+'r']=_0x47bcc3,_0x5a3edc[_0x1b0b0c(0x45b)+'wBlur']=0xb9b+0xee6+-0x1a73,_0x5a3edc[_0x1b0b0c(0x337)](),_0x5a3edc['shado'+_0x1b0b0c(0x265)]=-0x1059*-0x1+-0x25cb+-0xf*-0x16e);continue;case'8':_0x5a3edc['textA'+_0x1b0b0c(0x38f)]=_0x1b0b0c(0x461)+'r';continue;case'9':_0x26f419&&(_0x5a3edc[_0x1b0b0c(0x365)]=_0x361784['CFzqz']+Math['round']((0x1c3d+-0x53f*0x1+-0x16f5)*_0x209333)+(_0x1b0b0c(0x65a)+_0x1b0b0c(0x3a5)+_0x1b0b0c(0x589)+'f,sys'+_0x1b0b0c(0x195)+'i,san'+'s-ser'+'if'),_0x5a3edc[_0x1b0b0c(0x344)+'tyle']=_0x166d86?_0x361784[_0x1b0b0c(0x612)]:'rgba('+_0x1b0b0c(0x2de)+_0x1b0b0c(0x3de)+'0,0.5'+'5)',_0x5a3edc[_0x1b0b0c(0x30b)+'ext'](_0x26f419,_0x361784[_0x1b0b0c(0x1b4)](_0x4a87e9,_0x40b071/(-0x1*0x1f12+-0xf*-0x29+0x1cad)),_0x361784['etZQI'](_0x9081f+_0x97d32e/(0x720+-0x15*0xe7+0xbd5),(-0x15c9+-0x2*-0xa6e+0xf5)*_0x209333)));continue;case'10':_0x5a3edc['strok'+'eStyl'+'e']=_0x166d86?_0x3efed8:'rgba('+_0x1b0b0c(0x581)+_0x1b0b0c(0x17a)+_0x1b0b0c(0x258)+'5)';continue;case'11':_0x5a3edc['font']=_0x361784[_0x1b0b0c(0x1b5)](_0x1b0b0c(0x30e)+Math[_0x1b0b0c(0x2aa)](_0x361784[_0x1b0b0c(0x310)](-0x21e8+-0x1*0x10a3+0x3297,_0x209333)),_0x1b0b0c(0x65a)+_0x1b0b0c(0x3a5)+_0x1b0b0c(0x589)+_0x1b0b0c(0x3ac)+_0x1b0b0c(0x195)+_0x1b0b0c(0xfa)+_0x1b0b0c(0x3b1)+'if');continue;case'12':_0x5a3edc[_0x1b0b0c(0x189)]();continue;case'13':if(_0x5a3edc['round'+_0x1b0b0c(0x44f)])_0x5a3edc[_0x1b0b0c(0x2aa)+'Rect'](_0x4a87e9,_0x9081f,_0x40b071,_0x97d32e,(-0x1729+0x348+-0x7*-0x2d8)*_0x209333);else _0x5a3edc[_0x1b0b0c(0x1e0)](_0x4a87e9,_0x9081f,_0x40b071,_0x97d32e);continue;case'14':_0x5a3edc[_0x1b0b0c(0x113)+_0x1b0b0c(0x336)]=-0x1aba+0x3*-0x71d+0x3012;continue;case'15':_0x5a3edc['resto'+'re']();continue;case'16':_0x5a3edc[_0x1b0b0c(0x344)+_0x1b0b0c(0x216)]=_0x166d86?_0x361784[_0x1b0b0c(0x1ff)]:_0x1b0b0c(0x167)+_0x1b0b0c(0x5a0)+'16,0.'+'7)';continue;}break;}};continue;case'11':var _0x209333=_0x2e2177['nLhcY'](Number,_0x27ecfa[_0x5a753f(0x4a8)+'le'])||-0x24dd+0x124*-0x17+0x3f1a,_0x373ee0=(0x1b78+0x1ccc+-0x3822)*_0x209333,_0x56c202=_0x2e2177['SNWzf'](0x1d*0x89+0x2*0x60b+-0x1b97,_0x209333);continue;case'12':_0x20ab28('D',_0x5a753f(0x40b),_0x571ce4+_0x2e2177[_0x5a753f(0x269)](_0x2e2177['xxcjU'](_0x373ee0,_0x56c202),-0x1*0x1b7a+0x30c*0x4+0xf4c),_0x2e2177['SaXEH'](_0x94ad6e,_0x373ee0)+_0x56c202,_0x373ee0,_0x373ee0);continue;case'13':var _0x94ad6e=_0x18c8a7==='ml'?_0x418e5f[_0x5a753f(0x525)]+_0x2e2177[_0x5a753f(0x4cd)](_0x418e5f[_0x5a753f(0x39e)+'t'],-0x766*0x3+-0x2*0x543+0x76*0x47)-_0x14ed73/(0x1fca+0x9a3+-0x296b):_0x418e5f['botto'+'m']-_0x14ed73-(_0x18c8a7==='bl'?0x1f*0x2c+0x18a5+-0x1d99:0x23*-0x13+-0x1adc+0x1e0b);continue;}break;}}function _0x4e763c(_0x3d1f22){var _0x500156=_0x84837d,_0x211fc7=(_0x500156(0x533)+_0x500156(0x521)+_0x500156(0x4af)+'4|11|'+_0x500156(0x17b)+_0x500156(0x4e4)+_0x500156(0x56d)+'20|16'+_0x500156(0x645)+_0x500156(0x4bd)+'17|8|'+'21|6|'+'3')['split']('|'),_0x1d1870=0x2e*-0x8f+0xe99+0xb19;while(!![]){switch(_0x211fc7[_0x1d1870++]){case'0':_0x5a3edc['begin'+_0x500156(0x5d3)]();continue;case'1':_0x5a3edc[_0x500156(0x45b)+_0x500156(0x265)]=0xf1+0x1*-0x2683+0x2598;continue;case'2':_0x5a3edc[_0x500156(0x25e)+'o'](_0x2d376a,_0x361784[_0x500156(0x548)](_0x290f85,_0x2df6a5));continue;case'3':_0x5a3edc[_0x500156(0x3c0)+'re']();continue;case'4':_0x5a3edc[_0x500156(0x109)+_0x500156(0x5cb)+'e']=_0x41df49;continue;case'5':_0x5a3edc['lineT'+'o'](_0x2d376a,_0x361784['Fcwmk'](_0x290f85+_0x2df6a5,_0xbeb55));continue;case'6':_0x5a3edc[_0x500156(0x337)]();continue;case'7':_0x5a3edc[_0x500156(0x45b)+_0x500156(0x29e)+'r']=_0x41df49;continue;case'8':_0x5a3edc[_0x500156(0x339)+_0x500156(0x5d3)]();continue;case'9':_0x5a3edc['moveT'+'o'](_0x2d376a,_0x361784[_0x500156(0x585)](_0x361784['EfjkW'](_0x290f85,_0x2df6a5),_0xbeb55));continue;case'10':_0x5a3edc[_0x500156(0x189)]();continue;case'11':_0x5a3edc[_0x500156(0x113)+_0x500156(0x336)]=Math[_0x500156(0x450)](-0x369+0x3ae*0x4+-0xb4e+0.5,(0x3*0x841+-0x1*0xefc+-0x3d*0x29)*_0x6a379f);continue;case'12':var _0x2df6a5=(-0x14ae+-0x661*-0x4+-0x4d0)*_0x6a379f,_0xbeb55=(-0x1*0x1435+-0xc3c+0xa3*0x33)*_0x6a379f;continue;case'13':var _0x2d376a=_0x361784[_0x500156(0x631)](_0x3d1f22[_0x500156(0x62d)],-0x53*-0x64+-0xe3*0x3+-0x9eb*0x3),_0x290f85=_0x3d1f22['heigh'+'t']/(-0x103*0x15+-0x182c+0x2d6d);continue;case'14':_0x5a3edc[_0x500156(0x344)+_0x500156(0x216)]=_0x41df49;continue;case'15':_0x5a3edc[_0x500156(0x23e)+'o'](_0x361784['VvkWE'](_0x2d376a,_0x2df6a5)-_0xbeb55,_0x290f85);continue;case'16':_0x5a3edc['lineT'+'o'](_0x361784['nQZpA'](_0x2d376a+_0x2df6a5,_0xbeb55),_0x290f85);continue;case'17':_0x5a3edc['strok'+'e']();continue;case'18':_0x5a3edc['moveT'+'o'](_0x2d376a,_0x361784['kdslJ'](_0x290f85,_0x2df6a5));continue;case'19':var _0x6a379f=_0x361784['iJSSM'](Number,_0x27ecfa[_0x500156(0x4be)+'e'])||-0xb3d+-0x1766+0x22a4;continue;case'20':_0x5a3edc['moveT'+'o'](_0x2d376a+_0x2df6a5,_0x290f85);continue;case'21':_0x5a3edc['arc'](_0x2d376a,_0x290f85,(-0x255*-0x6+-0x575*-0x1+0x83*-0x26+0.6000000000000001)*_0x6a379f,-0x10*0xe5+-0x2*-0x337+0x7e2,_0x361784['SSSyc'](Math['PI'],0x173*-0x9+-0x1a55+0x2*0x13b1));continue;case'22':var _0x41df49=/^#[0-9a-f]{6}$/i['test'](_0x27ecfa[_0x500156(0x584)+'or'])?_0x27ecfa['chCol'+'or']:'#ff6b'+'9d';continue;case'23':_0x5a3edc['lineT'+'o'](_0x361784[_0x500156(0x654)](_0x2d376a,_0x2df6a5),_0x290f85);continue;}break;}}function _0x19ef20(_0x7d9976){var _0x133959=_0x84837d,_0x29bd8e=_0x361784['BmpxQ'][_0x133959(0x140)]('|'),_0x2f91df=-0x257c+0xd9e+0x17de;while(!![]){switch(_0x29bd8e[_0x2f91df++]){case'0':_0x5a3edc[_0x133959(0x189)]();continue;case'1':_0x361784['WanSG'](_0x47753d,'SAKUR'+_0x133959(0x2ad)+_0x133959(0x63c)+'1',_0x361784[_0x133959(0x117)]);continue;case'2':if(_0x27ecfa['fps'])_0x47753d(_0x53f2f5+_0x133959(0x4fd));continue;case'3':_0x5a3edc['font']=_0x361784['tiUjL'];continue;case'4':var _0x451a6b=-0x1617+-0x1da7*-0x1+0x764*-0x1,_0x11ee96=0x5c+0x4f*-0x59+0x1b27;continue;case'5':_0x5a3edc[_0x133959(0x2ae)+'aseli'+'ne']=_0x361784['ObEgR'];continue;case'6':if(!_0x362a0f['gameL'+'oaded'])_0x47753d('waiti'+'ng\x20fo'+'r\x20gam'+'e…',_0x133959(0x167)+_0x133959(0x581)+'80,19'+_0x133959(0x1a3)+')');continue;case'7':var _0x47753d=(_0x5d254e,_0x56bcfd)=>{var _0x539f43=_0x133959;_0x5a3edc['fillS'+_0x539f43(0x216)]=_0x56bcfd||_0x361784[_0x539f43(0x42a)],_0x5a3edc['fillT'+_0x539f43(0x332)](_0x5d254e,_0x11ee96,_0x451a6b),_0x451a6b+=0x1*-0x3d9+-0xa53*0x1+0xe3c;};continue;case'8':_0x5a3edc['textA'+_0x133959(0x38f)]=_0x361784['nyAwA'];continue;case'9':_0x5a3edc[_0x133959(0x3c0)+'re']();continue;}break;}}function _0x27948c(){var _0x7b3a1e=_0x84837d;requestAnimationFrame(_0x27948c),_0x58093f++;var _0x509562=performance['now']();_0x509562-_0xbe71db>=0x1155*0x1+-0x1*0xe5+-0x4d4*0x3&&(_0x53f2f5=Math[_0x7b3a1e(0x2aa)](_0x2e2177['QEVsr'](_0x58093f,0x12ee+-0x231f+0x1419)/(_0x509562-_0xbe71db)),_0x58093f=0x1*-0x1ffb+0x11d7+0xe24,_0xbe71db=_0x509562);_0x3d681d(),_0x2e2177[_0x7b3a1e(0x136)](_0x4c425a),_0x5a3edc[_0x7b3a1e(0x575)+_0x7b3a1e(0x44f)](0x1c93+0x4b7+0x1*-0x214a,-0x1d*0x2a+-0x1*0x1c84+0x2146,_0x432522['w'],_0x432522['h']);var _0x5b25f6={'left':0x0,'top':0x0,'right':_0x432522['w'],'bottom':_0x432522['h'],'width':_0x432522['w'],'height':_0x432522['h']};if(_0x27ecfa['cross'+_0x7b3a1e(0x10c)])_0x4e763c(_0x5b25f6);if(_0x27ecfa[_0x7b3a1e(0x582)+_0x7b3a1e(0x4db)])_0x3cccf3(_0x5b25f6);_0x19ef20(_0x5b25f6);}var _0x21ed06=document[_0x84837d(0x37e)+_0x84837d(0x1d2)+_0x84837d(0x285)](_0x2e2177['tSXSL']);_0x21ed06['id']=_0x84837d(0x2ce)+_0x84837d(0x426),_0x21ed06['style'][_0x84837d(0x59d)+'xt']=_0x2e2177[_0x84837d(0x559)];var _0x8e446a=_0x21ed06[_0x84837d(0x4c5)+_0x84837d(0x1ec)+'ow']({'mode':_0x84837d(0x124)});(document[_0x84837d(0x61a)]||document[_0x84837d(0x549)+'entEl'+_0x84837d(0x209)])[_0x84837d(0x583)+_0x84837d(0x26f)+'d'](_0x21ed06);var _0x5d4343=![],_0x361cf5={};try{if(_0x2e2177[_0x84837d(0x2cc)](_0x2e2177['dxCrU'],_0x2e2177[_0x84837d(0x2d0)])){if(_0x176381[_0x515118]&&_0x252f8b[_0x47bc07][_0x84837d(0x41e)+'ed'])_0x172ec9++;}else _0x361cf5=JSON['parse'](localStorage[_0x84837d(0x5b3)+'em'](_0x84837d(0x2ce)+_0x84837d(0x520)+_0x84837d(0x452)+'v1')||'{}');}catch(_0x51ae98){}function _0x38a7f2(){var _0x37dcc6=_0x84837d;try{localStorage['setIt'+'em'](_0x361784[_0x37dcc6(0x1d6)],JSON[_0x37dcc6(0x5dc)+_0x37dcc6(0x197)](_0x361cf5));}catch(_0x2cd59d){}}function _0x21596d(_0x1d0754,_0x21fd6e){var _0x2dceed=_0x84837d,_0x21757a={'GVyBn':function(_0x2195bf,_0x493a61){var _0x3e355c=_0x2152;return _0x2e2177[_0x3e355c(0x1c1)](_0x2195bf,_0x493a61);},'zZoRi':function(_0x10df7f,_0x33a3cb){return _0x10df7f!==_0x33a3cb;},'TAmUU':_0x2e2177[_0x2dceed(0x1f1)],'BPXWs':function(_0x53aeda,_0x9e4ce4){return _0x53aeda(_0x9e4ce4);}},_0x2cbd2b=document[_0x2dceed(0x37e)+_0x2dceed(0x1d2)+'ent'](_0x2dceed(0x4e7)+'n');return _0x2cbd2b[_0x2dceed(0x63d)]='butto'+'n',_0x2cbd2b[_0x2dceed(0x25b)+_0x2dceed(0x4b7)]=_0x2dceed(0x2e8)+_0x2dceed(0x500),_0x2cbd2b[_0x2dceed(0x23c)+_0x2dceed(0x420)+'te'](_0x2dceed(0x17f),_0x2e2177[_0x2dceed(0x586)]),_0x2cbd2b[_0x2dceed(0x23c)+_0x2dceed(0x420)+'te']('aria-'+'check'+'ed',_0x2e2177[_0x2dceed(0x46c)](String,!!_0x1d0754)),_0x2cbd2b[_0x2dceed(0x313)+'ck']=_0x858690=>{var _0x4f3d8d=_0x2dceed;if(_0x21757a['GVyBn'](_0x4f3d8d(0x323),_0x4f3d8d(0x323))){_0x858690[_0x4f3d8d(0x3b3)+'ropag'+'ation']();var _0xa30fe8=_0x21757a['zZoRi'](_0x2cbd2b[_0x4f3d8d(0x20a)+_0x4f3d8d(0x420)+'te'](_0x4f3d8d(0x28e)+_0x4f3d8d(0x2a1)+'ed'),_0x21757a['TAmUU']);_0x2cbd2b[_0x4f3d8d(0x23c)+_0x4f3d8d(0x420)+'te']('aria-'+'check'+'ed',String(_0xa30fe8)),_0x21757a[_0x4f3d8d(0x544)](_0x21fd6e,_0xa30fe8);}else _0x1035ee=_0x411737&&_0x2b5253['val']?_0x26bff7[_0x4f3d8d(0x168)]():0x222a+0x1c62+-0x3e8c;},_0x2cbd2b;}function _0x55dcd4(_0x5127e6,_0x5504ce,_0x1e26d5,_0x79d6b6,_0x2e8f41){var _0x293cc0=_0x84837d,_0x19dbaf={'oLoRp':function(_0x368985,_0x2f3c20){return _0x368985(_0x2f3c20);},'McvYE':function(_0x71dd5d,_0x18ddf3){var _0x41f433=_0x2152;return _0x361784[_0x41f433(0x310)](_0x71dd5d,_0x18ddf3);},'JjliD':function(_0x245ffc,_0x3c020b){return _0x245ffc-_0x3c020b;}},_0x22e80c=document[_0x293cc0(0x37e)+_0x293cc0(0x1d2)+_0x293cc0(0x285)](_0x293cc0(0x309));_0x22e80c[_0x293cc0(0x25b)+'Name']='sk-ra'+_0x293cc0(0x14c);var _0x3b2481=document[_0x293cc0(0x37e)+'eElem'+_0x293cc0(0x285)]('input');_0x3b2481[_0x293cc0(0x63d)]=_0x361784[_0x293cc0(0x188)],_0x3b2481[_0x293cc0(0x25b)+'Name']=_0x361784['zEBrt'],_0x3b2481['min']=_0x5504ce,_0x3b2481[_0x293cc0(0x450)]=_0x1e26d5,_0x3b2481['step']=_0x79d6b6,_0x3b2481[_0x293cc0(0x133)]=_0x5127e6;var _0x1bc504=document['creat'+'eElem'+_0x293cc0(0x285)](_0x293cc0(0x551));_0x1bc504['class'+_0x293cc0(0x4b7)]=_0x361784['TCIsi'],_0x1bc504['textC'+'onten'+'t']=String(_0x5127e6);var _0x40dd5d=()=>{var _0x1fc148=_0x293cc0;_0x1bc504[_0x1fc148(0x458)+_0x1fc148(0x153)+'t']=_0x19dbaf['oLoRp'](String,_0x3b2481[_0x1fc148(0x133)]),_0x22e80c['style'][_0x1fc148(0x63b)+'opert'+'y']('--p',_0x19dbaf['McvYE']((_0x3b2481[_0x1fc148(0x133)]-_0x5504ce)/_0x19dbaf[_0x1fc148(0x25c)](_0x1e26d5,_0x5504ce),0x9ce+-0x113b+0x17*0x57)+'%');};return _0x3b2481[_0x293cc0(0x4f2)+'ut']=()=>{var _0x377ee4=_0x293cc0;_0x40dd5d(),_0x2e8f41(_0x19dbaf[_0x377ee4(0x397)](Number,_0x3b2481['value']));},_0x40dd5d(),_0x22e80c['appen'+'d'](_0x3b2481,_0x1bc504),_0x22e80c;}function _0x122f75(_0x10c1c1,_0x47a392){var _0x57165f=_0x84837d,_0x318a76=document[_0x57165f(0x37e)+'eElem'+_0x57165f(0x285)](_0x57165f(0x56c));return _0x318a76['type']=_0x57165f(0x241),_0x318a76['class'+_0x57165f(0x4b7)]=_0x57165f(0x1ed)+_0x57165f(0x427),_0x318a76['value']=/^#[0-9a-f]{6}$/i['test'](_0x10c1c1)?_0x10c1c1:'#ff6b'+'9d',_0x318a76['oninp'+'ut']=()=>_0x47a392(_0x318a76['value']),_0x318a76;}function _0x5b7162(_0x1d16b0,_0x941889,_0x502fe7){var _0x57dd32=_0x84837d,_0x55d94d=(_0x57dd32(0x1f0)+_0x57dd32(0x43b)+'0')[_0x57dd32(0x140)]('|'),_0x1d15d4=-0xc89+-0x1be*-0x16+0x47*-0x5d;while(!![]){switch(_0x55d94d[_0x1d15d4++]){case'0':return _0x526016;case'1':_0x526016['class'+_0x57dd32(0x4b7)]=_0x2e2177[_0x57dd32(0x401)];continue;case'2':_0x526016[_0x57dd32(0x133)]=_0x1d16b0;continue;case'3':var _0x526016=document[_0x57dd32(0x37e)+_0x57dd32(0x1d2)+'ent'](_0x2e2177[_0x57dd32(0x564)]);continue;case'4':_0x526016[_0x57dd32(0x2d1)+_0x57dd32(0x14c)]=()=>_0x502fe7(_0x526016[_0x57dd32(0x133)]);continue;case'5':for(var [_0x621731,_0x3c2155]of _0x941889){var _0x5c8b65=document[_0x57dd32(0x37e)+'eElem'+'ent'](_0x2e2177[_0x57dd32(0x580)]);_0x5c8b65[_0x57dd32(0x133)]=_0x621731,_0x5c8b65['textC'+'onten'+'t']=_0x3c2155,_0x526016[_0x57dd32(0x583)+_0x57dd32(0x26f)+'d'](_0x5c8b65);}continue;}break;}}function _0x2d2313(_0x1301f3,_0x11c50c){var _0x8a5a=_0x84837d,_0x4ed2d2={'JAHtg':_0x2e2177[_0x8a5a(0x42c)],'rKWqU':function(_0x4c4f4a){return _0x4c4f4a();}},_0x5ca442=document['creat'+'eElem'+_0x8a5a(0x285)]('butto'+'n');return _0x5ca442['type']=_0x8a5a(0x4e7)+'n',_0x5ca442[_0x8a5a(0x25b)+_0x8a5a(0x4b7)]=_0x8a5a(0x15c)+'n',_0x5ca442['textC'+_0x8a5a(0x153)+'t']=_0x1301f3,_0x5ca442['oncli'+'ck']=_0x4f1241=>{var _0x5412d9=_0x8a5a;_0x4ed2d2[_0x5412d9(0x389)]===_0x4ed2d2[_0x5412d9(0x389)]?(_0x4f1241['stopP'+'ropag'+'ation'](),_0x4ed2d2[_0x5412d9(0x48a)](_0x11c50c)):_0x13c7c5['set'](_0x3c31b4,null);},_0x5ca442;}function _0x266aca(_0x6f2dba,_0x54cffe,_0x3db018){var _0xf5207b=_0x84837d;if(_0x361784[_0xf5207b(0x3cb)]==='wszAO'){var _0x520056=document[_0xf5207b(0x37e)+'eElem'+'ent'](_0xf5207b(0x309));_0x520056['class'+_0xf5207b(0x4b7)]=_0xf5207b(0x411)+'l';var _0x38b4fd=document['creat'+'eElem'+_0xf5207b(0x285)](_0xf5207b(0x551));_0x38b4fd[_0xf5207b(0x25b)+'Name']=_0x361784[_0xf5207b(0x382)],_0x38b4fd['textC'+_0xf5207b(0x153)+'t']=_0x6f2dba;if(_0x54cffe){var _0x552f25=document[_0xf5207b(0x37e)+_0xf5207b(0x1d2)+_0xf5207b(0x285)](_0x361784['wZjXK']);_0x552f25['class'+'Name']=_0xf5207b(0x4d2)+'nt',_0x552f25['textC'+_0xf5207b(0x153)+'t']=_0x54cffe,_0x38b4fd[_0xf5207b(0x583)+_0xf5207b(0x26f)+'d'](_0x552f25);}return _0x520056['appen'+'d'](_0x38b4fd,_0x3db018),_0x520056;}else _0x200764[_0xf5207b(0x4e5)]=_0x5bb6c8,_0x233d0b();}function _0x5d7c70(_0x1b0509,_0x21e218){var _0x3db3de=_0x84837d;if(_0x2e2177[_0x3db3de(0x22b)]('IMDXF',_0x3db3de(0x488))){var _0x567ab6=_0x283e86[_0x2f51a2]||[],_0x4cea67=_0x224922[_0x3db3de(0x57a)]();while(_0x567ab6['lengt'+'h']&&_0x361784[_0x3db3de(0x505)](_0x4cea67,_0x567ab6[0x1bff+-0x860*0x2+-0xb3f])>-0x2689+-0xfb5*0x1+-0x33b*-0x12)_0x567ab6[_0x3db3de(0x3fe)]();return _0x567ab6['lengt'+'h'];}else{var _0x2dc032=document['creat'+_0x3db3de(0x1d2)+_0x3db3de(0x285)]('div');return _0x2dc032['class'+_0x3db3de(0x4b7)]=_0x2e2177[_0x3db3de(0x54a)](_0x3db3de(0x174)+'te',_0x21e218?_0x3db3de(0x481):''),_0x2dc032[_0x3db3de(0x458)+'onten'+'t']=_0x1b0509,_0x2dc032;}}function _0xcfbd02(_0x2b8d80,_0x335995,_0x1d8dc9,_0x3a81d4,_0x391dd9){var _0x22ea13=_0x84837d,_0x425c97=document[_0x22ea13(0x37e)+_0x22ea13(0x1d2)+_0x22ea13(0x285)](_0x2e2177[_0x22ea13(0x30d)]);_0x425c97['class'+_0x22ea13(0x4b7)]=_0x2e2177['wwSZR']+(_0x1d8dc9?_0x22ea13(0x416):'');var _0x4e52ef=document[_0x22ea13(0x37e)+'eElem'+'ent'](_0x22ea13(0x309));_0x4e52ef['class'+_0x22ea13(0x4b7)]=_0x2e2177[_0x22ea13(0x1d9)];var _0x3325d2=document['creat'+'eElem'+'ent'](_0x2e2177[_0x22ea13(0x30d)]);_0x3325d2[_0x22ea13(0x25b)+_0x22ea13(0x4b7)]=_0x2e2177['jPRID'];var _0x1e48b6=document['creat'+'eElem'+_0x22ea13(0x285)](_0x22ea13(0x4c8)+'g');_0x1e48b6[_0x22ea13(0x458)+_0x22ea13(0x153)+'t']=_0x2b8d80,_0x3325d2[_0x22ea13(0x583)+'dChil'+'d'](_0x1e48b6);if(_0x3a81d4){var _0x1a72b5=_0x2e2177['LuOgA'](_0x21596d,_0x1d8dc9,_0x449ce2=>{var _0x355290=_0x22ea13;_0x425c97[_0x355290(0x25b)+'List'][_0x355290(0x367)+'e']('on',_0x449ce2),_0x3a81d4(_0x449ce2);});_0x4e52ef[_0x22ea13(0x583)+'d'](_0x3325d2,_0x1a72b5);}else _0x4e52ef[_0x22ea13(0x583)+_0x22ea13(0x26f)+'d'](_0x3325d2);_0x425c97['appen'+_0x22ea13(0x26f)+'d'](_0x4e52ef);if(_0x391dd9&&_0x391dd9['lengt'+'h']){if(_0x2e2177[_0x22ea13(0x2e7)](_0x2e2177['oplPH'],_0x2e2177['oplPH'])){var _0x141046=document['creat'+'eElem'+'ent'](_0x2e2177['tSXSL']);_0x141046['class'+'Name']=_0x2e2177[_0x22ea13(0x5fc)];var _0x5bdd6d=document[_0x22ea13(0x37e)+_0x22ea13(0x1d2)+_0x22ea13(0x285)](_0x2e2177['tSXSL']);_0x5bdd6d[_0x22ea13(0x25b)+_0x22ea13(0x4b7)]='sk-md'+_0x22ea13(0x3d0),_0x5bdd6d[_0x22ea13(0x458)+_0x22ea13(0x153)+'t']=_0x335995,_0x141046['appen'+_0x22ea13(0x26f)+'d'](_0x5bdd6d);for(var _0xf07af5 of _0x391dd9)_0x141046[_0x22ea13(0x583)+'dChil'+'d'](_0xf07af5);_0x425c97['appen'+_0x22ea13(0x26f)+'d'](_0x141046);}else _0x488fc0[_0x22ea13(0x469)+_0x22ea13(0x1ef)]=_0x37b43e,_0x361784['nxZfi'](_0x28caa9),_0x5a947d[_0x22ea13(0x622)+'d']();}return _0x425c97;}var _0x2a3ec9=[{'id':_0x84837d(0x591)+'t','label':_0x2e2177[_0x84837d(0x19c)]},{'id':_0x84837d(0x5f1),'label':_0x2e2177[_0x84837d(0x276)]},{'id':'visua'+'l','label':_0x2e2177[_0x84837d(0x1c8)]},{'id':'misc','label':'Misc'},{'id':_0x84837d(0x1ae),'label':_0x2e2177['egdrl']}];function _0x128eca(){var _0x579f20=_0x84837d,_0x25254d={'mpSoT':function(_0x369326,_0x356cc0){return _0x369326(_0x356cc0);}},_0x2332db=_0x362a0f[_0x579f20(0x469)+_0x579f20(0x1ef)]?'SAFE\x20'+_0x579f20(0x64b)+_0x579f20(0x574)+'rlay\x20'+_0x579f20(0x218)+'\x20no\x20h'+_0x579f20(0x38a)+_0x579f20(0x2df)+_0x579f20(0x2c8)+_0x579f20(0x47f)+')':_0x362a0f[_0x579f20(0x568)]?_0x579f20(0x3e9)+'bound'+'\x20'+(_0x362a0f[_0x579f20(0x392)+_0x579f20(0x21c)]?_0x362a0f[_0x579f20(0x392)+'Ok']+'/'+_0x362a0f[_0x579f20(0x392)+_0x579f20(0x21c)]+_0x2e2177['WRPYj']:_0x579f20(0x166)+_0x579f20(0x51c)+_0x579f20(0x138)+_0x579f20(0x171)+'ff)')+(_0x579f20(0x1ca)+_0x579f20(0x4ae))+(_0x362a0f['gameL'+'oaded']?'loade'+'d':_0x579f20(0x4a2)+'ng')+('\x20|\x20sh'+'ooter'+'\x20')+(_0x362a0f['shoot'+'ers']?'held':_0x2e2177[_0x579f20(0x2c9)])+(_0x579f20(0x1e5)+_0x579f20(0x415)+'t\x20')+(_0x362a0f['movem'+_0x579f20(0x12f)]?'held':'none'):_0x2e2177[_0x579f20(0x5ed)];if(_0x362a0f['lastE'+_0x579f20(0x2ed)])_0x2332db+=_0x2e2177['azQdG'](_0x2e2177['aWBfF'],_0x362a0f[_0x579f20(0x4c3)+'rror']);return _0xcfbd02(_0x2e2177[_0x579f20(0x226)],_0x2332db,_0x362a0f[_0x579f20(0x568)],null,[_0x266aca(_0x579f20(0x2a5)+'PS\x20un'+_0x579f20(0x312),_0x2e2177[_0x579f20(0x1cd)],_0x2d2313(_0x579f20(0x4e6),()=>{var _0x22b320=_0x579f20;try{if(_0x361784['buUda']('hMDTl',_0x22b320(0x1cb))){var _0x1427bb={'tKfxX':function(_0x235b35,_0x4444f8){var _0x227a1a=_0x22b320;return _0x25254d[_0x227a1a(0x228)](_0x235b35,_0x4444f8);}},_0xd95c8=_0x33fb9e(_0x5273a6,_0x55041d=>{_0xa95195['class'+'List']['toggl'+'e']('on',_0x55041d),_0x1427bb['tKfxX'](_0x34bfa4,_0x55041d);});_0x196cbe['appen'+'d'](_0x1bb786,_0xd95c8);}else{if(_0x52913d)_0x52913d['call']('Unity'+'Engin'+_0x22b320(0x5bf)+'licat'+_0x22b320(0x151),_0x361784[_0x22b320(0x5ef)],[0xc*-0x194+0x153f+-0x15f]);}}catch(_0x1175d3){}}))]);}function _0x522c2e(_0x290ec3){var _0x40f39b=_0x84837d,_0x3069b2={'NNVDY':_0x40f39b(0x14b)+'e','vsEcA':'xcrYf','ITqHX':_0x361784['azxck'],'tbjxL':function(_0x34993c){return _0x34993c();},'HoeVl':_0x361784[_0x40f39b(0x2cd)],'UpBxB':function(_0x1d683b,_0x2264db){return _0x1d683b(_0x2264db);},'zXdxm':_0x361784['LXQsB'],'qXivk':_0x40f39b(0x1f8),'BmxCi':function(_0x389c71){var _0x89c8b2=_0x40f39b;return _0x361784[_0x89c8b2(0x2a3)](_0x389c71);},'nLUZU':function(_0x14946d){return _0x14946d();},'zKUEl':function(_0x2c52db){return _0x2c52db();},'HokVn':_0x40f39b(0x283)};if(_0x361784['euqKf'](_0x290ec3,_0x40f39b(0x591)+'t'))return[_0x361784['daJaE'](_0x128eca),_0xcfbd02(_0x40f39b(0x347)+_0x40f39b(0x1ef),_0x361784['LPmzv'],_0x27ecfa['god'],_0xd58884=>{var _0x283f85=_0x40f39b;_0x27ecfa['god']=_0xd58884,_0x37c03d(),_0x97cf8(_0x283f85(0x64f),_0xd58884),_0x97cf8(_0x3069b2[_0x283f85(0x3d7)],_0xd58884);},[]),_0x361784[_0x40f39b(0x371)](_0xcfbd02,_0x361784[_0x40f39b(0x407)],'Skips'+_0x40f39b(0x404)+'ilMot'+_0x40f39b(0x37f)+_0x40f39b(0x58a)+_0x40f39b(0x4fa)+_0x40f39b(0x43a)+_0x40f39b(0x23a)+'rings'+_0x40f39b(0x342)+_0x40f39b(0x5a7)+_0x40f39b(0x572),_0x27ecfa['noRec'+_0x40f39b(0x5f2)],_0xd079dd=>{var _0x1a6390=_0x40f39b;_0x27ecfa[_0x1a6390(0x440)+_0x1a6390(0x5f2)]=_0xd079dd,_0x37c03d(),_0x97cf8('noRec'+_0x1a6390(0x5f2),_0xd079dd);},[]),_0x361784[_0x40f39b(0x371)](_0xcfbd02,_0x40f39b(0x345)+'read',_0x40f39b(0x58e)+_0x40f39b(0x4ec)+'ead\x20a'+'nd\x20ma'+'xes\x20a'+'ccura'+'cy\x20on'+'\x20your'+_0x40f39b(0x33f)+_0x40f39b(0x3eb)+_0x40f39b(0x61e)+_0x40f39b(0x25d),_0x27ecfa[_0x40f39b(0x125)+'ead'],_0x15b85b=>{var _0x458ca1=_0x40f39b;_0x3069b2['vsEcA']===_0x3069b2['ITqHX']?_0x37c04f['body']['appen'+_0x458ca1(0x26f)+'d'](_0x56fd4a):(_0x27ecfa['noSpr'+'ead']=_0x15b85b,_0x3069b2['tbjxL'](_0x37c03d));},[]),_0x361784[_0x40f39b(0x648)](_0xcfbd02,_0x361784[_0x40f39b(0x210)],'Scale'+_0x40f39b(0x34d)+_0x40f39b(0x4ce)+_0x40f39b(0x29b)+'n.fir'+_0x40f39b(0x447)+'\x20to\x201'+'0%.\x20S'+_0x40f39b(0x22c)+'\x20may\x20'+_0x40f39b(0x11a)+_0x40f39b(0x1ac)+'\x20shot'+'s.',_0x27ecfa[_0x40f39b(0x355)+'Exp'],_0x1a27b=>{var _0x12b9b7=_0x40f39b;if('OTroc'!==_0x12b9b7(0x510)){var _0xc5aa36=_0x519a96[_0x12b9b7(0x37e)+'eElem'+'ent'](_0x12b9b7(0x610));_0xc5aa36['class'+'Name']=_0x12b9b7(0x4d2)+'nt',_0xc5aa36['textC'+'onten'+'t']=_0x43a1bf,_0x321f5b['appen'+_0x12b9b7(0x26f)+'d'](_0xc5aa36);}else _0x27ecfa[_0x12b9b7(0x355)+_0x12b9b7(0x465)]=_0x1a27b,_0x361784[_0x12b9b7(0x1ea)](_0x37c03d);},[]),_0xcfbd02(_0x361784['OXuop'],_0x361784[_0x40f39b(0x160)],_0x27ecfa[_0x40f39b(0x64e)+'eExp'],_0x2d8f78=>{var _0x4197b1=_0x40f39b;_0x27ecfa[_0x4197b1(0x64e)+'eExp']=_0x2d8f78,_0x361784['zjENx'](_0x37c03d);},[_0x266aca(_0x361784['HyJmp'],null,_0x55dcd4(_0x27ecfa[_0x40f39b(0x64e)+_0x40f39b(0x5f9)+'e'],0xada+-0x154+-0x97c,0x19bc+-0x5*0x159+-0x1*0x110b,0x19*-0x11d+0x11*-0x1b8+0x3912,_0x241198=>{var _0x52dc9b=_0x40f39b;_0x27ecfa[_0x52dc9b(0x64e)+_0x52dc9b(0x5f9)+'e']=_0x241198,_0x37c03d();}))]),_0x361784[_0x40f39b(0x3a6)](_0xcfbd02,_0x361784['bpnoi'],'Refil'+'ls\x20th'+'e\x20wea'+_0x40f39b(0x454)+'\x20cach'+'ed\x20am'+_0x40f39b(0x496)+_0x40f39b(0x207)+'every'+'\x20200m'+'s.',_0x27ecfa['infAm'+'moExp'],_0xf3207c=>{var _0x29dc3d=_0x40f39b;_0x27ecfa[_0x29dc3d(0x362)+_0x29dc3d(0x1ba)]=_0xf3207c,_0x361784['TPRym'](_0x37c03d);},[_0x361784[_0x40f39b(0x492)](_0x5d7c70,_0x40f39b(0x2b3)+'loads'+_0x40f39b(0x4c0)+'l\x20dra'+'in,\x20t'+'he\x20de'+_0x40f39b(0xfd)+'nt\x20ha'+_0x40f39b(0x4e1)+'\x20else'+_0x40f39b(0x464)+'.')])];if(_0x290ec3==='move')return[_0x361784['CaRGW'](_0xcfbd02,_0x361784['vtFEa'],_0x361784['dDdMb'],_0x361784[_0x40f39b(0x2c6)](_0x27ecfa[_0x40f39b(0x474)+_0x40f39b(0x55a)],0x305*-0xb+-0x599*-0x2+0x1669),null,[_0x361784[_0x40f39b(0x428)](_0x266aca,_0x40f39b(0x119)+'\x20%',_0x361784['iEAVF'],_0x361784[_0x40f39b(0x38c)](_0x55dcd4,_0x27ecfa['speed'+'Pct'],-0x1d68+-0x79*0x6+0x2070,-0x83a*0x4+-0x1*0x1433+0x23*0x18d,-0x30*0x82+0x3b+0x182a,_0xf5fda5=>{var _0xfe26b7=_0x40f39b;_0x27ecfa['speed'+_0xfe26b7(0x55a)]=_0xf5fda5,_0x37c03d();}))]),_0xcfbd02('Jump\x20'+_0x40f39b(0x451)+'vity','Scale'+'s\x20Mov'+_0x40f39b(0x209)+_0x40f39b(0x479)+_0x40f39b(0x386)+'\x20and\x20'+'both\x20'+_0x40f39b(0x270)+'ty\x20va'+'lues.',_0x27ecfa[_0x40f39b(0x3e2)+'ct']!==0x1897+-0x3*0x38e+0x1ef*-0x7||_0x361784[_0x40f39b(0x2c6)](_0x27ecfa['gravi'+_0x40f39b(0x21b)],-0x1cae+0x1*0xa3c+0x1*0x12d6),null,[_0x361784[_0x40f39b(0x428)](_0x266aca,_0x361784[_0x40f39b(0x669)],null,_0x55dcd4(_0x27ecfa['jumpP'+'ct'],-0xb4*-0x14+0x17ee+-0x3b*0xa4,-0x1d58+0x1941*0x1+0x543,0x5*0x4b1+-0x293+-0x14dd,_0x2026a1=>{_0x27ecfa['jumpP'+'ct']=_0x2026a1,_0x37c03d();})),_0x361784[_0x40f39b(0x57c)](_0x266aca,_0x361784[_0x40f39b(0x3ae)],_0x361784[_0x40f39b(0x62f)],_0x361784['rBWHp'](_0x55dcd4,_0x27ecfa[_0x40f39b(0x270)+_0x40f39b(0x21b)],-0x208+0x1946+-0x1734,0x101*0x16+-0x1d*0xe8+0xe*0x5b,0x1*0x1327+0x2e+-0x10*0x135,_0x2ed1e9=>{var _0x509fe5=_0x40f39b;_0x27ecfa[_0x509fe5(0x270)+_0x509fe5(0x21b)]=_0x2ed1e9,_0x361784[_0x509fe5(0x259)](_0x37c03d);}))]),_0xcfbd02(_0x361784['odqNF'],_0x361784[_0x40f39b(0x1c7)],_0x27ecfa[_0x40f39b(0x28c)],_0x41d1f8=>{var _0x291a3a=_0x40f39b;_0x27ecfa[_0x291a3a(0x28c)]=_0x41d1f8,_0x37c03d();},[])];if(_0x361784['psgQc'](_0x290ec3,_0x361784[_0x40f39b(0x212)]))return[_0x361784[_0x40f39b(0x648)](_0xcfbd02,'Keyst'+_0x40f39b(0x4db),_0x40f39b(0x130)+_0x40f39b(0x5df)+_0x40f39b(0x1cc)+_0x40f39b(0x23d)+'ce\x20ov'+'erlay'+'.',_0x27ecfa[_0x40f39b(0x582)+_0x40f39b(0x4db)],_0x3d7a2a=>{var _0x41dee8=_0x40f39b,_0x622b2c={'jfqGP':_0x41dee8(0x306),'nnUuL':function(_0x224993,_0x315771){return _0x224993(_0x315771);}};if(_0x3069b2['zXdxm']===_0x3069b2['zXdxm'])_0x27ecfa[_0x41dee8(0x582)+_0x41dee8(0x4db)]=_0x3d7a2a,_0x3069b2[_0x41dee8(0x3ce)](_0x37c03d);else{var _0x1cb62f=_0x23bdc3[_0x41dee8(0x37e)+'eElem'+'ent'](_0x41dee8(0x4e7)+'n');return _0x1cb62f[_0x41dee8(0x63d)]='butto'+'n',_0x1cb62f[_0x41dee8(0x25b)+'Name']=_0x3069b2['HoeVl'],_0x1cb62f[_0x41dee8(0x23c)+'tribu'+'te'](_0x41dee8(0x17f),_0x41dee8(0x43d)+'h'),_0x1cb62f[_0x41dee8(0x23c)+'tribu'+'te']('aria-'+_0x41dee8(0x2a1)+'ed',_0x3069b2['UpBxB'](_0xc17741,!!_0xb1d821)),_0x1cb62f[_0x41dee8(0x313)+'ck']=_0x1967c5=>{var _0x4d6141=_0x41dee8;_0x1967c5['stopP'+_0x4d6141(0x1a1)+_0x4d6141(0x2e1)]();var _0x45376d=_0x1cb62f[_0x4d6141(0x20a)+'tribu'+'te'](_0x4d6141(0x28e)+_0x4d6141(0x2a1)+'ed')!==_0x622b2c['jfqGP'];_0x1cb62f[_0x4d6141(0x23c)+_0x4d6141(0x420)+'te'](_0x4d6141(0x28e)+_0x4d6141(0x2a1)+'ed',_0x622b2c[_0x4d6141(0x1b7)](_0x35e580,_0x45376d)),_0x38ac7c(_0x45376d);},_0x1cb62f;}},[_0x266aca(_0x361784[_0x40f39b(0x2ac)],null,_0x361784['wtNVd'](_0x5b7162,_0x27ecfa['ksPos'],[['bl',_0x40f39b(0x5e7)+_0x40f39b(0x444)+'t'],['br','Botto'+'m\x20rig'+'ht'],['ml',_0x40f39b(0x5e9)+_0x40f39b(0x5b5)+'e']],_0x22dcd9=>{var _0x3ea317=_0x40f39b;_0x27ecfa[_0x3ea317(0x4e5)]=_0x22dcd9,_0x37c03d();})),_0x266aca(_0x40f39b(0x239),null,_0x361784[_0x40f39b(0x38c)](_0x55dcd4,_0x27ecfa[_0x40f39b(0x4a8)+'le'],0x1fa5+0x3fd+-0x23a2+0.6,0x1a3a*-0x1+-0xa*0x36f+-0x1*-0x3c91+0.6000000000000001,0x714+-0x173*-0xf+-0x1cd1+0.05,_0x56ea2e=>{_0x27ecfa['ksSca'+'le']=_0x56ea2e,_0x37c03d();})),_0x266aca(_0x40f39b(0xfe)+_0x40f39b(0x662)+'t',null,_0x361784['dqKGG'](_0x21596d,_0x27ecfa[_0x40f39b(0x2af)],_0x2446b3=>{_0x27ecfa['ksCps']=_0x2446b3,_0x37c03d();}))]),_0xcfbd02(_0x40f39b(0x477)+'hair',_0x361784['alrYr'],_0x27ecfa[_0x40f39b(0x634)+_0x40f39b(0x10c)],_0x2356c5=>{var _0x6a420d=_0x40f39b;_0x27ecfa[_0x6a420d(0x634)+'hair']=_0x2356c5,_0x37c03d();},[_0x361784['cowVf'](_0x266aca,_0x40f39b(0x239),null,_0x361784['BcolI'](_0x55dcd4,_0x27ecfa[_0x40f39b(0x4be)+'e'],-0x2652+-0x1*-0x423+0xb65*0x3+0.5,-0x22ad+0x1*-0x3f4+0x26a3+0.5,-0xf2a+-0x111c+0x2046+0.1,_0x2a6dd1=>{var _0x59a9e9=_0x40f39b;if(_0x3069b2['qXivk']===_0x59a9e9(0x1f8))_0x27ecfa[_0x59a9e9(0x4be)+'e']=_0x2a6dd1,_0x3069b2['BmxCi'](_0x37c03d);else try{var _0x569b06=_0x3aa29a[_0x59a9e9(0x5f0)+'refix']({'typeName':_0x48cbb4,'methodName':_0x3b37b1,'params':_0xe262b,'returnType':_0x16fbca},_0x5841e1);return _0x569b06[_0x59a9e9(0x50f)+'ed']=_0xfd8337!==![],_0x2642a0[_0xdada00]=_0x569b06,_0x1fa2ef['hooks'+'Total']++,_0x569b06;}catch(_0x599833){return _0x52ce61['warn']('[saku'+'ra-ko'+'ur]\x20h'+'ook\x20r'+_0x59a9e9(0x2ec)+_0x59a9e9(0x377),_0x2fe633,_0x599833&&_0x599833['messa'+'ge']),null;}})),_0x266aca(_0x361784['VNmRK'],null,_0x122f75(_0x27ecfa['chCol'+'or'],_0x46b37a=>{_0x27ecfa['chCol'+'or']=_0x46b37a,_0x37c03d();}))]),_0xcfbd02(_0x361784[_0x40f39b(0x366)],_0x40f39b(0x532)+'verla'+'y.',_0x27ecfa[_0x40f39b(0x161)],null,[_0x361784[_0x40f39b(0x3c3)](_0x266aca,_0x361784['pIyTg'],null,_0x21596d(_0x27ecfa['fps'],_0xde3c6e=>{var _0xf5d501=_0x40f39b;_0x27ecfa[_0xf5d501(0x161)]=_0xde3c6e,_0x37c03d();})),_0x5d7c70(_0x361784[_0x40f39b(0x3fb)])])];if(_0x361784[_0x40f39b(0x142)](_0x290ec3,_0x40f39b(0x3d4)))return[_0xcfbd02(_0x40f39b(0x633)+'ck',_0x361784['qufiG'],_0x27ecfa[_0x40f39b(0x311)+'ck'],_0xdfdef7=>{var _0x38d9c7=_0x40f39b;_0x27ecfa['adblo'+'ck']=_0xdfdef7,_0x3069b2[_0x38d9c7(0x291)](_0x37c03d);},[_0x5d7c70(_0x361784['WVAPC'])])];return[_0xcfbd02(_0x361784[_0x40f39b(0x567)],_0x40f39b(0x178)+_0x40f39b(0x5e1)+_0x40f39b(0x10e)+_0x40f39b(0x3a9)+'—\x20no\x20'+_0x40f39b(0x616)+_0x40f39b(0x392)+'.\x20Use'+_0x40f39b(0x24c)+_0x40f39b(0x63e)+_0x40f39b(0x35a)+_0x40f39b(0x5e0)+'\x27t\x20st'+_0x40f39b(0x261),_0x27ecfa[_0x40f39b(0x469)+'ode'],_0x5eaa9d=>{_0x27ecfa['safeM'+'ode']=_0x5eaa9d,_0x37c03d(),location['reloa'+'d']();},[_0x361784[_0x40f39b(0x2ef)](_0x5d7c70,'Appli'+_0x40f39b(0x141)+'\x20relo'+'ad.\x20I'+'f\x20mat'+_0x40f39b(0x602)+_0x40f39b(0x5c7)+_0x40f39b(0x1d3)+_0x40f39b(0x268)+_0x40f39b(0x593)+_0x40f39b(0x299)+'eeze\x20'+'is\x20ho'+_0x40f39b(0x530)+'lated'+_0x40f39b(0x319)+'ll\x20me'+_0x40f39b(0x3ad)+'hooks'+'-appl'+'ied\x20c'+_0x40f39b(0x36d))]),_0xcfbd02(_0x361784['VCwNl'],_0x40f39b(0x20b)+'one\x20i'+_0x40f39b(0x303)+_0x40f39b(0x3ab)+_0x40f39b(0x616)+_0x40f39b(0x473)+_0x40f39b(0x4e2)+_0x40f39b(0x122)+_0x40f39b(0x636)+'hole\x20'+_0x40f39b(0x3b7)+_0x40f39b(0x4c9)+'\x20ALL\x20'+'OFF\x20b'+'y\x20def'+_0x40f39b(0x14d)+'-\x20a\x20s'+_0x40f39b(0x24e)+_0x40f39b(0x561)+_0x40f39b(0x12c)+'oes\x20n'+'ot\x20ma'+'tch\x20t'+_0x40f39b(0x5c9)+_0x40f39b(0x208)+_0x40f39b(0x445)+_0x40f39b(0x470)+'s\x20\x27fu'+'nctio'+'n\x20sig'+'natur'+_0x40f39b(0x19d)+'match'+_0x40f39b(0x225)+'\x20mome'+_0x40f39b(0x203)+_0x40f39b(0x287)+'alled'+_0x40f39b(0x5d9)+_0x40f39b(0x220)+'m\x20on\x20'+_0x40f39b(0x3e8)+_0x40f39b(0x2f4)+'ime,\x20'+_0x40f39b(0x622)+_0x40f39b(0x66c)+'d\x20see'+_0x40f39b(0x5b0)+'h\x20one'+'\x20your'+_0x40f39b(0x4ad)+_0x40f39b(0x116)+_0x40f39b(0x242)+'n.',_0x27ecfa[_0x40f39b(0x22a)+'od']||_0x27ecfa[_0x40f39b(0x22a)+'odDie']||_0x27ecfa[_0x40f39b(0x44e)+_0x40f39b(0x32b)+'il']||_0x27ecfa[_0x40f39b(0x5ae)+_0x40f39b(0x61c)+'e'],_0x43f136=>{var _0x2c23a0=_0x40f39b;_0x27ecfa[_0x2c23a0(0x22a)+'od']=_0x43f136,_0x27ecfa[_0x2c23a0(0x22a)+'odDie']=_0x43f136,_0x27ecfa['hookN'+'oReco'+'il']=_0x43f136,_0x27ecfa['hookC'+_0x2c23a0(0x61c)+'e']=_0x43f136,_0x361784[_0x2c23a0(0x4d9)](_0x37c03d),location[_0x2c23a0(0x622)+'d']();},[_0x361784[_0x40f39b(0x2ef)](_0x5d7c70,_0x40f39b(0x671)+'es\x20on'+_0x40f39b(0x493)+_0x40f39b(0x409)),_0x361784[_0x40f39b(0x428)](_0x266aca,_0x40f39b(0x58f)+'OHeal'+_0x40f39b(0x588)+'itiat'+'eTake'+'Healt'+'h)',null,_0x21596d(_0x27ecfa[_0x40f39b(0x22a)+'od'],_0x54c3d5=>{var _0xd0d4e8=_0x40f39b;_0x27ecfa[_0xd0d4e8(0x22a)+'od']=_0x54c3d5,_0x37c03d();})),_0x266aca(_0x361784['GYheq'],null,_0x361784[_0x40f39b(0x182)](_0x21596d,_0x27ecfa[_0x40f39b(0x22a)+_0x40f39b(0x421)],_0x1582f5=>{var _0x5ee538=_0x40f39b;_0x27ecfa[_0x5ee538(0x22a)+_0x5ee538(0x421)]=_0x1582f5,_0x37c03d();})),_0x266aca('noRec'+'oil\x20('+_0x40f39b(0x55b)+_0x40f39b(0x3d1)+_0x40f39b(0x2d9)+'ck)',null,_0x21596d(_0x27ecfa[_0x40f39b(0x44e)+'oReco'+'il'],_0x4642de=>{var _0x5610fd=_0x40f39b;_0x27ecfa[_0x5610fd(0x44e)+'oReco'+'il']=_0x4642de,_0x3069b2[_0x5610fd(0x28d)](_0x37c03d);})),_0x361784[_0x40f39b(0x2c2)](_0x266aca,_0x361784[_0x40f39b(0x60a)],_0x361784[_0x40f39b(0x43e)],_0x361784['dqKGG'](_0x21596d,_0x27ecfa[_0x40f39b(0x5ae)+'aptur'+'e'],_0x395be3=>{var _0x598cdf=_0x40f39b;_0x27ecfa[_0x598cdf(0x5ae)+_0x598cdf(0x61c)+'e']=_0x395be3,_0x361784[_0x598cdf(0x353)](_0x37c03d);}))]),_0x361784[_0x40f39b(0x371)](_0xcfbd02,_0x361784[_0x40f39b(0x571)],_0x40f39b(0x154)+_0x40f39b(0x41c)+_0x40f39b(0x3f2)+'age\x20d'+'etect'+_0x40f39b(0x4c2)+_0x40f39b(0x18b)+_0x40f39b(0x47b)+'via\x20S'+'topDe'+_0x40f39b(0x211)+'on().'+_0x40f39b(0x609)+'\x20ON.',_0x27ecfa[_0x40f39b(0x24f)+_0x40f39b(0x1e1)],_0x2010d1=>{var _0x144bd9=_0x40f39b;_0x3069b2[_0x144bd9(0x108)]!==_0x3069b2[_0x144bd9(0x108)]?new _0x41089e(_0xfb6443)[_0x144bd9(0xf9)+_0x144bd9(0x245)](_0x147b51,_0x9b6ae8,_0xf4d027):(_0x27ecfa[_0x144bd9(0x24f)+_0x144bd9(0x1e1)]=_0x2010d1,_0x37c03d());},[_0x5d7c70('God/d'+'amage'+_0x40f39b(0x595)+'d\x20gre'+_0x40f39b(0x387)+_0x40f39b(0x298)+_0x40f39b(0x560)+'risk\x20'+_0x40f39b(0x58d)+_0x40f39b(0x638)+'this\x20'+_0x40f39b(0x374),!![])]),_0x361784[_0x40f39b(0x4d4)](_0xcfbd02,_0x361784['AHVnA'],_0x40f39b(0x1ce)+_0x40f39b(0x59a)+_0x40f39b(0x388)+_0x40f39b(0x379)+_0x40f39b(0x1f4)+'e\x20tra'+_0x40f39b(0x24d),!![],null,[_0x361784[_0x40f39b(0x40e)](_0x266aca,_0x361784['UPgCP'],null,_0x2d2313(_0x40f39b(0x296),()=>{var _0x2ed49a=_0x40f39b;_0x27ecfa={..._0x408c44},_0x37c03d(),location[_0x2ed49a(0x622)+'d']();}))])];}var _0x110f29=null;function _0x5389e0(_0x447745){var _0x56bd38=_0x84837d;_0x5d4343=_0x447745;if(!_0x110f29){var _0x21f531=_0x2e2177['JqYIu'][_0x56bd38(0x140)]('|'),_0x21adb6=-0xcb3*-0x3+-0xa37+-0x1be2;while(!![]){switch(_0x21f531[_0x21adb6++]){case'0':_0x8e446a[_0x56bd38(0x583)+'dChil'+'d'](_0x544732);continue;case'1':requestAnimationFrame(()=>_0x110f29['class'+'List'][_0x56bd38(0x419)](_0x56bd38(0x5f7)));continue;case'2':_0x8e446a[_0x56bd38(0x583)+_0x56bd38(0x26f)+'d'](_0x110f29);continue;case'3':_0x110f29=_0x2e2177[_0x56bd38(0x103)](_0x332289);continue;case'4':_0x544732[_0x56bd38(0x458)+'onten'+'t']=_0x90674c;continue;case'5':var _0x544732=document[_0x56bd38(0x37e)+_0x56bd38(0x1d2)+'ent'](_0x56bd38(0x1e4));continue;}break;}}_0x110f29[_0x56bd38(0x25b)+'List'][_0x56bd38(0x367)+'e']('shown',_0x447745);}function _0x59dd2d(){var _0x3be2ac=_0x84837d;if(_0x361784[_0x3be2ac(0x200)]!==_0x361784[_0x3be2ac(0x62c)])_0x5389e0(!_0x5d4343);else{var _0x4c675c=(_0x3be2ac(0x112)+'|3|2')['split']('|'),_0x480466=-0x9*0x10f+-0x1*0x8ed+0x1274;while(!![]){switch(_0x4c675c[_0x480466++]){case'0':_0x3a6cd0[_0x3be2ac(0x50f)+'ed']=_0x4e3d7f!==![];continue;case'1':var _0x3a6cd0=_0x5bb409['hookP'+_0x3be2ac(0x4a0)]({'typeName':_0x2db82b,'methodName':_0x5ed05d,'params':_0x47d878,'returnType':_0x4ff7bd},_0x9c65b2);continue;case'2':return _0x3a6cd0;case'3':_0x4da026[_0x3be2ac(0x392)+'Total']++;continue;case'4':_0x284f18[_0x4b22d5]=_0x3a6cd0;continue;}break;}}}function _0x332289(){var _0x4a1cd2=_0x84837d,_0xcc3ee0={'CZsSz':'rgba('+_0x4a1cd2(0x5a0)+_0x4a1cd2(0x5e5)+'7)','sEMjr':'middl'+'e','xxXIy':function(_0x49fcec,_0x84d806){return _0x49fcec+_0x84d806;},'mzPQL':_0x361784['fHpSr'],'GaypB':function(_0x3bfd84,_0x41adc5){return _0x3bfd84*_0x41adc5;},'sPPwF':function(_0x4fb30e,_0x5a3179){return _0x4fb30e/_0x5a3179;},'KieNY':function(_0x3799ae,_0x357e4f){return _0x3799ae+_0x357e4f;},'ZmiMk':function(_0x4f2c02,_0x686188){return _0x4f2c02*_0x686188;},'fCwma':'px\x20ui'+'-sans'+_0x4a1cd2(0x589)+'f,sys'+_0x4a1cd2(0x195)+'i,san'+'s-ser'+'if','aKGzl':function(_0x2bcd77,_0x5635fb){var _0x18b514=_0x4a1cd2;return _0x361784[_0x18b514(0x42f)](_0x2bcd77,_0x5635fb);},'jBXOz':function(_0x421e1f,_0x498865){var _0x317602=_0x4a1cd2;return _0x361784[_0x317602(0x2b2)](_0x421e1f,_0x498865);},'XJjYz':_0x4a1cd2(0x435),'qtUmz':function(_0x40e475){return _0x361784['nxZfi'](_0x40e475);},'wXXiz':'Sakur'+'a\x20Kou'+_0x4a1cd2(0x224),'Wkujf':_0x4a1cd2(0x1a2)+_0x4a1cd2(0x16b),'LzxAR':function(_0x39dff1,_0x39466b){var _0x1a2866=_0x4a1cd2;return _0x361784[_0x1a2866(0x1dc)](_0x39dff1,_0x39466b);},'zNXyB':_0x4a1cd2(0x4b9),'SAlsC':_0x4a1cd2(0x466),'hNjjG':function(_0x40601f,_0x343922){return _0x40601f+_0x343922;},'QRAVS':_0x4a1cd2(0x3e9)+_0x4a1cd2(0x3c2)+'\x20','Yohgf':function(_0x3ef49d,_0x1b3d3e){return _0x3ef49d+_0x1b3d3e;},'oVtcd':_0x4a1cd2(0x215)+_0x4a1cd2(0x483)+'\x20','wBwBa':_0x361784['GsiZb'],'KLpfp':_0x361784[_0x4a1cd2(0x5b8)]},_0x353fb9=document['creat'+_0x4a1cd2(0x1d2)+'ent'](_0x4a1cd2(0x309));_0x353fb9['class'+'Name']=_0x361784['XrlXm'];var _0x49047d=document['creat'+_0x4a1cd2(0x1d2)+'ent'](_0x361784[_0x4a1cd2(0x32f)]);_0x49047d[_0x4a1cd2(0x25b)+_0x4a1cd2(0x4b7)]=_0x361784[_0x4a1cd2(0x557)];var _0x4eeefe=document[_0x4a1cd2(0x37e)+_0x4a1cd2(0x1d2)+'ent']('div');_0x4eeefe[_0x4a1cd2(0x25b)+'Name']=_0x361784[_0x4a1cd2(0x34e)],_0x4eeefe['inner'+'HTML']=_0x361784[_0x4a1cd2(0x53c)],_0x49047d[_0x4a1cd2(0x583)+'dChil'+'d'](_0x4eeefe);var _0x4afc06=document['creat'+'eElem'+_0x4a1cd2(0x285)](_0x361784[_0x4a1cd2(0x4f0)]);_0x4afc06[_0x4a1cd2(0x25b)+_0x4a1cd2(0x4b7)]='mn-ma'+'in';var _0x481d96=document[_0x4a1cd2(0x37e)+_0x4a1cd2(0x1d2)+_0x4a1cd2(0x285)](_0x4a1cd2(0x5a2)+'r');_0x481d96[_0x4a1cd2(0x25b)+_0x4a1cd2(0x4b7)]='mn-to'+'p';var _0x262a19=document[_0x4a1cd2(0x37e)+_0x4a1cd2(0x1d2)+_0x4a1cd2(0x285)](_0x361784[_0x4a1cd2(0x4f0)]);_0x262a19[_0x4a1cd2(0x25b)+'Name']='mn-ti'+_0x4a1cd2(0x28a);var _0x42895c=document['creat'+'eElem'+'ent']('h2');_0x42895c[_0x4a1cd2(0x25b)+'Name']=_0x361784[_0x4a1cd2(0x5c3)],_0x42895c['textC'+'onten'+'t']=_0x361784['IxJGs'];var _0x38b5a4=document[_0x4a1cd2(0x37e)+_0x4a1cd2(0x1d2)+'ent'](_0x361784['wZjXK']);_0x38b5a4[_0x4a1cd2(0x25b)+_0x4a1cd2(0x4b7)]=_0x361784[_0x4a1cd2(0x599)],_0x38b5a4['textC'+_0x4a1cd2(0x153)+'t']=_0x361784['avUiC'],_0x262a19[_0x4a1cd2(0x583)+'d'](_0x42895c,_0x38b5a4);var _0x3de9fe=document[_0x4a1cd2(0x37e)+_0x4a1cd2(0x1d2)+'ent']('butto'+'n');_0x3de9fe[_0x4a1cd2(0x63d)]=_0x361784['jKdWt'],_0x3de9fe['class'+_0x4a1cd2(0x4b7)]=_0x361784[_0x4a1cd2(0x27b)],_0x3de9fe[_0x4a1cd2(0x286)]=_0x361784[_0x4a1cd2(0x431)],_0x3de9fe[_0x4a1cd2(0x2d2)+'HTML']=_0x361784['mOsBL'],_0x3de9fe[_0x4a1cd2(0x313)+'ck']=()=>_0x5389e0(![]),_0x481d96['appen'+'d'](_0x262a19,_0x3de9fe);var _0x455ec1=document[_0x4a1cd2(0x37e)+'eElem'+_0x4a1cd2(0x285)]('div');_0x455ec1['class'+'Name']=_0x4a1cd2(0x3da)+'ls',_0x4afc06['appen'+'d'](_0x481d96,_0x455ec1),_0x353fb9[_0x4a1cd2(0x583)+'d'](_0x49047d,_0x4afc06);var _0x382829=new Map();for(var _0x1e48d6 of _0x2a3ec9){var _0x5eae56=document['creat'+_0x4a1cd2(0x1d2)+'ent'](_0x361784[_0x4a1cd2(0x2dd)]);_0x5eae56[_0x4a1cd2(0x63d)]='butto'+'n',_0x5eae56[_0x4a1cd2(0x25b)+_0x4a1cd2(0x4b7)]=_0x4a1cd2(0x5ba)+'b',_0x5eae56[_0x4a1cd2(0x286)]=_0x1e48d6[_0x4a1cd2(0x289)],_0x5eae56[_0x4a1cd2(0x2d2)+'HTML']=_0x361784['kvqJW']+_0x1e48d6[_0x4a1cd2(0x289)]+('</sma'+_0x4a1cd2(0x512)),_0x5eae56[_0x4a1cd2(0x313)+'ck']=(_0x4827cc=>()=>_0x32180c(_0x4827cc))(_0x1e48d6['id']),_0x382829[_0x4a1cd2(0x359)](_0x1e48d6['id'],_0x5eae56),_0x49047d['appen'+'dChil'+'d'](_0x5eae56);}function _0x32180c(_0x516826){var _0x4d61ed=_0x4a1cd2;if(_0xcc3ee0[_0x4d61ed(0x443)](_0x4d61ed(0x435),_0xcc3ee0['XJjYz'])){var _0x549056=_0x100ab3['has'](_0x247656);_0x300db7[_0x4d61ed(0x189)](),_0x2a571f['begin'+'Path']();if(_0x3a027a[_0x4d61ed(0x2aa)+_0x4d61ed(0x44f)])_0x3b896d['round'+'Rect'](_0x128235,_0x44c2a2,_0x18035a,_0x25394f,(-0xbb9+0x30*-0x4d+0x1a30)*_0x27e581);else _0x46a6f9['rect'](_0x3b235b,_0x55dc98,_0x58991e,_0x5799e8);_0x3c7aaa[_0x4d61ed(0x344)+'tyle']=_0x549056?'rgba('+'255,1'+_0x4d61ed(0x17a)+_0x4d61ed(0x29d)+'5)':_0xcc3ee0[_0x4d61ed(0x2e9)],_0x67b848[_0x4d61ed(0x337)](),_0x3599f5[_0x4d61ed(0x113)+'idth']=-0x171a*-0x1+-0x842+-0x1d*0x83,_0x1d41b3[_0x4d61ed(0x109)+_0x4d61ed(0x5cb)+'e']=_0x549056?_0x140dae:'rgba('+'255,1'+_0x4d61ed(0x17a)+'7,0.3'+'5)',_0xd7cf05[_0x4d61ed(0x109)+'e'](),_0x549056&&(_0xae24cc[_0x4d61ed(0x45b)+_0x4d61ed(0x29e)+'r']=_0x1e59dd,_0x27f95a[_0x4d61ed(0x45b)+_0x4d61ed(0x265)]=-0xdf*0x1a+-0x23a5+-0x1373*-0x3,_0x3aa6e3['fill'](),_0x18cbba[_0x4d61ed(0x45b)+_0x4d61ed(0x265)]=0xa2e*0x1+-0x2186+-0xc*-0x1f2),_0x43de91['fillS'+'tyle']=_0x549056?_0x4d61ed(0x316):_0x4d61ed(0x167)+'255,2'+'35,24'+_0x4d61ed(0x495)+')',_0x455b4a['textA'+_0x4d61ed(0x38f)]='cente'+'r',_0x2199d1[_0x4d61ed(0x2ae)+_0x4d61ed(0x46a)+'ne']=_0xcc3ee0['sEMjr'],_0x364c94[_0x4d61ed(0x365)]=_0xcc3ee0['xxXIy'](_0xcc3ee0[_0x4d61ed(0x45f)],_0x37ef22[_0x4d61ed(0x2aa)](_0xcc3ee0[_0x4d61ed(0xff)](-0x1*0x152e+0x58a*0x7+-0x1*0x118c,_0x15de14)))+(_0x4d61ed(0x65a)+_0x4d61ed(0x3a5)+_0x4d61ed(0x589)+_0x4d61ed(0x3ac)+_0x4d61ed(0x195)+'i,san'+'s-ser'+'if'),_0x12e84e[_0x4d61ed(0x30b)+'ext'](_0x4e081e,_0xcc3ee0[_0x4d61ed(0x4aa)](_0x2c90b2,_0xcc3ee0[_0x4d61ed(0x4bb)](_0x5baaf7,-0x2*-0x316+-0x430+-0x1fa)),_0xcc3ee0[_0x4d61ed(0x384)](_0x311352,_0x376b9c/(0x431+0x159*-0x3+-0x24))-(_0x364ad0?(-0x2469+-0xdf*-0x26+0x354)*_0x196a46:0x2*-0xe27+-0x20ba*0x1+0x3d08)),_0x27544a&&(_0x3c47f1[_0x4d61ed(0x365)]=_0x4d61ed(0x51a)+_0x14565a[_0x4d61ed(0x2aa)](_0xcc3ee0['ZmiMk'](-0x229e+0x1ac6+0x7e1*0x1,_0x3fb3a1))+_0xcc3ee0[_0x4d61ed(0x4b6)],_0x2c996d[_0x4d61ed(0x344)+'tyle']=_0x549056?'#fff':'rgba('+_0x4d61ed(0x2de)+'35,24'+_0x4d61ed(0x613)+'5)',_0x103b09[_0x4d61ed(0x30b)+_0x4d61ed(0x332)](_0x46e52c,_0x5e58e2+_0xcc3ee0[_0x4d61ed(0x4bb)](_0x14bf54,0x1*-0x2011+0x1*0xd86+0x128d),_0xcc3ee0[_0x4d61ed(0x2fc)](_0x281713+_0xcc3ee0[_0x4d61ed(0x4bb)](_0x39cdb1,0x24bb+0x4*0x82c+-0x4569),(-0x70e+0x12bd*-0x2+0x2c9*0x10)*_0x33cb32))),_0x17e2fd[_0x4d61ed(0x3c0)+'re']();}else{_0x361cf5[_0x4d61ed(0x23f)]=_0x516826,_0xcc3ee0['qtUmz'](_0x38a7f2);var _0x156a42=_0x2a3ec9[_0x4d61ed(0x184)](_0x4a2045=>_0x4a2045['id']===_0x516826)||_0x2a3ec9[0xa77+0x2694+0x9cf*-0x5];_0x42895c[_0x4d61ed(0x458)+_0x4d61ed(0x153)+'t']=_0xcc3ee0[_0x4d61ed(0x4f9)]+_0x156a42['label'];for(var [_0x1559d3,_0x2e17c0]of _0x382829)_0x2e17c0[_0x4d61ed(0x25b)+_0x4d61ed(0x3be)][_0x4d61ed(0x367)+'e'](_0x4d61ed(0xf7)+'e',_0x1559d3===_0x516826);_0x455ec1[_0x4d61ed(0x1c4)+_0x4d61ed(0x324)+'ldren'](..._0x522c2e(_0x516826));}}return _0x32180c(_0x361cf5['cat']||_0x361784[_0x4a1cd2(0x552)]),setInterval(()=>{var _0x1b735b=_0x4a1cd2;if('JUhUm'!=='JUhUm')_0x31b381[_0x1b735b(0x50f)+'ed']=![];else{if(!_0x5d4343)return;var _0x250cce=_0x455ec1['child'+_0x1b735b(0x3f5)];for(var _0x5966c6=-0xe9a*0x1+0x1927+-0x49*0x25;_0x5966c6<_0x250cce[_0x1b735b(0x422)+'h'];_0x5966c6++){var _0x3e8fbc=_0x250cce[_0x5966c6][_0x1b735b(0x1a5)+'Selec'+'tor'](_0xcc3ee0[_0x1b735b(0x2f8)]);_0x3e8fbc&&(_0xcc3ee0['LzxAR'](_0x3e8fbc[_0x1b735b(0x458)+'onten'+'t'][_0x1b735b(0x3e5)+'Of'](_0xcc3ee0[_0x1b735b(0x147)]),-0x385+-0x2*0xc2d+0x1bdf*0x1)||_0x3e8fbc['textC'+'onten'+'t'][_0x1b735b(0x3e5)+'Of'](_0xcc3ee0['SAlsC'])===-0x11c9*-0x1+-0x185*-0x1+-0x134e)&&(_0x3e8fbc['textC'+_0x1b735b(0x153)+'t']=_0x362a0f['safeM'+'ode']?_0x1b735b(0x364)+_0x1b735b(0x64b)+'-\x20ove'+_0x1b735b(0x2f0)+_0x1b735b(0x218)+_0x1b735b(0x368)+_0x1b735b(0x38a)+_0x1b735b(0x2df)+_0x1b735b(0x2c8)+'\x20exit'+')':_0x362a0f['uwmk']?_0xcc3ee0[_0x1b735b(0x2fc)](_0xcc3ee0[_0x1b735b(0x2fc)](_0xcc3ee0['hNjjG'](_0xcc3ee0['QRAVS']+(_0x362a0f['hooks'+_0x1b735b(0x21c)]?_0xcc3ee0[_0x1b735b(0x40f)](_0x362a0f[_0x1b735b(0x392)+'Ok']+'/',_0x362a0f[_0x1b735b(0x392)+_0x1b735b(0x21c)])+('\x20hook'+'s'):_0x1b735b(0x166)+_0x1b735b(0x51c)+'med\x20('+_0x1b735b(0x171)+_0x1b735b(0x237)),_0x1b735b(0x1ca)+'me\x20')+(_0x362a0f['gameL'+_0x1b735b(0x523)]?_0x1b735b(0x341)+'d':_0x1b735b(0x4a2)+'ng')+_0xcc3ee0[_0x1b735b(0x418)],_0x362a0f[_0x1b735b(0x449)+_0x1b735b(0x22d)]?_0xcc3ee0['wBwBa']:_0x1b735b(0x50c))+(_0x1b735b(0x1e5)+'vemen'+'t\x20')+(_0x362a0f['movem'+'ents']?'held':_0x1b735b(0x50c)),_0x362a0f['lastE'+_0x1b735b(0x2ed)]?_0xcc3ee0[_0x1b735b(0x3c5)]+_0x362a0f['lastE'+_0x1b735b(0x2ed)]:''):_0x1b735b(0x3e9)+_0x1b735b(0x10f)+'NG\x20-\x20'+_0x1b735b(0x1a7)+_0x1b735b(0x44a)+'ly\x20(r'+'einst'+'all\x20t'+_0x1b735b(0x556)+'erscr'+'ipt)');}}},0x26b0+0x294+-0x255c),_0x353fb9;}var _0x90674c=_0x84837d(0x19f)+_0x84837d(0x16f)+'\x20{\x20al'+'l:\x20in'+'itial'+_0x84837d(0x528)+_0x84837d(0x48d)+'{\x20box'+_0x84837d(0x25a)+_0x84837d(0x274)+'order'+_0x84837d(0x325)+_0x84837d(0x45d)+'in:\x200'+';\x20fon'+_0x84837d(0x35b)+'ily:\x20'+'\x22Inte'+'r\x22,\x20\x22'+_0x84837d(0x45c)+_0x84837d(0x4d3)+_0x84837d(0x302)+'em-ui'+',\x20san'+'s-ser'+'if;\x20}'+_0x84837d(0x19f)+'.mn-p'+_0x84837d(0x5f5)+'{\x20pos'+_0x84837d(0x652)+_0x84837d(0x2bb)+_0x84837d(0x196)+';\x20rig'+_0x84837d(0x24a)+_0x84837d(0x1bf)+_0x84837d(0x46d)+'m:\x2024'+_0x84837d(0x253)+'idth:'+'\x20min('+'620px'+',\x20cal'+_0x84837d(0x150)+'vw\x20-\x20'+_0x84837d(0x651)+_0x84837d(0x24b)+_0x84837d(0x594)+'ght:\x20'+'min(4'+'80px,'+_0x84837d(0x487)+'(100v'+'h\x20-\x204'+'8px))'+';\x0a\x20\x20\x20'+_0x84837d(0x44b)+_0x84837d(0x1f7)+_0x84837d(0x42e)+'x;\x20ga'+_0x84837d(0x34f)+_0x84837d(0x38b)+'addin'+_0x84837d(0x65c)+_0x84837d(0x22f)+_0x84837d(0x158)+_0x84837d(0x27d)+_0x84837d(0x2bc)+_0x84837d(0x32a)+'point'+'er-ev'+_0x84837d(0x305)+'\x20auto'+_0x84837d(0x4a1)+_0x84837d(0x3fc)+_0x84837d(0x1b0)+_0x84837d(0x304)+_0x84837d(0x167)+'24,17'+_0x84837d(0x53e)+'82);\x20'+_0x84837d(0x31e)+_0x84837d(0x4fe)+'ilter'+_0x84837d(0x41f)+'r(22p'+_0x84837d(0x5c6)+_0x84837d(0x2a9)+_0x84837d(0x579)+_0x84837d(0x2e3)+'webki'+_0x84837d(0x5d7)+'kdrop'+_0x84837d(0x3ea)+'er:\x20b'+_0x84837d(0x598)+_0x84837d(0x2db)+_0x84837d(0x5a5)+_0x84837d(0x271)+_0x84837d(0x2fe)+_0x84837d(0x19f)+_0x84837d(0x1c3)+'-shad'+_0x84837d(0x137)+'\x200\x200\x20'+_0x84837d(0x330)+_0x84837d(0x4dc)+_0x84837d(0x562)+_0x84837d(0x625)+_0x84837d(0x343)+',\x20ins'+_0x84837d(0x26a)+_0x84837d(0x3b4)+'\x20rgba'+_0x84837d(0x2b8)+_0x84837d(0x2de)+_0x84837d(0x3d8)+_0x84837d(0x52d)+'\x2030px'+_0x84837d(0x2f2)+'\x20rgba'+_0x84837d(0x284)+_0x84837d(0x26c)+_0x84837d(0x535)+_0x84837d(0x403)+'pacit'+_0x84837d(0x1c9)+_0x84837d(0x398)+_0x84837d(0x5d4)+_0x84837d(0x5b9)+'nslat'+'eY(18'+_0x84837d(0x4f7)+_0x84837d(0x391)+_0x84837d(0x13c)+_0x84837d(0x305)+'\x20none'+_0x84837d(0x3a0)+_0x84837d(0x36a)+'on:\x20o'+_0x84837d(0x63a)+'y\x20.35'+_0x84837d(0x4f3)+_0x84837d(0x553)+'ansfo'+_0x84837d(0x2cf)+_0x84837d(0x675)+_0x84837d(0x663)+_0x84837d(0x17c)+_0x84837d(0x5ff)+'1,.36'+_0x84837d(0x5c0)+_0x84837d(0x5d2)+_0x84837d(0x272)+_0x84837d(0x51f)+_0x84837d(0x1f2)+_0x84837d(0x554)+'t-siz'+'e:\x2013'+'px;\x20}'+_0x84837d(0x19f)+'.mn-p'+'anel.'+_0x84837d(0x5f7)+'\x20{\x20op'+_0x84837d(0x57b)+_0x84837d(0x2b4)+'trans'+_0x84837d(0x434)+'\x20none'+_0x84837d(0x570)+_0x84837d(0x385)+'event'+'s:\x20au'+'to;\x20}'+_0x84837d(0x19f)+_0x84837d(0x5c1)+'ide\x20{'+_0x84837d(0x1b8)+_0x84837d(0x360)+_0x84837d(0x3af)+'\x20flex'+'-dire'+_0x84837d(0x4cc)+':\x20col'+'umn;\x20'+_0x84837d(0x263)+'-item'+'s:\x20ce'+'nter;'+'\x20gap:'+_0x84837d(0x48b)+'\x20widt'+'h:\x2062'+'px;\x20f'+_0x84837d(0x42d)+'none;'+_0x84837d(0x4bc)+_0x84837d(0x423)+'12px\x20'+(_0x84837d(0x11f)+'rder-'+'radiu'+'s:\x2016'+_0x84837d(0x1d5)+_0x84837d(0x5d2)+'backg'+'round'+_0x84837d(0x49c)+'a(255'+_0x84837d(0x2f1)+'255,.'+_0x84837d(0x3a3)+'\x20box-'+'shado'+_0x84837d(0x27a)+'set\x200'+_0x84837d(0x16a)+'1px\x20r'+_0x84837d(0x4dc)+_0x84837d(0x562)+_0x84837d(0x625)+',.05)'+_0x84837d(0x528)+'\x20\x20\x20.m'+_0x84837d(0x531)+_0x84837d(0x21d)+_0x84837d(0x592)+_0x84837d(0x52c)+_0x84837d(0x5db)+'lace-'+'items'+':\x20cen'+'ter;\x20'+'width'+_0x84837d(0x527)+_0x84837d(0x4d6)+_0x84837d(0x467)+'\x2032px'+_0x84837d(0x528)+_0x84837d(0x4b4)+'n-log'+'o-svg'+'\x20{\x20wi'+_0x84837d(0x4b1)+_0x84837d(0x340)+'\x20heig'+_0x84837d(0x24a)+_0x84837d(0x27f)+_0x84837d(0x380)+_0x84837d(0x5af)+_0x84837d(0x644)+_0x84837d(0x3aa)+_0x84837d(0x54c)+_0x84837d(0x181)+_0x84837d(0x639)+_0x84837d(0x2a6)+_0x84837d(0x607)+'x\x20rgb'+'a(255'+',107,'+'157,.'+_0x84837d(0x620)+_0x84837d(0x53d)+'\x20.mn-'+_0x84837d(0x177)+_0x84837d(0x1b8)+_0x84837d(0x360)+_0x84837d(0x3af)+_0x84837d(0x1eb)+_0x84837d(0x18e)+_0x84837d(0x2c3)+'enter'+';\x20jus'+'tify-'+_0x84837d(0x2d6)+_0x84837d(0x569)+'enter'+_0x84837d(0x4a9)+'th:\x205'+_0x84837d(0x32a)+_0x84837d(0x39e)+_0x84837d(0x39b)+_0x84837d(0x22f)+'order'+':\x200;\x20'+'borde'+'r-rad'+_0x84837d(0x2ba)+_0x84837d(0x2ee)+_0x84837d(0x19f)+'\x20\x20bac'+_0x84837d(0x5ab)+'nd:\x20t'+'ransp'+_0x84837d(0x394)+';\x20col'+'or:\x20r'+_0x84837d(0x4dc)+_0x84837d(0x17e)+'8,242'+',.4);'+_0x84837d(0x5bc)+_0x84837d(0x1d8)+'ointe'+_0x84837d(0x16c)+'nt-si'+'ze:\x201'+_0x84837d(0x4eb)+'font-'+'weigh'+_0x84837d(0x19a)+_0x84837d(0x282)+_0x84837d(0x5fd)+'mn-ta'+_0x84837d(0x50d)+_0x84837d(0x13d)+_0x84837d(0x241)+':\x20rgb'+'a(246'+_0x84837d(0x52a)+_0x84837d(0x395)+'8);\x20}'+_0x84837d(0x19f)+_0x84837d(0x3df)+_0x84837d(0x457)+_0x84837d(0x3bb)+_0x84837d(0x60c)+_0x84837d(0x172)+_0x84837d(0x295)+'d;\x20ba'+_0x84837d(0x1b0)+'und:\x20'+_0x84837d(0x167)+'255,1'+_0x84837d(0x17a)+'7,.1)'+_0x84837d(0x528)+'\x20\x20\x20.m'+_0x84837d(0x375)+_0x84837d(0x628)+'lex:\x20'+_0x84837d(0x152)+_0x84837d(0x621)+'th:\x200'+_0x84837d(0x198)+_0x84837d(0x262)+_0x84837d(0x672)+';\x20fle'+_0x84837d(0x480)+'ectio'+'n:\x20co'+_0x84837d(0x65d)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x84837d(0x51e)+'{\x20dis'+_0x84837d(0x262)+_0x84837d(0x672)+';\x20ali'+'gn-it'+_0x84837d(0x1da)+'cente'+'r;\x20ga'+_0x84837d(0x201)+_0x84837d(0x38b)+_0x84837d(0x62a)+_0x84837d(0x278)+_0x84837d(0x47d)+'\x2012px'+';\x20use'+_0x84837d(0x48f)+'ect:\x20'+_0x84837d(0x236)+_0x84837d(0x393)+_0x84837d(0x517)+'-titl'+'es\x20{\x20'+_0x84837d(0x30a)+_0x84837d(0x5b1)+'in-wi'+'dth:\x20'+_0x84837d(0x282)+'\x20\x20\x20\x20.'+'mn-h\x20'+'{\x20fon'+_0x84837d(0x100)+_0x84837d(0x412)+'px;\x20f'+'ont-w'+_0x84837d(0x39c)+':\x20650'+';\x20}\x0a\x20'+_0x84837d(0x4b4)+'n-sub'+'\x20{\x20fo'+'nt-si'+_0x84837d(0x369)+'1px;\x20'+_0x84837d(0x32d))+(_0x84837d(0x38e)+_0x84837d(0x354)+_0x84837d(0x5fd)+_0x84837d(0x145)+_0x84837d(0x516)+'\x20disp'+_0x84837d(0x360)+'grid;'+_0x84837d(0x15a)+_0x84837d(0x66b)+_0x84837d(0x2c3)+'enter'+';\x20wid'+_0x84837d(0x315)+'8px;\x20'+'heigh'+_0x84837d(0x5bd)+_0x84837d(0x22f)+'order'+':\x200;\x20'+'borde'+'r-rad'+_0x84837d(0x2ba)+'8px;\x20'+_0x84837d(0x503)+_0x84837d(0x2aa)+_0x84837d(0x5b9)+_0x84837d(0x135)+_0x84837d(0x5cc)+_0x84837d(0x241)+_0x84837d(0x5aa)+'erit;'+'\x20opac'+_0x84837d(0x2be)+_0x84837d(0x5f6)+'curso'+_0x84837d(0x131)+_0x84837d(0x35c)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x84837d(0x514)+_0x84837d(0x1ad)+_0x84837d(0x134)+_0x84837d(0x2ca)+'ity:\x20'+'1;\x20ba'+_0x84837d(0x1b0)+_0x84837d(0x304)+_0x84837d(0x167)+_0x84837d(0x2de)+_0x84837d(0x562)+'5,.05'+_0x84837d(0x267)+_0x84837d(0x5fd)+_0x84837d(0x145)+'ose\x20s'+_0x84837d(0x3ec)+_0x84837d(0x62d)+':\x2014p'+_0x84837d(0x4d6)+_0x84837d(0x467)+_0x84837d(0x227)+_0x84837d(0x674)+_0x84837d(0x3f3)+'ne;\x20s'+_0x84837d(0x61b)+':\x20cur'+'rentC'+'olor;'+_0x84837d(0x5ca)+'ke-wi'+'dth:\x20'+'2;\x20st'+'roke-'+'linec'+'ap:\x20r'+'ound;'+_0x84837d(0x393)+'\x20\x20.mn'+'-cols'+'\x20{\x20fl'+'ex:\x201'+_0x84837d(0x29c)+_0x84837d(0x1cf)+_0x84837d(0x3f6)+_0x84837d(0x502)+_0x84837d(0x615)+_0x84837d(0x3cd)+_0x84837d(0x619)+'displ'+_0x84837d(0x5f4)+_0x84837d(0x247)+_0x84837d(0x126)+'templ'+_0x84837d(0x233)+_0x84837d(0x1fc)+_0x84837d(0x16d)+_0x84837d(0x31b)+'auto-'+'fill,'+'\x20minm'+_0x84837d(0x4ac)+'0px,\x20'+'1fr))'+_0x84837d(0x357)+'gn-it'+_0x84837d(0x1da)+'start'+';\x20ali'+_0x84837d(0x4a6)+_0x84837d(0x3e3)+':\x20sta'+_0x84837d(0x266)+'ap:\x201'+'0px;\x20'+'paddi'+_0x84837d(0x51b)+_0x84837d(0x2fb)+_0x84837d(0x13b)+_0x84837d(0x528)+'\x20\x20\x20.m'+'n-col'+_0x84837d(0x1ab)+_0x84837d(0x41a)+_0x84837d(0x4f5)+'llbar'+'\x20{\x20wi'+'dth:\x20'+'8px;\x20'+_0x84837d(0x53d)+_0x84837d(0x31f)+'cols:'+':-web'+_0x84837d(0x640)+'croll'+_0x84837d(0x111)+_0x84837d(0x5b2)+_0x84837d(0x3b6)+_0x84837d(0x5ab)+_0x84837d(0x400)+_0x84837d(0x4dc)+_0x84837d(0x562)+_0x84837d(0x625)+',.08)'+_0x84837d(0x460)+_0x84837d(0x5b6)+'adius'+_0x84837d(0x155)+_0x84837d(0x528)+_0x84837d(0x3f4)+_0x84837d(0x12e)+'d\x20{\x20b'+_0x84837d(0x158)+'-radi'+'us:\x201'+_0x84837d(0x32a)+_0x84837d(0x503)+'round'+_0x84837d(0x49c)+_0x84837d(0x1b1)+_0x84837d(0x2f1)+'255,.'+_0x84837d(0x3a3)+'\x20box-'+'shado'+_0x84837d(0x27a)+'set\x200'+'\x200\x200\x20'+_0x84837d(0x330)+'gba(2'+_0x84837d(0x562)+_0x84837d(0x625)+_0x84837d(0x627)+_0x84837d(0x528)+'\x20\x20\x20.s'+'k-car'+'d.on\x20'+_0x84837d(0x3b6)+_0x84837d(0x5ab)+_0x84837d(0x400)+_0x84837d(0x4dc)+'55,25'+'5,255'+',.04)'+_0x84837d(0x123)+_0x84837d(0x661)+'ow:\x20i'+_0x84837d(0x2b9)+_0x84837d(0x2a7)+_0x84837d(0x506)+_0x84837d(0x167)+'255,1'+_0x84837d(0x17a)+_0x84837d(0x36b)+');\x20}\x0a'+_0x84837d(0x5fd)+_0x84837d(0x1f9)+'rd-he'+'ad\x20{\x20'+_0x84837d(0x3b2))+(_0x84837d(0x484)+'lex;\x20'+_0x84837d(0x263)+'-item'+_0x84837d(0x3c7)+'nter;'+'\x20gap:'+_0x84837d(0x66d)+_0x84837d(0x4bc)+'ing:\x20'+_0x84837d(0x4d1)+_0x84837d(0x667)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+'-card'+_0x84837d(0x53a)+_0x84837d(0x2d5)+_0x84837d(0x42d)+_0x84837d(0x152)+'n-wid'+_0x84837d(0x1d0)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+_0x84837d(0x185)+'le\x20st'+'rong\x20'+'{\x20fon'+_0x84837d(0x100)+'e:\x2013'+_0x84837d(0x3ed)+_0x84837d(0x658)+_0x84837d(0x39c)+':\x20600'+';\x20col'+'or:\x20r'+'gba(2'+'46,23'+'8,242'+_0x84837d(0x5cd)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+_0x84837d(0x129)+_0x84837d(0x647)+'ard-t'+'itle\x20'+_0x84837d(0x4c8)+_0x84837d(0x4d0)+_0x84837d(0x63f)+'\x20#fff'+_0x84837d(0x2fd)+_0x84837d(0x53d)+'\x20.sk-'+_0x84837d(0x5c4)+_0x84837d(0x36c)+_0x84837d(0x408)+_0x84837d(0x471)+_0x84837d(0x3b8)+_0x84837d(0x4eb)+_0x84837d(0x53d)+_0x84837d(0x65b)+_0x84837d(0x57d)+'\x20{\x20fo'+'nt-si'+_0x84837d(0x369)+'1px;\x20'+_0x84837d(0x32d)+_0x84837d(0x38e)+'4;\x20ma'+_0x84837d(0x38d)+'botto'+'m:\x206p'+_0x84837d(0x5ec)+'\x20\x20\x20\x20.'+_0x84837d(0x411)+_0x84837d(0x18f)+'ispla'+_0x84837d(0x5d8)+'ex;\x20a'+'lign-'+_0x84837d(0x44d)+_0x84837d(0x26e)+_0x84837d(0x4ff)+'gap:\x20'+_0x84837d(0x596)+_0x84837d(0x1a9)+'ng:\x204'+'px\x200;'+_0x84837d(0x217)+'-size'+_0x84837d(0x144)+_0x84837d(0x27f)+_0x84837d(0x53d)+_0x84837d(0x65b)+'label'+_0x84837d(0x2bf)+_0x84837d(0x2a2)+';\x20col'+'or:\x20r'+'gba(2'+'46,23'+_0x84837d(0x632)+',.75)'+';\x20}\x0a\x20'+_0x84837d(0x3f4)+_0x84837d(0x5a8)+_0x84837d(0x656)+_0x84837d(0x592)+'y:\x20bl'+'ock;\x20'+'font-'+_0x84837d(0x46e)+_0x84837d(0x156)+_0x84837d(0x587)+'city:'+'\x20.4;\x20'+_0x84837d(0x53d)+_0x84837d(0x65b)+'switc'+_0x84837d(0x358)+_0x84837d(0x3ca)+'on:\x20r'+'elati'+_0x84837d(0x26b)+_0x84837d(0x34a)+_0x84837d(0x664)+_0x84837d(0x101)+'ght:\x20'+'14px;'+'\x20bord'+'er:\x200'+';\x20bor'+'der-r'+_0x84837d(0x2f3)+_0x84837d(0x164)+'x;\x20ba'+'ckgro'+_0x84837d(0x304)+_0x84837d(0x167)+_0x84837d(0x2de)+_0x84837d(0x562)+'5,.07'+_0x84837d(0x56f)+_0x84837d(0x2c7)+_0x84837d(0x33b)+'ter;\x20'+'flex:'+'\x20none'+_0x84837d(0x528)+_0x84837d(0x3f4)+'k-swi'+'tch::'+_0x84837d(0x348)+'\x20{\x20co'+_0x84837d(0x3e3)+':\x20\x22\x22;'+'\x20posi'+'tion:'+_0x84837d(0x121)+_0x84837d(0x5c8)+'\x20top:'+'\x203px;'+'\x20left'+_0x84837d(0x5e3)+_0x84837d(0x4a9)+'th:\x208'+_0x84837d(0x1f6)+'eight'+':\x208px'+_0x84837d(0x460)+'der-r'+_0x84837d(0x2f3)+_0x84837d(0x4e9)+';\x20bac'+_0x84837d(0x5ab)+_0x84837d(0x400)+_0x84837d(0x4dc)+_0x84837d(0x562)+_0x84837d(0x625)+_0x84837d(0x47a)+_0x84837d(0x3a0)+'nsiti'+_0x84837d(0x54e)+_0x84837d(0x1a0)+'2s,\x20b'+'ackgr'+_0x84837d(0x20e)+'.2s;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x84837d(0x43d)+_0x84837d(0x4cb)+'a-che'+_0x84837d(0x459)+_0x84837d(0x4ef)+_0x84837d(0x3f1)+_0x84837d(0x503)+_0x84837d(0x2aa)+_0x84837d(0x49c))+('a(255'+',107,'+_0x84837d(0x186)+'25);\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x84837d(0x43d)+'h[ari'+_0x84837d(0x20c)+_0x84837d(0x459)+_0x84837d(0x4ef)+'\x22]::a'+'fter\x20'+'{\x20lef'+_0x84837d(0x243)+_0x84837d(0x22f)+'ackgr'+'ound:'+_0x84837d(0x1fa)+'b9d;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'field'+_0x84837d(0x3bf)+'ckgro'+'und:\x20'+'rgba('+'255,2'+'55,25'+_0x84837d(0x235)+'5);\x20b'+'order'+_0x84837d(0x335)+_0x84837d(0x4e0)+_0x84837d(0x438)+'ius:\x20'+_0x84837d(0x4e3)+'color'+_0x84837d(0x42b)+'eef2;'+'\x20padd'+_0x84837d(0x423)+'6px\x209'+_0x84837d(0x3ed)+_0x84837d(0x50a)+'ize:\x20'+_0x84837d(0x3d6)+_0x84837d(0x437)+_0x84837d(0x346)+':\x20non'+_0x84837d(0x249)+_0x84837d(0x4ed)+_0x84837d(0x127)+'inset'+'\x200\x200\x20'+'0\x201px'+'\x20rgba'+'(255,'+'255,2'+'55,.0'+'5);\x20}'+'\x0a\x20\x20\x20\x20'+_0x84837d(0x59f)+'ield\x20'+_0x84837d(0x329)+_0x84837d(0x538)+_0x84837d(0x277)+'ound:'+'\x20#221'+'419;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'range'+_0x84837d(0x12b)+_0x84837d(0x1f7)+':\x20fle'+'x;\x20al'+'ign-i'+_0x84837d(0x3a7)+_0x84837d(0x169)+'er;\x20g'+'ap:\x208'+_0x84837d(0x1dd)+_0x84837d(0x19f)+'.sk-s'+_0x84837d(0x293)+_0x84837d(0x5ee)+_0x84837d(0x41a)+_0x84837d(0x1e2)+_0x84837d(0x1c2)+'e:\x20no'+_0x84837d(0x51d)+_0x84837d(0x4b3)+'ance:'+_0x84837d(0x175)+_0x84837d(0x4a9)+_0x84837d(0x46b)+'0px;\x20'+'heigh'+_0x84837d(0x146)+_0x84837d(0xf4)+_0x84837d(0x1b0)+_0x84837d(0x304)+_0x84837d(0x281)+_0x84837d(0x4b0)+_0x84837d(0x3c9)+_0x84837d(0x5fd)+_0x84837d(0x31c)+_0x84837d(0x413)+_0x84837d(0x179)+'kit-s'+_0x84837d(0x293)+_0x84837d(0x4c1)+'able-'+_0x84837d(0x4e8)+_0x84837d(0x665)+_0x84837d(0x467)+_0x84837d(0x370)+_0x84837d(0x524)+_0x84837d(0x48e)+_0x84837d(0x351)+'\x202px;'+_0x84837d(0x442)+_0x84837d(0x3bc)+_0x84837d(0x653)+_0x84837d(0x43f)+_0x84837d(0x2d4)+_0x84837d(0x3a4)+_0x84837d(0x295)+_0x84837d(0x410)+'f6b9d'+_0x84837d(0x614)+'\x20/\x20va'+_0x84837d(0x3fa)+',\x2050%'+_0x84837d(0x432)+'%\x20no-'+'repea'+'t,\x20rg'+'ba(25'+'5,255'+_0x84837d(0x2f1)+_0x84837d(0x5be)+_0x84837d(0x393)+_0x84837d(0x522)+_0x84837d(0x541)+'er::-'+_0x84837d(0x11d)+_0x84837d(0x32e)+'der-t'+_0x84837d(0x5b2)+'{\x20-we'+'bkit-'+_0x84837d(0x5a9)+_0x84837d(0x49d)+':\x20non'+_0x84837d(0x320)+_0x84837d(0x4b1)+'6px;\x20'+'heigh'+_0x84837d(0x381)+'x;\x20ma'+_0x84837d(0x38d)+_0x84837d(0xfc)+'-2px;'+_0x84837d(0x524)+_0x84837d(0x48e)+_0x84837d(0x351)+_0x84837d(0x2b7)+'\x20back'+_0x84837d(0x3bc)+_0x84837d(0x5a3)+_0x84837d(0x36f)+_0x84837d(0x528)+_0x84837d(0x3f4)+_0x84837d(0xf8)+'\x20{\x20fo'+'nt-si'+_0x84837d(0x369)+'1px;\x20'+_0x84837d(0x234)+'weigh'+_0x84837d(0x60d)+'0;\x20mi'+_0x84837d(0x621)+_0x84837d(0x315)+'8px;\x20'+_0x84837d(0x563)+_0x84837d(0x263)+_0x84837d(0x2c4)+'ht;\x20c'+'olor:'+_0x84837d(0x10a)+_0x84837d(0x1c5)+'238,2'+'42,.8'+_0x84837d(0x267)+_0x84837d(0x5fd)+_0x84837d(0x1ed)+_0x84837d(0x1f5))+('\x20widt'+_0x84837d(0x15e)+_0x84837d(0x1f6)+_0x84837d(0x39c)+':\x2022p'+_0x84837d(0x363)+'rder:'+_0x84837d(0x509)+'order'+_0x84837d(0x27d)+_0x84837d(0x373)+_0x84837d(0x22f)+'ackgr'+'ound:'+'\x20none'+_0x84837d(0x3f9)+'ding:'+_0x84837d(0x446)+'ursor'+':\x20poi'+_0x84837d(0x132)+'\x20}\x0a\x20\x20'+_0x84837d(0x522)+_0x84837d(0x13f)+_0x84837d(0x47c)+'nt-si'+'ze:\x201'+'1px;\x20'+_0x84837d(0x241)+':\x20rgb'+_0x84837d(0x49b)+',238,'+'242,.'+_0x84837d(0x624)+_0x84837d(0x62a)+_0x84837d(0x494)+'x\x200;\x20'+_0x84837d(0x53d)+_0x84837d(0x65b)+'note.'+'err\x20{'+'\x20colo'+'r:\x20#f'+'f7a93'+_0x84837d(0x528)+_0x84837d(0x3f4)+_0x84837d(0x350)+_0x84837d(0x58c)+_0x84837d(0x2c5)+'elf:\x20'+_0x84837d(0x107)+_0x84837d(0x33a)+_0x84837d(0x460)+_0x84837d(0x64d)+'0;\x20bo'+_0x84837d(0x17d)+_0x84837d(0x608)+_0x84837d(0x34c)+_0x84837d(0x3db)+'dding'+_0x84837d(0x60b)+_0x84837d(0x163)+_0x84837d(0x39f)+_0x84837d(0x5ab)+_0x84837d(0x251)+'ff6b9'+_0x84837d(0x1a6)+'lor:\x20'+_0x84837d(0x5b7)+_0x84837d(0x217)+_0x84837d(0x657)+_0x84837d(0x144)+_0x84837d(0x27f)+_0x84837d(0x234)+_0x84837d(0x4b5)+_0x84837d(0x19a)+'0;\x20cu'+_0x84837d(0x2c7)+_0x84837d(0x33b)+_0x84837d(0x4ff)+'}\x0a\x20\x20\x20'+_0x84837d(0x65b)+'btn:h'+_0x84837d(0x2eb)+'{\x20fil'+_0x84837d(0x40d)+_0x84837d(0x3a1)+'tness'+_0x84837d(0x327)+';\x20}\x0a\x20'+'\x20\x20\x20');window[_0x84837d(0x54b)+_0x84837d(0x650)+'stene'+'r']('keydo'+'wn',_0x489097=>{var _0x3885b1=_0x84837d;_0x489097[_0x3885b1(0x433)]===_0x2e2177['YJzGF']&&(_0x2e2177['rIAOR'](_0x2e2177[_0x3885b1(0x35f)],_0x3885b1(0x1b6))?(_0x489097[_0x3885b1(0x3bd)+_0x3885b1(0x490)+_0x3885b1(0x40a)](),_0x59dd2d()):(_0xb33e74['damag'+'eValu'+'e']=_0xfb7426,_0x32b42b()));},!![]);var _0x3768ff=document['creat'+'eElem'+_0x84837d(0x285)]('div');_0x3768ff[_0x84837d(0x1e4)][_0x84837d(0x59d)+'xt']=_0x84837d(0x3b5)+'ion:f'+_0x84837d(0x240)+_0x84837d(0x1d1)+'2px;r'+_0x84837d(0x467)+_0x84837d(0x667)+'z-ind'+'ex:21'+_0x84837d(0x206)+'646;c'+'ursor'+_0x84837d(0x1bd)+_0x84837d(0x655)+'idth:'+'26px;'+_0x84837d(0x39e)+_0x84837d(0x507)+'x;opa'+'city:'+_0x84837d(0x54f)+'ransi'+'tion:'+'opaci'+'ty\x200.'+_0x84837d(0x297)+'inter'+_0x84837d(0x3b0)+_0x84837d(0x3c4)+'to;fi'+_0x84837d(0x475)+'drop-'+'shado'+_0x84837d(0x1bb)+_0x84837d(0x2fb)+'rgba('+_0x84837d(0x581)+'07,15'+'7,0.7'+'))',_0x3768ff[_0x84837d(0x2d2)+_0x84837d(0x604)]=_0x2e2177[_0x84837d(0x478)],_0x3768ff[_0x84837d(0x286)]=_0x2e2177[_0x84837d(0x238)],_0x3768ff['onmou'+'seent'+'er']=()=>_0x3768ff[_0x84837d(0x1e4)]['opaci'+'ty']='1',_0x3768ff['onmou'+_0x84837d(0x3cc)+'ve']=()=>_0x3768ff[_0x84837d(0x1e4)]['opaci'+'ty']='0.5',_0x3768ff[_0x84837d(0x313)+'ck']=_0x1f0520=>{var _0x27bdc5=_0x84837d;_0x361784[_0x27bdc5(0x2c6)](_0x27bdc5(0x292),'rgJMH')?_0x3cda69[_0x27bdc5(0x433)]===_0x27bdc5(0x5e2)+'t'&&(_0xb91d80[_0x27bdc5(0x3bd)+_0x27bdc5(0x490)+'ault'](),_0x361784[_0x27bdc5(0x4a4)](_0x170e20)):(_0x1f0520[_0x27bdc5(0x3b3)+'ropag'+_0x27bdc5(0x2e1)](),_0x59dd2d());},document[_0x84837d(0x61a)][_0x84837d(0x583)+'dChil'+'d'](_0x3768ff),_0x2e2177['rQSHF'](_0x2a70ee),_0x2e2177['byMhn'](requestAnimationFrame,_0x27948c),console['log'](_0x84837d(0x649)+'ra-ko'+_0x84837d(0x542)+'enu\x20r'+_0x84837d(0x4a5)+_0x84837d(0x5e1)+':',_0x362a0f['uwmk']);});})()));function _0x2152(_0x5a550f,_0x39a5e8){_0x5a550f=_0x5a550f-(-0xa5d+-0x1e38+0x2988);var _0x20e0e5=_0x2392();var _0x6d3497=_0x20e0e5[_0x5a550f];if(_0x2152['gawqTF']===undefined){var _0x4fe540=function(_0x2e78e4){var _0x41b6e0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x341d6b='',_0x5202cb='';for(var _0x1733eb=0x183a+0x1f*0xd3+-0x31c7,_0x3e09c2,_0x19376d,_0x4abe95=-0x1f*0xed+-0x1*-0x12cd+0x9e6;_0x19376d=_0x2e78e4['charAt'](_0x4abe95++);~_0x19376d&&(_0x3e09c2=_0x1733eb%(0x9*0x2e7+-0x55*0x72+-0x1f*-0x61)?_0x3e09c2*(0x6*-0xcb+-0x759*-0x2+-0x9b0)+_0x19376d:_0x19376d,_0x1733eb++%(-0x1*-0xde1+-0x1029+-0x93*-0x4))?_0x341d6b+=String['fromCharCode'](-0xd*0x301+-0x1*0x1625+0x9*0x6e9&_0x3e09c2>>(-(0x23*0xe9+0x164f*0x1+-0x1b14*0x2)*_0x1733eb&-0x1*0xedd+-0x177e+-0x28f*-0xf)):-0x5*0x288+-0x16f*0xa+0x5*0x566){_0x19376d=_0x41b6e0['indexOf'](_0x19376d);}for(var _0x32d54b=-0x1d4c+0x1*-0x2419+-0x1*-0x4165,_0x5849d6=_0x341d6b['length'];_0x32d54b<_0x5849d6;_0x32d54b++){_0x5202cb+='%'+('00'+_0x341d6b['charCodeAt'](_0x32d54b)['toString'](0x14ea+0xf61+-0x243b))['slice'](-(-0x622+-0x2*0x956+0x18d0));}return decodeURIComponent(_0x5202cb);};_0x2152['EKhPaZ']=_0x4fe540,_0x2152['ZjZXSD']={},_0x2152['gawqTF']=!![];}var _0x424c2e=_0x20e0e5[0x6*-0xd7+0x18d3+-0x13c9*0x1],_0x5c796d=_0x5a550f+_0x424c2e,_0x11a637=_0x2152['ZjZXSD'][_0x5c796d];return!_0x11a637?(_0x6d3497=_0x2152['EKhPaZ'](_0x6d3497),_0x2152['ZjZXSD'][_0x5c796d]=_0x6d3497):_0x6d3497=_0x11a637,_0x6d3497;}function _0x2392(){var _0x291563=['AuPtu00','ihjLBg8','zZOGmNa','mcWWlJG','Bw8GDg8','BgvMDa','ignVB2W','sgvPz2G','ifTfwfa','ysGYndy','oIbYz2i','CMfUy2u','igH1CNq','CYbHBgW','CMvMAxG','oWOGica','Bg9HzgK','zxjYB3i','EvzhDe8','zwfKEs4','z24Ty28','Aw5NicS','A3nty2e','oYb3Awq','EhHysxK','A0DYqKW','yxGOmJu','igj1AwW','BwuG','mhW0Fde','CgfYzw4','zhrOoIa','AhnitNu','ChbLyxi','icaGlM0','D2vPz2G','zKn3Bwe','tMfTzq','uMf0zq','vvDnsW','BerPzsK','C1bqD0y','ihbHzgq','mtH8nxW','y2HtAxO','ifvUAxq','ihn0AwW','lxj1BM4','B3jZige','BgfZDeu','lxDPzhq','yxr0ywm','tw92zw0','tgvNAw8','C3rYB24','Bg9Hzc4','zLjOqKW','AfTHCMK','y3rPB24','C29ezxy','CNrPzgu','zwf0CYa','zYb7igm','mtfWEca','C2STAgK','ifvjiIW','BhPhuNm','zsbJEd0','EdSGAgu','ywXSihq','lwHVCa','DeTVt1C','u3rHDhu','CM9Rzxm','z2jHkdi','z2DSzwq','psjTBI0','wK5wzMW','yM9Yzgu','ChbLBNm','B2XPBMu','nNb4oYa','mNWWFde','A3nqB3m','qxbWBhK','yNv0Dg8','DhjHy2S','oIa1mcu','y3vXAMy','mhb4oYa','CYbZChi','Ec1ZAge','zwfK','iNrYDwu','tvvovgW','psiJzMy','B25PBNa','CYbLyxm','zxiGC2W','lxnJCM8','CMeTA28','ChGPoYa','Cg9W','D1HyAxO','BYb0Agu','B3nWywm','y21bwgK','iezquW','CM9Wlwy','DgvYoYa','AxrJAa','ExDXCgm','oYbVDMu','yMfJA2C','BLfACee','wxDgy3C','idfWEca','DdOYnNa','zgL2Bwi','ida7igi','B250lxm','C1nMB3O','BM9Uzq','yJPOB3y','Bg9NBY0','zw5HyMW','t1rYB2m','v2LKDgG','BgW+','rfjmuwW','BI1JBg8','mtiYntreq1PgBuK','B3nLihS','icaUBw4','ndm2mde3zMXlvhvI','q29TyMe','nJaWia','BMC6ida','A3mGyxi','BMu7ige','lxrVCca','CJOGi2y','ys5RB3u','FdiYFde','icaUC2S','B2fKzwq','igjVCMq','Dg9W','rwTXvwK','oIaZmNa','oYb9cIa','zffdsLe','ldiZocW','oJa7D2K','EtOGz3i','nsKSida','Aw9UoMy','rejIAxe','B2STCMu','BI1SB2C','rLbtig8','mtn8mtK','A2vizwe','ktSkica','psjYB3u','Bw92zw0','BIb7igi','iM5VBMu','lxrPDgW','idi0iIa','ENfqCg8','FqOGica','ldiXlc4','Fdr8mxW','qNLjza','lxnSAwq','DxjDig0','AgfZ','qLbyv3m','uuvwC3i','ltqTnY4','uK1c','rwzQA1C','zg9JDw0','Bej3zMy','ywrKrxy','AwX0zxi','y2fWtw8','B246igW','mc41o3q','z2uUiei','C3bHBG','Eg9OtuO','zsWGDhi','oYbMB24','lMrSBa','AguGDxm','vuHvsvC','vMfSDwu','rhjeqMm','ugn0','uMvJB2K','CMvHzey','u25QCwO','q291BNq','mhG2mda','igjHBIa','DxjLihq','ntuSmJu','Dgv4Dc0','vMXlCwS','igzVDxi','zhzireq','s0TJAK0','DxDTAW','BNq6igm','nxm0idi','zMLSzw4','Aw5WDxq','nxWYm3W','BwvsDw4','ktSGy3u','oYbWB2K','r1jdtg4','yw5Jzs4','tg9tzgW','4Ocuig92zq','y2XLyxi','BMvJyxa','C2STzMK','yKrTwhm','zsGXnta','BM93','ywnPDhK','q3bju2W','BwrLC2m','nJaWide','zgTPDa','rKnSB2G','mJu1lde','A2v5C3q','yxbWzw4','y2HdB2W','C1Lrwhi','ugPYq2O','oYbVCge','DgGUsw4','lxnLCMK','AwnRihm','D29zqum','ihSGywW','zxzLBIa','wMvYB2u','z29KicG','Fdn8mNW','y29TyMe','AxnWBge','zguSihq','Ec1OzwK','l3jHCgK','ohb4oYa','t1vsx18','BhvYkdi','zg5tENi','igXLyxy','zwfSDgG','D2L0Ag8','y3nZvgu','y2fWDhu','lNnRlwy','mJiSocW','u1jOuxm','AgvHzgu','zdOGi2y','BhrOige','C2f0Dxi','m3WXmhW','CIbHzhy','AY1OAw4','yxbWzwe','oIbPBMG','A2DYB3u','DNnuqMO','z2fTzuW','Ag9VA0m','Bg93oIa','ihDOAwm','ide7ig0','AhvTyIa','z2v0sxq','igvMzMu','BwLKzgW','zgvYlxi','i2zMzJS','BNbnCKi','oIb0CMe','Bw4TDge','igq9iK0','ign1CNm','DdOGmJG','lJa4ktS','zs5bCha','ldePoWO','lM1Ulxm','s0PxwMG','whfVz3q','BwjVzhK','AwvZlG','EcKGC2e','Bg9Hzca','Bhv0ztS','AguGCMu','ihn0CM8','zvn0EwW','zw50oYa','lc40nsK','B2j1C0S','v2nQzwW','mhWYFdC','D29YAYa','icaGica','ugf0Aa','C2zVCM0','zsaOt0G','Aw9FnZi','Dc1Iywm','EtOGzMW','lIbuDxi','owqIihm','Awq7iha','C3rYAw4','CI52mq','mhGYnta','kYbmtui','CYb3B24','ifvxtuS','sw5Zzxi','oIaZChG','D1biCxm','mtySmc4','sw5PDgK','qM90Dg8','Ad0ImIi','tgvMDca','Fdn8na','sNvTCfq','EdSGFqO','rhHQwMC','ihSGlxC','EvvZzuq','Ag9VA1a','Bw92zq','B2LS','sNvTCca','yxK6igC','yw5LBca','lJq1oYa','C2HVD24','t0HLywW','zvzHBhu','B1nsuhq','igzPBgW','sgziEfu','icaGic4','zxrhyw0','kc4YmIW','zxrKrha','BhKGkhi','y2HLCYa','ns00idC','sfrnta','uMTRwxi','Aw5Zzxq','idaGnha','CMfKAxu','ieTLzxa','zu9IsNO','oIa4ChG','EYbJB2W','DdOGnJa','vw5PDhK','EuvUz2K','C21HBgW','zwnLCe8','r3LZrwK','mcWWlJu','ksaWida','CMzSB3C','v0fttsa','zxjZy3i','ltiUns0','DxrVoYa','yM9KEq','DhjVA2u','yxb0Dxi','iJeUnsi','zxj5idi','Bw91C2u','ocKPoYa','BI13Awq','CMvSB2e','ltiUnsa','nsK7iha','nsWYntu','sfn0B3G','lc4WnsK','BIb7igy','tKCG4Ocuia','ywrKAw4','r2nXELG','v0nlCeu','D2LKDgG','D0P6y0u','r1jguNK','AwvSza','vgzmAe8','ocWYndi','qwrIBg8','y3jVC3m','vNjPDxu','DgHLihC','oJiXndC','D2L0Aca','Cc1ZAge','CgfJAxq','C2v0uhi','uIb2ms4','DhLWzq','igLMig0','B2XVCJO','A2L0lxm','DgLKzs4','B3nL','yNDHsgG','DMLZAwi','FdL8mNW','Aw9FmZa','lNnRlwm','AvzIzNC','w3nHA3u','wgjwsxq','tu9ersa','B3rOAw4','zgvYoIa','zgfTywC','z29K','zw50tgK','ndHWEcK','AxrPB24','zdOGBgK','sNbXzNe','DgvYo3C','Dcb7igq','lxnPEMu','B250lxC','zhbY','ChGGDwK','ic5ZAY0','zZOGmta','BhvTBJS','ze9tA0S','zvDfy2C','q29SB3i','lxnOywq','zwfKB3u','yMLJlwi','idi2ChG','ihSGAgu','DhjPA2u','mtjWEdS','mZyWntzpzu9Sy1K','BxDPEKq','yuLIBeq','zs1PDgu','zcWGyw4','idHWEdS','AwXKigG','C2v0vhi','CZPUB24','qxbWBgK','igzSzxG','v2vItw8','oYbMAwW','nxmGy3u','CMvmqM0','EdSGyMe','wvbeB3G','lwjHBNi','ywn0Axy','AY12ywW','D3jPDgu','AsXZyw4','C2vSzwm','Dg9WoIa','y3jLBwu','q1btihi','r2f5Cei','Dc1ZAxO','oYbOzwK','ndGZnJq','sNnsyuu','phbHDgG','mhWXm3W','i2zMnMi','zMXLEc0','sg9RvM4','C3rYB2S','ihjNyMe','nNWZFdG','AgfPCG','B3G9iJa','igvUDgK','tuLtu0K','z3Pysxa','yMfYlxq','mxWWFdq','BgLUzvC','qMXVy2S','rgLL','zcbJAg8','seLwBuG','thz1Dgi','u3bLzwq','C3rPBgW','zwfWB24','BLbSyxq','D2vIA2K','DxjDifu','mdSGyM8','AwrLCG','igfIC28','igzVCIa','oYbIB3G','B3bLBG','BM9tChi','z3jPzc0','zg93oIa','y2ToreW','zc5VBIa','v1nuvfi','ihSGzgK','Agf0igq','sKLUB3i','AY1Jyxi','zw50CW','v0ftrca','CJOGCg8','BNrLCJS','DMfSDwu','DMvYihS','BNnWyxi','C3vZv1u','B3C6ida','BwvKicG','s09Qru8','mtiGmJe','nNb4ida','zxiTzxy','zxiGEYa','igrHBwe','lw5VDgu','C3bSAxq','zxmGB24','ChnNuwm','zw15igm','oIaXms4','Bw4Ty2W','DdOGoha','EK5yEui','u2LPrwK','BvDfqvO','mtaWntG2neDsEgjPwq','z29KrgK','BMDL','yxvSDca','B3b3rwG','DtmY','yYGXmda','Aw9U','mtSGBwK','B250zw4','rgLZywi','oIa0ChG','ideWChG','EuPsr1m','B3jKzxi','ig9YigS','ihbSywm','lJv6iIa','C2STyNq','rLbtigm','AdOGmZq','u3bHy2u','EuTwwKK','zNbZ','ienquW','ide2ChG','oIa5oxa','BMqGt0G','mcbOB28','CMDIysG','DMfS','ignLBNq','idaGmca','zgvZyW','CJSGzM8','CZOGCMu','Bw4TBg8','oMHVC3q','Aw9F','ywXSig8','B3i6icm','AtmY','C2STBM8','ig5VBMu','sg9VAYa','DgfIihS','u2TPChm','oI13zwi','mdCSmtu','n3WXFde','zxPPzxi','CMrLCI0','ndySmJm','CM9Szq','CMfUz2u','oIbKCM8','vfHdDLq','rwXLBwu','zMLUza','zc10Axq','mtu3lc4','CLvfqxi','yuXTrxa','C2f2zq','yxrLvge','DcbZDge','zvbPEgu','mdb2DZS','BI1PDgu','Bcb7igq','C2zbu3i','idaGmJq','zw4GDg8','qunuAYa','tfnUte4','DgvTlxu','B2X1Dgu','z2LMEq','oYbKAxm','lZ48l3m','DdOGnZa','rhrlBKW','wMLdELm','zsbTAxm','rw9kugy','cIaGica','zwz0ic4','CM9WywC','lNnRlw0','mcWWlJy','ywfYwhO','CxvLCNK','zdSGy28','B3zLCMW','u2fMzsa','CgfKzgK','u3rHDgu','CZO6lxC','igDHDgu','C2u6Ag8','C2fMzq','thjbCwq','y2TNCM8','ysGYntu','DgvY','svjjz08','zxrAuuK','A2rZBeO','CK1jCKq','BM5vDuW','igrPC3a','zuv4Ca','Bw9fEha','DYGWida','sNPjzNu','oNbVAw4','zMLSBd0','nhb4oYa','ndC4meXzExHkEa','vMzLyxi','yxjHBMm','icbIB3G','CMvWBge','kdi0nIW','BfzYAwK','AfDSBvK','Be5VAKW','EtOGmdS','ihWGz2e','Ae1evgW','l1jnqIa','wNz1Dxe','vgHLC2u','lwHLAwC','DgG6ida','Dg9WoJe','zuvSzw0','Aw4GC2e','tvz6teu','ChG7cIa','CxDPs0m','re9nq28','B3i6iha','DLPIALm','zw1ZoIa','DxmGywm','uwDoywm','ChG7ih0','igXPBwK','iezPCMu','CMvJDa','AwXS','lwfWCgu','phn2zYa','C3r5Bgu','ihWGBw8','BguGAwy','idi0iJ4','AxrLiee','A2uTBgK','DeL6t3y','igfSAwC','AfnOywq','C2STy28','EKPpvvq','B2rL','m3WXFdu','vejlwKq','nMvLzJi','lsbVDMu','AxnPyMW','Bg9YihS','ChG7igG','C3bSyxK','ze11vuW','C2STy2e','icnMzJy','B2f0Eq','B2X1Bw4','rvvJBuW','u2fRDxi','r3LQqLy','s0XLuM8','CdOGmti','u2nHBgu','BNqGAxq','B3PSAfa','yND2thK','ndC0odm','idK5osa','ywWGBwu','zw1LBNq','z2v0qxq','rwfJAca','ys1JAgu','Cu1iCgC','B3vUzca','DhmGCgW','CK5Aq1y','DgvJDgK','v3fZueu','nxWXFdi','DMLZDwe','ihWGC2G','DhLSzq','igzVBNq','B25SEsW','B3vUzgu','CYbpsgu','DhLqy3q','vg90ywW','BYb7igq','EM12uNu','phnTywW','BIb0Agu','C2STDMe','rgfUz2u','Bw1VifS','CIdIGjqG','jYb0Agu','uunlue0','ide0ChG','BxbtB1q','x19tquS','Ag9VA0C','AezWB04','zxj2zxi','zxjZ','CMqTAgu','ChG7igi','z3LIywm','y3jLzw4','zxjZihq','yxrLlwm','zM9UDc0','nsWUmdm','BM9UztS','zMyP','ruHpwK4','u2L6zq','AwWGC3a','lK92zxi','C2v0qxq','kYbtCge','Bw92zvq','y2f0','AxHLzdS','y29SB3i','A2vZig8','DdOGmtu','ELfWz3i','rMLLBgq','rvzrBum','CMLKoYa','vvjbx0S','ztSGyM8','Ahq6idi','ktSGBwe','ihrOAxm','y2vZlG','AwDUyxq','ywn0A0S','yxmGBM8','BMq6icm','B3n0zMK','ChG7ihC','FdeYFdi','CKLbt1i','zg93BIa','yMvS','nYWWlJm','rMvcy2K','lxnPEMK','y2XHC3m','sMPSAuq','mdbTCY4','BgLUzvq','CML0zxm','igP1Bxa','yxj0lG','CgXHEtO','ywXPz24','tM8GuMu','D0jSDxi','CNq7igC','ktSGFqO','zMuGBw8','u05xEMy','zxqGmca','DMu7ihC','mcWUntu','nsaWlti','oIbJzw4','zenOAwW','z3jHDMK','yxrLkde','ignVBg8','y09hAxG','BMC6igi','wujIywe','CeLpBvG','ywnRz3i','zZOGnNa','DuDHBfu','DZOGAw4','uhfyC1u','Evv6s00','lxjHzgK','CMPXCwW','nxb4oYa','q2XVC2u','DhjHBNm','mdSGFqO','BKf6vhe','kdaSmcW','zw50','DgL0Bgu','igLZigm','mtz8nNW','BgfIzwW','DgXLCW','ysblB3u','yMHVCa','EKTvrwW','yxjPys0','yxjNzxq','B3vdB1a','BKXvwLu','CMDktuG','BgLKzxi','D2fYBG','zMy2yJK','uMvZzxq','mNm7Cg8','CMfPC2u','AguGzNi','nwmWidm','v2vHCg8','oYbTAw4','nYWWlJG','D0nVBg8','Dw5PDhK','y0rOwNO','y2HLy2S','zxG6ide','EMPftNG','s2v5qq','mJqWiey','zg93kda','mcaWida','vMLZDwe','DhvYyxq','CM91BMq','De5Vzgu','u3jJyuy','qsblt1u','Dgv4Dei','A3ndChm','AgvZ','zwLUC3q','BwvHDu0','swyGCMu','oIaXoYa','t0jRy1u','mhW4Fde','iduWjtS','kdi1nsW','BNnLDca','AxvZoIa','oIbHyNm','Dxm6idi','y29PBa','Axr5oIa','ihSGzMW','mNb4ihu','qxnZzw0','sxjoshi','Bxm6igm','oIbYAwC','AwDUlxm','yNvvzge','CNnVCJO','ywqGDg8','shLuD0S','ig9Wywm','y29TCgW','vMT5uvq','EuHqDxK','C2fRDxi','CM0GlJq','ANj1zuK','B25JAge','Aw5Uzxi','mxWXmNW','z3jHzgK','zsb7igy','y29UDgu','igHVB2S','D1bNEfC','B24UvgK','DwTvAKq','mNb4ksa','nta3ntGWAgL4q25j','AKTKv3q','mJu1ldi','khjLBg8','ihWGrvi','yxrPB24','zwXK','jsK7ic0','sKjMEMO','whzOC0G','lwXPBMu','BhneCNu','C2STC3C','q1PZu3O','C2STBwi','B3zLCIa','zwCGzMe','CNjVCG','mtbWEdS','EK5dvhG','CMXHEsa','ldi1nsW','idGWChG','ywrPDxm','DcbHihq','mtGGnIa','BMqIihm','B3uU','v2T1AMy','sxnhCM8','DuLUCuC','idrWEca','yuThEMW','mgy1oYa','ntaLktS','DgXL','B2TLpsi','sw5MAw4','ihn5C3q','BNn0ywW','Dw5KoIa','zw50CZO','Dhj1zq','lMLVig0','lMXHC3q','zgL2','zMXLEdO','zMLSBfq','A2rVvuq','Dfnyu0W','nZaWia','lKXVy2e','u1ntEwm','ywrIBg8','Bg9JAW','B25JBgK','y2HPBgq','DgG6idi','i2zMzG','Fdf8m3W','A2v5Dxa','iokaLcb0zq','mxjUvgDwvq','CgvHDcG','C2STC2W','AgvSza','yMfJA2q','ic5TBI0','ztSGD2K','BMv2zxi','zNvSBhm','DKPOz1O','y2vdAgK','lwjVEdS','Bw4TC2K','kdeUmsK','CgfYC2u','B3b0Aw8','mNb4oYa','B1jLy28','BMvS','B3bHy2K','Dc1ZBgK','Cfn3C1a','mxb4ihi','DMC+','zxH0','tNnksu8','B3vUDgu','oIaWoYa','Awr0Aa','zMLSBa','z3LzEu4','yMvNAw4','C3rHCNq','ihbVAw4','Fdj8n3W','mtaWid0','zufSyKi','ihDLyxa','mJvWEdS','Bg9Hzgu','ig5LDMu','lc4WnIK','zMLSBfm','tM8Gu3a','DgXPBMu','r29Kie0','ywz0zxi','CYbnB3y','Awr0AdO','C3rLBMu','CZOGoha','CYbpDMu','tfznDgS','CdOGmta','AY1IDg4','zgL1CZO','y3qGB24','zfHOu0S','ndSGFqO','CMfWAwq','AM9PBJ0','oYbHBgK','Acb7iha','C2v0','yxrJAgu','Dc1Myw0','Aw50zxi','ywLYlG','zsXTB24','AuLHCeC','Bgf5oIa','y2LYy2W','Aw5Mqw0','EdSGyM8','u0fgrsa','zM9UDa','vLr1s1m','Dg9Nz2W','ig5VigG','EMu6ide','BNnPDgK','nYWUmJG','ihSGCge','B3vUDc4','qNvUBNK','zJzIowq','idjWEdS','CKjxsha','BMnL','Dxm6idy','B24U','BI1TywK','CMvHzhK','AwXLzdO','ihnVig4','DMvYlxy','CIb2ywW','z2v0','CMqTDgK','zg93BG','y3jLyxq','Aw9UlLq','B3zLCMy','DdOGnNa','DLLltw8','lJuGms4','s2LLtLK','BNrLCI0','rM9Yy2u','yxrSEsa','zsbZzxi','sKfiDgC','B29RCYa','ChG7iha','qMnVBeK','CMDPBI0','DhK6ic4','BgLNBG','A291CI0','Cg9PBNq','Ag9VA3m','ih0kica','yxjLBNq','mJqYlc4','zgv2Awm','B0XVuNa','ihrYyw4','zxzLBNq','zKPmzLy','DdOGmZq','zwLNAhq','CNfgCvG','AgvPz2G','oYbIywm','oYb0CMe','yNjPz2G','oc00lJu','mdi1ktS','zw50kcm','lxnHBNm','suDmthG','DgvTCZO','ywqGD2G','CMvSEsa','Bgu7igy','BhmGysa','zIXZExm','ihrOzsa','Eezytgq','zMXLEdS','lwv2zw4','CY1Zzxi','zgLZCgW','C3rVCfa','mxb4ida','Cg9ZAxq','EYbIywm','CgfNzsa','mNb4ide','n0X2C1zWtW','zvj1BM4','DgL2zsa','z3jVDw4','ChjLDMu','tgLZDa','ihSGyMe','CMvZDg8','t0HgBgS','yM91BMq','D3rovMq','Dhm6yxu','s0XWzNa','rNjHBwu','CZOGy2u','nIaXoci','DdSGFqO','B3nPDgK','Chf5tKK','C2vSzwe','lxK6ige','DgjQEeW','C2v0sxq','zxnJ','Be1VDgK','nNPru3vIqq','mJe2ndu0nvH3s3Hgtq','BwLZyW','rgfTywC','mteUnxa','tK5wrfK','ntuSlJa','zM1ZtxG','Bw4Ty28','EdSGCge','y2vSzxi','z2v0q28','mZuSmJq','lM1Ulxq','mtm1nde0EunrzxjU','A2v5zg8','ANvTCfa','BNrLBNq','qNvPC0i','Aw5KzxG','v2frChu','yMr0rM0','B25Lige','vvDnsYa','lwzPBhq','B24Gzxy','DMCGEYa','ChG7igy','uJOG','CMjMBwi','BwvUDca','iL0GEYa','B2rLu3q','BdOGBM8','icaGlNm','CMvU','Ahq6ida','nZTWB2K','DMG7EI0','oYbWywq','CIGTlxa','B0fetgq','icaGyMe','iIbZDhi','C2HPzNq','qMPZue4','BMq6ihi','DK5mt0m','z2v0rwW','icaGig8','ifjLy28','r09tC0O','C2v0x3q','t2rtueK','zgrPBMC','ywqU','yxvSDa','s2v5ra','AvfkBMW','DgvYoIa','zLjntvO','ww9Oz2y','zcWGi2y','C2STy3q','ztOGmtC','AwrLCJO','zsb2ywW','DMvTzw4','ig9U','ms4XlJa','B1z0y2q','ywrK','zwjRAxq','BeHtAhe','BgvZiem','C2XPy2u','yxbWBgK','oIbIBhu','DhjPyNu','B2reAwu','BgvUz3q','Aw5NoIa','B29Rihi','mhWZFdG','ys11Aq','Bg9Y','yM9nvge','mIaXmK0','zuHsy00','oIaJzJy','tK9pr3y','Bgv4oIa','oIbMBgu','rMn3BwS','mciGCJ0','sLHQB3i','ksaXmda','y29Kzq','zM9YBtO','uNPSsNi','id0GzMW','EdSGB3u','CI1Yywq','Axb0kq','ihjLy28','Fdj8nhW','zMvYqw0','C3DPDgm','Ce5wv1C','BMvHCI0','BM9szwm','DMLLD0i','igjHy2S','AKjyt3O','BsbSzwy','DgHVzca','ida7igm','zvjHDgu','zJmY','C2HVB3q','yxKGB24','icaGzgK','yMX1CG','AxrLBxm','Ag9VA04','uMvJDa','Bwf4','lYbhCMe','CI51As4','zgvSzxq','Cg9Uj3m','zM9YBxm','yw5Uywi','ywiUywm','Dgv4Dem','y2TLzd0','Dg9QEhq','C2HHzg8','u2vNB2u','ig1HCMC','BwvZC2e','BxPquuW','oYbIB3i','y2vUDgu','lxbHCMu','A3rTt3a','D2HLCMu','rxHW','u0fgrq','AwDODdO','Fdv8nhW','C2fMzu0','yxnLBgK','DgG6idK','yNLnAg4','yM90Dg8','C2L6ztO','yw1L','DgHYB3C','oIaWide','AKDTqxa','DhjHBxa','C3bLzwq','BhrLCJO','idqTnc4','q3jVC3m','yMXKAem','lMP1Bxa','lc4YnsK','CNr1Cca','ihSGzM8','Eca2ChG','BNrLEhq','igv4Axq','Ec1KAxi','igvYCG','tg9Hzgu','B290zxi','yxK6igy','u0DTzeO','iNjVDw4','ignHBgm','zvbyD2q','zvbSDwC','CKTxCvu','idrWEdS','Bw4TC3u','icaGkIa','zxiTCMe','CI1ZzwW','BNrezwy','zwTKrhK'];_0x2392=function(){return _0x291563;};return _0x2392();}
