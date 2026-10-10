// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      1.9.5
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
(function(_0x562182,_0x1ab498){var _0x1c07a5=_0x1e6a,_0x455180=_0x562182();while(!![]){try{var _0x2fc2b7=-parseInt(_0x1c07a5(0x632))/(0xcb9*0x3+-0x4*-0x792+0x2*-0x2239)*(parseInt(_0x1c07a5(0x5ba))/(-0xaec+-0x1f*0x27+0x1*0xfa7))+-parseInt(_0x1c07a5(0x568))/(-0x1c44+0x7*-0x1d3+0x290c)*(-parseInt(_0x1c07a5(0x46c))/(-0x11d2+0x47*-0x71+0x312d))+parseInt(_0x1c07a5(0x2af))/(0x5bd*-0x2+0x1*-0xa68+0x15e7)+-parseInt(_0x1c07a5(0x1a1))/(0x1dca+0xf9a*-0x1+-0xe2a)*(-parseInt(_0x1c07a5(0x160))/(0x1a03*0x1+-0x1400+-0x4*0x17f))+-parseInt(_0x1c07a5(0x1b3))/(0x1*0x205d+-0x24dd+0x122*0x4)*(parseInt(_0x1c07a5(0x541))/(0x175d+0x2060+-0x14*0x2c9))+parseInt(_0x1c07a5(0x415))/(-0xbb9*0x2+-0x1ccd+0x3449)*(parseInt(_0x1c07a5(0x38f))/(-0x1cf4+0xc23*0x1+0xa6*0x1a))+-parseInt(_0x1c07a5(0x424))/(0x15bf+-0x947+-0xc6c)*(parseInt(_0x1c07a5(0x22e))/(0x13a2*0x1+0x14c*-0x4+-0xe65));if(_0x2fc2b7===_0x1ab498)break;else _0x455180['push'](_0x455180['shift']());}catch(_0x5b8f34){_0x455180['push'](_0x455180['shift']());}}}(_0x1bea,-0x1*0x120d9+-0x5c3a2+0xac55b*0x1),((()=>{'use strict';var _0x472960=_0x1e6a,_0x2ee71f={'qcAft':_0x472960(0x394),'ZIqAH':function(_0x4422f0,_0x32566a){return _0x4422f0+_0x32566a;},'pKCpX':function(_0x347fc2,_0x4159dc){return _0x347fc2+_0x4159dc;},'aBfvs':'held','svRHX':_0x472960(0x549),'GlhTv':'sakur'+_0x472960(0x3a2)+_0x472960(0x497),'AWomY':_0x472960(0xf0)+_0x472960(0x13f)+'ur]\x20h'+'ook\x20r'+'eg\x20fa'+'iled:','cPAav':function(_0x391ea3,_0x24e652){return _0x391ea3!==_0x24e652;},'XDXJi':_0x472960(0xe3),'QDDQT':function(_0x4c31f9,_0x20f0e7){return _0x4c31f9(_0x20f0e7);},'SOAXx':function(_0x291565,_0x36f283){return _0x291565>_0x36f283;},'BCjHs':_0x472960(0x250),'WdlyN':function(_0x4f29dd,_0x5e8929){return _0x4f29dd===_0x5e8929;},'xoICp':'HRtqr','MZRbB':function(_0x4f6d1f,_0x167545){return _0x4f6d1f!==_0x167545;},'NMcmP':'itSrG','RnWLj':function(_0xb2f944,_0xcdf197){return _0xb2f944!==_0xcdf197;},'FdmZF':'unoBV','zGceQ':'inter'+_0x472960(0x1c6)+'e','uQLbi':function(_0x2757b3,_0x4ccad1){return _0x2757b3===_0x4ccad1;},'MbcqW':'pFTTN','SjXzH':_0x472960(0x4c2),'XXQCY':'sakur'+_0x472960(0x3a2)+_0x472960(0x186)+'v1','zKznl':function(_0x3c1db9,_0x2b8a02,_0x59023e,_0x148541){return _0x3c1db9(_0x2b8a02,_0x59023e,_0x148541);},'FwhAJ':function(_0x27a9e5,_0x329e8d,_0x71aab9,_0x3b84b6,_0x22688a){return _0x27a9e5(_0x329e8d,_0x71aab9,_0x3b84b6,_0x22688a);},'jnOIJ':function(_0x3be838,_0x2bd2e6){return _0x3be838!==_0x2bd2e6;},'khNGS':function(_0x262151,_0x5cfd50){return _0x262151===_0x5cfd50;},'Xvxym':_0x472960(0x455),'nXGrL':function(_0x2509a8,_0x55f97b,_0x1bf15d,_0x342abc,_0x10e3a0){return _0x2509a8(_0x55f97b,_0x1bf15d,_0x342abc,_0x10e3a0);},'zCqrE':_0x472960(0x2a2)+_0x472960(0x410),'DFAsO':function(_0x379147,_0x2c457e){return _0x379147===_0x2c457e;},'ZrmxS':function(_0x14f62c,_0x1e9531){return _0x14f62c+_0x1e9531;},'YkDfV':_0x472960(0x5a5),'iwjiU':function(_0x198ba1){return _0x198ba1();},'jyYTh':function(_0x29fbec,_0x4f2388){return _0x29fbec<_0x4f2388;},'ufzmL':'3|0|2'+'|5|4|'+'1','vUIFj':function(_0x1a79f4,_0x42d970,_0x2b89da,_0x5d8208,_0x4e05e7){return _0x1a79f4(_0x42d970,_0x2b89da,_0x5d8208,_0x4e05e7);},'bfKYY':function(_0x5892e8,_0x1baea0,_0x383747,_0xc8997d,_0x250e35){return _0x5892e8(_0x1baea0,_0x383747,_0xc8997d,_0x250e35);},'MpEJW':function(_0x469544,_0x32bf62,_0x598c24,_0x5564c7,_0x4135fb){return _0x469544(_0x32bf62,_0x598c24,_0x5564c7,_0x4135fb);},'ueTxv':_0x472960(0x31d),'CTRTl':function(_0x155bbd,_0x34427b){return _0x155bbd!==_0x34427b;},'gAhlN':function(_0x210f7d,_0x3caa07){return _0x210f7d!==_0x3caa07;},'sEvHD':function(_0x8d1b14,_0x36b153,_0x4614ca,_0x4e6481,_0x3c38f9){return _0x8d1b14(_0x36b153,_0x4614ca,_0x4e6481,_0x3c38f9);},'IxXix':function(_0x50e61e,_0x2fbb9c,_0x75070e){return _0x50e61e(_0x2fbb9c,_0x75070e);},'wTGYL':function(_0x56f61d,_0x381b02,_0x13cc18,_0x40bd98,_0x42be9c){return _0x56f61d(_0x381b02,_0x13cc18,_0x40bd98,_0x42be9c);},'JeuSh':function(_0x89760a,_0x7d2439){return _0x89760a!==_0x7d2439;},'XkYbH':function(_0x425491,_0x22d4e6,_0x5ebae7,_0x4cd8cd,_0x2b0fb5){return _0x425491(_0x22d4e6,_0x5ebae7,_0x4cd8cd,_0x2b0fb5);},'JmYdL':function(_0x85a12b,_0xde4f08){return _0x85a12b+_0xde4f08;},'VGLeK':'iwxpc','hAPvB':function(_0x50810f,_0x2e5ad4){return _0x50810f>_0x2e5ad4;},'pFpFK':function(_0x5df0d5,_0x1aff96){return _0x5df0d5/_0x1aff96;},'YLjth':_0x472960(0x660)+'|5|4|'+_0x472960(0x67f),'AufyR':_0x472960(0x5a5)+'up','LYgGZ':'blur','OBFOi':_0x472960(0x5a5)+'down','qUUVv':function(_0x1c9e95,_0xadd0f8){return _0x1c9e95-_0xadd0f8;},'EKQVY':function(_0x5c8f42,_0x257c39){return _0x5c8f42===_0x257c39;},'eqKul':function(_0x5b6193,_0xfd349e){return _0x5b6193-_0xfd349e;},'lTIhM':function(_0x401c60,_0x1babed){return _0x401c60!==_0x1babed;},'xydDR':_0x472960(0x17f)+'S','Zcthi':function(_0x4baa89,_0x4cc4a3){return _0x4baa89*_0x4cc4a3;},'NQtxK':function(_0x485a17,_0x553984){return _0x485a17(_0x553984);},'NaGei':function(_0xbda7a,_0x120e4f){return _0xbda7a+_0x120e4f;},'IMUCu':function(_0x494124,_0x19fa3e){return _0x494124-_0x19fa3e;},'SJOlj':function(_0x36a516,_0x2fcebd){return _0x36a516*_0x2fcebd;},'ggQoh':function(_0x9cf3be,_0x456b69){return _0x9cf3be*_0x456b69;},'uiejs':function(_0x79c726,_0x48b631){return _0x79c726!==_0x48b631;},'wXfkX':_0x472960(0x30a),'xlGWm':'2|7|4'+_0x472960(0x22a)+'5|3|6','gxYON':'sk-la'+'bel','YCreJ':'div','nOUnw':'span','muqIQ':_0x472960(0x128)+'nt','FsbEW':_0x472960(0x542)+'MODE\x20'+_0x472960(0x364)+_0x472960(0x51d)+_0x472960(0x545)+_0x472960(0x3a1)+_0x472960(0x423)+_0x472960(0x3de)+_0x472960(0x159)+'\x20exit'+')','AOSIQ':'UWMK\x20'+_0x472960(0x11f)+'\x20','ZKzLF':_0x472960(0x2a7)+'ks\x20ar'+_0x472960(0x1a3)+_0x472960(0x341)+_0x472960(0x64c),'IkQYj':'\x20|\x20sh'+_0x472960(0x506)+'\x20','QRndx':'\x20|\x20mo'+_0x472960(0x62e)+'t\x20','uqytf':_0x472960(0x44f)+_0x472960(0x4ff),'bPqPf':'calls'+'\x20Unit'+'yEngi'+_0x472960(0x22c)+_0x472960(0x4d6)+_0x472960(0x2a9)+_0x472960(0x2da)+'arget'+'Frame'+'Rate','VnsuV':function(_0x105797,_0x292f92){return _0x105797+_0x292f92;},'alwou':_0x472960(0x470)+'ng','XGgsj':'mn-ma'+'in','CQhGA':'Sakur'+_0x472960(0x180)+'r','CYrsq':_0x472960(0x5af),'FKPsp':'mn-su'+'b','SoaOq':'butto'+'n','tyuBs':'Close','DfOfU':_0x472960(0x1d7)+'viewB'+'ox=\x220'+_0x472960(0x556)+_0x472960(0x4f5)+_0x472960(0x5ac)+_0x472960(0x4ae)+_0x472960(0x31a)+_0x472960(0x2e1)+_0x472960(0x41c)+_0x472960(0x491)+'/></s'+'vg>','vdEEX':_0x472960(0x358)+'b','KjZkn':'comba'+'t','YtaTl':function(_0x253ba7,_0x26c8b8){return _0x253ba7===_0x26c8b8;},'oYBcZ':'Inser'+'t','IRylr':_0x472960(0x661),'fsBvg':'px\x20ui'+_0x472960(0x400)+_0x472960(0x2c1)+'f,sys'+'tem-u'+_0x472960(0x474)+'s-ser'+'if','DXGgo':function(_0xaeabef,_0x5797b7){return _0xaeabef*_0x5797b7;},'uONwM':function(_0x5a55b8,_0x598b1f){return _0x5a55b8+_0x598b1f;},'oRntK':function(_0xb2c292,_0x2f214c){return _0xb2c292*_0x2f214c;},'tInhR':_0x472960(0x5a5)+'1','THMGE':_0x472960(0x38d),'taiRP':'cQjSX','jdxoW':_0x472960(0x536),'BrgOV':'sk-va'+'l','hRTDd':_0x472960(0x45b),'nTkGt':'selec'+'t','PRnfP':function(_0x559f60,_0x208e97){return _0x559f60===_0x208e97;},'ISrSu':'optio'+'n','jqzrv':_0x472960(0x344)+'n','GiBwg':_0x472960(0x401)+'te','HlaiA':_0x472960(0x2b1),'itzeS':function(_0x4095cd){return _0x4095cd();},'AOqPM':function(_0x306e29,_0x211a5b){return _0x306e29!==_0x211a5b;},'vDxSP':_0x472960(0x25a),'QzkTd':_0x472960(0x593),'tswuX':function(_0x31d4dd){return _0x31d4dd();},'asTMY':'No\x20Re'+_0x472960(0x42d),'Asuej':function(_0x1d16c2,_0x1da450,_0x111c90,_0x4a99b5,_0x4aebce,_0x22d1a0){return _0x1d16c2(_0x1da450,_0x111c90,_0x4a99b5,_0x4aebce,_0x22d1a0);},'hLzmp':_0x472960(0x2ec)+'read','QlmVw':'Overw'+_0x472960(0x5d0)+_0x472960(0x4f7)+_0x472960(0x5eb)+_0x472960(0x4f4)+_0x472960(0x62d)+'ge.\x20B'+_0x472960(0x3fc)+'le\x20if'+_0x472960(0x20e)+_0x472960(0x40f)+'r\x20val'+_0x472960(0x540)+'s.','XOyxz':'Refil'+_0x472960(0x326)+_0x472960(0x54b)+'pon\x27s'+_0x472960(0x5d4)+'ed\x20am'+_0x472960(0x546)+'\x20999\x20'+'every'+_0x472960(0x630)+'s.','hvUHZ':_0x472960(0x5c1)+'s\x20all'+_0x472960(0x432)+_0x472960(0x16b)+_0x472960(0x351)+_0x472960(0x47e)+_0x472960(0x5b1)+_0x472960(0x25f)+'us\x20ac'+_0x472960(0x687)+_0x472960(0x483)+'.','EkbTj':function(_0x10ed08,_0x2ee1d8,_0x15793f,_0x305e17){return _0x10ed08(_0x2ee1d8,_0x15793f,_0x305e17);},'iwjUx':_0x472960(0x5e7)+_0x472960(0x17c)+'oaty','BASkR':_0x472960(0x239)+'s\x20Mov'+_0x472960(0x48c)+_0x472960(0x3b9)+_0x472960(0x60a)+_0x472960(0x37a)+_0x472960(0x15d)+'\x20jump'+'\x20cool'+'down\x20'+_0x472960(0x465)+_0x472960(0x1a9)+'ies.','yzMce':function(_0x5b1cc1,_0x34361b,_0x538b67,_0x2b225e,_0xb2754b,_0x4f7c10){return _0x5b1cc1(_0x34361b,_0x538b67,_0x2b225e,_0xb2754b,_0x4f7c10);},'JjjiC':function(_0x31384a,_0x382980,_0x59336a,_0x58b7b8){return _0x31384a(_0x382980,_0x59336a,_0x58b7b8);},'qhhVx':'CPS\x20r'+_0x472960(0x4a6)+'t','dXODq':_0x472960(0x52f)+_0x472960(0x507)+'y.','vHTft':_0x472960(0x1bc)+_0x472960(0x658)+'ounte'+_0x472960(0x1ae)+_0x472960(0x294)+_0x472960(0x665)+_0x472960(0x3a6)+_0x472960(0x645)+_0x472960(0x158)+'ePlay'+'ers\x20t'+'o\x20pig'+'gybac'+_0x472960(0x28e),'pbWXl':'Safe\x20'+_0x472960(0x2bc)+_0x472960(0x105)+_0x472960(0x1be)+'nly)','szORZ':function(_0x1a718b,_0xfcb221){return _0x1a718b(_0xfcb221);},'MdZer':_0x472960(0x477)+_0x472960(0x367)+_0x472960(0x183)+_0x472960(0x318)+_0x472960(0x4b1)+'tramp'+_0x472960(0x45c)+_0x472960(0x205)+_0x472960(0x320)+_0x472960(0x1f0)+_0x472960(0x44b)+'load.'+'\x20ALL\x20'+_0x472960(0x29c)+_0x472960(0x303)+_0x472960(0x117)+'-\x20a\x20s'+_0x472960(0xf4)+'ure\x20t'+'hat\x20d'+'oes\x20n'+_0x472960(0x64d)+'tch\x20t'+_0x472960(0x607)+_0x472960(0x28f)+'thod\x20'+'throw'+_0x472960(0x433)+'nctio'+'n\x20sig'+'natur'+_0x472960(0x646)+_0x472960(0x30e)+'\x27\x20the'+_0x472960(0x10e)+_0x472960(0x1d5)+'\x20is\x20c'+_0x472960(0x37d)+'.\x20Tur'+_0x472960(0x331)+_0x472960(0x438)+'one\x20a'+_0x472960(0x3e9)+'ime,\x20'+_0x472960(0x559)+_0x472960(0x198)+'d\x20see'+_0x472960(0x33c)+_0x472960(0x286)+_0x472960(0x684)+'\x20buil'+'d\x20cho'+_0x472960(0x55f)+'n.','pHlHV':'god\x20('+_0x472960(0x280)+'th.In'+_0x472960(0x5db)+'eTake'+_0x472960(0x301)+'h)','xVCPz':function(_0x407a37,_0x1efc46,_0x253012,_0xc743d3){return _0x407a37(_0x1efc46,_0x253012,_0xc743d3);},'qjZZn':function(_0x3aa776,_0x55ccc3,_0x25728e,_0xfe517c){return _0x3aa776(_0x55ccc3,_0x25728e,_0xfe517c);},'wQhpK':_0x472960(0x228)+'re\x20(S'+_0x472960(0x5ee)+_0x472960(0x47a)+_0x472960(0x612)+_0x472960(0x676)+_0x472960(0x184)+'d)','uplxm':_0x472960(0xfb)+'r','zhFQE':_0x472960(0x57d)+_0x472960(0x332)+'e\x20ser'+'ver-v'+_0x472960(0x158)+_0x472960(0x119)+_0x472960(0x524),'WdJNp':function(_0x801449,_0x4a1353,_0x3f3057){return _0x801449(_0x4a1353,_0x3f3057);},'PHuws':_0x472960(0x3e4)+_0x472960(0x256)+_0x472960(0x17a)+'inset'+':0;wi'+_0x472960(0x5d2)+_0x472960(0x3d8)+'heigh'+'t:100'+_0x472960(0x2c0)+'index'+_0x472960(0x59f)+'48364'+_0x472960(0x67d)+'nter-'+'event'+_0x472960(0x422)+'e','CBfbO':'posit'+_0x472960(0x256)+'ixed;'+_0x472960(0x63c)+_0x472960(0x689)+_0x472960(0x16a)+_0x472960(0x59f)+'48364'+'7;poi'+'nter-'+'event'+_0x472960(0x422)+'e;','DQudy':_0x472960(0x273)+'l','JiJSp':'Safet'+'y','bxNZG':_0x472960(0x23b)+'wn','Ljhvu':'#ffb3'+'c6','HbOoF':'ptHoH','PxNYr':_0x472960(0xf7),'nGdnG':'Sakur'+_0x472960(0x17e),'zzGcQ':_0x472960(0x197),'lHGUs':_0x472960(0x396),'CqmdS':_0x472960(0x5c8),'RndSl':function(_0x1e6168,_0x3dac42,_0x128909,_0x49dcae,_0x37751e,_0x5edebf,_0x4fb4e7,_0xe34758){return _0x1e6168(_0x3dac42,_0x128909,_0x49dcae,_0x37751e,_0x5edebf,_0x4fb4e7,_0xe34758);},'GqPAj':_0x472960(0x280)+'th','hrXbp':_0x472960(0x387)+_0x472960(0x37f),'BAecj':_0x472960(0x389)+_0x472960(0x5d1)+_0x472960(0x518)+'.Over'+_0x472960(0x5ed)+_0x472960(0x11a)+_0x472960(0x49a)+'on','lRMgO':_0x472960(0x408)+'ter','wZryc':'SetGa'+'meRun'+'ning','DmCpS':_0x472960(0x389)+'nPlat'+'forms'+_0x472960(0x135)+_0x472960(0x5ed)+'Movem'+_0x472960(0xe9),'RdtfA':_0x472960(0x67c)+_0x472960(0x569),'NGlVS':_0x472960(0xf0)+_0x472960(0x13f)+_0x472960(0x5e4)+_0x472960(0x4fb)+_0x472960(0x3cf)+'ailed'+':','lhyYg':function(_0x374ec6,_0xa1c4de,_0x106ebd){return _0x374ec6(_0xa1c4de,_0x106ebd);},'vpHaW':function(_0xd40bfb,_0x2334b5){return _0xd40bfb(_0x2334b5);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x472960(0x517)](location[_0x472960(0x24a)+_0x472960(0x4ce)]||''))return;if(window[_0x472960(0x3a5)+'URA_K'+'OUR__'])return;window[_0x472960(0x3a5)+_0x472960(0x492)+'OUR__']=!![];var _0x503a49='#ff6b'+'9d',_0x410bfb=_0x2ee71f['Ljhvu'],_0x42a435={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':'#ff6b'+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x315604={..._0x42a435};try{Object[_0x472960(0x51c)+'n'](_0x315604,JSON['parse'](localStorage[_0x472960(0x194)+'em'](_0x472960(0x2cd)+_0x472960(0x3a2)+_0x472960(0x497))||'{}'));}catch(_0x110a0f){}function _0x522f5e(){var _0x4c84ca=_0x472960,_0x237555={'RoyEY':_0x2ee71f['qcAft'],'AiwAm':_0x4c84ca(0x5fe),'OBQSv':function(_0x2edf50,_0x1074d5){var _0x26e782=_0x4c84ca;return _0x2ee71f[_0x26e782(0x2c9)](_0x2edf50,_0x1074d5);},'AULkx':function(_0x4bb645,_0x277236){var _0x4296e6=_0x4c84ca;return _0x2ee71f[_0x4296e6(0x3c5)](_0x4bb645,_0x277236);},'DJhHm':'\x20|\x20sh'+_0x4c84ca(0x506)+'\x20','KfBYD':_0x2ee71f['aBfvs'],'CAimi':_0x4c84ca(0x250)};if(_0x2ee71f[_0x4c84ca(0x57c)]==='ufEKi')try{localStorage[_0x4c84ca(0x480)+'em'](_0x2ee71f[_0x4c84ca(0x454)],JSON['strin'+'gify'](_0x315604));}catch(_0xfd4638){}else{if(!_0x4a589e)return;var _0x3abe24=_0x2f4740[_0x4c84ca(0x2b6)+_0x4c84ca(0x64e)];for(var _0x22d556=0x1385+0x128*-0x5+-0x1*0xdbd;_0x22d556<_0x3abe24[_0x4c84ca(0x2ee)+'h'];_0x22d556++){var _0x1140d5=_0x3abe24[_0x22d556][_0x4c84ca(0x35d)+'Selec'+'tor']('.sk-m'+_0x4c84ca(0x37c));_0x1140d5&&(_0x1140d5[_0x4c84ca(0x125)+_0x4c84ca(0x503)+'t'][_0x4c84ca(0x16a)+'Of'](_0x237555[_0x4c84ca(0x5bf)])===0x1a49+0x178f*-0x1+-0x2ba||_0x1140d5[_0x4c84ca(0x125)+_0x4c84ca(0x503)+'t'][_0x4c84ca(0x16a)+'Of'](_0x237555[_0x4c84ca(0x3cc)])===-0x5*-0x215+0x548+-0x1*0xfb1)&&(_0x1140d5[_0x4c84ca(0x125)+'onten'+'t']=_0x47125b['safeM'+_0x4c84ca(0x379)]?_0x4c84ca(0x542)+_0x4c84ca(0x41d)+_0x4c84ca(0x3e7)+'rlay\x20'+_0x4c84ca(0x545)+_0x4c84ca(0x3a1)+'ooks\x20'+'(relo'+_0x4c84ca(0x159)+_0x4c84ca(0x652)+')':_0x48e8ce[_0x4c84ca(0x443)]?_0x237555['OBQSv'](_0x237555['OBQSv'](_0x237555['OBQSv'](_0x237555[_0x4c84ca(0x284)](_0x237555['OBQSv'](_0x4c84ca(0x577)+'bound'+'\x20'+(_0x3f6693[_0x4c84ca(0x4d8)+_0x4c84ca(0x4ca)]?_0x325595[_0x4c84ca(0x4d8)+'Ok']+'/'+_0x5d7a83['hooks'+_0x4c84ca(0x4ca)]+(_0x4c84ca(0x1de)+'s'):_0x4c84ca(0x2a7)+_0x4c84ca(0x1e1)+_0x4c84ca(0x1a3)+'all\x20o'+'ff)'),_0x4c84ca(0x204)+_0x4c84ca(0x200))+(_0x2bd5d5[_0x4c84ca(0x291)+_0x4c84ca(0xf3)]?'loade'+'d':_0x4c84ca(0x470)+'ng'),_0x237555[_0x4c84ca(0x4f0)]),_0x1dd2be[_0x4c84ca(0x2a2)+_0x4c84ca(0x410)]?_0x237555['KfBYD']:'none'),_0x4c84ca(0x348)+_0x4c84ca(0x62e)+'t\x20'),_0x1c6fd0[_0x4c84ca(0x223)+'ents']?_0x4c84ca(0x2cc):_0x237555['CAimi'])+(_0x4d7d8c[_0x4c84ca(0x2d2)+_0x4c84ca(0x5df)]?_0x4c84ca(0x44f)+_0x4c84ca(0x4ff)+_0x1a7027[_0x4c84ca(0x2d2)+_0x4c84ca(0x5df)]:''):_0x4c84ca(0x577)+'MISSI'+'NG\x20-\x20'+'overl'+_0x4c84ca(0x57a)+_0x4c84ca(0x1ab)+_0x4c84ca(0x613)+_0x4c84ca(0x2e6)+_0x4c84ca(0x3b6)+_0x4c84ca(0x278)+'ipt)');}}}var _0x3ab4d7={'uwmk':!!window[_0x472960(0x3c0)+_0x472960(0x2a3)+_0x472960(0x5b0)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x315604[_0x472960(0x48a)+'ode'],'lastError':''};try{if(_0x472960(0x514)===_0x2ee71f['HbOoF'])window['addEv'+'entLi'+'stene'+'r'](_0x2ee71f[_0x472960(0x375)],_0x450d4d=>{var _0x1f8e3a=_0x472960;if(_0x2ee71f[_0x1f8e3a(0x4dc)]('LEZYt',_0x2ee71f[_0x1f8e3a(0x1c1)]))return _0x3f9280[_0x1f8e3a(0x182)](_0x2ee71f['AWomY'],_0x41e311,_0x5282e7&&_0xa7453b[_0x1f8e3a(0x19b)+'ge']),null;else try{var _0x732eb0=_0x450d4d&&(_0x450d4d['messa'+'ge']||_0x450d4d[_0x1f8e3a(0xf7)]&&_0x450d4d['error']['messa'+'ge'])||'unkno'+'wn';if(_0x450d4d&&_0x450d4d['filen'+'ame'])_0x732eb0+=_0x2ee71f[_0x1f8e3a(0x2c9)]('\x20@\x20'+String(_0x450d4d['filen'+_0x1f8e3a(0x4ce)])[_0x1f8e3a(0x5a2)]('/')[_0x1f8e3a(0x192)]()+':',_0x450d4d['linen'+'o']||'?');_0x3ab4d7[_0x1f8e3a(0x2d2)+'rror']=_0x2ee71f['QDDQT'](String,_0x732eb0)[_0x1f8e3a(0xed)](-0x1136*0x2+0x9e9+0x5*0x4e7,0x15be+0x25ff*-0x1+0x1d*0x95);}catch(_0x3194e0){}});else{var _0x5f6c64=_0x2b8eb6['capMo'+'ve'];if(_0x5f6c64)try{_0x5f6c64[_0x472960(0x172)+'ed']=![];}catch(_0x2ec44c){}}}catch(_0x332077){}var _0x4016d9=null,_0x4f13c4=null,_0x1bcc17={},_0x7c2de=[],_0x50a12f=[],_0x4fad8f=new Map();function _0x52374d(_0x25983d,_0x2d6066){var _0x43a2f5=_0x472960;if(!_0x2d6066||_0x25983d[_0x43a2f5(0x426)+_0x43a2f5(0x5be)](_0x2d6066)||_0x2ee71f[_0x43a2f5(0x3f9)](_0x25983d[_0x43a2f5(0x2ee)+'h'],0x690+-0x139b+-0x29*-0x53))return;_0x25983d[_0x43a2f5(0x3d3)](_0x2d6066);}function _0x54c685(_0x11654f,_0xf2d212,_0x1d3b08,_0x3597b4){var _0x2568a4=_0x472960,_0x281012={'zXeUS':_0x2568a4(0x4a8)+_0x2568a4(0x59a),'VUKyj':_0x2ee71f['BCjHs']};if(_0x2568a4(0x121)!=='kXUoq'){var _0x59b65f=0x1816+0x14cf+-0x2ce5;try{_0x59b65f=_0xf2d212&&_0xf2d212[_0x2568a4(0x3ee)]?_0xf2d212[_0x2568a4(0x3ee)]():0x190b+-0x12f3+0x78*-0xd;}catch(_0x2d46df){}if(!_0x59b65f)return;_0x52374d(_0x11654f,_0x59b65f),_0x1d3b08[_0x3597b4]=_0x11654f[_0x2568a4(0x2ee)+'h'];if(_0x2ee71f['WdlyN'](_0x3597b4,_0x2568a4(0x223)+_0x2568a4(0x59e))&&_0x11654f['lengt'+'h']){var _0x202089=_0x1bcc17[_0x2568a4(0x335)+'ve'];if(_0x202089){if(_0x2ee71f['xoICp']!==_0x2568a4(0x2c5)){var _0x2a6bbd=_0x2c8782['getEl'+_0x2568a4(0x48c)+_0x2568a4(0x314)](_0x43e086);if(_0x2a6bbd&&_0x31aab5===_0x2568a4(0x290)+'creen'+'-banr'+'s'){var _0x487d1b=_0x2a6bbd[_0x2568a4(0x2b6)+_0x2568a4(0x64e)];for(var _0x22b272=0x231d*-0x1+0x8*0x3ea+0x3cd;_0x22b272<_0x487d1b[_0x2568a4(0x2ee)+'h'];_0x22b272++){if(_0x487d1b[_0x22b272]['id']&&_0x487d1b[_0x22b272]['id']['index'+'Of'](_0x281012[_0x2568a4(0x103)])===0x1*-0x4f+0xa66*-0x2+-0x709*-0x3)_0x487d1b[_0x22b272]['style'][_0x2568a4(0x484)+'ay']='none';}}else{if(_0x2a6bbd)_0x2a6bbd['style']['displ'+'ay']=_0x281012['VUKyj'];}}else try{if(_0x2ee71f[_0x2568a4(0x3e0)](_0x2ee71f['NMcmP'],_0x2568a4(0x504)))_0x202089['enabl'+'ed']=![];else try{_0x5da106['setIt'+'em']('sakur'+'a.kou'+'r.v1',_0x136739['strin'+_0x2568a4(0x3af)](_0x288103));}catch(_0x5e237b){}}catch(_0x1663cb){}}}}else _0x57c843[_0x2568a4(0x445)+'moExp']=_0x3eecc1,_0xa2bbc7();}function _0x40d3cf(_0xdf11ee,_0x2ab1e4,_0x258964){var _0x183c9c=_0x472960,_0x385532=_0x4fad8f['get'](_0xdf11ee);!_0x385532&&(_0x385532=new Map(),_0x4fad8f[_0x183c9c(0x2b0)](_0xdf11ee,_0x385532));if(!_0x385532['has'](_0x2ab1e4)){if(_0x2ee71f[_0x183c9c(0x5cd)](_0x2ee71f[_0x183c9c(0xe7)],_0x183c9c(0x153)))_0x3e8830['adblo'+'ck']=_0x1a7e3e,_0x2dbf2b();else try{var _0x414468=new _0x4016d9(_0xdf11ee)['readF'+_0x183c9c(0x179)](_0x2ab1e4,_0x258964);_0x385532[_0x183c9c(0x2b0)](_0x2ab1e4,_0x414468!==undefined?_0x414468['val']():null);}catch(_0x4e7ff3){_0x385532[_0x183c9c(0x2b0)](_0x2ab1e4,null);}}return _0x385532[_0x183c9c(0x399)](_0x2ab1e4);}function _0x2666d1(_0x271e7f,_0xd5dd57,_0x3de58e,_0x3497c9){var _0x5ae1c0=_0x472960;try{new _0x4016d9(_0x271e7f)[_0x5ae1c0(0x247)+'Field'](_0xd5dd57,_0x3de58e,_0x3497c9);}catch(_0x2e24dd){}}function _0x2270d5(_0x10df10,_0xb37c49){var _0x27d98e=_0x472960,_0x440353={'Gvjqh':_0x2ee71f[_0x27d98e(0x487)],'WeRuk':function(_0x2ab4e7,_0x4f668f){var _0x432e2d=_0x27d98e;return _0x2ee71f[_0x432e2d(0x463)](_0x2ab4e7,_0x4f668f);},'stKdq':'compl'+_0x27d98e(0x126)};try{if(_0x2ee71f['MbcqW']===_0x27d98e(0x38e)){if(_0x1a4d33[_0x27d98e(0x363)]&&(_0x5d66bb[_0x27d98e(0x2e2)+'State']===_0x440353['Gvjqh']||_0x440353[_0x27d98e(0x53e)](_0x2b048e[_0x27d98e(0x2e2)+'State'],_0x440353['stKdq'])))_0x23a992();else _0xb6a406[_0x27d98e(0x586)+_0x27d98e(0x4c4)+'stene'+'r']('DOMCo'+_0x27d98e(0xf2)+'Loade'+'d',_0x244e68,{'once':!![]});}else{var _0x10c44e=new _0x4016d9(_0x10df10)['readF'+_0x27d98e(0x179)](_0xb37c49,_0x2ee71f['SjXzH']);return _0x10c44e?_0x10c44e['val']():0x1940*-0x1+0x4*0x6d+0x178c;}}catch(_0x492ffe){if(_0x27d98e(0x281)==='fAgfE')_0x4a0fa3[_0x27d98e(0x363)][_0x27d98e(0x18f)+'dChil'+'d'](_0x469d64);else return-0xd4*0x24+-0x721*-0x3+0x86d;}}function _0x2b0aa8(_0x2c6904,_0x5a675e,_0xa0329d,_0x4c23a2){var _0x214c91=_0x472960;if(_0x214c91(0x3c9)!==_0x214c91(0x3c9))try{_0x4501a6['setIt'+'em'](_0x2ee71f[_0x214c91(0xff)],_0x5a081f[_0x214c91(0x2c3)+_0x214c91(0x3af)](_0x2406cb));}catch(_0x51cefa){}else{var _0x1c24ca=_0x2ee71f['zKznl'](_0x40d3cf,_0x2c6904,_0x5a675e,_0xa0329d);if(_0x1c24ca!=null)_0x2ee71f['FwhAJ'](_0x2666d1,_0x2c6904,_0x5a675e,_0xa0329d,_0x1c24ca*_0x4c23a2);}}function _0x33a0ad(_0x446fc9,_0x8d20fa,_0x3354a1,_0x4e4130,_0x46d70b,_0x3cbfaf,_0x1c7d5e){var _0x25595b=_0x472960;try{var _0x55c2c9=_0x4f13c4['hookP'+_0x25595b(0x5e5)]({'typeName':_0x8d20fa,'methodName':_0x3354a1,'params':_0x4e4130,'returnType':_0x46d70b},_0x3cbfaf);return _0x55c2c9[_0x25595b(0x172)+'ed']=_0x2ee71f['cPAav'](_0x1c7d5e,![]),_0x1bcc17[_0x446fc9]=_0x55c2c9,_0x3ab4d7[_0x25595b(0x4d8)+_0x25595b(0x4ca)]++,_0x55c2c9;}catch(_0x3ffe83){return console['warn'](_0x25595b(0xf0)+_0x25595b(0x13f)+_0x25595b(0x5da)+_0x25595b(0x12e)+'eg\x20fa'+_0x25595b(0xe4),_0x446fc9,_0x3ffe83&&_0x3ffe83[_0x25595b(0x19b)+'ge']),null;}}function _0x32fe2f(_0x48f352,_0x5e4193,_0x4ca441,_0x1e1fbc,_0x196248,_0x4f5bce,_0x3bc715){var _0x32ccbc=_0x472960;try{var _0xe94263=_0x4f13c4['hookP'+'ostfi'+'x']({'typeName':_0x5e4193,'methodName':_0x4ca441,'params':_0x1e1fbc,'returnType':_0x196248},_0x4f5bce);return _0xe94263[_0x32ccbc(0x172)+'ed']=_0x2ee71f[_0x32ccbc(0x618)](_0x3bc715,![]),_0x1bcc17[_0x48f352]=_0xe94263,_0x3ab4d7['hooks'+_0x32ccbc(0x4ca)]++,_0xe94263;}catch(_0x36d67d){if(_0x2ee71f[_0x32ccbc(0x18d)](_0x2ee71f[_0x32ccbc(0x2ca)],_0x2ee71f[_0x32ccbc(0x2ca)]))return console['warn'](_0x2ee71f[_0x32ccbc(0x37b)],_0x48f352,_0x36d67d&&_0x36d67d['messa'+'ge']),null;else{var _0x3d9ddd=_0x16f272['creat'+_0x32ccbc(0x5e3)+'ent'](_0x32ccbc(0x5af));_0x3d9ddd[_0x32ccbc(0x409)+_0x32ccbc(0x277)]=_0x32ccbc(0x128)+'nt',_0x3d9ddd[_0x32ccbc(0x125)+_0x32ccbc(0x503)+'t']=_0x5e154b,_0x9fdefd[_0x32ccbc(0x18f)+_0x32ccbc(0xf8)+'d'](_0x3d9ddd);}}}var _0x4c3136=()=>![];try{if(window['Unity'+'WebMo'+'dkit']&&!_0x315604['safeM'+'ode']){if('tKZoU'!==_0x472960(0x3f5))_0x526210['class'+_0x472960(0x199)][_0x472960(0x2f9)+'e']('on',_0x124fdb),_0x5dc61e(_0x4902b0);else{_0x4016d9=window[_0x472960(0x3c0)+_0x472960(0x2a3)+_0x472960(0x5b0)]['Value'+'Wrapp'+'er'],_0x4f13c4=window[_0x472960(0x3c0)+_0x472960(0x2a3)+_0x472960(0x5b0)][_0x472960(0x2cf)+'me'][_0x472960(0x46f)+'ePlug'+'in']({'name':_0x2ee71f[_0x472960(0x3b1)],'version':_0x2ee71f[_0x472960(0x431)],'referencedAssemblies':['Assem'+'bly-C'+_0x472960(0x373)+_0x472960(0x2d3)]});if(_0x315604[_0x472960(0x683)+'od'])_0x33a0ad(_0x2ee71f['lHGUs'],'OHeal'+'th','Initi'+_0x472960(0x2f5)+'keHea'+'lth',['i32',_0x2ee71f[_0x472960(0x14d)]],undefined,_0x4c3136,!!_0x315604['god']);if(_0x315604[_0x472960(0x683)+_0x472960(0x561)])_0x2ee71f['RndSl'](_0x33a0ad,_0x472960(0x3f0)+'e',_0x2ee71f[_0x472960(0x149)],'Local'+_0x472960(0x362),[_0x472960(0x5c8),_0x2ee71f[_0x472960(0x14d)],'i32','i32','i32'],undefined,_0x4c3136,!!_0x315604[_0x472960(0x396)]);if(_0x315604['hookN'+'oReco'+'il'])_0x33a0ad(_0x2ee71f[_0x472960(0x29f)],_0x2ee71f['BAecj'],'Tick',[_0x2ee71f['CqmdS']],undefined,_0x4c3136,!!_0x315604[_0x472960(0x387)+_0x472960(0x37f)]);if(_0x315604[_0x472960(0x659)+'aptur'+'e'])_0x32fe2f(_0x472960(0x146)+_0x472960(0x506),_0x2ee71f[_0x472960(0x2df)],_0x2ee71f[_0x472960(0x355)],[_0x472960(0x5c8),_0x2ee71f[_0x472960(0x14d)]],undefined,(_0x1a6d30,_0x3e04b1)=>{_0x2ee71f['nXGrL'](_0x54c685,_0x50a12f,_0x3e04b1,_0x3ab4d7,_0x2ee71f['zCqrE']);},!![]);if(_0x315604['hookC'+_0x472960(0x580)+'e'])_0x32fe2f('capMo'+'ve',_0x2ee71f[_0x472960(0x472)],_0x2ee71f[_0x472960(0x112)],[_0x472960(0x5c8)],_0x472960(0x5c8),(_0x177887,_0x3bf14b)=>{var _0x68d1da=_0x472960;if(_0x2ee71f[_0x68d1da(0x1e9)](_0x68d1da(0x2e3),'IsZpj'))_0x54c685(_0x7c2de,_0x3bf14b,_0x3ab4d7,_0x68d1da(0x223)+'ents');else try{_0x3e7939['body'][_0x68d1da(0x18f)+_0x68d1da(0xf8)+'d'](_0x4efb7b);}catch(_0x33faea){}},!![]);}}}catch(_0x3c2dae){console['warn'](_0x2ee71f[_0x472960(0x5b3)],_0x3c2dae&&_0x3c2dae['messa'+'ge']);}function _0x4d021b(_0x3c9257,_0x1ebbd1){var _0x2a2c7c=_0x472960,_0x3c32fc=_0x1bcc17[_0x3c9257];if(_0x3c32fc){if(_0x2a2c7c(0x2ce)!==_0x2a2c7c(0x316))try{_0x3c32fc[_0x2a2c7c(0x172)+'ed']=!!_0x1ebbd1;}catch(_0x1c73fc){}else{var _0x30f0a3=new _0x5dac59(_0x586274)[_0x2a2c7c(0x5a1)+'ield'](_0x5828cb,_0x4aaa0a);_0x40dc2b['set'](_0x38f543,_0x30f0a3!==_0x380108?_0x30f0a3['val']():null);}}}_0x2ee71f[_0x472960(0x1f9)](setInterval,()=>{var _0x635435=_0x472960;if(!_0x4016d9||!window['unity'+_0x635435(0x1db)+_0x635435(0x450)])return;var _0x3d7e53=(Number(_0x315604['speed'+'Pct'])||0xb*0x177+0x1c2+0x1*-0x117b)/(0x429+0xc*-0x327+0x220f*0x1),_0xffab76=(_0x2ee71f[_0x635435(0x12b)](Number,_0x315604[_0x635435(0x13d)+'ct'])||-0xe7+0x178d+0x197*-0xe)/(0x88+-0x71*0x3b+0x13*0x15d),_0x544d96=(_0x2ee71f[_0x635435(0x12b)](Number,_0x315604[_0x635435(0x1a6)+_0x635435(0x67a)])||0x22*0x83+-0x274+0x36*-0x45)/(0x126+0x45*0x8a+-0x25f4),_0x254b3f=Math['max'](-0x64d*0x2+-0x1444+-0x63*-0x55,Number(_0x315604[_0x635435(0x688)+'eValu'+'e'])||0x5e8*0x3+0x95*-0x29+0x6bb),_0x1f844a=_0x3d7e53!==0x13*-0x1b7+-0x1e68+0x5ba*0xb||_0xffab76!==0x8d7+-0x408*-0x1+-0xb7*0x12||_0x544d96!==-0x9*0xa9+0x47e+-0x5d*-0x4||_0x315604[_0x635435(0x62c)],_0x41ce41=_0x315604['noSpr'+_0x635435(0x39e)]||_0x315604[_0x635435(0x688)+_0x635435(0x56b)]||_0x315604[_0x635435(0x445)+_0x635435(0x651)]||_0x315604[_0x635435(0x196)+_0x635435(0x55e)];if(!_0x1f844a&&!_0x41ce41)return;try{for(var _0x450baa=0x87+-0xf*-0x1b5+-0x1a22;_0x2ee71f['jyYTh'](_0x450baa,_0x7c2de['lengt'+'h']);_0x450baa++){var _0x1ffff3=_0x7c2de[_0x450baa];if(!_0x1ffff3)continue;if(_0x3d7e53!==-0xfb*-0x1+-0x1529+0x142f){var _0x421ef3=_0x2ee71f['ufzmL'][_0x635435(0x5a2)]('|'),_0x26e184=0xbeb*0x3+0x1d7a+-0x413b;while(!![]){switch(_0x421ef3[_0x26e184++]){case'0':_0x2b0aa8(_0x1ffff3,0x5cb+-0x129a+0xcfb,'f32',_0x3d7e53);continue;case'1':_0x2ee71f[_0x635435(0x1ba)](_0x2b0aa8,_0x1ffff3,0x8*-0x482+0x1*-0x14c0+0x38f0,_0x635435(0x31d),_0x3d7e53);continue;case'2':_0x2ee71f['FwhAJ'](_0x2b0aa8,_0x1ffff3,0x1090+-0x1e*-0xc5+-0x2776,_0x635435(0x31d),_0x3d7e53);continue;case'3':_0x2ee71f[_0x635435(0x2dd)](_0x2b0aa8,_0x1ffff3,0x2*0x46d+0x1bc6+0x3*-0xc28,'f32',_0x3d7e53);continue;case'4':_0x2ee71f[_0x635435(0x161)](_0x2b0aa8,_0x1ffff3,0xb8+-0x1*0xfcf+0xf33,_0x635435(0x31d),_0x3d7e53);continue;case'5':_0x2b0aa8(_0x1ffff3,-0xd7b+0xa*-0x284+0x26d7,_0x2ee71f[_0x635435(0x512)],_0x3d7e53);continue;}break;}}if(_0xffab76!==0x9a8+0x18ad+-0x2254)_0x2b0aa8(_0x1ffff3,-0x11a*0x18+0x3*0xa23+-0x3a9,'f32',_0xffab76);if(_0x2ee71f['CTRTl'](_0x544d96,0x6d4+-0x714+0x41)){if(_0x2ee71f[_0x635435(0x217)](_0x635435(0x3c4),'OsHpu')){if(!_0x5a1023[_0x635435(0x628)+_0x635435(0x264)])_0x2a9ab4[_0x635435(0x670)+'e'](_0x2ee71f['ZrmxS'](_0x2ee71f[_0x635435(0x567)],_0x1ed6eb['butto'+'n']+(0x25d9+-0x18+-0x2*0x12e0)));}else _0x2b0aa8(_0x1ffff3,-0x1199+-0x4bd+0x169e,'f32',_0x544d96),_0x2ee71f['sEvHD'](_0x2b0aa8,_0x1ffff3,-0x1*0x1f49+0x2ba*-0x5+0x5*0x90b,_0x2ee71f[_0x635435(0x512)],_0x544d96);}if(_0x315604[_0x635435(0x62c)])_0x2ee71f[_0x635435(0x2aa)](_0x2666d1,_0x1ffff3,0x355*0x9+-0x2576+0x815,_0x635435(0x31d),-(0x7bc+0x11*0xec+-0x1381));}}catch(_0x40f80b){}try{for(var _0x5af3f2=-0x2550+-0xeb9+0x3409;_0x5af3f2<_0x50a12f[_0x635435(0x2ee)+'h'];_0x5af3f2++){var _0x32ecfa=_0x2ee71f[_0x635435(0x1f9)](_0x2270d5,_0x50a12f[_0x5af3f2],0x2*0xb7e+-0x1648+-0x1f*0x4);if(!_0x32ecfa)continue;_0x315604['damag'+_0x635435(0x56b)]&&(_0x2ee71f[_0x635435(0x530)](_0x2666d1,_0x32ecfa,0x24ec+-0x2675+0x1d5,_0x635435(0x5c8),_0x254b3f),_0x2ee71f[_0x635435(0x2aa)](_0x2666d1,_0x32ecfa,-0xdb6+-0x701+0x150b,'i32',_0x254b3f));_0x315604[_0x635435(0x61b)+_0x635435(0x39e)]&&(_0x2ee71f['JeuSh'](_0x635435(0xf6),_0x635435(0xf6))?(_0x5b791b['hookG'+'od']=_0x1683ef,_0x2c3eae['hookG'+'odDie']=_0xa6314a,_0x57a996['hookN'+_0x635435(0x220)+'il']=_0x25f232,_0x25dc57[_0x635435(0x659)+_0x635435(0x580)+'e']=_0x12fc00,_0x2ee71f[_0x635435(0x4cb)](_0x1de98f),_0x59e246['reloa'+'d']()):(_0x2666d1(_0x32ecfa,-0x24e8+-0x1921+0x3e91,_0x635435(0x31d),0x1*0x1fae+0x2294+0x2121*-0x2),_0x2666d1(_0x32ecfa,-0x54b*0x5+0x16ab+0x434,_0x2ee71f[_0x635435(0x512)],-0xb*0x1cb+-0x22a1+0x4f1*0xb)));if(_0x315604['infAm'+_0x635435(0x651)])_0x2666d1(_0x32ecfa,0x17*0xc9+-0x6*-0x49+0x1369*-0x1,_0x635435(0x5c8),-0x24b*0x6+0xe1*-0x24+0x314d);_0x315604[_0x635435(0x196)+'Exp']&&(_0x2b0aa8(_0x32ecfa,0x13a*0x6+0x1d7b+-0x244b,_0x635435(0x31d),-0x230e+-0x10be+0x33cc+0.1),_0x2ee71f[_0x635435(0x64a)](_0x2666d1,_0x32ecfa,-0xeab+-0x25*-0xd3+-0xf74,'f32',-0x47*-0x4+0x2*-0x342+0x568+0.1));}}catch(_0x447ec8){}},0x1b*0x13d+-0xf4d*0x2+-0x20d),_0x2ee71f['lhyYg'](setInterval,()=>{var _0x182dcb=_0x472960;_0x3ab4d7[_0x182dcb(0x291)+_0x182dcb(0xf3)]=!!window[_0x182dcb(0x538)+_0x182dcb(0x1db)+_0x182dcb(0x450)];try{var _0x16e92e=0x20a2*-0x1+0x1a5f+0x643;for(var _0x47d61d in _0x1bcc17){if(_0x1bcc17[_0x47d61d]&&_0x1bcc17[_0x47d61d]['appli'+'ed'])_0x16e92e++;}_0x3ab4d7['hooks'+'Ok']=_0x16e92e;}catch(_0x15e6b9){}},-0x1562+0x198+0x2*0xbd9);var _0x2be854=new Set(),_0x501850={0x1:[],0x3:[]},_0x43ec0c=![];function _0x365de9(_0x394b00){var _0x2fe439=_0x472960;_0x2be854['add'](_0x394b00[_0x2fe439(0x272)]);}function _0x154388(_0x4aa3e4){var _0x485029=_0x472960;_0x2be854[_0x485029(0x670)+'e'](_0x4aa3e4['code']);}function _0x53b9a0(_0x5e894c){var _0x1ecb91=_0x472960;if(_0x5e894c['__sak'+'ura'])return;_0x2be854['add'](_0x1ecb91(0x5a5)+(_0x5e894c['butto'+'n']+(-0x7*-0x515+-0xab+-0x22e7)));var _0x41ce75=_0x501850[_0x2ee71f[_0x1ecb91(0x229)](_0x5e894c[_0x1ecb91(0x31c)+'n'],0x3b*-0xd+0x3f1*-0x2+0x571*0x2)];if(_0x41ce75){if(_0x2ee71f[_0x1ecb91(0x5cd)](_0x1ecb91(0x1bb),_0x2ee71f['VGLeK'])){_0x41ce75[_0x1ecb91(0x3d3)](performance[_0x1ecb91(0x3ac)]());if(_0x2ee71f[_0x1ecb91(0x275)](_0x41ce75[_0x1ecb91(0x2ee)+'h'],-0x1f73*-0x1+-0x17b1+-0x79a))_0x41ce75[_0x1ecb91(0x4c0)]();}else _0x26aac9[_0x1ecb91(0x2fc)]=_0x4906b3,_0x2ee71f['iwjiU'](_0x6bde5b);}}function _0x41ad41(_0x4d3683){var _0x256ae1=_0x472960;if(!_0x4d3683['__sak'+_0x256ae1(0x264)])_0x2be854[_0x256ae1(0x670)+'e'](_0x2ee71f['YkDfV']+(_0x4d3683['butto'+'n']+(0x1b25*0x1+-0x2*0x1a3+-0x17de)));}function _0x5078ba(){_0x2be854['clear']();}function _0x48d89e(){var _0x4be784=_0x472960;if('cRVuo'===_0x4be784(0x5a0)){var _0x546001=_0x2ee71f[_0x4be784(0x321)][_0x4be784(0x5a2)]('|'),_0x2c0faf=-0x11e8+-0x1e63+-0x13d*-0x27;while(!![]){switch(_0x546001[_0x2c0faf++]){case'0':window[_0x4be784(0x586)+'entLi'+'stene'+'r'](_0x2ee71f[_0x4be784(0x58f)],_0x41ad41,!![]);continue;case'1':_0x43ec0c=!![];continue;case'2':window['addEv'+_0x4be784(0x4c4)+_0x4be784(0x2f1)+'r'](_0x2ee71f[_0x4be784(0x4e4)],_0x5078ba);continue;case'3':if(_0x43ec0c)return;continue;case'4':window['addEv'+_0x4be784(0x4c4)+'stene'+'r'](_0x2ee71f['OBFOi'],_0x53b9a0,!![]);continue;case'5':window[_0x4be784(0x586)+_0x4be784(0x4c4)+'stene'+'r'](_0x4be784(0x3e3),_0x154388,!![]);continue;case'6':window['addEv'+_0x4be784(0x4c4)+_0x4be784(0x2f1)+'r']('keydo'+'wn',_0x365de9,!![]);continue;}break;}}else _0x515e0a=_0x3c44f2[_0x4be784(0x3eb)](_0x2ee71f['pFpFK'](_0x10529b*(-0x1f84*0x1+0x1e07*-0x1+-0xd17*-0x5),_0x570428-_0x3ba91b)),_0x391fd1=-0x3fc+-0x1623+0x1a1f,_0x10e09e=_0x2d855f;}function _0x3ed161(_0x57563b){var _0x78b6a9=_0x472960,_0x3faa2c=_0x501850[_0x57563b]||[],_0x293c0b=performance['now']();while(_0x3faa2c['lengt'+'h']&&_0x2ee71f[_0x78b6a9(0x4de)](_0x293c0b,_0x3faa2c[0x1deb+0x1ec0+-0x1f5*0x1f])>-0x26e*-0xe+-0xd40+-0x10dc)_0x3faa2c[_0x78b6a9(0x4c0)]();return _0x3faa2c[_0x78b6a9(0x2ee)+'h'];}function _0x312f08(_0x492ba8){var _0x53724b=_0x472960;if(document[_0x53724b(0x363)]&&(_0x2ee71f[_0x53724b(0x41a)](document['ready'+'State'],_0x53724b(0x547)+'activ'+'e')||_0x2ee71f['uQLbi'](document[_0x53724b(0x2e2)+'State'],'compl'+_0x53724b(0x126))))_0x492ba8();else document[_0x53724b(0x586)+_0x53724b(0x4c4)+'stene'+'r'](_0x53724b(0x15b)+_0x53724b(0xf2)+_0x53724b(0x560)+'d',_0x492ba8,{'once':!![]});}_0x2ee71f['vpHaW'](_0x312f08,()=>{var _0x761c5=_0x472960,_0x957269={'sRTNo':function(_0x1c009f,_0xa731a){return _0x1c009f!==_0xa731a;},'eNSaZ':'true','uPANE':'aria-'+'check'+'ed','pKZqq':function(_0x32e225,_0x12bfd6){return _0x2ee71f['QDDQT'](_0x32e225,_0x12bfd6);},'hvLzK':function(_0x2f0d99,_0x480d37){return _0x2f0d99===_0x480d37;},'QIhRb':function(_0x146012,_0x2fc27f){var _0x111a02=_0x1e6a;return _0x2ee71f[_0x111a02(0x376)](_0x146012,_0x2fc27f);},'enASA':_0x761c5(0x250),'NAuuG':'cente'+'r','UcVXq':function(_0x379979,_0x230682){return _0x379979-_0x230682;},'csggZ':function(_0x371eef,_0x2940fc){return _0x2ee71f['VnsuV'](_0x371eef,_0x2940fc);},'FPPhc':_0x2ee71f['fsBvg'],'KjDzr':function(_0x31a94a,_0x5cd8f8){var _0x1509c6=_0x761c5;return _0x2ee71f[_0x1509c6(0x56d)](_0x31a94a,_0x5cd8f8);},'OpNik':function(_0x1873fa,_0x530f63){return _0x1873fa*_0x530f63;},'Ohoze':function(_0x21094d,_0x1f178c){return _0x21094d===_0x1f178c;},'pwfYA':function(_0x334094,_0x4c8def){return _0x334094/_0x4c8def;},'Afzbe':'KeyW','abukQ':function(_0x5c0af5,_0x2fd963){return _0x5c0af5+_0x2fd963;},'YLYMq':_0x761c5(0x1b0),'yiaRn':function(_0x40c0a2,_0x446247){return _0x2ee71f['uONwM'](_0x40c0a2,_0x446247);},'ksWDh':function(_0x2b722c,_0x2c6632,_0xf78c3e,_0x241b8d,_0x5ad99b,_0x535dcb,_0x5a5dba){return _0x2b722c(_0x2c6632,_0xf78c3e,_0x241b8d,_0x5ad99b,_0x535dcb,_0x5a5dba);},'dbekH':function(_0x43e4cc,_0x5da90a){var _0x30dd98=_0x761c5;return _0x2ee71f[_0x30dd98(0x215)](_0x43e4cc,_0x5da90a);},'ZihjN':function(_0x1d4ec8,_0x5b5794){return _0x1d4ec8+_0x5b5794;},'EhjnQ':_0x761c5(0x56a),'kRcqz':_0x2ee71f['tInhR'],'kaBjW':'RMB','rTUwv':_0x761c5(0x5a5)+'3','ktIdn':_0x761c5(0x31f),'JNnIr':_0x761c5(0x380),'vTcGn':function(_0x20632c,_0x4f1896){return _0x20632c+_0x4f1896;},'fLdWG':_0x761c5(0x3a7),'YKZWW':_0x761c5(0x325)+'255,1'+'80,19'+_0x761c5(0x4ef)+')','JOykf':function(_0x2e0b2a,_0x3ee941){return _0x2e0b2a+_0x3ee941;},'lScHm':function(_0xe3975c,_0x2e083b){return _0xe3975c+_0x2e083b;},'xNnpU':_0x761c5(0x204)+_0x761c5(0x200),'BTdwQ':_0x2ee71f[_0x761c5(0x428)],'DdVTA':_0x761c5(0x2cc),'YuzQb':_0x761c5(0x44f)+_0x761c5(0x4ff),'Dbmwu':function(_0x763242,_0x31b7dd,_0x5914d5,_0x144412,_0x5c3bb7,_0x2004be){return _0x763242(_0x31b7dd,_0x5914d5,_0x144412,_0x5c3bb7,_0x2004be);},'DMibx':_0x761c5(0x1ed)+'s','VrqNd':_0x2ee71f[_0x761c5(0x2bb)],'TUZlS':_0x2ee71f['taiRP'],'reoek':function(_0x1531ad,_0x2a7dee){return _0x1531ad>=_0x2a7dee;},'QXqAV':function(_0x152dc3,_0x4c51c7){return _0x152dc3/_0x4c51c7;},'Vfilv':function(_0x8eb7c6){return _0x8eb7c6();},'Bwmwf':_0x761c5(0x31c)+'n','XxuEG':'sk-sw'+'itch','VKKBq':function(_0x3d0683,_0x23a840){return _0x2ee71f['QDDQT'](_0x3d0683,_0x23a840);},'GxrhK':_0x2ee71f[_0x761c5(0x402)],'Zumlg':function(_0x383d32,_0x400e09){return _0x383d32!==_0x400e09;},'fUiFH':'gQHug','oWScw':'XPcMA','tIEsD':_0x761c5(0x145),'YvSVV':_0x761c5(0x434),'lYPlA':_0x2ee71f[_0x761c5(0x116)],'ZCvar':function(_0x52c721){return _0x52c721();},'kqQrF':function(_0x396562){return _0x396562();},'arLft':function(_0x2df03b,_0x556a93){return _0x2df03b===_0x556a93;},'yNIvr':_0x2ee71f[_0x761c5(0x672)],'LUCTO':_0x2ee71f[_0x761c5(0x489)],'vrnXb':function(_0x5be708,_0x575a51){return _0x2ee71f['PRnfP'](_0x5be708,_0x575a51);},'dINel':_0x2ee71f[_0x761c5(0x54e)],'TGTAQ':'VKoZs','OiHPv':_0x2ee71f[_0x761c5(0x10b)],'xMDbw':function(_0x3d7005,_0x22c3a1){return _0x2ee71f['JmYdL'](_0x3d7005,_0x22c3a1);},'QNPxh':_0x2ee71f[_0x761c5(0x14f)],'HXQCn':_0x2ee71f[_0x761c5(0x598)],'RFKeb':function(_0x3cb78e,_0x3244c2){return _0x3cb78e+_0x3244c2;},'yCkKa':'\x20on','nSOhD':_0x761c5(0x1f2)+_0x761c5(0x45e)+'ad','eYMWY':'div','pUIUd':'0|4|3'+_0x761c5(0x667)+_0x761c5(0x370),'BJKYK':_0x761c5(0x240)+'ody','vHaih':_0x761c5(0x2da)+'arget'+_0x761c5(0x588)+_0x761c5(0x254),'LzzVC':_0x761c5(0x403),'hEUJQ':function(_0x3d554e){var _0x48cf53=_0x761c5;return _0x2ee71f[_0x48cf53(0x2e9)](_0x3d554e);},'zgkAM':'CANVA'+'S','YmUTc':function(_0x22d38b,_0x599dcc){var _0x14924f=_0x761c5;return _0x2ee71f[_0x14924f(0x2fa)](_0x22d38b,_0x599dcc);},'tIdfb':_0x2ee71f['vDxSP'],'QcnLa':_0x761c5(0x47f),'NpbbG':_0x761c5(0x2f4),'PEQVG':_0x2ee71f[_0x761c5(0x65d)],'PMpNX':function(_0x17952c){return _0x17952c();},'PkCYT':_0x761c5(0x210),'aGhvl':function(_0x185e0e){var _0xfba1fe=_0x761c5;return _0x2ee71f[_0xfba1fe(0x668)](_0x185e0e);},'VJExP':function(_0x3afc9a,_0x2eef2c,_0x19f00d){return _0x3afc9a(_0x2eef2c,_0x19f00d);},'TbdDX':_0x761c5(0x396),'WeEMX':_0x761c5(0x2cd)+_0x761c5(0x3a2)+'r.v1','MGpBX':_0x2ee71f['KjZkn'],'ZqOnV':_0x2ee71f[_0x761c5(0x3d0)],'mgeUh':'Skips'+_0x761c5(0x5e9)+'ilMot'+'ion.T'+'ick\x20s'+'o\x20the'+_0x761c5(0x107)+_0x761c5(0x674)+_0x761c5(0x12a)+'\x20neve'+'r\x20adv'+'ance.','DCQYB':function(_0x2854ef,_0x4638d5,_0x37ac8e,_0x5ac601,_0xf643e2,_0x8d145){return _0x2ee71f['Asuej'](_0x2854ef,_0x4638d5,_0x37ac8e,_0x5ac601,_0xf643e2,_0x8d145);},'lKUgx':_0x2ee71f['hLzmp'],'VWYlF':function(_0x34a2c0,_0x272dbd,_0x1584ed,_0x26895f,_0x46e754,_0x548b4c){return _0x34a2c0(_0x272dbd,_0x1584ed,_0x26895f,_0x46e754,_0x548b4c);},'DNqHD':_0x2ee71f[_0x761c5(0x26f)],'SSGCX':_0x2ee71f[_0x761c5(0x602)],'akZst':_0x2ee71f[_0x761c5(0x3d4)],'MCJzn':_0x761c5(0x5f5)+_0x761c5(0x65b)+'ult','fvZCN':_0x761c5(0x39f)+_0x761c5(0x5d9)+'vity','MMqTZ':_0x761c5(0x5c1)+_0x761c5(0x20b)+_0x761c5(0x48c)+_0x761c5(0x59d)+'Force'+_0x761c5(0x48f)+'both\x20'+_0x761c5(0x1a6)+_0x761c5(0x3a0)+'lues.','vSgGc':function(_0x19ccc1,_0x4efb64,_0x1956a3,_0x2b0898){return _0x2ee71f['EkbTj'](_0x19ccc1,_0x4efb64,_0x1956a3,_0x2b0898);},'SSaTS':function(_0x4dc3e7,_0x5eb42e,_0x57b1c5,_0x528923,_0x87ce42,_0x27b231){return _0x4dc3e7(_0x5eb42e,_0x57b1c5,_0x528923,_0x87ce42,_0x27b231);},'zIpAt':_0x2ee71f[_0x761c5(0x57e)],'JAPbl':_0x761c5(0x5fa)+_0x761c5(0x1da),'UJOsq':_0x2ee71f['BASkR'],'Zbhbc':function(_0x4bdc35,_0xd95732,_0x1da624,_0x17d377,_0x1e2edd,_0xf65766){var _0x264d49=_0x761c5;return _0x2ee71f[_0x264d49(0x40a)](_0x4bdc35,_0xd95732,_0x1da624,_0x17d377,_0x1e2edd,_0xf65766);},'sVKjg':_0x761c5(0x2a5)+'rokes','cmKiU':'WASD\x20'+_0x761c5(0x3fb)+_0x761c5(0x420)+_0x761c5(0x1df)+'ce\x20ov'+_0x761c5(0x4b4)+'.','NsPJy':'Botto'+'m\x20lef'+'t','Wwszz':function(_0x235583,_0x27a3e4,_0x31796d,_0x4fddf7){var _0x4fa50a=_0x761c5;return _0x2ee71f[_0x4fa50a(0x211)](_0x235583,_0x27a3e4,_0x31796d,_0x4fddf7);},'hyXKx':_0x2ee71f[_0x761c5(0x3f8)],'amqnd':'Size','lbMxt':function(_0x5f3a29,_0xc2fd92,_0x197fab,_0xf9a35,_0x1b224d,_0x23b12f){return _0x5f3a29(_0xc2fd92,_0x197fab,_0xf9a35,_0x1b224d,_0x23b12f);},'IRIzH':_0x761c5(0x302)+_0x761c5(0x410),'sBqUy':_0x2ee71f['dXODq'],'UgLwJ':function(_0x47e5c3,_0x43e258){return _0x47e5c3(_0x43e258);},'QgPtN':_0x2ee71f[_0x761c5(0x130)],'qQdNy':function(_0xd0ca11,_0x2c1cc7){return _0x2ee71f['YtaTl'](_0xd0ca11,_0x2c1cc7);},'JzAKl':'Hides'+'\x20kour'+_0x761c5(0x1b9)+_0x761c5(0x219)+_0x761c5(0x365)+'ots.','atdPM':'Takes'+'\x20effe'+'ct\x20on'+'\x20relo'+'ad\x20wh'+'en\x20to'+_0x761c5(0x206)+'.','EgSQE':_0x2ee71f[_0x761c5(0x562)],'QqTYZ':function(_0xf760f4,_0x2201af){return _0x2ee71f['szORZ'](_0xf760f4,_0x2201af);},'pdpVe':_0x2ee71f[_0x761c5(0x1e0)],'CnFBf':_0x761c5(0x22f)+_0x761c5(0x550)+'\x20relo'+_0x761c5(0x3bb),'zJWjy':_0x2ee71f[_0x761c5(0xea)],'izaCT':function(_0xa7bd29,_0x4c502f,_0x4501c9,_0x449567){return _0x2ee71f['xVCPz'](_0xa7bd29,_0x4c502f,_0x4501c9,_0x449567);},'WBHSm':_0x761c5(0x387)+'oil\x20('+'Recoi'+'lMoti'+'on.Ti'+'ck)','IeCFa':function(_0x211902,_0x22b92a,_0x58683e,_0x3f57be){var _0x4bfe8a=_0x761c5;return _0x2ee71f[_0x4bfe8a(0x40b)](_0x211902,_0x22b92a,_0x58683e,_0x3f57be);},'zgVfo':_0x2ee71f[_0x761c5(0x604)],'OSZSJ':function(_0x5cf61c,_0x20c952,_0x1e82ed){return _0x2ee71f['IxXix'](_0x5cf61c,_0x20c952,_0x1e82ed);},'smIfR':_0x2ee71f[_0x761c5(0x269)],'ElEpS':_0x2ee71f[_0x761c5(0x4e5)],'lTHYF':_0x761c5(0x60b),'dNzVV':'5|0|3'+'|4|1|'+'2','NySOl':_0x761c5(0x31d),'Veych':function(_0x447009,_0x34ecfa,_0xfbad5a,_0xafafb0,_0x21c10f){return _0x447009(_0x34ecfa,_0xfbad5a,_0xafafb0,_0x21c10f);},'AGxEo':function(_0x5007dd){return _0x5007dd();},'YPPbU':'Inser'+'t'};_0x315604['adblo'+'ck']&&_0x2ee71f['WdJNp'](setInterval,()=>{var _0x54b256=_0x761c5;try{for(var _0x10d6e4 of['kour-'+_0x54b256(0x2ed)+_0x54b256(0x3b4)+_0x54b256(0x109)+'nt','kour-'+_0x54b256(0x4cd)+_0x54b256(0x5f7)+'paren'+'t',_0x54b256(0x4a8)+_0x54b256(0x2ed)+_0x54b256(0x340)+'-pare'+'nt','fulls'+_0x54b256(0x4fa)+'-banr'+'s']){if(_0x54b256(0x617)===_0x54b256(0x617)){var _0x2f0b3f=document[_0x54b256(0x181)+'ement'+_0x54b256(0x314)](_0x10d6e4);if(_0x2f0b3f&&_0x957269['hvLzK'](_0x10d6e4,'fulls'+_0x54b256(0x4fa)+_0x54b256(0x50f)+'s')){var _0x425b8c=_0x2f0b3f['child'+'ren'];for(var _0x519400=-0x2*-0xdb4+0x1ca6+0x5*-0xb36;_0x957269[_0x54b256(0x101)](_0x519400,_0x425b8c[_0x54b256(0x2ee)+'h']);_0x519400++){if(_0x425b8c[_0x519400]['id']&&_0x425b8c[_0x519400]['id']['index'+'Of']('kour-'+_0x54b256(0x59a))===-0x2418+-0x10f5+0x350d)_0x425b8c[_0x519400][_0x54b256(0x13b)]['displ'+'ay']='none';}}else{if(_0x2f0b3f)_0x2f0b3f[_0x54b256(0x13b)]['displ'+'ay']=_0x957269['enASA'];}}else{_0x3641cd['stopP'+_0x54b256(0x4eb)+_0x54b256(0x483)]();var _0x5cab62=_0x957269[_0x54b256(0x36b)](_0x5db54f[_0x54b256(0x46d)+'tribu'+'te'](_0x54b256(0x677)+'check'+'ed'),_0x957269['eNSaZ']);_0x5ba460['setAt'+_0x54b256(0x4ac)+'te'](_0x957269['uPANE'],_0x957269['pKZqq'](_0x595434,_0x5cab62)),_0x52b126(_0x5cab62);}}}catch(_0x5e1b21){}},0x1*-0xd97+0x7*-0xff+0x1c60);var _0x205f6e=document['creat'+_0x761c5(0x5e3)+'ent']('canva'+'s');_0x205f6e['style']['cssTe'+'xt']=_0x2ee71f[_0x761c5(0x4ee)];var _0x2da936=_0x205f6e[_0x761c5(0x1b2)+'ntext']('2d');function _0x1d87f3(){var _0x2c9e6c=_0x761c5,_0x3f28af={'eedwE':function(_0x3f1171,_0x1fb360){return _0x3f1171(_0x1fb360);},'feFPI':'--p','NTPRd':function(_0x43200b,_0x1bcbdb){return _0x43200b*_0x1bcbdb;},'aCRcC':function(_0x375eab,_0x93bece){return _0x375eab/_0x93bece;},'FnSvu':function(_0x14412c,_0x67dc0a){var _0xa274a=_0x1e6a;return _0x2ee71f[_0xa274a(0x5bc)](_0x14412c,_0x67dc0a);}};try{var _0xac99a=document[_0x2c9e6c(0x290)+_0x2c9e6c(0x4fa)+_0x2c9e6c(0x43c)+'nt'],_0x529e14=_0xac99a&&_0x2ee71f[_0x2c9e6c(0x35b)](_0xac99a[_0x2c9e6c(0x244)+'me'],_0x2ee71f[_0x2c9e6c(0x381)])?_0xac99a:document['body']||document['docum'+'entEl'+'ement'];if(_0x205f6e[_0x2c9e6c(0x26b)+'tNode']!==_0x529e14)_0x529e14['appen'+'dChil'+'d'](_0x205f6e);}catch(_0xcea5d){try{_0x2c9e6c(0xf5)!=='GpxBu'?(_0x3aebcd['textC'+_0x2c9e6c(0x503)+'t']=_0x3f28af['eedwE'](_0x174c18,_0x591068[_0x2c9e6c(0x45d)]),_0x531768[_0x2c9e6c(0x13b)][_0x2c9e6c(0x429)+'opert'+'y'](_0x3f28af[_0x2c9e6c(0x600)],_0x3f28af[_0x2c9e6c(0x2db)](_0x3f28af[_0x2c9e6c(0x4d5)](_0x3f28af[_0x2c9e6c(0x574)](_0x6651fd['value'],_0x1639fe),_0x15b624-_0x6bcdb9),-0x24ed*-0x1+-0x2*0x45+-0x23ff)+'%')):document[_0x2c9e6c(0x363)][_0x2c9e6c(0x18f)+'dChil'+'d'](_0x205f6e);}catch(_0x1d4e33){}}}var _0x1269c0={'w':0x0,'h':0x0,'dpr':0x0};function _0x26219c(){var _0x107ed2=_0x761c5,_0x3ce1e6=window['devic'+_0x107ed2(0x165)+'lRati'+'o']||-0x1584+0x12af*0x2+-0xfd9,_0x4a7496=window[_0x107ed2(0x2d8)+_0x107ed2(0x47b)],_0x384bc7=window[_0x107ed2(0x2d8)+_0x107ed2(0x4ba)+'t'];if(_0x4a7496===_0x1269c0['w']&&_0x384bc7===_0x1269c0['h']&&_0x2ee71f['uQLbi'](_0x3ce1e6,_0x1269c0['dpr']))return;_0x1269c0['w']=_0x4a7496,_0x1269c0['h']=_0x384bc7,_0x1269c0['dpr']=_0x3ce1e6,_0x205f6e['width']=Math[_0x107ed2(0x3eb)](_0x2ee71f[_0x107ed2(0x605)](_0x4a7496,_0x3ce1e6)),_0x205f6e[_0x107ed2(0x583)+'t']=Math['round'](_0x2ee71f['Zcthi'](_0x384bc7,_0x3ce1e6)),_0x2da936[_0x107ed2(0x576)+_0x107ed2(0x293)+'rm'](_0x3ce1e6,-0x8*0x37c+-0x1*0x139d+0x2f7d,-0x7*0x125+0x2594+-0x1d91,_0x3ce1e6,0x1*-0x1d4d+0x2651+-0x904,-0x19ee+0x1213+0x7db);}var _0x386e08=0x3c*-0x71+0x1e4c+-0x4*0xf4,_0xc9f7e3=performance[_0x761c5(0x3ac)](),_0x127654=0x1ef3+-0x261d+0x1*0x72a;function _0x26e638(_0x3a8962){var _0x238d81=_0x761c5,_0xd01327={'zHHeK':function(_0x2918b6,_0x180e93){return _0x2918b6===_0x180e93;},'rboqb':_0x957269['NAuuG'],'yEfwX':function(_0x27bdc1,_0x13e1c5){return _0x27bdc1*_0x13e1c5;},'yUgCW':function(_0x25ad97,_0x125aeb){return _0x25ad97+_0x125aeb;},'XeVZa':function(_0x42e910,_0x3f7d9c){return _0x957269['UcVXq'](_0x42e910,_0x3f7d9c);},'oJrxy':function(_0x551eae,_0x4d5dcb){return _0x957269['csggZ'](_0x551eae,_0x4d5dcb);},'IMrZW':function(_0x56c8eb,_0x3d977b){return _0x56c8eb+_0x3d977b;},'Jwsmr':function(_0x248898,_0x50bf8b){return _0x248898+_0x50bf8b;},'ANIwQ':'600\x20','EiHdf':_0x957269[_0x238d81(0x338)],'oUzoa':_0x238d81(0x45f),'CrdYu':_0x238d81(0x325)+_0x238d81(0x2e7)+_0x238d81(0x511)+_0x238d81(0x333)+'5)'},_0x794ead=Number(_0x315604['ksSca'+'le'])||0x17*-0x12f+0x2643+0x19*-0x71,_0x471a46=(-0x82b+-0xa1*0xb+0x4*0x3ce)*_0x794ead,_0xc9af6d=_0x957269['KjDzr'](-0x1b*0x5e+-0xb08+0x14f6*0x1,_0x794ead),_0x56a0e0=_0x471a46*(-0x17f8+0xe4b*0x2+-0x49b)+_0xc9af6d*(0x65*-0x9+0x487*0x1+-0xf8),_0xeb4760=_0x471a46*(-0x5e*0x3+0x3*0x855+0x17e2*-0x1)+_0x957269[_0x238d81(0x23c)](_0xc9af6d,-0x1936+-0x13c2+0x2cfa),_0x5102a9=_0x315604[_0x238d81(0x2fc)],_0x534449=_0x5102a9==='br'?_0x957269[_0x238d81(0x5fb)](_0x3a8962[_0x238d81(0x49b)],-0x26c9+-0x2350+0x5*0xed5)-_0x56a0e0:_0x3a8962[_0x238d81(0x4a1)]+(-0x1d2b+0x7*-0x344+0x3417),_0x51d5c2=_0x957269[_0x238d81(0x5c2)](_0x5102a9,'ml')?_0x3a8962[_0x238d81(0x384)]+_0x957269['pwfYA'](_0x3a8962['heigh'+'t'],0x136*-0xc+-0x1c1*0xc+0x2396)-_0xeb4760/(0x1c24*-0x1+-0x101f+0x2c45):_0x957269[_0x238d81(0x5fb)](_0x3a8962['botto'+'m'],_0xeb4760)-(_0x5102a9==='bl'?-0x32b+0x10c7+0xb*-0x134:-0x6b*-0x1b+-0x1dd7+0x1324),_0x4ca7d3=(_0x2286e4,_0x74d694,_0x11bac2,_0x4be5c3,_0x65b3cd,_0x5c5057,_0x2b565b)=>{var _0x2457b9=_0x238d81,_0x87d144={'oCSWk':function(_0x58ebb6,_0x122d15){return _0x58ebb6*_0x122d15;},'BEmnt':function(_0x1d79f6,_0x296e45){return _0x1d79f6===_0x296e45;},'PFhfR':function(_0x5b5bc8,_0x3d9ba5){var _0x2fcee9=_0x1e6a;return _0xd01327[_0x2fcee9(0x4c3)](_0x5b5bc8,_0x3d9ba5);},'qWOsq':function(_0x559b4d,_0x3f4851){return _0x559b4d===_0x3f4851;}};if(_0x2457b9(0x525)!=='MjMON'){var _0x40c614=_0x2be854['has'](_0x74d694);_0x2da936['save'](),_0x2da936[_0x2457b9(0x2ea)+'Path']();if(_0x2da936['round'+_0x2457b9(0x110)])_0x2da936['round'+_0x2457b9(0x110)](_0x11bac2,_0x4be5c3,_0x65b3cd,_0x5c5057,(0x1*-0x1495+-0x1d04+0x31a0)*_0x794ead);else _0x2da936[_0x2457b9(0x5f3)](_0x11bac2,_0x4be5c3,_0x65b3cd,_0x5c5057);_0x2da936['fillS'+'tyle']=_0x40c614?'rgba('+_0x2457b9(0x535)+_0x2457b9(0x345)+_0x2457b9(0x3bc)+'5)':_0x2457b9(0x325)+_0x2457b9(0x1e7)+_0x2457b9(0x5a9)+'7)',_0x2da936['fill'](),_0x2da936[_0x2457b9(0x4b8)+'idth']=-0xce+-0xa65+0x3bc*0x3,_0x2da936['strok'+'eStyl'+'e']=_0x40c614?_0x410bfb:'rgba('+'255,1'+_0x2457b9(0x345)+_0x2457b9(0x32e)+'5)',_0x2da936[_0x2457b9(0x4f2)+'e'](),_0x40c614&&(_0x2da936[_0x2457b9(0x15a)+'wColo'+'r']=_0x503a49,_0x2da936[_0x2457b9(0x15a)+_0x2457b9(0x58e)]=-0x102*-0x11+0x22ba+-0x33ce,_0x2da936[_0x2457b9(0x54d)](),_0x2da936['shado'+'wBlur']=0x67*0xb+-0xba+0x1*-0x3b3),_0x2da936['fillS'+_0x2457b9(0x3d1)]=_0x40c614?'#fff':'rgba('+_0x2457b9(0x2e7)+_0x2457b9(0x511)+'0,0.8'+')',_0x2da936['textA'+_0x2457b9(0x24e)]=_0xd01327[_0x2457b9(0x249)],_0x2da936['textB'+_0x2457b9(0x65c)+'ne']='middl'+'e',_0x2da936[_0x2457b9(0x62b)]=_0x2457b9(0x543)+Math['round'](_0xd01327['yEfwX'](-0x8*-0x281+0x1*-0x1e1+-0x121b,_0x794ead))+('px\x20ui'+_0x2457b9(0x400)+_0x2457b9(0x2c1)+_0x2457b9(0x5f4)+_0x2457b9(0x17b)+_0x2457b9(0x474)+_0x2457b9(0x19c)+'if'),_0x2da936['fillT'+_0x2457b9(0x13e)](_0x2286e4,_0xd01327[_0x2457b9(0x5e6)](_0x11bac2,_0x65b3cd/(-0x1*0x15f2+0x7*-0x49e+0x3646)),_0xd01327[_0x2457b9(0x104)](_0xd01327[_0x2457b9(0x55c)](_0x4be5c3,_0x5c5057/(-0x1397+-0x175+-0x23*-0x9a)),_0x2b565b?(-0x26aa+0xc19+0x1a96)*_0x794ead:0x1f80+-0xc14+-0x136c*0x1)),_0x2b565b&&(_0x2da936[_0x2457b9(0x62b)]=_0xd01327[_0x2457b9(0x259)](_0xd01327[_0x2457b9(0x18a)](_0xd01327['ANIwQ'],Math[_0x2457b9(0x3eb)]((0x1e*0x128+-0x13f1+-0xeb6)*_0x794ead)),_0xd01327[_0x2457b9(0x2d7)]),_0x2da936['fillS'+_0x2457b9(0x3d1)]=_0x40c614?_0xd01327[_0x2457b9(0x270)]:_0xd01327[_0x2457b9(0x614)],_0x2da936[_0x2457b9(0x539)+'ext'](_0x2b565b,_0x11bac2+_0x65b3cd/(0xf41+0x1*0x1939+-0x2878),_0xd01327[_0x2457b9(0x259)](_0x4be5c3,_0x5c5057/(0x19*0x7+0x2294*-0x1+0x21e7))+(0x1*-0x1972+-0x11b7+0x2b31*0x1)*_0x794ead)),_0x2da936[_0x2457b9(0x1ee)+'re']();}else{var _0x1974af=(_0x2457b9(0x457)+'|6|8|'+_0x2457b9(0x4db)+'|4')[_0x2457b9(0x5a2)]('|'),_0x928dc8=0x255e+0x110*-0xa+-0x15*0x146;while(!![]){switch(_0x1974af[_0x928dc8++]){case'0':_0x59d37d['heigh'+'t']=_0x394b2a['round'](_0x87d144[_0x2457b9(0x516)](_0x311e84,_0x121275));continue;case'1':if(_0x87d144[_0x2457b9(0x527)](_0x5f309b,_0x2fa979['w'])&&_0x87d144[_0x2457b9(0x647)](_0x311e84,_0x141588['h'])&&_0x87d144['qWOsq'](_0x121275,_0x27713d[_0x2457b9(0x5b9)]))return;continue;case'2':var _0x5f309b=_0x2f71cf[_0x2457b9(0x2d8)+_0x2457b9(0x47b)],_0x311e84=_0xc4549e[_0x2457b9(0x2d8)+_0x2457b9(0x4ba)+'t'];continue;case'3':_0x17ba66['dpr']=_0x121275;continue;case'4':_0x55edbc[_0x2457b9(0x576)+'ansfo'+'rm'](_0x121275,-0xc55+0xb*-0x89+-0x8*-0x247,-0x582*0x3+-0x1fce+0x3054,_0x121275,0x1b79+0x1f00+-0x3a79,0x208c+-0x22*-0x11d+-0x4666);continue;case'5':_0x3997e8[_0x2457b9(0x3e2)]=_0x2c361b['round'](_0x5f309b*_0x121275);continue;case'6':_0x55663e['w']=_0x5f309b;continue;case'7':var _0x121275=_0x28e48e['devic'+'ePixe'+'lRati'+'o']||-0x1109+0x1556+-0x2*0x226;continue;case'8':_0xd20952['h']=_0x311e84;continue;}break;}}};_0x4ca7d3('W',_0x957269[_0x238d81(0x3f3)],_0x957269[_0x238d81(0x34b)](_0x957269['abukQ'](_0x534449,_0x471a46),_0xc9af6d),_0x51d5c2,_0x471a46,_0x471a46),_0x4ca7d3('A',_0x957269[_0x238d81(0x20a)],_0x534449,_0x957269[_0x238d81(0x14e)](_0x51d5c2+_0x471a46,_0xc9af6d),_0x471a46,_0x471a46),_0x957269[_0x238d81(0x177)](_0x4ca7d3,'S',_0x238d81(0x3a8),_0x534449+_0x471a46+_0xc9af6d,_0x957269[_0x238d81(0x34b)](_0x51d5c2+_0x471a46,_0xc9af6d),_0x471a46,_0x471a46),_0x4ca7d3('D',_0x238d81(0x257),_0x957269[_0x238d81(0x14e)](_0x534449,_0x957269[_0x238d81(0x40e)](_0x957269[_0x238d81(0x33e)](_0x471a46,_0xc9af6d),0xa3*0x2f+-0x1ae*0xd+-0x815)),_0x51d5c2+_0x471a46+_0xc9af6d,_0x471a46,_0x471a46);var _0x12a08c=(_0x56a0e0-_0xc9af6d)/(-0x4*-0x4a2+0x1*-0xe1e+0x8*-0x8d),_0x3d5797=_0x51d5c2+(_0x471a46+_0xc9af6d)*(-0x65b*0x1+0x2*-0xb2a+0x1cb1);_0x4ca7d3(_0x957269['EhjnQ'],_0x957269['kRcqz'],_0x534449,_0x3d5797,_0x12a08c,_0x471a46,_0x315604[_0x238d81(0x310)]?_0x3ed161(0x7de+-0x57*0x3a+0xbd9)+'\x20CPS':''),_0x4ca7d3(_0x957269[_0x238d81(0x16d)],_0x957269[_0x238d81(0x2ae)],_0x534449+_0x12a08c+_0xc9af6d,_0x3d5797,_0x12a08c,_0x471a46,_0x315604[_0x238d81(0x310)]?_0x957269[_0x238d81(0x34b)](_0x3ed161(0xf37+-0x1ca7+-0x1*-0xd73),_0x957269[_0x238d81(0x3b5)]):''),_0x957269[_0x238d81(0x177)](_0x4ca7d3,'',_0x957269[_0x238d81(0x350)],_0x534449,_0x957269[_0x238d81(0x166)](_0x3d5797,_0x471a46)+_0xc9af6d,_0x56a0e0,_0x471a46*(0x335+0x1*0xc4c+0x15*-0xbd+0.45));}function _0x58c23a(_0x4c6cac){var _0x23eea7=_0x761c5,_0x3e9814=_0x4c6cac['width']/(-0x17ae+0xe57+0x959),_0x3ae730=_0x2ee71f['pFpFK'](_0x4c6cac[_0x23eea7(0x583)+'t'],0x805*0x4+0x1246*-0x1+-0x4*0x373),_0x3ba5dd=_0x2ee71f[_0x23eea7(0x242)](Number,_0x315604[_0x23eea7(0x262)+'e'])||-0x5*-0xa7+-0x419+0x2b*0x5,_0x4e2ddd=/^#[0-9a-f]{6}$/i[_0x23eea7(0x517)](_0x315604['chCol'+'or'])?_0x315604['chCol'+'or']:'#ff6b'+'9d';_0x2da936['save'](),_0x2da936['strok'+_0x23eea7(0x3c7)+'e']=_0x4e2ddd,_0x2da936[_0x23eea7(0x255)+_0x23eea7(0x3d1)]=_0x4e2ddd,_0x2da936[_0x23eea7(0x4b8)+_0x23eea7(0xfd)]=Math['max'](0xf3a*-0x1+-0x136e+-0x1*-0x22a9+0.5,(0x813+0x5fb+0x1d*-0x7c)*_0x3ba5dd),_0x2da936[_0x23eea7(0x15a)+_0x23eea7(0x4c7)+'r']=_0x4e2ddd,_0x2da936['shado'+_0x23eea7(0x58e)]=-0x12*0xe5+-0x18bf+0x28df;var _0x4af9f1=_0x2ee71f['Zcthi'](0x7*-0x35+-0xa7a+0xbf3,_0x3ba5dd),_0x1545a4=(0x9ab+-0x1*0x112d+0x5*0x182)*_0x3ba5dd;_0x2da936[_0x23eea7(0x2ea)+'Path'](),_0x2da936['moveT'+'o'](_0x3e9814-_0x4af9f1-_0x1545a4,_0x3ae730),_0x2da936['lineT'+'o'](_0x3e9814-_0x4af9f1,_0x3ae730),_0x2da936[_0x23eea7(0x2c6)+'o'](_0x2ee71f[_0x23eea7(0x640)](_0x3e9814,_0x4af9f1),_0x3ae730),_0x2da936[_0x23eea7(0x5fc)+'o'](_0x3e9814+_0x4af9f1+_0x1545a4,_0x3ae730),_0x2da936[_0x23eea7(0x2c6)+'o'](_0x3e9814,_0x2ee71f['IMUCu'](_0x3ae730,_0x4af9f1)-_0x1545a4),_0x2da936[_0x23eea7(0x5fc)+'o'](_0x3e9814,_0x3ae730-_0x4af9f1),_0x2da936[_0x23eea7(0x2c6)+'o'](_0x3e9814,_0x2ee71f['pKCpX'](_0x3ae730,_0x4af9f1)),_0x2da936[_0x23eea7(0x5fc)+'o'](_0x3e9814,_0x3ae730+_0x4af9f1+_0x1545a4),_0x2da936[_0x23eea7(0x4f2)+'e'](),_0x2da936[_0x23eea7(0x2ea)+'Path'](),_0x2da936['arc'](_0x3e9814,_0x3ae730,_0x2ee71f[_0x23eea7(0x23f)](0x85c+-0x13df+-0x2e1*-0x4+0.6000000000000001,_0x3ba5dd),0x1*0x1925+-0x2630+0x15*0x9f,_0x2ee71f[_0x23eea7(0x1eb)](Math['PI'],0x1bca*0x1+-0x4b3*0x5+0x449*-0x1)),_0x2da936[_0x23eea7(0x54d)](),_0x2da936[_0x23eea7(0x1ee)+'re']();}function _0x35662e(_0x946c15){var _0x2e0752=_0x761c5;_0x2da936[_0x2e0752(0x139)](),_0x2da936['font']=_0x2e0752(0x1f8)+_0x2e0752(0x25b)+_0x2e0752(0x4b9)+_0x2e0752(0x3b8)+_0x2e0752(0x287)+_0x2e0752(0x3b8)+'e',_0x2da936['textA'+_0x2e0752(0x24e)]=_0x2e0752(0x4a1),_0x2da936['textB'+'aseli'+'ne']='top';var _0x1b6e50=0xe*-0xb8+-0x1098+0xca*0x22,_0x3b57fd=0x253a+-0x7d9+-0x1d55,_0x32b9e1=(_0xd56591,_0x2b0f17)=>{var _0x3af346=_0x2e0752;_0x2da936['fillS'+'tyle']=_0x2b0f17||'rgba('+_0x3af346(0x2e7)+_0x3af346(0x511)+'0,0.7'+'5)',_0x2da936[_0x3af346(0x539)+_0x3af346(0x13e)](_0xd56591,_0x3b57fd,_0x1b6e50),_0x1b6e50+=-0x23fb+0x8d*0xc+0x1d6f;};_0x32b9e1(_0x2e0752(0x679)+_0x2e0752(0x5f1)+_0x2e0752(0x65e)+'1','#ff6b'+'9d');if(_0x315604['fps'])_0x32b9e1(_0x127654+_0x957269[_0x2e0752(0x334)]);if(!_0x3ab4d7[_0x2e0752(0x291)+_0x2e0752(0xf3)])_0x32b9e1('waiti'+_0x2e0752(0x138)+_0x2e0752(0x2ad)+'e…',_0x957269[_0x2e0752(0x143)]);_0x2da936['resto'+'re']();}function _0x1a31c8(){var _0x17d65b=_0x761c5;if('IYVRm'===_0x957269['TUZlS']){var _0x5e293b=_0x2445d8['safeM'+_0x17d65b(0x379)]?'SAFE\x20'+_0x17d65b(0x41d)+_0x17d65b(0x364)+_0x17d65b(0x51d)+'only,'+'\x20no\x20h'+_0x17d65b(0x423)+_0x17d65b(0x3de)+'ad\x20to'+_0x17d65b(0x652)+')':_0x58f424['uwmk']?_0x957269[_0x17d65b(0x623)](_0x957269['lScHm']('UWMK\x20'+_0x17d65b(0x11f)+'\x20',_0x4dfc1c[_0x17d65b(0x4d8)+_0x17d65b(0x4ca)]?_0x5e202f[_0x17d65b(0x4d8)+'Ok']+'/'+_0x252025[_0x17d65b(0x4d8)+_0x17d65b(0x4ca)]+('\x20hook'+'s'):'0\x20hoo'+_0x17d65b(0x1e1)+'med\x20('+_0x17d65b(0x341)+_0x17d65b(0x64c))+_0x957269['xNnpU']+(_0x5abb9e[_0x17d65b(0x291)+_0x17d65b(0xf3)]?'loade'+'d':'loadi'+'ng')+_0x957269[_0x17d65b(0x14a)]+(_0x335046[_0x17d65b(0x2a2)+'ers']?_0x957269[_0x17d65b(0x636)]:'none')+(_0x17d65b(0x348)+'vemen'+'t\x20'),_0x2f3802[_0x17d65b(0x223)+_0x17d65b(0x59e)]?_0x17d65b(0x2cc):_0x957269[_0x17d65b(0x5ec)]):'UWMK\x20'+_0x17d65b(0x430)+_0x17d65b(0x34a)+'overl'+'ay\x20on'+'ly\x20(r'+_0x17d65b(0x613)+'all\x20t'+_0x17d65b(0x3b6)+_0x17d65b(0x278)+_0x17d65b(0x599);if(_0x49cc63['lastE'+'rror'])_0x5e293b+=_0x957269[_0x17d65b(0x66c)]+_0x32f463['lastE'+'rror'];return _0x957269['Dbmwu'](_0x4c3dbf,_0x957269['DMibx'],_0x5e293b,_0x575b82['uwmk'],null,[_0x36768b(_0x17d65b(0x592)+_0x17d65b(0x624)+_0x17d65b(0x515),_0x17d65b(0x57f)+_0x17d65b(0x675)+'yEngi'+_0x17d65b(0x22c)+_0x17d65b(0x4d6)+'tion.'+_0x17d65b(0x2da)+'arget'+_0x17d65b(0x588)+'Rate',_0x21fffa(_0x957269[_0x17d65b(0x43b)],()=>{var _0x34851b=_0x17d65b;try{if(_0x72c7e9)_0x5ca3f1['call'](_0x34851b(0x3c0)+_0x34851b(0x3d7)+_0x34851b(0x30b)+'licat'+'ion',_0x34851b(0x2da)+'arget'+'Frame'+_0x34851b(0x254),[-0x1ecd+0x2*-0xc83+0x38c3]);}catch(_0x421593){}}))]);}else{_0x957269[_0x17d65b(0x1b6)](requestAnimationFrame,_0x1a31c8),_0x386e08++;var _0x48d255=performance['now']();_0x957269[_0x17d65b(0x4da)](_0x48d255-_0xc9f7e3,0x156*-0x19+0x3*0x65e+0x1040)&&(_0x127654=Math['round'](_0x957269['QXqAV'](_0x386e08*(0x2440+0x1b9*0x5+-0x28f5),_0x48d255-_0xc9f7e3)),_0x386e08=0x21*0x105+-0x2c+-0x2179,_0xc9f7e3=_0x48d255);_0x957269[_0x17d65b(0x371)](_0x26219c),_0x1d87f3(),_0x2da936['clear'+_0x17d65b(0x110)](-0x45a*-0x6+0xdd3*0x1+0x1*-0x27ef,0x1f4c+0x21fc+0x8*-0x829,_0x1269c0['w'],_0x1269c0['h']);var _0x3541f3={'left':0x0,'top':0x0,'right':_0x1269c0['w'],'bottom':_0x1269c0['h'],'width':_0x1269c0['w'],'height':_0x1269c0['h']};if(_0x315604[_0x17d65b(0x33f)+'hair'])_0x58c23a(_0x3541f3);if(_0x315604[_0x17d65b(0x666)+_0x17d65b(0x162)])_0x26e638(_0x3541f3);_0x35662e(_0x3541f3);}}var _0x226021=document['creat'+'eElem'+'ent'](_0x2ee71f['YCreJ']);_0x226021['id']=_0x761c5(0x2cd)+'a-ui',_0x226021[_0x761c5(0x13b)]['cssTe'+'xt']=_0x2ee71f['CBfbO'];var _0x1ff27c=_0x226021[_0x761c5(0x3ed)+'hShad'+'ow']({'mode':_0x761c5(0x4a5)});(document[_0x761c5(0x363)]||document[_0x761c5(0x56c)+_0x761c5(0x425)+'ement'])[_0x761c5(0x18f)+_0x761c5(0xf8)+'d'](_0x226021);var _0x5b6da5=![],_0x5c11cd={};try{_0x5c11cd=JSON[_0x761c5(0x63a)](localStorage['getIt'+'em'](_0x2ee71f[_0x761c5(0xff)])||'{}');}catch(_0x3959b3){}function _0x2a3d74(){var _0x375a6f=_0x761c5;if(_0x2ee71f[_0x375a6f(0x55d)](_0x2ee71f[_0x375a6f(0x60f)],_0x2ee71f['wXfkX'])){var _0x4852a2=(_0x375a6f(0x448)+'|1|4')[_0x375a6f(0x5a2)]('|'),_0x2c4a99=-0x1*-0xfd6+-0x81f+0x4f*-0x19;while(!![]){switch(_0x4852a2[_0x2c4a99++]){case'0':var _0x15be21=_0x4d0ed1[_0x375a6f(0x343)+'ostfi'+'x']({'typeName':_0x6b9b6f,'methodName':_0x57c923,'params':_0x60286c,'returnType':_0x320863},_0x47afa4);continue;case'1':_0x3cd9d0['hooks'+'Total']++;continue;case'2':_0x128238[_0x156621]=_0x15be21;continue;case'3':_0x15be21[_0x375a6f(0x172)+'ed']=_0x548e57!==![];continue;case'4':return _0x15be21;}break;}}else try{localStorage[_0x375a6f(0x480)+'em'](_0x375a6f(0x2cd)+_0x375a6f(0x3a2)+_0x375a6f(0x186)+'v1',JSON[_0x375a6f(0x2c3)+_0x375a6f(0x3af)](_0x5c11cd));}catch(_0xab2e62){}}function _0x477a1c(_0x5bc1f6,_0x40627e){var _0x17a627=_0x761c5,_0x8f2505={'NwPxY':_0x17a627(0x677)+_0x17a627(0x631)+'ed'},_0x19abe4=document['creat'+_0x17a627(0x5e3)+_0x17a627(0xe9)](_0x957269['Bwmwf']);return _0x19abe4['type']=_0x957269['Bwmwf'],_0x19abe4['class'+'Name']=_0x957269[_0x17a627(0x51e)],_0x19abe4[_0x17a627(0x1f6)+'tribu'+'te']('role',_0x17a627(0x366)+'h'),_0x19abe4['setAt'+'tribu'+'te']('aria-'+'check'+'ed',_0x957269[_0x17a627(0x5f6)](String,!!_0x5bc1f6)),_0x19abe4[_0x17a627(0x601)+'ck']=_0x189ecd=>{var _0x255f6f=_0x17a627;_0x189ecd['stopP'+'ropag'+_0x255f6f(0x483)]();var _0x3762c7=_0x19abe4['getAt'+_0x255f6f(0x4ac)+'te'](_0x8f2505[_0x255f6f(0x5b6)])!==_0x255f6f(0x4c9);_0x19abe4[_0x255f6f(0x1f6)+'tribu'+'te'](_0x8f2505[_0x255f6f(0x5b6)],String(_0x3762c7)),_0x40627e(_0x3762c7);},_0x19abe4;}function _0x1493ce(_0x1c21ee,_0x14d1de,_0x5638e4,_0x19c4f1,_0x2248d2){var _0x32d405=_0x761c5,_0x5e6e5c={'QAdyc':function(_0x26cb03,_0x529eea){return _0x957269['pKZqq'](_0x26cb03,_0x529eea);},'vkCYx':_0x957269[_0x32d405(0x1f4)],'iltBv':function(_0x5c94f0,_0x3206c9){return _0x5c94f0+_0x3206c9;},'alQIW':function(_0x3e4675){return _0x3e4675();}};if(_0x957269['Zumlg'](_0x957269['fUiFH'],_0x957269['oWScw'])){var _0x48d96f=document[_0x32d405(0x46f)+'eElem'+'ent']('div');_0x48d96f[_0x32d405(0x409)+_0x32d405(0x277)]='sk-ra'+'nge';var _0x1dd3db=document['creat'+_0x32d405(0x5e3)+_0x32d405(0xe9)](_0x957269[_0x32d405(0x4e2)]);_0x1dd3db[_0x32d405(0x225)]=_0x957269[_0x32d405(0x12c)],_0x1dd3db['class'+_0x32d405(0x277)]=_0x32d405(0x498)+'ider',_0x1dd3db[_0x32d405(0x322)]=_0x14d1de,_0x1dd3db[_0x32d405(0x18e)]=_0x5638e4,_0x1dd3db['step']=_0x19c4f1,_0x1dd3db[_0x32d405(0x45d)]=_0x1c21ee;var _0x6c9903=document[_0x32d405(0x46f)+_0x32d405(0x5e3)+'ent']('span');_0x6c9903['class'+_0x32d405(0x277)]=_0x957269['lYPlA'],_0x6c9903['textC'+'onten'+'t']=_0x957269[_0x32d405(0x1b6)](String,_0x1c21ee);var _0x477df6=()=>{var _0x428013=_0x32d405;_0x6c9903[_0x428013(0x125)+_0x428013(0x503)+'t']=_0x5e6e5c['QAdyc'](String,_0x1dd3db[_0x428013(0x45d)]),_0x48d96f['style']['setPr'+_0x428013(0x122)+'y'](_0x5e6e5c[_0x428013(0x22b)],_0x5e6e5c[_0x428013(0x1dd)]((_0x1dd3db[_0x428013(0x45d)]-_0x14d1de)/(_0x5638e4-_0x14d1de)*(0x1*-0x15e2+0x184b+0x2f*-0xb),'%'));};return _0x1dd3db['oninp'+'ut']=()=>{_0x477df6(),_0x2248d2(Number(_0x1dd3db['value']));},_0x477df6(),_0x48d96f['appen'+'d'](_0x1dd3db,_0x6c9903),_0x48d96f;}else _0x1839bc[_0x32d405(0x387)+'oil']=_0x14bdf5,_0x5e6e5c[_0x32d405(0x245)](_0xf8e95a),_0x2493e7(_0x32d405(0x387)+_0x32d405(0x37f),_0x1061ce);}function _0x3c1b63(_0xde22a0,_0x24d516){var _0x4b7537=_0x761c5,_0x19a19b=document[_0x4b7537(0x46f)+'eElem'+_0x4b7537(0xe9)](_0x4b7537(0x145));return _0x19a19b[_0x4b7537(0x225)]='color',_0x19a19b[_0x4b7537(0x409)+_0x4b7537(0x277)]=_0x4b7537(0x53a)+'lor',_0x19a19b['value']=/^#[0-9a-f]{6}$/i[_0x4b7537(0x517)](_0xde22a0)?_0xde22a0:_0x4b7537(0x65a)+'9d',_0x19a19b[_0x4b7537(0x643)+'ut']=()=>_0x24d516(_0x19a19b[_0x4b7537(0x45d)]),_0x19a19b;}function _0x395598(_0x286a3b,_0x186f11,_0x162e4c){var _0xaf7ac6=_0x761c5,_0x2a6d80={'KmXXY':function(_0x1c3338){var _0x50fe22=_0x1e6a;return _0x957269[_0x50fe22(0x446)](_0x1c3338);}};if(_0x957269[_0xaf7ac6(0x58b)](_0xaf7ac6(0x1ef),_0x957269[_0xaf7ac6(0x573)]))_0x1695f3[_0xaf7ac6(0x144)+'le']=_0x2c63d4,_0x957269[_0xaf7ac6(0x12f)](_0x2ca58d);else{var _0x538c80=document['creat'+'eElem'+_0xaf7ac6(0xe9)](_0x957269['LUCTO']);_0x538c80[_0xaf7ac6(0x409)+'Name']=_0xaf7ac6(0x650)+'eld';for(var [_0x308a70,_0x4614c9]of _0x186f11){if(_0x957269['vrnXb'](_0xaf7ac6(0x4b5),_0xaf7ac6(0x11e)))_0x633aa4[_0xaf7ac6(0x688)+_0xaf7ac6(0x2ac)+'e']=_0xecad34,_0x2a6d80[_0xaf7ac6(0x4e9)](_0x4de788);else{var _0x217f13=document['creat'+'eElem'+'ent'](_0x957269[_0xaf7ac6(0x2b9)]);_0x217f13[_0xaf7ac6(0x45d)]=_0x308a70,_0x217f13[_0xaf7ac6(0x125)+_0xaf7ac6(0x503)+'t']=_0x4614c9,_0x538c80[_0xaf7ac6(0x18f)+'dChil'+'d'](_0x217f13);}}return _0x538c80['value']=_0x286a3b,_0x538c80[_0xaf7ac6(0x5a6)+_0xaf7ac6(0x589)]=()=>_0x162e4c(_0x538c80['value']),_0x538c80;}}function _0x5e9cf0(_0x3041bd,_0x1c1a08){var _0x17cb83=_0x761c5,_0x345a25=document[_0x17cb83(0x46f)+_0x17cb83(0x5e3)+_0x17cb83(0xe9)](_0x957269[_0x17cb83(0x305)]);return _0x345a25['type']='butto'+'n',_0x345a25['class'+'Name']=_0x957269[_0x17cb83(0x441)],_0x345a25[_0x17cb83(0x125)+_0x17cb83(0x503)+'t']=_0x3041bd,_0x345a25['oncli'+'ck']=_0x5e7a0c=>{var _0x56ca53=_0x17cb83,_0x2ae6c1={'cGvqy':'keyup'};if(_0x56ca53(0x3f6)===_0x957269[_0x56ca53(0x209)]){if(_0x2326ee)return;_0x3b0ce4=!![],_0x3f09f6['addEv'+_0x56ca53(0x4c4)+'stene'+'r'](_0x56ca53(0x23b)+'wn',_0x1b12c0,!![]),_0xbf75e9['addEv'+'entLi'+'stene'+'r'](_0x2ae6c1['cGvqy'],_0x565566,!![]),_0x58f979[_0x56ca53(0x586)+_0x56ca53(0x4c4)+_0x56ca53(0x2f1)+'r'](_0x56ca53(0x5a5)+_0x56ca53(0x436),_0x573716,!![]),_0x36684f['addEv'+'entLi'+_0x56ca53(0x2f1)+'r']('mouse'+'up',_0x1a5676,!![]),_0x44fcb2[_0x56ca53(0x586)+'entLi'+_0x56ca53(0x2f1)+'r']('blur',_0x9f0f56);}else _0x5e7a0c[_0x56ca53(0x4b0)+_0x56ca53(0x4eb)+'ation'](),_0x1c1a08();},_0x345a25;}function _0x5316b6(_0x26f760,_0x4b0b38,_0x21232e){var _0x1cae32=_0x761c5,_0x5d8efb=_0x2ee71f[_0x1cae32(0x447)][_0x1cae32(0x5a2)]('|'),_0x217e1a=0x1*-0x196f+0x687+0x12e8;while(!![]){switch(_0x5d8efb[_0x217e1a++]){case'0':_0x418651[_0x1cae32(0x409)+_0x1cae32(0x277)]=_0x2ee71f['gxYON'];continue;case'1':_0x418651['textC'+_0x1cae32(0x503)+'t']=_0x26f760;continue;case'2':var _0x4bb4bb=document[_0x1cae32(0x46f)+'eElem'+'ent'](_0x2ee71f[_0x1cae32(0x563)]);continue;case'3':_0x4bb4bb[_0x1cae32(0x18f)+'d'](_0x418651,_0x21232e);continue;case'4':var _0x418651=document[_0x1cae32(0x46f)+_0x1cae32(0x5e3)+'ent'](_0x2ee71f['nOUnw']);continue;case'5':if(_0x4b0b38){var _0xd3b9f2=document[_0x1cae32(0x46f)+_0x1cae32(0x5e3)+_0x1cae32(0xe9)]('small');_0xd3b9f2[_0x1cae32(0x409)+'Name']=_0x2ee71f[_0x1cae32(0x15f)],_0xd3b9f2[_0x1cae32(0x125)+_0x1cae32(0x503)+'t']=_0x4b0b38,_0x418651[_0x1cae32(0x18f)+'dChil'+'d'](_0xd3b9f2);}continue;case'6':return _0x4bb4bb;case'7':_0x4bb4bb[_0x1cae32(0x409)+_0x1cae32(0x277)]='sk-ct'+'l';continue;}break;}}function _0xf061f5(_0x57ea98,_0x2d254c){var _0x3a7708=_0x761c5,_0x1a64d8=document['creat'+_0x3a7708(0x5e3)+_0x3a7708(0xe9)](_0x3a7708(0x58c));return _0x1a64d8[_0x3a7708(0x409)+_0x3a7708(0x277)]=_0x957269['xMDbw'](_0x957269['QNPxh'],_0x2d254c?_0x957269['HXQCn']:''),_0x1a64d8['textC'+_0x3a7708(0x503)+'t']=_0x57ea98,_0x1a64d8;}function _0x2a8bf5(_0x1699bb,_0x2c2ca3,_0x251e1b,_0x27a00b,_0x4d2b29){var _0x1e1422=_0x761c5,_0x444a3f=document['creat'+_0x1e1422(0x5e3)+_0x1e1422(0xe9)](_0x1e1422(0x58c));_0x444a3f[_0x1e1422(0x409)+'Name']=_0x957269['RFKeb'](_0x1e1422(0x1f2)+'rd',_0x251e1b?_0x957269[_0x1e1422(0x36a)]:'');var _0x1be6c4=document['creat'+_0x1e1422(0x5e3)+_0x1e1422(0xe9)]('div');_0x1be6c4[_0x1e1422(0x409)+'Name']=_0x957269[_0x1e1422(0x114)];var _0x2d9e2e=document[_0x1e1422(0x46f)+_0x1e1422(0x5e3)+'ent'](_0x957269['eYMWY']);_0x2d9e2e[_0x1e1422(0x409)+_0x1e1422(0x277)]=_0x1e1422(0x1f2)+'rd-ti'+_0x1e1422(0x235);var _0x3524b7=document['creat'+_0x1e1422(0x5e3)+_0x1e1422(0xe9)](_0x1e1422(0x469)+'g');_0x3524b7[_0x1e1422(0x125)+'onten'+'t']=_0x1699bb,_0x2d9e2e['appen'+_0x1e1422(0xf8)+'d'](_0x3524b7);if(_0x27a00b){var _0x274ea0=_0x477a1c(_0x251e1b,_0x7a79e3=>{var _0x1fc7ff=_0x1e1422,_0x39a7a9={'LspOJ':function(_0x37a825){return _0x957269['kqQrF'](_0x37a825);}};_0x957269['hvLzK'](_0x1fc7ff(0x1b1),_0x1fc7ff(0x3ab))?(_0x6bcc9a[_0x1fc7ff(0x233)]=_0x3f0639,_0x39a7a9[_0x1fc7ff(0x596)](_0x14e2a9)):(_0x444a3f['class'+_0x1fc7ff(0x199)][_0x1fc7ff(0x2f9)+'e']('on',_0x7a79e3),_0x27a00b(_0x7a79e3));});_0x1be6c4['appen'+'d'](_0x2d9e2e,_0x274ea0);}else _0x1be6c4[_0x1e1422(0x18f)+_0x1e1422(0xf8)+'d'](_0x2d9e2e);_0x444a3f['appen'+'dChil'+'d'](_0x1be6c4);if(_0x4d2b29&&_0x4d2b29[_0x1e1422(0x2ee)+'h']){var _0x100655=_0x957269[_0x1e1422(0x339)][_0x1e1422(0x5a2)]('|'),_0xdc76e=0x48e+-0x61*0x2f+0xd41;while(!![]){switch(_0x100655[_0xdc76e++]){case'0':var _0xf99e51=document[_0x1e1422(0x46f)+_0x1e1422(0x5e3)+_0x1e1422(0xe9)](_0x957269[_0x1e1422(0x4ad)]);continue;case'1':_0xf99e51['appen'+_0x1e1422(0xf8)+'d'](_0x4b004f);continue;case'2':_0x4b004f[_0x1e1422(0x409)+_0x1e1422(0x277)]=_0x1e1422(0x167)+_0x1e1422(0x59b);continue;case'3':var _0x4b004f=document[_0x1e1422(0x46f)+'eElem'+_0x1e1422(0xe9)](_0x1e1422(0x58c));continue;case'4':_0xf99e51[_0x1e1422(0x409)+_0x1e1422(0x277)]=_0x957269['BJKYK'];continue;case'5':for(var _0x2851bb of _0x4d2b29)_0xf99e51['appen'+'dChil'+'d'](_0x2851bb);continue;case'6':_0x444a3f['appen'+'dChil'+'d'](_0xf99e51);continue;case'7':_0x4b004f[_0x1e1422(0x125)+_0x1e1422(0x503)+'t']=_0x2c2ca3;continue;}break;}}return _0x444a3f;}var _0x1292d4=[{'id':'comba'+'t','label':_0x761c5(0x21f)+'t'},{'id':'move','label':_0x761c5(0x1ec)},{'id':_0x761c5(0x1fe)+'l','label':_0x2ee71f[_0x761c5(0x1fd)]},{'id':'misc','label':'Misc'},{'id':_0x761c5(0x5a3),'label':_0x2ee71f['JiJSp']}];function _0x4b9bf5(){var _0x5ae396=_0x761c5,_0x5ebccb=_0x3ab4d7[_0x5ae396(0x48a)+_0x5ae396(0x379)]?_0x2ee71f['FsbEW']:_0x3ab4d7[_0x5ae396(0x443)]?_0x2ee71f['JmYdL'](_0x2ee71f[_0x5ae396(0x640)](_0x2ee71f[_0x5ae396(0x207)],_0x3ab4d7[_0x5ae396(0x4d8)+'Total']?_0x3ab4d7['hooks'+'Ok']+'/'+_0x3ab4d7['hooks'+_0x5ae396(0x4ca)]+('\x20hook'+'s'):_0x2ee71f['ZKzLF'])+(_0x5ae396(0x204)+'me\x20'),_0x3ab4d7['gameL'+_0x5ae396(0xf3)]?_0x5ae396(0x234)+'d':_0x5ae396(0x470)+'ng')+_0x2ee71f[_0x5ae396(0x428)]+(_0x3ab4d7[_0x5ae396(0x2a2)+'ers']?_0x5ae396(0x2cc):_0x2ee71f['BCjHs'])+_0x2ee71f['QRndx']+(_0x3ab4d7[_0x5ae396(0x223)+'ents']?'held':_0x2ee71f['BCjHs']):'UWMK\x20'+'MISSI'+'NG\x20—\x20'+_0x5ae396(0x3dc)+'ay\x20on'+'ly\x20(r'+'einst'+'all\x20t'+'he\x20us'+_0x5ae396(0x278)+_0x5ae396(0x599);if(_0x3ab4d7[_0x5ae396(0x2d2)+'rror'])_0x5ebccb+=_0x2ee71f['uqytf']+_0x3ab4d7['lastE'+'rror'];return _0x2a8bf5('Statu'+'s',_0x5ebccb,_0x3ab4d7['uwmk'],null,[_0x5316b6(_0x5ae396(0x592)+_0x5ae396(0x624)+_0x5ae396(0x515),_0x2ee71f[_0x5ae396(0x5c7)],_0x5e9cf0('Apply',()=>{var _0x9d99a5=_0x5ae396;if('XAMHu'===_0x9d99a5(0x18b))try{if(_0x9d99a5(0x258)!==_0x9d99a5(0x336)){if(_0x4f13c4)_0x4f13c4[_0x9d99a5(0x544)]('Unity'+_0x9d99a5(0x3d7)+'e.App'+_0x9d99a5(0x5bb)+_0x9d99a5(0x571),_0x957269[_0x9d99a5(0x1fa)],[0x1*0x3f1+0x1a18+-0x1d19*0x1]);}else try{_0x3f143b['enabl'+'ed']=!!_0x286609;}catch(_0x1710e5){}}catch(_0x25dc59){}else try{var _0x16554d=new _0xe181e9(_0x1950df)[_0x9d99a5(0x5a1)+_0x9d99a5(0x179)](_0x26c18f,_0x567998);_0x2eeb3a['set'](_0xf65bcc,_0x16554d!==_0xb47881?_0x16554d[_0x9d99a5(0x3ee)]():null);}catch(_0x1e971b){_0x4b4a99[_0x9d99a5(0x2b0)](_0x2e33ea,null);}}))]);}function _0x13df2f(_0x71d3f9){var _0x5daf91=_0x761c5,_0x3f3fac={'SQtmt':function(_0x4dedb2){return _0x4dedb2();},'bMdKD':function(_0x5a9947,_0xe28e2f,_0x15c2c9){var _0x1b0f04=_0x1e6a;return _0x957269[_0x1b0f04(0x2dc)](_0x5a9947,_0xe28e2f,_0x15c2c9);},'jrESm':_0x957269[_0x5daf91(0x51b)],'aBtFs':_0x5daf91(0x3f0)+'e','dXUCg':_0x957269[_0x5daf91(0x427)],'DmbkW':function(_0x1efdb7){return _0x1efdb7();},'EniKo':function(_0x564714,_0xfc2842){return _0x564714!==_0xfc2842;},'IXhuX':_0x5daf91(0x45a),'bVljV':'color','BMYkM':'sk-co'+'lor','lUPdo':function(_0x4af418){return _0x957269['aGhvl'](_0x4af418);},'ZNcQl':'yZJuV'};if(_0x957269['Ohoze'](_0x71d3f9,_0x957269[_0x5daf91(0x637)]))return[_0x4b9bf5(),_0x2a8bf5(_0x5daf91(0x285)+_0x5daf91(0x379),'Block'+_0x5daf91(0x1ad)+_0x5daf91(0x213)+_0x5daf91(0x374)+'ateTa'+_0x5daf91(0x508)+'lth\x20a'+_0x5daf91(0x5ad)+'ealth'+_0x5daf91(0x5b5)+_0x5daf91(0x18c)+'\x20so\x20n'+_0x5daf91(0x187)+_0x5daf91(0x557)+_0x5daf91(0xfe)+_0x5daf91(0x482)+_0x5daf91(0x5cf)+'ou.',_0x315604['god'],_0x3830b9=>{var _0x97f529=_0x5daf91;_0x315604['god']=_0x3830b9,_0x3f3fac[_0x97f529(0x635)](_0x522f5e),_0x3f3fac[_0x97f529(0x43e)](_0x4d021b,_0x3f3fac['jrESm'],_0x3830b9),_0x3f3fac['bMdKD'](_0x4d021b,_0x3f3fac['aBtFs'],_0x3830b9);},[]),_0x2a8bf5(_0x957269['ZqOnV'],_0x957269[_0x5daf91(0x67e)],_0x315604[_0x5daf91(0x387)+_0x5daf91(0x37f)],_0x2735a5=>{var _0x392823=_0x5daf91;_0x392823(0x30d)===_0x957269[_0x392823(0x317)]?_0x43038e[_0x392823(0x480)+'em'](_0x3f3fac[_0x392823(0x639)],_0x281121[_0x392823(0x2c3)+'gify'](_0x366d6c)):(_0x315604['noRec'+'oil']=_0x2735a5,_0x522f5e(),_0x4d021b(_0x392823(0x387)+'oil',_0x2735a5));},[]),_0x957269[_0x5daf91(0x587)](_0x2a8bf5,_0x957269[_0x5daf91(0x24f)],'Zeroe'+'s\x20spr'+_0x5daf91(0x34e)+_0x5daf91(0x51f)+_0x5daf91(0x46b)+'ccura'+_0x5daf91(0x2f2)+_0x5daf91(0x684)+_0x5daf91(0x297)+'on\x20ev'+_0x5daf91(0x10d)+_0x5daf91(0x414),_0x315604[_0x5daf91(0x61b)+'ead'],_0x57295e=>{var _0x32067e=_0x5daf91;_0x315604['noSpr'+_0x32067e(0x39e)]=_0x57295e,_0x3f3fac['SQtmt'](_0x522f5e);},[]),_0x2a8bf5(_0x5daf91(0x565)+'\x20Fire'+_0x5daf91(0x2ba)+']',_0x5daf91(0x5c1)+_0x5daf91(0x43a)+_0x5daf91(0x1e3)+_0x5daf91(0x475)+'n.fir'+'eRate'+_0x5daf91(0x685)+'0%.\x20S'+'erver'+'\x20may\x20'+_0x5daf91(0x309)+'\x20gate'+_0x5daf91(0x39d)+'s.',_0x315604['rapid'+'Exp'],_0x57f85b=>{var _0x1a8e12=_0x5daf91;_0x315604[_0x1a8e12(0x196)+_0x1a8e12(0x55e)]=_0x57f85b,_0x522f5e();},[]),_0x957269[_0x5daf91(0x5c6)](_0x2a8bf5,_0x5daf91(0x56f)+_0x5daf91(0x4f8)+'P]',_0x957269['DNqHD'],_0x315604['damag'+_0x5daf91(0x56b)],_0x45aa83=>{var _0x22782b=_0x5daf91;_0x315604[_0x22782b(0x688)+'eExp']=_0x45aa83,_0x522f5e();},[_0x5316b6(_0x5daf91(0x56f)+'e\x20val'+'ue',null,_0x1493ce(_0x315604[_0x5daf91(0x688)+'eValu'+'e'],0x2*-0x1269+0x2b*0x1d+0x1ffd,-0x29*0x6f+-0xd0f*0x1+0x20ca,0x166a+0x1*-0x417+-0xb*0x1aa,_0x3ac402=>{var _0x31aa8d=_0x5daf91;_0x315604[_0x31aa8d(0x688)+_0x31aa8d(0x2ac)+'e']=_0x3ac402,_0x522f5e();}))]),_0x2a8bf5(_0x5daf91(0x238)+_0x5daf91(0x52c)+'mmo\x20['+_0x5daf91(0x276),_0x957269[_0x5daf91(0x313)],_0x315604[_0x5daf91(0x445)+_0x5daf91(0x651)],_0x6835b4=>{var _0x498fae=_0x5daf91;_0x315604['infAm'+_0x498fae(0x651)]=_0x6835b4,_0x522f5e();},[_0xf061f5(_0x5daf91(0x1b7)+_0x5daf91(0x5cc)+'\x20stil'+_0x5daf91(0x42f)+'in,\x20t'+_0x5daf91(0x404)+_0x5daf91(0x43d)+_0x5daf91(0x5bd)+_0x5daf91(0x486)+_0x5daf91(0x4b3)+'where'+'.')])];if(_0x71d3f9===_0x5daf91(0x526))return[_0x2a8bf5(_0x5daf91(0x2e8),_0x957269[_0x5daf91(0x1a0)],_0x315604['speed'+_0x5daf91(0x5f8)]!==-0x7b8+-0x1ea3+0x26bf,null,[_0x5316b6(_0x5daf91(0x2e8)+'\x20%',_0x957269[_0x5daf91(0x163)],_0x1493ce(_0x315604[_0x5daf91(0x47e)+'Pct'],-0x69*-0x23+-0x72f*0x1+0x26*-0x2f,-0x1562+-0x15b*-0x8+0xbb6,0xcb3*0x3+-0x1*0x1dab+-0x869,_0x1b6fec=>{var _0x32af84=_0x5daf91;_0x315604[_0x32af84(0x47e)+_0x32af84(0x5f8)]=_0x1b6fec,_0x522f5e();}))]),_0x2a8bf5(_0x957269['fvZCN'],_0x957269['MMqTZ'],_0x315604['jumpP'+'ct']!==-0x23f4+0x754+-0x26b*-0xc||_0x957269[_0x5daf91(0x4bf)](_0x315604['gravi'+_0x5daf91(0x67a)],-0x2231+0x27*0xce+0x1*0x333),null,[_0x957269[_0x5daf91(0x1cc)](_0x5316b6,_0x5daf91(0x39f)+'%',null,_0x957269[_0x5daf91(0x28b)](_0x1493ce,_0x315604[_0x5daf91(0x13d)+'ct'],0x1c36+-0x141a+-0x2*0x3f5,0x1*0x21d+-0x1282+-0x1*-0x1191,0x19*0x70+0x32*0x3f+-0x1*0x1739,_0x53bc9e=>{var _0x32bf0c=_0x5daf91;_0x315604['jumpP'+'ct']=_0x53bc9e,_0x3f3fac[_0x32bf0c(0x21c)](_0x522f5e);})),_0x5316b6(_0x5daf91(0x386)+'ty\x20%',_0x957269[_0x5daf91(0x385)],_0x957269[_0x5daf91(0x587)](_0x1493ce,_0x315604[_0x5daf91(0x1a6)+_0x5daf91(0x67a)],-0x8e0+-0xe84*-0x1+0x2*-0x2cd,0x77d+0x2234+0xda3*-0x3,-0xdf+-0x3c*-0x16+-0x222*0x2,_0x617130=>{var _0xbee523=_0x5daf91;_0x315604['gravi'+_0xbee523(0x67a)]=_0x617130,_0x957269[_0xbee523(0x38a)](_0x522f5e);}))]),_0x2a8bf5(_0x957269[_0x5daf91(0x39b)],_0x957269['UJOsq'],_0x315604['bhop'],_0x1a565b=>{var _0x3fe448=_0x5daf91,_0x16d72b={'FHwxj':function(_0x4acb6f,_0x39f15f){return _0x4acb6f!==_0x39f15f;},'Bterb':_0x957269['zgkAM']};if(_0x957269['YmUTc']('MQMzJ',_0x957269[_0x3fe448(0x36f)]))_0x315604[_0x3fe448(0x62c)]=_0x1a565b,_0x522f5e();else{var _0x21b813=_0x11cd1b['fulls'+_0x3fe448(0x4fa)+'Eleme'+'nt'],_0x5516e3=_0x21b813&&_0x16d72b[_0x3fe448(0x267)](_0x21b813[_0x3fe448(0x244)+'me'],_0x16d72b[_0x3fe448(0x664)])?_0x21b813:_0x50e734[_0x3fe448(0x363)]||_0xbcee55['docum'+_0x3fe448(0x425)+'ement'];if(_0x598184[_0x3fe448(0x26b)+_0x3fe448(0x48b)]!==_0x5516e3)_0x5516e3[_0x3fe448(0x18f)+_0x3fe448(0xf8)+'d'](_0x1aacc5);}},[])];if(_0x71d3f9==='visua'+'l')return[_0x957269['Zbhbc'](_0x2a8bf5,_0x957269[_0x5daf91(0x417)],_0x957269['cmKiU'],_0x315604['keyst'+_0x5daf91(0x162)],_0x446d05=>{var _0x5c8f19=_0x5daf91,_0x5f28b9={'HDiYP':function(_0x17f0ab,_0x5dcc94){var _0x15832d=_0x1e6a;return _0x3f3fac[_0x15832d(0x102)](_0x17f0ab,_0x5dcc94);}};if(_0x3f3fac[_0x5c8f19(0x26c)]===_0x5c8f19(0x45a))_0x315604[_0x5c8f19(0x666)+_0x5c8f19(0x162)]=_0x446d05,_0x3f3fac[_0x5c8f19(0x21c)](_0x522f5e);else{var _0x3c88b4=('3|2|4'+_0x5c8f19(0x52d))['split']('|'),_0x2619b2=0x22c5+-0x1*0x1ff+-0x20c6*0x1;while(!![]){switch(_0x3c88b4[_0x2619b2++]){case'0':return _0x2639a3;case'1':_0x161f49[_0x5c8f19(0x4d8)+_0x5c8f19(0x4ca)]++;continue;case'2':_0x2639a3[_0x5c8f19(0x172)+'ed']=_0x5f28b9['HDiYP'](_0x33573c,![]);continue;case'3':var _0x2639a3=_0x7d041c['hookP'+_0x5c8f19(0x5e5)]({'typeName':_0x19159f,'methodName':_0x4121cb,'params':_0x2fb7b3,'returnType':_0x4735ba},_0x189bb7);continue;case'4':_0x4b85bc[_0x3b0f14]=_0x2639a3;continue;}break;}}},[_0x5316b6('Posit'+_0x5daf91(0x571),null,_0x395598(_0x315604[_0x5daf91(0x2fc)],[['bl',_0x957269[_0x5daf91(0x1f3)]],['br','Botto'+_0x5daf91(0x451)+'ht'],['ml',_0x5daf91(0x513)+_0x5daf91(0x608)+'e']],_0x2c3366=>{var _0x22162=_0x5daf91;_0x315604[_0x22162(0x2fc)]=_0x2c3366,_0x522f5e();})),_0x957269['Wwszz'](_0x5316b6,'Size',null,_0x957269['VWYlF'](_0x1493ce,_0x315604['ksSca'+'le'],-0x4a7*-0x8+-0x1fb0+0x3b*-0x18+0.6,-0x1*0x4c3+-0x221c+0x8*0x4dc+0.6000000000000001,-0x1e*-0xd0+0x16fa+-0x2f5a+0.05,_0x547144=>{_0x315604['ksSca'+'le']=_0x547144,_0x522f5e();})),_0x957269[_0x5daf91(0x1cc)](_0x5316b6,_0x957269['hyXKx'],null,_0x477a1c(_0x315604[_0x5daf91(0x310)],_0x419c84=>{var _0x38ff74=_0x5daf91;if('sTtae'===_0x38ff74(0x26d))_0x315604['ksCps']=_0x419c84,_0x522f5e();else{var _0x5c3d34=_0x390724[_0x38ff74(0x46f)+_0x38ff74(0x5e3)+_0x38ff74(0xe9)](_0x38ff74(0x145));return _0x5c3d34['type']=_0x3f3fac[_0x38ff74(0x61d)],_0x5c3d34[_0x38ff74(0x409)+_0x38ff74(0x277)]=_0x3f3fac[_0x38ff74(0x681)],_0x5c3d34[_0x38ff74(0x45d)]=/^#[0-9a-f]{6}$/i[_0x38ff74(0x517)](_0x278f4a)?_0xf21a13:'#ff6b'+'9d',_0x5c3d34['oninp'+'ut']=()=>_0x24150c(_0x5c3d34[_0x38ff74(0x45d)]),_0x5c3d34;}}))]),_0x957269['DCQYB'](_0x2a8bf5,_0x5daf91(0x5a7)+'hair',_0x5daf91(0x453)+'m\x20cen'+_0x5daf91(0x16c)+_0x5daf91(0x15c)+'air.',_0x315604['cross'+_0x5daf91(0x61f)],_0x43190d=>{var _0x1e675f=_0x5daf91;_0x315604[_0x1e675f(0x33f)+'hair']=_0x43190d,_0x3f3fac['lUPdo'](_0x522f5e);},[_0x5316b6(_0x957269[_0x5daf91(0x2f7)],null,_0x957269[_0x5daf91(0x1d6)](_0x1493ce,_0x315604[_0x5daf91(0x262)+'e'],-0x1*0x9ad+0x534+-0x479*-0x1+0.5,0xd0*-0x30+0x21f6+0x50c+0.5,-0x50b*-0x3+0x1*0x19ef+0x3*-0xdb0+0.1,_0x562f88=>{var _0x518c2f=_0x5daf91;_0x315604[_0x518c2f(0x262)+'e']=_0x562f88,_0x522f5e();})),_0x5316b6(_0x5daf91(0x1f1),null,_0x3c1b63(_0x315604[_0x5daf91(0x391)+'or'],_0x1b1422=>{var _0x189905=_0x5daf91;_0x3f3fac['ZNcQl']===_0x189905(0x488)?(_0x204a20['hookC'+_0x189905(0x580)+'e']=_0x5bee0b,_0x5a79a0()):(_0x315604[_0x189905(0x391)+'or']=_0x1b1422,_0x3f3fac[_0x189905(0x635)](_0x522f5e));}))]),_0x2a8bf5(_0x957269[_0x5daf91(0x5d7)],_0x957269[_0x5daf91(0x5dd)],_0x315604['fps'],null,[_0x5316b6('FPS\x20c'+'ounte'+'r',null,_0x957269['VJExP'](_0x477a1c,_0x315604[_0x5daf91(0x233)],_0x598f4b=>{var _0x5804f9=_0x5daf91;if(_0x957269[_0x5804f9(0x58b)](_0x5804f9(0x47f),_0x957269[_0x5804f9(0x649)]))_0x315604['fps']=_0x598f4b,_0x522f5e();else{var _0x349410=new _0x2013d2(_0x39ec60)[_0x5804f9(0x5a1)+'ield'](_0x45561b,_0x5804f9(0x4c2));return _0x349410?_0x349410['val']():-0x2412+-0x46*0x41+-0x1*-0x35d8;}})),_0x957269[_0x5daf91(0x252)](_0xf061f5,_0x957269['QgPtN'])])];if(_0x957269['qQdNy'](_0x71d3f9,_0x5daf91(0x653)))return[_0x957269['Dbmwu'](_0x2a8bf5,'Adblo'+'ck',_0x957269[_0x5daf91(0x37e)],_0x315604[_0x5daf91(0x5cb)+'ck'],_0x14962e=>{_0x315604['adblo'+'ck']=_0x14962e,_0x522f5e();},[_0x957269['VKKBq'](_0xf061f5,_0x957269['atdPM'])])];return[_0x2a8bf5(_0x957269[_0x5daf91(0x2a4)],'Skips'+_0x5daf91(0x20c)+_0x5daf91(0x626)+_0x5daf91(0x108)+_0x5daf91(0x2d0)+_0x5daf91(0x4b1)+'hooks'+_0x5daf91(0x2d6)+'\x20this'+_0x5daf91(0x421)+'atche'+'s\x20won'+_0x5daf91(0x521)+'art.',_0x315604[_0x5daf91(0x48a)+'ode'],_0x1baf00=>{_0x315604['safeM'+'ode']=_0x1baf00,_0x522f5e(),location['reloa'+'d']();},[_0x957269[_0x5daf91(0x663)](_0xf061f5,'Appli'+'es\x20on'+_0x5daf91(0x60e)+'ad.\x20I'+_0x5daf91(0x5dc)+'ches\x20'+'load\x20'+_0x5daf91(0x268)+_0x5daf91(0x418)+_0x5daf91(0x572)+_0x5daf91(0x2ef)+_0x5daf91(0x669)+_0x5daf91(0x625)+'ok-re'+_0x5daf91(0x55a)+_0x5daf91(0x40d)+_0x5daf91(0x58d)+_0x5daf91(0x20e)+'hooks'+'-appl'+'ied\x20c'+'ount.')]),_0x957269[_0x5daf91(0x28b)](_0x2a8bf5,'Hook\x20'+'risk\x20'+_0x5daf91(0x366)+'hes',_0x957269['pdpVe'],_0x315604['hookG'+'od']||_0x315604[_0x5daf91(0x683)+_0x5daf91(0x561)]||_0x315604['hookN'+'oReco'+'il']||_0x315604[_0x5daf91(0x659)+_0x5daf91(0x580)+'e'],_0x1b0ead=>{var _0x31b670=_0x5daf91;_0x315604['hookG'+'od']=_0x1b0ead,_0x315604[_0x31b670(0x683)+'odDie']=_0x1b0ead,_0x315604[_0x31b670(0x24d)+_0x31b670(0x220)+'il']=_0x1b0ead,_0x315604['hookC'+_0x31b670(0x580)+'e']=_0x1b0ead,_0x522f5e(),location['reloa'+'d']();},[_0xf061f5(_0x957269[_0x5daf91(0x655)]),_0x5316b6(_0x957269[_0x5daf91(0x21b)],null,_0x477a1c(_0x315604['hookG'+'od'],_0x4fde9c=>{var _0x53d8c8=_0x5daf91;_0x315604[_0x53d8c8(0x683)+'od']=_0x4fde9c,_0x522f5e();})),_0x5316b6(_0x5daf91(0x3f0)+_0x5daf91(0x1d2)+_0x5daf91(0x16e)+_0x5daf91(0x5b5)+'lDie)',null,_0x957269[_0x5daf91(0x2dc)](_0x477a1c,_0x315604['hookG'+_0x5daf91(0x561)],_0x1ea9ae=>{var _0x147b3b=_0x5daf91;_0x315604[_0x147b3b(0x683)+_0x147b3b(0x561)]=_0x1ea9ae,_0x522f5e();})),_0x957269['izaCT'](_0x5316b6,_0x957269['WBHSm'],null,_0x477a1c(_0x315604[_0x5daf91(0x24d)+_0x5daf91(0x220)+'il'],_0x592b06=>{_0x315604['hookN'+'oReco'+'il']=_0x592b06,_0x522f5e();})),_0x957269[_0x5daf91(0x20f)](_0x5316b6,_0x957269[_0x5daf91(0x5a4)],_0x5daf91(0x42a)+_0x5daf91(0x32f)+'work\x20'+_0x5daf91(0x467)+'ut\x20th'+'is',_0x957269['OSZSJ'](_0x477a1c,_0x315604['hookC'+_0x5daf91(0x580)+'e'],_0x2adf17=>{var _0x3e62cd=_0x5daf91;if(_0x957269['NpbbG']===_0x957269['PEQVG']){var _0x31eb20=_0xe6b9b2[_0x3ab06f];if(_0x31eb20)try{_0x31eb20[_0x3e62cd(0x172)+'ed']=!!_0x1f2f68;}catch(_0x12624c){}}else _0x315604['hookC'+_0x3e62cd(0x580)+'e']=_0x2adf17,_0x522f5e();}))]),_0x957269[_0x5daf91(0x587)](_0x2a8bf5,'ACTk\x20'+_0x5daf91(0x30c)+'r','Disab'+_0x5daf91(0x656)+_0x5daf91(0x2fd)+_0x5daf91(0x3ba)+_0x5daf91(0x2d4)+'ors\x20a'+_0x5daf91(0x189)+_0x5daf91(0x27c)+'via\x20S'+_0x5daf91(0x3fe)+_0x5daf91(0x222)+'on().'+_0x5daf91(0x169)+_0x5daf91(0x5b4),_0x315604[_0x5daf91(0x4ea)+'ill'],_0x566300=>{var _0x4485b7=_0x5daf91;_0x315604[_0x4485b7(0x4ea)+_0x4485b7(0x537)]=_0x566300,_0x957269['PMpNX'](_0x522f5e);},[_0x957269['OSZSJ'](_0xf061f5,'God/d'+'amage'+_0x5daf91(0x1d0)+'d\x20gre'+_0x5daf91(0x296)+'raise'+_0x5daf91(0x1fb)+'risk\x20'+'even\x20'+_0x5daf91(0x299)+'this\x20'+'on.',!![])]),_0x2a8bf5(_0x957269[_0x5daf91(0x2ab)],_0x957269[_0x5daf91(0x115)],!![],null,[_0x5316b6('Wipe\x20'+_0x5daf91(0x174)+_0x5daf91(0x33b)+'s',null,_0x5e9cf0(_0x957269['lTHYF'],()=>{var _0x357b24=_0x5daf91;_0x957269['PkCYT']!==_0x357b24(0x210)?(_0x544c20[_0x357b24(0x15a)+'wColo'+'r']=_0x29051a,_0x338e24['shado'+_0x357b24(0x58e)]=-0x10*-0xe2+-0x5b+-0xdb7,_0xb6d4f2['fill'](),_0x3bbc42[_0x357b24(0x15a)+_0x357b24(0x58e)]=0x25af*0x1+0x19b5+-0x2*0x1fb2):(_0x315604={..._0x42a435},_0x957269[_0x357b24(0x152)](_0x522f5e),location['reloa'+'d']());}))])];}var _0x22d875=null;function _0x687f45(_0xdc273c){var _0x5eda51=_0x761c5,_0x2016c9={'zHqfa':_0x957269['dNzVV'],'exvwr':function(_0x8c3abc,_0x1307b5,_0x528b64,_0x170838,_0x555ca2){return _0x8c3abc(_0x1307b5,_0x528b64,_0x170838,_0x555ca2);},'GCrco':function(_0x5c5160,_0x38c2c3,_0x5304a5,_0x54c017,_0x316aa6){return _0x5c5160(_0x38c2c3,_0x5304a5,_0x54c017,_0x316aa6);},'CAvYd':_0x957269['NySOl'],'HLDvs':function(_0xf0b6b2,_0x38e0bd,_0x3de27f,_0x3ad696,_0x3d2238){var _0x2e449f=_0x1e6a;return _0x957269[_0x2e449f(0x64b)](_0xf0b6b2,_0x38e0bd,_0x3de27f,_0x3ad696,_0x3d2238);},'JxROD':function(_0x5905e3,_0x428bbf,_0x816f2,_0x266bb3,_0x2f0705){return _0x5905e3(_0x428bbf,_0x816f2,_0x266bb3,_0x2f0705);}};if('Xolku'==='Xolku'){_0x5b6da5=_0xdc273c;if(!_0x22d875){if(_0x957269['YmUTc'](_0x5eda51(0x35a),'uuZoA')){var _0x26cfea=_0x2016c9[_0x5eda51(0x1c8)][_0x5eda51(0x5a2)]('|'),_0x1a28ad=0x3d*-0x3+-0x116f+0x1226;while(!![]){switch(_0x26cfea[_0x1a28ad++]){case'0':_0x2016c9['exvwr'](_0x1ce5fc,_0x35e117,0x164*0x4+0x693+-0xbf7,'f32',_0x15500b);continue;case'1':_0x2016c9[_0x5eda51(0x2d5)](_0xebedf2,_0x1f212b,0xf77*0x1+-0x261f+0x16c4,_0x2016c9[_0x5eda51(0x62a)],_0x293730);continue;case'2':_0x439fff(_0x506c96,-0x7bd+-0x1ff3+-0x13e8*-0x2,'f32',_0x24a1f1);continue;case'3':_0x28ec6e(_0x2aae3e,-0xcb7+-0x9aa*0x1+0x35*0x6d,_0x5eda51(0x31d),_0x581513);continue;case'4':_0x2016c9['HLDvs'](_0x456d7c,_0x2edab3,0x1a5f+-0x265a+-0x1*-0xc2f,_0x5eda51(0x31d),_0xa4cdc6);continue;case'5':_0x2016c9[_0x5eda51(0x4ab)](_0xf78af6,_0x2fa8c0,-0x137*0x1+-0x325+0x484,_0x2016c9[_0x5eda51(0x62a)],_0x5b0759);continue;}break;}}else{var _0x161e6a=document[_0x5eda51(0x46f)+_0x5eda51(0x5e3)+'ent']('style');_0x161e6a[_0x5eda51(0x125)+_0x5eda51(0x503)+'t']=_0x3f7fa8,_0x1ff27c['appen'+_0x5eda51(0xf8)+'d'](_0x161e6a),_0x22d875=_0x957269[_0x5eda51(0x446)](_0xc9499),_0x1ff27c[_0x5eda51(0x18f)+'dChil'+'d'](_0x22d875),_0x957269[_0x5eda51(0x252)](requestAnimationFrame,()=>_0x22d875['class'+_0x5eda51(0x199)][_0x5eda51(0x21a)](_0x5eda51(0x1a5)));}}_0x22d875['class'+_0x5eda51(0x199)][_0x5eda51(0x2f9)+'e'](_0x5eda51(0x1a5),_0xdc273c);}else _0x2016c9['exvwr'](_0x343c96,_0x29c3b1,-0x10de+-0xe6d+0x1*0x1f97,_0x5eda51(0x5c8),_0x5578d9),_0x3e9cd2(_0x2310b0,-0x1*0xf6e+0x6*-0x54a+-0x1*-0x2f7e,'i32',_0x35b4ee);}function _0x329fed(){_0x687f45(!_0x5b6da5);}function _0xc9499(){var _0x1ade95=_0x761c5,_0x4fc2d1={'Iizmb':'SAFE','ChkLB':function(_0x321305,_0x18a4a9){return _0x2ee71f['NaGei'](_0x321305,_0x18a4a9);},'raooz':function(_0x2a6868,_0xc428ea){var _0x1345c1=_0x1e6a;return _0x2ee71f[_0x1345c1(0x1ce)](_0x2a6868,_0xc428ea);},'hQQwy':function(_0x4e7747,_0x313808){return _0x4e7747+_0x313808;},'hBFkf':function(_0x1150fc,_0x28542a){var _0x5e6265=_0x1e6a;return _0x2ee71f[_0x5e6265(0x229)](_0x1150fc,_0x28542a);},'KWSVY':function(_0x1687bb,_0x1406d7){var _0x290b67=_0x1e6a;return _0x2ee71f[_0x290b67(0x2c9)](_0x1687bb,_0x1406d7);},'sQcMJ':'UWMK\x20'+'bound'+'\x20','dbxlB':function(_0x2e9a59,_0x14f4db){return _0x2e9a59+_0x14f4db;},'KbPzu':'\x20hook'+'s','IXNJi':_0x1ade95(0x204)+_0x1ade95(0x200),'TipDy':_0x2ee71f[_0x1ade95(0x3c1)],'MCzQr':'none','srxUX':_0x2ee71f[_0x1ade95(0x54c)]},_0x1bd063=document['creat'+'eElem'+'ent'](_0x1ade95(0x58c));_0x1bd063[_0x1ade95(0x409)+_0x1ade95(0x277)]=_0x1ade95(0x36e)+_0x1ade95(0x533);var _0x299551=document['creat'+_0x1ade95(0x5e3)+_0x1ade95(0xe9)](_0x1ade95(0x3c3));_0x299551[_0x1ade95(0x409)+'Name']=_0x1ade95(0x56e)+'de';var _0x3e81fe=document['creat'+'eElem'+_0x1ade95(0xe9)](_0x1ade95(0x58c));_0x3e81fe[_0x1ade95(0x409)+_0x1ade95(0x277)]=_0x1ade95(0x63e)+'go',_0x3e81fe[_0x1ade95(0x2d8)+_0x1ade95(0x5e8)]='<svg\x20'+'viewB'+'ox=\x220'+'\x200\x2024'+_0x1ade95(0x682)+_0x1ade95(0x409)+'=\x22mn-'+_0x1ade95(0xe6)+'svg\x22>'+_0x1ade95(0x5ac)+'\x20d=\x22M'+_0x1ade95(0x485)+_0x1ade95(0x5f0)+_0x1ade95(0x3db)+'4-4.5'+_0x1ade95(0x657)+_0x1ade95(0x4d4)+_0x1ade95(0x579)+_0x1ade95(0x505)+_0x1ade95(0x673)+_0x1ade95(0x24b)+'\x204\x204.'+_0x1ade95(0x461)+'-2.5\x20'+'5-4\x207'+_0x1ade95(0x306)+_0x1ade95(0x585)+'\x22none'+_0x1ade95(0x478)+_0x1ade95(0x52b)+'#ff6b'+_0x1ade95(0x27b)+_0x1ade95(0x337)+_0x1ade95(0x32a)+'h=\x222\x22'+_0x1ade95(0x60d)+'ke-li'+_0x1ade95(0x1f5)+'=\x22rou'+_0x1ade95(0x1fc)+_0x1ade95(0x337)+_0x1ade95(0x405)+_0x1ade95(0x11d)+'\x22roun'+'d\x22/><'+_0x1ade95(0x27f)+'e\x20cx='+_0x1ade95(0x136)+'cy=\x221'+_0x1ade95(0x236)+_0x1ade95(0x2eb)+_0x1ade95(0x127)+'=\x22#ff'+'6b9d\x22'+_0x1ade95(0x644)+_0x1ade95(0x33a),_0x299551[_0x1ade95(0x18f)+_0x1ade95(0xf8)+'d'](_0x3e81fe);var _0x388be0=document[_0x1ade95(0x46f)+_0x1ade95(0x5e3)+_0x1ade95(0xe9)](_0x1ade95(0x58c));_0x388be0[_0x1ade95(0x409)+'Name']=_0x2ee71f['XGgsj'];var _0x5de3c4=document[_0x1ade95(0x46f)+_0x1ade95(0x5e3)+_0x1ade95(0xe9)](_0x1ade95(0x64f)+'r');_0x5de3c4[_0x1ade95(0x409)+'Name']=_0x1ade95(0x66e)+'p';var _0x3e904e=document[_0x1ade95(0x46f)+_0x1ade95(0x5e3)+_0x1ade95(0xe9)](_0x2ee71f[_0x1ade95(0x563)]);_0x3e904e[_0x1ade95(0x409)+_0x1ade95(0x277)]='mn-ti'+'tles';var _0x31cde5=document['creat'+_0x1ade95(0x5e3)+'ent']('h2');_0x31cde5[_0x1ade95(0x409)+_0x1ade95(0x277)]='mn-h',_0x31cde5['textC'+_0x1ade95(0x503)+'t']=_0x2ee71f[_0x1ade95(0x419)];var _0x463214=document[_0x1ade95(0x46f)+'eElem'+_0x1ade95(0xe9)](_0x2ee71f[_0x1ade95(0x4aa)]);_0x463214[_0x1ade95(0x409)+'Name']=_0x2ee71f[_0x1ade95(0x481)],_0x463214['textC'+'onten'+'t']='kours'+'trike'+'.io\x20m'+'enu',_0x3e904e['appen'+'d'](_0x31cde5,_0x463214);var _0x4b506a=document['creat'+'eElem'+_0x1ade95(0xe9)](_0x2ee71f[_0x1ade95(0x319)]);_0x4b506a['type']=_0x2ee71f[_0x1ade95(0x319)],_0x4b506a[_0x1ade95(0x409)+'Name']='mn-cl'+'ose',_0x4b506a['title']=_0x2ee71f['tyuBs'],_0x4b506a[_0x1ade95(0x2d8)+'HTML']=_0x2ee71f['DfOfU'],_0x4b506a[_0x1ade95(0x601)+'ck']=()=>_0x687f45(![]),_0x5de3c4[_0x1ade95(0x18f)+'d'](_0x3e904e,_0x4b506a);var _0x3847ff=document['creat'+'eElem'+_0x1ade95(0xe9)](_0x1ade95(0x58c));_0x3847ff[_0x1ade95(0x409)+_0x1ade95(0x277)]=_0x1ade95(0x1dc)+'ls',_0x388be0[_0x1ade95(0x18f)+'d'](_0x5de3c4,_0x3847ff),_0x1bd063[_0x1ade95(0x18f)+'d'](_0x299551,_0x388be0);var _0x47eb8f=new Map();for(var _0x36dc29 of _0x1292d4){var _0xce09a2=('6|3|5'+'|0|1|'+_0x1ade95(0x4ed))[_0x1ade95(0x5a2)]('|'),_0x59c9b2=0x164*-0x1+0x1838+-0xb6a*0x2;while(!![]){switch(_0xce09a2[_0x59c9b2++]){case'0':_0x4b3286['title']=_0x36dc29[_0x1ade95(0x452)];continue;case'1':_0x4b3286[_0x1ade95(0x2d8)+_0x1ade95(0x5e8)]=_0x2ee71f[_0x1ade95(0x1ce)](_0x1ade95(0x216)+'l>',_0x36dc29[_0x1ade95(0x452)])+('</sma'+'ll>');continue;case'2':_0x47eb8f[_0x1ade95(0x2b0)](_0x36dc29['id'],_0x4b3286);continue;case'3':_0x4b3286[_0x1ade95(0x225)]=_0x2ee71f[_0x1ade95(0x319)];continue;case'4':_0x299551[_0x1ade95(0x18f)+'dChil'+'d'](_0x4b3286);continue;case'5':_0x4b3286[_0x1ade95(0x409)+_0x1ade95(0x277)]=_0x2ee71f['vdEEX'];continue;case'6':var _0x4b3286=document[_0x1ade95(0x46f)+_0x1ade95(0x5e3)+'ent'](_0x1ade95(0x31c)+'n');continue;case'7':_0x4b3286[_0x1ade95(0x601)+'ck']=(_0x30be7e=>()=>_0x3abe6f(_0x30be7e))(_0x36dc29['id']);continue;}break;}}function _0x3abe6f(_0x2d52a6){var _0x53e727=_0x1ade95,_0x1a92ca=('2|3|1'+'|4|5|'+'0')[_0x53e727(0x5a2)]('|'),_0x3553ad=0x4*0x74+0x1a49+-0x1c19;while(!![]){switch(_0x1a92ca[_0x3553ad++]){case'0':_0x3847ff['repla'+_0x53e727(0x460)+_0x53e727(0x48d)](..._0x13df2f(_0x2d52a6));continue;case'1':var _0x9522a=_0x1292d4[_0x53e727(0x63f)](_0x177cb1=>_0x177cb1['id']===_0x2d52a6)||_0x1292d4[-0x1*0xea1+-0x7*-0x7d+0xb36];continue;case'2':_0x5c11cd['cat']=_0x2d52a6;continue;case'3':_0x957269[_0x53e727(0x4b6)](_0x2a3d74);continue;case'4':_0x31cde5[_0x53e727(0x125)+_0x53e727(0x503)+'t']=_0x53e727(0x31e)+'a\x20Kou'+_0x53e727(0x263)+_0x9522a['label'];continue;case'5':for(var [_0x1d272c,_0x161db9]of _0x47eb8f)_0x161db9[_0x53e727(0x409)+_0x53e727(0x199)][_0x53e727(0x2f9)+'e'](_0x53e727(0x1c6)+'e',_0x957269[_0x53e727(0x5ef)](_0x1d272c,_0x2d52a6));continue;}break;}}return _0x3abe6f(_0x5c11cd[_0x1ade95(0x1ca)]||_0x2ee71f[_0x1ade95(0x591)]),setInterval(()=>{var _0x41723b=_0x1ade95;if(!_0x5b6da5)return;var _0x3169c9=_0x3847ff[_0x41723b(0x2b6)+_0x41723b(0x64e)];for(var _0x562224=-0x22e9+0x22*-0x1b+0x267f;_0x562224<_0x3169c9[_0x41723b(0x2ee)+'h'];_0x562224++){var _0x94b3c6=_0x3169c9[_0x562224]['query'+'Selec'+_0x41723b(0xf1)](_0x41723b(0x1bf)+_0x41723b(0x37c));_0x94b3c6&&(_0x94b3c6['textC'+_0x41723b(0x503)+'t']['index'+'Of']('UWMK')===0x5*-0x301+0x217c+0x1277*-0x1||_0x94b3c6['textC'+'onten'+'t']['index'+'Of'](_0x4fc2d1[_0x41723b(0x195)])===0xd98+0x1*0x1e67+0x649*-0x7)&&(_0x94b3c6[_0x41723b(0x125)+'onten'+'t']=_0x3ab4d7[_0x41723b(0x48a)+'ode']?_0x41723b(0x542)+_0x41723b(0x41d)+'-\x20ove'+_0x41723b(0x51d)+_0x41723b(0x545)+_0x41723b(0x3a1)+_0x41723b(0x423)+_0x41723b(0x3de)+'ad\x20to'+_0x41723b(0x652)+')':_0x3ab4d7[_0x41723b(0x443)]?_0x4fc2d1[_0x41723b(0x133)](_0x4fc2d1[_0x41723b(0x3c6)](_0x4fc2d1['raooz'](_0x4fc2d1['hQQwy'](_0x4fc2d1[_0x41723b(0x29d)](_0x4fc2d1[_0x41723b(0x29d)](_0x4fc2d1[_0x41723b(0x411)](_0x4fc2d1[_0x41723b(0xeb)],_0x3ab4d7[_0x41723b(0x4d8)+_0x41723b(0x4ca)]?_0x4fc2d1[_0x41723b(0x133)](_0x4fc2d1['KWSVY'](_0x4fc2d1['dbxlB'](_0x3ab4d7['hooks'+'Ok'],'/'),_0x3ab4d7['hooks'+_0x41723b(0x4ca)]),_0x4fc2d1['KbPzu']):'0\x20hoo'+_0x41723b(0x1e1)+_0x41723b(0x1a3)+'all\x20o'+_0x41723b(0x64c)),_0x4fc2d1['IXNJi']),_0x3ab4d7['gameL'+_0x41723b(0xf3)]?'loade'+'d':_0x4fc2d1[_0x41723b(0x390)])+('\x20|\x20sh'+'ooter'+'\x20'),_0x3ab4d7[_0x41723b(0x2a2)+_0x41723b(0x410)]?_0x41723b(0x2cc):_0x4fc2d1[_0x41723b(0x4a9)]),_0x41723b(0x348)+_0x41723b(0x62e)+'t\x20'),_0x3ab4d7['movem'+_0x41723b(0x59e)]?_0x41723b(0x2cc):_0x41723b(0x250)),_0x3ab4d7['lastE'+_0x41723b(0x5df)]?_0x4fc2d1[_0x41723b(0x28d)]+_0x3ab4d7[_0x41723b(0x2d2)+_0x41723b(0x5df)]:''):_0x41723b(0x577)+'MISSI'+_0x41723b(0x27a)+'overl'+'ay\x20on'+'ly\x20(r'+'einst'+_0x41723b(0x2e6)+'he\x20us'+_0x41723b(0x278)+_0x41723b(0x599));}},-0x115f+0x687+0xec0*0x1),_0x1bd063;}var _0x3f7fa8=_0x761c5(0x439)+_0x761c5(0x46a)+_0x761c5(0x154)+'l:\x20in'+'itial'+';\x20}\x0a\x20'+_0x761c5(0x619)+'{\x20box'+'-sizi'+_0x761c5(0x157)+'order'+'-box;'+'\x20marg'+'in:\x200'+_0x761c5(0x520)+'t-fam'+'ily:\x20'+_0x761c5(0x1bd)+'r\x22,\x20\x22'+'Segoe'+_0x761c5(0x36d)+_0x761c5(0x1f7)+_0x761c5(0x3b0)+',\x20san'+_0x761c5(0x19c)+_0x761c5(0x4bb)+_0x761c5(0x439)+_0x761c5(0x1aa)+_0x761c5(0x3da)+_0x761c5(0x575)+_0x761c5(0x43f)+':\x20abs'+_0x761c5(0x226)+_0x761c5(0x21e)+_0x761c5(0x1c2)+'4px;\x20'+_0x761c5(0x4a7)+'m:\x2024'+_0x761c5(0x13c)+_0x761c5(0x638)+_0x761c5(0x458)+'620px'+',\x20cal'+_0x761c5(0x261)+'vw\x20-\x20'+_0x761c5(0x147)+');\x20ma'+_0x761c5(0x495)+_0x761c5(0x4e8)+_0x761c5(0x39a)+_0x761c5(0x10f)+_0x761c5(0x5de)+'(100v'+'h\x20-\x204'+_0x761c5(0x237)+';\x0a\x20\x20\x20'+'\x20\x20\x20di'+_0x761c5(0x552)+':\x20fle'+_0x761c5(0x594)+_0x761c5(0x2ff)+'px;\x20p'+_0x761c5(0x120)+'g:\x2010'+'px;\x20b'+'order'+_0x761c5(0x4a2)+_0x761c5(0x19a)+'2px;\x20'+'point'+'er-ev'+_0x761c5(0x111)+'\x20auto'+';\x0a\x20\x20\x20'+_0x761c5(0x554)+_0x761c5(0x4e0)+_0x761c5(0x2fb)+_0x761c5(0x325)+_0x761c5(0x52e)+_0x761c5(0x566)+_0x761c5(0x3d5)+_0x761c5(0x48e)+_0x761c5(0x185)+_0x761c5(0x501)+':\x20blu'+'r(22p'+_0x761c5(0x3ec)+_0x761c5(0x65f)+_0x761c5(0x23a)+'%);\x20-'+_0x761c5(0x3ff)+_0x761c5(0x629)+_0x761c5(0x224)+'-filt'+'er:\x20b'+_0x761c5(0x265)+'2px)\x20'+_0x761c5(0x4b2)+'ate(1'+_0x761c5(0x67b)+_0x761c5(0x439)+_0x761c5(0x413)+'-shad'+_0x761c5(0x260)+'\x200\x200\x20'+_0x761c5(0x32b)+_0x761c5(0x3d2)+_0x761c5(0x323)+_0x761c5(0x5ff)+_0x761c5(0x555)+_0x761c5(0x50d)+'et\x200\x20'+_0x761c5(0x31b)+'\x20rgba'+_0x761c5(0x3e1)+'255,2'+_0x761c5(0x10c)+_0x761c5(0xef)+_0x761c5(0x4a0)+'\x2080px'+'\x20rgba'+_0x761c5(0x529)+_0x761c5(0x388)+_0x761c5(0x622)+'\x20\x20\x20\x20o'+_0x761c5(0x570)+_0x761c5(0xfa)+_0x761c5(0x532)+_0x761c5(0x25e)+_0x761c5(0x327)+_0x761c5(0x3c2)+_0x761c5(0x3be)+'px);\x20'+_0x761c5(0x662)+'er-ev'+'ents:'+_0x761c5(0x288)+_0x761c5(0x57b)+_0x761c5(0x1a4)+_0x761c5(0x4cc)+'pacit'+_0x761c5(0x4c5)+'s\x20eas'+_0x761c5(0x29b)+'ansfo'+_0x761c5(0x3f2)+_0x761c5(0x66f)+_0x761c5(0x30f)+'ezier'+'(.22,'+_0x761c5(0x360)+_0x761c5(0x193)+'\x20\x20\x20\x20\x20'+_0x761c5(0x2b5)+'r:\x20#f'+'6eef2'+_0x761c5(0x520)+_0x761c5(0x5e1)+_0x761c5(0x1cf)+'px;\x20}'+_0x761c5(0x439)+'.mn-p'+'anel.'+_0x761c5(0x1a5)+_0x761c5(0x2e0)+'acity'+_0x761c5(0x4c8)+_0x761c5(0x1c7)+_0x761c5(0x58a)+_0x761c5(0x288)+_0x761c5(0x39c)+_0x761c5(0x19d)+'event'+_0x761c5(0x2f3)+'to;\x20}'+_0x761c5(0x439)+'.mn-s'+_0x761c5(0x4a3)+_0x761c5(0x5ce)+'lay:\x20'+'flex;'+_0x761c5(0x534)+_0x761c5(0x603)+_0x761c5(0x2c7)+_0x761c5(0x134)+_0x761c5(0x407)+'align'+_0x761c5(0x2a6)+_0x761c5(0x4fc)+_0x761c5(0x2b2)+'\x20gap:'+_0x761c5(0x34c)+_0x761c5(0x382)+_0x761c5(0x2a1)+'px;\x20f'+_0x761c5(0x528)+'none;'+'\x20padd'+_0x761c5(0x55b)+'12px\x20'+('0;\x20bo'+'rder-'+_0x761c5(0x5ab)+_0x761c5(0x5c4)+'px;\x0a\x20'+_0x761c5(0x5e2)+_0x761c5(0x648)+_0x761c5(0x3eb)+':\x20rgb'+_0x761c5(0x3dd)+_0x761c5(0xfc)+_0x761c5(0x66b)+_0x761c5(0x279)+_0x761c5(0x155)+'shado'+_0x761c5(0x398)+_0x761c5(0x597)+'\x200\x200\x20'+_0x761c5(0x32b)+_0x761c5(0x3d2)+'55,25'+_0x761c5(0x5ff)+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x761c5(0x2fe)+_0x761c5(0x3f4)+'ispla'+_0x761c5(0x1e4)+_0x761c5(0x616)+'lace-'+_0x761c5(0x22d)+':\x20cen'+'ter;\x20'+'width'+_0x761c5(0x1af)+_0x761c5(0x32c)+_0x761c5(0x29e)+_0x761c5(0x1ea)+_0x761c5(0x63d)+_0x761c5(0x251)+'n-log'+'o-svg'+'\x20{\x20wi'+'dth:\x20'+_0x761c5(0x1a8)+'\x20heig'+_0x761c5(0x1c2)+'5px;\x20'+_0x761c5(0x671)+'low:\x20'+_0x761c5(0x2c4)+'le;\x20f'+_0x761c5(0x501)+_0x761c5(0x2e4)+_0x761c5(0x551)+'dow(0'+'\x200\x204p'+'x\x20rgb'+'a(255'+_0x761c5(0x5d5)+_0x761c5(0x148)+'8));\x20'+'}\x0a\x20\x20\x20'+_0x761c5(0x473)+_0x761c5(0x3ea)+_0x761c5(0x5ce)+'lay:\x20'+_0x761c5(0x459)+'\x20alig'+_0x761c5(0x444)+'ms:\x20c'+'enter'+_0x761c5(0x188)+_0x761c5(0x4d2)+_0x761c5(0x621)+'nt:\x20c'+'enter'+';\x20wid'+_0x761c5(0x678)+'2px;\x20'+_0x761c5(0x583)+_0x761c5(0x397)+_0x761c5(0x282)+_0x761c5(0x49d)+':\x200;\x20'+'borde'+'r-rad'+'ius:\x20'+_0x761c5(0x1b4)+'\x0a\x20\x20\x20\x20'+_0x761c5(0x5d6)+'kgrou'+'nd:\x20t'+'ransp'+_0x761c5(0x4fe)+_0x761c5(0x479)+'or:\x20r'+_0x761c5(0x3d2)+'46,23'+'8,242'+',.4);'+_0x761c5(0x53c)+_0x761c5(0x20d)+'ointe'+_0x761c5(0x4d7)+_0x761c5(0x3ef)+_0x761c5(0x295)+_0x761c5(0x23e)+_0x761c5(0x510)+_0x761c5(0x307)+'t:\x2070'+'0;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x761c5(0x358)+_0x761c5(0x59c)+'er\x20{\x20'+'color'+':\x20rgb'+'a(246'+_0x761c5(0x3c8)+_0x761c5(0x3e6)+_0x761c5(0x61c)+_0x761c5(0x439)+_0x761c5(0xf9)+_0x761c5(0x3ce)+'tive\x20'+_0x761c5(0x5c5)+'or:\x20#'+'ff6b9'+_0x761c5(0x1d1)+'ckgro'+'und:\x20'+_0x761c5(0x325)+'255,1'+'07,15'+_0x761c5(0x300)+_0x761c5(0x63d)+_0x761c5(0x251)+_0x761c5(0x500)+_0x761c5(0x230)+_0x761c5(0x528)+_0x761c5(0x173)+'n-wid'+_0x761c5(0x283)+';\x20dis'+'play:'+_0x761c5(0x534)+_0x761c5(0x324)+_0x761c5(0x5f9)+'ectio'+_0x761c5(0x2d1)+'lumn;'+'\x20}\x0a\x20\x20'+_0x761c5(0x3a3)+_0x761c5(0x5c3)+'{\x20dis'+_0x761c5(0x5a8)+'\x20flex'+_0x761c5(0x28c)+_0x761c5(0x5c9)+'ems:\x20'+_0x761c5(0x5b7)+'r;\x20ga'+_0x761c5(0x212)+_0x761c5(0x1e8)+_0x761c5(0x120)+_0x761c5(0x141)+_0x761c5(0x38c)+'\x2012px'+';\x20use'+_0x761c5(0x140)+'ect:\x20'+_0x761c5(0x47d)+'\x20}\x0a\x20\x20'+_0x761c5(0x3a3)+_0x761c5(0x4f9)+_0x761c5(0x611)+_0x761c5(0x26a)+_0x761c5(0x311)+_0x761c5(0x471)+_0x761c5(0x1cd)+_0x761c5(0x2cb)+_0x761c5(0x54a)+'mn-h\x20'+'{\x20fon'+'t-siz'+'e:\x2017'+_0x761c5(0x2de)+_0x761c5(0x44c)+_0x761c5(0x203)+':\x20650'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-sub'+_0x761c5(0x3ae)+'nt-si'+_0x761c5(0x295)+'1px;\x20'+_0x761c5(0x150))+('ty:\x20.'+_0x761c5(0x308)+_0x761c5(0x54a)+_0x761c5(0x35c)+_0x761c5(0x3b7)+'\x20disp'+_0x761c5(0x5fd)+_0x761c5(0x246)+_0x761c5(0x52a)+_0x761c5(0x315)+'ms:\x20c'+'enter'+';\x20wid'+_0x761c5(0x440)+_0x761c5(0x5e0)+'heigh'+'t:\x2028'+'px;\x20b'+_0x761c5(0x49d)+':\x200;\x20'+_0x761c5(0x124)+_0x761c5(0x164)+'ius:\x20'+'8px;\x20'+'backg'+_0x761c5(0x3eb)+_0x761c5(0x327)+_0x761c5(0x5c0)+_0x761c5(0x132)+_0x761c5(0xec)+_0x761c5(0x46e)+'erit;'+_0x761c5(0x5d3)+_0x761c5(0x392)+'.45;\x20'+_0x761c5(0x17d)+'r:\x20po'+'inter'+';\x20}\x0a\x20'+_0x761c5(0x251)+'n-clo'+'se:ho'+'ver\x20{'+_0x761c5(0x5d3)+'ity:\x20'+_0x761c5(0x353)+_0x761c5(0x4e0)+'und:\x20'+_0x761c5(0x325)+_0x761c5(0x2e7)+'55,25'+'5,.05'+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x761c5(0x35c)+'ose\x20s'+'vg\x20{\x20'+_0x761c5(0x3e2)+_0x761c5(0x609)+_0x761c5(0x32c)+'ight:'+'\x2014px'+_0x761c5(0x49f)+'l:\x20no'+_0x761c5(0x3e8)+_0x761c5(0x337)+':\x20cur'+_0x761c5(0x4dd)+_0x761c5(0x416)+'\x20stro'+'ke-wi'+_0x761c5(0x1cd)+_0x761c5(0x1d8)+_0x761c5(0x49c)+'linec'+'ap:\x20r'+_0x761c5(0x352)+_0x761c5(0x14b)+_0x761c5(0x3a3)+'-cols'+_0x761c5(0x253)+'ex:\x201'+_0x761c5(0x178)+'-heig'+'ht:\x200'+_0x761c5(0x61a)+_0x761c5(0x378)+_0x761c5(0x464)+'uto;\x20'+'displ'+'ay:\x20g'+_0x761c5(0x156)+_0x761c5(0x3cb)+_0x761c5(0x4c1)+'ate-c'+_0x761c5(0x558)+_0x761c5(0x218)+_0x761c5(0x129)+_0x761c5(0x1c9)+'fill,'+_0x761c5(0x44e)+_0x761c5(0x35f)+_0x761c5(0x266)+'1fr))'+_0x761c5(0x28c)+_0x761c5(0x5c9)+'ems:\x20'+_0x761c5(0x201)+';\x20ali'+_0x761c5(0x19f)+_0x761c5(0xf2)+':\x20sta'+'rt;\x20g'+'ap:\x201'+_0x761c5(0x23e)+'paddi'+_0x761c5(0x1b8)+_0x761c5(0x34f)+'6px\x200'+_0x761c5(0x63d)+_0x761c5(0x251)+'n-col'+_0x761c5(0x2b3)+'ebkit'+_0x761c5(0x496)+_0x761c5(0x11b)+'\x20{\x20wi'+_0x761c5(0x1cd)+_0x761c5(0x5e0)+'}\x0a\x20\x20\x20'+_0x761c5(0x473)+'cols:'+':-web'+'kit-s'+_0x761c5(0x3e5)+_0x761c5(0x3a9)+_0x761c5(0x2a8)+_0x761c5(0x3b3)+_0x761c5(0xe8)+_0x761c5(0x462)+_0x761c5(0x3d2)+_0x761c5(0x323)+_0x761c5(0x5ff)+',.08)'+_0x761c5(0x51a)+'der-r'+'adius'+':\x204px'+_0x761c5(0x63d)+_0x761c5(0x3f1)+'k-car'+'d\x20{\x20b'+'order'+_0x761c5(0x4a2)+'us:\x201'+_0x761c5(0x442)+_0x761c5(0x648)+_0x761c5(0x3eb)+_0x761c5(0x2f8)+_0x761c5(0x3dd)+',255,'+'255,.'+_0x761c5(0x279)+'\x20box-'+'shado'+'w:\x20in'+'set\x200'+_0x761c5(0x28a)+'1px\x20r'+'gba(2'+_0x761c5(0x323)+'5,255'+_0x761c5(0x1d4)+';\x20}\x0a\x20'+_0x761c5(0x3f1)+_0x761c5(0x3aa)+_0x761c5(0x354)+_0x761c5(0x3b3)+_0x761c5(0xe8)+_0x761c5(0x462)+_0x761c5(0x3d2)+_0x761c5(0x323)+'5,255'+_0x761c5(0x531)+_0x761c5(0x3df)+'-shad'+'ow:\x20i'+'nset\x20'+_0x761c5(0x25d)+'\x201px\x20'+_0x761c5(0x325)+'255,1'+_0x761c5(0x345)+_0x761c5(0x41e)+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x761c5(0x1f2)+_0x761c5(0x45e)+'ad\x20{\x20'+_0x761c5(0x484))+(_0x761c5(0x553)+_0x761c5(0x502)+_0x761c5(0x357)+'-item'+'s:\x20ce'+_0x761c5(0x2b2)+_0x761c5(0x4ec)+'\x208px;'+_0x761c5(0x5aa)+'ing:\x20'+'11px\x20'+_0x761c5(0x490)+'\x20}\x0a\x20\x20'+_0x761c5(0x4af)+'-card'+'-titl'+_0x761c5(0x3ad)+'lex:\x20'+'1;\x20mi'+'n-wid'+'th:\x200'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+_0x761c5(0x3bd)+'le\x20st'+'rong\x20'+'{\x20fon'+_0x761c5(0x5e1)+_0x761c5(0x1cf)+'px;\x20f'+'ont-w'+'eight'+':\x20600'+';\x20col'+_0x761c5(0x4b7)+'gba(2'+_0x761c5(0x4c6)+_0x761c5(0x118)+',.45)'+_0x761c5(0x63d)+'\x20\x20\x20.s'+_0x761c5(0x3aa)+'d.on\x20'+'.sk-c'+'ard-t'+_0x761c5(0x2bf)+_0x761c5(0x469)+_0x761c5(0x232)+_0x761c5(0x3a4)+_0x761c5(0x5b8)+_0x761c5(0x10a)+'}\x0a\x20\x20\x20'+_0x761c5(0x456)+'mbody'+'\x20{\x20pa'+_0x761c5(0x12d)+':\x200\x201'+'2px\x201'+_0x761c5(0x23e)+'}\x0a\x20\x20\x20'+_0x761c5(0x456)+_0x761c5(0x21d)+_0x761c5(0x3ae)+_0x761c5(0x3ef)+'ze:\x201'+_0x761c5(0x1a7)+_0x761c5(0x150)+'ty:\x20.'+_0x761c5(0x610)+_0x761c5(0x137)+_0x761c5(0x4a7)+'m:\x206p'+'x;\x20}\x0a'+_0x761c5(0x54a)+_0x761c5(0x584)+'l\x20{\x20d'+_0x761c5(0x42e)+'y:\x20fl'+'ex;\x20a'+_0x761c5(0x1c4)+'items'+_0x761c5(0x2b8)+_0x761c5(0x5ca)+_0x761c5(0x1e5)+_0x761c5(0x5e0)+_0x761c5(0x1d9)+_0x761c5(0x2c8)+_0x761c5(0x620)+_0x761c5(0x16f)+_0x761c5(0x24c)+_0x761c5(0x627)+_0x761c5(0x66a)+'}\x0a\x20\x20\x20'+_0x761c5(0x456)+'label'+_0x761c5(0x253)+_0x761c5(0x241)+';\x20col'+_0x761c5(0x4b7)+'gba(2'+'46,23'+_0x761c5(0x118)+',.75)'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x761c5(0x19e)+_0x761c5(0x4bd)+'ispla'+'y:\x20bl'+'ock;\x20'+_0x761c5(0x510)+'size:'+_0x761c5(0x47c)+';\x20opa'+'city:'+'\x20.4;\x20'+'}\x0a\x20\x20\x20'+_0x761c5(0x456)+'switc'+_0x761c5(0x4bc)+'ositi'+_0x761c5(0x328)+_0x761c5(0x61e)+_0x761c5(0x1c5)+'idth:'+_0x761c5(0x4e6)+';\x20hei'+_0x761c5(0x4e8)+'14px;'+_0x761c5(0x248)+'er:\x200'+_0x761c5(0x51a)+_0x761c5(0x66d)+_0x761c5(0x4e7)+':\x2099p'+_0x761c5(0x359)+_0x761c5(0x4e0)+_0x761c5(0x2fb)+'rgba('+_0x761c5(0x2e7)+'55,25'+_0x761c5(0x312)+');\x20cu'+'rsor:'+_0x761c5(0x38b)+'ter;\x20'+'flex:'+'\x20none'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x761c5(0x298)+_0x761c5(0x214)+_0x761c5(0x42b)+_0x761c5(0x50c)+_0x761c5(0xf2)+_0x761c5(0x361)+_0x761c5(0x243)+'tion:'+'\x20abso'+_0x761c5(0x53f)+_0x761c5(0x106)+_0x761c5(0x634)+'\x20left'+_0x761c5(0x1ff)+_0x761c5(0x231)+_0x761c5(0x578)+_0x761c5(0x4a4)+_0x761c5(0x203)+_0x761c5(0x5b2)+_0x761c5(0x51a)+'der-r'+_0x761c5(0x4e7)+_0x761c5(0x60c)+';\x20bac'+_0x761c5(0xe8)+_0x761c5(0x462)+'gba(2'+'55,25'+'5,255'+',.25)'+_0x761c5(0x57b)+_0x761c5(0x1a4)+'on:\x20l'+'eft\x20.'+'2s,\x20b'+_0x761c5(0x522)+'ound\x20'+'.2s;\x20'+_0x761c5(0x641)+'\x20.sk-'+'switc'+'h[ari'+_0x761c5(0x175)+'cked='+'\x22true'+_0x761c5(0x227)+_0x761c5(0x648)+_0x761c5(0x3eb)+_0x761c5(0x2f8))+('a(255'+_0x761c5(0x5d5)+_0x761c5(0x148)+_0x761c5(0x221)+'}\x0a\x20\x20\x20'+_0x761c5(0x456)+_0x761c5(0x366)+'h[ari'+'a-che'+'cked='+'\x22true'+_0x761c5(0x680)+_0x761c5(0x5d8)+_0x761c5(0x346)+_0x761c5(0x5f2)+'px;\x20b'+'ackgr'+_0x761c5(0x49e)+_0x761c5(0x2f0)+_0x761c5(0x1a2)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x761c5(0x342)+_0x761c5(0x62f)+_0x761c5(0x4e0)+'und:\x20'+_0x761c5(0x325)+'255,2'+'55,25'+_0x761c5(0x27e)+_0x761c5(0x377)+'order'+':\x200;\x20'+_0x761c5(0x124)+'r-rad'+'ius:\x20'+'6px;\x20'+'color'+':\x20#f6'+_0x761c5(0x369)+'\x20padd'+_0x761c5(0x55b)+_0x761c5(0x113)+_0x761c5(0x2de)+'ont-s'+'ize:\x20'+'11.5p'+'x;\x20ou'+_0x761c5(0x100)+_0x761c5(0x494)+'e;\x20bo'+_0x761c5(0x412)+_0x761c5(0x170)+'inset'+_0x761c5(0x28a)+'0\x201px'+'\x20rgba'+'(255,'+_0x761c5(0x2e7)+'55,.0'+_0x761c5(0x466)+'\x0a\x20\x20\x20\x20'+'.sk-f'+'ield\x20'+_0x761c5(0x1e6)+_0x761c5(0x1d3)+'ackgr'+'ound:'+_0x761c5(0x4e1)+_0x761c5(0x330)+_0x761c5(0x641)+_0x761c5(0x456)+'range'+'\x20{\x20di'+_0x761c5(0x552)+_0x761c5(0x151)+_0x761c5(0x171)+_0x761c5(0x274)+'tems:'+_0x761c5(0x3cd)+_0x761c5(0x3ca)+_0x761c5(0x11c)+'px;\x20}'+'\x0a\x20\x20\x20\x20'+_0x761c5(0x3f7)+'lider'+'\x20{\x20-w'+'ebkit'+'-appe'+_0x761c5(0x123)+'e:\x20no'+_0x761c5(0x3fa)+_0x761c5(0x3b2)+_0x761c5(0x1c0)+_0x761c5(0x288)+';\x20wid'+_0x761c5(0x4d0)+_0x761c5(0x23e)+_0x761c5(0x583)+'t:\x208p'+_0x761c5(0x359)+_0x761c5(0x4e0)+_0x761c5(0x2fb)+_0x761c5(0x1c7)+'paren'+_0x761c5(0x493)+_0x761c5(0x54a)+'sk-sl'+_0x761c5(0x642)+':-web'+_0x761c5(0x4cf)+'lider'+'-runn'+'able-'+'track'+'\x20{\x20he'+_0x761c5(0x29e)+'\x202px;'+'\x20bord'+_0x761c5(0x347)+'dius:'+_0x761c5(0x208)+_0x761c5(0x2be)+_0x761c5(0x142)+_0x761c5(0x2e5)+'near-'+_0x761c5(0x26e)+_0x761c5(0x53b)+'ff6b9'+'d,\x20#f'+'f6b9d'+_0x761c5(0x5ae)+'\x20/\x20va'+'r(--p'+_0x761c5(0x468)+_0x761c5(0x476)+_0x761c5(0x1c3)+_0x761c5(0x44d)+_0x761c5(0x329)+'ba(25'+'5,255'+_0x761c5(0xfc)+_0x761c5(0x393)+'\x20}\x0a\x20\x20'+_0x761c5(0x4af)+'-slid'+_0x761c5(0xee)+'webki'+_0x761c5(0x523)+_0x761c5(0x3d6)+'humb\x20'+'{\x20-we'+_0x761c5(0x54f)+_0x761c5(0x63b)+'rance'+_0x761c5(0x494)+'e;\x20wi'+_0x761c5(0x1cd)+_0x761c5(0x5ea)+'heigh'+'t:\x206p'+_0x761c5(0x509)+_0x761c5(0x137)+'top:\x20'+_0x761c5(0x3bf)+'\x20bord'+_0x761c5(0x347)+_0x761c5(0x435)+'\x2050%;'+'\x20back'+'groun'+_0x761c5(0x35e)+_0x761c5(0x406)+';\x20}\x0a\x20'+_0x761c5(0x3f1)+_0x761c5(0x1ac)+_0x761c5(0x3ae)+'nt-si'+_0x761c5(0x295)+_0x761c5(0x1a7)+'font-'+_0x761c5(0x307)+'t:\x2060'+_0x761c5(0x606)+'n-wid'+_0x761c5(0x440)+'8px;\x20'+_0x761c5(0x2bd)+'align'+_0x761c5(0x2d9)+_0x761c5(0x633)+_0x761c5(0x3a4)+_0x761c5(0x32d)+_0x761c5(0x44a)+_0x761c5(0x25c)+'42,.8'+_0x761c5(0x33d)+'\x20\x20\x20\x20.'+'sk-co'+'lor\x20{')+(_0x761c5(0x382)+_0x761c5(0x3fd)+'px;\x20h'+'eight'+_0x761c5(0x50a)+'x;\x20bo'+'rder:'+_0x761c5(0x4d3)+_0x761c5(0x49d)+_0x761c5(0x4a2)+'us:\x206'+_0x761c5(0x282)+'ackgr'+'ound:'+'\x20none'+_0x761c5(0x4fd)+_0x761c5(0x372)+'\x200;\x20c'+'ursor'+_0x761c5(0x383)+_0x761c5(0x2b2)+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+'-note'+'\x20{\x20fo'+_0x761c5(0x3ef)+'ze:\x201'+_0x761c5(0x1a7)+'color'+':\x20rgb'+'a(246'+_0x761c5(0x3c8)+_0x761c5(0x3e6)+'5);\x20p'+_0x761c5(0x120)+'g:\x202p'+_0x761c5(0x168)+_0x761c5(0x641)+_0x761c5(0x456)+_0x761c5(0x36c)+_0x761c5(0x34d)+_0x761c5(0x2b5)+_0x761c5(0x23d)+'f7a93'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-btn'+_0x761c5(0x154)+_0x761c5(0x176)+_0x761c5(0x395)+_0x761c5(0x4f1)+'start'+_0x761c5(0x51a)+'der:\x20'+_0x761c5(0x292)+_0x761c5(0x41b)+_0x761c5(0x5ab)+_0x761c5(0x499)+'x;\x20pa'+'dding'+_0x761c5(0x5b2)+'\x2016px'+_0x761c5(0x289)+_0x761c5(0xe8)+_0x761c5(0x564)+_0x761c5(0x356)+'d;\x20co'+_0x761c5(0x449)+_0x761c5(0x190)+'\x20font'+_0x761c5(0x24c)+_0x761c5(0x627)+_0x761c5(0x66a)+'font-'+_0x761c5(0x307)+_0x761c5(0x41f)+'0;\x20cu'+_0x761c5(0x2c2)+_0x761c5(0x38b)+_0x761c5(0x5ca)+'}\x0a\x20\x20\x20'+_0x761c5(0x456)+_0x761c5(0x4f6)+'over\x20'+_0x761c5(0x3d9)+_0x761c5(0x686)+'brigh'+'tness'+_0x761c5(0x42c)+';\x20}\x0a\x20'+_0x761c5(0x202));window['addEv'+_0x761c5(0x4c4)+_0x761c5(0x2f1)+'r'](_0x2ee71f['bxNZG'],_0xe924eb=>{var _0x4b760c=_0x761c5,_0x37af18={'xxVDJ':function(_0x25a5e,_0x3a6e32){return _0x25a5e(_0x3a6e32);},'NEXqL':function(_0x258f7b,_0x30d71a){return _0x258f7b-_0x30d71a;}};if(_0x2ee71f['YtaTl'](_0xe924eb['code'],_0x2ee71f['oYBcZ'])){if(_0x4b760c(0x654)!=='BEfal'){var _0x3b7c42={'JmkYx':function(_0x65ead3){return _0x65ead3();}},_0x3c93c0=_0x2c107b[_0x4b760c(0x46f)+'eElem'+_0x4b760c(0xe9)](_0x4b760c(0x58c));_0x3c93c0[_0x4b760c(0x409)+_0x4b760c(0x277)]='sk-ra'+'nge';var _0x3f3747=_0x528e18[_0x4b760c(0x46f)+_0x4b760c(0x5e3)+'ent'](_0x4b760c(0x145));_0x3f3747['type']='range',_0x3f3747['class'+_0x4b760c(0x277)]='sk-sl'+'ider',_0x3f3747[_0x4b760c(0x322)]=_0x264276,_0x3f3747[_0x4b760c(0x18e)]=_0x3322e4,_0x3f3747[_0x4b760c(0x14c)]=_0x3a71c5,_0x3f3747['value']=_0x402628;var _0x1c8a04=_0x2020e8[_0x4b760c(0x46f)+_0x4b760c(0x5e3)+_0x4b760c(0xe9)](_0x4b760c(0x271));_0x1c8a04[_0x4b760c(0x409)+'Name']='sk-va'+'l',_0x1c8a04[_0x4b760c(0x125)+_0x4b760c(0x503)+'t']=_0x5c5401(_0x529c1a);var _0x226a8e=()=>{var _0x1bff1d=_0x4b760c;_0x1c8a04['textC'+_0x1bff1d(0x503)+'t']=_0x37af18[_0x1bff1d(0x1e2)](_0x22b54c,_0x3f3747[_0x1bff1d(0x45d)]),_0x3c93c0[_0x1bff1d(0x13b)][_0x1bff1d(0x429)+_0x1bff1d(0x122)+'y'](_0x1bff1d(0x536),_0x37af18[_0x1bff1d(0xe5)](_0x3f3747[_0x1bff1d(0x45d)],_0x4f183f)/_0x37af18[_0x1bff1d(0xe5)](_0x25e2a2,_0xebcd3e)*(-0x1*0x1801+-0x631+0x1e96)+'%');};return _0x3f3747[_0x4b760c(0x643)+'ut']=()=>{var _0x230d30=_0x4b760c;_0x3b7c42[_0x230d30(0x2b4)](_0x226a8e),_0x351a41(_0x4fa758(_0x3f3747['value']));},_0x226a8e(),_0x3c93c0[_0x4b760c(0x18f)+'d'](_0x3f3747,_0x1c8a04),_0x3c93c0;}else _0xe924eb[_0x4b760c(0x1cb)+'ntDef'+'ault'](),_0x329fed();}},!![]);var _0x574425=document[_0x761c5(0x46f)+_0x761c5(0x5e3)+'ent'](_0x2ee71f[_0x761c5(0x563)]);_0x574425[_0x761c5(0x13b)][_0x761c5(0x4d9)+'xt']='posit'+'ion:f'+'ixed;'+'top:1'+_0x761c5(0x15e)+_0x761c5(0x29e)+_0x761c5(0x490)+'z-ind'+'ex:21'+_0x761c5(0x2b7)+'646;c'+_0x761c5(0x29a)+_0x761c5(0x131)+_0x761c5(0x4df)+_0x761c5(0x638)+_0x761c5(0x437)+_0x761c5(0x583)+'t:26p'+_0x761c5(0x304)+'city:'+_0x761c5(0x4e3)+_0x761c5(0x368)+'tion:'+'opaci'+'ty\x200.'+_0x761c5(0x40c)+_0x761c5(0x547)+'-even'+'ts:au'+_0x761c5(0x519)+_0x761c5(0x191)+'drop-'+_0x761c5(0x15a)+'w(0\x200'+'\x204px\x20'+_0x761c5(0x325)+'255,1'+'07,15'+'7,0.7'+'))',_0x574425['inner'+_0x761c5(0x5e8)]=_0x761c5(0x1d7)+_0x761c5(0x50e)+_0x761c5(0x4be)+_0x761c5(0x556)+_0x761c5(0x4f5)+'<path'+'\x20d=\x22M'+_0x761c5(0x485)+_0x761c5(0x5f0)+'-2.5-'+_0x761c5(0x27d)+_0x761c5(0x657)+_0x761c5(0x4d4)+'.5\x201.'+_0x761c5(0x505)+_0x761c5(0x673)+_0x761c5(0x24b)+_0x761c5(0x582)+_0x761c5(0x461)+_0x761c5(0x581)+_0x761c5(0x4f3)+_0x761c5(0x306)+'fill='+_0x761c5(0x590)+_0x761c5(0x478)+_0x761c5(0x52b)+_0x761c5(0x65a)+_0x761c5(0x27b)+'troke'+_0x761c5(0x32a)+'h=\x222\x22'+_0x761c5(0x60d)+_0x761c5(0x53d)+_0x761c5(0x1f5)+'=\x22rou'+_0x761c5(0x1fc)+'troke'+_0x761c5(0x405)+_0x761c5(0x11d)+'\x22roun'+_0x761c5(0x13a)+_0x761c5(0x27f)+'e\x20cx='+_0x761c5(0x136)+'cy=\x221'+'0\x22\x20r='+'\x221.5\x22'+'\x20fill'+'=\x22#ff'+'6b9d\x22'+'/></s'+_0x761c5(0x33a),_0x574425['title']=_0x761c5(0x31e)+_0x761c5(0x180)+'r',_0x574425['onmou'+'seent'+'er']=()=>_0x574425['style']['opaci'+'ty']='1',_0x574425[_0x761c5(0x615)+_0x761c5(0x4d1)+'ve']=()=>_0x574425[_0x761c5(0x13b)][_0x761c5(0x150)+'ty']='0.5',_0x574425['oncli'+'ck']=_0x2345ac=>{var _0x1f3437=_0x761c5;_0x2ee71f[_0x1f3437(0x1b5)](_0x2ee71f['IRylr'],_0x2ee71f[_0x1f3437(0x548)])?(_0x2345ac['stopP'+_0x1f3437(0x4eb)+'ation'](),_0x329fed()):_0x2c1915['code']===_0x957269['YPPbU']&&(_0x93fee3['preve'+_0x1f3437(0x2f6)+_0x1f3437(0x349)](),_0x3b857b());},document['body'][_0x761c5(0x18f)+_0x761c5(0xf8)+'d'](_0x574425),_0x2ee71f[_0x761c5(0x2e9)](_0x48d89e),_0x2ee71f[_0x761c5(0x12b)](requestAnimationFrame,_0x1a31c8),console[_0x761c5(0x2a0)]('[saku'+_0x761c5(0x13f)+'ur]\x20m'+_0x761c5(0x50b)+_0x761c5(0x595)+_0x761c5(0x20c)+':',_0x3ab4d7[_0x761c5(0x443)]);});})()));function _0x1e6a(_0x3a6f81,_0x5e794c){_0x3a6f81=_0x3a6f81-(-0x8dd+-0x1497+0x1e57*0x1);var _0x5eaa30=_0x1bea();var _0x213c60=_0x5eaa30[_0x3a6f81];if(_0x1e6a['paEBmX']===undefined){var _0x494ec0=function(_0x2e7e99){var _0x27fa49='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x289f24='',_0x385bb2='';for(var _0x452163=0x177b+0x1f3f+-0x3a6*0xf,_0x51f945,_0x5eace9,_0x2f420d=0x1*0x94d+0x5e*-0x2+0x11*-0x81;_0x5eace9=_0x2e7e99['charAt'](_0x2f420d++);~_0x5eace9&&(_0x51f945=_0x452163%(0x38d+0x16bd*-0x1+0x1334)?_0x51f945*(-0x5e3*0x1+-0x13ea*0x1+0x1a0d)+_0x5eace9:_0x5eace9,_0x452163++%(0x585+0x142b+-0x19ac))?_0x289f24+=String['fromCharCode'](-0x49a*-0x1+-0x1b69*0x1+0x17ce&_0x51f945>>(-(0x292+-0x1bd9*-0x1+-0x1e69)*_0x452163&0xed0+0xa22*0x1+-0x4*0x63b)):0x4c3*0x1+0x510+-0x1*0x9d3){_0x5eace9=_0x27fa49['indexOf'](_0x5eace9);}for(var _0x410d3d=-0x1*-0x19a9+0x225d+-0x4e*0xc5,_0x8bed40=_0x289f24['length'];_0x410d3d<_0x8bed40;_0x410d3d++){_0x385bb2+='%'+('00'+_0x289f24['charCodeAt'](_0x410d3d)['toString'](-0x2499+-0x2540+0x49e9))['slice'](-(0x1*0x1b3b+0x8d*0x18+-0x77*0x57));}return decodeURIComponent(_0x385bb2);};_0x1e6a['mxVdKK']=_0x494ec0,_0x1e6a['FXQuHF']={},_0x1e6a['paEBmX']=!![];}var _0x5e915f=_0x5eaa30[-0x6e6+-0x9*0x39f+0x277d],_0x4d33bc=_0x3a6f81+_0x5e915f,_0x18e893=_0x1e6a['FXQuHF'][_0x4d33bc];return!_0x18e893?(_0x213c60=_0x1e6a['mxVdKK'](_0x213c60),_0x1e6a['FXQuHF'][_0x4d33bc]=_0x213c60):_0x213c60=_0x18e893,_0x213c60;}function _0x1bea(){var _0x44e14f=['zIbTyxq','C0jXvxK','ignHBgm','CNjVCG','ohb4oYa','Dc1ZAxO','icaGica','zuvSzw0','DxjDifu','CMvMAxG','EvvNq1C','Bg93zxi','sfrnta','ifjLy28','nNb4oYa','DgLKzvC','zw5bu0e','DgLKzs4','zxrhyw0','DNjUwgi','yY0XlJu','qsblt1u','DdOGmtu','CMvJDa','zIXZExm','mtaWid0','vKTlqNe','ohG5mc0','ugn0','Ec1KAxi','qNvUBNK','vwnwwhe','BgLUzvq','Bgf5oIa','u0fgrq','nsWYntu','zMvgueK','B25JBgK','we95EhO','lwrPCMu','D1fOCeS','wMn0AgK','mdSGBwK','AguGCMu','BwLKzgW','oIaXnha','sNvTCfq','uMvZzxq','oIa1mcu','ihn0CM8','ihjLBg8','D1HMA1G','ndSGBwe','zxmGEYa','Aw5NicS','zwLUC3q','q3jKwxu','B25TB3u','Awq7iha','rhrgr2G','AM5psuO','icaGkIa','oYbVDMu','BM9tChi','ocK7ih0','yLzSALy','zwXHDgK','AgfPCG','ChGGmdS','y29UDgu','ktSkica','sK95A2y','ufmGDw4','AxmGAg8','igvUDgK','oIaXms4','x19ZywS','Dc1Iywm','q0f2wwq','zM9UDa','yMHVCa','igrHBwe','DMvTzw4','ihSGyMe','idiWmg0','y2HLy2S','mundqNPSvG','Ahq7igm','idnWEdS','u1f0Bxq','rgrwvee','tuDWqLG','Awr0AdO','zfHvq2C','CgfYC2u','yxbWzwe','Aw5Zzxq','oYb9cIa','Bw4TBg8','zMLUza','tMfhzwK','FqOGica','AwrLCJO','B25PBNa','lZ48l3m','ieDLDfy','zsbTAxm','uezOzLi','yMfJA2C','uwnUtge','wgTzyKG','vMv5y2G','zMyP','B3qGBwe','CMvU','AgvHzgu','C2STzMK','Bw9fEha','igv4Axq','BwLZyW','qKvMywW','q25gqMy','BgvZiem','ltqTnY4','zw15igm','Ag9VA0m','i2zMnMi','igrLzMe','yxnLBgK','uxPRvgq','uIb2ms4','DhvYyxq','m3WXFdy','B3zrqve','Cg9PBNq','uxfuwvO','qNrLCMi','AwXKigG','A2v5C3q','Fdj8n3W','Dhn3DvG','zwv6zsa','nxb4oYa','mJu1lc4','wxv6uwi','zgvYlxi','Bw4TDg8','nxmGy3u','zgvSzxq','B3zLCMy','Afjurgq','idqTnc4','AwWGC3a','ifvUAxq','ieLZr3i','yxjPys0','DgG6idu','u0flvvi','DhLqy3q','ntaLktS','sxnhCM8','nJTWB2K','BwDLvwG','mhWY','iL06oMe','qK1zA00','idi0iIa','Ag9VA0C','ihLVDxi','ihrVide','DgvYoIa','y2vSzxi','zgfTywC','oJa7EI0','tevAwxq','AwXLzdO','tKvyCuW','Bg9NBY0','rMrTwKy','A2DYB3u','zw50','CeHSsfy','C1fJtuO','y29SB3i','C2XPy2u','zxi6oI0','nsKSida','w3nHA3u','Dg9Y','BNrLBNq','B2fKzwq','AwDUyxq','r3b4qNu','rxjQBg0','zxjYB3i','zenOAwW','lM1Ulxq','EtOGmdS','rgfUz2u','ldi1nsW','Awr0Aa','igH1CNq','wfHrq1K','DgXPBMu','uuLOuMi','rw5Ps28','ELHLvvm','wgvwwMe','kg92zxi','ihrVCdO','ihjLy28','CMvSEsa','lxbHCMu','mgy1oYa','ANf6CNy','ntuSlJa','zxj5idi','ig1VBwu','odbWEcW','uMvJDa','zw50CZO','uMr0zKe','nNb4idK','BLnpAeq','rwXfCfm','qNjNt1y','yxvSDca','ocWYndi','zsb0CMe','uMvJB2K','BgXIyxi','yxa6idG','AM9PBJ0','Dw1TuMe','yM91BMq','ywrKAw4','Chn4suq','B3bLCNq','yxjHBMm','yM9Yzgu','Dgv4Dem','zxrL','igzPBgW','C2STAgK','CgvHDcG','CMLUz3m','uureuvq','wxztvLy','zgrPBMC','B29Rihi','wKn2yxi','DKHuzNq','oNbVAw4','zw50oYa','q2HRtei','oIbJB2W','lK92zxi','iJeYiIa','CMDPBI0','BMCGzM8','C2f2zq','zciVpJW','C3r5Bgu','ChG7ihC','ANvTCfa','zxH0','CMeTA28','CI1ZzwW','zZOGnNa','z3jVDw4','wuTAv1C','A3nty2e','Aw5WDxq','y2fWu2G','ndHWEcK','mtu3lc4','r3fqqwO','qLrKD1e','ih0kica','C3rLCa','q3fTzfm','EwLHuM4','r2LcD2C','B3bHy2K','oIbMBgu','yuDODMW','Dw5VqLy','ihSGywW','igjVEc0','CMLKoYa','BMC6igi','AxnPyMW','ywqGDg8','C2HHzg8','re9nq28','CM9ZC2G','BYb0Agu','mNb4o3i','BxvXsve','ndu1se9PALPZ','txbfsLC','CM9Rzxm','tunkEM4','CI1Yywq','zvbPEgu','DLrJr24','C2STBwq','EcaWoYa','ieTLzxa','Aw5KzxG','ie1VDMu','DgvYigm','A2fcALC','zwfSDgG','igzVBNq','zg93oIa','EdSGywW','zw5HyMW','mtSGBwK','BxKGC2u','ys1JAgu','AwDUlxm','A3nxrgG','oYbTAw4','AwvSza','AxHLzdS','DgvTlxu','id0GzMW','y3vYC28','yuTVDxi','q0fovKe','ysblB3u','z2v0rwW','D2fYBG','BNn0ywW','B3vUzgu','CM9Wlwy','CI51As4','B3rOAw4','oYbQDxm','DcbZDge','sNDZBxi','wefnshu','BerPzsW','A2Hor1m','Bwf4','yxbWzw4','i2zMzJS','BhrLCJO','Cg9W','ldePoWO','z2v0sxq','swL6Bwi','CMfWAwq','ms4XlJa','zcWGyw4','tgLZDa','Dxm6idi','BwvZC2e','CY1Zzxi','BNrLCI0','AY1OAw4','z24Ty28','ywTAC3q','mZK0otHtELHNv3i','yJLKoYa','BwvKicG','BNnPDgK','C2HVD24','z3jHDMK','mxb4oYa','mJvWEdS','igfWCgW','lM1Ulxa','BhKGkhi','AY12ywW','CYbpsgu','CJOGDgG','oIaZmNa','s2v5qq','uM1fC0q','z2v0q28','mJy2nZKYA0vAAhjQ','mtbWEdS','wxrHvgW','CeTACxe','swyGCMu','BMC6ida','lwLVxYO','DLvjrMO','v3flC0m','tM8Gzw4','iKLUDgu','Bgf5ig8','lNnRlw0','yw5JztO','werysMK','Ahq6idi','jsbUBY0','BgLNBI0','DMu7ihC','ywn0Axy','DhjHBNm','EKHXzMe','yxv0BY0','y2f0','ChjLDMu','DLnNr2m','zhrOoIa','vM5ZDvy','ztOGmtm','l3jHCgK','zdSGyMe','zsaOt0G','BIb7igi','lc4WnsK','BNqGAxq','BgjnEhq','phn2zYa','mJSGC3q','CgfKzgK','lwHVCa','sw5ZDge','Bw4Ty28','AwX0qNy','igHVB2S','kYbtCge','twrAzxi','A3mGyxi','EhHwreO','CNrPzgu','EtOGz3i','z2fWoIa','B3b0Aw8','mJiSocW','ChG7iha','rezbC08','idmYChG','z2DrB2G','tw92zq','u3rHDhu','CMvZDg8','Bfrpy0q','Ag9Szsa','q29SB3i','C2STy2e','tNnqsNK','r3HYAeS','BMvJyxa','C2v0qxq','ihn5C3q','nJaWide','sxHyAxG','DKHHAwG','igjHBIa','BMqIihm','rff1zhK','DMLZDwe','oIaZChG','BwuG','C3rHCNq','icaG','zwLNAhq','ihWGz2e','igzVCIa','z2DSzwq','qu9tsve','idjWEdS','veDuqve','wuXztxe','CYbnB3y','ifvxtuS','B3i6iha','ihrOzsa','swvdrMe','rvHcz0S','sMPQAum','CdOGmti','ywX0Ac4','DgnOoJO','B1jUDeS','phnTywW','z0fOBe4','CZOGCMu','igjHBM4','ywrK','EKPxANK','rg1IA1C','BwrLC2m','oYbYAwC','q29TyMe','B1jLy28','mJuPoYa','DgvJDgK','Bw92zw0','A2rYB3a','DhLWzq','B2X1Dgu','iL0GEYa','y2fWDhu','sM1zzeW','Fdb8mxW','DMTdwxG','BMuUqxa','AxrLBxm','mtn1twPmvge','qxbWBgK','BIb7igy','oYb3Awq','zYb7igm','zNbZ','Bg9Hzgu','DgXL','mciGCJ0','ohb4ksK','sw5MAw4','wMvYB2u','zsGXnta','A2v5zg8','t3boAwS','CJOGi2y','mhb4oYa','u0PpBgO','C2STBwi','zxG6ide','tLf0EeS','ihbVC2K','DgfNtMe','ywXrsvC','z3jPzdS','D3jPDgu','igjVCMq','CMjVCwi','Ag9ZDg4','nxm0idi','lxnPEMu','Ag9VA04','BgLNBG','BeTvz3G','BM9Uzq','icaGlM0','vwDmD0O','ihSGzMW','uMf0zq','zMLSBfm','Aw9UoMy','s2v5ra','zxLJA3m','su1YwLC','q0PkBfC','mNb4ihu','mJm4ldi','mcaWida','C2zVCM0','DhmGCgW','B3C6ida','yYGXmda','y2HtAxO','CIdIGjqG','DxjH','BhvYkdi','mhb4lca','rKH3EgO','Aw4GC2e','DxbSEg0','zMXLEdO','CgfYzw4','svHODvG','C1r0ywu','z3jHzgK','uwXTvNC','B1v6B2e','C3bHBG','y29Kzq','vMLZDwe','AwDUlwK','AefqDKi','rvHqxq','tMfTzq','zxjZy3i','mdi1ktS','tKCGlsa','owqIihm','CNr1Cca','nc00lJu','nsWUmdm','y2LYy2W','t0HLywW','BwzeBvq','ChG7igi','DgG6ida','qvvmA3G','r29Kie0','AcbVBMu','zsXTB24','ig5VBMu','oYbIywm','idaGmca','u1nHvfm','oYbHBgK','C3j4vvG','AYbVBI4','ywWGBwu','zNvSBhm','z2fTzuW','mdSGyM8','yw5ZzM8','AxmGyNu','EMu6ide','yxrSEsa','ihDLyxa','AY1ZD2K','D2L0Aca','DxjZB3i','zsWGDhi','t0zgigi','AejgA2y','AwDODdO','AhjyyNa','Bg9N','AdOGnJi','C2HVB3q','v2vItw8','rwDtuuu','s2v5C3q','lwL0zw0','mcbOB28','AhvTyIa','DgLVBI4','C0v2seq','C21jzLi','zvzHBhu','CIbNyw0','CLrvD3y','ndmZmJe1r21uBKv3','C2v0','igvYCG','BNrLCJS','CZO6lxC','sM1RwxG','ignVBg8','y2HPBgq','ndC0odm','oIbJzw4','zeLozwW','ifTfwfa','veHnr0u','tw9Kzsa','Dgv4Dc0','igjHy2S','AxrSzsa','DMG7EI0','lxnLCMK','CNnVCJO','C3rYAw4','DMLZAwi','sfj0Cxi','Bw92zvq','y3rPB24','BMC6idq','wKLXquG','whz4Ew0','mdSGFqO','AgvSza','C2fRDxi','tKXoruK','uNvUDgK','4Ocuig5Via','BJOGy28','BgfZDeu','lMrSBa','zxrLy3q','r0nYy28','lIbvC2u','rwLizgy','Aw5Uzxi','oIbYAwC','C2v0x3q','tLrquMq','vKPfEfa','yMzlwvK','ChG7igy','Bfjnz08','ihSGB3a','mIaXmK0','CMvHzhK','sxnACgO','oIbKCM8','zdOGBgK','ywXSihq','mJu1ldi','u3bLzwq','Axr6zvm','yMvNAw4','iJeUnsi','tM8Gu3a','Aw9FmZa','BgvUz3q','AguGzNi','icnMzJy','C3rLBMu','y3KGB24','CZOGyxu','EKLxu2u','yxrLvge','BNrezwy','yw1XBMq','oIbYz2i','Dg9Nz2W','qu9Xue0','Dw5KoIa','A3nqB3m','B2rLu3q','BI1SB2C','CdOGmta','nYWUmsK','sgvHBhq','q291BNq','EsbKzwy','EdTVCge','qNDTD2y','lJv6iIa','D2vPz2G','ndSGFqO','C3rPBgW','uhbKDfq','zs5bCha','s2LSBgu','AKzSA3y','Bwf0y2G','yMLJlwi','A3ndChm','ide7ig0','nsWUmdC','u1nhq1G','qNLjza','zs1PDgu','vuX1rgi','thP6vKm','BhmGysa','u29Ht3e','nIa2Bde','mxb4ida','yNv0Dg8','zJmY','u2fRDxi','ienquW','DgHLihC','wuXQDgG','BwLU','ntuSmJu','oYbMBgu','CMDIysG','BhmGDgG','oIb0CMe','B246ihi','DcWGCMC','lxDPzhq','mxb4ihi','EdSGAgu','ihjNyMe','nYWWlJm','zwf0CYa','nde5oYa','BIb0Agu','igXLyxy','mcWWlJu','zKXKv0C','y2fWtw8','tePurMi','DhjVA2u','rLbqAgm','Cfvjvwq','DMC+','DhrPBMC','ihDOAwm','ktSGFqO','wMLOAK4','y3jVC3m','mhG2mda','ywXSig8','zMLLBgq','Ag9VA1a','C2STyNq','mdCSmtu','EYbSzwy','zxiTCMe','ihWGBw8','yxvSDa','tKCG4Ocuia','ywj1A1e','idrWEdS','zxjYihS','zwfKige','idrWEca','sK5Usxi','BwvUDca','B3vUzdS','mtSGyMe','zc5VBIa','D1PYEwm','zMy2yJK','ywXPz24','Bw4TDge','EdSGyMe','DxvAB0e','BfrjAe0','Bw4Ty2W','CxvLCNK','zdOGi2y','yxGOmJu','msWUmZy','oIaIiJS','rgLL','yM9KEq','4Ocuig92zq','zxiGC2W','C3DPDgm','B25LigK','CMfUC2K','zwvMmJS','EunRs2e','C1jutM8','BM90zs4','ifvjiIW','Bw4TCge','DeLKzMi','mxW1Fdy','vMzPBhy','zgLUzZO','u2HHCNa','sw5PDgK','uhHowxi','ANLzvgG','nsK7igi','CMzSB3C','B2rL','Aw1Lihm','qvDVBvK','zgvZyW','ywXSzwq','sNPbs2W','B2LS','u3bHy2u','EhLKrfi','ihDPzhq','oIbWB2K','Dg9W','EKLWqxq','r3jHDMK','BM9szwm','mcWUntu','tgvNAw8','AevvsLe','ihbVAw4','Eca2ChG','qxbWBhK','u3z1q0u','mtiYmuzwBvjXDq','vgLWrhK','y2HdB2W','Axr5oIa','lJa4ktS','vvDnsW','zwXMoIa','z29K','DdOGmZq','DZOGAw4','z2v0','BwLUkdq','sKfqyMW','oYbWB2K','ihnOB3q','zwfK','sNvTCca','DhKGDMe','ig5VigG','ys5RB3u','icaUBw4','B2XVCJO','x19tquS','yxmGBM8','iezquW','s2v5uW','yMfYlxq','AY1Jyxi','r0zbDMS','BM93','zsb7igy','ihSGzM8','z2LMEq','zw0TDwK','BKDKBKC','ChbLyxi','EYbIywm','mhGYnta','A3rjzg4','AguGDxm','B3nLihS','B3nWywm','lMXHC3q','ywDLigq','ywqU','nYWWlJG','zc10Axq','zvKOmtG','ltjWEdS','vw5PDhK','ywX3B3u','BNnSyxq','BMf2','t3niChu','CeTdCfG','CMfVB3O','zvn0EwW','ldiZocW','tfPeruy','zxi7igC','z3jPzc0','qwL3qw0','ignLBNq','ywiUywm','BML0igy','yxnutvK','DhLSzq','z2jHkdi','ChvZAa','AhzvsfO','odiPoYa','zgvYlxq','rw5NAw4','mdb2DZS','EYbMAwW','yw5LBca','ltiUns0','B3zLCMW','ysGYntu','khjLBg8','oYbIB3G','tvPsyKi','kdi1nsW','D2LKDgG','A2v5Dxa','Cg9ZAxq','y3jVBgW','mJqYlc4','lsbVDMu','BMu7ihm','DcbHihq','DgfIihS','CM91BMq','EcKGC2e','yxr0ywm','DMfS','BNqTC2K','z29KrgK','icaGlNm','CM0GlJq','qwz6yMu','BYb7igq','DeTAB1u','q0PKCui','lNnRlxm','CwHOvNG','u09bwhG','BMu7ige','kYbmtui','yw5Uywi','AdOGmZq','Dg9Wrgu','D2vIA2K','lxnHBNm','C2STBM8','AMr4B1C','DuHTrxy','AguGzgu','lwXPBMu','zJzIowq','Dw1UoYa','t1nOB28','y2XHC3m','ExPny2u','CwPAwM4','mNm7Cg8','iokaLcb0zq','zgjLA0G','C2vYDMu','zxjZ','s1DtvLK','Ec1ZAge','icbIB3G','mdbTCY4','mtyXmZb4z2n0rMW','B2XVCJS','C1zlAMC','zMuGBw8','q1fOr0e','ruTrvLK','CMrLCI0','mtGGnIa','tu9ersa','nYWUmJG','DdOGnZa','l1jnqIa','igLMig0','CZPUB24','B29RCYa','mtiZmZe5mK5KA1fqrW','zw50rwW','Aw5JBhu','v2vftvG','swTrwwO','C2v0uhi','BM8Gy2G','ywz0zxi','kdeUmsK','y29PBa','AxnWBge','BcbKCMe','tuLtu0K','ENPhy1e','igzVDxi','CYaNzNu','CMfUz2u','zgL1CZO','zg93BG','mJzWEdS','BsbVBIa','cIaGica','CYbpDMu','vNjXtMq','rwXLBwu','y3jLBwu','yK1Ks0q','AxrPB24','DgG6idi','t2Liuhy','mNb4oYa','DxDTAW','BI1PDgu','Aw5Mqw0','A3frCKy','EgXhv20','mhWZFdi','Bg9YoIa','kdi0nIW','CgfNzsa','B250lxC','CMvWzwe','ig1PBM0','ihWGrvi','BMnL','BsbYAwC','BgfIzwW','q3vZDg8','r2XOvhy','v1PVu1m','ic5ZAY0','n3WYFde','ig1PBIG','zMXLEdS','ruPKufq','Afvst0S','B2XPBMu','DMfSDwu','CMqTAgu','i2zMzG','y2vdAgK','nwmWidm','BMq6ihi','DvfmyMK','lxK6ige','BMv2zxi','nsK7ih0','D2L0Ag8','lca1mcu','C3rYB24','oMHVC3q','EgvZige','mtm2zhLMuhvW','z2v0qxq','oIbPBMG','y3jLyxq','Bg9HzgK','Aw4TD2K','rg1dCfm','ic5TBI0','AsXZyw4','v2vHCg8','ksaXmda','rwfJAca','iIbZDhi','oYbJB2W','zvj1BM4','v2LKDgG','ideWChG','BM9UztS','C3bLzwq','ANfWAui','C2v0sxq','rKTqC3a','ig9YigS','yxrPB24','zgLZCgW','mtiGmJe','ChbLBNm','EKDJzve','Dhvbq2W','BLrRr3q','C2fMzu0','De5Vzgu','zw1LBNq','BgrYzw4','yMfJA2q','igfUzca','mtjWEdS','nIaXoci','vvjbx0S','DdSGFqO','oIbUB24','Ec1OzwK','lxnJCM8','CI52mq','C2STC2W','CZOGoha','Be1VDgK','CMLNAhq','CM9Rzs0','B3jKzxi','B3vUzdO','oYbMAwW','idmWChG','BgvMDa','lxjHzgK','AwrLihS','ChG7igG','B3bLBG','zwfKB3u','yM90Dg8','A291CI0','tun6uxi','q1LYC3e','sNHst0q','DhjPyNu','zvLnv1K','igq9iK0','icaUC2S','C3rVCfa','v0fttsa','C2f0Dxi','igvSC2u','zxjSyxK','sw95DNC','quD4rw8','B3i6ihi','BgLUzvC','As1TB24','sgvPz2G','Awy7ih0','Acb7iha','Dcb7igq','B3G9iJa','wNvTBgC','C2HPzNq','DgvTCgW','DtmY','EKHizuS','zw50tgK','EsaUmZu','ndySmJm','D0nVBg8','oIaXoYa','Dhj1zq','vg90ywW','AxDQAvu','B246ig8','Aw9FnZi','yw1L','A2L0lxm','DgG6idK','C2vSzwe','DgLMEs0','ida7igi','nsaWlti','yunsy0m','CgXPy2e','CJSGzM8','Ag9VA3m','y3nZvgu','CMvVzwS','m3W1Fda','y1bbyxy','CMvUDem','CvvvvNy','DgvYo3C','y2TNCM8','icmYmJe','DeLfC0q','mc41o3q','tfLNr1O','EMHguuu','idi2ChG','ywrPDxm','z2H0oIa','s21ywfK','ywn0A0S','CM9WywC','igDHCdO','n3WYFdq','ueH1D3m','mcWWlJy','rePOsg0','zMXLEc0','C3rYB2S','ns00idC','zwfWB24','idi0iJ4','yNrUoMG','ie92zxi','zsbBrvG','lxrPDgW','y3jLzw4','v01ligK','CZOGy2u','oYbWywq','yxjLBNq','uJOG','BI1TywK','AwX0zxi','Bgv4oYa','B250zw4','zMDLrNK','oc00lJu','B290zxi','DMvYBge','A2vizwe','EdSGBwe','oIaYmNa','zw51ihi','ihSGy28','lcbPBNm','DMLLD0i','lwjHBNi','zM9UDc0','mZuSmJq','DwvuEhy','tgvMDca','ChriB0G','Bg9JAW','B0ntv2S','DgvZDa','zM9YBxm','Dg87zMK','oYbIB3i','vgjKrfG','yxnZAwC','CMXHEsa','whH1ruC','BMqGBwe','oYbMB24','j3qGC3q','ywnRz3i','Dc1ZBgK','y2vZlG','BeziBhy','Bw92zq','qKvTBNq','Bgv4oIa','kdaSmcW','ihbSywm','B2TLpsi','AxrLiee','Fdf8ma','mJqSmtC','rLbtig8','D1rhwuW','lc4WncK','ihrYyw4','BMvS','igzSzxG','mJu1lde','ls1W','AwXS','Dw5PDhK','zMLSBfq','C2STy28','zw50kcm','ign1CNm','A2uTBgK','v2vsDwS','Bhv0ztS','AwrHDgu','nZjnrKXfuK4','u0fgrsa','nZaWia','y2fSBa','B25SEsW','Bw8GDg8','Aw50zxi','svj5Bhi','Dwzfs2K','icaGic4','zsb3zwe','Dxf5Dgy','zMLSBa','svnYu3u','yMTPDc0','zxmGB24','Cc1ZAge','C3bSyxK','yxK6igy','icaGyMe','lc4WnIK','idaGmJq','zYbJyw4','B2X1Bw4','CMvSB2e','Bgf0zwq','Aw5NoIa','B0PYEhK','DwLLANm','rxHW','A2vZig8','tg9Hzgu','B2reAwu','CgjxwgW','wunYzuO','BMq6icm','uMfWAwq','ldiXlc4','wwTezLy','mJqXmtrUuw5ywuW','Dw5Kzwq','te1c','zuv4Ca','zg9JDw0','rfHhz28','Bw4TC2K','rgfTywC','CgfJAxq','Aw9U','zguSihq','Eu5jDNi','rM5tDNu','EYbWB3m','C2v0vhi','vvDnsYa','DgG6idG','lJuGms4','yxKGB24','oYb0CMe','C3zssfG','vgHLC2u','AxDQvxG','y2fSBhm','yxb0Dxi','ltiUnsa','idqGnc4','AgvPz2G','C2STy3q','zMLSBd0','ywrKrxy','renrwui','rNjHBwu','BMDL','zM9YBtO','yxjmzNq','zgL2','BgWGBwu','D0jSDxi','qxvMEvi','iM5VBMu','s2PAA24','mJqWiey','BuvSyKm','EdSGz2e','zwfKEs4','thnWt0O','C2v0ida','sgXHAue','Axb0kq','Aw9F','zxnJ','yJPOB3y','lMP1Bxa','zw50CW','oJiXndC','y1jwDw8','CMvHzey','C3bSAxq','C2fMzq','EMDwzM8','Bw91C2u','B25JAge','q3jVC3m','CgXHEtO','mtySmc4','ihbHzgq','CMfKAxu','phbHDgG','BMqGt0G','ksaWida','C21HBgW','zgTPDa','igXPBwK','oIa4ChG','tKDSvLm','ie9olG','lKXVy2e','tNDqEfK','y2vUDgu','icnMzMy','zhbY','nJG2mJC4s05MvK1i','BgLJyxq','zxflDwW','BNqGAge','zgvZ','uM95rvK','BNnWyxi','u2nHBgu','t2HVEMu','lxrVCca','CZOGmty','EYbJB2W','vLDzBey','yLbXugy','AtmY','z24TAxq','DgvYoYa','ywrIBg8','Bg9Hzhm','uM5xtgO','igrPC3a','AwXSihK','CML0zxm','BLbSyxq','zhrOoJe','ig9Wywm','ignHy2G','ldeWnYW','icbIywm','svjjEKG','zNrLCIa','lYbhCMe','DxjDigG','AxrPyxq'];_0x1bea=function(){return _0x44e14f;};return _0x1bea();}
