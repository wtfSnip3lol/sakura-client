// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      2.9.12
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
function _0x5c32(_0x5e216b,_0x47744a){_0x5e216b=_0x5e216b-(0x25c3*0x1+0x1*-0xa4c+-0x1*0x1a65);var _0x4108f6=_0x4507();var _0x2c42a2=_0x4108f6[_0x5e216b];if(_0x5c32['BtlfNI']===undefined){var _0x1a6d66=function(_0x2359f5){var _0x5a7422='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3c61eb='',_0x526314='';for(var _0x27f6cb=-0x831*0x1+-0x10d*0x1+0x93e,_0x1c2f43,_0x506467,_0x2d25b1=0xd0+-0x1f*-0xb1+-0x163f;_0x506467=_0x2359f5['charAt'](_0x2d25b1++);~_0x506467&&(_0x1c2f43=_0x27f6cb%(-0x5*0x74f+-0x3*-0x57+0x238a)?_0x1c2f43*(0x539+-0x8+-0x1*0x4f1)+_0x506467:_0x506467,_0x27f6cb++%(0x642*0x2+0x2*0x1115+0xb5*-0x42))?_0x3c61eb+=String['fromCharCode'](-0x11fe*-0x2+-0xa82+0x1*-0x187b&_0x1c2f43>>(-(0x7*0x11+0x7*0x6d+0x1b8*-0x2)*_0x27f6cb&0xdae+-0x6d3+-0x6d5)):0xf8c+-0x24be+-0x1*-0x1532){_0x506467=_0x5a7422['indexOf'](_0x506467);}for(var _0xf61834=0x34*-0x10+-0x5b9+0x8f9,_0x1a3725=_0x3c61eb['length'];_0xf61834<_0x1a3725;_0xf61834++){_0x526314+='%'+('00'+_0x3c61eb['charCodeAt'](_0xf61834)['toString'](0x1*-0x1445+-0x18df+0x2d34))['slice'](-(-0x2010+0x129+0x1ee9));}return decodeURIComponent(_0x526314);};_0x5c32['cqkGxS']=_0x1a6d66,_0x5c32['jEgdRk']={},_0x5c32['BtlfNI']=!![];}var _0x4f5178=_0x4108f6[0x1c8a*-0x1+-0x3*0x133+-0x13*-0x1b1],_0x57d7e0=_0x5e216b+_0x4f5178,_0x6000f8=_0x5c32['jEgdRk'][_0x57d7e0];return!_0x6000f8?(_0x2c42a2=_0x5c32['cqkGxS'](_0x2c42a2),_0x5c32['jEgdRk'][_0x57d7e0]=_0x2c42a2):_0x2c42a2=_0x6000f8,_0x2c42a2;}function _0x4507(){var _0x51f10d=['lc43nsK','yMX1CG','ntaLktS','zsb2ywW','igjHBIa','zfzuvgS','rNvhCNq','zgL2','uwXhD28','z3jHDMK','qK5rEvm','reTnsgG','zwfK','BY1ZDMC','wwTpuhy','CMXHEsa','z2v0rwW','nKnts3zYzG','BwLU','DhjPA2u','nZTWB2K','DgHYB3C','mJqWiey','zxG7ige','B2fKzwq','Bw4TAa','Ag9VA0C','BvbMCvq','t2nsuey','Bgvvrxu','wNvMB2y','ugHJsMG','u3z2Be8','AwrHDgu','oIa1mcu','DhLSzq','z3jPzdS','DZOGAw4','yMfJA2C','A2uTD2K','uxzgzfG','zhbY','nJaWide','z29K','A3mGyxi','Bw8GDg8','ndC0odm','y2vZlG','DMLZDwe','AwrLihS','CIiSici','BNrLEhq','oIaXnha','EwPcBxG','D2vIA2K','iL0GEYa','ign1CNm','u2fRDxi','mtSGyMe','Aw5Uzxi','Bhv0ztS','BgrYzw4','lxnOywq','Bw4TAca','zJmY','DdSGFqO','wKPwzLu','zwvMmJS','DdOGoha','ywnRz3i','tuzovfi','u01OvuO','EdSGFqO','CM9Wlwy','nxW2Fdq','ywLqENm','zNvSBhm','lIbvC2u','idaGnha','ihWGC2G','y3nZvgu','cIaGica','ohWXnhW','B246ig8','AxrLBxm','ihSGAgu','EhvtB00','m3WYFda','y2fWtw8','CgvHDcG','rM5ltuS','ihSGywW','mJzWEdS','B2X1Bw4','Awr0AdO','Cu1szNm','idK5osa','zg9JDw0','EYbKAxm','lMLVig0','igj1AwW','rgLL','Aw50zxi','DMC+','Awy7ih0','sLvguLu','zenOAwW','Bg9Hzgu','ysGYntu','uMvMAwW','s2Hus28','zw1LBNq','B3nWywm','qxbWBhK','lxbHCMu','z3jHzgK','ChvZAa','mtySmc4','ihSGzM8','sKXbtha','BM9szwm','r05VuKi','zs1PDgu','zwf0CYa','sgzWBvm','BerPzsK','C3bSyxK','C2STzMK','nsWUmdC','u0fgrsa','A291CI0','BNqGAge','z1HuyLq','zwLNAhq','CMeTA28','CMHlB1e','AxrPyxq','yxK6igC','zvbSDwC','z2THyKe','wMv0EfK','igjVCMq','ig5VigG','zuv4Ca','oYbHBgK','u2zPDge','CI1Yywq','y2fWDhu','B24UvgK','BgLKzxi','ChG7igy','A3ndChm','tM8Gzw4','u2v0r2e','BMu7ihm','rM9Yy2u','z0nYAvO','iJeUnsi','y2f0','B2LSicG','A3nqB3m','AwX0zxi','rhHRsgW','BhvYkdi','mtmYnJqWmfPouMjHAq','Dw1UoYa','Dg9Nz2W','lc4WncK','ihSGy28','AKXNtuq','B2rL','q1LuzKe','zxrhyw0','u1LuC1i','AgvSza','A2DsBxO','thn6CuW','B29Rihi','nw50svjetW','lJv6iIa','ChG7igG','mNWZFda','y2XLyxi','B2r5','AxvZoIa','zIXZExm','yMHVCa','vNvMrMK','y3rjDwS','lca1mcu','Bw92zq','lwnVBhm','ldiZocW','Bg9Hzca','DdOGnJa','y3vYC28','CJOGDgG','lxnPEMK','y2Dtq2q','ywLSzwq','Fde3Fdm','DgLKzs4','ChG7igi','uu1VsNy','v21Kq0u','i2zMzJS','ihrOAxm','icaGlNm','wMTQr2G','swyGCMu','DxmGywm','qw1zvK0','vNPMwgm','mcWWlJG','BwuG','zhjIv00','BwvZC2e','ihSGD2K','Cg9ZAxq','DMu7ihC','zMLSzw4','lNnRlwm','khjLBg8','vfHIt2S','B29RCYa','zcb7igi','Ad0ImIi','B2rRwNy','nsaWlti','AwDUlwK','mdi1ktS','zZOGmNa','v2jKCw4','wuTMvgS','ihjNyMe','z2fTzuW','r2Hcrgu','yxj0lG','Ag9ZDg4','B2LUDgu','v0neEMy','zw50CZO','lZ48l3m','C2STCMe','y2HLCYa','oYbJB2W','Dc1Myw0','t0HLywW','BgLJyxq','uffgvKi','y05SwLa','zgvYoIa','q29TyMe','ig9Wywm','DgXPBMu','C2fMzq','C2v0vhi','BMLUzW','DgvYoYa','swnIzei','AwXS','lc40ktS','igrPC3a','DMLLD0i','A2L0lxm','yK9KwgC','BIbZAwC','DMfS','sw5Zzxi','D0nVBg8','ywLYlG','yw5LBc4','t1nOB28','Dg9Wrgu','ChGGmdS','A291CNm','vvbKzeO','vw5PDhK','A2rYB3a','ANP4vwW','icaGzgK','ihWGBw8','odqZq0H5uMP2','C2fRDxi','zxmGB24','zsb3zwe','BsbYAwC','Aw9UlLq','CMvMAxG','lM1Ulxm','ihDPzhq','ignVBg8','Bw4TDgK','r0zKvNC','mxW5Fde','zxjZ','ltiUnsa','B3jZige','yM9KEq','odaSmtK','EYbIywm','CMfKAxu','BwLKzgW','zgvYlxq','DhLqy3q','CeLLvKC','EufIvwm','i2zMzG','ohb4oYa','4Ocuig92zq','BMqGt0G','lwjVEdS','B290zxi','zxjPDdS','oIbKCM8','ANDPCLq','uKn6Chi','tMfTzq','BNqTC2K','B3b0Aw8','DxjDifu','B3uU','CdOGmta','mc41o3q','EYbJB2W','AxrPB24','uNPqwLK','Aw9FnZi','BgLUzwm','ic5ZAY0','DMfSDwu','mdb2DZS','z2v0sxq','mNb4ide','icnMzJy','wK5zsLe','ig1PBM0','BKjUt0O','AeDSD1u','zxiGC2W','BwvKicG','B3i6ihi','mtfWEca','tgLZDa','oNbVAw4','lwXPBMu','nxb4oYa','x19ZywS','AwXLzdO','BKjKwey','AgfPCG','AwDODdO','ywWGBwu','zNrLCIa','ldi1nsW','lxnSAwq','z2v0qxq','ihWGz2e','DMvTzw4','EYbWB3m','FdeYFde','qsblt1u','icaGic4','C3rLBMu','tvnXuwm','mtu3lc4','v3bKtvK','yxnZAwC','y3jLzw4','Aw4TD2K','yM9Yzgu','BNbgB1K','wMvYB2u','yxjPys0','y29TyMe','B2f0Eq','ihbVC2K','mdSGy3u','zwLUC3q','ug9ZAxq','C3PisMG','BwjVzhK','FdH8mtu','Bxm6igm','AY1OAw4','DgG6ida','w3nHA3u','iIbZDhi','Fde1Fde','zMLSBa','z2jHkdi','qxP6EKS','oYb9cIa','DhjHBxa','B3nLihm','CMvSB2e','ufnozLK','zMy2yJK','Ec1KAxi','odiPoYa','zfnQtKi','mNWYm3W','mcaXChG','y29TCgW','zw51','C3rYB24','ihjLBg8','tg9JywW','BM93','BYbWAwC','B3zLCMy','BI1SB2C','ywqGDg8','ywqU','DxjLihq','ntuSlJa','CIbNyw0','q1btihi','DgvYigm','BMf0Dxi','r29Kie0','lxnPEMu','Ahz1yKK','CNr1Cca','tKCG4Ocuia','icaGica','zMLUza','uMvZzxq','vMv6ueC','AxHLzdS','BNjTtNK','zwfKige','mNm7Cg8','y3jLyxq','sNbwy2W','z3PXDw0','oI13zwi','Eca2ChG','igvMzMu','lsbVDMu','CevXrNm','x19tquS','DKjns08','C3bHBG','lwHLAwC','vvDnsYa','ig5VBMu','AwDUlxm','yM91BMq','C3bSAxq','oIbJB2W','B250lxC','ztOGmtC','icaUBw4','BNn0ywW','DgvJDgK','zM9UDa','EgDIuNK','CMvU','AwWGC3a','yxvSDa','B1bireG','ruLlA1C','4Ocuig5Via','C2v0qxq','igf1Dg8','CvHcv3K','yxK6igy','Ewfyyw0','jsbUBY0','DgGUsw4','y3K9iJe','sNvTCfq','nYWUmJG','DMG7EI0','oIbWB2K','sw1UCfu','igTVDxi','DgvYoIa','zgL1CZO','t1nKBhC','z2LMEq','ndiXmJa4q2Xgq1nO','uw5rv0O','vKTQtfu','B3nLihS','v3nZswm','AwvSza','BLzMtKC','qvDTquC','v2vItw8','DhjVA2u','C2HVD24','zhrOoJe','zvn0EwW','lK92zxi','BhvLCY4','iNrYDwu','phnTywW','oYbMBgu','Bgf0zwq','CYbZChi','u1v4uxG','EhbAyue','CML0zxm','ndHWEcK','Bw91C2u','Evnqy28','uwrPy0e','zw50','oIb0CMe','ChjLDMu','oIaYmNa','idaGmJq','q29SB3i','lIbuDxi','zuPkBwW','y2L0EtO','uMvJDa','ifvUAxq','Ag9VA1a','BI1TywK','mtjWEdS','mxWZ','BMf2','icmYmJe','AguGzNi','Bw9fEha','y2LYy2W','qNbWthO','BgLUzvq','CMuGkfm','DhKGmc4','CKn3zK4','svbosxO','Fde0Fdu','zKLhD3K','zxiGEYa','EvbqEva','y2fSBa','psjYB3u','sw5PDgK','igvSC2u','ANrlDM0','BI1ZDwi','ELD1C28','AxvJv0G','AwvZlG','C2v0uhi','wg1vrhO','icaUC2S','zsb0CMe','wxzbAgq','DdOGnZa','mcbOB28','BtOGnNa','Ag1KC3m','B3LVvue','lNnRlxm','A2DYB3u','tuLtu0K','uNfdwM0','mhGYnta','Aw5NicS','ufmGDw4','Cg9W','B3n0zMK','seHtDNq','C2STDMe','EgLHBe4','q2XVC2u','zwjRAxq','nNWXFdq','y3jVC3m','zwfSDgG','igzVBNq','ig1PBIG','r0XurKK','ihn0AwW','nNb4ida','wKDZDMy','ufDwC1i','oWOGica','BguGC3q','ywXPz24','CgfYC2u','q3vZDg8','ywXSihq','Du93EvK','Aw9F','tvjSweO','yvzUCxK','BwLZyW','iKLUDgu','Dgv4Dee','CMfUy2u','CNjVCG','z2v0q28','y2HLy2S','ywrPDxm','vMLZDwe','tw9Kzsa','id0GzMW','kdeWmhy','oIbJzw4','AY1ZD2K','yxjJ','BI1JB2W','idGWChG','Dgv4Dc0','mgy1oYa','twLZyW','r0jkuNi','rgfTywC','rKX2qLq','BNrezwy','lKXVy2e','mNb4ksa','y2TNCM8','tKPSrNi','y3KGB24','mJj8nhW','s2LSBgu','DcWGCMC','mwzYksK','vgHLC2u','r3zKvuy','zgfTywC','nsWUmdm','Ae5TB3K','y2XHC3m','swPWze0','oIaXoYa','BYb7igq','B2LS','sLfkzwi','DhLWzq','z3jVDw4','y29PBa','tK9XDxG','Bg9Y','BMu7ige','C21HBgW','ienquW','mtv8nhW','mtK4mdyZmfvPBvfZva','B0T5ELO','zezhANi','AY12ywW','CZOGyxu','zgLZCgW','zxzLCNK','DgG6idi','idmWChG','CMvTv2O','mJu1lde','Be1VDgK','lxnHBNm','lwLVxYO','CYaNzNu','lMXHC3q','B3nL','kg92zxi','CMrLCJO','AvLHBvm','DxjH','lNnRlw0','yMeOmJu','AxrSzsa','igjHBM4','CZOGy2u','zw50kcm','Bw9yuLK','ihbHzgq','wgz3wue','nhW1Fda','zwqGyw0','u2HHCNa','mxb4oYa','CM9Rzs0','AfTHCMK','u2vSzwm','Dw5PDhK','zw1ZoIa','ms4XlJa','ig1HCMC','ic8GDMe','zMLSBfq','C3rVCfa','C2STy2e','D3zQtha','DdOGmJG','yw1Hz2u','yu1cre8','mNb4oYa','yMX5lum','Dhm6yxu','DgL2zsa','mJq3nfjwD1b2Aq','idrWEdS','sgvHBhq','BM9UztS','zM9YBtO','zhrOoIa','BdOGAw4','icnMzMy','AtmY','C2STBM8','igrLzMe','zxiTCMe','CYbnB3y','icbIywm','q0rIvxC','zKfYqNm','ztOGmtm','y2vUDgu','zwrRuhK','v3jHCha','mcWUntu','zciVpJW','B24U','yuTVDxi','B1jLy28','zs5bCha','yMvNAw4','zxqGmca','z2DSzwq','BMvS','yLn6DeK','vKTTq08','rw5NAw4','Cufnwvu','wgz4seq','ntyYnJuZt2Pfy29e','ls1W','BhrO','FdD8mxW','vw1PA0O','A1fMv1e','CM1YAee','CMvZDg8','EtOGyMW','CMvHzey','rgXHvuK','mJm4ldi','AfnOywq','Ag9VA0m','AujSAeK','u21Suhm','CIbHzhy','uK1c','DgHPCYa','B3C6igK','DevwEey','CMzSB3C','ohb4ksK','igH1CNq','yxbWzw4','D2fPDgK','Dgv4Dem','zvKOmtG','B3qGBwe','BNnLDca','Bw92zvq','u3rHDhu','oYbIB3i','zxnJ','mxb4ihi','C3rYAw4','AwDurw8','uMvJB2K','igzSzxG','D09Yt1y','kYbtCge','zwXMoIa','C2STC3C','zxjZy3i','CMvJDa','BMv2zxi','BfjHDgK','zJDHotm','ugXYrM0','Aw5Zzxq','Dc1Iywm','z2fWoIa','Awf6Due','y2TLzd0','DxjZB3i','z2v0','sxbYzuu','EYaTD2u','ide0ChG','s2vgyu8','DMLHifm','yY0XlJu','DgLMEs0','DLPmCKC','Aw5NoIa','sfrMD0S','mhG2mda','Aw9U','qwnSvuW','tgvMDca','A0Tus0S','zZOGnNa','CgfYzw4','ywqUieK','mJu1ldi','lc4WnsK','zM9YBxm','Bg9JAW','zw51ihi','ywrK','lc4WnIK','C3bdwge','u0vMueG','Be5mANa','BgfIzwW','nMi5zci','tKCGlsa','t0rcthO','zKflCxe','mZuSmJq','EdTVCge','CZO6lxC','B3rOAw4','uJOG','EYbIB3G','ztOGBM8','C2HPzNq','ywXSig8','CI52mq','ie92zxi','zKrYANu','Bw92zw0','Bw4TCge','nIa2Bde','EdSGz2e','AMvwEKe','ywjSzs0','oYbTAw4','igXLzNq','AwjTDxy','A0fuvNy','lcbZyw4','yxKGB24','ru1VBM0','DNDpA0W','ruXsEKu','yJPOB3y','yxrPB24','AxrJAa','oIbYAwC','s2v5uW','CgfJAxq','kdaSmcW','ig1VBwu','B2STCMu','igHVB2S','EuvUz2K','FqOGica','mJqYlc4','Dw5RBM8','CIGYmNa','AgvPz2G','BhrOige','Ec1OzwK','ohG5mc0','r0HRyLO','zgvYlxi','B3C6ida','AdOGmZq','BNrLBNq','zsXTB24','zdSGyMe','s2v5C3q','z2H0oIa','s3DsuKO','DxnkAxy','txngueG','BMCGzM8','igP1Bxa','z2znr2e','mdbTCY4','ufjPtxK','Dg87zMK','r2HMuuC','ANfXAgG','Bg9YihS','idqGnc4','rLbtigm','sw5MAw4','zsbJEd0','mNb4ihu','EdSGyMe','whLYEuG','ihSGzgK','ihDOAwm','EdSGywW','qLrRsxi','DhKGDMe','y29Kzq','oJa7EI0','EevyywK','A3nty2e','C2STyNq','ignHBgm','u0ztC0K','igfUzca','mdSGBwK','EfHwELu','AcbVBMu','rNnNEhK','DgvTCgW','uNzVAfK','zg93BG','B2reAwu','Axr5oIa','vg90ywW','C2STy28','quPZD3y','lxrPDgW','CYbLyxm','ldeWnYW','tM1cqum','DtmY','iezPCMu','yJLKoYa','B3G9iJa','z3LIywm','Fdb8n3W','BgfJzs0','Aw5WDxq','rwHTB0C','oYbMB24','D1f1zfK','DcbZDge','BMq6ihi','C2HVB3q','lMP1Bxa','BM90zs4','BLbSyxq','BgfZDeu','sNvTCca','zc5VBIa','lwL0zw0','B21SA3y','AwXnB3q','mxW5FdC','EhzpuvO','Aw5KzxG','C2v0ida','CgXHEtO','zMyP','iNjVDw4','rg5Vr3q','nIaXoci','uNvUDgK','vuXkwvq','BgLUzw4','zIbTyxq','BgvMDa','ihDLyxa','icaGlM0','oIaZmNa','oIbIBhu','B3vUDgu','BMuUqxa','DKzbrfG','CgvSD0W','C2u6Ag8','B25TB3u','zc10Axq','mJiSocW','oIaJzJy','idqTnc4','CerXvKW','DhjHy2S','u3bLzwq','rvfZvfK','AgvHzgu','s2v5ra','CMvWBge','ldePoWO','igLMig0','iJeYiIa','mdCSmtu','A2jtsgu','qNLjza','DgXL','ys5RB3u','ENrsEMe','mtGGnIa','ywrKAw4','ywqGD2G','zxjSyxK','CMqTAgu','nhWXFda','A2uTBgK','vNbdB00','AMjQree','C2v0x3q','AxLrquy','BNnPDgK','B3bHy2K','CNzNzwu','nYWUmsK','BKLNsxG','oIa4ChG','AgzRyKG','ywrKrxy','vgLJAW','mZGZntKYnLL3EMHIyq','CMfWAwq','DgG6idG','tKPTzfG','mJqSmtC','yxnLBgK','C1fuwxK','A2vZig8','Ag9VA04','Dxm6idi','phn2zYa','zw15igm','BM9Uzq','BNrLCJS','nc00lJu','lwv2zw4','B3vUzdO','CYb3B24','BhmGDgG','zxi6ida','yMThrM4','C3DPDgm','C2zVCM0','EhHuuee','nYWWlJm','v3vpqMe','y01fEvu','CgvfDvq','yNv0Dg8','sKDKugm','DgXLCW','AxrLiee','sgnJsu4','oIa5oxa','qwrIBg8','EMu6ide','zMX3t2q','lYbhCMe','ig9U','ywn0A0S','BeL2sLm','sgPIDMO','oYb0CMe','B3vUzgu','zdSGy28','B250zw4','DMvYihS','ELfxu0u','ue5htvy','Aw5Mqw0','zw50zxi','mtb8nNW','zLvZEgC','A2v5C3q','CZOGmty','qM90Dg8','zguSihq','DgvY','Ahq6idi','vwvrC0u','C3r5Bgu','BIb7igy','kdi0nIW','BMqIihm','B3vUDc4','BNrLCI0','BNnSyxq','sxnhCM8','mNb4o3i','CKnHyvq','y3jWshO','lNnRlwy','AY1IDg4','DgvTCZO','yw1L','yM90Dg8','sxvqsge','AuztBxC','EufAqLy','DML0Eq','C3jMC2K','oIa0ChG','C2HHzg8','A3zpANi','ALDMr3i','C1nrteq','lJa4ktS','icaGig8','CYbpDMu','B3jKzxi','EYbMB24','zsbZzxi','mtiGmJe','BMrSwwC','oYbMAwW','BIb7igi','Bgf5oIa','i2zMnMi','DxjDig0','iezquW','tg9Hzgu','BI1PDgu','C2vzEfG','Bw4TDge','C3rYB2S','rMjdrhG','A2v5Dxa','nxmGy3u','rurbEw4','BNnWyxi','BwvUDca','sLjYDKu','te1c','ntuSmJu','BM9tChi','v0fttsa','CgfKzgK','yxjHBMm','EhvZCeW','yxb0Dxi','yxrLvge','AxnPyMW','ocWYndi','EdSGyM8','ieLZr3i','zxmGEYa','CgnLCeu','ztSGyM8','y2HPBgq','BMDREuW','oYbKAxm','CNnVCJO','EdSGAgu','vfPVCgu','mtH8mhW','vMfSDwu','oYbVCge','ysGYndy','u2L6zq','lwjHBNi','sM5jtMy','qMX0teS','Fdf8mte','rg9WDum','u3rHDgu','yxbWBgK','yxbWzwe','psiJzMy','CM9Rzxm','B3bLCNq','CY1Zzxi','B25SEsW','ihrOzsa','C2fMzu0','tgvNAw8','ifTfwfa','z29KrgK','u1fRy2G','Bgf5ig8','y29SB3i','EsbKzwy','Bg93oIa','ihWGrvi','Bwf4','ChG7iha','yLz3sK4','zw50oYa','igXLyxy','FdH8m3W','BhHwwwK','tvfHAxi','AcaTidq','D2nTy24','EdSGCge','lJq1oYa','zuvSzw0','BMDL','DxjDigG','D2L0Aca','zsbTAxm','rvHqxq','zw50tgK','mhb4oYa','BsbVBIa','ufvzy3m','mJu1lc4','ChbLyxi','ifjLy28','CM91BMq','ksaWida','B24Gzxy','zvjHDgu','zxjZihq','y1zNyvG','ih0kica','oYbOzwK','vKztu0S','v2LWzsa','iM5VBMu','yxjNzxq','wwnOv3y','oIbUB24','lxDPzhq','Awr0Aa','ugf0Aa','BhvTBJS','lM1Ulxa','zMXLEdO','zM9UDc0','Dw5KoIa','u0Lby2O','mtjWEca','D0v3Eg4','v0X5vLm','igv4Axq','C2vLBNq','ywX0Ac4','CJSGzM8','CgXPy2e','C3rPBgW','sw5ZDge','CMDIysG','B2XVCJO','C2v0sxq','tw92zw0','AwXKigG','A2v5zg8','y3jLBwu','nsWYntu','FdD8nxW','nsK7iha','mdSGFqO','ywPIzum','u0TWwfm','D0jSDxi','zgLUzZO','lc4YnsK','ktSGFqO','oIaWoYa','ieaG','idaGmca','Axb0kq','BgLNBI0','mtz8m3W','Fdn8mG','nMvLzJi','B25Lige','ndySmJm','nde5oYa','AwnRihm','DwX0','Bw1YEg4','zwXHDgK','seHtDeq','BNPqy0e','qwfJEhO','rfvbDwG','icaGyMe','BgLNBG','t1vsx18','zxG6ide','C3zNiJ4','DgnOihq','DgG6idK','BuLMC1e','CI1ZzwW','ifvxtuS','kdi1nsW','BwjpB00','DxDTAW','y2HdB2W','vhfZvMy','ideWChG','BMq6icm','iduWjtS','CMLZAYa','sfrnta','lxrVCca','zxH0','CMDPBI0','Cw9Yseu','Dxm6idy','As1TB24','yMLJlwi','oYbYAwC','D2fYBG','ugjvrvy','mtaWid0','CM9WywC','BwvsDw4','zvzHBhu','zgv2Awm','yxjNEfu','igjHy2S','mJb8mJe','zwfKB3u','zxzLBNq','t1nAq2W','wLrZDKW','yLryswW','DgvZDa','wufxqvm','D2HLCMu','zw50CW','C2f2zq','ihbVAw4','mIaXmK0','DhK6ic4','zxi6oI0','igvYCG','zJzIowq','ihn0CM8','oIbYz2i','zgrPBMC','nJq2o2m','lxjHzgK','tfr5B2q','uMf0zq','C2STBwi','u2vNB2u','vKH1sue','zg93kda','BvvbzhG','rNjfueK','zgTPDa','u2nHBgu','CZOGoha','mcWWlJC','CI51As4','Dg9WoJe','s3L6t1e','ywn0Axy','mJvWEdS','ugn0','CMvHzhK','AguGCMu','BMvJyxa','qxvxywC','BMX5kq','AguGDxm','AwXSihK','AuDduvq','Dg9W','Bvj2reS','zxrLy3q','BhKGkhi','ndGZnJq','mciGCJ0','txfcCey','zwn0Aw8','AdOGnJi','oIaXms4','D2vPz2G','BgXlCwm','DxrVoYa','rLbtig8','vuvpwhu','EtOGzMW','Dff1DuW','u2fMzxq','B2TLpsi','AwvSzca','y1zwyM8','yxrLlwm','Bg93zxi','ihjLy28','zdOGi2y','ihn5C3q','ywrIBg8','AxnWBge','icaGkIa','ENHdCLK','zMLSBfm','zuzRvNa','yxrLkde','CZOGCMu','yw5ZzM8','EMfdAgy','CJOGi2y','BMnL','nxW0Fda','Evjrz3q','lJuGms4','Bg9HzgK','C2STAgK','nsK7ih0','zNbZ','zvj1BM4','igHLAwC','Aw46ida','ic5TBI0','Aw9UoMy','r1z1tKm','zM1tsNi','yxa6idG','zwn0oIa','ywnPDhK','Bw4Ty2W','DdOGnNa','zxjYB3i','lc40nsK','CMfUz2u','ANvTCfa','uuHvquq','yvLNsNm','ihbSywm','mtC4mJKZyLHhsvLw','yw5Uywi','AY1Jyxi','rxHW','Bgv4oIa','B25JBgK','C2v0','BhmGysa','ihSGzMW','t3jYzeO','Aw9FmZa','y2n1CMe','mc41','CM0GlJq','zwCGzMe','ywz0zxi','mcWWlJy','z24TAxq','Dw5Kzwq','BYb0Agu','ltiUns0','AwPvC24','tu9ersa','ig9YigS','igq9iK0','zfn3Bxi','mdSGyM8','lsbHihm','igfIC28','CMfPC2u','B3zLCMW','Ag9VA3m','zwLqsLq','Eg1Pz2q','nJaWia','zMLSBd0','rurxvhq','y2HtAxO','zw0TDwK','Cc1ZAge','yxGOmJu','zsGXnta','ELzUqxy','phbHDgG','oYb3Awq','C3bLzwq','igXPBwK','AwX5oIa','B25PBNa','DgL0Bgu','vvjbx0S','zw5HyMW','uhrgCLO','yxa6ide','CZPUB24','DgLVBI4','ihnVig4','zw50rwW','zwfKEs4','oc00lJu','BgvUz3q','Ae9gEhK','Bw4Ty28','C2STy3q','B2X1Dgu','DxqGDgG','DhjPyNu','CerLzKu','z3HWqwy','Dgv4Dei','D09Qwgq'];_0x4507=function(){return _0x51f10d;};return _0x4507();}(function(_0x2f1307,_0x289798){var _0x40cbce=_0x5c32,_0x5efb0d=_0x2f1307();while(!![]){try{var _0x51b0d7=parseInt(_0x40cbce(0x548))/(0x8e*-0x3e+-0xa57*-0x3+0x360)+-parseInt(_0x40cbce(0x278))/(-0x1392+-0x6d6+0x1a6a)*(-parseInt(_0x40cbce(0x6a9))/(0x1cd4+-0x10a0+-0xc31))+-parseInt(_0x40cbce(0x1a0))/(0xe07+0x292*0xc+0x2cdb*-0x1)*(-parseInt(_0x40cbce(0x641))/(0x5ed*0x5+-0x1297*-0x1+-0x1011*0x3))+parseInt(_0x40cbce(0x5a0))/(-0x35*-0x51+0x1e2b+-0x2eea)*(parseInt(_0x40cbce(0x29b))/(-0xf26+0xa7f*-0x1+-0x66b*-0x4))+parseInt(_0x40cbce(0x633))/(0x1500+0x1e7*-0x1+-0x1311)+-parseInt(_0x40cbce(0x3b2))/(-0x7*-0x95+-0x3db*0x7+0x16f3)+-parseInt(_0x40cbce(0x243))/(-0xb7+-0x1eb0+0x1f71);if(_0x51b0d7===_0x289798)break;else _0x5efb0d['push'](_0x5efb0d['shift']());}catch(_0xeb405){_0x5efb0d['push'](_0x5efb0d['shift']());}}}(_0x4507,-0x5f72f+0x585b+-0x16*-0x6e57),((()=>{'use strict';var _0x319049=_0x5c32,_0x5247d2={'VrDuF':_0x319049(0x6aa)+_0x319049(0x39c)+'r.v1','xXVzU':function(_0x2248a5,_0x5d10fc){return _0x2248a5+_0x5d10fc;},'vBMKO':_0x319049(0x4a1),'srfsi':function(_0x276266,_0x1c8c9e){return _0x276266(_0x1c8c9e);},'PhcJh':_0x319049(0x5cf),'xialN':function(_0x56a37a,_0x45704a){return _0x56a37a>_0x45704a;},'yVEaE':'fulls'+'creen'+_0x319049(0x43d)+'s','WmdCE':function(_0x135483,_0x3b600f){return _0x135483<_0x3b600f;},'oPHDH':_0x319049(0x3be),'fUsxg':function(_0x209ed5,_0x30a63f){return _0x209ed5===_0x30a63f;},'IhKcV':'lBaMZ','pEqFs':function(_0x436bab){return _0x436bab();},'oyoUA':_0x319049(0x318)+'s','PCnGi':'1|4|0'+_0x319049(0x4a6),'KwRRJ':_0x319049(0x140)+_0x319049(0x615)+'ur]\x20h'+'ook\x20r'+_0x319049(0x556)+'iled:','dSjNB':_0x319049(0x1db)+_0x319049(0x42a)+'keHea'+_0x319049(0x29d),'hmdss':_0x319049(0x280),'gqzry':'godDi'+'e','GLTFI':_0x319049(0x3f5)+_0x319049(0x55a),'iyQAF':'SgZev','IjpdM':_0x319049(0x65a),'BltLK':function(_0x554e87,_0x1cb20c,_0x1247b0,_0x198a07,_0x33a470){return _0x554e87(_0x1cb20c,_0x1247b0,_0x198a07,_0x33a470);},'TcKMB':'error','iYamS':function(_0x4387ad,_0x2a3741){return _0x4387ad-_0x2a3741;},'LmvPh':function(_0x426e2e,_0x24fd7c){return _0x426e2e-_0x24fd7c;},'LszqL':function(_0x1cae7e,_0x247b8c){return _0x1cae7e-_0x247b8c;},'fpaTE':'Adblo'+'ck','LfetM':'Takes'+_0x319049(0x174)+'ct\x20on'+'\x20relo'+_0x319049(0x3a0)+'en\x20to'+'ggled'+'.','VKjLU':function(_0x39d9af,_0x2fbf5b){return _0x39d9af!==_0x2fbf5b;},'vZLrG':function(_0x395705,_0x1392ab){return _0x395705(_0x1392ab);},'fDrju':function(_0x43edd6,_0x4a77ae){return _0x43edd6/_0x4a77ae;},'FuGrt':function(_0x558658,_0x2030e8){return _0x558658(_0x2030e8);},'ZJVfU':function(_0x3c08f5,_0x1814db){return _0x3c08f5&&_0x1814db;},'FeotL':'ZkjGh','usiln':function(_0x362266,_0x52b6ea){return _0x362266!==_0x52b6ea;},'rhKoQ':_0x319049(0x29f),'WYKtK':_0x319049(0x5fd),'aVnqy':function(_0x331089,_0x15e3da){return _0x331089!==_0x15e3da;},'jeVzA':'ySPco','XArWE':function(_0xc2f7e7,_0x16ddc9){return _0xc2f7e7<_0x16ddc9;},'FbCDx':function(_0x44a77d,_0x139eea,_0x396ed0,_0x57c900,_0x2b7428){return _0x44a77d(_0x139eea,_0x396ed0,_0x57c900,_0x2b7428);},'kUfsL':_0x319049(0x494)+'wn','VVRTS':_0x319049(0x590),'AclUL':function(_0x94c86b,_0x4ef943,_0x1f32d4){return _0x94c86b(_0x4ef943,_0x1f32d4);},'BppLz':function(_0x555792,_0xbfd3d2){return _0x555792===_0xbfd3d2;},'mbOoM':_0x319049(0x5f5)+'activ'+'e','GLuZA':function(_0x58604e){return _0x58604e();},'PQFVB':'DOMCo'+_0x319049(0x326)+_0x319049(0x416)+'d','hGlwU':function(_0x2739b2,_0x514d25){return _0x2739b2-_0x514d25;},'YchWv':function(_0x5b2074,_0x4eebef){return _0x5b2074-_0x4eebef;},'OcRPF':function(_0x42a3ea,_0x146abe){return _0x42a3ea*_0x146abe;},'nUyJv':function(_0x4529a8,_0x22d8c8){return _0x4529a8/_0x22d8c8;},'rmrhA':function(_0x1153b9,_0x1109e8){return _0x1153b9*_0x1109e8;},'KwFMY':function(_0x4df051,_0x116386){return _0x4df051+_0x116386;},'RzPZY':'top','PsnuJ':_0x319049(0x415),'GVuNC':function(_0x12f02b,_0x431fb8,_0x154147){return _0x12f02b(_0x431fb8,_0x154147);},'wVHNA':_0x319049(0x261)+_0x319049(0x45a)+_0x319049(0x3e5)+'7|2|1'+'|9','NmFPk':function(_0x278136,_0x41f9ca){return _0x278136>=_0x41f9ca;},'eDGQK':_0x319049(0x3ce)+'n','XyryH':'switc'+'h','Wbdqn':'selec'+'t','QlGwo':function(_0x5e6513,_0x22ce3e){return _0x5e6513!==_0x22ce3e;},'bTXIl':_0x319049(0x596),'qRReu':_0x319049(0x281)+'te','xpZaA':_0x319049(0x153)+'g','PUYcs':_0x319049(0x3cc),'yAbUc':'JhsoJ','hNmoy':_0x319049(0x4f0)+'ody','wQudY':'CANVA'+'S','BTkIr':'14|7|'+_0x319049(0x242)+'10|5|'+_0x319049(0x5e6)+'|8|6|'+'13|12'+'|9|16'+_0x319049(0x440),'CDbUw':function(_0x1ea843,_0x1283a6){return _0x1ea843-_0x1283a6;},'yaXam':'KeyA','MtyXs':function(_0x3b05e2,_0x574dd8,_0x5dfffd,_0xba6487,_0x398dc0,_0x36f9b4,_0x1fd61b){return _0x3b05e2(_0x574dd8,_0x5dfffd,_0xba6487,_0x398dc0,_0x36f9b4,_0x1fd61b);},'xEXai':function(_0x15ab30,_0x392a20,_0x3eb4ca,_0x5f1386,_0x303b50,_0x5ef7ee,_0x1573e5,_0x5b1df3){return _0x15ab30(_0x392a20,_0x3eb4ca,_0x5f1386,_0x303b50,_0x5ef7ee,_0x1573e5,_0x5b1df3);},'gkabA':_0x319049(0x1b8)+'1','SmlPs':function(_0x426a8b,_0x258630){return _0x426a8b(_0x258630);},'rBsUS':function(_0x550fa4,_0x4d218e){return _0x550fa4||_0x4d218e;},'pelwL':function(_0x365e0d,_0x4559bb){return _0x365e0d-_0x4559bb;},'HfpmS':_0x319049(0x362),'SEfPH':_0x319049(0x451),'GHkbZ':'small','GGzjK':'4|3|5'+'|0|6|'+_0x319049(0x372)+'|8|2','gtadq':'set_t'+_0x319049(0x479)+'Frame'+'Rate','YvAhd':_0x319049(0x391),'MHbxL':_0x319049(0x610)+'MODE\x20'+'—\x20ove'+'rlay\x20'+'only,'+'\x20no\x20h'+_0x319049(0x66f)+'(relo'+_0x319049(0x15a)+'\x20exit'+')','GhfQG':function(_0x12e1f9,_0x5dab14){return _0x12e1f9+_0x5dab14;},'usJiv':_0x319049(0x531)+'ng','GlTEx':function(_0x237e9d,_0x647063){return _0x237e9d+_0x647063;},'aLClo':_0x319049(0x1a1),'WuOBa':_0x319049(0x203),'Uccsk':function(_0x19b624){return _0x19b624();},'LQigt':'MZZsX','OSdlw':_0x319049(0x162)+_0x319049(0x639),'DopuC':function(_0x2bf457,_0x5a0e68,_0x1b73c3,_0x1e2749,_0x273921,_0xf7196f){return _0x2bf457(_0x5a0e68,_0x1b73c3,_0x1e2749,_0x273921,_0xf7196f);},'gfMGa':_0x319049(0x339)+_0x319049(0x3d1)+'mmo\x20['+_0x319049(0x466),'HTfwK':_0x319049(0x4f7)+'s\x20all'+'\x20four'+'\x20Move'+_0x319049(0x420)+'speed'+_0x319049(0x576)+'ts\x20pl'+_0x319049(0x661)+'celer'+'ation'+'.','lxvXb':_0x319049(0x36d)+'%','oKyzZ':'WASD\x20'+'+\x20LMB'+'/RMB\x20'+_0x319049(0x2c3)+'ce\x20ov'+_0x319049(0x3a1)+'.','MVakc':'Size','lAqha':_0x319049(0x338)+_0x319049(0x384)+'r','cMpcR':_0x319049(0x627)+_0x319049(0x3bd)+_0x319049(0x384)+_0x319049(0x653)+'is\x20bu'+_0x319049(0x493)+'as\x20no'+'\x20GetV'+_0x319049(0x42b)+'ePlay'+_0x319049(0x472)+_0x319049(0x157)+_0x319049(0x35f)+'k\x20on.','DnoGt':'god\x20('+_0x319049(0x686)+_0x319049(0x194)+_0x319049(0x617)+'eTake'+_0x319049(0x27a)+'h)','aWcHx':function(_0x5c6fd1,_0xb68fe5,_0x26fdcd,_0x207364){return _0x5c6fd1(_0xb68fe5,_0x26fdcd,_0x207364);},'yAZBV':'Dange'+'r','gDCrj':_0x319049(0x3f8),'hMxOj':_0x319049(0x3ee),'MQair':_0x319049(0x473),'SFSsI':_0x319049(0x1ca),'cqqag':_0x319049(0x6b3)+_0x319049(0x3d0),'LIjfF':'Inser'+'t','EhmoG':'gtvCZ','IcbdB':'sJhNA','MzUku':_0x319049(0x6aa)+'a-ui','fmSJr':_0x319049(0x64d),'RvohY':_0x319049(0x216)+'l','nfttZ':_0x319049(0x669)+_0x319049(0x539)+_0x319049(0x16b)+_0x319049(0x4fb)+_0x319049(0x3f6)+_0x319049(0x11d)+_0x319049(0x1c8)+'z-ind'+'ex:21'+_0x319049(0x5bd)+_0x319049(0x4ec)+_0x319049(0x2d1)+_0x319049(0x116)+'ter;w'+_0x319049(0x5ed)+_0x319049(0x5eb)+_0x319049(0x31e)+'t:26p'+_0x319049(0x2f5)+'city:'+_0x319049(0x6d2)+'ransi'+'tion:'+_0x319049(0x3aa)+_0x319049(0x1d2)+_0x319049(0x16e)+'inter'+_0x319049(0x3c1)+_0x319049(0x276)+_0x319049(0x333)+'lter:'+'drop-'+_0x319049(0x404)+'w(0\x200'+'\x204px\x20'+_0x319049(0x48f)+'255,1'+_0x319049(0x398)+'7,0.7'+'))','ndlYg':_0x319049(0x140)+_0x319049(0x615)+_0x319049(0x414)+_0x319049(0x2e9)+_0x319049(0x582)+_0x319049(0x4bc)+':','nIgIx':_0x319049(0x413)+'9d','SIAcj':_0x319049(0x245),'ggRkN':'EXmWz','mbGRY':_0x319049(0x52e)+'|6|2|'+_0x319049(0x1c9),'VCCge':'god','WpdMY':_0x319049(0x686)+'th','WLyVS':'capSh'+_0x319049(0x6c7),'YKfTk':function(_0x1ead1c,_0x2834ae,_0x90d299,_0x231e7d,_0x2a8c7b,_0x93bb99,_0x5675bd,_0x2e1b4e){return _0x1ead1c(_0x2834ae,_0x90d299,_0x231e7d,_0x2a8c7b,_0x93bb99,_0x5675bd,_0x2e1b4e);},'yyOdz':_0x319049(0x26a),'JRJTa':_0x319049(0x11b),'drbWM':_0x319049(0x140)+_0x319049(0x615)+_0x319049(0x6cf)+'WMK\x20i'+'nit\x20f'+_0x319049(0x656)+':','iazuA':function(_0x83c824,_0x8e9523,_0x2360cf){return _0x83c824(_0x8e9523,_0x2360cf);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0x319049(0x67d)+_0x319049(0x3fc)]||''))return;if(window[_0x319049(0x177)+_0x319049(0x57a)+'OUR__'])return;window['__SAK'+'URA_K'+_0x319049(0x4b5)]=!![];var _0x335ae7=_0x5247d2[_0x319049(0x3ad)],_0x4e3613='#ffb3'+'c6',_0x1293c2={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x3aead2={..._0x1293c2};try{'dFGjr'===_0x5247d2[_0x319049(0x484)]?Object[_0x319049(0x12d)+'n'](_0x3aead2,JSON['parse'](localStorage['getIt'+'em']('sakur'+'a.kou'+'r.v1')||'{}')):(_0x3fefdb[_0x319049(0x231)+'eExp']=_0x47a2da,_0x1e1a23());}catch(_0x21b28b){}function _0x18126f(){var _0x37b79e=_0x319049;if(_0x37b79e(0x2c2)!==_0x37b79e(0x25e))try{localStorage[_0x37b79e(0x491)+'em'](_0x5247d2['VrDuF'],JSON[_0x37b79e(0x2be)+'gify'](_0x3aead2));}catch(_0x505a37){}else _0x116337[_0x37b79e(0x424)+_0x37b79e(0x59b)]=_0x354029,_0x1a40ae();}var _0x33e089={'uwmk':!!window[_0x319049(0x6a4)+_0x319049(0x1a8)+_0x319049(0x4f6)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x3aead2[_0x319049(0x44b)+_0x319049(0x639)],'lastError':''};try{_0x319049(0x260)!==_0x319049(0x663)?window[_0x319049(0x3b0)+'entLi'+_0x319049(0x129)+'r']('error',_0x55ef75=>{var _0x47c9b9=_0x319049;try{var _0x1844d8=_0x55ef75&&(_0x55ef75['messa'+'ge']||_0x55ef75['error']&&_0x55ef75[_0x47c9b9(0x541)][_0x47c9b9(0x667)+'ge'])||_0x47c9b9(0x31c)+'wn';if(_0x55ef75&&_0x55ef75[_0x47c9b9(0x66b)+'ame'])_0x1844d8+=_0x5247d2[_0x47c9b9(0x34c)](_0x5247d2[_0x47c9b9(0x178)],String(_0x55ef75['filen'+_0x47c9b9(0x3fc)])['split']('/')[_0x47c9b9(0x1f3)]())+':'+(_0x55ef75[_0x47c9b9(0x37d)+'o']||'?');_0x33e089[_0x47c9b9(0x36c)+_0x47c9b9(0x212)]=_0x5247d2[_0x47c9b9(0x402)](String,_0x1844d8)['slice'](-0x5*0x38f+-0x5db*0x1+0x17a6*0x1,-0x5*-0x556+0x1c0f+-0x361d);}catch(_0x2a58e4){}}):(_0xd7faa6(_0x4053da,-0x1*0xa8b+-0x9d*0x1a+0x1b09,_0x319049(0x5cf),0xdd5+-0x177c+-0x161*-0x7+0.1),_0x3b35a8(_0x1fc00e,0x1a77+0x279*-0xd+0x2*0x307,_0x5247d2['PhcJh'],-0x1*0xa07+0x1*0x865+0x1a2+0.1));}catch(_0x3c8966){}var _0x166cba=null,_0x39d555=null,_0x3d9536={},_0x447c2b=[],_0x2e0461=[],_0x266f6c=new Map();function _0x49e118(_0x402e63,_0x2ff705){var _0x8dcbe7=_0x319049;if(!_0x2ff705||_0x402e63['inclu'+'des'](_0x2ff705)||_0x5247d2[_0x8dcbe7(0x1f7)](_0x402e63['lengt'+'h'],-0x23cd+0x1d*-0x1+0x1*0x242a))return;_0x402e63[_0x8dcbe7(0x603)](_0x2ff705);}function _0x2931c2(_0x157090,_0x62ddfd,_0x45423f,_0x58c0bf){var _0x480182=_0x319049,_0x2412d3=-0x648+-0x1774+0x1dbc;try{_0x2412d3=_0x62ddfd&&_0x62ddfd['val']?_0x62ddfd['val']():0x1*0x22cd+-0x1799+-0xb34;}catch(_0x315726){}if(!_0x2412d3)return;_0x49e118(_0x157090,_0x2412d3),_0x45423f[_0x58c0bf]=_0x157090[_0x480182(0x584)+'h'];if(_0x58c0bf==='movem'+_0x480182(0x4e1)&&_0x157090[_0x480182(0x584)+'h']){var _0x104595=_0x3d9536['capMo'+'ve'];if(_0x104595)try{_0x104595[_0x480182(0x57b)+'ed']=![];}catch(_0x253892){}}}function _0x31417e(_0x1aa542,_0x3f70b8,_0x297cf3){var _0x5135da=_0x319049,_0x312bdd=_0x266f6c['get'](_0x1aa542);!_0x312bdd&&(_0x312bdd=new Map(),_0x266f6c[_0x5135da(0x54e)](_0x1aa542,_0x312bdd));if(!_0x312bdd['has'](_0x3f70b8))try{var _0x57a0fb=new _0x166cba(_0x1aa542)['readF'+_0x5135da(0x1a5)](_0x3f70b8,_0x297cf3);_0x312bdd['set'](_0x3f70b8,_0x57a0fb!==undefined?_0x57a0fb['val']():null);}catch(_0x9ba2f0){if(_0x5247d2['fUsxg']('prRfZ',_0x5247d2['IhKcV'])){var _0x612f51=_0x4a6a72['getEl'+'ement'+'ById'](_0x2ff976);if(_0x612f51&&_0x15cc55===_0x5247d2['yVEaE']){var _0x56b04b=_0x612f51['child'+'ren'];for(var _0x1a2fd3=-0x21dc+-0x1*0x211f+0x527*0xd;_0x5247d2[_0x5135da(0x65b)](_0x1a2fd3,_0x56b04b[_0x5135da(0x584)+'h']);_0x1a2fd3++){if(_0x56b04b[_0x1a2fd3]['id']&&_0x56b04b[_0x1a2fd3]['id'][_0x5135da(0x374)+'Of'](_0x5135da(0x611)+_0x5135da(0x20b))===0x15*0xd6+0x14*-0x193+0xdee)_0x56b04b[_0x1a2fd3][_0x5135da(0x3ee)][_0x5135da(0x248)+'ay']=_0x5247d2[_0x5135da(0x18b)];}}else{if(_0x612f51)_0x612f51[_0x5135da(0x3ee)]['displ'+'ay']=_0x5247d2[_0x5135da(0x18b)];}}else _0x312bdd[_0x5135da(0x54e)](_0x3f70b8,null);}return _0x312bdd[_0x5135da(0x2d2)](_0x3f70b8);}function _0x3b4da3(_0x23a133,_0x58b05f,_0x59e0c1,_0xc70624){var _0x25b847=_0x319049,_0x4c9c99={'aRtqr':function(_0x5f13eb){var _0x225197=_0x5c32;return _0x5247d2[_0x225197(0x176)](_0x5f13eb);}};try{_0x25b847(0x63c)!=='SYTsR'?(_0x37cba4['ksPos']=_0x3a707a,_0x4c9c99['aRtqr'](_0x517114)):new _0x166cba(_0x23a133)['write'+'Field'](_0x58b05f,_0x59e0c1,_0xc70624);}catch(_0x40ae02){}}function _0x2f6918(_0x520017,_0x5f8f80){var _0x2053d1=_0x319049,_0x45d9f3={'ctIuk':function(_0x416cac,_0x4477c1){return _0x5247d2['xXVzU'](_0x416cac,_0x4477c1);},'SUxQx':function(_0x5e36ec,_0xb9191e){var _0xbc7ac1=_0x5c32;return _0x5247d2[_0xbc7ac1(0x34c)](_0x5e36ec,_0xb9191e);},'lenoS':_0x2053d1(0x17b)+'bound'+'\x20','DsIFL':_0x5247d2[_0x2053d1(0x1eb)],'AzzzK':_0x2053d1(0x5de)+_0x2053d1(0x6c7)+'\x20','XmUDz':'held','nJmTf':_0x2053d1(0x17b)+_0x2053d1(0x1ee)+_0x2053d1(0x166)+'overl'+'ay\x20on'+'ly\x20(r'+'einst'+_0x2053d1(0x209)+'he\x20us'+'erscr'+'ipt)','PSNfY':function(_0x14e508,_0x2dbb72){return _0x14e508+_0x2dbb72;}};try{if(_0x5247d2[_0x2053d1(0x3e6)](_0x2053d1(0x3da),'GVspr')){var _0x1f62df=_0x56ed0c['safeM'+_0x2053d1(0x639)]?'SAFE\x20'+_0x2053d1(0x55e)+_0x2053d1(0x6c4)+_0x2053d1(0x59e)+_0x2053d1(0x449)+_0x2053d1(0x61d)+'ooks\x20'+'(relo'+'ad\x20to'+'\x20exit'+')':_0x12418b[_0x2053d1(0x4bf)]?_0x45d9f3[_0x2053d1(0x64b)](_0x45d9f3['ctIuk'](_0x45d9f3[_0x2053d1(0x64b)](_0x45d9f3['SUxQx'](_0x45d9f3['SUxQx'](_0x45d9f3[_0x2053d1(0x1b4)](_0x45d9f3['lenoS'],_0x4c628c['hooks'+_0x2053d1(0x354)]?_0x45d9f3['ctIuk'](_0x1c1a68['hooks'+'Ok']+'/'+_0x52484d[_0x2053d1(0x567)+'Total'],_0x45d9f3['DsIFL']):_0x2053d1(0x1e8)+'ks\x20ar'+'med\x20('+'all\x20o'+'ff)'),'\x20|\x20ga'+_0x2053d1(0x665)),_0x380ecd['gameL'+'oaded']?_0x2053d1(0x5fa)+'d':_0x2053d1(0x531)+'ng'),_0x45d9f3[_0x2053d1(0x145)])+(_0xd77ad4[_0x2053d1(0x368)+'ers']?_0x45d9f3[_0x2053d1(0x1e3)]:'none'),_0x2053d1(0x6a8)+_0x2053d1(0x124)+'t\x20'),_0x5e590d[_0x2053d1(0x300)+'ents']?_0x45d9f3[_0x2053d1(0x1e3)]:'none'):_0x45d9f3['nJmTf'];if(_0x141037['lastE'+'rror'])_0x1f62df+=_0x45d9f3[_0x2053d1(0x14a)]('\x20|\x20ER'+_0x2053d1(0x2f8),_0x45222e['lastE'+_0x2053d1(0x212)]);return _0x1aeb04('Statu'+'s',_0x1f62df,_0x5b7310[_0x2053d1(0x4bf)],null,[_0x385f9d(_0x2053d1(0x5a5)+_0x2053d1(0x1f2)+_0x2053d1(0x2e8),'calls'+_0x2053d1(0x1c5)+_0x2053d1(0x319)+_0x2053d1(0x385)+'plica'+_0x2053d1(0x57f)+'set_t'+_0x2053d1(0x479)+'Frame'+_0x2053d1(0x4ef),_0x59ae22('Apply',()=>{var _0x13af06=_0x2053d1;try{if(_0x4c2218)_0x459980[_0x13af06(0x1d9)]('Unity'+_0x13af06(0x298)+_0x13af06(0x291)+'licat'+_0x13af06(0x2de),_0x13af06(0x3a7)+_0x13af06(0x479)+'Frame'+_0x13af06(0x4ef),[-0xa*-0x21a+0x1d14+0x8*-0x625]);}catch(_0x224fa9){}}))]);}else{var _0x3fac73=new _0x166cba(_0x520017)['readF'+'ield'](_0x5f8f80,_0x2053d1(0x35b));return _0x3fac73?_0x3fac73[_0x2053d1(0x69a)]():-0x1aff+-0xdf0+0x1f3*0x15;}}catch(_0x35c20e){return-0x7*-0x4a3+-0x12cc+-0xda9;}}function _0x35128e(_0x504bf2,_0x43bdee,_0x3b8afb,_0x1ec728){var _0xb58815=_0x31417e(_0x504bf2,_0x43bdee,_0x3b8afb);if(_0xb58815!=null)_0x3b4da3(_0x504bf2,_0x43bdee,_0x3b8afb,_0xb58815*_0x1ec728);}function _0x53c5c0(_0x58cfb5,_0x31f194,_0x3b0526,_0x5847cc,_0x5ea6a8,_0x2878e8,_0x49271c){var _0x39e78a=_0x319049;try{if(_0x5247d2[_0x39e78a(0x3e6)]('xTZKo','ZupvY'))try{if(_0x2f3375)_0x3c869f['call']('Unity'+_0x39e78a(0x298)+'e.App'+_0x39e78a(0x687)+'ion','set_t'+_0x39e78a(0x479)+'Frame'+'Rate',[-0x2474+-0x1420+0x9*0x664]);}catch(_0x8fda61){}else{var _0x473e08=_0x5247d2['PCnGi']['split']('|'),_0x5249c7=0x119*0x8+-0x1eb*-0x12+-0x2b4e;while(!![]){switch(_0x473e08[_0x5249c7++]){case'0':_0x3d9536[_0x58cfb5]=_0x503a34;continue;case'1':var _0x503a34=_0x39d555['hookP'+_0x39e78a(0x6af)]({'typeName':_0x31f194,'methodName':_0x3b0526,'params':_0x5847cc,'returnType':_0x5ea6a8},_0x2878e8);continue;case'2':return _0x503a34;case'3':_0x33e089[_0x39e78a(0x567)+_0x39e78a(0x354)]++;continue;case'4':_0x503a34['enabl'+'ed']=_0x49271c!==![];continue;}break;}}}catch(_0x4670b2){if(_0x39e78a(0x190)!==_0x39e78a(0x20a))return console['warn'](_0x5247d2[_0x39e78a(0x32b)],_0x58cfb5,_0x4670b2&&_0x4670b2['messa'+'ge']),null;else _0x2aaf1b[_0x39e78a(0x26e)+_0x39e78a(0x4d2)+'ation'](),_0x598b81();}}function _0x45ad7b(_0x44cca3,_0x343f25,_0x123111,_0x45b757,_0x5bfd05,_0x4ddea6,_0x5825ae){var _0x7d1034=_0x319049,_0x38708a={'rVSZn':_0x7d1034(0x368)+'ers','flwOd':_0x7d1034(0x26a),'rVsUQ':function(_0x44a749,_0x557e3b,_0x5b375f,_0x281db2,_0x2e5c6f,_0x1b6608,_0x2cc2a7,_0x26db98){return _0x44a749(_0x557e3b,_0x5b375f,_0x281db2,_0x2e5c6f,_0x1b6608,_0x2cc2a7,_0x26db98);},'Aacxz':_0x5247d2['dSjNB'],'lNLjp':_0x5247d2[_0x7d1034(0x1ea)],'eiPJT':_0x5247d2['gqzry'],'BKkgm':_0x7d1034(0x686)+'th','ELRzE':_0x7d1034(0x155)+_0x7d1034(0x5f4),'nmcud':function(_0x3fa44d,_0x362e88,_0x13e8c8,_0x1859d1,_0x55d176,_0xfc6e63,_0x12f781,_0x2d2747){return _0x3fa44d(_0x362e88,_0x13e8c8,_0x1859d1,_0x55d176,_0xfc6e63,_0x12f781,_0x2d2747);},'mfdjv':_0x7d1034(0x3b1),'kbSHe':_0x5247d2[_0x7d1034(0x1ff)]};if(_0x5247d2[_0x7d1034(0x3a8)]===_0x7d1034(0x2cb)){var _0xb31870={'mRvDK':_0x38708a['rVSZn'],'gXTbT':'movem'+_0x7d1034(0x4e1)};_0x2d6395=_0x2e7c5d[_0x7d1034(0x6a4)+'WebMo'+'dkit']['Value'+'Wrapp'+'er'],_0x53bc7a=_0x221d63['Unity'+_0x7d1034(0x1a8)+_0x7d1034(0x4f6)][_0x7d1034(0x37b)+'me'][_0x7d1034(0x16f)+_0x7d1034(0x619)+'in']({'name':_0x7d1034(0x5c8)+'aKour','version':_0x38708a[_0x7d1034(0x3d6)],'referencedAssemblies':['Assem'+'bly-C'+_0x7d1034(0x263)+'.dll']});if(_0x559b1e[_0x7d1034(0x5a9)+'od'])_0x38708a['rVsUQ'](_0x28e6dd,'god','OHeal'+'th',_0x38708a[_0x7d1034(0x4b1)],[_0x38708a[_0x7d1034(0x2ee)],_0x38708a[_0x7d1034(0x2ee)]],_0x26bb9a,_0xff9f62,!!_0x4f647b['god']);if(_0x404af2['hookG'+'odDie'])_0x38708a['rVsUQ'](_0x7692e0,_0x38708a[_0x7d1034(0x568)],_0x38708a['BKkgm'],_0x38708a[_0x7d1034(0x30e)],[_0x38708a[_0x7d1034(0x2ee)],_0x38708a[_0x7d1034(0x2ee)],_0x38708a[_0x7d1034(0x2ee)],_0x38708a['lNLjp'],_0x38708a[_0x7d1034(0x2ee)]],_0x5df1a9,_0x1e392b,!!_0x1da589['god']);if(_0x2483ba[_0x7d1034(0x3ba)+_0x7d1034(0x290)+'il'])_0x38708a['nmcud'](_0x2b8f4c,_0x7d1034(0x607)+_0x7d1034(0x238),_0x7d1034(0x44c)+_0x7d1034(0x36b)+_0x7d1034(0x2e7)+'.Over'+_0x7d1034(0x658)+'Recoi'+_0x7d1034(0x24e)+'on',_0x38708a['mfdjv'],['i32'],_0x3b4138,_0x318323,!!_0x47a19a[_0x7d1034(0x607)+_0x7d1034(0x238)]);if(_0x518193[_0x7d1034(0x2a8)+'aptur'+'e'])_0x54cc93('capSh'+_0x7d1034(0x6c7),_0x7d1034(0x69f)+'ter',_0x7d1034(0x628)+'meRun'+_0x7d1034(0x690),[_0x38708a[_0x7d1034(0x2ee)],_0x38708a[_0x7d1034(0x2ee)]],_0x42248b,(_0x3a664c,_0x2ceafb)=>{var _0x12fbd5=_0x7d1034;_0xbcde0a(_0x3f7e5d,_0x2ceafb,_0x5151f5,_0xb31870[_0x12fbd5(0x509)]);},!![]);if(_0x5da0cc['hookC'+_0x7d1034(0x429)+'e'])_0x3dd4b6(_0x7d1034(0x5e7)+'ve',_0x7d1034(0x44c)+_0x7d1034(0x36b)+_0x7d1034(0x2e7)+_0x7d1034(0x1ad)+'tide.'+_0x7d1034(0x492)+_0x7d1034(0x1bb),_0x38708a[_0x7d1034(0x399)],[_0x38708a['lNLjp']],_0x7d1034(0x280),(_0x557a9b,_0x2eef9f)=>{var _0x35c9f7=_0x7d1034;_0x303858(_0x3557c3,_0x2eef9f,_0x15f1f4,_0xb31870[_0x35c9f7(0x613)]);},!![]);}else try{if(_0x7d1034(0x65a)!==_0x5247d2[_0x7d1034(0x235)])_0x110059['enabl'+'ed']=!!_0x4d5bc8;else{var _0x438580=_0x39d555['hookP'+'ostfi'+'x']({'typeName':_0x343f25,'methodName':_0x123111,'params':_0x45b757,'returnType':_0x5bfd05},_0x4ddea6);return _0x438580[_0x7d1034(0x57b)+'ed']=_0x5825ae!==![],_0x3d9536[_0x44cca3]=_0x438580,_0x33e089[_0x7d1034(0x567)+'Total']++,_0x438580;}}catch(_0x41191f){return console['warn']('[saku'+'ra-ko'+'ur]\x20h'+_0x7d1034(0x640)+'eg\x20fa'+'iled:',_0x44cca3,_0x41191f&&_0x41191f['messa'+'ge']),null;}}var _0x5412a9=()=>![];try{if(_0x319049(0x58e)===_0x319049(0x59d))try{_0x23bd62['setIt'+'em'](_0x5247d2['VrDuF'],_0x4e6c07['strin'+'gify'](_0x231720));}catch(_0x128a60){}else{if(window[_0x319049(0x6a4)+'WebMo'+'dkit']&&!_0x3aead2['safeM'+_0x319049(0x639)]){if(_0x5247d2['ggRkN']==='DNSox'){var _0x49bf17=_0x3c4c4e['hookP'+'refix']({'typeName':_0xbc20db,'methodName':_0x255bac,'params':_0x401267,'returnType':_0x602b1c},_0xca9eea);return _0x49bf17[_0x319049(0x57b)+'ed']=_0x1c1285!==![],_0x4aecf0[_0x5431c1]=_0x49bf17,_0x46c145['hooks'+_0x319049(0x354)]++,_0x49bf17;}else{var _0x379fdb=_0x5247d2['mbGRY']['split']('|'),_0x5cdc29=0x70*0x4+0x1*-0x16d3+0x1513;while(!![]){switch(_0x379fdb[_0x5cdc29++]){case'0':if(_0x3aead2['hookG'+'od'])_0x53c5c0(_0x5247d2['VCCge'],_0x5247d2[_0x319049(0x12c)],_0x5247d2[_0x319049(0x14e)],[_0x5247d2[_0x319049(0x1ea)],_0x319049(0x280)],undefined,_0x5412a9,!!_0x3aead2[_0x319049(0x5ba)]);continue;case'1':if(_0x3aead2[_0x319049(0x2a8)+_0x319049(0x429)+'e'])_0x45ad7b(_0x5247d2[_0x319049(0x487)],_0x319049(0x69f)+_0x319049(0x3eb),_0x319049(0x628)+_0x319049(0x4d3)+'ning',['i32',_0x5247d2[_0x319049(0x1ea)]],undefined,(_0x2bc57b,_0x4c3071)=>{var _0x35400f=_0x319049;_0x2931c2(_0x2e0461,_0x4c3071,_0x33e089,_0x35400f(0x368)+_0x35400f(0x6b6));},!![]);continue;case'2':if(_0x3aead2[_0x319049(0x3ba)+_0x319049(0x290)+'il'])_0x5247d2[_0x319049(0x678)](_0x53c5c0,'noRec'+_0x319049(0x238),'Legio'+_0x319049(0x36b)+'forms'+_0x319049(0x1ad)+'tide.'+_0x319049(0x2c0)+_0x319049(0x24e)+'on',_0x319049(0x3b1),[_0x5247d2[_0x319049(0x1ea)]],undefined,_0x5412a9,!!_0x3aead2[_0x319049(0x607)+'oil']);continue;case'3':if(_0x3aead2[_0x319049(0x2a8)+_0x319049(0x429)+'e'])_0x5247d2['YKfTk'](_0x45ad7b,_0x319049(0x5e7)+'ve',_0x319049(0x44c)+'nPlat'+_0x319049(0x2e7)+_0x319049(0x1ad)+'tide.'+'Movem'+_0x319049(0x1bb),_0x5247d2[_0x319049(0x1ff)],['i32'],_0x5247d2['hmdss'],(_0x118787,_0x360358)=>{var _0x69be19=_0x319049;_0x5247d2[_0x69be19(0x43f)](_0x2931c2,_0x447c2b,_0x360358,_0x33e089,_0x69be19(0x300)+_0x69be19(0x4e1));},!![]);continue;case'4':_0x39d555=window['Unity'+'WebMo'+'dkit']['Runti'+'me']['creat'+_0x319049(0x619)+'in']({'name':_0x319049(0x5c8)+_0x319049(0x28f),'version':_0x5247d2['yyOdz'],'referencedAssemblies':['Assem'+_0x319049(0x275)+_0x319049(0x263)+'.dll']});continue;case'5':_0x166cba=window['Unity'+_0x319049(0x1a8)+'dkit'][_0x319049(0x439)+_0x319049(0x28b)+'er'];continue;case'6':if(_0x3aead2['hookG'+_0x319049(0x352)])_0x53c5c0(_0x319049(0x44e)+'e',_0x319049(0x686)+'th','Local'+'Die',[_0x319049(0x280),_0x5247d2[_0x319049(0x1ea)],'i32','i32','i32'],undefined,_0x5412a9,!!_0x3aead2['god']);continue;}break;}}}}}catch(_0x586553){_0x319049(0x11b)===_0x5247d2['JRJTa']?console[_0x319049(0x4cf)](_0x5247d2[_0x319049(0x666)],_0x586553&&_0x586553[_0x319049(0x667)+'ge']):_0x1a2522[_0x319049(0x12d)+'n'](_0x30ad8c,_0x49d918['parse'](_0x603b24[_0x319049(0x6db)+'em']('sakur'+_0x319049(0x39c)+_0x319049(0x2fd))||'{}'));}function _0x334b38(_0x41e061,_0x20521a){var _0x404fbe=_0x319049,_0x5848ca=_0x3d9536[_0x41e061];if(_0x5848ca)try{_0x5848ca[_0x404fbe(0x57b)+'ed']=!!_0x20521a;}catch(_0x5e7c06){}}_0x5247d2[_0x319049(0x2cf)](setInterval,()=>{var _0x35e708=_0x319049,_0x2694f7={'YUNao':function(_0x5b834a){return _0x5247d2['pEqFs'](_0x5b834a);},'HoFAn':_0x5247d2['fpaTE'],'EIKkW':'Hides'+_0x35e708(0x19b)+_0x35e708(0x250)+'\x20bann'+_0x35e708(0x6e2)+'ots.','mPfqT':_0x5247d2['LfetM']};if(_0x5247d2[_0x35e708(0x1a2)](_0x35e708(0x296),_0x35e708(0x3f7))){if(!_0x166cba||!window[_0x35e708(0x268)+'Insta'+_0x35e708(0x52d)])return;var _0x3b80b1=(_0x5247d2[_0x35e708(0x2da)](Number,_0x3aead2['speed'+'Pct'])||0x441+0x2398*-0x1+-0x1fbb*-0x1)/(0x24*-0x32+-0xa7c+0x11e8),_0x2ca749=_0x5247d2['fDrju'](_0x5247d2['FuGrt'](Number,_0x3aead2[_0x35e708(0x544)+'ct'])||-0x59*-0x27+-0x1ba7+0x73e*0x2,-0xec9*-0x2+-0x856*-0x1+-0xc4*0x31),_0x3c6ea7=(Number(_0x3aead2[_0x35e708(0x598)+'tyPct'])||0x1a*-0x12f+0x16e1*-0x1+0x360b)/(-0x1dd7*-0x1+-0x268e+-0x3f*-0x25),_0x20e9b8=Math['max'](-0x6d9*0x3+-0x2123+-0x1b*-0x1fd,Number(_0x3aead2['damag'+_0x35e708(0x4d4)+'e'])||-0xe*0x166+0xc79*0x3+-0x1141),_0x2650f5=_0x3b80b1!==0xc5*0x1+0x140b*-0x1+0x1347||_0x5247d2[_0x35e708(0x1a2)](_0x2ca749,0x15a3+0xa06+-0x1fa8)||_0x3c6ea7!==0x243*0x2+0x29*0xa8+0x1f6d*-0x1||_0x3aead2[_0x35e708(0x649)],_0x5e1065=_0x3aead2['noSpr'+'ead']||_0x3aead2['damag'+'eExp']||_0x3aead2['infAm'+_0x35e708(0x1cd)]||_0x3aead2['rapid'+_0x35e708(0x54b)];if(_0x5247d2[_0x35e708(0x5d1)](!_0x2650f5,!_0x5e1065))return;try{if(_0x5247d2['FeotL']===_0x35e708(0x65f))for(var _0x46bc28=0x149b+0x1cd9+-0x5*0x9e4;_0x46bc28<_0x447c2b['lengt'+'h'];_0x46bc28++){if(_0x5247d2['usiln'](_0x5247d2[_0x35e708(0x616)],_0x5247d2['WYKtK'])){var _0x9b73a6=_0x447c2b[_0x46bc28];if(!_0x9b73a6)continue;if(_0x3b80b1!==0x20ae+0x5f*0x3d+-0x3750){if(_0x35e708(0x2a0)!==_0x35e708(0x2a0)){var _0x4deb5f={'JRrvE':'unkno'+'wn','SfQTl':_0x5247d2[_0x35e708(0x178)],'NmBAC':function(_0x214ed0,_0x2904d5){var _0x19d9bc=_0x35e708;return _0x5247d2[_0x19d9bc(0x402)](_0x214ed0,_0x2904d5);}};_0x3e7c06[_0x35e708(0x3b0)+_0x35e708(0x467)+_0x35e708(0x129)+'r'](_0x5247d2['TcKMB'],_0x59de4d=>{var _0x4f2755=_0x35e708;try{var _0x6a773=_0x59de4d&&(_0x59de4d['messa'+'ge']||_0x59de4d['error']&&_0x59de4d[_0x4f2755(0x541)][_0x4f2755(0x667)+'ge'])||_0x4deb5f[_0x4f2755(0x421)];if(_0x59de4d&&_0x59de4d[_0x4f2755(0x66b)+_0x4f2755(0x3fc)])_0x6a773+=_0x4deb5f['SfQTl']+_0x4deb5f[_0x4f2755(0x35a)](_0x47b48c,_0x59de4d[_0x4f2755(0x66b)+'ame'])['split']('/')[_0x4f2755(0x1f3)]()+':'+(_0x59de4d[_0x4f2755(0x37d)+'o']||'?');_0x11ffdf['lastE'+_0x4f2755(0x212)]=_0x4deb5f[_0x4f2755(0x35a)](_0x3aa95f,_0x6a773)['slice'](0x50b*-0x1+0x2542+-0x2037,0x1b*-0x33+0x31*-0x43+0x12d4);}catch(_0x1960c0){}});}else _0x5247d2[_0x35e708(0x43f)](_0x35128e,_0x9b73a6,-0x11d2*-0x1+0x9e2+0x29*-0xac,'f32',_0x3b80b1),_0x5247d2[_0x35e708(0x43f)](_0x35128e,_0x9b73a6,-0x3d*0x62+-0x1c5c+0x33e2,_0x5247d2[_0x35e708(0x5ae)],_0x3b80b1),_0x35128e(_0x9b73a6,-0xb*0x4b+-0x7e7+0xb50,_0x5247d2[_0x35e708(0x5ae)],_0x3b80b1),_0x35128e(_0x9b73a6,-0x1*0x1cb8+0xd*-0x182+0x3086*0x1,_0x5247d2[_0x35e708(0x5ae)],_0x3b80b1),_0x35128e(_0x9b73a6,-0x11*0xc0+0x3*0xcd6+-0x2*0xcd3,_0x5247d2['PhcJh'],_0x3b80b1),_0x35128e(_0x9b73a6,-0x2581+0x18a7*-0x1+0x1*0x3e48,_0x5247d2[_0x35e708(0x5ae)],_0x3b80b1);}if(_0x5247d2['aVnqy'](_0x2ca749,0x7f*0xd+0x1b75+-0x3*0xb4d))_0x35128e(_0x9b73a6,-0x577+0x4cd*0x1+0xfa,'f32',_0x2ca749);if(_0x5247d2[_0x35e708(0x20d)](_0x3c6ea7,-0x202b+-0x513+0x253f)){if(_0x5247d2['usiln'](_0x5247d2[_0x35e708(0x304)],_0x35e708(0x1b9)))try{_0x54adb9[_0x35e708(0x6b9)][_0x35e708(0x2b3)+'dChil'+'d'](_0x31305e);}catch(_0x28ce57){}else _0x35128e(_0x9b73a6,-0x1a27+-0x15*-0x109+0x4b2,_0x5247d2['PhcJh'],_0x3c6ea7),_0x5247d2[_0x35e708(0x43f)](_0x35128e,_0x9b73a6,-0x1a21+-0x51+-0x1abe*-0x1,'f32',_0x3c6ea7);}if(_0x3aead2[_0x35e708(0x649)])_0x5247d2['BltLK'](_0x3b4da3,_0x9b73a6,0x25a5+-0x458+-0x20b1,_0x5247d2[_0x35e708(0x5ae)],-(-0x43*-0x35+-0x673+-0x385));}else _0x356183[_0x35e708(0x346)+'le']=_0x4bba25,_0x5247d2['pEqFs'](_0x183d7e);}else return[_0x5694f2(_0x2694f7['HoFAn'],_0x2694f7[_0x35e708(0x18c)],_0x1d4a35['adblo'+'ck'],_0x4bc705=>{var _0x267fce=_0x35e708;_0x48f802[_0x267fce(0x522)+'ck']=_0x4bc705,_0x2694f7['YUNao'](_0x1a71d8);},[_0x340159(_0x2694f7[_0x35e708(0x5aa)])])];}catch(_0x271aa9){}try{for(var _0x2480eb=0x1728+0x472*-0x2+0xb*-0x14c;_0x5247d2['XArWE'](_0x2480eb,_0x2e0461[_0x35e708(0x584)+'h']);_0x2480eb++){var _0x189286=_0x2f6918(_0x2e0461[_0x2480eb],0x71*0x39+0xf49+-0x141d*0x2);if(!_0x189286)continue;_0x3aead2[_0x35e708(0x231)+_0x35e708(0x61e)]&&(_0x3b4da3(_0x189286,0x1b36+-0xd*0x4d+-0x1701,'i32',_0x20e9b8),_0x3b4da3(_0x189286,-0x3f*-0x5a+0x1da6+0x1e8*-0x1b,_0x5247d2[_0x35e708(0x1ea)],_0x20e9b8));_0x3aead2[_0x35e708(0x424)+_0x35e708(0x59b)]&&(_0x5247d2[_0x35e708(0x41b)](_0x3b4da3,_0x189286,0x73*-0x20+-0x208f*0x1+0x2f77,_0x35e708(0x5cf),0x1*0x100d+0x90*0x1b+0x2d7*-0xb),_0x3b4da3(_0x189286,0x305*-0x7+-0x13*0x1eb+0x39fc,_0x5247d2[_0x35e708(0x5ae)],0xeea+-0x1b72+0xc89*0x1));if(_0x3aead2[_0x35e708(0x3e3)+_0x35e708(0x1cd)])_0x5247d2['BltLK'](_0x3b4da3,_0x189286,0x1e5c+-0x1f14+-0x4*-0x45,_0x5247d2['hmdss'],0x2*0x12bf+0xa2e*-0x2+-0xd3b);_0x3aead2[_0x35e708(0x3b3)+'Exp']&&(_0x35128e(_0x189286,0x21b0+-0x1*-0x107b+-0x319f,_0x5247d2['PhcJh'],0x2536+0x1332+-0x13*0x2f8+0.1),_0x3b4da3(_0x189286,-0xa8e+0x2204+-0x1*0x1716,_0x5247d2[_0x35e708(0x5ae)],0x12*0xcf+0x1dbf+-0xb*0x407+0.1));}}catch(_0x1c593e){}}else{var _0x79d3cf=('1|13|'+'19|10'+'|23|2'+_0x35e708(0x142)+_0x35e708(0x6b5)+'2|17|'+_0x35e708(0x4a5)+_0x35e708(0x438)+_0x35e708(0x4d8)+_0x35e708(0x497)+_0x35e708(0x22b)+_0x35e708(0x5e1)+'6')[_0x35e708(0x17f)]('|'),_0x40c79a=-0x85*-0x17+0x51+-0xc44;while(!![]){switch(_0x79d3cf[_0x40c79a++]){case'0':_0xc3c3b9[_0x35e708(0x1d0)+'o'](_0x2699bf+_0x18179f+_0xbd0d7f,_0x2b047f);continue;case'1':var _0x2699bf=_0x3f2897['width']/(0x1049+0xe5d+0x6a*-0x4a),_0x2b047f=_0x4ca5e7[_0x35e708(0x31e)+'t']/(-0x3a7*0x2+0x1*0x1fa5+0x1855*-0x1);continue;case'2':_0x34bbee[_0x35e708(0x526)+_0x35e708(0x5b2)]=_0x51147a;continue;case'3':_0x57a2c3[_0x35e708(0x1d0)+'o'](_0x5247d2['iYamS'](_0x2699bf,_0x18179f),_0x2b047f);continue;case'4':_0x1a8158[_0x35e708(0x292)+'Path']();continue;case'5':_0x22528d[_0x35e708(0x1d0)+'o'](_0x2699bf,_0x2b047f+_0x18179f+_0xbd0d7f);continue;case'6':_0x58493f[_0x35e708(0x2a2)+'re']();continue;case'7':_0x46ee75[_0x35e708(0x2b9)+'o'](_0x2699bf,_0x2b047f+_0x18179f);continue;case'8':_0x4adb4a[_0x35e708(0x21c)](_0x2699bf,_0x2b047f,(-0x12d+-0xd*-0x143+-0xf39+0.6000000000000001)*_0x268f72,0x1a3*0x7+0x2ea+-0xe5f*0x1,_0x36e81d['PI']*(0x4*0x6c6+0x50+-0x1b66));continue;case'9':_0x259742[_0x35e708(0x404)+_0x35e708(0x49c)]=0x1b05+-0x1b1f+0x8*0x4;continue;case'10':_0xa40803[_0x35e708(0x4e2)]();continue;case'11':_0x4a8c5a['shado'+_0x35e708(0x69c)+'r']=_0x51147a;continue;case'12':var _0x18179f=(-0x6d1+-0x411+0xae8)*_0x268f72,_0xbd0d7f=(0x160c+-0x1d4f+-0x74b*-0x1)*_0x268f72;continue;case'13':var _0x268f72=_0x5247d2[_0x35e708(0x402)](_0x43c953,_0xb3cd4e[_0x35e708(0x56d)+'e'])||0xa4a+-0x2*0x45a+-0x195;continue;case'14':_0x4ba883[_0x35e708(0x143)]();continue;case'15':_0x3bb13e['lineW'+'idth']=_0x158860[_0x35e708(0x455)](0xfb1+0x2c*0x84+-0x998*0x4+0.5,(0x71*-0x33+0x15e0+0xa5)*_0x268f72);continue;case'16':_0x447a61[_0x35e708(0x2b9)+'o'](_0x2699bf-_0x18179f-_0xbd0d7f,_0x2b047f);continue;case'17':_0x4bcb77[_0x35e708(0x292)+_0x35e708(0x47e)]();continue;case'18':_0xe701f6[_0x35e708(0x2b9)+'o'](_0x2699bf+_0x18179f,_0x2b047f);continue;case'19':var _0x51147a=/^#[0-9a-f]{6}$/i[_0x35e708(0x4de)](_0xbbdbde['chCol'+'or'])?_0x5bc478[_0x35e708(0x4c0)+'or']:_0x35e708(0x413)+'9d';continue;case'20':_0x4c80fb['moveT'+'o'](_0x2699bf,_0x5247d2['LmvPh'](_0x5247d2[_0x35e708(0x63f)](_0x2b047f,_0x18179f),_0xbd0d7f));continue;case'21':_0xa3d434[_0x35e708(0x1d0)+'o'](_0x2699bf,_0x5247d2[_0x35e708(0x256)](_0x2b047f,_0x18179f));continue;case'22':_0x2535c2['strok'+'e']();continue;case'23':_0x9d2948[_0x35e708(0x41a)+_0x35e708(0x1ac)+'e']=_0x51147a;continue;}break;}}},0xc6b+-0x7b*-0x1f+-0x1a88),_0x5247d2[_0x319049(0x2df)](setInterval,()=>{var _0x2bcfe1=_0x319049;_0x33e089[_0x2bcfe1(0x67a)+_0x2bcfe1(0x5a7)]=!!window['unity'+_0x2bcfe1(0x48e)+_0x2bcfe1(0x52d)];try{var _0x30fe2b=-0x1ba7+-0xba7*-0x1+0x1000;for(var _0x2097a2 in _0x3d9536){if(_0x3d9536[_0x2097a2]&&_0x3d9536[_0x2097a2][_0x2bcfe1(0x443)+'ed'])_0x30fe2b++;}_0x33e089['hooks'+'Ok']=_0x30fe2b;}catch(_0x3b9f75){}},-0x2703*0x1+-0x12af*0x2+-0x193*-0x33);var _0xdd906=new Set(),_0x217577={0x1:[],0x3:[]},_0x1fc3af=![];function _0x2522c9(_0x1a213c){var _0x5a278a=_0x319049;_0xdd906[_0x5a278a(0x2ea)](_0x1a213c[_0x5a278a(0x343)]);}function _0x525a67(_0x4a58d6){var _0x564e60=_0x319049;_0xdd906['delet'+'e'](_0x4a58d6[_0x564e60(0x343)]);}function _0x2407d7(_0x47b83b){var _0x5c29d9=_0x319049;if(_0x47b83b[_0x5c29d9(0x119)+_0x5c29d9(0x257)])return;_0xdd906[_0x5c29d9(0x2ea)](_0x5c29d9(0x1b8)+_0x5247d2[_0x5c29d9(0x34c)](_0x47b83b['butto'+'n'],0x9d9+-0x32*-0x8a+-0x24cc));var _0x4ca66e=_0x217577[_0x47b83b['butto'+'n']+(0xcfb*-0x3+-0x17*-0xc1+0x159b)];if(_0x4ca66e){_0x4ca66e['push'](performance[_0x5c29d9(0x156)]());if(_0x4ca66e['lengt'+'h']>0xd21+0x928+0x1621*-0x1)_0x4ca66e[_0x5c29d9(0x2fb)]();}}function _0x482fee(_0x121217){var _0x19bba6=_0x319049;if(!_0x121217['__sak'+_0x19bba6(0x257)])_0xdd906['delet'+'e'](_0x19bba6(0x1b8)+(_0x121217[_0x19bba6(0x3ce)+'n']+(-0x1d87*-0x1+-0x16cc+0x23e*-0x3)));}function _0x1250c2(){_0xdd906['clear']();}function _0x490682(){var _0x383454=_0x319049;if(_0x1fc3af)return;_0x1fc3af=!![],window[_0x383454(0x3b0)+_0x383454(0x467)+'stene'+'r'](_0x5247d2['kUfsL'],_0x2522c9,!![]),window[_0x383454(0x3b0)+_0x383454(0x467)+_0x383454(0x129)+'r'](_0x383454(0x41c),_0x525a67,!![]),window['addEv'+_0x383454(0x467)+_0x383454(0x129)+'r'](_0x383454(0x1b8)+_0x383454(0x351),_0x2407d7,!![]),window[_0x383454(0x3b0)+'entLi'+'stene'+'r'](_0x383454(0x1b8)+'up',_0x482fee,!![]),window[_0x383454(0x3b0)+'entLi'+_0x383454(0x129)+'r'](_0x5247d2['VVRTS'],_0x1250c2);}function _0x16584c(_0x220caf){var _0x29571a=_0x319049,_0x5bb5d3=_0x217577[_0x220caf]||[],_0x545ab3=performance[_0x29571a(0x156)]();while(_0x5bb5d3[_0x29571a(0x584)+'h']&&_0x5247d2['xialN'](_0x545ab3-_0x5bb5d3[-0x663+0x1569+-0xf06],-0x1bba+0x23d0+-0x42e))_0x5bb5d3[_0x29571a(0x2fb)]();return _0x5bb5d3[_0x29571a(0x584)+'h'];}function _0x44079e(_0x3af476){var _0x38e5dc=_0x319049,_0x4d89d3={'fArBs':function(_0x38ef5d){return _0x38ef5d();},'zVnAv':function(_0xaef9c6,_0x3ef5bb,_0xa2d007){var _0x8f1274=_0x5c32;return _0x5247d2[_0x8f1274(0x2df)](_0xaef9c6,_0x3ef5bb,_0xa2d007);},'OAYTn':'noRec'+_0x38e5dc(0x238)};if(_0x38e5dc(0x5af)===_0x38e5dc(0x406))_0x4f1269['noRec'+'oil']=_0x4c8151,_0x4d89d3[_0x38e5dc(0x287)](_0x44bcdd),_0x4d89d3[_0x38e5dc(0x572)](_0x433e48,_0x4d89d3['OAYTn'],_0x4f1e1c);else{if(document[_0x38e5dc(0x6b9)]&&(_0x5247d2[_0x38e5dc(0x1cf)](document[_0x38e5dc(0x500)+_0x38e5dc(0x442)],_0x5247d2[_0x38e5dc(0x4be)])||_0x5247d2[_0x38e5dc(0x1cf)](document[_0x38e5dc(0x500)+'State'],_0x38e5dc(0x151)+'ete')))_0x5247d2['GLuZA'](_0x3af476);else document[_0x38e5dc(0x3b0)+'entLi'+'stene'+'r'](_0x5247d2[_0x38e5dc(0x688)],_0x3af476,{'once':!![]});}}_0x5247d2['FuGrt'](_0x44079e,()=>{var _0x362537=_0x319049,_0xcc138f={'rKhyA':_0x362537(0x611)+_0x362537(0x552)+_0x362537(0x1f0)+_0x362537(0x601)+'nt','xmigd':function(_0x3c03c8,_0x3b2916){return _0x3c03c8<_0x3b2916;},'QvFdX':'kour-'+_0x362537(0x20b),'ogrJW':_0x5247d2[_0x362537(0x365)],'llKqc':function(_0x2e709d,_0xc33e50){return _0x2e709d===_0xc33e50;},'xxTPA':function(_0xc123ac,_0x3e4d7e){var _0x5382a3=_0x362537;return _0x5247d2[_0x5382a3(0x2a1)](_0xc123ac,_0x3e4d7e);},'Fsgxy':_0x362537(0x3be),'GFdVw':_0x5247d2[_0x362537(0x341)],'GBJRr':function(_0x577b09,_0x2898e9){return _0x577b09/_0x2898e9;},'eGvyX':'middl'+'e','ULJYT':_0x362537(0x41e),'iFSmw':function(_0x27fea4,_0x543e5a){var _0x3cd458=_0x362537;return _0x5247d2[_0x3cd458(0x595)](_0x27fea4,_0x543e5a);},'MqBpF':function(_0x572916,_0x425b86){return _0x572916*_0x425b86;},'GkKJk':function(_0x832a7e,_0x4873a1){return _0x832a7e+_0x4873a1;},'ibmuv':function(_0x78241d,_0x51408a){return _0x5247d2['xXVzU'](_0x78241d,_0x51408a);},'DKMHh':function(_0x5434f2,_0xfefe1c){var _0x36fd1f=_0x362537;return _0x5247d2[_0x36fd1f(0x63f)](_0x5434f2,_0xfefe1c);},'ztRza':function(_0x493810,_0x22a88a){return _0x493810+_0x22a88a;},'PNGMV':function(_0x301d93,_0x77cb76){var _0x3832f4=_0x362537;return _0x5247d2[_0x3832f4(0x2ff)](_0x301d93,_0x77cb76);},'GvdUF':function(_0x1c06b2,_0x4931bb){var _0x370c9f=_0x362537;return _0x5247d2[_0x370c9f(0x286)](_0x1c06b2,_0x4931bb);},'eFkVp':_0x5247d2[_0x362537(0x192)],'aMBDO':function(_0x1df1fa,_0x967fad){return _0x1df1fa+_0x967fad;},'JlRPN':function(_0x5ee802,_0x13afe7,_0x39d003,_0x47d9a3,_0x4cc29f,_0xfc9b5c,_0x4bf2e6){return _0x5247d2['MtyXs'](_0x5ee802,_0x13afe7,_0x39d003,_0x47d9a3,_0x4cc29f,_0xfc9b5c,_0x4bf2e6);},'oJcLV':function(_0x26f5b7,_0x522ec3,_0x49bf41,_0x1bdc18,_0x36deaf,_0x1da1d8,_0x2fa359){return _0x26f5b7(_0x522ec3,_0x49bf41,_0x1bdc18,_0x36deaf,_0x1da1d8,_0x2fa359);},'mIfsQ':function(_0x5de508,_0x112e1a){return _0x5de508+_0x112e1a;},'AuWag':function(_0x279da3,_0x1b38d7,_0x518b08,_0x3041c8,_0x4b320b,_0x4648a1,_0x11dcc7,_0x1ea12d){var _0x488b3e=_0x362537;return _0x5247d2[_0x488b3e(0x345)](_0x279da3,_0x1b38d7,_0x518b08,_0x3041c8,_0x4b320b,_0x4648a1,_0x11dcc7,_0x1ea12d);},'ijUsn':_0x5247d2[_0x362537(0x61a)],'rYjAU':function(_0xd7b91e,_0x4bc367){var _0x4c4586=_0x362537;return _0x5247d2[_0x4c4586(0x2aa)](_0xd7b91e,_0x4bc367);},'WGbnt':_0x362537(0x2ac),'XfxHD':function(_0x337878,_0x321da9){var _0x1eb4cb=_0x362537;return _0x5247d2[_0x1eb4cb(0x34c)](_0x337878,_0x321da9);},'VFSSK':function(_0x11c59e,_0x647805){return _0x11c59e+_0x647805;},'zaChf':function(_0xd3de5,_0x59762c){return _0x5247d2['rBsUS'](_0xd3de5,_0x59762c);},'VufFi':'aria-'+_0x362537(0x214)+'ed','dVTTk':function(_0x45c8df,_0x2eda87){return _0x45c8df===_0x2eda87;},'Hjbvj':_0x362537(0x5e9),'KeFaO':function(_0x10ca5c,_0x536f0e){var _0x34ab14=_0x362537;return _0x5247d2[_0x34ab14(0x387)](_0x10ca5c,_0x536f0e);},'BWDNw':'PqVIK','yRQgt':_0x362537(0x596),'ajbeC':_0x5247d2[_0x362537(0x60b)],'DCowp':_0x5247d2[_0x362537(0x2ed)],'rnXwE':'sk-co'+_0x362537(0x23e),'bVwJN':_0x362537(0x413)+'9d','qAMYU':function(_0x541791,_0x2a4283){return _0x541791>_0x2a4283;},'ZTsvL':'eryek','ZetxY':_0x362537(0x3ce)+'n','CfjQZ':'sk-la'+'bel','fToNZ':'sk-ct'+'l','KnMIc':_0x5247d2[_0x362537(0x322)],'sSQLD':_0x5247d2['GGzjK'],'BTOwJ':'top','qMRfs':_0x362537(0x415),'SQkch':function(_0x44e000,_0x283831,_0x4a67c5){return _0x44e000(_0x283831,_0x4a67c5);},'vFADX':function(_0x3d6ff6,_0x3c3375){return _0x5247d2['aVnqy'](_0x3d6ff6,_0x3c3375);},'iuEvQ':'Unity'+_0x362537(0x298)+_0x362537(0x291)+_0x362537(0x687)+_0x362537(0x2de),'wEwxn':_0x5247d2['gtadq'],'ImnpU':_0x5247d2[_0x362537(0x1e6)],'VHuIA':_0x5247d2['MHbxL'],'OSZCl':function(_0x92c84f,_0x3dde36){var _0xd69763=_0x362537;return _0x5247d2[_0xd69763(0x334)](_0x92c84f,_0x3dde36);},'ATjnG':function(_0x5ddf9e,_0x777fbd){return _0x5ddf9e+_0x777fbd;},'DxkHl':function(_0x48ab26,_0x2a9466){return _0x5247d2['KwFMY'](_0x48ab26,_0x2a9466);},'nrmNy':'0\x20hoo'+_0x362537(0x5bb)+_0x362537(0x112)+_0x362537(0x2fc)+_0x362537(0x377),'EDWTt':_0x362537(0x5fa)+'d','xuspL':_0x5247d2[_0x362537(0x32c)],'MRlXJ':'held','JLALp':'UWMK\x20'+_0x362537(0x1ee)+'NG\x20—\x20'+'overl'+_0x362537(0x30b)+_0x362537(0x50b)+'einst'+_0x362537(0x209)+_0x362537(0x505)+'erscr'+_0x362537(0x4a3),'JpVcl':function(_0x3ec772,_0x469914){return _0x3ec772+_0x469914;},'TPFHO':function(_0x1e5668,_0x4cd7be){return _0x5247d2['GlTEx'](_0x1e5668,_0x4cd7be);},'igTEo':_0x362537(0x123)+_0x362537(0x665),'GhBDe':function(_0x3a71ec,_0x14eb58){return _0x3a71ec!==_0x14eb58;},'hOFxy':_0x5247d2['aLClo'],'VpCoM':_0x5247d2[_0x362537(0x3cb)],'pDqVL':function(_0x22da61){return _0x5247d2['Uccsk'](_0x22da61);},'oxRSH':function(_0x39a150){return _0x39a150();},'lnDqE':_0x5247d2['LQigt'],'yPPyP':function(_0xf5711c){return _0xf5711c();},'WMMuC':function(_0x5d5da8){return _0x5d5da8();},'TZope':'bHIyG','kvOjr':function(_0x2e537e,_0x30875a){return _0x2e537e===_0x30875a;},'zQWSE':function(_0x3676fc,_0x25b35e){return _0x3676fc!==_0x25b35e;},'edkPy':function(_0x2f9127,_0x1ce6a1){return _0x2f9127===_0x1ce6a1;},'JUFRU':_0x5247d2[_0x362537(0x19e)],'HccIN':function(_0xe7e2a3,_0xd92ee7,_0x478f90,_0x464432,_0x45b81d,_0x5988b7){return _0x5247d2['DopuC'](_0xe7e2a3,_0xd92ee7,_0x478f90,_0x464432,_0x45b81d,_0x5988b7);},'ZGsvf':'No\x20Re'+_0x362537(0x23c),'EMonm':'No\x20Sp'+'read','UPddJ':_0x362537(0x4f7)+_0x362537(0x40a)+'rtide'+'Weapo'+'n.fir'+_0x362537(0x471)+'\x20to\x201'+'0%.\x20S'+'erver'+'\x20may\x20'+_0x362537(0x48d)+'\x20gate'+'\x20shot'+'s.','YAWAS':function(_0x299dd7,_0x529249,_0x548d0d,_0x41a36b,_0x5db400,_0x5caa71){var _0x3a9a5=_0x362537;return _0x5247d2[_0x3a9a5(0x441)](_0x299dd7,_0x529249,_0x548d0d,_0x41a36b,_0x5db400,_0x5caa71);},'JnINf':_0x362537(0x223)+'e\x20[EX'+'P]','omlkv':function(_0x2e480b,_0x34b13d,_0x98686,_0xe75052){return _0x2e480b(_0x34b13d,_0x98686,_0xe75052);},'mnONA':_0x5247d2[_0x362537(0x330)],'iQHir':function(_0x4085ef,_0x45387a){return _0x5247d2['fUsxg'](_0x4085ef,_0x45387a);},'ODBLz':_0x5247d2[_0x362537(0x2dc)],'OrrdJ':_0x362537(0x390)+'\x20%','IPNIz':_0x362537(0x4d1)+_0x362537(0x282)+_0x362537(0x4ac),'aiPzs':_0x5247d2['lxvXb'],'gCriZ':function(_0x11f41b,_0x10ae96,_0x2d160b,_0x371433,_0x468408,_0x23175c){return _0x11f41b(_0x10ae96,_0x2d160b,_0x371433,_0x468408,_0x23175c);},'CYTfA':'Bunny'+'-hop','LatnJ':'Zeroe'+'s\x20Mov'+_0x362537(0x5fe)+_0x362537(0x252)+_0x362537(0x196)+'ime\x20s'+_0x362537(0x55b)+_0x362537(0x32f)+'\x20cool'+'down\x20'+_0x362537(0x2c8)+'\x20appl'+_0x362537(0x1e1),'nVfNG':_0x5247d2[_0x362537(0x244)],'seYxX':_0x362537(0x139)+_0x362537(0x2de),'MSqQc':_0x362537(0x3e9)+'m\x20lef'+'t','wvjLp':_0x362537(0x15f)+_0x362537(0x4d9)+'t','kKTKK':'Cross'+_0x362537(0x11c),'bOdXg':_0x5247d2['MVakc'],'vxfMg':_0x362537(0x515)+'verla'+'y.','gzqum':_0x5247d2['lAqha'],'yjBmx':_0x5247d2['cMpcR'],'tECiL':'Hides'+_0x362537(0x19b)+_0x362537(0x250)+_0x362537(0x25b)+_0x362537(0x6e2)+'ots.','VKmCO':function(_0x389189,_0x297558){return _0x389189(_0x297558);},'odkZv':'Takes'+_0x362537(0x174)+'ct\x20on'+_0x362537(0x154)+_0x362537(0x3a0)+'en\x20to'+_0x362537(0x294)+'.','pIeVG':function(_0x4833c9,_0x1a5f68){return _0x4833c9(_0x1a5f68);},'jzxUl':_0x5247d2[_0x362537(0x379)],'TocPs':function(_0x4f229a,_0x48b6bd,_0x1d4769,_0x160834){return _0x5247d2['aWcHx'](_0x4f229a,_0x48b6bd,_0x1d4769,_0x160834);},'hQdXT':'noRec'+_0x362537(0x62e)+_0x362537(0x2c0)+'lMoti'+_0x362537(0x623)+'ck)','bexfN':function(_0x513a9a,_0x21f17a,_0x33bc90,_0x275643){return _0x513a9a(_0x21f17a,_0x33bc90,_0x275643);},'GNoRB':function(_0x29b141,_0x40af3a,_0xd9a7db){var _0x467b42=_0x362537;return _0x5247d2[_0x467b42(0x2df)](_0x29b141,_0x40af3a,_0xd9a7db);},'xuSoM':function(_0x1f2331,_0x33906a,_0x210329,_0x2e1d15,_0x1cc744,_0x4e1999){return _0x1f2331(_0x33906a,_0x210329,_0x2e1d15,_0x1cc744,_0x4e1999);},'gxpAf':'Disab'+'les\x20C'+'odeSt'+'age\x20d'+_0x362537(0x50a)+_0x362537(0x6b8)+_0x362537(0x366)+_0x362537(0x165)+_0x362537(0x2d7)+_0x362537(0x6a0)+_0x362537(0x185)+'on().'+'\x20Keep'+'\x20ON.','aYgJs':'God/d'+_0x362537(0x272)+'/rapi'+'d\x20gre'+'atly\x20'+_0x362537(0x565)+_0x362537(0x593)+_0x362537(0x4c5)+'even\x20'+_0x362537(0x464)+_0x362537(0x2ad)+_0x362537(0x28e),'dINAl':function(_0x4dd980,_0x4baeee,_0x1e6c1c,_0x48df7e,_0x3d9c12,_0x8b2d6c){return _0x4dd980(_0x4baeee,_0x1e6c1c,_0x48df7e,_0x3d9c12,_0x8b2d6c);},'MhGaY':_0x5247d2[_0x362537(0x400)],'PtFrZ':_0x362537(0x477)+'my\x20se'+'tting'+'s','RqCZm':function(_0x26216b,_0xeff81e){return _0x26216b!==_0xeff81e;},'ldfkp':_0x5247d2['gDCrj'],'yBZst':_0x5247d2['hMxOj'],'sQTYy':_0x362537(0x599),'EJWKk':_0x5247d2[_0x362537(0x45c)],'bkGFn':function(_0x55233a,_0x466198){return _0x55233a(_0x466198);},'ajbhB':'SAFE','cNlZP':'\x20hook'+'s','UeQsE':_0x5247d2[_0x362537(0x349)],'fjGJe':'<svg\x20'+_0x362537(0x696)+_0x362537(0x35e)+_0x362537(0x1bf)+'\x2024\x22\x20'+_0x362537(0x234)+'=\x22mn-'+'logo-'+_0x362537(0x4b7)+_0x362537(0x573)+_0x362537(0x560)+_0x362537(0x40e)+_0x362537(0x2d8)+_0x362537(0x55c)+_0x362537(0x3c0)+'-4-7.'+_0x362537(0x673)+'.5\x201.'+_0x362537(0x583)+'\x204-4.'+'5s4\x202'+_0x362537(0x337)+'5c0\x203'+_0x362537(0x6b7)+'5-4\x207'+_0x362537(0x642)+'fill='+_0x362537(0x478)+_0x362537(0x141)+_0x362537(0x51a)+_0x362537(0x413)+'9d\x22\x20s'+'troke'+_0x362537(0x47c)+'h=\x222\x22'+_0x362537(0x4e9)+_0x362537(0x3a4)+_0x362537(0x502)+_0x362537(0x1da)+_0x362537(0x3f1)+_0x362537(0x1a9)+_0x362537(0x117)+'join='+_0x362537(0x378)+_0x362537(0x28d)+'circl'+_0x362537(0x33a)+_0x362537(0x397)+_0x362537(0x195)+_0x362537(0x50d)+'\x221.5\x22'+'\x20fill'+'=\x22#ff'+_0x362537(0x2f0)+'/></s'+'vg>','QEDvJ':_0x5247d2['cqqag'],'Sgrcs':'mn-su'+'b','dSwmr':'mn-cl'+_0x362537(0x253),'IuPHa':'<svg\x20'+'viewB'+_0x362537(0x35e)+_0x362537(0x1bf)+'\x2024\x22>'+'<path'+'\x20d=\x22M'+_0x362537(0x302)+_0x362537(0x4e4)+_0x362537(0x39e)+_0x362537(0x37a)+'/></s'+_0x362537(0x5f6),'UVCHm':'mUAdx','ekIDh':function(_0x246a35,_0x8fb170){return _0x246a35+_0x8fb170;},'nzPcA':_0x362537(0x6cb),'lxVYi':_0x5247d2['LIjfF'],'guWXu':'fAKqq'};_0x3aead2[_0x362537(0x522)+'ck']&&(_0x5247d2[_0x362537(0x597)](_0x5247d2[_0x362537(0x363)],_0x5247d2[_0x362537(0x692)])?setInterval(()=>{var _0x2e3371=_0x362537;try{for(var _0x440aff of[_0xcc138f['rKhyA'],_0x2e3371(0x611)+_0x2e3371(0x6d6)+_0x2e3371(0x321)+'paren'+'t',_0x2e3371(0x611)+'io_30'+_0x2e3371(0x2dd)+_0x2e3371(0x601)+'nt','fulls'+'creen'+_0x2e3371(0x43d)+'s']){var _0x3ef55b=document[_0x2e3371(0x59f)+_0x2e3371(0x5fe)+_0x2e3371(0x39a)](_0x440aff);if(_0x3ef55b&&_0x440aff==='fulls'+'creen'+_0x2e3371(0x43d)+'s'){var _0x4e3a53=_0x3ef55b['child'+'ren'];for(var _0x1b06da=0x6*-0x449+0x1*-0x1a9d+0x8d*0x5f;_0xcc138f[_0x2e3371(0x569)](_0x1b06da,_0x4e3a53[_0x2e3371(0x584)+'h']);_0x1b06da++){if(_0x4e3a53[_0x1b06da]['id']&&_0x4e3a53[_0x1b06da]['id'][_0x2e3371(0x374)+'Of'](_0xcc138f[_0x2e3371(0x5b7)])===-0x607*0x2+0x1*-0x2359+0x2f67)_0x4e3a53[_0x1b06da][_0x2e3371(0x3ee)][_0x2e3371(0x248)+'ay']=_0x2e3371(0x3be);}}else{if(_0x3ef55b)_0x3ef55b['style']['displ'+'ay']='none';}}}catch(_0x4c3654){}},-0x183c+0x6*0x55d+0x11*-0x2):(_0x469b0c(_0x576813,0x7*-0x279+0x25ed+-0x1456,_0x362537(0x5cf),_0x173d1e),_0x138e76(_0x21f98d,-0x4*0x55f+0x96c+0x1*0xc5c,_0x5247d2['PhcJh'],_0xa09c31)));var _0x3cf602=document['creat'+_0x362537(0x461)+_0x362537(0x1bb)]('canva'+'s');_0x3cf602['style']['cssTe'+'xt']=_0x362537(0x669)+_0x362537(0x539)+'ixed;'+_0x362537(0x2cc)+':0;wi'+_0x362537(0x1ab)+_0x362537(0x6da)+'heigh'+'t:100'+_0x362537(0x198)+_0x362537(0x374)+':2147'+'48364'+'6;poi'+_0x362537(0x3f3)+'event'+_0x362537(0x57e)+'e';var _0x5da197=_0x3cf602[_0x362537(0x213)+_0x362537(0x5c2)]('2d');function _0x4c03fc(){var _0x3300e1=_0x362537;try{var _0x26d43e=document[_0x3300e1(0x5db)+_0x3300e1(0x12e)+'Eleme'+'nt'],_0x323a29=_0x26d43e&&_0x26d43e['tagNa'+'me']!==_0xcc138f['ogrJW']?_0x26d43e:document[_0x3300e1(0x6b9)]||document['docum'+'entEl'+'ement'];if(_0x3cf602[_0x3300e1(0x2e3)+'tNode']!==_0x323a29)_0x323a29[_0x3300e1(0x2b3)+_0x3300e1(0x5f9)+'d'](_0x3cf602);}catch(_0x5c8b4b){try{document['body'][_0x3300e1(0x2b3)+_0x3300e1(0x5f9)+'d'](_0x3cf602);}catch(_0x4c2689){}}}var _0x261095={'w':0x0,'h':0x0,'dpr':0x0};function _0x9132f9(){var _0x97693a=_0x362537,_0x1f21e6=window[_0x97693a(0x4d5)+'ePixe'+_0x97693a(0x2c9)+'o']||0x869*-0x3+0x790+0x1a*0xae,_0x2d83e2=window[_0x97693a(0x5ca)+'Width'],_0x474a17=window[_0x97693a(0x5ca)+'Heigh'+'t'];if(_0xcc138f[_0x97693a(0x513)](_0x2d83e2,_0x261095['w'])&&_0x474a17===_0x261095['h']&&_0x1f21e6===_0x261095[_0x97693a(0x5b8)])return;_0x261095['w']=_0x2d83e2,_0x261095['h']=_0x474a17,_0x261095[_0x97693a(0x5b8)]=_0x1f21e6,_0x3cf602['width']=Math['round'](_0xcc138f[_0x97693a(0x3c9)](_0x2d83e2,_0x1f21e6)),_0x3cf602[_0x97693a(0x31e)+'t']=Math[_0x97693a(0x46e)](_0x474a17*_0x1f21e6),_0x5da197[_0x97693a(0x68f)+'ansfo'+'rm'](_0x1f21e6,0x1*0x1c2b+0x10df+0x1685*-0x2,-0x322*0xc+0x3*0x56e+0x154e,_0x1f21e6,-0x1*-0x22a+0xab0*-0x3+0x1de6,-0x697*0x5+-0x10d7+0x2*0x18e5);}var _0x46f4a4=-0x2*-0x880+-0x593*0x3+0x47*-0x1,_0x21fa08=performance[_0x362537(0x156)](),_0x2f5ffc=0x1188+-0x19b4+0x416*0x2;function _0x471494(_0x3c79d8){var _0x50fc8d=_0x362537,_0x4dba82={'dnmur':_0xcc138f[_0x50fc8d(0x6b4)],'vwOkL':'px\x20ui'+_0x50fc8d(0x24f)+'-seri'+_0x50fc8d(0x648)+'tem-u'+'i,san'+'s-ser'+'if','xgbRy':function(_0x26d82a,_0x4acbda){var _0x320f94=_0x50fc8d;return _0xcc138f[_0x320f94(0x222)](_0x26d82a,_0x4acbda);},'WCDzf':function(_0xe7507b,_0x3f9f5b){return _0xe7507b*_0x3f9f5b;},'DVmnk':'#fff','jqqhh':function(_0x38e286,_0x59fb53){return _0x38e286+_0x59fb53;},'Sfita':function(_0x1a0ba2,_0x1e212a){return _0x1a0ba2*_0x1e212a;},'wHHBx':_0xcc138f['eGvyX'],'TXbOk':function(_0x408989,_0x493a67){return _0x408989+_0x493a67;}};if(_0x50fc8d(0x6de)!==_0xcc138f[_0x50fc8d(0x37c)]){var _0x2e0db4=_0xcc138f[_0x50fc8d(0x3ff)](Number,_0x3aead2['ksSca'+'le'])||-0xed5*0x1+-0x1*-0x1620+0x3a5*-0x2,_0x53f865=_0xcc138f[_0x50fc8d(0x50e)](0x17*-0xb2+-0x1*0xf98+0x1fb8,_0x2e0db4),_0x1367d7=_0xcc138f[_0x50fc8d(0x3c9)](-0xa7d+0x2*0xe0+0x8c1,_0x2e0db4),_0x40040b=_0xcc138f['GkKJk'](_0x53f865*(0x1413+0x1*-0x1c87+0x877),_0x1367d7*(0x1*0x215+0x420+-0x633)),_0x52cd8b=_0xcc138f[_0x50fc8d(0x308)](_0xcc138f['MqBpF'](_0x53f865,0x26ad+0xc5d*0x1+-0x3307),_0x1367d7*(-0x4*0x5da+0x79*0x2+0xb3c*0x2)),_0x1a0c7d=_0x3aead2['ksPos'],_0x337c77=_0x1a0c7d==='br'?_0xcc138f[_0x50fc8d(0x59a)](_0x3c79d8['right']-(-0x353*0x8+-0x18b3+-0x335b*-0x1),_0x40040b):_0xcc138f['ztRza'](_0x3c79d8['left'],0x1*0x19ab+0x7b2+-0x6a9*0x5),_0x107168=_0x1a0c7d==='ml'?_0xcc138f['DKMHh'](_0x3c79d8[_0x50fc8d(0x508)]+_0xcc138f[_0x50fc8d(0x3e2)](_0x3c79d8['heigh'+'t'],-0xaea+-0x1428+0x264*0xd),_0x52cd8b/(0x4e4*-0x2+-0x23f+0xd*0xed)):_0xcc138f[_0x50fc8d(0x230)](_0x3c79d8[_0x50fc8d(0x3fd)+'m'],_0x52cd8b)-(_0xcc138f[_0x50fc8d(0x513)](_0x1a0c7d,'bl')?-0x13e1*-0x1+-0x9f9+-0x988:-0x1d*-0x5d+-0x1a9c+-0x355*-0x5),_0x159ff4=(_0xe3bbc9,_0x421762,_0xecfebf,_0x53b358,_0xd67f5f,_0x538418,_0x3a1ee1)=>{var _0x2bfbd0=_0x50fc8d,_0x5a92aa=_0x4dba82['dnmur']['split']('|'),_0x4abebe=0x3*-0x9fa+0x178b+0x663*0x1;while(!![]){switch(_0x5a92aa[_0x4abebe++]){case'0':_0x5da197[_0x2bfbd0(0x41a)+'e']();continue;case'1':_0x3a1ee1&&(_0x5da197[_0x2bfbd0(0x186)]=_0x2bfbd0(0x56a)+Math['round']((-0x1*-0x1cb0+0x149*-0x1+-0x1b5e)*_0x2e0db4)+_0x4dba82[_0x2bfbd0(0x30d)],_0x5da197[_0x2bfbd0(0x526)+'tyle']=_0x536423?_0x2bfbd0(0x6c2):_0x2bfbd0(0x48f)+_0x2bfbd0(0x2e5)+_0x2bfbd0(0x2f4)+'0,0.5'+'5)',_0x5da197[_0x2bfbd0(0x26d)+'ext'](_0x3a1ee1,_0xecfebf+_0x4dba82['xgbRy'](_0xd67f5f,-0x1*-0xa33+0x91c+-0x134d),_0x53b358+_0x4dba82[_0x2bfbd0(0x187)](_0x538418,0xbb7*-0x3+-0x14ab+0x1be9*0x2)+(-0x16f9*-0x1+-0x80e+-0xee3)*_0x2e0db4));continue;case'2':_0x5da197[_0x2bfbd0(0x41a)+_0x2bfbd0(0x1ac)+'e']=_0x536423?_0x4e3613:_0x2bfbd0(0x48f)+_0x2bfbd0(0x24d)+'07,15'+_0x2bfbd0(0x3ca)+'5)';continue;case'3':_0x5da197['lineW'+'idth']=-0x3*-0x75f+0xedf+0x24fb*-0x1;continue;case'4':if(_0x5da197[_0x2bfbd0(0x46e)+_0x2bfbd0(0x1c4)])_0x5da197['round'+'Rect'](_0xecfebf,_0x53b358,_0xd67f5f,_0x538418,_0x4dba82[_0x2bfbd0(0x67f)](0x2516*-0x1+0xd7f*0x1+-0x1*-0x179e,_0x2e0db4));else _0x5da197[_0x2bfbd0(0x2c7)](_0xecfebf,_0x53b358,_0xd67f5f,_0x538418);continue;case'5':_0x5da197[_0x2bfbd0(0x143)]();continue;case'6':_0x5da197['fillS'+_0x2bfbd0(0x5b2)]=_0x536423?_0x4dba82['DVmnk']:_0x2bfbd0(0x48f)+_0x2bfbd0(0x2e5)+_0x2bfbd0(0x2f4)+_0x2bfbd0(0x664)+')';continue;case'7':_0x5da197[_0x2bfbd0(0x4e2)]();continue;case'8':_0x536423&&(_0x5da197['shado'+_0x2bfbd0(0x69c)+'r']=_0x335ae7,_0x5da197['shado'+'wBlur']=-0x4*0x70b+-0x26b2*-0x1+0x8*-0x14f,_0x5da197['fill'](),_0x5da197[_0x2bfbd0(0x404)+_0x2bfbd0(0x49c)]=-0xb3b+0xbb2+-0x7*0x11);continue;case'9':_0x5da197['font']=_0x4dba82[_0x2bfbd0(0x335)]('700\x20',Math['round'](_0x4dba82[_0x2bfbd0(0x620)](-0x1b19+0x131+0x19f4,_0x2e0db4)))+_0x4dba82[_0x2bfbd0(0x30d)];continue;case'10':_0x5da197[_0x2bfbd0(0x526)+_0x2bfbd0(0x5b2)]=_0x536423?'rgba('+'255,1'+'07,15'+'7,0.8'+'5)':'rgba('+_0x2bfbd0(0x38b)+_0x2bfbd0(0x604)+'7)';continue;case'11':_0x5da197['resto'+'re']();continue;case'12':_0x5da197['textB'+_0x2bfbd0(0x3b7)+'ne']=_0x4dba82['wHHBx'];continue;case'13':_0x5da197[_0x2bfbd0(0x210)+'lign']=_0x2bfbd0(0x289)+'r';continue;case'14':var _0x536423=_0xdd906['has'](_0x421762);continue;case'15':_0x5da197['begin'+_0x2bfbd0(0x47e)]();continue;case'16':_0x5da197['fillT'+_0x2bfbd0(0x4c8)](_0xe3bbc9,_0xecfebf+_0xd67f5f/(0x11*-0xdc+0xd87+0x3*0x5d),_0x4dba82[_0x2bfbd0(0x66e)](_0x53b358,_0x538418/(-0x173d+-0x95*0x29+0x2f1c))-(_0x3a1ee1?_0x4dba82[_0x2bfbd0(0x67f)](-0x97e+0x801+0x182,_0x2e0db4):0x190a+-0x1*0xb20+-0xdea));continue;}break;}};_0x159ff4('W','KeyW',_0xcc138f[_0x50fc8d(0x39d)](_0x337c77+_0x53f865,_0x1367d7),_0x107168,_0x53f865,_0x53f865),_0x159ff4('A',_0xcc138f[_0x50fc8d(0x527)],_0x337c77,_0xcc138f[_0x50fc8d(0x273)](_0x107168+_0x53f865,_0x1367d7),_0x53f865,_0x53f865),_0xcc138f['JlRPN'](_0x159ff4,'S',_0x50fc8d(0x313),_0xcc138f[_0x50fc8d(0x273)](_0x337c77,_0x53f865)+_0x1367d7,_0x107168+_0x53f865+_0x1367d7,_0x53f865,_0x53f865),_0xcc138f['oJcLV'](_0x159ff4,'D',_0x50fc8d(0x393),_0x337c77+(_0x53f865+_0x1367d7)*(-0x637+-0xf*0x202+0x2457),_0xcc138f[_0x50fc8d(0x4ba)](_0x107168,_0x53f865)+_0x1367d7,_0x53f865,_0x53f865);var _0x261448=_0xcc138f[_0x50fc8d(0x59a)](_0x40040b,_0x1367d7)/(-0x3a1*-0x9+-0xe8c+-0x121b*0x1),_0x35b939=_0xcc138f[_0x50fc8d(0x273)](_0x107168,_0xcc138f[_0x50fc8d(0x50e)](_0x53f865+_0x1367d7,0x184f+-0x99b*0x2+-0x1*0x517));_0xcc138f[_0x50fc8d(0x503)](_0x159ff4,_0x50fc8d(0x422),_0xcc138f[_0x50fc8d(0x55d)],_0x337c77,_0x35b939,_0x261448,_0x53f865,_0x3aead2[_0x50fc8d(0x626)]?_0xcc138f['ztRza'](_0xcc138f['rYjAU'](_0x16584c,0x24cb+-0x22ac+-0x2*0x10f),'\x20CPS'):''),_0xcc138f['AuWag'](_0x159ff4,_0xcc138f['WGbnt'],_0x50fc8d(0x1b8)+'3',_0xcc138f[_0x50fc8d(0x29a)](_0x337c77+_0x261448,_0x1367d7),_0x35b939,_0x261448,_0x53f865,_0x3aead2[_0x50fc8d(0x626)]?_0xcc138f[_0x50fc8d(0x476)](_0x16584c(0x26f4+-0x1945+0x4*-0x36b),_0x50fc8d(0x241)):''),_0x159ff4('','Space',_0x337c77,_0xcc138f['GkKJk'](_0x35b939+_0x53f865,_0x1367d7),_0x40040b,_0x53f865*(0x19b+-0x17e6+-0xd*-0x1b7+0.45));}else{if(_0xaf9592[_0xd1ff4b]['id']&&_0x260728[_0x5f2339]['id']['index'+'Of'](_0x50fc8d(0x611)+_0x50fc8d(0x20b))===-0x22ae*-0x1+-0x1*-0x15ff+-0x38ad)_0x5dd112[_0x899f57][_0x50fc8d(0x3ee)]['displ'+'ay']=_0xcc138f['Fsgxy'];}}function _0x457e74(_0x585d5b){var _0x184193=_0x362537,_0x93a8e9={'wcmcn':function(_0x4f6f2b,_0x594f53){return _0x4f6f2b!==_0x594f53;}};if(_0x184193(0x518)!=='GUifR'){var _0x4ce24b=('16|10'+_0x184193(0x13c)+_0x184193(0x1d5)+_0x184193(0x657)+_0x184193(0x126)+'3|21|'+'2|19|'+'1|20|'+'0|7|2'+_0x184193(0x14f)+'11|18'+'|4|6|'+'9')[_0x184193(0x17f)]('|'),_0x59c56f=-0xc*0x200+-0x738+-0x1bc*-0x12;while(!![]){switch(_0x4ce24b[_0x59c56f++]){case'0':_0x5da197[_0x184193(0x2b9)+'o'](_0x32cb3c,_0x5247d2[_0x184193(0x6e1)](_0x5247d2[_0x184193(0x47a)](_0x128848,_0x649cd0),_0x425d5e));continue;case'1':_0x5da197['moveT'+'o'](_0x32cb3c+_0x649cd0,_0x128848);continue;case'2':_0x5da197[_0x184193(0x2b9)+'o'](_0x5247d2['LszqL'](_0x32cb3c-_0x649cd0,_0x425d5e),_0x128848);continue;case'3':_0x5da197[_0x184193(0x404)+_0x184193(0x69c)+'r']=_0x44b0ce;continue;case'4':_0x5da197[_0x184193(0x21c)](_0x32cb3c,_0x128848,(-0x2246+-0x47*0x59+-0x1d7b*-0x2+0.6000000000000001)*_0x5c1392,0x1f7*-0x13+-0xbb1+0x3106,_0x5247d2[_0x184193(0x5ab)](Math['PI'],-0x1a57+-0x814+0x226d));continue;case'5':_0x5da197['fillS'+_0x184193(0x5b2)]=_0x44b0ce;continue;case'6':_0x5da197['fill']();continue;case'7':_0x5da197[_0x184193(0x1d0)+'o'](_0x32cb3c,_0x128848-_0x649cd0);continue;case'8':var _0x44b0ce=/^#[0-9a-f]{6}$/i[_0x184193(0x4de)](_0x3aead2[_0x184193(0x4c0)+'or'])?_0x3aead2['chCol'+'or']:'#ff6b'+'9d';continue;case'9':_0x5da197[_0x184193(0x2a2)+'re']();continue;case'10':var _0x5c1392=Number(_0x3aead2['chSiz'+'e'])||-0x268a+-0xbeb+0x10d2*0x3;continue;case'11':_0x5da197[_0x184193(0x41a)+'e']();continue;case'12':_0x5da197['shado'+_0x184193(0x49c)]=-0x1bff+0x1*0x13+0x1bf2;continue;case'13':var _0x649cd0=(0x2*-0x22c+0x113*0xd+0x27*-0x3f)*_0x5c1392,_0x425d5e=(0xaad+0x3de+-0xe83)*_0x5c1392;continue;case'14':_0x5da197[_0x184193(0x41a)+'eStyl'+'e']=_0x44b0ce;continue;case'15':_0x5da197[_0x184193(0x4e2)]();continue;case'16':var _0x32cb3c=_0x585d5b['width']/(0x11a5+-0x74b*0x4+0xb89*0x1),_0x128848=_0x5247d2['nUyJv'](_0x585d5b[_0x184193(0x31e)+'t'],-0x6f5+0x1*-0xf91+0x19c*0xe);continue;case'17':_0x5da197['lineW'+_0x184193(0x47d)]=Math[_0x184193(0x455)](-0xb*-0x47+-0x1587+0x39*0x53+0.5,_0x5247d2[_0x184193(0x2a1)](-0x1343*-0x2+-0x80e*0x1+0x1*-0x1e76,_0x5c1392));continue;case'18':_0x5da197[_0x184193(0x292)+'Path']();continue;case'19':_0x5da197[_0x184193(0x1d0)+'o'](_0x5247d2[_0x184193(0x6e1)](_0x32cb3c,_0x649cd0),_0x128848);continue;case'20':_0x5da197[_0x184193(0x1d0)+'o'](_0x5247d2['KwFMY'](_0x32cb3c+_0x649cd0,_0x425d5e),_0x128848);continue;case'21':_0x5da197[_0x184193(0x292)+_0x184193(0x47e)]();continue;case'22':_0x5da197[_0x184193(0x2b9)+'o'](_0x32cb3c,_0x128848+_0x649cd0);continue;case'23':_0x5da197['lineT'+'o'](_0x32cb3c,_0x128848+_0x649cd0+_0x425d5e);continue;}break;}}else{var _0x104eca=_0xc17cc6[_0x184193(0x1c6)+'ostfi'+'x']({'typeName':_0x4e438e,'methodName':_0x2282b6,'params':_0x4dbb43,'returnType':_0x1f6a64},_0x4dc9a4);return _0x104eca[_0x184193(0x57b)+'ed']=_0x93a8e9[_0x184193(0x45e)](_0x2ec498,![]),_0x23bc95[_0x461d5c]=_0x104eca,_0x1d544b['hooks'+'Total']++,_0x104eca;}}function _0x144a8f(_0x591bf6){var _0x36ac79=_0x362537;_0x5da197['save'](),_0x5da197[_0x36ac79(0x186)]='600\x201'+_0x36ac79(0x33b)+_0x36ac79(0x4cc)+'ospac'+_0x36ac79(0x327)+_0x36ac79(0x5ff)+'e',_0x5da197[_0x36ac79(0x210)+_0x36ac79(0x4b4)]='left',_0x5da197[_0x36ac79(0x58d)+'aseli'+'ne']=_0x5247d2[_0x36ac79(0x6d5)];var _0x3560cc=-0xe5d*-0x1+0x1cd2+-0x2b03,_0x29bb79=0x3c2+0x1*-0x1c0+-0x1f6,_0x1f861c=(_0x12a7f1,_0x4b6788)=>{var _0x3d37d7=_0x36ac79;_0x5da197[_0x3d37d7(0x526)+_0x3d37d7(0x5b2)]=_0xcc138f[_0x3d37d7(0x52b)](_0x4b6788,_0x3d37d7(0x48f)+_0x3d37d7(0x2e5)+_0x3d37d7(0x2f4)+_0x3d37d7(0x4f9)+'5)'),_0x5da197['fillT'+_0x3d37d7(0x4c8)](_0x12a7f1,_0x29bb79,_0x3560cc),_0x3560cc+=-0x251*-0xb+0x58d+0x7be*-0x4;};_0x1f861c('SAKUR'+_0x36ac79(0x127)+'R\x20v1.'+'1','#ff6b'+'9d');if(_0x3aead2[_0x36ac79(0x534)])_0x1f861c(_0x2f5ffc+_0x5247d2['PsnuJ']);if(!_0x33e089[_0x36ac79(0x67a)+_0x36ac79(0x5a7)])_0x5247d2[_0x36ac79(0x53a)](_0x1f861c,_0x36ac79(0x2b4)+_0x36ac79(0x32e)+_0x36ac79(0x15e)+'e…','rgba('+_0x36ac79(0x24d)+'80,19'+_0x36ac79(0x558)+')');_0x5da197[_0x36ac79(0x2a2)+'re']();}function _0x3e0cea(){var _0xef232f=_0x362537,_0x4c3772=_0x5247d2['wVHNA'][_0xef232f(0x17f)]('|'),_0x1dbf2e=0x1af+-0xc59+0xaaa;while(!![]){switch(_0x4c3772[_0x1dbf2e++]){case'0':var _0x1006e5=performance['now']();continue;case'1':if(_0x3aead2[_0xef232f(0x3e7)+'rokes'])_0x5247d2[_0xef232f(0x2da)](_0x471494,_0x5c7810);continue;case'2':if(_0x3aead2['cross'+_0xef232f(0x11c)])_0x457e74(_0x5c7810);continue;case'3':_0x9132f9();continue;case'4':requestAnimationFrame(_0x3e0cea);continue;case'5':_0x46f4a4++;continue;case'6':_0x5da197[_0xef232f(0x645)+'Rect'](-0x49*0x3b+0x18c5+-0x71*0x12,0x17d3+0x3a*-0xa7+0xe03,_0x261095['w'],_0x261095['h']);continue;case'7':var _0x5c7810={'left':0x0,'top':0x0,'right':_0x261095['w'],'bottom':_0x261095['h'],'width':_0x261095['w'],'height':_0x261095['h']};continue;case'8':_0x5247d2['NmFPk'](_0x1006e5-_0x21fa08,-0x2b6+0x13c+-0x1*-0x36e)&&(_0x2f5ffc=Math['round'](_0x46f4a4*(0x10*-0x1a1+0x55f*-0x2+0xc1*0x36)/_0x5247d2['YchWv'](_0x1006e5,_0x21fa08)),_0x46f4a4=0x6*0x5ae+0x2343+-0x3*0x171d,_0x21fa08=_0x1006e5);continue;case'9':_0x5247d2[_0xef232f(0x402)](_0x144a8f,_0x5c7810);continue;case'10':_0x4c03fc();continue;}break;}}var _0x5587bd=document['creat'+'eElem'+_0x362537(0x1bb)](_0x362537(0x596));_0x5587bd['id']=_0x5247d2['MzUku'],_0x5587bd[_0x362537(0x3ee)][_0x362537(0x5df)+'xt']=_0x362537(0x669)+'ion:f'+_0x362537(0x16b)+_0x362537(0x2cc)+_0x362537(0x344)+'index'+':2147'+_0x362537(0x50c)+_0x362537(0x5a3)+'nter-'+_0x362537(0x4da)+_0x362537(0x57e)+'e;';var _0x2a2176=_0x5587bd['attac'+_0x362537(0x2a7)+'ow']({'mode':'open'});(document[_0x362537(0x6b9)]||document[_0x362537(0x5f0)+_0x362537(0x581)+'ement'])['appen'+_0x362537(0x5f9)+'d'](_0x5587bd);var _0x25f72f=![],_0xbb1df0={};try{_0xbb1df0=JSON[_0x362537(0x207)](localStorage['getIt'+'em'](_0x362537(0x6aa)+_0x362537(0x39c)+_0x362537(0x4fa)+'v1')||'{}');}catch(_0x3323ce){}function _0x291ce8(){var _0x207a64=_0x362537;if(_0x207a64(0x1e0)===_0x207a64(0x1e0))try{localStorage['setIt'+'em']('sakur'+_0x207a64(0x39c)+_0x207a64(0x4fa)+'v1',JSON[_0x207a64(0x2be)+'gify'](_0xbb1df0));}catch(_0x410865){}else _0x174077['shado'+_0x207a64(0x69c)+'r']=_0xfb177c,_0x30a524['shado'+_0x207a64(0x49c)]=-0x5*0x4ff+0x97*-0x13+-0x243e*-0x1,_0x253a1d['fill'](),_0x36cca9['shado'+_0x207a64(0x49c)]=0x1*0x8ab+-0x1c95+0x9f5*0x2;}function _0x27c75a(_0x12f9ac,_0x1fc34c){var _0x10100e=_0x362537,_0xa6bd56=document['creat'+_0x10100e(0x461)+'ent'](_0x10100e(0x3ce)+'n');return _0xa6bd56[_0x10100e(0x23a)]=_0x5247d2['eDGQK'],_0xa6bd56['class'+_0x10100e(0x6cc)]=_0x10100e(0x2c5)+_0x10100e(0x311),_0xa6bd56[_0x10100e(0x18e)+'tribu'+'te']('role',_0x5247d2[_0x10100e(0x33d)]),_0xa6bd56['setAt'+'tribu'+'te']('aria-'+_0x10100e(0x214)+'ed',String(!!_0x12f9ac)),_0xa6bd56[_0x10100e(0x54d)+'ck']=_0x189e55=>{var _0x29bf25=_0x10100e;_0x189e55[_0x29bf25(0x26e)+_0x29bf25(0x4d2)+'ation']();var _0x4f47c2=_0xa6bd56[_0x29bf25(0x122)+_0x29bf25(0x58a)+'te'](_0xcc138f[_0x29bf25(0x64a)])!=='true';_0xa6bd56[_0x29bf25(0x18e)+'tribu'+'te'](_0x29bf25(0x133)+'check'+'ed',String(_0x4f47c2)),_0x1fc34c(_0x4f47c2);},_0xa6bd56;}function _0x3910a3(_0x2f4ff3,_0x3634fc,_0xca8586,_0x5eab53,_0x188269){var _0x5d7edf=_0x362537,_0x4693a8={'PbUEV':_0x5d7edf(0x35b),'mbVCo':_0x5d7edf(0x140)+_0x5d7edf(0x615)+_0x5d7edf(0x463)+'ook\x20r'+'eg\x20fa'+'iled:','rvgee':_0xcc138f['BWDNw'],'rCwfN':function(_0x543283){return _0x543283();}},_0x4149f4=document[_0x5d7edf(0x16f)+_0x5d7edf(0x461)+_0x5d7edf(0x1bb)](_0xcc138f[_0x5d7edf(0x52f)]);_0x4149f4[_0x5d7edf(0x234)+_0x5d7edf(0x6cc)]=_0x5d7edf(0x682)+_0x5d7edf(0x462);var _0xc8cca3=document['creat'+_0x5d7edf(0x461)+_0x5d7edf(0x1bb)](_0xcc138f[_0x5d7edf(0x49a)]);_0xc8cca3[_0x5d7edf(0x23a)]=_0x5d7edf(0x543),_0xc8cca3['class'+'Name']='sk-sl'+'ider',_0xc8cca3[_0x5d7edf(0x5a1)]=_0x3634fc,_0xc8cca3[_0x5d7edf(0x455)]=_0xca8586,_0xc8cca3['step']=_0x5eab53,_0xc8cca3[_0x5d7edf(0x6d9)]=_0x2f4ff3;var _0x52817a=document[_0x5d7edf(0x16f)+_0x5d7edf(0x461)+_0x5d7edf(0x1bb)](_0x5d7edf(0x179));_0x52817a[_0x5d7edf(0x234)+_0x5d7edf(0x6cc)]=_0x5d7edf(0x1f6)+'l',_0x52817a['textC'+'onten'+'t']=String(_0x2f4ff3);var _0x177a48=()=>{var _0x33845a=_0x5d7edf;if(_0xcc138f[_0x33845a(0x594)](_0xcc138f[_0x33845a(0x3db)],'WZxEi'))try{var _0x3a9fb0=new _0x1382dd(_0x545d0c)['readF'+_0x33845a(0x1a5)](_0x407a87,_0x4693a8[_0x33845a(0x4d0)]);return _0x3a9fb0?_0x3a9fb0['val']():-0x17*0x77+-0x1*-0x2433+-0x1982;}catch(_0x2ef057){return 0x49d+0x23a6+-0x1*0x2843;}else _0x52817a[_0x33845a(0x2b5)+'onten'+'t']=String(_0xc8cca3[_0x33845a(0x6d9)]),_0x4149f4[_0x33845a(0x3ee)][_0x33845a(0x1e2)+_0x33845a(0x447)+'y'](_0x33845a(0x29c),_0xcc138f[_0x33845a(0x4ba)]((_0xc8cca3[_0x33845a(0x6d9)]-_0x3634fc)/_0xcc138f[_0x33845a(0x2d6)](_0xca8586,_0x3634fc)*(-0xc04+0x962*0x3+0xa*-0x193),'%'));};return _0xc8cca3[_0x5d7edf(0x578)+'ut']=()=>{var _0x57157c=_0x5d7edf;if(_0x4693a8[_0x57157c(0x3ab)]!=='fLmrm')_0x4693a8[_0x57157c(0x1d3)](_0x177a48),_0x188269(Number(_0xc8cca3['value']));else return _0x5e5713[_0x57157c(0x4cf)](_0x4693a8['mbVCo'],_0xb5339b,_0x5ed20b&&_0x15af7d[_0x57157c(0x667)+'ge']),null;},_0x177a48(),_0x4149f4[_0x5d7edf(0x2b3)+'d'](_0xc8cca3,_0x52817a),_0x4149f4;}function _0x8404ac(_0x312004,_0x460a4d){var _0x2c217d=_0x362537,_0x3fa594=document[_0x2c217d(0x16f)+_0x2c217d(0x461)+'ent']('input');return _0x3fa594[_0x2c217d(0x23a)]=_0xcc138f['DCowp'],_0x3fa594[_0x2c217d(0x234)+_0x2c217d(0x6cc)]=_0xcc138f['rnXwE'],_0x3fa594[_0x2c217d(0x6d9)]=/^#[0-9a-f]{6}$/i[_0x2c217d(0x4de)](_0x312004)?_0x312004:_0xcc138f[_0x2c217d(0x457)],_0x3fa594[_0x2c217d(0x578)+'ut']=()=>_0x460a4d(_0x3fa594[_0x2c217d(0x6d9)]),_0x3fa594;}function _0x7c0391(_0x1b1952,_0x2825db,_0x152987){var _0x453f67=_0x362537,_0x4bc32d=document['creat'+_0x453f67(0x461)+_0x453f67(0x1bb)](_0x5247d2[_0x453f67(0x677)]);_0x4bc32d[_0x453f67(0x234)+_0x453f67(0x6cc)]=_0x453f67(0x60e)+'eld';for(var [_0x2c2b84,_0xfc00e]of _0x2825db){if(_0x5247d2[_0x453f67(0x597)](_0x453f67(0x430),_0x453f67(0x430))){var _0x58ad4e=_0x590475[_0x4b2a73]||[],_0x334041=_0x4791d5[_0x453f67(0x156)]();while(_0x58ad4e[_0x453f67(0x584)+'h']&&_0xcc138f[_0x453f67(0x299)](_0x334041-_0x58ad4e[0x1be1+-0xad9+0x2*-0x884],-0x2*-0xa78+0x2*-0xc91+0x81a))_0x58ad4e[_0x453f67(0x2fb)]();return _0x58ad4e['lengt'+'h'];}else{var _0x14a9eb=document[_0x453f67(0x16f)+_0x453f67(0x461)+_0x453f67(0x1bb)](_0x453f67(0x6ce)+'n');_0x14a9eb[_0x453f67(0x6d9)]=_0x2c2b84,_0x14a9eb[_0x453f67(0x2b5)+_0x453f67(0x3df)+'t']=_0xfc00e,_0x4bc32d['appen'+_0x453f67(0x5f9)+'d'](_0x14a9eb);}}return _0x4bc32d[_0x453f67(0x6d9)]=_0x1b1952,_0x4bc32d['oncha'+_0x453f67(0x462)]=()=>_0x152987(_0x4bc32d['value']),_0x4bc32d;}function _0x150186(_0x1a8232,_0x50bf8c){var _0x2b516c=_0x362537,_0x3bd2b1=document[_0x2b516c(0x16f)+_0x2b516c(0x461)+_0x2b516c(0x1bb)]('butto'+'n');return _0x3bd2b1['type']=_0xcc138f[_0x2b516c(0x61b)],_0x3bd2b1[_0x2b516c(0x234)+'Name']=_0x2b516c(0x347)+'n',_0x3bd2b1[_0x2b516c(0x2b5)+_0x2b516c(0x3df)+'t']=_0x1a8232,_0x3bd2b1[_0x2b516c(0x54d)+'ck']=_0x1848b5=>{var _0x478b9d=_0x2b516c;if('ETDop'===_0xcc138f[_0x478b9d(0x4dc)]){var _0xd94a08=_0x1ca80c[_0x3c6f55];if(_0xd94a08)try{_0xd94a08['enabl'+'ed']=!!_0x214e4d;}catch(_0x42ec43){}}else _0x1848b5[_0x478b9d(0x26e)+_0x478b9d(0x4d2)+'ation'](),_0x50bf8c();},_0x3bd2b1;}function _0x46e543(_0x3d808a,_0x57aead,_0x3d1d5a){var _0x47e122=_0x362537,_0x323dfa=('2|5|3'+_0x47e122(0x360)+_0x47e122(0x1fa))['split']('|'),_0x3b645d=-0xa*-0x33e+-0xc5f+-0x140d;while(!![]){switch(_0x323dfa[_0x3b645d++]){case'0':_0x3c7c7c['class'+_0x47e122(0x6cc)]=_0xcc138f['CfjQZ'];continue;case'1':_0x1b9ec5[_0x47e122(0x2b3)+'d'](_0x3c7c7c,_0x3d1d5a);continue;case'2':var _0x1b9ec5=document[_0x47e122(0x16f)+_0x47e122(0x461)+_0x47e122(0x1bb)]('div');continue;case'3':var _0x3c7c7c=document[_0x47e122(0x16f)+_0x47e122(0x461)+'ent'](_0x47e122(0x179));continue;case'4':return _0x1b9ec5;case'5':_0x1b9ec5[_0x47e122(0x234)+'Name']=_0xcc138f['fToNZ'];continue;case'6':if(_0x57aead){var _0x120969=document[_0x47e122(0x16f)+'eElem'+_0x47e122(0x1bb)](_0xcc138f['KnMIc']);_0x120969['class'+_0x47e122(0x6cc)]=_0x47e122(0x532)+'nt',_0x120969['textC'+_0x47e122(0x3df)+'t']=_0x57aead,_0x3c7c7c[_0x47e122(0x2b3)+_0x47e122(0x5f9)+'d'](_0x120969);}continue;case'7':_0x3c7c7c[_0x47e122(0x2b5)+'onten'+'t']=_0x3d808a;continue;}break;}}function _0x1d0c4e(_0x19f0c8,_0xd4ccc3){var _0x56d45c=_0x362537,_0x2a9d4e=document['creat'+_0x56d45c(0x461)+_0x56d45c(0x1bb)](_0x5247d2[_0x56d45c(0x4dd)]);return _0x2a9d4e['class'+_0x56d45c(0x6cc)]=_0x5247d2[_0x56d45c(0x34c)](_0x5247d2['qRReu'],_0xd4ccc3?_0x56d45c(0x4e7):''),_0x2a9d4e[_0x56d45c(0x2b5)+'onten'+'t']=_0x19f0c8,_0x2a9d4e;}function _0x423ae8(_0x4bbbde,_0x5f5cee,_0xa70ba5,_0x16e654,_0x119cd5){var _0xc4d270=_0x362537,_0x4f5ed5={'jLgMD':'rgba('+'255,2'+'35,24'+'0,0.7'+'5)'},_0x3868b9=document['creat'+'eElem'+'ent'](_0x5247d2['bTXIl']);_0x3868b9[_0xc4d270(0x234)+_0xc4d270(0x6cc)]='sk-ca'+'rd'+(_0xa70ba5?_0xc4d270(0x3d8):'');var _0x1a46fc=document['creat'+_0xc4d270(0x461)+_0xc4d270(0x1bb)](_0x5247d2[_0xc4d270(0x4dd)]);_0x1a46fc[_0xc4d270(0x234)+'Name']='sk-ca'+_0xc4d270(0x3a2)+'ad';var _0x1a63c7=document['creat'+'eElem'+'ent'](_0xc4d270(0x596));_0x1a63c7[_0xc4d270(0x234)+'Name']=_0xc4d270(0x26f)+'rd-ti'+_0xc4d270(0x39b);var _0x307716=document[_0xc4d270(0x16f)+_0xc4d270(0x461)+_0xc4d270(0x1bb)](_0x5247d2[_0xc4d270(0x1b5)]);_0x307716[_0xc4d270(0x2b5)+_0xc4d270(0x3df)+'t']=_0x4bbbde,_0x1a63c7[_0xc4d270(0x2b3)+'dChil'+'d'](_0x307716);if(_0x16e654){if(_0x5247d2[_0xc4d270(0x3e6)](_0x5247d2[_0xc4d270(0x46a)],_0x5247d2[_0xc4d270(0x6c1)])){var _0x270166=_0xcc138f[_0xc4d270(0x407)][_0xc4d270(0x17f)]('|'),_0x4fdb7e=0x708+-0x1bc5+0x14bd;while(!![]){switch(_0x270166[_0x4fdb7e++]){case'0':_0x995715[_0xc4d270(0x58d)+'aseli'+'ne']=_0xcc138f['BTOwJ'];continue;case'1':var _0x3fd863=(_0x49258c,_0x52563a)=>{var _0x44cd82=_0xc4d270;_0x107efd[_0x44cd82(0x526)+_0x44cd82(0x5b2)]=_0x52563a||_0x4f5ed5[_0x44cd82(0x638)],_0x249366['fillT'+_0x44cd82(0x4c8)](_0x49258c,_0x26d551,_0x45f91c),_0x45f91c+=-0x7f*-0x37+0x3*0x7da+-0x32c7;};continue;case'2':_0xf45aff[_0xc4d270(0x2a2)+'re']();continue;case'3':_0x7e14ca['font']=_0xc4d270(0x5b9)+_0xc4d270(0x33b)+_0xc4d270(0x4cc)+_0xc4d270(0x5ff)+_0xc4d270(0x327)+'ospac'+'e';continue;case'4':_0x336ef6[_0xc4d270(0x4e2)]();continue;case'5':_0x586a7b['textA'+'lign']=_0xc4d270(0x37f);continue;case'6':var _0x45f91c=-0xa7f*-0x3+-0x75f*-0x5+-0x442c,_0x26d551=0x828*0x4+-0xac+0x7fa*-0x4;continue;case'7':if(_0xe1f46c[_0xc4d270(0x534)])_0x3fd863(_0x1e0e43+_0xcc138f[_0xc4d270(0x5ee)]);continue;case'8':if(!_0x5366b8[_0xc4d270(0x67a)+_0xc4d270(0x5a7)])_0x3fd863(_0xc4d270(0x2b4)+_0xc4d270(0x32e)+_0xc4d270(0x15e)+'e…','rgba('+'255,1'+_0xc4d270(0x6ba)+_0xc4d270(0x558)+')');continue;case'9':_0xcc138f[_0xc4d270(0x44f)](_0x3fd863,'SAKUR'+_0xc4d270(0x127)+'R\x20v1.'+'1','#ff6b'+'9d');continue;}break;}}else{var _0x4708d8=_0x27c75a(_0xa70ba5,_0x392c4a=>{var _0x4c8f6f=_0xc4d270;if(_0xcc138f['vFADX'](_0x4c8f6f(0x309),'xCeeG'))_0x3868b9['class'+'List'][_0x4c8f6f(0x635)+'e']('on',_0x392c4a),_0x16e654(_0x392c4a);else try{_0x38464c[_0x4c8f6f(0x57b)+'ed']=![];}catch(_0x192e17){}});_0x1a46fc['appen'+'d'](_0x1a63c7,_0x4708d8);}}else _0x1a46fc[_0xc4d270(0x2b3)+_0xc4d270(0x5f9)+'d'](_0x1a63c7);_0x3868b9['appen'+_0xc4d270(0x5f9)+'d'](_0x1a46fc);if(_0x119cd5&&_0x119cd5['lengt'+'h']){var _0x43f3b5=(_0xc4d270(0x5d9)+_0xc4d270(0x29e)+_0xc4d270(0x5e6))['split']('|'),_0x53394d=0x1*-0x1ef2+-0x778*-0x5+-0x666;while(!![]){switch(_0x43f3b5[_0x53394d++]){case'0':_0x3868b9[_0xc4d270(0x2b3)+'dChil'+'d'](_0x87eba9);continue;case'1':_0x455fdd['textC'+_0xc4d270(0x3df)+'t']=_0x5f5cee;continue;case'2':for(var _0x521644 of _0x119cd5)_0x87eba9[_0xc4d270(0x2b3)+'dChil'+'d'](_0x521644);continue;case'3':_0x87eba9['appen'+_0xc4d270(0x5f9)+'d'](_0x455fdd);continue;case'4':var _0x455fdd=document['creat'+'eElem'+'ent'](_0x5247d2['bTXIl']);continue;case'5':var _0x87eba9=document['creat'+_0xc4d270(0x461)+_0xc4d270(0x1bb)](_0x5247d2['bTXIl']);continue;case'6':_0x87eba9['class'+'Name']=_0x5247d2[_0xc4d270(0x233)];continue;case'7':_0x455fdd['class'+_0xc4d270(0x6cc)]='sk-md'+_0xc4d270(0x2bc);continue;}break;}}return _0x3868b9;}var _0x4db939=[{'id':_0x362537(0x134)+'t','label':_0x362537(0x68b)+'t'},{'id':_0x5247d2[_0x362537(0x53b)],'label':'Move'},{'id':'visua'+'l','label':_0x5247d2[_0x362537(0x350)]},{'id':'misc','label':_0x362537(0x221)},{'id':_0x362537(0x68e),'label':_0x362537(0x519)+'y'}];function _0xa30ad0(){var _0x38cdee=_0x362537;if(_0xcc138f['llKqc'](_0x38cdee(0x525),_0xcc138f[_0x38cdee(0x19a)]))_0x48f1c1=_0x50e648&&_0x382888[_0x38cdee(0x69a)]?_0x39a7e7['val']():-0xf05*0x1+0x1*0x26d3+-0xb*0x22a;else{var _0x2ce825=_0x33e089['safeM'+_0x38cdee(0x639)]?_0xcc138f[_0x38cdee(0x4f2)]:_0x33e089['uwmk']?_0xcc138f[_0x38cdee(0x29a)](_0xcc138f[_0x38cdee(0x4db)](_0xcc138f['ATjnG'](_0x38cdee(0x17b)+'bound'+'\x20'+(_0x33e089[_0x38cdee(0x567)+_0x38cdee(0x354)]?_0xcc138f['ibmuv'](_0xcc138f[_0x38cdee(0x631)](_0xcc138f[_0x38cdee(0x29a)](_0x33e089[_0x38cdee(0x567)+'Ok'],'/'),_0x33e089['hooks'+_0x38cdee(0x354)]),'\x20hook'+'s'):_0xcc138f[_0x38cdee(0x16c)]),_0x38cdee(0x123)+_0x38cdee(0x665)),_0x33e089[_0x38cdee(0x67a)+_0x38cdee(0x5a7)]?_0xcc138f[_0x38cdee(0x56c)]:_0xcc138f['xuspL'])+(_0x38cdee(0x5de)+_0x38cdee(0x6c7)+'\x20'),_0x33e089['shoot'+_0x38cdee(0x6b6)]?_0xcc138f[_0x38cdee(0x20c)]:'none')+('\x20|\x20mo'+_0x38cdee(0x124)+'t\x20')+(_0x33e089[_0x38cdee(0x300)+_0x38cdee(0x4e1)]?_0x38cdee(0x63d):_0xcc138f[_0x38cdee(0x34e)]):_0xcc138f[_0x38cdee(0x606)];if(_0x33e089['lastE'+_0x38cdee(0x212)])_0x2ce825+=_0x38cdee(0x454)+'R:\x20'+_0x33e089['lastE'+'rror'];return _0x423ae8(_0x38cdee(0x2ba)+'s',_0x2ce825,_0x33e089['uwmk'],null,[_0x46e543(_0x38cdee(0x5a5)+_0x38cdee(0x1f2)+_0x38cdee(0x2e8),'calls'+_0x38cdee(0x1c5)+_0x38cdee(0x319)+'ne.Ap'+_0x38cdee(0x48c)+_0x38cdee(0x57f)+'set_t'+'arget'+'Frame'+'Rate',_0xcc138f[_0x38cdee(0x44f)](_0x150186,_0x38cdee(0x600),()=>{var _0x1ee495=_0x38cdee;try{if(_0x39d555)_0x39d555['call'](_0xcc138f['iuEvQ'],_0xcc138f[_0x1ee495(0x486)],[-0x18f7+0x23d7+0x18*-0x6a]);}catch(_0x1538b2){}}))]);}}function _0x245862(_0x4326ed){var _0x4f6713=_0x362537,_0x13eb29={'eJJml':function(_0xa0d6cc){return _0xa0d6cc();},'kgRmz':function(_0x33e82b){return _0x33e82b();},'hvubI':function(_0xa335c,_0xaffa5a,_0x59af32){return _0xa335c(_0xaffa5a,_0x59af32);},'UlwUG':_0x4f6713(0x5ba),'gKLUJ':_0x4f6713(0x44e)+'e','iGCQT':function(_0xa422ff){return _0xa422ff();},'AgVFv':function(_0x2ac823,_0x366ad2){return _0x2ac823===_0x366ad2;},'JQJeb':_0x4f6713(0x1a7),'iBlhI':'oJJNH','oKEWC':_0x4f6713(0x607)+_0x4f6713(0x238),'DUAuh':function(_0x51fa9c){return _0x51fa9c();},'NOqux':function(_0x3a73c1){return _0x3a73c1();},'jtKvm':function(_0xd04b8c){return _0xd04b8c();},'szHJh':function(_0x3cc05b,_0x23d093){return _0x3cc05b!==_0x23d093;},'argxU':_0x4f6713(0x356),'UEOXu':function(_0xd261df){var _0x1922e0=_0x4f6713;return _0xcc138f[_0x1922e0(0x38e)](_0xd261df);},'cVVbo':_0x4f6713(0x2a5),'JGdPc':'kglSP','FLvBT':_0xcc138f[_0x4f6713(0x52f)],'yuVcT':function(_0x214439,_0x570a7f){var _0x43ced1=_0x4f6713;return _0xcc138f[_0x43ced1(0x405)](_0x214439,_0x570a7f);},'mNxLD':function(_0x7cd9ea){return _0x7cd9ea();},'SKpXS':_0x4f6713(0x332)};if(_0xcc138f[_0x4f6713(0x3e1)](_0x4f6713(0x655),_0x4f6713(0x655)))_0x4daf2e[_0x4f6713(0x4c0)+'or']=_0x59ed05,_0x13eb29[_0x4f6713(0x1c2)](_0x55d9ec);else{if(_0xcc138f[_0x4f6713(0x28a)](_0x4326ed,_0x4f6713(0x134)+'t')){if(_0xcc138f['GhBDe'](_0x4f6713(0x3b5),_0x4f6713(0x1d6)))return[_0xa30ad0(),_0x423ae8(_0xcc138f[_0x4f6713(0x5f8)],'Block'+'s\x20OHe'+_0x4f6713(0x48a)+_0x4f6713(0x1db)+'ateTa'+'keHea'+_0x4f6713(0x31f)+_0x4f6713(0x6c5)+'ealth'+_0x4f6713(0x226)+'lDie,'+_0x4f6713(0x580)+_0x4f6713(0x2f7)+'g\x20can'+_0x4f6713(0x2b2)+_0x4f6713(0x55f)+_0x4f6713(0x506)+_0x4f6713(0x6d0),_0x3aead2[_0x4f6713(0x5ba)],_0x128043=>{var _0x3919b4=_0x4f6713,_0x1ed47d={'QdicA':function(_0x9d59cf){var _0x291011=_0x5c32;return _0x13eb29[_0x291011(0x1c2)](_0x9d59cf);}};_0x3919b4(0x4ca)===_0x3919b4(0x5ad)?(_0x514710['hookN'+'oReco'+'il']=_0x229ea7,_0x1ed47d[_0x3919b4(0x1ba)](_0x113a8a)):(_0x3aead2['god']=_0x128043,_0x13eb29[_0x3919b4(0x63e)](_0x18126f),_0x13eb29[_0x3919b4(0x164)](_0x334b38,_0x13eb29['UlwUG'],_0x128043),_0x334b38(_0x13eb29['gKLUJ'],_0x128043));},[]),_0xcc138f[_0x4f6713(0x3d2)](_0x423ae8,_0xcc138f[_0x4f6713(0x202)],'Skips'+_0x4f6713(0x46d)+_0x4f6713(0x371)+_0x4f6713(0x6ae)+_0x4f6713(0x4ab)+_0x4f6713(0x55b)+_0x4f6713(0x51f)+_0x4f6713(0x189)+'rings'+'\x20neve'+_0x4f6713(0x2ab)+'ance.',_0x3aead2[_0x4f6713(0x607)+'oil'],_0x46e256=>{var _0xa3aa5e=_0x4f6713,_0x51d9d7={'IpreE':function(_0xf781b8){var _0x1dfae3=_0x5c32;return _0x13eb29[_0x1dfae3(0x507)](_0xf781b8);}};_0x13eb29['AgVFv'](_0x13eb29[_0xa3aa5e(0x239)],_0x13eb29[_0xa3aa5e(0x2a9)])?(_0x463e4e[_0xa3aa5e(0x575)+'Pct']=_0x327e45,_0x51d9d7[_0xa3aa5e(0x2d3)](_0x15f80a)):(_0x3aead2['noRec'+'oil']=_0x46e256,_0x18126f(),_0x334b38(_0x13eb29['oKEWC'],_0x46e256));},[]),_0x423ae8(_0xcc138f[_0x4f6713(0x30c)],_0x4f6713(0x132)+_0x4f6713(0x1b3)+_0x4f6713(0x16d)+'nd\x20ma'+'xes\x20a'+_0x4f6713(0x553)+_0x4f6713(0x22a)+'\x20your'+_0x4f6713(0x380)+_0x4f6713(0x470)+'ery\x202'+_0x4f6713(0x331),_0x3aead2['noSpr'+_0x4f6713(0x59b)],_0x31ef55=>{var _0x126c63=_0x4f6713;_0x3aead2['noSpr'+_0x126c63(0x59b)]=_0x31ef55,_0x13eb29[_0x126c63(0x4b2)](_0x18126f);},[]),_0x423ae8('Rapid'+_0x4f6713(0x35c)+_0x4f6713(0x44d)+']',_0xcc138f[_0x4f6713(0x6a3)],_0x3aead2['rapid'+_0x4f6713(0x54b)],_0x35f17d=>{var _0x450530=_0x4f6713;_0x3aead2['rapid'+_0x450530(0x54b)]=_0x35f17d,_0x18126f();},[]),_0xcc138f[_0x4f6713(0x4df)](_0x423ae8,_0xcc138f[_0x4f6713(0x43e)],'Overw'+_0x4f6713(0x1b6)+_0x4f6713(0x2fe)+'tideW'+'eapon'+'\x20dama'+'ge.\x20B'+_0x4f6713(0x549)+'le\x20if'+'\x20the\x20'+'serve'+'r\x20val'+_0x4f6713(0x5b0)+'s.',_0x3aead2[_0x4f6713(0x231)+_0x4f6713(0x61e)],_0x38e328=>{var _0x115ffc=_0x4f6713,_0x58dc53={'XYDfc':_0x115ffc(0x610)+_0x115ffc(0x55e)+_0x115ffc(0x175)+_0x115ffc(0x59e)+_0x115ffc(0x449)+_0x115ffc(0x61d)+_0x115ffc(0x66f)+_0x115ffc(0x66d)+_0x115ffc(0x15a)+_0x115ffc(0x488)+')','MFNTR':function(_0x1b8fac,_0xa223c6){return _0x1b8fac+_0xa223c6;},'TqsVf':function(_0x5e6a00,_0x4dea01){var _0x5c8883=_0x115ffc;return _0xcc138f[_0x5c8883(0x170)](_0x5e6a00,_0x4dea01);},'hypoD':function(_0x1f6b7c,_0x3cec9d){return _0xcc138f['TPFHO'](_0x1f6b7c,_0x3cec9d);},'mmrxn':function(_0x183e4d,_0x14a918){return _0x183e4d+_0x14a918;},'ngkyL':_0x115ffc(0x318)+'s','HHStD':_0xcc138f[_0x115ffc(0x2bf)],'peEuT':'\x20|\x20sh'+_0x115ffc(0x6c7)+'\x20','tkhQu':_0x115ffc(0x6a8)+_0x115ffc(0x124)+'t\x20','nBnOJ':_0xcc138f[_0x115ffc(0x20c)],'hfkbH':_0x115ffc(0x17b)+'MISSI'+_0x115ffc(0x2f1)+_0x115ffc(0x566)+'ay\x20on'+_0x115ffc(0x50b)+'einst'+_0x115ffc(0x209)+_0x115ffc(0x505)+'erscr'+_0x115ffc(0x4a3)};_0xcc138f[_0x115ffc(0x67b)](_0xcc138f[_0x115ffc(0x585)],_0xcc138f[_0x115ffc(0x585)])?_0x1fa600[_0x115ffc(0x2b5)+'onten'+'t']=_0x19c465['safeM'+'ode']?_0x58dc53['XYDfc']:_0x2b6319[_0x115ffc(0x4bf)]?_0x58dc53['MFNTR'](_0x58dc53[_0x115ffc(0x5d5)](_0x58dc53[_0x115ffc(0x4c1)](_0x58dc53['hypoD'](_0x58dc53[_0x115ffc(0x4ad)]('UWMK\x20'+_0x115ffc(0x17e)+'\x20',_0x900530[_0x115ffc(0x567)+_0x115ffc(0x354)]?_0x58dc53['TqsVf'](_0x58dc53[_0x115ffc(0x5d5)](_0x2c3a67[_0x115ffc(0x567)+'Ok'],'/'),_0x4821e1[_0x115ffc(0x567)+_0x115ffc(0x354)])+_0x58dc53[_0x115ffc(0x433)]:_0x115ffc(0x1e8)+_0x115ffc(0x5bb)+_0x115ffc(0x112)+'all\x20o'+_0x115ffc(0x377))+_0x58dc53[_0x115ffc(0x4af)],_0x375870['gameL'+_0x115ffc(0x5a7)]?_0x115ffc(0x5fa)+'d':_0x115ffc(0x531)+'ng'),_0x58dc53[_0x115ffc(0x3cd)]),_0x2ba66b[_0x115ffc(0x368)+_0x115ffc(0x6b6)]?_0x115ffc(0x63d):_0x115ffc(0x3be))+_0x58dc53['tkhQu']+(_0x5653cb[_0x115ffc(0x300)+_0x115ffc(0x4e1)]?_0x58dc53[_0x115ffc(0x6e0)]:'none'),_0x5bb49c['lastE'+_0x115ffc(0x212)]?'\x20|\x20ER'+_0x115ffc(0x2f8)+_0x33d139['lastE'+_0x115ffc(0x212)]:''):_0x58dc53[_0x115ffc(0x3af)]:(_0x3aead2[_0x115ffc(0x231)+'eExp']=_0x38e328,_0x18126f());},[_0xcc138f[_0x4f6713(0x370)](_0x46e543,_0x4f6713(0x223)+_0x4f6713(0x592)+'ue',null,_0x3910a3(_0x3aead2['damag'+'eValu'+'e'],0x25ed+-0xef8*0x1+-0x16eb,0x1f11+-0x49*-0x4f+-0x33a4,0x30c+0x67f*-0x1+-0x3*-0x128,_0x54c062=>{_0x3aead2['damag'+'eValu'+'e']=_0x54c062,_0x18126f();}))]),_0x423ae8(_0xcc138f['mnONA'],_0x4f6713(0x5fc)+_0x4f6713(0x3c4)+_0x4f6713(0x6ac)+'pon\x27s'+'\x20cach'+_0x4f6713(0x262)+_0x4f6713(0x5bc)+_0x4f6713(0x5ef)+_0x4f6713(0x249)+'\x20200m'+'s.',_0x3aead2['infAm'+_0x4f6713(0x1cd)],_0x312948=>{var _0x5ec02d=_0x4f6713;_0xcc138f[_0x5ec02d(0x3a5)]==='ZeJiu'?_0x415592[_0x5ec02d(0x57b)+'ed']=![]:(_0x3aead2[_0x5ec02d(0x3e3)+_0x5ec02d(0x1cd)]=_0x312948,_0x18126f());},[_0x1d0c4e(_0x4f6713(0x660)+'loads'+_0x4f6713(0x200)+'l\x20dra'+'in,\x20t'+'he\x20de'+_0x4f6713(0x495)+_0x4f6713(0x612)+'ppens'+_0x4f6713(0x1dc)+_0x4f6713(0x4e0)+'.')])];else try{var _0x3e8089=(_0x4f6713(0x644)+'|1|4')['split']('|'),_0xffc787=-0xda1+-0x22*-0x85+-0x409;while(!![]){switch(_0x3e8089[_0xffc787++]){case'0':_0x2ae188[_0x2ec800]=_0x4dbf32;continue;case'1':_0x19271d[_0x4f6713(0x567)+_0x4f6713(0x354)]++;continue;case'2':var _0x4dbf32=_0x1a8af8['hookP'+_0x4f6713(0x6af)]({'typeName':_0x4fa55c,'methodName':_0x139f42,'params':_0x45beb8,'returnType':_0x224b01},_0x196261);continue;case'3':_0x4dbf32[_0x4f6713(0x57b)+'ed']=_0xcc138f[_0x4f6713(0x386)](_0x1bcce7,![]);continue;case'4':return _0x4dbf32;}break;}}catch(_0x5aca0a){return _0xea42c4['warn'](_0x4f6713(0x140)+_0x4f6713(0x615)+_0x4f6713(0x463)+_0x4f6713(0x640)+'eg\x20fa'+_0x4f6713(0x11a),_0x5746d0,_0x5aca0a&&_0x5aca0a['messa'+'ge']),null;}}if(_0xcc138f['iQHir'](_0x4326ed,_0x4f6713(0x64d)))return[_0x423ae8(_0x4f6713(0x390),_0xcc138f[_0x4f6713(0x2f2)],_0x3aead2['speed'+_0x4f6713(0x4ff)]!==0x2228*-0x1+-0x116*0x1b+-0x663*-0xa,null,[_0x46e543(_0xcc138f[_0x4f6713(0x551)],_0xcc138f[_0x4f6713(0x1d4)],_0x3910a3(_0x3aead2['speed'+'Pct'],0x3b*-0x40+-0x47*-0x11+0x9*0x123,0x1*-0x1dd6+0x6*0x62f+-0x14*0x4e,0xb07*0x2+0x172b+-0x2d34,_0x268fb9=>{var _0x4ec752=_0x4f6713;_0x3aead2[_0x4ec752(0x575)+'Pct']=_0x268fb9,_0xcc138f['pDqVL'](_0x18126f);}))]),_0x423ae8(_0x4f6713(0x36d)+_0x4f6713(0x3d7)+_0x4f6713(0x401),'Scale'+_0x4f6713(0x284)+'ement'+_0x4f6713(0x369)+_0x4f6713(0x62a)+_0x4f6713(0x34a)+'both\x20'+'gravi'+_0x4f6713(0x342)+_0x4f6713(0x1ae),_0xcc138f['GhBDe'](_0x3aead2['jumpP'+'ct'],0x1b05+0xf9e*0x1+-0x23*0x135)||_0x3aead2[_0x4f6713(0x598)+_0x4f6713(0x6bf)]!==0xc47+-0x2fb*-0x2+-0x11d9*0x1,null,[_0x46e543(_0xcc138f[_0x4f6713(0x5da)],null,_0xcc138f[_0x4f6713(0x3d2)](_0x3910a3,_0x3aead2[_0x4f6713(0x544)+'ct'],0x4*-0x847+-0x4*0x2a5+0x2be2,0x113a+0x1748+-0x2756,-0x60*0x48+0x445*-0x3+0x27d4,_0x54bf1b=>{_0x3aead2['jumpP'+'ct']=_0x54bf1b,_0x18126f();})),_0xcc138f[_0x4f6713(0x370)](_0x46e543,'Gravi'+'ty\x20%',_0x4f6713(0x51e)+_0x4f6713(0x218)+_0x4f6713(0x135),_0xcc138f[_0x4f6713(0x62b)](_0x3910a3,_0x3aead2[_0x4f6713(0x598)+_0x4f6713(0x6bf)],0x5a*0x57+0x20e*-0xb+-0x2*0x3f9,-0x17d*0x1+0x9d7+-0x792,0x49*0x1+-0x1be4+0x1ba0,_0x1f4f57=>{var _0x19f60e=_0x4f6713;_0x3aead2[_0x19f60e(0x598)+_0x19f60e(0x6bf)]=_0x1f4f57,_0x18126f();}))]),_0xcc138f['HccIN'](_0x423ae8,_0xcc138f[_0x4f6713(0x63a)],_0xcc138f['LatnJ'],_0x3aead2[_0x4f6713(0x649)],_0x14cb85=>{var _0xa30fe7=_0x4f6713;_0x3aead2[_0xa30fe7(0x649)]=_0x14cb85,_0x18126f();},[])];if(_0xcc138f[_0x4f6713(0x28a)](_0x4326ed,_0x4f6713(0x5bf)+'l'))return[_0x423ae8(_0x4f6713(0x329)+'rokes',_0xcc138f[_0x4f6713(0x1a6)],_0x3aead2[_0x4f6713(0x3e7)+_0x4f6713(0x446)],_0x32b9fe=>{_0x3aead2['keyst'+'rokes']=_0x32b9fe,_0xcc138f['oxRSH'](_0x18126f);},[_0x46e543(_0xcc138f[_0x4f6713(0x418)],null,_0x7c0391(_0x3aead2[_0x4f6713(0x62f)],[['bl',_0xcc138f[_0x4f6713(0x12a)]],['br','Botto'+_0x4f6713(0x6ad)+'ht'],['ml',_0x4f6713(0x2e0)+_0x4f6713(0x6bd)+'e']],_0x14014b=>{var _0x27dfde=_0x4f6713;'JviFA'!==_0xcc138f['lnDqE']?(_0x3aead2['ksPos']=_0x14014b,_0x18126f()):(_0x2f8410['hookG'+'od']=_0x41f1aa,_0x13eb29[_0x27dfde(0x23d)](_0x3f2231));})),_0x46e543(_0x4f6713(0x43c),null,_0x3910a3(_0x3aead2['ksSca'+'le'],0x7*-0x515+0x145*-0x3+0x2762+0.6,0x2*-0xee4+0x1ce7+0xe2*0x1+0.6000000000000001,0x905*-0x4+0x26df+-0x2cb+0.05,_0x330987=>{var _0x5aa627=_0x4f6713,_0xf1c074={'jwirT':_0x5aa627(0x69b)+'t'};_0x5aa627(0x5ac)===_0x5aa627(0x4fc)?_0x2bcfdc['code']===_0xf1c074[_0x5aa627(0x6ca)]&&(_0x516f4c[_0x5aa627(0x1bd)+_0x5aa627(0x225)+'ault'](),_0x121665()):(_0x3aead2['ksSca'+'le']=_0x330987,_0x13eb29[_0x5aa627(0x1dd)](_0x18126f));})),_0x46e543(_0xcc138f[_0x4f6713(0x270)],null,_0x27c75a(_0x3aead2['ksCps'],_0x598c36=>{var _0x29a0de=_0x4f6713;_0x3aead2[_0x29a0de(0x626)]=_0x598c36,_0xcc138f[_0x29a0de(0x1d8)](_0x18126f);}))]),_0x423ae8(_0xcc138f[_0x4f6713(0x2e1)],_0x4f6713(0x208)+'m\x20cen'+_0x4f6713(0x160)+'rossh'+_0x4f6713(0x69d),_0x3aead2['cross'+_0x4f6713(0x11c)],_0x53f727=>{var _0xf08ac2=_0x4f6713;_0x3aead2[_0xf08ac2(0x1fb)+'hair']=_0x53f727,_0x18126f();},[_0x46e543(_0xcc138f[_0x4f6713(0x698)],null,_0x3910a3(_0x3aead2['chSiz'+'e'],0x1d2b+0x2247+-0xa93*0x6+0.5,-0xd86*-0x2+-0x117b+-0x98f*0x1+0.5,0x1*0x1333+-0x14e9+0x1b6+0.1,_0x417bdd=>{var _0x40c9e3=_0x4f6713;_0x3aead2[_0x40c9e3(0x56d)+'e']=_0x417bdd,_0x18126f();})),_0x46e543(_0x4f6713(0x1c0),null,_0xcc138f['SQkch'](_0x8404ac,_0x3aead2[_0x4f6713(0x4c0)+'or'],_0x58aae5=>{var _0x31a3ce=_0x4f6713;_0x13eb29[_0x31a3ce(0x13a)]('oMCoI',_0x13eb29[_0x31a3ce(0x4d6)])?(_0x3aead2[_0x31a3ce(0x4c0)+'or']=_0x58aae5,_0x13eb29['UEOXu'](_0x18126f)):(_0x1f686a['chSiz'+'e']=_0x178506,_0x48b503());}))]),_0x423ae8('Count'+'ers',_0xcc138f['vxfMg'],_0x3aead2['fps'],null,[_0x46e543(_0xcc138f[_0x4f6713(0x171)],null,_0x27c75a(_0x3aead2[_0x4f6713(0x534)],_0x19cffb=>{var _0x2a08fd=_0x4f6713;_0x3aead2[_0x2a08fd(0x534)]=_0x19cffb,_0x18126f();})),_0xcc138f[_0x4f6713(0x3ff)](_0x1d0c4e,_0xcc138f[_0x4f6713(0x5c4)])])];if(_0x4326ed===_0x4f6713(0x20e))return[_0x423ae8(_0x4f6713(0x3d4)+'ck',_0xcc138f['tECiL'],_0x3aead2['adblo'+'ck'],_0x529aae=>{var _0x4cf773=_0x4f6713;_0x13eb29['szHJh'](_0x13eb29[_0x4cf773(0x51c)],_0x13eb29[_0x4cf773(0x3cf)])?(_0x3aead2[_0x4cf773(0x522)+'ck']=_0x529aae,_0x18126f()):_0x530f20[_0x4cf773(0x491)+'em']('sakur'+'a.kou'+_0x4cf773(0x4fa)+'v1',_0x4e7a42['strin'+_0x4cf773(0x19f)](_0x2d360d));},[_0xcc138f[_0x4f6713(0x297)](_0x1d0c4e,_0xcc138f[_0x4f6713(0x672)])])];return[_0xcc138f[_0x4f6713(0x3d2)](_0x423ae8,'Safe\x20'+_0x4f6713(0x217)+_0x4f6713(0x254)+_0x4f6713(0x450)+_0x4f6713(0x504),'Skips'+_0x4f6713(0x4bc)+'\x20enti'+'rely\x20'+_0x4f6713(0x18d)+_0x4f6713(0x425)+'hooks'+_0x4f6713(0x5dc)+_0x4f6713(0x65d)+_0x4f6713(0x396)+'atche'+_0x4f6713(0x3c3)+'\x27t\x20st'+_0x4f6713(0x67c),_0x3aead2[_0x4f6713(0x44b)+'ode'],_0x161ead=>{var _0x46a6d1=_0x4f6713;_0x3aead2[_0x46a6d1(0x44b)+'ode']=_0x161ead,_0x18126f(),location[_0x46a6d1(0x149)+'d']();},[_0xcc138f[_0x4f6713(0x6c0)](_0x1d0c4e,'Appli'+'es\x20on'+_0x4f6713(0x154)+_0x4f6713(0x2e4)+_0x4f6713(0x37e)+_0x4f6713(0x683)+_0x4f6713(0x650)+'in\x20sa'+'fe\x20mo'+_0x4f6713(0x3ea)+_0x4f6713(0x1cc)+'eeze\x20'+'is\x20ho'+_0x4f6713(0x317)+_0x4f6713(0x1b2)+'\x20—\x20te'+'ll\x20me'+_0x4f6713(0x44a)+'hooks'+'-appl'+'ied\x20c'+_0x4f6713(0x3f2))]),_0x423ae8('Hook\x20'+_0x4f6713(0x4c5)+'switc'+'hes','Each\x20'+'one\x20i'+_0x4f6713(0x184)+_0x4f6713(0x54f)+_0x4f6713(0x425)+_0x4f6713(0x147)+'oline'+'\x20for\x20'+'the\x20w'+'hole\x20'+'page\x20'+'load.'+'\x20ALL\x20'+'OFF\x20b'+_0x4f6713(0x452)+'ault\x20'+_0x4f6713(0x563)+'ignat'+_0x4f6713(0x15c)+'hat\x20d'+'oes\x20n'+_0x4f6713(0x2b7)+_0x4f6713(0x4b8)+_0x4f6713(0x501)+_0x4f6713(0x11e)+'thod\x20'+_0x4f6713(0x5a4)+_0x4f6713(0x251)+'nctio'+_0x4f6713(0x699)+_0x4f6713(0x161)+_0x4f6713(0x465)+'match'+'\x27\x20the'+_0x4f6713(0x316)+'nt\x20it'+'\x20is\x20c'+'alled'+_0x4f6713(0x1c1)+'n\x20the'+_0x4f6713(0x469)+_0x4f6713(0x4a8)+'t\x20a\x20t'+'ime,\x20'+_0x4f6713(0x149)+'d,\x20an'+'d\x20see'+_0x4f6713(0x33f)+_0x4f6713(0x34d)+'\x20your'+_0x4f6713(0x5f3)+'d\x20cho'+_0x4f6713(0x3b9)+'n.',_0x3aead2[_0x4f6713(0x5a9)+'od']||_0x3aead2[_0x4f6713(0x5a9)+_0x4f6713(0x352)]||_0x3aead2['hookN'+_0x4f6713(0x290)+'il']||_0x3aead2['hookC'+_0x4f6713(0x429)+'e'],_0x8ac5b4=>{var _0x2d49a4=_0x4f6713,_0x5a4bcd={'VezPG':_0x13eb29[_0x2d49a4(0x224)]};if(_0x13eb29['yuVcT']('ueXud','KzRhH')){var _0x506e4f=_0x243d40[_0x2d49a4(0x16f)+_0x2d49a4(0x461)+_0x2d49a4(0x1bb)](_0x5a4bcd[_0x2d49a4(0x16a)]);_0x506e4f['class'+_0x2d49a4(0x6cc)]=_0x2d49a4(0x4f0)+_0x2d49a4(0x646);var _0x4169c8=_0x11bb3d['creat'+'eElem'+_0x2d49a4(0x1bb)](_0x5a4bcd[_0x2d49a4(0x16a)]);_0x4169c8['class'+_0x2d49a4(0x6cc)]='sk-md'+_0x2d49a4(0x2bc),_0x4169c8[_0x2d49a4(0x2b5)+'onten'+'t']=_0xf9aaeb,_0x506e4f[_0x2d49a4(0x2b3)+_0x2d49a4(0x5f9)+'d'](_0x4169c8);for(var _0x23a791 of _0x122099)_0x506e4f[_0x2d49a4(0x2b3)+_0x2d49a4(0x5f9)+'d'](_0x23a791);_0x201038[_0x2d49a4(0x2b3)+'dChil'+'d'](_0x506e4f);}else{var _0x427857=(_0x2d49a4(0x3a3)+'|2|5|'+'3')[_0x2d49a4(0x17f)]('|'),_0x2bfdc7=0x11ee+0x1998+-0x2b86;while(!![]){switch(_0x427857[_0x2bfdc7++]){case'0':_0x3aead2[_0x2d49a4(0x3ba)+_0x2d49a4(0x290)+'il']=_0x8ac5b4;continue;case'1':_0x3aead2[_0x2d49a4(0x5a9)+'odDie']=_0x8ac5b4;continue;case'2':_0x3aead2[_0x2d49a4(0x2a8)+_0x2d49a4(0x429)+'e']=_0x8ac5b4;continue;case'3':location[_0x2d49a4(0x149)+'d']();continue;case'4':_0x3aead2['hookG'+'od']=_0x8ac5b4;continue;case'5':_0x13eb29['mNxLD'](_0x18126f);continue;}break;}}},[_0x1d0c4e('Appli'+_0x4f6713(0x6ab)+'\x20relo'+_0x4f6713(0x15b)),_0xcc138f['omlkv'](_0x46e543,_0xcc138f[_0x4f6713(0x6a6)],null,_0x27c75a(_0x3aead2[_0x4f6713(0x5a9)+'od'],_0x2a7c64=>{var _0x4efd9e=_0x4f6713;_0x3aead2[_0x4efd9e(0x5a9)+'od']=_0x2a7c64,_0xcc138f['WMMuC'](_0x18126f);})),_0xcc138f['TocPs'](_0x46e543,_0x4f6713(0x44e)+'e\x20(OH'+_0x4f6713(0x1fc)+'.Loca'+_0x4f6713(0x60c),null,_0x27c75a(_0x3aead2[_0x4f6713(0x5a9)+_0x4f6713(0x352)],_0x6e8603=>{var _0x4c56d9=_0x4f6713;if(_0x13eb29[_0x4c56d9(0x49b)]!==_0x4c56d9(0x662))_0x3aead2[_0x4c56d9(0x5a9)+_0x4c56d9(0x352)]=_0x6e8603,_0x18126f();else try{var _0x3bc390=('2|4|0'+'|1|3')['split']('|'),_0x3da063=0xe9*-0x7+-0x2*0x11c5+0x29e9;while(!![]){switch(_0x3bc390[_0x3da063++]){case'0':_0x14f203[_0x24390e]=_0x246f09;continue;case'1':_0x25a6cf[_0x4c56d9(0x567)+'Total']++;continue;case'2':var _0x246f09=_0x2054a6['hookP'+_0x4c56d9(0x1f4)+'x']({'typeName':_0x2d8bc3,'methodName':_0x1de855,'params':_0x371d8b,'returnType':_0xaddf6a},_0x552da3);continue;case'3':return _0x246f09;case'4':_0x246f09[_0x4c56d9(0x57b)+'ed']=_0x145e50!==![];continue;}break;}}catch(_0x44be64){return _0x265d2f[_0x4c56d9(0x4cf)]('[saku'+_0x4c56d9(0x615)+'ur]\x20h'+_0x4c56d9(0x640)+'eg\x20fa'+'iled:',_0x17423d,_0x44be64&&_0x44be64['messa'+'ge']),null;}})),_0x46e543(_0xcc138f['hQdXT'],null,_0x27c75a(_0x3aead2[_0x4f6713(0x3ba)+_0x4f6713(0x290)+'il'],_0x219a7f=>{var _0x26a07f=_0x4f6713;_0xcc138f[_0x26a07f(0x594)]('bHIyG',_0xcc138f[_0x26a07f(0x437)])?(_0x3aead2[_0x26a07f(0x3ba)+_0x26a07f(0x290)+'il']=_0x219a7f,_0xcc138f['WMMuC'](_0x18126f)):(_0x2c9439[_0x26a07f(0x5a9)+_0x26a07f(0x352)]=_0x1c4484,_0x3358aa());})),_0xcc138f['bexfN'](_0x46e543,_0x4f6713(0x622)+_0x4f6713(0x1d1)+_0x4f6713(0x63b)+_0x4f6713(0x535)+_0x4f6713(0x1f1)+_0x4f6713(0x42e)+_0x4f6713(0x3dd)+'d)','no\x20ch'+_0x4f6713(0x60a)+'work\x20'+'witho'+_0x4f6713(0x589)+'is',_0xcc138f[_0x4f6713(0x608)](_0x27c75a,_0x3aead2['hookC'+_0x4f6713(0x429)+'e'],_0x5a7ee1=>{var _0x456bd7=_0x4f6713;_0x3aead2[_0x456bd7(0x2a8)+_0x456bd7(0x429)+'e']=_0x5a7ee1,_0x18126f();}))]),_0xcc138f[_0x4f6713(0x5e5)](_0x423ae8,'ACTk\x20'+_0x4f6713(0x22c)+'r',_0xcc138f[_0x4f6713(0x58c)],_0x3aead2[_0x4f6713(0x3d9)+_0x4f6713(0x693)],_0x585060=>{var _0x3b987e=_0x4f6713;_0x3aead2[_0x3b987e(0x3d9)+'ill']=_0x585060,_0x13eb29[_0x3b987e(0x516)](_0x18126f);},[_0x1d0c4e(_0xcc138f[_0x4f6713(0x546)],!![])]),_0xcc138f['dINAl'](_0x423ae8,_0xcc138f['MhGaY'],_0x4f6713(0x22f)+_0x4f6713(0x459)+_0x4f6713(0x40d)+'ver-v'+_0x4f6713(0x42b)+_0x4f6713(0x1e5)+_0x4f6713(0x5be),!![],null,[_0x46e543(_0xcc138f[_0x4f6713(0x57c)],null,_0xcc138f['GNoRB'](_0x150186,_0x4f6713(0x169),()=>{var _0x202a11=_0x4f6713;_0x3aead2={..._0x1293c2},_0x18126f(),location[_0x202a11(0x149)+'d']();}))])];}}var _0x21533a=null;function _0x583297(_0x154b3e){var _0x177204=_0x362537,_0xc658fc={'SpyAL':function(_0x2fe9db,_0x2f946f){var _0x593107=_0x5c32;return _0xcc138f[_0x593107(0x1ef)](_0x2fe9db,_0x2f946f);},'spCXa':_0xcc138f[_0x177204(0x64a)],'WssIc':function(_0x482d26,_0x443f72){return _0x482d26(_0x443f72);}};if(_0xcc138f['ldfkp']===_0x177204(0x3f8)){_0x25f72f=_0x154b3e;if(!_0x21533a){if(_0x177204(0x4f5)===_0x177204(0x4f5)){var _0x20eaf5=document[_0x177204(0x16f)+_0x177204(0x461)+'ent'](_0xcc138f['yBZst']);_0x20eaf5['textC'+_0x177204(0x3df)+'t']=_0x143be4,_0x2a2176['appen'+'dChil'+'d'](_0x20eaf5),_0x21533a=_0x18ebee(),_0x2a2176['appen'+'dChil'+'d'](_0x21533a),requestAnimationFrame(()=>_0x21533a[_0x177204(0x234)+_0x177204(0x115)][_0x177204(0x2ea)](_0x177204(0x1aa)));}else _0x50cf63['bhop']=_0x3fe479,_0x4279de();}_0x21533a[_0x177204(0x234)+_0x177204(0x115)][_0x177204(0x635)+'e']('shown',_0x154b3e);}else{_0x328214['stopP'+_0x177204(0x4d2)+_0x177204(0x310)]();var _0x5b2c6c=_0xc658fc['SpyAL'](_0x232158['getAt'+'tribu'+'te'](_0x177204(0x133)+_0x177204(0x214)+'ed'),'true');_0x1f0a26[_0x177204(0x18e)+_0x177204(0x58a)+'te'](_0xc658fc[_0x177204(0x2ec)],_0xc658fc['WssIc'](_0x29d007,_0x5b2c6c)),_0xc658fc[_0x177204(0x1a4)](_0x5b6f0d,_0x5b2c6c);}}function _0x898331(){var _0x303372=_0x362537;if(_0xcc138f['dVTTk'](_0xcc138f[_0x303372(0x3b8)],_0xcc138f['EJWKk'])){var _0x24d2e1=_0x4b7f8a['creat'+'eElem'+_0x303372(0x1bb)](_0x303372(0x240));_0x24d2e1[_0x303372(0x234)+_0x303372(0x6cc)]=_0x303372(0x532)+'nt',_0x24d2e1[_0x303372(0x2b5)+'onten'+'t']=_0x43e413,_0x227abd['appen'+_0x303372(0x5f9)+'d'](_0x24d2e1);}else _0x583297(!_0x25f72f);}function _0x18ebee(){var _0x38eafb=_0x362537,_0x56b7eb={'KxZvI':_0x38eafb(0x35b),'LTyod':function(_0x1619eb,_0x25cde7){return _0x1619eb!==_0x25cde7;},'aSTFq':function(_0x56fff2,_0x5ed5b5){return _0x56fff2===_0x5ed5b5;},'MsFPH':_0xcc138f['ajbhB'],'QHUAD':function(_0x13fd85,_0x4ab135){return _0x13fd85+_0x4ab135;},'xvOQZ':function(_0x253db7,_0x993aab){return _0x253db7+_0x993aab;},'jbjDA':function(_0x474489,_0x2a3e58){return _0x474489+_0x2a3e58;},'SMhUJ':'UWMK\x20'+'bound'+'\x20','HHSvt':_0xcc138f[_0x38eafb(0x689)],'pDefE':_0x38eafb(0x5fa)+'d','ApvgX':_0xcc138f[_0x38eafb(0x428)],'LELMZ':_0x38eafb(0x5de)+_0x38eafb(0x6c7)+'\x20','remWj':_0xcc138f[_0x38eafb(0x20c)],'ijvaF':_0x38eafb(0x3be),'OiEos':'\x20|\x20ER'+'R:\x20','tEVxF':'UWMK\x20'+_0x38eafb(0x1ee)+_0x38eafb(0x2f1)+_0x38eafb(0x566)+_0x38eafb(0x30b)+_0x38eafb(0x50b)+_0x38eafb(0x138)+_0x38eafb(0x209)+_0x38eafb(0x505)+_0x38eafb(0x2c6)+'ipt)'},_0x3c58e7=document['creat'+'eElem'+_0x38eafb(0x1bb)](_0x38eafb(0x596));_0x3c58e7['class'+_0x38eafb(0x6cc)]=_0x38eafb(0x301)+_0x38eafb(0x295);var _0x283479=document[_0x38eafb(0x16f)+_0x38eafb(0x461)+_0x38eafb(0x1bb)](_0xcc138f[_0x38eafb(0x3ed)]);_0x283479[_0x38eafb(0x234)+_0x38eafb(0x6cc)]='mn-si'+'de';var _0x425025=document[_0x38eafb(0x16f)+_0x38eafb(0x461)+_0x38eafb(0x1bb)](_0xcc138f[_0x38eafb(0x52f)]);_0x425025[_0x38eafb(0x234)+'Name']='mn-lo'+'go',_0x425025[_0x38eafb(0x5ca)+'HTML']=_0xcc138f['fjGJe'],_0x283479[_0x38eafb(0x2b3)+'dChil'+'d'](_0x425025);var _0x47837c=document[_0x38eafb(0x16f)+'eElem'+'ent'](_0x38eafb(0x596));_0x47837c['class'+'Name']='mn-ma'+'in';var _0x561488=document[_0x38eafb(0x16f)+_0x38eafb(0x461)+_0x38eafb(0x1bb)](_0x38eafb(0x392)+'r');_0x561488['class'+'Name']='mn-to'+'p';var _0x303512=document['creat'+_0x38eafb(0x461)+'ent'](_0xcc138f[_0x38eafb(0x52f)]);_0x303512[_0x38eafb(0x234)+_0x38eafb(0x6cc)]=_0xcc138f['QEDvJ'];var _0x56e8c8=document[_0x38eafb(0x16f)+_0x38eafb(0x461)+'ent']('h2');_0x56e8c8['class'+_0x38eafb(0x6cc)]=_0x38eafb(0x5a8),_0x56e8c8[_0x38eafb(0x2b5)+_0x38eafb(0x3df)+'t']='Sakur'+'a\x20Kou'+'r';var _0x146dc2=document[_0x38eafb(0x16f)+'eElem'+'ent'](_0x38eafb(0x240));_0x146dc2['class'+'Name']=_0xcc138f['Sgrcs'],_0x146dc2['textC'+'onten'+'t']=_0x38eafb(0x6a2)+_0x38eafb(0x5a2)+_0x38eafb(0x5f2)+_0x38eafb(0x152),_0x303512['appen'+'d'](_0x56e8c8,_0x146dc2);var _0x5d965a=document[_0x38eafb(0x16f)+_0x38eafb(0x461)+_0x38eafb(0x1bb)](_0x38eafb(0x3ce)+'n');_0x5d965a[_0x38eafb(0x23a)]=_0xcc138f[_0x38eafb(0x61b)],_0x5d965a[_0x38eafb(0x234)+_0x38eafb(0x6cc)]=_0xcc138f[_0x38eafb(0x561)],_0x5d965a['title']=_0x38eafb(0x1f8),_0x5d965a['inner'+'HTML']=_0xcc138f[_0x38eafb(0x3fe)],_0x5d965a[_0x38eafb(0x54d)+'ck']=()=>_0x583297(![]),_0x561488[_0x38eafb(0x2b3)+'d'](_0x303512,_0x5d965a);var _0x3c2db9=document[_0x38eafb(0x16f)+'eElem'+_0x38eafb(0x1bb)]('div');_0x3c2db9[_0x38eafb(0x234)+'Name']=_0x38eafb(0x586)+'ls',_0x47837c['appen'+'d'](_0x561488,_0x3c2db9),_0x3c58e7[_0x38eafb(0x2b3)+'d'](_0x283479,_0x47837c);var _0x1bf454=new Map();for(var _0x46d629 of _0x4db939){if(_0x38eafb(0x4f4)===_0xcc138f['UVCHm']){var _0x289aa7=document['creat'+'eElem'+'ent']('butto'+'n');_0x289aa7['type']='butto'+'n',_0x289aa7['class'+'Name']='mn-ta'+'b',_0x289aa7[_0x38eafb(0x579)]=_0x46d629['label'],_0x289aa7[_0x38eafb(0x5ca)+_0x38eafb(0x4c6)]=_0xcc138f['ekIDh'](_0x38eafb(0x1b0)+'l>',_0x46d629['label'])+('</sma'+'ll>'),_0x289aa7[_0x38eafb(0x54d)+'ck']=(_0x40180b=>()=>_0x495c3b(_0x40180b))(_0x46d629['id']),_0x1bf454['set'](_0x46d629['id'],_0x289aa7),_0x283479['appen'+_0x38eafb(0x5f9)+'d'](_0x289aa7);}else{var _0x8c5fa8=new _0x497ea7(_0x45eccb)[_0x38eafb(0x2a4)+_0x38eafb(0x1a5)](_0x1cbc7c,_0x56b7eb['KxZvI']);return _0x8c5fa8?_0x8c5fa8[_0x38eafb(0x69a)]():0x124b+0xb*-0x15b+-0x362*0x1;}}function _0x495c3b(_0x2138a5){var _0x12ea32=_0x38eafb;_0xbb1df0[_0x12ea32(0x62d)]=_0x2138a5,_0x291ce8();var _0x38c6fe=_0x4db939[_0x12ea32(0x168)](_0x125ef8=>_0x125ef8['id']===_0x2138a5)||_0x4db939[0x54*-0x3f+-0x6df+-0xb*-0x281];_0x56e8c8[_0x12ea32(0x2b5)+_0x12ea32(0x3df)+'t']=_0x12ea32(0x5c8)+'a\x20Kou'+'r\x20—\x20'+_0x38c6fe['label'];for(var [_0x51ad71,_0x2a086f]of _0x1bf454)_0x2a086f['class'+_0x12ea32(0x115)][_0x12ea32(0x635)+'e'](_0x12ea32(0x4fd)+'e',_0x51ad71===_0x2138a5);_0x3c2db9[_0x12ea32(0x394)+'ceChi'+_0x12ea32(0x5cc)](..._0xcc138f[_0x12ea32(0x3c6)](_0x245862,_0x2138a5));}return _0x495c3b(_0xbb1df0['cat']||_0x38eafb(0x134)+'t'),_0xcc138f[_0x38eafb(0x44f)](setInterval,()=>{var _0x5ef659=_0x38eafb,_0x50fa70={'zWuso':function(_0x36db39){return _0x36db39();}};if(!_0x25f72f)return;var _0x5d4583=_0x3c2db9[_0x5ef659(0x432)+_0x5ef659(0x188)];for(var _0x32169b=0xc7d+-0x2c*0x7a+-0xa7*-0xd;_0x32169b<_0x5d4583[_0x5ef659(0x584)+'h'];_0x32169b++){if(_0x56b7eb[_0x5ef659(0x4ee)]('NJlFr',_0x5ef659(0x229)))_0x4a197c[_0x5ef659(0x1bd)+'ntDef'+'ault'](),_0x50fa70[_0x5ef659(0x1df)](_0x11d7c6);else{var _0x280d39=_0x5d4583[_0x32169b]['query'+_0x5ef659(0x267)+'tor'](_0x5ef659(0x258)+'desc');_0x280d39&&(_0x56b7eb['aSTFq'](_0x280d39[_0x5ef659(0x2b5)+_0x5ef659(0x3df)+'t'][_0x5ef659(0x374)+'Of']('UWMK'),-0x198b+-0x2227*-0x1+-0x26*0x3a)||_0x280d39['textC'+_0x5ef659(0x3df)+'t']['index'+'Of'](_0x56b7eb[_0x5ef659(0x32d)])===-0x1d1b+0x11ad+0xb*0x10a)&&(_0x280d39[_0x5ef659(0x2b5)+_0x5ef659(0x3df)+'t']=_0x33e089['safeM'+_0x5ef659(0x639)]?_0x5ef659(0x610)+_0x5ef659(0x55e)+_0x5ef659(0x175)+_0x5ef659(0x59e)+_0x5ef659(0x449)+_0x5ef659(0x61d)+_0x5ef659(0x66f)+_0x5ef659(0x66d)+_0x5ef659(0x15a)+_0x5ef659(0x488)+')':_0x33e089['uwmk']?_0x56b7eb[_0x5ef659(0x545)](_0x56b7eb['xvOQZ'](_0x56b7eb['QHUAD'](_0x56b7eb[_0x5ef659(0x3a6)](_0x56b7eb[_0x5ef659(0x5d6)],_0x33e089[_0x5ef659(0x567)+'Total']?_0x56b7eb[_0x5ef659(0x373)](_0x33e089['hooks'+'Ok']+'/'+_0x33e089[_0x5ef659(0x567)+_0x5ef659(0x354)],_0x56b7eb[_0x5ef659(0x1f5)]):'0\x20hoo'+_0x5ef659(0x5bb)+'med\x20('+_0x5ef659(0x2fc)+'ff)')+('\x20|\x20ga'+_0x5ef659(0x665)),_0x33e089[_0x5ef659(0x67a)+_0x5ef659(0x5a7)]?_0x56b7eb[_0x5ef659(0x58b)]:_0x56b7eb['ApvgX'])+_0x56b7eb['LELMZ']+(_0x33e089['shoot'+'ers']?_0x56b7eb['remWj']:_0x56b7eb['ijvaF'])+(_0x5ef659(0x6a8)+_0x5ef659(0x124)+'t\x20'),_0x33e089[_0x5ef659(0x300)+'ents']?_0x56b7eb[_0x5ef659(0x24c)]:_0x5ef659(0x3be)),_0x33e089['lastE'+_0x5ef659(0x212)]?_0x56b7eb[_0x5ef659(0x545)](_0x56b7eb['OiEos'],_0x33e089[_0x5ef659(0x36c)+'rror']):''):_0x56b7eb[_0x5ef659(0x2af)]);}}},-0x1dd7+-0x57a*-0x3+0xb*0x193),_0x3c58e7;}var _0x143be4='\x0a\x20\x20\x20\x20'+':host'+'\x20{\x20al'+_0x362537(0x27e)+'itial'+_0x362537(0x146)+_0x362537(0x524)+_0x362537(0x2f9)+_0x362537(0x654)+'ng:\x20b'+'order'+_0x362537(0x6c6)+_0x362537(0x26b)+_0x362537(0x537)+_0x362537(0x364)+_0x362537(0x685)+_0x362537(0x577)+_0x362537(0x20f)+_0x362537(0x5c1)+_0x362537(0x4f1)+'\x20UI\x22,'+_0x362537(0x521)+_0x362537(0x56e)+_0x362537(0x30a)+_0x362537(0x448)+_0x362537(0x5f7)+'\x0a\x20\x20\x20\x20'+_0x362537(0x480)+'anel\x20'+_0x362537(0x125)+_0x362537(0x6d4)+':\x20abs'+_0x362537(0x588)+_0x362537(0x4ce)+_0x362537(0x3ec)+'4px;\x20'+'botto'+'m:\x2024'+'px;\x20w'+_0x362537(0x5ed)+_0x362537(0x1fe)+'620px'+',\x20cal'+'c(100'+'vw\x20-\x20'+_0x362537(0x1b7)+');\x20ma'+_0x362537(0x320)+_0x362537(0x32a)+'min(4'+'80px,'+_0x362537(0x348)+_0x362537(0x219)+_0x362537(0x45d)+_0x362537(0x2b1)+';\x0a\x20\x20\x20'+_0x362537(0x6a7)+_0x362537(0x60d)+':\x20fle'+_0x362537(0x303)+_0x362537(0x6d1)+_0x362537(0x456)+_0x362537(0x39f)+'g:\x2010'+_0x362537(0x659)+_0x362537(0x40b)+_0x362537(0x4ed)+_0x362537(0x3bb)+_0x362537(0x274)+'point'+'er-ev'+_0x362537(0x680)+_0x362537(0x18f)+_0x362537(0x204)+_0x362537(0x4b3)+_0x362537(0x228)+'und:\x20'+'rgba('+_0x362537(0x3b6)+',21,.'+_0x362537(0x14d)+'backd'+_0x362537(0x5d8)+_0x362537(0x630)+_0x362537(0x383)+_0x362537(0x31d)+'x)\x20sa'+'turat'+_0x362537(0x571)+'%);\x20-'+_0x362537(0x5c5)+_0x362537(0x2cd)+_0x362537(0x6a5)+'-filt'+'er:\x20b'+_0x362537(0x632)+_0x362537(0x227)+'satur'+_0x362537(0x528)+_0x362537(0x591)+_0x362537(0x5e0)+'\x20\x20box'+_0x362537(0x5cd)+_0x362537(0x324)+'\x200\x200\x20'+_0x362537(0x2bd)+_0x362537(0x144)+_0x362537(0x423)+_0x362537(0x496)+_0x362537(0x2eb)+',\x20ins'+_0x362537(0x293)+'1px\x200'+_0x362537(0x679)+_0x362537(0x4bd)+_0x362537(0x2e5)+_0x362537(0x15d)+'5),\x200'+_0x362537(0x24b)+_0x362537(0x21e)+'\x20rgba'+_0x362537(0x315)+_0x362537(0x28c)+');\x0a\x20\x20'+_0x362537(0x409)+_0x362537(0x314)+'y:\x200;'+'\x20tran'+_0x362537(0x3c8)+_0x362537(0x1bc)+_0x362537(0x3f4)+_0x362537(0x2b6)+'px);\x20'+'point'+'er-ev'+_0x362537(0x680)+'\x20none'+';\x20tra'+'nsiti'+_0x362537(0x5e2)+_0x362537(0x314)+'y\x20.35'+_0x362537(0x358)+'e,\x20tr'+_0x362537(0x52a)+_0x362537(0x555)+_0x362537(0x41d)+_0x362537(0x4cd)+'ezier'+'(.22,'+'1,.36'+_0x362537(0x395)+_0x362537(0x167)+_0x362537(0x6b2)+_0x362537(0x52c)+_0x362537(0x4a7)+';\x20fon'+'t-siz'+_0x362537(0x288)+'px;\x20}'+_0x362537(0x5e0)+_0x362537(0x480)+_0x362537(0x69e)+_0x362537(0x1aa)+'\x20{\x20op'+_0x362537(0x53e)+_0x362537(0x236)+'trans'+_0x362537(0x27c)+_0x362537(0x17c)+';\x20poi'+_0x362537(0x3f3)+'event'+_0x362537(0x247)+'to;\x20}'+_0x362537(0x5e0)+_0x362537(0x6b0)+_0x362537(0x5c0)+'\x20disp'+'lay:\x20'+'flex;'+_0x362537(0x2c1)+'-dire'+'ction'+_0x362537(0x180)+_0x362537(0x634)+_0x362537(0x206)+_0x362537(0x36f)+_0x362537(0x25c)+_0x362537(0x3bf)+'\x20gap:'+_0x362537(0x279)+'\x20widt'+_0x362537(0x510)+'px;\x20f'+_0x362537(0x54c)+_0x362537(0x27b)+'\x20padd'+'ing:\x20'+_0x362537(0x485)+(_0x362537(0x562)+'rder-'+'radiu'+_0x362537(0x3e8)+'px;\x0a\x20'+'\x20\x20\x20\x20\x20'+_0x362537(0x5b5)+_0x362537(0x46e)+_0x362537(0x4ea)+'a(255'+',255,'+'255,.'+_0x362537(0x675)+'\x20box-'+'shado'+'w:\x20in'+_0x362537(0x375)+_0x362537(0x4a2)+'1px\x20r'+'gba(2'+_0x362537(0x423)+_0x362537(0x496)+_0x362537(0x2e6)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-log'+_0x362537(0x237)+'ispla'+'y:\x20gr'+'id;\x20p'+_0x362537(0x361)+_0x362537(0x5e3)+_0x362537(0x21a)+_0x362537(0x691)+'width'+_0x362537(0x382)+_0x362537(0x436)+_0x362537(0x11d)+'\x2032px'+_0x362537(0x146)+'\x20\x20\x20.m'+_0x362537(0x159)+_0x362537(0x59c)+'\x20{\x20wi'+_0x362537(0x27d)+_0x362537(0x4fe)+_0x362537(0x536)+_0x362537(0x3ec)+'5px;\x20'+_0x362537(0x158)+_0x362537(0x453)+'visib'+'le;\x20f'+_0x362537(0x630)+_0x362537(0x6c9)+_0x362537(0x56f)+_0x362537(0x4f3)+_0x362537(0x5dd)+'x\x20rgb'+_0x362537(0x5fb)+',107,'+_0x362537(0x12b)+'8));\x20'+'}\x0a\x20\x20\x20'+'\x20.mn-'+'tab\x20{'+'\x20disp'+'lay:\x20'+'flex;'+'\x20alig'+_0x362537(0x417)+'ms:\x20c'+'enter'+';\x20jus'+_0x362537(0x2d9)+'conte'+'nt:\x20c'+_0x362537(0x3e4)+_0x362537(0x574)+'th:\x205'+'2px;\x20'+'heigh'+'t:\x2034'+_0x362537(0x659)+_0x362537(0x40b)+':\x200;\x20'+_0x362537(0x130)+'r-rad'+_0x362537(0x647)+'10px;'+_0x362537(0x5e0)+_0x362537(0x285)+'kgrou'+'nd:\x20t'+'ransp'+'arent'+';\x20col'+_0x362537(0x113)+_0x362537(0x144)+_0x362537(0x4a9)+_0x362537(0x42c)+_0x362537(0x694)+_0x362537(0x5c7)+'or:\x20p'+_0x362537(0x67e)+_0x362537(0x48b)+_0x362537(0x6cd)+'ze:\x201'+'0px;\x20'+'font-'+'weigh'+_0x362537(0x1e7)+_0x362537(0x499)+_0x362537(0x128)+_0x362537(0x419)+_0x362537(0x30f)+_0x362537(0x1d7)+'color'+':\x20rgb'+_0x362537(0x43b)+_0x362537(0x64f)+_0x362537(0x31b)+'8);\x20}'+'\x0a\x20\x20\x20\x20'+'.mn-t'+'ab.ac'+_0x362537(0x277)+_0x362537(0x6d3)+'or:\x20#'+_0x362537(0x14b)+_0x362537(0x328)+'ckgro'+_0x362537(0x483)+'rgba('+'255,1'+'07,15'+_0x362537(0x3ac)+';\x20}\x0a\x20'+_0x362537(0x381)+_0x362537(0x1c7)+_0x362537(0x3ef)+'lex:\x20'+'1;\x20mi'+'n-wid'+_0x362537(0x13f)+_0x362537(0x434)+_0x362537(0x376)+_0x362537(0x2c1)+_0x362537(0x1b1)+_0x362537(0x14c)+_0x362537(0x50f)+'n:\x20co'+_0x362537(0x47f)+_0x362537(0x474)+'\x20\x20.mn'+_0x362537(0x4c7)+_0x362537(0x5f1)+_0x362537(0x376)+_0x362537(0x2c1)+_0x362537(0x61f)+_0x362537(0x559)+_0x362537(0x269)+'cente'+'r;\x20ga'+'p:\x2012'+_0x362537(0x456)+'addin'+_0x362537(0x2e2)+_0x362537(0x173)+'\x2012px'+';\x20use'+_0x362537(0x4bb)+_0x362537(0x53d)+_0x362537(0x27b)+'\x20}\x0a\x20\x20'+_0x362537(0x183)+_0x362537(0x357)+_0x362537(0x42f)+_0x362537(0x481)+'\x201;\x20m'+_0x362537(0x12f)+'dth:\x20'+'0;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x362537(0x5ce)+_0x362537(0x40c)+'t-siz'+_0x362537(0x182)+'px;\x20f'+_0x362537(0x181)+_0x362537(0x614)+':\x20650'+_0x362537(0x146)+_0x362537(0x381)+_0x362537(0x1de)+_0x362537(0x605)+_0x362537(0x6cd)+_0x362537(0x3d5)+_0x362537(0x264)+_0x362537(0x3aa))+('ty:\x20.'+'4;\x20}\x0a'+'\x20\x20\x20\x20.'+'mn-cl'+_0x362537(0x1a3)+_0x362537(0x695)+_0x362537(0x412)+_0x362537(0x5b3)+_0x362537(0x547)+_0x362537(0x609)+_0x362537(0x13d)+_0x362537(0x3e4)+_0x362537(0x574)+_0x362537(0x24a)+'8px;\x20'+'heigh'+_0x362537(0x271)+_0x362537(0x659)+_0x362537(0x40b)+_0x362537(0x4a0)+_0x362537(0x130)+_0x362537(0x621)+_0x362537(0x647)+'8px;\x20'+'backg'+_0x362537(0x46e)+_0x362537(0x1bc)+_0x362537(0x41f)+_0x362537(0x458)+'color'+':\x20inh'+_0x362537(0x6c8)+_0x362537(0x68c)+'ity:\x20'+_0x362537(0x460)+_0x362537(0x652)+'r:\x20po'+_0x362537(0x5f5)+_0x362537(0x146)+'\x20\x20\x20.m'+'n-clo'+_0x362537(0x388)+_0x362537(0x3e0)+_0x362537(0x68c)+_0x362537(0x353)+_0x362537(0x5c9)+_0x362537(0x228)+'und:\x20'+_0x362537(0x48f)+_0x362537(0x2e5)+_0x362537(0x423)+'5,.05'+_0x362537(0x49f)+_0x362537(0x128)+_0x362537(0x53f)+_0x362537(0x148)+'vg\x20{\x20'+'width'+_0x362537(0x5c3)+'x;\x20he'+'ight:'+_0x362537(0x2d5)+_0x362537(0x410)+'l:\x20no'+_0x362537(0x629)+'troke'+':\x20cur'+'rentC'+'olor;'+_0x362537(0x4e9)+_0x362537(0x5b6)+'dth:\x20'+'2;\x20st'+_0x362537(0x265)+_0x362537(0x6d7)+'ap:\x20r'+'ound;'+'\x20}\x0a\x20\x20'+_0x362537(0x183)+_0x362537(0x64e)+'\x20{\x20fl'+_0x362537(0x4b6)+_0x362537(0x306)+_0x362537(0x17a)+'ht:\x200'+';\x20ove'+_0x362537(0x2b0)+'-y:\x20a'+_0x362537(0x514)+'displ'+_0x362537(0x618)+'rid;\x20'+'grid-'+_0x362537(0x34f)+_0x362537(0x51d)+_0x362537(0x5ec)+_0x362537(0x529)+_0x362537(0x5e8)+'auto-'+'fill,'+_0x362537(0x6df)+_0x362537(0x570)+'0px,\x20'+_0x362537(0x22e)+_0x362537(0x61f)+_0x362537(0x559)+'ems:\x20'+'start'+';\x20ali'+'gn-co'+_0x362537(0x326)+':\x20sta'+'rt;\x20g'+_0x362537(0x57d)+_0x362537(0x468)+_0x362537(0x426)+'ng:\x200'+'\x204px\x20'+_0x362537(0x201)+_0x362537(0x146)+_0x362537(0x381)+_0x362537(0x21d)+_0x362537(0x2f6)+_0x362537(0x1f9)+'-scro'+'llbar'+_0x362537(0x668)+_0x362537(0x27d)+'8px;\x20'+'}\x0a\x20\x20\x20'+_0x362537(0x538)+'cols:'+_0x362537(0x172)+_0x362537(0x697)+'croll'+'bar-t'+'humb\x20'+'{\x20bac'+'kgrou'+_0x362537(0x367)+'gba(2'+_0x362537(0x423)+_0x362537(0x496)+',.08)'+';\x20bor'+_0x362537(0x323)+_0x362537(0x215)+_0x362537(0x403)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x362537(0x54a)+_0x362537(0x670)+_0x362537(0x40b)+_0x362537(0x4ed)+'us:\x201'+_0x362537(0x274)+'backg'+_0x362537(0x46e)+_0x362537(0x4ea)+_0x362537(0x5fb)+_0x362537(0x120)+_0x362537(0x46b)+'025);'+'\x20box-'+_0x362537(0x404)+_0x362537(0x5b4)+'set\x200'+'\x200\x200\x20'+_0x362537(0x2bd)+'gba(2'+'55,25'+'5,255'+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x362537(0x54a)+_0x362537(0x36e)+_0x362537(0x6bb)+_0x362537(0x1ed)+_0x362537(0x367)+_0x362537(0x144)+'55,25'+'5,255'+_0x362537(0x636)+';\x20box'+_0x362537(0x5cd)+_0x362537(0x2ae)+_0x362537(0x2b8)+'0\x200\x200'+'\x201px\x20'+'rgba('+_0x362537(0x24d)+'07,15'+_0x362537(0x197)+_0x362537(0x49f)+_0x362537(0x128)+_0x362537(0x26f)+'rd-he'+'ad\x20{\x20'+_0x362537(0x248))+(_0x362537(0x191)+'lex;\x20'+'align'+_0x362537(0x36f)+_0x362537(0x25c)+_0x362537(0x3bf)+'\x20gap:'+'\x208px;'+'\x20padd'+'ing:\x20'+_0x362537(0x114)+_0x362537(0x1c8)+_0x362537(0x474)+_0x362537(0x1e4)+'-card'+_0x362537(0x357)+'e\x20{\x20f'+'lex:\x20'+'1;\x20mi'+'n-wid'+_0x362537(0x13f)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x362537(0x54a)+_0x362537(0x38a)+_0x362537(0x205)+'rong\x20'+_0x362537(0x40c)+'t-siz'+_0x362537(0x288)+_0x362537(0x625)+'ont-w'+_0x362537(0x614)+':\x20600'+';\x20col'+'or:\x20r'+_0x362537(0x144)+_0x362537(0x4a9)+_0x362537(0x42c)+_0x362537(0x542)+_0x362537(0x146)+_0x362537(0x65e)+_0x362537(0x54a)+'d.on\x20'+_0x362537(0x66c)+'ard-t'+_0x362537(0x25a)+_0x362537(0x153)+'g\x20{\x20c'+'olor:'+_0x362537(0x27f)+_0x362537(0x220)+_0x362537(0x31a)+_0x362537(0x6d8)+_0x362537(0x13b)+'\x20{\x20pa'+_0x362537(0x4eb)+':\x200\x201'+_0x362537(0x6dc)+'0px;\x20'+'}\x0a\x20\x20\x20'+_0x362537(0x6d8)+'mdesc'+_0x362537(0x605)+'nt-si'+'ze:\x201'+'1px;\x20'+_0x362537(0x3aa)+_0x362537(0x4e5)+'4;\x20ma'+_0x362537(0x4c9)+'botto'+_0x362537(0x1e9)+_0x362537(0x5d7)+'\x20\x20\x20\x20.'+_0x362537(0x587)+'l\x20{\x20d'+'ispla'+_0x362537(0x517)+_0x362537(0x5a6)+_0x362537(0x4a4)+_0x362537(0x5e3)+_0x362537(0x21a)+_0x362537(0x691)+_0x362537(0x2ce)+_0x362537(0x6c3)+'paddi'+'ng:\x204'+_0x362537(0x6a1)+_0x362537(0x1fd)+'-size'+_0x362537(0x511)+_0x362537(0x118)+_0x362537(0x31a)+'\x20.sk-'+_0x362537(0x2ef)+_0x362537(0x550)+'ex:\x201'+_0x362537(0x684)+_0x362537(0x113)+'gba(2'+'46,23'+_0x362537(0x42c)+_0x362537(0x58f)+';\x20}\x0a\x20'+_0x362537(0x65e)+_0x362537(0x13e)+'t\x20{\x20d'+_0x362537(0x523)+_0x362537(0x2a3)+'ock;\x20'+_0x362537(0x482)+'size:'+_0x362537(0x4c2)+_0x362537(0x43a)+_0x362537(0x1c3)+'\x20.4;\x20'+'}\x0a\x20\x20\x20'+_0x362537(0x6d8)+_0x362537(0x3c7)+'h\x20{\x20p'+'ositi'+'on:\x20r'+_0x362537(0x4ae)+_0x362537(0x66a)+'idth:'+'\x2026px'+_0x362537(0x475)+_0x362537(0x32a)+'14px;'+'\x20bord'+_0x362537(0x3c5)+';\x20bor'+'der-r'+_0x362537(0x215)+_0x362537(0x3d3)+_0x362537(0x33c)+_0x362537(0x228)+'und:\x20'+_0x362537(0x48f)+_0x362537(0x2e5)+_0x362537(0x423)+_0x362537(0x60f)+');\x20cu'+_0x362537(0x435)+_0x362537(0x4e3)+_0x362537(0x691)+'flex:'+'\x20none'+_0x362537(0x146)+_0x362537(0x65e)+_0x362537(0x21b)+'tch::'+_0x362537(0x557)+_0x362537(0x637)+'ntent'+':\x20\x22\x22;'+_0x362537(0x136)+'tion:'+_0x362537(0x564)+_0x362537(0x5cb)+'\x20top:'+'\x203px;'+_0x362537(0x307)+':\x203px'+';\x20wid'+_0x362537(0x3b4)+_0x362537(0x643)+_0x362537(0x614)+_0x362537(0x3ae)+_0x362537(0x2bb)+'der-r'+_0x362537(0x215)+_0x362537(0x5b1)+';\x20bac'+_0x362537(0x1ed)+'nd:\x20r'+'gba(2'+_0x362537(0x423)+_0x362537(0x496)+_0x362537(0x49e)+_0x362537(0x3dc)+_0x362537(0x3a9)+'on:\x20l'+'eft\x20.'+'2s,\x20b'+'ackgr'+'ound\x20'+'.2s;\x20'+_0x362537(0x31a)+_0x362537(0x6d8)+_0x362537(0x3c7)+_0x362537(0x266)+'a-che'+_0x362537(0x2d0)+_0x362537(0x1af)+_0x362537(0x5c6)+_0x362537(0x5b5)+_0x362537(0x46e)+':\x20rgb')+('a(255'+_0x362537(0x359)+'157,.'+'25);\x20'+_0x362537(0x31a)+_0x362537(0x6d8)+_0x362537(0x3c7)+_0x362537(0x266)+'a-che'+_0x362537(0x2d0)+'\x22true'+'\x22]::a'+_0x362537(0x11f)+'{\x20lef'+'t:\x2015'+'px;\x20b'+_0x362537(0x5d4)+_0x362537(0x3c2)+_0x362537(0x6dd)+_0x362537(0x35d)+_0x362537(0x31a)+_0x362537(0x6d8)+'field'+'\x20{\x20ba'+'ckgro'+_0x362537(0x483)+_0x362537(0x48f)+_0x362537(0x2e5)+'55,25'+_0x362537(0x232)+'5);\x20b'+_0x362537(0x40b)+':\x200;\x20'+_0x362537(0x130)+'r-rad'+'ius:\x20'+'6px;\x20'+'color'+_0x362537(0x38c)+_0x362537(0x5d2)+_0x362537(0x25f)+_0x362537(0x2db)+'6px\x209'+_0x362537(0x625)+'ont-s'+'ize:\x20'+'11.5p'+'x;\x20ou'+_0x362537(0x68d)+':\x20non'+_0x362537(0x431)+'x-sha'+'dow:\x20'+_0x362537(0x2cc)+'\x200\x200\x20'+_0x362537(0x150)+'\x20rgba'+'(255,'+_0x362537(0x2e5)+'55,.0'+_0x362537(0x533)+_0x362537(0x5e0)+_0x362537(0x3f9)+_0x362537(0x51b)+'optio'+_0x362537(0x411)+'ackgr'+_0x362537(0x3c2)+_0x362537(0x1cb)+_0x362537(0x4aa)+_0x362537(0x31a)+_0x362537(0x6d8)+_0x362537(0x543)+_0x362537(0x33e)+'splay'+':\x20fle'+_0x362537(0x340)+_0x362537(0x674)+_0x362537(0x3fb)+'\x20cent'+'er;\x20g'+_0x362537(0x53c)+'px;\x20}'+_0x362537(0x5e0)+_0x362537(0x1ec)+'lider'+'\x20{\x20-w'+_0x362537(0x1f9)+'-appe'+_0x362537(0x427)+_0x362537(0x2fa)+_0x362537(0x23f)+_0x362537(0x46c)+'ance:'+_0x362537(0x17c)+';\x20wid'+_0x362537(0x4b9)+_0x362537(0x468)+'heigh'+_0x362537(0x5d3)+'x;\x20ba'+_0x362537(0x228)+_0x362537(0x483)+'trans'+_0x362537(0x2e3)+_0x362537(0x5d0)+_0x362537(0x128)+'sk-sl'+'ider:'+_0x362537(0x172)+_0x362537(0x697)+_0x362537(0x624)+'-runn'+_0x362537(0x305)+_0x362537(0x38f)+_0x362537(0x5e4)+'ight:'+'\x202px;'+_0x362537(0x61c)+_0x362537(0x283)+'dius:'+'\x202px;'+_0x362537(0x4d7)+_0x362537(0x23b)+'d:\x20li'+'near-'+_0x362537(0x602)+_0x362537(0x25d)+_0x362537(0x14b)+'d,\x20#f'+_0x362537(0x4e8)+_0x362537(0x46f)+_0x362537(0x26c)+'r(--p'+_0x362537(0x64c)+')\x20100'+_0x362537(0x193)+'repea'+_0x362537(0x22d)+_0x362537(0x259)+_0x362537(0x496)+',255,'+_0x362537(0x408)+_0x362537(0x474)+_0x362537(0x1e4)+_0x362537(0x121)+_0x362537(0x4e6)+'webki'+'t-sli'+_0x362537(0x6be)+'humb\x20'+_0x362537(0x2d4)+'bkit-'+_0x362537(0x444)+_0x362537(0x211)+_0x362537(0x47b)+'e;\x20wi'+'dth:\x20'+'6px;\x20'+'heigh'+_0x362537(0x540)+'x;\x20ma'+_0x362537(0x4c9)+'top:\x20'+'-2px;'+_0x362537(0x61c)+_0x362537(0x283)+_0x362537(0x19d)+_0x362537(0x4c4)+_0x362537(0x4d7)+_0x362537(0x23b)+_0x362537(0x520)+_0x362537(0x4e8)+_0x362537(0x146)+'\x20\x20\x20.s'+_0x362537(0x246)+'\x20{\x20fo'+_0x362537(0x6cd)+'ze:\x201'+_0x362537(0x264)+'font-'+_0x362537(0x512)+_0x362537(0x651)+_0x362537(0x34b)+'n-wid'+_0x362537(0x24a)+'8px;\x20'+_0x362537(0x21f)+_0x362537(0x206)+_0x362537(0x312)+'ht;\x20c'+_0x362537(0x490)+_0x362537(0x679)+_0x362537(0x3f0)+_0x362537(0x2a6)+'42,.8'+_0x362537(0x49f)+_0x362537(0x128)+_0x362537(0x355)+_0x362537(0x336))+(_0x362537(0x6b1)+_0x362537(0x325)+'px;\x20h'+_0x362537(0x614)+_0x362537(0x1be)+_0x362537(0x42d)+_0x362537(0x255)+'\x200;\x20b'+'order'+_0x362537(0x4ed)+_0x362537(0x4cb)+_0x362537(0x659)+'ackgr'+'ound:'+'\x20none'+';\x20pad'+_0x362537(0x49d)+'\x200;\x20c'+_0x362537(0x2d1)+_0x362537(0x199)+_0x362537(0x3bf)+'\x20}\x0a\x20\x20'+_0x362537(0x1e4)+'-note'+_0x362537(0x605)+'nt-si'+_0x362537(0x3d5)+'1px;\x20'+'color'+':\x20rgb'+_0x362537(0x43b)+',238,'+_0x362537(0x31b)+_0x362537(0x498)+_0x362537(0x39f)+_0x362537(0x676)+'x\x200;\x20'+_0x362537(0x31a)+_0x362537(0x6d8)+_0x362537(0x36a)+'err\x20{'+_0x362537(0x6b2)+'r:\x20#f'+_0x362537(0x2ca)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x362537(0x3fa)+_0x362537(0x5ea)+_0x362537(0x17d)+_0x362537(0x2c4)+'flex-'+'start'+_0x362537(0x2bb)+_0x362537(0x68a)+'0;\x20bo'+'rder-'+_0x362537(0x6bc)+_0x362537(0x4f8)+_0x362537(0x45f)+_0x362537(0x4eb)+_0x362537(0x3ae)+'\x2016px'+';\x20bac'+_0x362537(0x1ed)+_0x362537(0x4c3)+'ff6b9'+_0x362537(0x3de)+'lor:\x20'+_0x362537(0x65c)+_0x362537(0x1fd)+_0x362537(0x163)+_0x362537(0x511)+'5px;\x20'+'font-'+'weigh'+_0x362537(0x1e7)+_0x362537(0x137)+_0x362537(0x435)+_0x362537(0x4e3)+_0x362537(0x691)+_0x362537(0x31a)+_0x362537(0x6d8)+'btn:h'+'over\x20'+'{\x20fil'+_0x362537(0x19c)+'brigh'+'tness'+'(1.1)'+_0x362537(0x146)+'\x20\x20\x20');window[_0x362537(0x3b0)+_0x362537(0x467)+'stene'+'r']('keydo'+'wn',_0x1d7973=>{var _0x213e18=_0x362537;_0x213e18(0x131)===_0xcc138f[_0x213e18(0x4b0)]?(_0x4b2bcd[_0x213e18(0x2a8)+'aptur'+'e']=_0x57709,_0x27461f()):_0x1d7973['code']===_0xcc138f[_0x213e18(0x45b)]&&(_0x1d7973['preve'+_0x213e18(0x225)+_0x213e18(0x18a)](),_0x898331());},!![]);var _0x2b415a=document[_0x362537(0x16f)+_0x362537(0x461)+'ent'](_0x5247d2['bTXIl']);_0x2b415a[_0x362537(0x3ee)]['cssTe'+'xt']=_0x5247d2['nfttZ'],_0x2b415a[_0x362537(0x5ca)+'HTML']=_0x362537(0x3bc)+_0x362537(0x696)+_0x362537(0x35e)+_0x362537(0x1bf)+'\x2024\x22>'+_0x362537(0x573)+'\x20d=\x22M'+_0x362537(0x40e)+_0x362537(0x2d8)+_0x362537(0x55c)+'4-4.5'+'-4-7.'+_0x362537(0x673)+_0x362537(0x530)+'8-4.5'+_0x362537(0x38d)+'5s4\x202'+_0x362537(0x337)+'5c0\x203'+_0x362537(0x6b7)+'5-4\x207'+_0x362537(0x642)+_0x362537(0x56b)+_0x362537(0x478)+_0x362537(0x141)+_0x362537(0x51a)+'#ff6b'+'9d\x22\x20s'+'troke'+_0x362537(0x47c)+_0x362537(0x671)+'\x20stro'+'ke-li'+_0x362537(0x502)+'=\x22rou'+_0x362537(0x3f1)+_0x362537(0x1a9)+_0x362537(0x117)+'join='+_0x362537(0x378)+'d\x22/><'+_0x362537(0x1ce)+_0x362537(0x33a)+_0x362537(0x397)+_0x362537(0x195)+'0\x22\x20r='+_0x362537(0x62c)+'\x20fill'+_0x362537(0x445)+'6b9d\x22'+_0x362537(0x681)+'vg>',_0x2b415a[_0x362537(0x579)]=_0x362537(0x5c8)+'a\x20Kou'+'r',_0x2b415a[_0x362537(0x389)+_0x362537(0x489)+'er']=()=>_0x2b415a['style'][_0x362537(0x3aa)+'ty']='1',_0x2b415a['onmou'+'selea'+'ve']=()=>_0x2b415a[_0x362537(0x3ee)]['opaci'+'ty']=_0x362537(0x554),_0x2b415a[_0x362537(0x54d)+'ck']=_0x4e4234=>{var _0x11806c=_0x362537;_0xcc138f['guWXu']!==_0x11806c(0x2f3)?(_0x40dec3['stopP'+_0x11806c(0x4d2)+_0x11806c(0x310)](),_0x50922d()):(_0x4e4234['stopP'+_0x11806c(0x4d2)+_0x11806c(0x310)](),_0x898331());},document['body'][_0x362537(0x2b3)+_0x362537(0x5f9)+'d'](_0x2b415a),_0x490682(),requestAnimationFrame(_0x3e0cea),console['log'](_0x5247d2[_0x362537(0x40f)],_0x33e089['uwmk']);});})()));
