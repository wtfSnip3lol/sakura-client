// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      2.10.2
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
(function(_0x3870e1,_0x139c66){var _0x4b59a3=_0x2878,_0x5d8135=_0x3870e1();while(!![]){try{var _0x52dc6c=parseInt(_0x4b59a3(0x4f7))/(-0x5f1*-0x1+0x43*0x1f+0x4af*-0x3)+-parseInt(_0x4b59a3(0x413))/(0x65*0x1+0x7c5+-0x828)+parseInt(_0x4b59a3(0x5d0))/(0x137*-0x11+0x1cc3+-0x819)*(parseInt(_0x4b59a3(0x218))/(-0x140b+-0x2182+0x3591))+-parseInt(_0x4b59a3(0x731))/(-0x17cd+0x17*-0x16e+0x38b4)*(parseInt(_0x4b59a3(0x593))/(0x13a7+-0x4ac+0x7*-0x223))+parseInt(_0x4b59a3(0x587))/(-0x81b+-0xaab*-0x1+-0x289)*(-parseInt(_0x4b59a3(0x764))/(0xd79+0x2470+0x31e1*-0x1))+parseInt(_0x4b59a3(0x53d))/(0xbf4+0x1dc4+-0x29af)*(parseInt(_0x4b59a3(0x311))/(-0x2*0xe2d+-0x1*0x258f+0x41f3))+parseInt(_0x4b59a3(0x4c7))/(-0x108c+-0x6a2*0x3+-0x1*-0x247d)*(-parseInt(_0x4b59a3(0x439))/(-0xa*-0xa0+-0x3*0x60a+0x7a*0x19));if(_0x52dc6c===_0x139c66)break;else _0x5d8135['push'](_0x5d8135['shift']());}catch(_0x48cecd){_0x5d8135['push'](_0x5d8135['shift']());}}}(_0x5df4,-0x1cfa5+-0xb*-0x1db3+0x2130a),((()=>{'use strict';var _0x35b5eb=_0x2878,_0x290ef0={'emGpr':_0x35b5eb(0x34c)+'a.kou'+_0x35b5eb(0x62f),'WJNmq':_0x35b5eb(0x507)+_0x35b5eb(0x447)+_0x35b5eb(0x50e)+_0x35b5eb(0x789)+'only,'+_0x35b5eb(0x5c5)+'ooks\x20'+_0x35b5eb(0x3ed)+'ad\x20to'+_0x35b5eb(0x666)+')','nbjeX':function(_0x3f803d,_0x48fb7d){return _0x3f803d+_0x48fb7d;},'PWRmE':function(_0x3f9b4b,_0xaf7f02){return _0x3f9b4b+_0xaf7f02;},'pIhqG':function(_0x58dcf9,_0xf85dd7){return _0x58dcf9+_0xf85dd7;},'amYsP':function(_0x18d60c,_0x341d31){return _0x18d60c+_0x341d31;},'SLVuA':'\x20hook'+'s','KBJDh':_0x35b5eb(0x2b3)+'d','givSw':_0x35b5eb(0x625)+'ng','FAdqg':_0x35b5eb(0x5f4),'xZkBa':function(_0x2e8f49,_0x4c4482,_0x410478,_0x4b8e48,_0x5310ee,_0x7289d6){return _0x2e8f49(_0x4c4482,_0x410478,_0x4b8e48,_0x5310ee,_0x7289d6);},'QUShd':function(_0x52e332,_0x1d6452,_0xa05e5d,_0x1c61ca){return _0x52e332(_0x1d6452,_0xa05e5d,_0x1c61ca);},'XZqvP':function(_0x553193,_0x247bfe){return _0x553193!==_0x247bfe;},'MvYcS':function(_0x4f7d61,_0xe00f36){return _0x4f7d61(_0xe00f36);},'qsWsT':function(_0x3117f1,_0xd00374){return _0x3117f1(_0xd00374);},'muqLH':'DEGeF','xGZjA':function(_0x5ca20e,_0x214aeb){return _0x5ca20e===_0x214aeb;},'RglpR':_0x35b5eb(0x56b)+_0x35b5eb(0x436),'NioUr':function(_0x5ca5d4,_0x2f43fc,_0x2370e5,_0x233127,_0x4c6e5c){return _0x5ca5d4(_0x2f43fc,_0x2370e5,_0x233127,_0x4c6e5c);},'pKerK':function(_0x2510f9,_0x5529ad){return _0x2510f9*_0x5529ad;},'OBRZj':function(_0x5e4633,_0x1ad19e){return _0x5e4633===_0x1ad19e;},'VIaCw':_0x35b5eb(0x27e),'drPqP':function(_0x314b2b,_0x3dd9a3){return _0x314b2b===_0x3dd9a3;},'vrYwV':function(_0x2b33b5,_0x366df5){return _0x2b33b5+_0x366df5;},'qTCNh':_0x35b5eb(0x6d8)+'bound'+'\x20','BGllZ':function(_0x1c54b4,_0x2c0b9e){return _0x1c54b4+_0x2c0b9e;},'yYicu':_0x35b5eb(0x74a)+'ks\x20ar'+_0x35b5eb(0x45e)+_0x35b5eb(0x76b)+'ff)','anXBo':_0x35b5eb(0x6c3)+'me\x20','wIDEG':'held','rPQUJ':_0x35b5eb(0x6d8)+_0x35b5eb(0x2b8)+_0x35b5eb(0x446)+'overl'+_0x35b5eb(0x295)+'ly\x20(r'+_0x35b5eb(0x2d0)+_0x35b5eb(0x3c4)+'he\x20us'+'erscr'+_0x35b5eb(0x287),'PPdXZ':function(_0x316b55){return _0x316b55();},'hlwoH':_0x35b5eb(0x261),'QoXjJ':'[saku'+_0x35b5eb(0x20c)+_0x35b5eb(0x31c)+'ook\x20r'+_0x35b5eb(0x3fd)+'iled:','gsNVz':function(_0xde5c63,_0x594d17){return _0xde5c63(_0x594d17);},'RiGqL':_0x35b5eb(0x6c4)+_0x35b5eb(0x220)+_0x35b5eb(0x6c2),'oVHWt':_0x35b5eb(0x24a)+_0x35b5eb(0x565)+_0x35b5eb(0x558)+_0x35b5eb(0x69a),'Likxz':_0x35b5eb(0x43a),'tlZrm':_0x35b5eb(0x25f)+'e','UaaEV':'capSh'+_0x35b5eb(0x6ae),'ICAwX':'LzJRR','akMMc':_0x35b5eb(0x367),'SCVrS':function(_0x47991f,_0x5155e8){return _0x47991f/_0x5155e8;},'MVJgH':function(_0x3b5edc,_0x37f62c){return _0x3b5edc(_0x37f62c);},'iubYb':function(_0x4037e6,_0x232064){return _0x4037e6&&_0x232064;},'OoqeE':function(_0x1e0a79,_0x4786b5){return _0x1e0a79<_0x4786b5;},'GjcYB':'f32','Vssro':function(_0x20ca47,_0x98c17f,_0x5f500f,_0xae2921,_0xb5f99a){return _0x20ca47(_0x98c17f,_0x5f500f,_0xae2921,_0xb5f99a);},'RvieL':function(_0x2edc47,_0x6550ee){return _0x2edc47!==_0x6550ee;},'SKhpD':function(_0x48255e,_0xa9958b,_0x4c0193,_0x3c432a,_0x5ddbb5){return _0x48255e(_0xa9958b,_0x4c0193,_0x3c432a,_0x5ddbb5);},'bFsIO':'GXpVJ','fCWxr':function(_0x2012d8,_0x5576f1){return _0x2012d8===_0x5576f1;},'WdoPc':function(_0x202803,_0x1ab5b0){return _0x202803>_0x1ab5b0;},'cgiAQ':'mouse','Jpgkt':_0x35b5eb(0x30d)+'ck','tjACN':_0x35b5eb(0x306),'KmIMW':_0x35b5eb(0x61a),'qpMOw':_0x35b5eb(0x233)+_0x35b5eb(0x383),'DrDvn':_0x35b5eb(0x233)+'up','KPrbz':_0x35b5eb(0x6f2),'EGrnu':function(_0x2ad48e,_0x5417f3){return _0x2ad48e-_0x5417f3;},'oBCaA':_0x35b5eb(0x4d6)+'ete','yyqYo':'TdiHw','DiEWX':_0x35b5eb(0x5f5)+'S','YYjlc':function(_0x1d5ce5,_0x23a989){return _0x1d5ce5>=_0x23a989;},'kkPuB':function(_0x4bb41d,_0x14256){return _0x4bb41d-_0x14256;},'piXKy':_0x35b5eb(0x59d)+'t','KRJCo':function(_0x491e0b){return _0x491e0b();},'fYxnH':_0x35b5eb(0x2a2)+'n','NMGSf':function(_0x2bb04d,_0x4714fc){return _0x2bb04d!==_0x4714fc;},'ZhyFd':'GwIEy','gIfaW':function(_0x4203a5,_0x665ca2){return _0x4203a5+_0x665ca2;},'xCYQN':function(_0x23bb54,_0x4e9367){return _0x23bb54+_0x4e9367;},'RVdjV':function(_0x3030c3,_0x1eabe7){return _0x3030c3+_0x1eabe7;},'MVukQ':function(_0x442f39,_0x48ee3a){return _0x442f39+_0x48ee3a;},'RXjiw':_0x35b5eb(0x5bc)+_0x35b5eb(0x6ae)+'\x20','imkKe':_0x35b5eb(0x4a5)+'R:\x20','RQzhM':function(_0x53fab4,_0x5082d4,_0x305eca,_0x12952a,_0x415d5d,_0x55c54c){return _0x53fab4(_0x5082d4,_0x305eca,_0x12952a,_0x415d5d,_0x55c54c);},'pJeBa':function(_0x8fde0a,_0x2532eb,_0x3af934,_0x3d2217){return _0x8fde0a(_0x2532eb,_0x3af934,_0x3d2217);},'UVcTF':'Apply','VQFVo':_0x35b5eb(0x488),'ouiGL':'2|4|5'+_0x35b5eb(0x634)+'1','xmJDz':_0x35b5eb(0x459),'cZnCR':function(_0x105d40){return _0x105d40();},'WpbWk':_0x35b5eb(0x49c),'MyDeb':function(_0x7f92aa,_0x5d4a4e){return _0x7f92aa===_0x5d4a4e;},'jUsNJ':function(_0x4ced21,_0x298168){return _0x4ced21(_0x298168);},'bleKm':'uacTH','CLHdf':'XJiSU','IWUyO':_0x35b5eb(0x26b),'lRBHA':_0x35b5eb(0x627),'bQqwX':function(_0x10825b,_0x57168f){return _0x10825b+_0x57168f;},'jxtnO':_0x35b5eb(0x333),'FjeDG':_0x35b5eb(0x449),'LhdMX':'mn-lo'+'go','tRhCq':'mn-ma'+'in','fLtGU':_0x35b5eb(0x523)+'r','auWuV':_0x35b5eb(0x390)+'tles','LXFlm':_0x35b5eb(0x468),'EwTUC':_0x35b5eb(0x5fe)+'b','CTUed':_0x35b5eb(0x72e)+_0x35b5eb(0x582)+_0x35b5eb(0x48c)+_0x35b5eb(0x6ee),'tdTai':_0x35b5eb(0x708)+_0x35b5eb(0x21e)+'ox=\x220'+_0x35b5eb(0x7bf)+'\x2024\x22>'+_0x35b5eb(0x760)+_0x35b5eb(0x6d1)+_0x35b5eb(0x388)+_0x35b5eb(0x204)+_0x35b5eb(0x68c)+'6\x2018\x22'+_0x35b5eb(0x251)+'vg>','XedbY':'mn-co'+'ls','gBapH':_0x35b5eb(0x45d)+'ll>','hBuqm':'comba'+'t','fCBTv':function(_0x2b9a50,_0x141320,_0x2c40ae,_0xebce5b,_0x41a779,_0x3fd69c,_0x48c4d1){return _0x2b9a50(_0x141320,_0x2c40ae,_0xebce5b,_0x41a779,_0x3fd69c,_0x48c4d1);},'iBNCE':'mouse'+'3','pQXMt':function(_0x236a97,_0x5b1882){return _0x236a97+_0x5b1882;},'ERYuF':'\x20CPS','anDWM':function(_0x2c2b42,_0x32584c){return _0x2c2b42+_0x32584c;},'JtxQN':function(_0x4fa8c6,_0x5f05bf){return _0x4fa8c6*_0x5f05bf;},'Uozmn':'SulnM','CrIuv':'mpqIb','GuTMr':'kour-'+'io_','nxKQb':function(_0x319bf5,_0x35e732){return _0x319bf5===_0x35e732;},'QoWVz':function(_0x3788d1,_0x3436a2){return _0x3788d1===_0x3436a2;},'hXneS':function(_0x465a01,_0x3762e9){return _0x465a01-_0x3762e9;},'yYPMq':function(_0x348a90,_0x257b81){return _0x348a90+_0x257b81;},'fysbP':_0x35b5eb(0x296),'MuGiS':function(_0x46d201,_0x15bfe0){return _0x46d201+_0x15bfe0;},'Mtvsw':function(_0x35ad5b,_0x1c8f10){return _0x35ad5b||_0x1c8f10;},'XBieH':_0x35b5eb(0x4a7),'wZdSC':_0x35b5eb(0x62b)+_0x35b5eb(0x240)+'80,19'+_0x35b5eb(0x221)+')','sRDoY':_0x35b5eb(0x3e1),'vLzVh':_0x35b5eb(0x38e)+_0x35b5eb(0x596),'nveou':_0x35b5eb(0x5e4)+'l','DfWyI':_0x35b5eb(0x594)+'bel','vPHxj':'KsYYj','KLkPK':function(_0x27994e,_0x439830,_0x15de44){return _0x27994e(_0x439830,_0x15de44);},'yVKdZ':_0x35b5eb(0x27a),'SLcse':function(_0x4f35b3,_0x322ac2,_0x48a553,_0x5929ae,_0x48ba4f){return _0x4f35b3(_0x322ac2,_0x48a553,_0x5929ae,_0x48ba4f);},'DrEPn':'Zeroe'+_0x35b5eb(0x201)+'ead\x20a'+_0x35b5eb(0x457)+_0x35b5eb(0x32e)+_0x35b5eb(0x5b0)+'cy\x20on'+'\x20your'+_0x35b5eb(0x4d1)+_0x35b5eb(0x6db)+_0x35b5eb(0x524)+'00ms.','rrmRp':'Scale'+_0x35b5eb(0x40d)+_0x35b5eb(0x771)+'Weapo'+_0x35b5eb(0x305)+_0x35b5eb(0x7c4)+_0x35b5eb(0x2d6)+'0%.\x20S'+_0x35b5eb(0x6c9)+'\x20may\x20'+_0x35b5eb(0x5b8)+_0x35b5eb(0x63d)+_0x35b5eb(0x1f2)+'s.','RzyzD':'Overw'+_0x35b5eb(0x341)+_0x35b5eb(0x6b1)+_0x35b5eb(0x75b)+'eapon'+'\x20dama'+'ge.\x20B'+_0x35b5eb(0x733)+'le\x20if'+_0x35b5eb(0x234)+_0x35b5eb(0x2bb)+'r\x20val'+_0x35b5eb(0x294)+'s.','rUfuo':_0x35b5eb(0x6a9)+_0x35b5eb(0x382)+'ement'+_0x35b5eb(0x65a)+_0x35b5eb(0x2ad)+'ime\x20s'+_0x35b5eb(0x25c)+'\x20jump'+_0x35b5eb(0x59c)+'down\x20'+_0x35b5eb(0x51e)+'\x20appl'+_0x35b5eb(0x703),'uqfZi':_0x35b5eb(0x726)+'ion','gGSJy':function(_0x29fc3d,_0x1b4759,_0x2f4d1b,_0x47e713){return _0x29fc3d(_0x1b4759,_0x2f4d1b,_0x47e713);},'TJwKC':'noRec'+_0x35b5eb(0x41d)+_0x35b5eb(0x78d)+_0x35b5eb(0x2bc)+_0x35b5eb(0x72c)+'ck)','SmIYt':'Dange'+'r','jVQKo':'\x20err','RLYOG':function(_0x388faa,_0x387eab){return _0x388faa(_0x387eab);},'luKCR':function(_0x2bd428,_0xa030e8){return _0x2bd428!==_0xa030e8;},'bdmbr':_0x35b5eb(0x4dd),'klXhb':'posit'+'ion:f'+_0x35b5eb(0x208)+_0x35b5eb(0x32d)+_0x35b5eb(0x631)+'dth:1'+'00vw;'+_0x35b5eb(0x7cb)+_0x35b5eb(0x2a9)+_0x35b5eb(0x73f)+'index'+_0x35b5eb(0x340)+'48364'+_0x35b5eb(0x29b)+_0x35b5eb(0x698)+'event'+_0x35b5eb(0x5a8)+'e','clrRU':_0x35b5eb(0x229)+'ion:f'+_0x35b5eb(0x208)+_0x35b5eb(0x32d)+_0x35b5eb(0x49d)+'index'+_0x35b5eb(0x340)+'48364'+_0x35b5eb(0x54a)+_0x35b5eb(0x698)+_0x35b5eb(0x27b)+'s:non'+'e;','gfhAH':_0x35b5eb(0x34c)+_0x35b5eb(0x5d4)+_0x35b5eb(0x1fe)+'v1','fmJwm':'move','iWknL':'visua'+'l','LSDYI':_0x35b5eb(0x2ee)+'y','lwebO':'keydo'+'wn','ZoQCJ':'posit'+'ion:f'+'ixed;'+_0x35b5eb(0x693)+_0x35b5eb(0x585)+_0x35b5eb(0x27d)+'12px;'+_0x35b5eb(0x385)+_0x35b5eb(0x63e)+_0x35b5eb(0x4b9)+_0x35b5eb(0x59f)+_0x35b5eb(0x71c)+_0x35b5eb(0x44c)+_0x35b5eb(0x3da)+_0x35b5eb(0x765)+'26px;'+'heigh'+_0x35b5eb(0x2ec)+'x;opa'+_0x35b5eb(0x34a)+_0x35b5eb(0x741)+_0x35b5eb(0x540)+'tion:'+_0x35b5eb(0x530)+_0x35b5eb(0x2a4)+'2s;po'+'inter'+'-even'+_0x35b5eb(0x47f)+_0x35b5eb(0x55a)+'lter:'+_0x35b5eb(0x2f8)+_0x35b5eb(0x274)+_0x35b5eb(0x63b)+'\x204px\x20'+'rgba('+_0x35b5eb(0x240)+'07,15'+'7,0.7'+'))','ljGMJ':_0x35b5eb(0x708)+'viewB'+_0x35b5eb(0x3d5)+_0x35b5eb(0x7bf)+'\x2024\x22>'+'<path'+'\x20d=\x22M'+_0x35b5eb(0x3fc)+'c-1.5'+_0x35b5eb(0x225)+_0x35b5eb(0x71f)+'-4-7.'+'5\x200-2'+'.5\x201.'+'8-4.5'+'\x204-4.'+_0x35b5eb(0x44a)+'\x204\x204.'+_0x35b5eb(0x5a7)+_0x35b5eb(0x3de)+_0x35b5eb(0x3f3)+_0x35b5eb(0x2eb)+_0x35b5eb(0x30b)+_0x35b5eb(0x52b)+'\x22\x20str'+_0x35b5eb(0x6b4)+'#ff6b'+_0x35b5eb(0x223)+_0x35b5eb(0x6be)+_0x35b5eb(0x2d4)+_0x35b5eb(0x4e6)+_0x35b5eb(0x5ac)+'ke-li'+_0x35b5eb(0x1fb)+_0x35b5eb(0x1ec)+_0x35b5eb(0x269)+'troke'+'-line'+_0x35b5eb(0x482)+_0x35b5eb(0x5db)+_0x35b5eb(0x2cf)+_0x35b5eb(0x64b)+'e\x20cx='+'\x2212\x22\x20'+_0x35b5eb(0x33f)+'0\x22\x20r='+'\x221.5\x22'+'\x20fill'+'=\x22#ff'+_0x35b5eb(0x4dc)+_0x35b5eb(0x251)+_0x35b5eb(0x59b),'BiuGs':_0x35b5eb(0x61f)+'9d','tRquH':'Sakur'+_0x35b5eb(0x792),'jgdmM':_0x35b5eb(0x4d4),'jwUBh':_0x35b5eb(0x27f)+_0x35b5eb(0x358)+_0x35b5eb(0x600)+'.dll','BbdTV':function(_0x17f008,_0x110d30,_0x373cf5,_0x4d1fee,_0x595388,_0x778b23,_0x4e023a,_0x31d8ab){return _0x17f008(_0x110d30,_0x373cf5,_0x4d1fee,_0x595388,_0x778b23,_0x4e023a,_0x31d8ab);},'iIlfp':function(_0x66dd11,_0x561ec2,_0x5e7c74,_0x1d66f4,_0x51539d,_0x10df3e,_0x332df9,_0x31e2b3){return _0x66dd11(_0x561ec2,_0x5e7c74,_0x1d66f4,_0x51539d,_0x10df3e,_0x332df9,_0x31e2b3);},'dgtxS':'noRec'+'oil','sDius':function(_0x495b8b,_0x250c61,_0x2a7abd,_0x13f52e,_0x35ad7e,_0x168b8e,_0xf44f65,_0x576f35){return _0x495b8b(_0x250c61,_0x2a7abd,_0x13f52e,_0x35ad7e,_0x168b8e,_0xf44f65,_0x576f35);},'uIDVp':'OShoo'+_0x35b5eb(0x2a1),'TryNb':'IsGro'+_0x35b5eb(0x1fd),'gAyUK':function(_0x3fe70f,_0x1a3e39){return _0x3fe70f===_0x1a3e39;},'LZKdc':'KBkII'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/[_0x35b5eb(0x4a1)](location[_0x35b5eb(0x68d)+_0x35b5eb(0x70a)]||''))return;if(window[_0x35b5eb(0x701)+'URA_K'+_0x35b5eb(0x531)])return;window[_0x35b5eb(0x701)+'URA_K'+_0x35b5eb(0x531)]=!![];var _0x3267f6=_0x35b5eb(0x61f)+'9d',_0x15c0b0='#ffb3'+'c6',_0x208dc4={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x290ef0[_0x35b5eb(0x682)],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x177e8d={..._0x208dc4};try{Object['assig'+'n'](_0x177e8d,JSON[_0x35b5eb(0x29e)](localStorage['getIt'+'em'](_0x35b5eb(0x34c)+_0x35b5eb(0x5d4)+_0x35b5eb(0x62f))||'{}'));}catch(_0x733efb){}function _0x555163(){var _0x2edf4b=_0x35b5eb;try{localStorage['setIt'+'em'](_0x290ef0[_0x2edf4b(0x42a)],JSON[_0x2edf4b(0x516)+_0x2edf4b(0x4e8)](_0x177e8d));}catch(_0x31a9d8){}}var _0x591997={'uwmk':!!window[_0x35b5eb(0x579)+'WebMo'+_0x35b5eb(0x53c)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x177e8d['safeM'+_0x35b5eb(0x48b)],'lastError':''};try{window['addEv'+_0x35b5eb(0x53b)+_0x35b5eb(0x4cd)+'r']('error',_0x4a2c5e=>{var _0x107aa1=_0x35b5eb;try{if(_0x290ef0[_0x107aa1(0x77f)](_0x107aa1(0x6ad),_0x107aa1(0x6ad))){var _0x3ce034=_0x4a60f9[_0x107aa1(0x2e3)+_0x107aa1(0x48b)]?_0x290ef0[_0x107aa1(0x7b8)]:_0xde9d7f[_0x107aa1(0x236)]?_0x290ef0['nbjeX'](_0x290ef0[_0x107aa1(0x667)](_0x290ef0['PWRmE'](_0x107aa1(0x6d8)+_0x107aa1(0x7c8)+'\x20'+(_0x3d1a9c[_0x107aa1(0x568)+'Total']?_0x290ef0[_0x107aa1(0x5c2)](_0x290ef0[_0x107aa1(0x363)](_0x298981[_0x107aa1(0x568)+'Ok'],'/'),_0xe5c27f['hooks'+_0x107aa1(0x3e6)])+_0x290ef0[_0x107aa1(0x26d)]:'0\x20hoo'+_0x107aa1(0x29d)+_0x107aa1(0x45e)+_0x107aa1(0x76b)+_0x107aa1(0x58f)),_0x107aa1(0x6c3)+_0x107aa1(0x41b)),_0x395df0['gameL'+_0x107aa1(0x5f9)]?_0x290ef0[_0x107aa1(0x372)]:_0x290ef0[_0x107aa1(0x52a)])+('\x20|\x20sh'+_0x107aa1(0x6ae)+'\x20')+(_0x54c9b8[_0x107aa1(0x60a)+'ers']?'held':_0x290ef0['FAdqg'])+(_0x107aa1(0x1eb)+_0x107aa1(0x2c1)+'t\x20'),_0x57d989[_0x107aa1(0x56b)+_0x107aa1(0x436)]?_0x107aa1(0x4c4):_0x290ef0[_0x107aa1(0x211)]):_0x107aa1(0x6d8)+_0x107aa1(0x2b8)+'NG\x20—\x20'+_0x107aa1(0x4df)+'ay\x20on'+_0x107aa1(0x486)+'einst'+'all\x20t'+_0x107aa1(0x766)+'erscr'+_0x107aa1(0x287);if(_0x39af53['lastE'+_0x107aa1(0x786)])_0x3ce034+=_0x290ef0['nbjeX'](_0x107aa1(0x4a5)+'R:\x20',_0x636c5a[_0x107aa1(0x301)+'rror']);return _0x290ef0[_0x107aa1(0x24d)](_0x1a8207,_0x107aa1(0x5e6)+'s',_0x3ce034,_0x26c71a[_0x107aa1(0x236)],null,[_0x290ef0['QUShd'](_0x659fed,_0x107aa1(0x6fe)+'PS\x20un'+_0x107aa1(0x408),'calls'+_0x107aa1(0x5b1)+_0x107aa1(0x3cc)+'ne.Ap'+_0x107aa1(0x61e)+_0x107aa1(0x2a0)+'set_t'+'arget'+'Frame'+_0x107aa1(0x321),_0x19c90d(_0x107aa1(0x543),()=>{var _0x2b8530=_0x107aa1;try{if(_0x23fe0a)_0x4c50ee[_0x2b8530(0x4b6)](_0x2b8530(0x579)+'Engin'+_0x2b8530(0x300)+'licat'+'ion',_0x2b8530(0x76f)+_0x2b8530(0x391)+_0x2b8530(0x69b)+'Rate',[-0x531+0x1984+-0x7*0x2c5]);}catch(_0x32b57a){}}))]);}else{var _0x4b8820=_0x4a2c5e&&(_0x4a2c5e['messa'+'ge']||_0x4a2c5e['error']&&_0x4a2c5e[_0x107aa1(0x4bb)]['messa'+'ge'])||_0x107aa1(0x351)+'wn';if(_0x4a2c5e&&_0x4a2c5e[_0x107aa1(0x58a)+'ame'])_0x4b8820+=_0x107aa1(0x66d)+_0x290ef0['MvYcS'](String,_0x4a2c5e['filen'+'ame'])[_0x107aa1(0x4af)]('/')['pop']()+':'+(_0x4a2c5e[_0x107aa1(0x26c)+'o']||'?');_0x591997['lastE'+_0x107aa1(0x786)]=_0x290ef0[_0x107aa1(0x725)](String,_0x4b8820)['slice'](0xc78+0x1*-0x1635+-0x1*-0x9bd,0x25f3+-0x1c7f+0xa*-0xe2);}}catch(_0x501fb9){}});}catch(_0xfa9723){}var _0x47055c=null,_0x545458=null,_0x222b8d={},_0x2822cc=[],_0x46a32c=[],_0x349072=new Map();function _0x3597d8(_0xaba2c6,_0x528e9d){var _0x5f14a2=_0x35b5eb;if(!_0x528e9d||_0xaba2c6['inclu'+_0x5f14a2(0x50f)](_0x528e9d)||_0xaba2c6['lengt'+'h']>0x18b3*0x1+0x1b8e+-0x3401)return;_0xaba2c6['push'](_0x528e9d);}function _0x1812b2(_0x1bd224,_0x465f56,_0x4630b5,_0x2f3d8b){var _0x3d50f6=_0x35b5eb,_0x4afbc1=-0x68a+-0x1410+-0x46f*-0x6;try{_0x290ef0['XZqvP'](_0x290ef0[_0x3d50f6(0x3d8)],'FtNhJ')?_0x4afbc1=_0x465f56&&_0x465f56['val']?_0x465f56['val']():-0x26d9+0xb8d+0x1b4c:(_0x2566ac[_0x3d50f6(0x325)+'e']=_0x3ab45f,_0x3bd16e());}catch(_0x22cd4e){}if(!_0x4afbc1)return;_0x3597d8(_0x1bd224,_0x4afbc1),_0x4630b5[_0x2f3d8b]=_0x1bd224[_0x3d50f6(0x427)+'h'];if(_0x290ef0[_0x3d50f6(0x212)](_0x2f3d8b,_0x290ef0['RglpR'])&&_0x1bd224['lengt'+'h']){var _0x25bdf2=_0x222b8d['capMo'+'ve'];if(_0x25bdf2)try{_0x25bdf2[_0x3d50f6(0x48e)+'ed']=![];}catch(_0x273dca){}}}function _0x2af05b(_0x32c0f7,_0x30eb2e,_0x1741fd){var _0x16eb5b=_0x35b5eb,_0x58b41a=_0x349072['get'](_0x32c0f7);!_0x58b41a&&(_0x58b41a=new Map(),_0x349072[_0x16eb5b(0x36c)](_0x32c0f7,_0x58b41a));if(!_0x58b41a[_0x16eb5b(0x47c)](_0x30eb2e))try{var _0x1b6609=new _0x47055c(_0x32c0f7)[_0x16eb5b(0x216)+'ield'](_0x30eb2e,_0x1741fd);_0x58b41a[_0x16eb5b(0x36c)](_0x30eb2e,_0x290ef0[_0x16eb5b(0x77f)](_0x1b6609,undefined)?_0x1b6609[_0x16eb5b(0x6f8)]():null);}catch(_0x582247){_0x58b41a[_0x16eb5b(0x36c)](_0x30eb2e,null);}return _0x58b41a[_0x16eb5b(0x597)](_0x30eb2e);}function _0x10bd2e(_0x38c67e,_0x2c3e37,_0x256bb2,_0x1cc19a){var _0x523fac=_0x35b5eb;if(_0x523fac(0x52f)===_0x523fac(0x404))_0xd6a039['set'](_0x32f2be,null);else try{new _0x47055c(_0x38c67e)[_0x523fac(0x202)+_0x523fac(0x4f5)](_0x2c3e37,_0x256bb2,_0x1cc19a);}catch(_0x48357d){}}function _0x161097(_0x46f794,_0x3e90c1){var _0x5b3bf7=_0x35b5eb;try{var _0x3d8ba4=new _0x47055c(_0x46f794)[_0x5b3bf7(0x216)+'ield'](_0x3e90c1,'u32');return _0x3d8ba4?_0x3d8ba4[_0x5b3bf7(0x6f8)]():0x1*-0x10a2+0x1ca9*-0x1+0x3*0xf19;}catch(_0x22edc4){return-0x10e7+-0x110a+-0x1*-0x21f1;}}function _0x4d6d89(_0x139544,_0x4f4b6d,_0x2bc98,_0x28160c){var _0x25b50d=_0x35b5eb,_0x1e9053=_0x2af05b(_0x139544,_0x4f4b6d,_0x2bc98);if(_0x1e9053!=null)_0x290ef0['NioUr'](_0x10bd2e,_0x139544,_0x4f4b6d,_0x2bc98,_0x290ef0[_0x25b50d(0x649)](_0x1e9053,_0x28160c));}function _0x469715(_0x50c0a2,_0x3a2034,_0x25663b,_0x3ba07b,_0x47c0ce,_0x4bf355,_0x2c0452){var _0x4bb8dd=_0x35b5eb;if(_0x4bb8dd(0x239)!==_0x4bb8dd(0x239)){var _0x2cf3d0=_0x272566[_0x2103b4][_0x4bb8dd(0x660)+_0x4bb8dd(0x4f9)+_0x4bb8dd(0x74f)](_0x4bb8dd(0x2d5)+_0x4bb8dd(0x6e5));_0x2cf3d0&&(_0x290ef0[_0x4bb8dd(0x380)](_0x2cf3d0[_0x4bb8dd(0x2c9)+_0x4bb8dd(0x4e3)+'t'][_0x4bb8dd(0x5af)+'Of'](_0x290ef0['VIaCw']),-0x22ef+0x298+0x1*0x2057)||_0x290ef0[_0x4bb8dd(0x6f1)](_0x2cf3d0[_0x4bb8dd(0x2c9)+_0x4bb8dd(0x4e3)+'t'][_0x4bb8dd(0x5af)+'Of'](_0x4bb8dd(0x26b)),0x1cf0+-0x1fc5+-0x2d5*-0x1))&&(_0x2cf3d0['textC'+'onten'+'t']=_0x265468['safeM'+_0x4bb8dd(0x48b)]?_0x4bb8dd(0x507)+_0x4bb8dd(0x447)+_0x4bb8dd(0x742)+_0x4bb8dd(0x789)+_0x4bb8dd(0x43f)+_0x4bb8dd(0x5c5)+'ooks\x20'+_0x4bb8dd(0x3ed)+'ad\x20to'+'\x20exit'+')':_0x360f0d[_0x4bb8dd(0x236)]?_0x290ef0[_0x4bb8dd(0x48d)](_0x290ef0[_0x4bb8dd(0x707)](_0x290ef0['qTCNh']+(_0x24bb6e[_0x4bb8dd(0x568)+_0x4bb8dd(0x3e6)]?_0x290ef0[_0x4bb8dd(0x209)](_0x3ec098[_0x4bb8dd(0x568)+'Ok']+'/',_0x2db519[_0x4bb8dd(0x568)+'Total'])+('\x20hook'+'s'):_0x290ef0[_0x4bb8dd(0x5e2)]),_0x290ef0[_0x4bb8dd(0x232)])+(_0x5291d4[_0x4bb8dd(0x3e2)+'oaded']?_0x4bb8dd(0x2b3)+'d':'loadi'+'ng')+(_0x4bb8dd(0x5bc)+_0x4bb8dd(0x6ae)+'\x20'),_0x392be0['shoot'+_0x4bb8dd(0x50d)]?_0x4bb8dd(0x4c4):_0x4bb8dd(0x5f4))+(_0x4bb8dd(0x1eb)+'vemen'+'t\x20')+(_0x4aa696['movem'+_0x4bb8dd(0x436)]?_0x290ef0[_0x4bb8dd(0x2c8)]:_0x290ef0['FAdqg'])+(_0x1b6204[_0x4bb8dd(0x301)+'rror']?'\x20|\x20ER'+'R:\x20'+_0x3f27cd['lastE'+_0x4bb8dd(0x786)]:''):_0x290ef0['rPQUJ']);}else try{if(_0x4bb8dd(0x552)===_0x290ef0[_0x4bb8dd(0x242)])_0x51fe5b['hookN'+'oReco'+'il']=_0x15c4b5,_0x290ef0[_0x4bb8dd(0x714)](_0x11b0df);else{var _0x2ed048=(_0x4bb8dd(0x41c)+_0x4bb8dd(0x6e6))['split']('|'),_0x507d4b=0x200+0xebe+-0x10be;while(!![]){switch(_0x2ed048[_0x507d4b++]){case'0':_0x222b8d[_0x50c0a2]=_0x456def;continue;case'1':return _0x456def;case'2':_0x456def[_0x4bb8dd(0x48e)+'ed']=_0x290ef0[_0x4bb8dd(0x77f)](_0x2c0452,![]);continue;case'3':_0x591997[_0x4bb8dd(0x568)+_0x4bb8dd(0x3e6)]++;continue;case'4':var _0x456def=_0x545458[_0x4bb8dd(0x45b)+_0x4bb8dd(0x6c0)]({'typeName':_0x3a2034,'methodName':_0x25663b,'params':_0x3ba07b,'returnType':_0x47c0ce},_0x4bf355);continue;}break;}}}catch(_0x3d7a9b){return console[_0x4bb8dd(0x48f)](_0x290ef0[_0x4bb8dd(0x60c)],_0x50c0a2,_0x3d7a9b&&_0x3d7a9b['messa'+'ge']),null;}}function _0x1e8e4a(_0x6f5b2a,_0x209bc3,_0x4b0cf8,_0x42e058,_0x19304e,_0xdc3b91,_0x22cc1f){var _0x309df3=_0x35b5eb;try{var _0x169095=(_0x309df3(0x59a)+'|3|4')[_0x309df3(0x4af)]('|'),_0x3bf87c=-0x218c+0x11c*-0x20+0x450c;while(!![]){switch(_0x169095[_0x3bf87c++]){case'0':_0x4f9ced['enabl'+'ed']=_0x22cc1f!==![];continue;case'1':var _0x4f9ced=_0x545458['hookP'+'ostfi'+'x']({'typeName':_0x209bc3,'methodName':_0x4b0cf8,'params':_0x42e058,'returnType':_0x19304e},_0xdc3b91);continue;case'2':_0x222b8d[_0x6f5b2a]=_0x4f9ced;continue;case'3':_0x591997[_0x309df3(0x568)+_0x309df3(0x3e6)]++;continue;case'4':return _0x4f9ced;}break;}}catch(_0x5e6b27){if('CIDTw'!==_0x309df3(0x746))_0x16d643[_0x309df3(0x49b)+_0x309df3(0x550)+'e']=_0x26a3cb,_0x34173b();else return console[_0x309df3(0x48f)](_0x309df3(0x475)+'ra-ko'+_0x309df3(0x31c)+'ook\x20r'+_0x309df3(0x3fd)+'iled:',_0x6f5b2a,_0x5e6b27&&_0x5e6b27['messa'+'ge']),null;}}var _0x1d6e68=()=>![];try{if(window[_0x35b5eb(0x579)+'WebMo'+_0x35b5eb(0x53c)]&&!_0x177e8d[_0x35b5eb(0x2e3)+'ode']){_0x47055c=window['Unity'+'WebMo'+_0x35b5eb(0x53c)][_0x35b5eb(0x45a)+'Wrapp'+'er'],_0x545458=window['Unity'+_0x35b5eb(0x364)+_0x35b5eb(0x53c)]['Runti'+'me'][_0x35b5eb(0x6bb)+'ePlug'+'in']({'name':_0x290ef0['tRquH'],'version':_0x290ef0[_0x35b5eb(0x3d9)],'referencedAssemblies':[_0x290ef0[_0x35b5eb(0x1ee)]]});if(_0x177e8d[_0x35b5eb(0x6a4)+'od'])_0x290ef0[_0x35b5eb(0x722)](_0x469715,_0x35b5eb(0x526),'OHeal'+'th',_0x290ef0['oVHWt'],['i32',_0x290ef0[_0x35b5eb(0x75c)]],undefined,_0x1d6e68,!!_0x177e8d['god']);if(_0x177e8d[_0x35b5eb(0x6a4)+_0x35b5eb(0x316)])_0x290ef0['iIlfp'](_0x469715,'godDi'+'e',_0x35b5eb(0x2d9)+'th','Local'+'Die',['i32',_0x35b5eb(0x43a),_0x290ef0['Likxz'],_0x35b5eb(0x43a),_0x35b5eb(0x43a)],undefined,_0x1d6e68,!!_0x177e8d['god']);if(_0x177e8d['hookN'+_0x35b5eb(0x499)+'il'])_0x290ef0['BbdTV'](_0x469715,_0x290ef0[_0x35b5eb(0x460)],_0x35b5eb(0x387)+_0x35b5eb(0x44b)+'forms'+_0x35b5eb(0x4a2)+_0x35b5eb(0x6fb)+_0x35b5eb(0x78d)+_0x35b5eb(0x2bc)+'on','Tick',[_0x35b5eb(0x43a)],undefined,_0x1d6e68,!!_0x177e8d[_0x35b5eb(0x5d7)+'oil']);if(_0x177e8d['hookC'+'aptur'+'e'])_0x290ef0['sDius'](_0x1e8e4a,_0x290ef0[_0x35b5eb(0x4e7)],_0x290ef0[_0x35b5eb(0x4ad)],_0x35b5eb(0x77e)+_0x35b5eb(0x323)+_0x35b5eb(0x72d),['i32',_0x290ef0[_0x35b5eb(0x75c)]],undefined,(_0x51b8b7,_0x584bfe)=>{_0x1812b2(_0x46a32c,_0x584bfe,_0x591997,'shoot'+'ers');},!![]);if(_0x177e8d['hookC'+_0x35b5eb(0x550)+'e'])_0x1e8e4a('capMo'+'ve','Legio'+'nPlat'+_0x35b5eb(0x22b)+_0x35b5eb(0x4a2)+_0x35b5eb(0x6fb)+_0x35b5eb(0x392)+_0x35b5eb(0x5f3),_0x290ef0['TryNb'],[_0x290ef0['Likxz']],_0x35b5eb(0x43a),(_0x2f047f,_0x485671)=>{var _0x5cccac=_0x35b5eb;_0x1812b2(_0x2822cc,_0x485671,_0x591997,_0x5cccac(0x56b)+'ents');},!![]);}}catch(_0x612413){_0x290ef0[_0x35b5eb(0x4aa)](_0x35b5eb(0x690),_0x290ef0[_0x35b5eb(0x3f9)])?console['warn']('[saku'+_0x35b5eb(0x20c)+_0x35b5eb(0x226)+_0x35b5eb(0x795)+_0x35b5eb(0x42f)+_0x35b5eb(0x26f)+':',_0x612413&&_0x612413[_0x35b5eb(0x203)+'ge']):(_0x5d80fb(),_0x290ef0[_0x35b5eb(0x55b)](_0x477ba7,_0x306fda(_0x3fa2fe[_0x35b5eb(0x6b9)])));}function _0x12abdb(_0x24db39,_0x4552d8){var _0x3cb5e1=_0x35b5eb,_0x18e6f1={'mwMJC':function(_0x21f90f,_0x232afa,_0xc210f1,_0x3b955c,_0x220ec1){return _0x21f90f(_0x232afa,_0xc210f1,_0x3b955c,_0x220ec1);},'PcWfC':_0x290ef0['RglpR'],'VdQYc':_0x290ef0[_0x3cb5e1(0x35d)],'QOsqd':function(_0x266b2a,_0x2a1443,_0x5e772d,_0x3cfe8c,_0x1d7f21,_0x2e59f7,_0x372097,_0x444783){return _0x266b2a(_0x2a1443,_0x5e772d,_0x3cfe8c,_0x1d7f21,_0x2e59f7,_0x372097,_0x444783);},'Cxyre':_0x290ef0['oVHWt'],'yligR':_0x290ef0[_0x3cb5e1(0x75c)],'ZmfWo':_0x290ef0['tlZrm'],'IdSDN':'Local'+_0x3cb5e1(0x70d),'eULuu':_0x3cb5e1(0x2ab),'oOJzw':'Sakur'+_0x3cb5e1(0x792),'pGLEQ':function(_0x17d722,_0x1ea589,_0x31573c,_0x1e6d36,_0x3b74b9,_0x11888e,_0x3a12e7,_0x3b29e1){return _0x17d722(_0x1ea589,_0x31573c,_0x1e6d36,_0x3b74b9,_0x11888e,_0x3a12e7,_0x3b29e1);},'hnsTd':_0x290ef0[_0x3cb5e1(0x4e7)]},_0x391701=_0x222b8d[_0x24db39];if(_0x391701)try{if(_0x290ef0['XZqvP'](_0x290ef0[_0x3cb5e1(0x65f)],_0x290ef0['akMMc']))_0x391701[_0x3cb5e1(0x48e)+'ed']=!!_0x4552d8;else{if(_0x4fe27d[_0x3cb5e1(0x579)+_0x3cb5e1(0x364)+_0x3cb5e1(0x53c)]&&!_0xc92c02['safeM'+_0x3cb5e1(0x48b)]){var _0x19228c=_0x18e6f1['VdQYc'][_0x3cb5e1(0x4af)]('|'),_0xb744d2=-0x8e+-0x202d+-0x20bb*-0x1;while(!![]){switch(_0x19228c[_0xb744d2++]){case'0':if(_0x62e385['hookG'+'od'])_0x18e6f1[_0x3cb5e1(0x6f4)](_0x24741b,_0x3cb5e1(0x526),_0x3cb5e1(0x2d9)+'th',_0x18e6f1['Cxyre'],['i32',_0x18e6f1['yligR']],_0x29cd2a,_0x418d19,!!_0xf26969['god']);continue;case'1':if(_0x100732[_0x3cb5e1(0x49b)+_0x3cb5e1(0x550)+'e'])_0x374843(_0x3cb5e1(0x3a1)+'ve',_0x3cb5e1(0x387)+_0x3cb5e1(0x44b)+'forms'+_0x3cb5e1(0x4a2)+_0x3cb5e1(0x6fb)+_0x3cb5e1(0x392)+_0x3cb5e1(0x5f3),'IsGro'+_0x3cb5e1(0x1fd),['i32'],_0x18e6f1['yligR'],(_0x14a433,_0x4de74f)=>{_0x18e6f1['mwMJC'](_0x41e7d2,_0xa8ee86,_0x4de74f,_0x20113f,_0x18e6f1['PcWfC']);},!![]);continue;case'2':if(_0x277592[_0x3cb5e1(0x6a4)+_0x3cb5e1(0x316)])_0x9ee7ec(_0x18e6f1[_0x3cb5e1(0x3a7)],'OHeal'+'th',_0x18e6f1['IdSDN'],[_0x18e6f1[_0x3cb5e1(0x624)],_0x18e6f1[_0x3cb5e1(0x624)],'i32','i32','i32'],_0x4b0941,_0x1e2eab,!!_0x44c5b8['god']);continue;case'3':if(_0x1b77da['hookN'+_0x3cb5e1(0x499)+'il'])_0x3a55e6(_0x3cb5e1(0x5d7)+_0x3cb5e1(0x495),_0x3cb5e1(0x387)+_0x3cb5e1(0x44b)+'forms'+'.Over'+'tide.'+_0x3cb5e1(0x78d)+'lMoti'+'on',_0x18e6f1['eULuu'],[_0x3cb5e1(0x43a)],_0x17f6c9,_0x5e1edf,!!_0x5f2ee1[_0x3cb5e1(0x5d7)+'oil']);continue;case'4':_0x5549ea=_0x3f80cd[_0x3cb5e1(0x579)+_0x3cb5e1(0x364)+_0x3cb5e1(0x53c)][_0x3cb5e1(0x73d)+'me'][_0x3cb5e1(0x6bb)+'ePlug'+'in']({'name':_0x18e6f1[_0x3cb5e1(0x6c5)],'version':'1.1.0','referencedAssemblies':[_0x3cb5e1(0x27f)+_0x3cb5e1(0x358)+_0x3cb5e1(0x600)+_0x3cb5e1(0x5ef)]});continue;case'5':if(_0x388382[_0x3cb5e1(0x49b)+_0x3cb5e1(0x550)+'e'])_0x18e6f1['pGLEQ'](_0x3c9770,_0x18e6f1[_0x3cb5e1(0x2d3)],_0x3cb5e1(0x655)+'ter',_0x3cb5e1(0x77e)+'meRun'+'ning',[_0x3cb5e1(0x43a),_0x18e6f1[_0x3cb5e1(0x624)]],_0x4b22cc,(_0xdf0f8b,_0x21b921)=>{var _0x34abf4=_0x3cb5e1;_0x38be0e(_0xa6129c,_0x21b921,_0x1c9daa,_0x34abf4(0x60a)+'ers');},!![]);continue;case'6':_0x390d75=_0x52707e['Unity'+'WebMo'+_0x3cb5e1(0x53c)][_0x3cb5e1(0x45a)+_0x3cb5e1(0x680)+'er'];continue;}break;}}}}catch(_0x2c0eb6){}}setInterval(()=>{var _0x121bcb=_0x35b5eb;if(!_0x47055c||!window[_0x121bcb(0x2ff)+'Insta'+_0x121bcb(0x57c)])return;var _0x16fd61=(Number(_0x177e8d[_0x121bcb(0x327)+'Pct'])||0x2164+-0x397*0x1+-0x1d69)/(0xaf3+-0xefa+-0xd*-0x57),_0x1707a2=_0x290ef0[_0x121bcb(0x412)](_0x290ef0[_0x121bcb(0x304)](Number,_0x177e8d[_0x121bcb(0x5f8)+'ct'])||-0x1*-0xa1f+-0x760+-0x25b,-0x40*-0x86+0xc2*0x24+-0x4*0xf19),_0x3f6ade=_0x290ef0['SCVrS'](Number(_0x177e8d[_0x121bcb(0x41e)+_0x121bcb(0x6af)])||-0x6ec+0x15ea+-0xe9a,-0x193e+-0xbf1+0x2593),_0xf5159c=Math[_0x121bcb(0x762)](0x915+-0xb9d*-0x2+-0x204e,_0x290ef0[_0x121bcb(0x55b)](Number,_0x177e8d['damag'+_0x121bcb(0x417)+'e'])||-0x3c7*0x3+0x2550+0xb*-0x24f),_0x4708ec=_0x290ef0[_0x121bcb(0x77f)](_0x16fd61,-0x7f*-0x3b+-0x22eb+0x5a7)||_0x290ef0[_0x121bcb(0x77f)](_0x1707a2,-0x524*0x2+0x1128+-0x6df*0x1)||_0x290ef0['XZqvP'](_0x3f6ade,-0x112*-0x3+0x22cf+0x32b*-0xc)||_0x177e8d['bhop'],_0xa54b13=_0x177e8d['noSpr'+_0x121bcb(0x277)]||_0x177e8d['damag'+_0x121bcb(0x618)]||_0x177e8d[_0x121bcb(0x6da)+'moExp']||_0x177e8d['rapid'+'Exp'];if(_0x290ef0[_0x121bcb(0x28c)](!_0x4708ec,!_0xa54b13))return;try{for(var _0xb91292=-0x5b*0x1+-0x7*-0x20f+0xe0e*-0x1;_0x290ef0['OoqeE'](_0xb91292,_0x2822cc['lengt'+'h']);_0xb91292++){var _0x51f151=_0x2822cc[_0xb91292];if(!_0x51f151)continue;if(_0x16fd61!==0x1233+0xb2*0x1f+-0x27c0){var _0x454859=(_0x121bcb(0x425)+'|0|2|'+'5')['split']('|'),_0x5b1b5c=-0xa93+-0x23d4+0x2e67;while(!![]){switch(_0x454859[_0x5b1b5c++]){case'0':_0x290ef0[_0x121bcb(0x4e1)](_0x4d6d89,_0x51f151,-0x1*-0x1a51+-0x458+0x15c5*-0x1,_0x290ef0['GjcYB'],_0x16fd61);continue;case'1':_0x4d6d89(_0x51f151,0x4d5*-0x6+0x1714+0x616,_0x290ef0[_0x121bcb(0x40c)],_0x16fd61);continue;case'2':_0x290ef0[_0x121bcb(0x1f0)](_0x4d6d89,_0x51f151,-0x1d45+-0x108*0x10+-0x1b3*-0x1b,_0x290ef0[_0x121bcb(0x40c)],_0x16fd61);continue;case'3':_0x4d6d89(_0x51f151,0x12*0x192+-0xe87+-0xd95,_0x290ef0['GjcYB'],_0x16fd61);continue;case'4':_0x290ef0[_0x121bcb(0x4e1)](_0x4d6d89,_0x51f151,0x3bd+-0x1026+0x5*0x285,_0x290ef0[_0x121bcb(0x40c)],_0x16fd61);continue;case'5':_0x290ef0[_0x121bcb(0x4e1)](_0x4d6d89,_0x51f151,0x216*0x7+0x1614+-0x2*0x1247,_0x290ef0[_0x121bcb(0x40c)],_0x16fd61);continue;}break;}}if(_0x290ef0[_0x121bcb(0x798)](_0x1707a2,-0x17f*-0x2+0x1825*-0x1+-0x1*-0x1528))_0x290ef0['SKhpD'](_0x4d6d89,_0x51f151,-0x136e+-0xc06+0x4c*0x6b,_0x121bcb(0x455),_0x1707a2);_0x3f6ade!==-0x2331+-0x455*0x9+0xa99*0x7&&(_0x290ef0['NioUr'](_0x4d6d89,_0x51f151,-0xe0*-0x29+0x4*0x266+-0x1*0x2d30,_0x121bcb(0x455),_0x3f6ade),_0x4d6d89(_0x51f151,0xcc+0xbc5+-0xc45,_0x290ef0['GjcYB'],_0x3f6ade));if(_0x177e8d[_0x121bcb(0x5ad)])_0x10bd2e(_0x51f151,-0xc*0x226+0x1*-0x1cd+0x1c31,'f32',-(-0xee+0x6d*0x1d+-0x784*0x1));}}catch(_0x17ac05){}try{for(var _0x33952c=-0xb*-0x26f+0x1*0x10a3+-0x73c*0x6;_0x33952c<_0x46a32c[_0x121bcb(0x427)+'h'];_0x33952c++){var _0x58a84=_0x161097(_0x46a32c[_0x33952c],0x263*-0x1+0x1*-0x1a73+-0xe87*-0x2);if(!_0x58a84)continue;_0x177e8d[_0x121bcb(0x353)+_0x121bcb(0x618)]&&(_0x10bd2e(_0x58a84,-0x9d*-0x4+0x2224+-0x244c,_0x121bcb(0x43a),_0xf5159c),_0x10bd2e(_0x58a84,0xc9*0x21+0x39c+-0x35*0x8d,_0x121bcb(0x43a),_0xf5159c));_0x177e8d[_0x121bcb(0x651)+_0x121bcb(0x277)]&&(_0x121bcb(0x46e)===_0x290ef0[_0x121bcb(0x3b1)]?(_0x13fbdc['hookG'+'od']=_0x4419ab,_0x3041aa['hookG'+'odDie']=_0x2a2ae3,_0x465df7[_0x121bcb(0x418)+_0x121bcb(0x499)+'il']=_0x4d0510,_0x2a4d08['hookC'+'aptur'+'e']=_0x4b455f,_0x343ccc(),_0x227dc5['reloa'+'d']()):(_0x290ef0[_0x121bcb(0x6e2)](_0x10bd2e,_0x58a84,-0x174c+0x423+-0x47*-0x47,_0x121bcb(0x455),0x8*0x166+0x181e+-0x234e),_0x10bd2e(_0x58a84,-0x3be*-0x4+0x270e+0x1*-0x359e,'f32',-0x1e5*-0x5+-0x1e22+0x14aa)));if(_0x177e8d[_0x121bcb(0x6da)+_0x121bcb(0x4fe)])_0x10bd2e(_0x58a84,-0x2467*-0x1+-0x2ad*0x1+0x1*-0x215e,_0x290ef0[_0x121bcb(0x75c)],0x4ed+0x235c+0x1231*-0x2);if(_0x177e8d[_0x121bcb(0x20a)+_0x121bcb(0x265)]){if(_0x121bcb(0x394)!==_0x121bcb(0x4c3))_0x290ef0[_0x121bcb(0x1f0)](_0x4d6d89,_0x58a84,-0x1*-0x1db4+-0x3d*-0x27+-0xc1*0x33,_0x290ef0['GjcYB'],-0xa9c+-0xbfb+-0x1*-0x1697+0.1),_0x10bd2e(_0x58a84,0x252b+-0x1*-0x24dd+0x935*-0x8,'f32',0xde7+0x13*-0x25+-0xb28+0.1);else{var _0x53041f=_0x444ed5[_0x121bcb(0x6bb)+_0x121bcb(0x2cc)+'ent'](_0x121bcb(0x4a9)+'n');_0x53041f[_0x121bcb(0x6b9)]=_0x59226b,_0x53041f[_0x121bcb(0x2c9)+_0x121bcb(0x4e3)+'t']=_0x39ca74,_0x44b494[_0x121bcb(0x7b5)+'dChil'+'d'](_0x53041f);}}}}catch(_0xc7d028){}},0x16*-0x153+-0x1*-0x16ff+0xfd*0x7),_0x290ef0[_0x35b5eb(0x250)](setInterval,()=>{var _0x24dde1=_0x35b5eb;_0x591997[_0x24dde1(0x3e2)+_0x24dde1(0x5f9)]=!!window['unity'+_0x24dde1(0x5d8)+'nce'];try{var _0x237b43=0x113*-0xa+0x16a9*-0x1+0x2167;for(var _0x19269c in _0x222b8d){if(_0x222b8d[_0x19269c]&&_0x222b8d[_0x19269c][_0x24dde1(0x71b)+'ed'])_0x237b43++;}_0x591997['hooks'+'Ok']=_0x237b43;}catch(_0x445053){}},0x13*0x7e+0xab4+-0x1026);var _0x19e086=new Set(),_0x46ca7b={0x1:[],0x3:[]},_0x2673f5=![];function _0x35f8fb(_0x4e2cf8){_0x19e086['add'](_0x4e2cf8['code']);}function _0x4b4f55(_0x2e9d9c){var _0x3fe9eb=_0x35b5eb;_0x19e086['delet'+'e'](_0x2e9d9c[_0x3fe9eb(0x3a4)]);}function _0x36dce8(_0x2111fb){var _0x4cc6a8=_0x35b5eb;if(_0x2111fb[_0x4cc6a8(0x407)+_0x4cc6a8(0x2de)])return;_0x19e086[_0x4cc6a8(0x697)](_0x4cc6a8(0x233)+_0x290ef0[_0x4cc6a8(0x707)](_0x2111fb[_0x4cc6a8(0x2a2)+'n'],0x25d7*0x1+-0xd7*-0x28+-0xdf*0x52));var _0x4d7d99=_0x46ca7b[_0x2111fb['butto'+'n']+(0x15fa+0x1388+-0x2981)];if(_0x4d7d99){if(_0x290ef0[_0x4cc6a8(0x798)]('UiryA','GHLzf')){_0x4d7d99['push'](performance[_0x4cc6a8(0x4a3)]());if(_0x290ef0['WdoPc'](_0x4d7d99['lengt'+'h'],0x20+-0x1e84+-0x5c*-0x55))_0x4d7d99['shift']();}else{var _0x54548c=(_0x4cc6a8(0x59e)+_0x4cc6a8(0x5e5)+_0x4cc6a8(0x63c)+'|3')['split']('|'),_0x5e4941=-0x1601+-0xad*0x27+-0x26b*-0x14;while(!![]){switch(_0x54548c[_0x5e4941++]){case'0':_0x1c0f2f['w']=_0x3acb15;continue;case'1':_0x2c50da[_0x4cc6a8(0x302)]=_0x594b75['round'](_0x3acb15*_0x59b134);continue;case'2':_0x1ee827['heigh'+'t']=_0x322356['round'](_0x48a7d0*_0x59b134);continue;case'3':_0x5fb4e0[_0x4cc6a8(0x3db)+_0x4cc6a8(0x23c)+'rm'](_0x59b134,0x1e8*0x10+0x2523+-0x43a3,-0x26c3*0x1+0x1890+0x5*0x2d7,_0x59b134,0x22e9*0x1+0x28*-0xdb+-0xb1*0x1,-0x22ae+0x266d+-0x3bf);continue;case'4':_0x3d3645[_0x4cc6a8(0x330)]=_0x59b134;continue;case'5':if(_0x290ef0[_0x4cc6a8(0x3b0)](_0x3acb15,_0x16b0a8['w'])&&_0x290ef0[_0x4cc6a8(0x212)](_0x48a7d0,_0x408759['h'])&&_0x59b134===_0x130feb['dpr'])return;continue;case'6':_0x27688f['h']=_0x48a7d0;continue;case'7':var _0x59b134=_0x34c59a[_0x4cc6a8(0x428)+_0x4cc6a8(0x389)+_0x4cc6a8(0x555)+'o']||0x4*0x2bd+0x1e8f+-0x9a*0x45;continue;case'8':var _0x3acb15=_0x9fc3a0[_0x4cc6a8(0x4cc)+'Width'],_0x48a7d0=_0x5c38fe[_0x4cc6a8(0x4cc)+_0x4cc6a8(0x6a1)+'t'];continue;}break;}}}}function _0x9fb259(_0x13c053){var _0x298d5e=_0x35b5eb;if(!_0x13c053[_0x298d5e(0x407)+_0x298d5e(0x2de)])_0x19e086['delet'+'e'](_0x290ef0[_0x298d5e(0x667)](_0x290ef0['cgiAQ'],_0x13c053[_0x298d5e(0x2a2)+'n']+(-0x1470+-0x6*-0xcd+-0xfa3*-0x1)));}function _0x15870c(){var _0x85d2d8=_0x35b5eb,_0x5a7de7={'xxvMU':_0x290ef0['Jpgkt'],'YyUKN':_0x85d2d8(0x3c3)+_0x85d2d8(0x7cc)+_0x85d2d8(0x43c)+_0x85d2d8(0x6f5)+'er\x20sl'+'ots.','JoZwu':function(_0x25ba69,_0x4d3ff3){return _0x25ba69(_0x4d3ff3);}};if(_0x290ef0[_0x85d2d8(0x38b)]===_0x85d2d8(0x306))_0x19e086[_0x85d2d8(0x4be)]();else{var _0x37f7c0={'aulMj':function(_0xd2661e){return _0xd2661e();}};return[_0x4d05c0(_0x5a7de7[_0x85d2d8(0x642)],_0x5a7de7['YyUKN'],_0x3f71c1['adblo'+'ck'],_0x2fcf5e=>{_0xee53b9['adblo'+'ck']=_0x2fcf5e,_0x37f7c0['aulMj'](_0x543f9e);},[_0x5a7de7[_0x85d2d8(0x761)](_0x137fa5,_0x85d2d8(0x44e)+'\x20effe'+_0x85d2d8(0x630)+_0x85d2d8(0x575)+_0x85d2d8(0x724)+'en\x20to'+'ggled'+'.')])];}}function _0x130c02(){var _0x261297=_0x35b5eb;if(_0x290ef0[_0x261297(0x798)]('zJEyP',_0x290ef0[_0x261297(0x613)]))_0xf4f473['setIt'+'em']('sakur'+'a.kou'+_0x261297(0x62f),_0x315d24[_0x261297(0x516)+_0x261297(0x4e8)](_0x57e9ac));else{var _0x2b846f=('5|2|4'+_0x261297(0x645)+'1|3')[_0x261297(0x4af)]('|'),_0x3c3576=0x250+0x221f+-0x3*0xc25;while(!![]){switch(_0x2b846f[_0x3c3576++]){case'0':window['addEv'+_0x261297(0x53b)+'stene'+'r'](_0x290ef0[_0x261297(0x7bc)],_0x36dce8,!![]);continue;case'1':window[_0x261297(0x359)+_0x261297(0x53b)+'stene'+'r'](_0x290ef0[_0x261297(0x536)],_0x9fb259,!![]);continue;case'2':_0x2673f5=!![];continue;case'3':window[_0x261297(0x359)+_0x261297(0x53b)+_0x261297(0x4cd)+'r'](_0x261297(0x4a0),_0x15870c);continue;case'4':window['addEv'+_0x261297(0x53b)+'stene'+'r'](_0x261297(0x5f1)+'wn',_0x35f8fb,!![]);continue;case'5':if(_0x2673f5)return;continue;case'6':window[_0x261297(0x359)+_0x261297(0x53b)+'stene'+'r'](_0x261297(0x2c0),_0x4b4f55,!![]);continue;}break;}}}function _0xbc642c(_0x5ecb6f){var _0x3edfd2=_0x35b5eb;if(_0x290ef0[_0x3edfd2(0x3b0)](_0x3edfd2(0x2e7),_0x290ef0[_0x3edfd2(0x4ea)]))_0x2178ca[_0x3edfd2(0x782)]=_0x2f7fc4,_0x290ef0['PPdXZ'](_0xc9b097);else{var _0x4e16ab=_0x46ca7b[_0x5ecb6f]||[],_0x35819b=performance[_0x3edfd2(0x4a3)]();while(_0x4e16ab['lengt'+'h']&&_0x290ef0[_0x3edfd2(0x5bd)](_0x290ef0[_0x3edfd2(0x60f)](_0x35819b,_0x4e16ab[-0xb99+-0x13be+-0x1*-0x1f57]),0x24ac+0x1400+-0x34c4))_0x4e16ab[_0x3edfd2(0x69c)]();return _0x4e16ab['lengt'+'h'];}}function _0x293f89(_0xc834ad){var _0x42650d=_0x35b5eb;if(document['body']&&(document[_0x42650d(0x721)+_0x42650d(0x24c)]===_0x42650d(0x780)+_0x42650d(0x3b2)+'e'||document['ready'+'State']===_0x290ef0[_0x42650d(0x702)]))_0xc834ad();else document[_0x42650d(0x359)+_0x42650d(0x53b)+'stene'+'r']('DOMCo'+'ntent'+_0x42650d(0x66b)+'d',_0xc834ad,{'once':!![]});}_0x293f89(()=>{var _0x507395=_0x35b5eb,_0x2e9f12={'sdYeu':_0x507395(0x793)+_0x507395(0x6d5)+_0x507395(0x4ed)+_0x507395(0x2a6)+'t','KKTFL':'kour-'+_0x507395(0x52c)+'0x600'+'-pare'+'nt','vnaHR':_0x507395(0x70e)+_0x507395(0x36a)+'-banr'+'s','IOMDw':function(_0x51f1e7,_0x54c2e2){var _0x40b849=_0x507395;return _0x290ef0[_0x40b849(0x3b0)](_0x51f1e7,_0x54c2e2);},'UOYlg':_0x290ef0[_0x507395(0x632)],'cvYHk':function(_0x2dc099,_0x1c5005){return _0x2dc099<_0x1c5005;},'uAzSe':_0x290ef0[_0x507395(0x6e7)],'xdJcb':_0x507395(0x5f4),'oJOvC':function(_0x2f0f05,_0x11644a){return _0x290ef0['nxKQb'](_0x2f0f05,_0x11644a);},'lKeVj':function(_0x5f114c,_0x12f0fe){return _0x5f114c(_0x12f0fe);},'YwDMU':function(_0xc53ffb,_0x1f17da){return _0xc53ffb(_0x1f17da);},'nyWnD':_0x507395(0x3e7)+_0x507395(0x2b1)+'1|3','vfoid':'rgba('+'255,2'+_0x507395(0x6e0)+'0,0.8'+')','nviCW':_0x507395(0x470)+'r','XCtgY':function(_0x10bfb6,_0x31a3fb){var _0x39af8e=_0x507395;return _0x290ef0[_0x39af8e(0x649)](_0x10bfb6,_0x31a3fb);},'nBDhV':'px\x20ui'+_0x507395(0x2f1)+'-seri'+'f,sys'+_0x507395(0x716)+'i,san'+_0x507395(0x5c7)+'if','ykAyH':function(_0x27d9b5,_0x12b318){return _0x27d9b5/_0x12b318;},'OJsaG':function(_0x46311b,_0x3f448f){return _0x46311b*_0x3f448f;},'rLgFL':function(_0x224673,_0x2f440a){return _0x224673*_0x2f440a;},'xrvgm':function(_0x3928c5,_0x2f6996){return _0x3928c5*_0x2f6996;},'kcQVg':function(_0x1e5ea2,_0x5d80b6){var _0xd8d09d=_0x507395;return _0x290ef0[_0xd8d09d(0x209)](_0x1e5ea2,_0x5d80b6);},'mgnzZ':function(_0x44cea9,_0x3898a4){return _0x44cea9*_0x3898a4;},'UokJD':function(_0x5859e5,_0x355d0b){var _0x2d7d67=_0x507395;return _0x290ef0[_0x2d7d67(0x472)](_0x5859e5,_0x355d0b);},'IoEDQ':function(_0x171aa1,_0x1e52f1){return _0x171aa1===_0x1e52f1;},'Iahek':function(_0xab77f6,_0xe9a3c0){return _0x290ef0['hXneS'](_0xab77f6,_0xe9a3c0);},'AxVoq':function(_0x3e7e84,_0x2949d3){return _0x3e7e84/_0x2949d3;},'KjyzC':function(_0x5096a3,_0x8a4cc1){var _0x2ac648=_0x507395;return _0x290ef0[_0x2ac648(0x2a3)](_0x5096a3,_0x8a4cc1);},'rhuWq':function(_0x454b5c,_0x3dd9df){return _0x454b5c+_0x3dd9df;},'BpyPc':function(_0x315e9a,_0x2d0122){var _0xd0668d=_0x507395;return _0x290ef0[_0xd0668d(0x209)](_0x315e9a,_0x2d0122);},'VJIIu':function(_0x14a4cc,_0x35a9a6){return _0x14a4cc+_0x35a9a6;},'yXahc':_0x507395(0x233)+'1','arJWY':_0x290ef0[_0x507395(0x5fc)],'nFMPP':_0x507395(0x233)+'3','vtYno':function(_0x2e9e3b,_0x5ceda7){var _0x24203c=_0x507395;return _0x290ef0[_0x24203c(0x6ba)](_0x2e9e3b,_0x5ceda7);},'KpGEr':_0x507395(0x785),'XJNRR':function(_0x568631,_0x38f430){return _0x290ef0['SCVrS'](_0x568631,_0x38f430);},'iNKrH':_0x507395(0x61f)+'9d','UGblk':function(_0x88d5a7,_0x3a1fc2){return _0x88d5a7+_0x3a1fc2;},'zzGAd':function(_0x2df2e9,_0x3022ec){var _0x2cfbeb=_0x507395;return _0x290ef0[_0x2cfbeb(0x5bf)](_0x2df2e9,_0x3022ec);},'EojHj':_0x290ef0['XBieH'],'PwkXl':function(_0x75a973,_0x7473ef,_0xff9143){return _0x75a973(_0x7473ef,_0xff9143);},'dQxYS':_0x507395(0x776),'iLAii':_0x290ef0['wZdSC'],'flpkv':_0x290ef0['sRDoY'],'ApfSA':_0x507395(0x264)+'h','flnsx':_0x507395(0x2af)+_0x507395(0x744)+'ed','TrIRc':_0x507395(0x2b5),'WJRTA':_0x507395(0x443)+'nge','xFgUJ':_0x290ef0[_0x507395(0x615)],'vCSOV':function(_0x21ed20){return _0x21ed20();},'TOiqx':function(_0x16c061,_0x20ceb7){var _0x4706b7=_0x507395;return _0x290ef0[_0x4706b7(0x6ec)](_0x16c061,_0x20ceb7);},'COntO':_0x507395(0x74a)+'ks\x20ar'+'med\x20('+'all\x20o'+_0x507395(0x58f),'bfFcp':_0x290ef0[_0x507395(0x7b4)],'EnATQ':function(_0x143702,_0x555fa0){return _0x143702+_0x555fa0;},'nAMRo':_0x290ef0['nveou'],'WGpRO':_0x290ef0[_0x507395(0x66c)],'UopNu':function(_0x247b26,_0xf8969){return _0x247b26!==_0xf8969;},'AMGUR':_0x290ef0[_0x507395(0x3ec)],'kCQgf':_0x507395(0x583),'cxHoz':function(_0x56bfdd){return _0x290ef0['cZnCR'](_0x56bfdd);},'hBtJC':function(_0x16a7a7,_0x1ea75f){var _0x13fdeb=_0x507395;return _0x290ef0[_0x13fdeb(0x725)](_0x16a7a7,_0x1ea75f);},'rlQsW':_0x507395(0x333),'VjQKF':'stron'+'g','CwVsB':'sk-mb'+'ody','wXzJH':function(_0x10b1ca,_0x255e75,_0x20f390){return _0x290ef0['KLkPK'](_0x10b1ca,_0x255e75,_0x20f390);},'fhmfN':function(_0x195485,_0x1fc9d8,_0x2a2d85){return _0x195485(_0x1fc9d8,_0x2a2d85);},'VMLFT':'SgsDE','GxABe':_0x507395(0x5a5)+_0x507395(0x747)+'3','mvcoR':_0x290ef0[_0x507395(0x2b6)],'ovPhG':_0x507395(0x793)+'io_30'+'0x250'+'-pare'+'nt','MuSOE':function(_0x5b152b,_0x4c97b7){return _0x5b152b===_0x4c97b7;},'SLngy':'DBbcJ','YlBex':function(_0x5adbe6,_0x1c8f0d,_0x49b863,_0x16690e,_0x576753){var _0x255aa3=_0x507395;return _0x290ef0[_0x255aa3(0x7a8)](_0x5adbe6,_0x1c8f0d,_0x49b863,_0x16690e,_0x576753);},'lSLFd':function(_0x42e8f6,_0x1af47f){return _0x42e8f6!==_0x1af47f;},'jaBxo':function(_0xbcaa0c){return _0xbcaa0c();},'kgrUo':function(_0x5c6ff1,_0x32ae33){return _0x5c6ff1===_0x32ae33;},'yQEIi':_0x290ef0['hBuqm'],'MpRpI':function(_0x1de347,_0x4d92ee,_0x32814f,_0x2389b4,_0x3f2756,_0xec926b){var _0x2e728f=_0x507395;return _0x290ef0[_0x2e728f(0x24d)](_0x1de347,_0x4d92ee,_0x32814f,_0x2389b4,_0x3f2756,_0xec926b);},'POeIQ':_0x290ef0[_0x507395(0x692)],'LgwAU':_0x290ef0[_0x507395(0x40f)],'iAECp':_0x290ef0[_0x507395(0x532)],'zBUOD':function(_0x9f517,_0x36a038,_0x327496,_0x243511){return _0x9f517(_0x36a038,_0x327496,_0x243511);},'aPvrn':function(_0x2dc6a3,_0xf185da,_0x40a615,_0x2d058c,_0x37ff97,_0x54867c){return _0x2dc6a3(_0xf185da,_0x40a615,_0x2d058c,_0x37ff97,_0x54867c);},'VwJgw':function(_0x5c56c6,_0x33207c){var _0x5f4b69=_0x507395;return _0x290ef0[_0x5f4b69(0x55b)](_0x5c56c6,_0x33207c);},'XGWeu':_0x507395(0x434)+_0x507395(0x72b)+_0x507395(0x346)+_0x507395(0x39f)+'ment\x20'+_0x507395(0x327)+_0x507395(0x35b)+_0x507395(0x498)+'us\x20ac'+'celer'+_0x507395(0x291)+'.','NizFl':_0x507395(0x628)+_0x507395(0x3cf)+_0x507395(0x283),'nsIMR':function(_0x11f543,_0x361bf8){return _0x290ef0['NMGSf'](_0x11f543,_0x361bf8);},'JlZaN':'Gravi'+'ty\x20%','EEWax':_0x507395(0x787)+'-hop','eYGgy':_0x290ef0['rUfuo'],'mnbYS':function(_0x18f1d5,_0x1953d1,_0x1c8edc,_0x2e1ef5,_0x2fa8cf,_0x5685af){var _0x3720a9=_0x507395;return _0x290ef0[_0x3720a9(0x24d)](_0x18f1d5,_0x1953d1,_0x1c8edc,_0x2e1ef5,_0x2fa8cf,_0x5685af);},'TMUUV':_0x507395(0x2f5)+_0x507395(0x7d0)+_0x507395(0x501)+_0x507395(0x332)+_0x507395(0x5f7)+_0x507395(0x5e3)+'.','XlkNS':_0x290ef0['uqfZi'],'LhTbA':function(_0x325364,_0x390ed8,_0x453bb,_0x49551c){return _0x325364(_0x390ed8,_0x453bb,_0x49551c);},'Cdcej':'Size','MgUtc':function(_0x101601,_0x290d80,_0x5a9f76){return _0x101601(_0x290d80,_0x5a9f76);},'Iomxk':function(_0x1ca553,_0x122612,_0x11d8f6,_0x405f5c){var _0x2d46a2=_0x507395;return _0x290ef0[_0x2d46a2(0x5cd)](_0x1ca553,_0x122612,_0x11d8f6,_0x405f5c);},'FwhHz':_0x507395(0x3fe)+_0x507395(0x489)+'r','RDmTz':_0x507395(0x7ce)+'emy\x20c'+_0x507395(0x489)+'r:\x20th'+_0x507395(0x5a0)+_0x507395(0x2c2)+_0x507395(0x46a)+_0x507395(0x2e2)+'isibl'+_0x507395(0x3f4)+'ers\x20t'+_0x507395(0x6a8)+_0x507395(0x235)+_0x507395(0x314),'okheb':function(_0x30ad41,_0x3bcf8b){var _0x1a6f22=_0x507395;return _0x290ef0[_0x1a6f22(0x285)](_0x30ad41,_0x3bcf8b);},'WMoEM':'Takes'+_0x507395(0x78c)+'ct\x20on'+_0x507395(0x575)+'ad\x20wh'+_0x507395(0x78f)+_0x507395(0x5ce)+'.','HuvvB':_0x507395(0x5ed)+'Mode\x20'+_0x507395(0x1f4)+'lay\x20o'+_0x507395(0x356),'MzdSi':function(_0x560df0,_0x3a33b4,_0x5c9d9d,_0x4167a2,_0x204fd3,_0x662eb4){return _0x560df0(_0x3a33b4,_0x5c9d9d,_0x4167a2,_0x204fd3,_0x662eb4);},'KdpjD':function(_0x86b275,_0x2998b6,_0x3e7358){return _0x86b275(_0x2998b6,_0x3e7358);},'DcBLG':_0x290ef0[_0x507395(0x560)],'UKxxn':function(_0x272d39,_0x1399e0,_0x53099c,_0x35f1fe){return _0x272d39(_0x1399e0,_0x53099c,_0x35f1fe);},'fOuYy':'God/d'+'amage'+'/rapi'+_0x507395(0x5cf)+'atly\x20'+_0x507395(0x3e5)+'\x20ban\x20'+'risk\x20'+'even\x20'+'with\x20'+'this\x20'+'on.','djoPu':function(_0x541d1d,_0x35d0df,_0x4eb774,_0x44f744,_0x49ccec,_0x183373){return _0x541d1d(_0x35d0df,_0x4eb774,_0x44f744,_0x49ccec,_0x183373);},'nlxVv':_0x290ef0[_0x507395(0x58e)],'YXPcy':function(_0x417b87,_0x14be4d){return _0x417b87+_0x14be4d;},'aWXlP':_0x290ef0['jVQKo'],'hdcia':function(_0x238f2a){var _0x27fd40=_0x507395;return _0x290ef0[_0x27fd40(0x3c9)](_0x238f2a);},'aBJZO':'activ'+'e','drUqy':function(_0x2f832c,_0x35317f){var _0x5105a2=_0x507395;return _0x290ef0[_0x5105a2(0x508)](_0x2f832c,_0x35317f);}};_0x177e8d['adblo'+'ck']&&(_0x290ef0[_0x507395(0x678)]('foEIM',_0x290ef0[_0x507395(0x6b7)])?(_0x6214bd[_0x507395(0x669)+'le']=_0x2688cf,_0xc4f2()):setInterval(()=>{var _0xd34548=_0x507395;try{for(var _0x72991 of[_0xd34548(0x793)+_0xd34548(0x52c)+'0x250'+_0xd34548(0x696)+'nt',_0x2e9f12[_0xd34548(0x36b)],_0x2e9f12[_0xd34548(0x573)],'fulls'+'creen'+_0xd34548(0x79b)+'s']){var _0x5c51e5=document['getEl'+_0xd34548(0x20b)+_0xd34548(0x4e9)](_0x72991);if(_0x5c51e5&&_0x72991===_0x2e9f12[_0xd34548(0x504)]){if(_0x2e9f12[_0xd34548(0x355)](_0xd34548(0x368),_0x2e9f12[_0xd34548(0x344)]))_0x54e2d4[_0xd34548(0x651)+_0xd34548(0x277)]=_0x2d9dc6,_0x32b752();else{var _0x23f57e=_0x5c51e5['child'+'ren'];for(var _0x3d430f=0x13d7*-0x1+0x1835+-0x45e;_0x2e9f12[_0xd34548(0x777)](_0x3d430f,_0x23f57e['lengt'+'h']);_0x3d430f++){if(_0x23f57e[_0x3d430f]['id']&&_0x23f57e[_0x3d430f]['id']['index'+'Of'](_0x2e9f12['uAzSe'])===0x78e*0x4+0x24a2+-0x42da)_0x23f57e[_0x3d430f][_0xd34548(0x459)]['displ'+'ay']='none';}}}else{if(_0x5c51e5)_0x5c51e5['style']['displ'+'ay']=_0x2e9f12[_0xd34548(0x4e0)];}}}catch(_0x138755){}},-0x221*0x1+-0x28f*-0x9+-0xd16));var _0x319569=document['creat'+'eElem'+_0x507395(0x5f3)](_0x507395(0x20d)+'s');_0x319569['style']['cssTe'+'xt']=_0x290ef0[_0x507395(0x456)];var _0x3bedce=_0x319569[_0x507395(0x237)+'ntext']('2d');function _0x3dbeba(){var _0x1d8196=_0x507395;try{if(_0x290ef0[_0x1d8196(0x2bd)]!==_0x1d8196(0x748)){var _0x211439=document['fulls'+_0x1d8196(0x36a)+'Eleme'+'nt'],_0x24ff45=_0x211439&&_0x211439[_0x1d8196(0x675)+'me']!==_0x290ef0[_0x1d8196(0x6bd)]?_0x211439:document[_0x1d8196(0x521)]||document['docum'+_0x1d8196(0x4f1)+_0x1d8196(0x20b)];if(_0x319569['paren'+'tNode']!==_0x24ff45)_0x24ff45['appen'+'dChil'+'d'](_0x319569);}else _0x55720d[_0x1d8196(0x41e)+'tyPct']=_0x28799e,_0x160406();}catch(_0xf704fd){try{document[_0x1d8196(0x521)][_0x1d8196(0x7b5)+_0x1d8196(0x622)+'d'](_0x319569);}catch(_0x1888f9){}}}var _0x4f58ce={'w':0x0,'h':0x0,'dpr':0x0};function _0x4c1b47(){var _0x37acd3=_0x507395,_0x522d07=window['devic'+_0x37acd3(0x389)+_0x37acd3(0x555)+'o']||0x4*0x287+-0x12f0+0x8d5,_0x199db0=window[_0x37acd3(0x4cc)+_0x37acd3(0x445)],_0x420db0=window[_0x37acd3(0x4cc)+'Heigh'+'t'];if(_0x2e9f12[_0x37acd3(0x355)](_0x199db0,_0x4f58ce['w'])&&_0x2e9f12['oJOvC'](_0x420db0,_0x4f58ce['h'])&&_0x2e9f12[_0x37acd3(0x355)](_0x522d07,_0x4f58ce['dpr']))return;_0x4f58ce['w']=_0x199db0,_0x4f58ce['h']=_0x420db0,_0x4f58ce[_0x37acd3(0x330)]=_0x522d07,_0x319569[_0x37acd3(0x302)]=Math[_0x37acd3(0x7af)](_0x199db0*_0x522d07),_0x319569['heigh'+'t']=Math['round'](_0x420db0*_0x522d07),_0x3bedce['setTr'+'ansfo'+'rm'](_0x522d07,-0xe75+-0x1ae5+-0x86*-0x4f,0x26b6+0xd*-0xf2+-0x1a6c,_0x522d07,-0x6c8+-0xab6+0x117e,-0xd3e+0xce*0x1e+-0xae6*0x1);}var _0xf3c16c=0xc5f+-0x7ae+-0x4b1,_0x21245f=performance['now'](),_0x237552=-0x37*0xe+0x1*0x7+0x2fb*0x1;function _0x35bd23(_0x9194d2){var _0x58e423=_0x507395,_0x125cdb={'xWxEA':_0x58e423(0x351)+'wn','KjdOS':function(_0x250e84,_0x776c01){return _0x250e84+_0x776c01;},'AGBOS':function(_0x8e373a,_0x3c1588){var _0x39f7c5=_0x58e423;return _0x2e9f12[_0x39f7c5(0x3af)](_0x8e373a,_0x3c1588);},'GmABm':function(_0x4ce97a,_0x2a5de8){var _0x169ecf=_0x58e423;return _0x2e9f12[_0x169ecf(0x52d)](_0x4ce97a,_0x2a5de8);},'bjrQz':_0x2e9f12[_0x58e423(0x6e9)],'ljBEy':'EmvVh','TdsJc':function(_0x2038b3,_0x55c20e){return _0x2038b3*_0x55c20e;},'gTOsb':_0x58e423(0x62b)+'255,1'+_0x58e423(0x54f)+_0x58e423(0x68f)+'5)','OLahf':_0x2e9f12[_0x58e423(0x56c)],'nAvpV':_0x2e9f12['nviCW'],'nbWaY':_0x58e423(0x7d4),'SFHrB':function(_0x25081c,_0x5ef528){return _0x2e9f12['XCtgY'](_0x25081c,_0x5ef528);},'YyyjV':_0x2e9f12[_0x58e423(0x247)],'kGfIw':function(_0x1d8f01,_0x10e396){return _0x2e9f12['ykAyH'](_0x1d8f01,_0x10e396);},'RXGFl':function(_0x2ec020,_0x214243){return _0x2ec020/_0x214243;},'gWWQQ':function(_0x3622a0,_0x117309){var _0x24bee3=_0x58e423;return _0x2e9f12[_0x24bee3(0x7a5)](_0x3622a0,_0x117309);},'FSPXl':'rgba('+_0x58e423(0x432)+_0x58e423(0x6e0)+_0x58e423(0x3a2)+'5)','TCXIb':function(_0x37ad0e,_0x266095){return _0x37ad0e/_0x266095;}};if(_0x58e423(0x63f)!==_0x58e423(0x63f))_0x476448['addEv'+_0x58e423(0x53b)+'stene'+'r'](_0x58e423(0x4bb),_0x138a5e=>{var _0x2354dc=_0x58e423;try{var _0x17add5=_0x138a5e&&(_0x138a5e['messa'+'ge']||_0x138a5e['error']&&_0x138a5e[_0x2354dc(0x4bb)][_0x2354dc(0x203)+'ge'])||_0x125cdb['xWxEA'];if(_0x138a5e&&_0x138a5e['filen'+_0x2354dc(0x70a)])_0x17add5+=_0x125cdb['KjdOS'](_0x2354dc(0x66d)+_0x125cdb[_0x2354dc(0x6fa)](_0x5650bc,_0x138a5e['filen'+_0x2354dc(0x70a)])[_0x2354dc(0x4af)]('/')[_0x2354dc(0x3f2)](),':')+(_0x138a5e[_0x2354dc(0x26c)+'o']||'?');_0x49027d['lastE'+'rror']=_0x125cdb['GmABm'](_0x5c011d,_0x17add5)['slice'](-0x136f+-0x87c+-0x3fd*-0x7,-0x371*0x4+0x152*-0x11+0x24d6);}catch(_0x17e869){}});else{var _0x1c82f9=Number(_0x177e8d[_0x58e423(0x669)+'le'])||-0x38f*0x8+0x18d7+0x3a2*0x1,_0x3d9884=_0x2e9f12[_0x58e423(0x7a5)](0x107+-0xa64+-0x97f*-0x1,_0x1c82f9),_0x96a735=_0x2e9f12['rLgFL'](-0x515*0x7+0x19ce+0x9c9,_0x1c82f9),_0xe76926=_0x2e9f12['xrvgm'](_0x3d9884,-0x11ff+-0xa65*-0x1+0x79d)+_0x2e9f12[_0x58e423(0x369)](_0x96a735,0x1f0c+-0xa30+-0x14da),_0x208cc7=_0x2e9f12['kcQVg'](_0x2e9f12[_0x58e423(0x601)](_0x3d9884,-0x13c2+0x1416+-0x51),_0x2e9f12[_0x58e423(0x601)](_0x96a735,0x787*0x4+0x9*-0x7b+-0x19c7*0x1)),_0x3e4fb6=_0x177e8d['ksPos'],_0x2a66c8=_0x2e9f12['UokJD'](_0x3e4fb6,'br')?_0x9194d2[_0x58e423(0x476)]-(-0x2*-0x134c+0x1da0+0xc*-0x5ae)-_0xe76926:_0x2e9f12['kcQVg'](_0x9194d2['left'],0x1*-0x1f1f+-0x1272+0x31a1),_0x124f36=_0x2e9f12['IoEDQ'](_0x3e4fb6,'ml')?_0x2e9f12[_0x58e423(0x643)](_0x9194d2[_0x58e423(0x4a7)]+_0x2e9f12['AxVoq'](_0x9194d2['heigh'+'t'],-0x175*-0x4+0x15+-0x5e7),_0x208cc7/(0x1306+0x2672+-0x3976)):_0x9194d2[_0x58e423(0x2a7)+'m']-_0x208cc7-(_0x3e4fb6==='bl'?-0x10f8+0x1*-0x1271+0x23c9:-0x1e2+0x1*0x91d+0x9*-0xbd),_0x562a27=(_0x202e1c,_0x49b9ac,_0x26ce65,_0x4b4172,_0xc74722,_0x16d877,_0x3118f9)=>{var _0x363e86=_0x58e423,_0x186cea={'ywOdf':_0x125cdb[_0x363e86(0x646)],'PxQTg':'mouse'+'up','qUlsI':_0x363e86(0x233)+'down','EgqQX':_0x363e86(0x2c0),'qtvBc':_0x363e86(0x5f1)+'wn'};if(_0x125cdb[_0x363e86(0x591)]!==_0x125cdb[_0x363e86(0x591)]){var _0x10c635=_0x186cea['ywOdf'][_0x363e86(0x4af)]('|'),_0x48c691=-0xb3b+-0x19be+-0x24f9*-0x1;while(!![]){switch(_0x10c635[_0x48c691++]){case'0':if(_0x5100a3)return;continue;case'1':_0x155f07['addEv'+_0x363e86(0x53b)+_0x363e86(0x4cd)+'r'](_0x186cea[_0x363e86(0x74b)],_0x3a9a7f,!![]);continue;case'2':_0x359adc[_0x363e86(0x359)+_0x363e86(0x53b)+'stene'+'r'](_0x186cea['qUlsI'],_0xb8b6ae,!![]);continue;case'3':_0x57a014['addEv'+_0x363e86(0x53b)+'stene'+'r'](_0x363e86(0x4a0),_0x425969);continue;case'4':_0x2ff118[_0x363e86(0x359)+_0x363e86(0x53b)+'stene'+'r'](_0x186cea[_0x363e86(0x28f)],_0x36968a,!![]);continue;case'5':_0x3b5f1c[_0x363e86(0x359)+_0x363e86(0x53b)+'stene'+'r'](_0x186cea['qtvBc'],_0x36623f,!![]);continue;case'6':_0x389ee7=!![];continue;}break;}}else{var _0x156b21=_0x19e086[_0x363e86(0x47c)](_0x49b9ac);_0x3bedce[_0x363e86(0x3d6)](),_0x3bedce['begin'+_0x363e86(0x32f)]();if(_0x3bedce['round'+_0x363e86(0x43b)])_0x3bedce[_0x363e86(0x7af)+'Rect'](_0x26ce65,_0x4b4172,_0xc74722,_0x16d877,_0x125cdb[_0x363e86(0x2fc)](0x18d*0x12+0x1a22+0x1*-0x3605,_0x1c82f9));else _0x3bedce['rect'](_0x26ce65,_0x4b4172,_0xc74722,_0x16d877);_0x3bedce[_0x363e86(0x34d)+'tyle']=_0x156b21?_0x363e86(0x62b)+_0x363e86(0x240)+_0x363e86(0x54f)+_0x363e86(0x510)+'5)':_0x363e86(0x62b)+'22,8,'+'16,0.'+'7)',_0x3bedce[_0x363e86(0x738)](),_0x3bedce['lineW'+'idth']=-0xb47*-0x3+0xa3*-0x18+-0x128c,_0x3bedce['strok'+'eStyl'+'e']=_0x156b21?_0x15c0b0:_0x125cdb['gTOsb'],_0x3bedce[_0x363e86(0x35f)+'e'](),_0x156b21&&(_0x3bedce[_0x363e86(0x274)+'wColo'+'r']=_0x3267f6,_0x3bedce[_0x363e86(0x274)+_0x363e86(0x1f3)]=-0x1dee+-0x1311+-0x310d*-0x1,_0x3bedce['fill'](),_0x3bedce[_0x363e86(0x274)+_0x363e86(0x1f3)]=0x1835+0x135b*0x1+-0x2b90),_0x3bedce['fillS'+_0x363e86(0x5a9)]=_0x156b21?_0x363e86(0x2dd):_0x125cdb[_0x363e86(0x752)],_0x3bedce[_0x363e86(0x376)+_0x363e86(0x4fd)]=_0x125cdb[_0x363e86(0x64f)],_0x3bedce[_0x363e86(0x33a)+_0x363e86(0x7c1)+'ne']=_0x363e86(0x608)+'e',_0x3bedce[_0x363e86(0x7a7)]=_0x125cdb['nbWaY']+Math['round'](_0x125cdb[_0x363e86(0x347)](0x14b*-0x16+0x1256+0xa28,_0x1c82f9))+_0x125cdb['YyyjV'],_0x3bedce[_0x363e86(0x3ea)+_0x363e86(0x2f0)](_0x202e1c,_0x125cdb[_0x363e86(0x6d2)](_0x26ce65,_0x125cdb['kGfIw'](_0xc74722,-0x1*-0x99a+0x113*-0x11+0x8ab)),_0x4b4172+_0x125cdb[_0x363e86(0x5ee)](_0x16d877,-0x3c*0xf+-0x1774+0x1afa)-(_0x3118f9?(0x2*-0x871+0xc3e*-0x2+0x2963)*_0x1c82f9:-0x1*0x1cf9+0x2338+-0x63f)),_0x3118f9&&(_0x3bedce[_0x363e86(0x7a7)]=_0x125cdb[_0x363e86(0x6d2)](_0x363e86(0x602)+Math['round'](_0x125cdb['gWWQQ'](0xd2f+0x1aeb+-0x2811,_0x1c82f9)),_0x363e86(0x28b)+_0x363e86(0x2f1)+_0x363e86(0x754)+_0x363e86(0x2fb)+'tem-u'+'i,san'+_0x363e86(0x5c7)+'if'),_0x3bedce[_0x363e86(0x34d)+'tyle']=_0x156b21?'#fff':_0x125cdb[_0x363e86(0x37e)],_0x3bedce[_0x363e86(0x3ea)+_0x363e86(0x2f0)](_0x3118f9,_0x26ce65+_0xc74722/(-0x11c3*0x1+0x1bc4+-0x1*0x9ff),_0x4b4172+_0x125cdb['TCXIb'](_0x16d877,0x1*-0xc3d+0x23cb+-0x178c)+(0x1a3e+0xb62+0x2*-0x12cc)*_0x1c82f9)),_0x3bedce['resto'+'re']();}};_0x562a27('W',_0x58e423(0x21f),_0x2e9f12[_0x58e423(0x652)](_0x2a66c8+_0x3d9884,_0x96a735),_0x124f36,_0x3d9884,_0x3d9884),_0x562a27('A','KeyA',_0x2a66c8,_0x2e9f12['KjyzC'](_0x124f36,_0x3d9884)+_0x96a735,_0x3d9884,_0x3d9884),_0x562a27('S',_0x58e423(0x213),_0x2e9f12[_0x58e423(0x614)](_0x2a66c8,_0x3d9884)+_0x96a735,_0x124f36+_0x3d9884+_0x96a735,_0x3d9884,_0x3d9884),_0x562a27('D','KeyD',_0x2a66c8+(_0x3d9884+_0x96a735)*(0x26f3+0x14ad+-0x1*0x3b9e),_0x2e9f12[_0x58e423(0x5c3)](_0x2e9f12[_0x58e423(0x749)](_0x124f36,_0x3d9884),_0x96a735),_0x3d9884,_0x3d9884);var _0x9aaf3c=(_0xe76926-_0x96a735)/(0x1*0xce2+0x1*0x261f+0x749*-0x7),_0x67605d=_0x2e9f12[_0x58e423(0x652)](_0x124f36,_0x2e9f12[_0x58e423(0x369)](_0x3d9884+_0x96a735,0xe87*-0x1+-0x13*-0x89+0x45e));_0x562a27('LMB',_0x2e9f12[_0x58e423(0x737)],_0x2a66c8,_0x67605d,_0x9aaf3c,_0x3d9884,_0x177e8d[_0x58e423(0x2e9)]?_0x2e9f12[_0x58e423(0x52d)](_0xbc642c,0x4*-0xec+-0x1f*-0x98+-0xeb7)+_0x58e423(0x785):''),_0x562a27(_0x2e9f12[_0x58e423(0x5c9)],_0x2e9f12['nFMPP'],_0x2a66c8+_0x9aaf3c+_0x96a735,_0x67605d,_0x9aaf3c,_0x3d9884,_0x177e8d['ksCps']?_0x2e9f12['vtYno'](_0xbc642c(-0xff3+0x2304+0x65a*-0x3),_0x2e9f12[_0x58e423(0x3ca)]):''),_0x562a27('',_0x58e423(0x662),_0x2a66c8,_0x67605d+_0x3d9884+_0x96a735,_0xe76926,_0x3d9884*(0x2*-0x1139+0x9fc+0x1876*0x1+0.45));}}function _0x5f1d61(_0x10bb82){var _0x60d9c4=_0x507395,_0x3af0f8=_0x2e9f12[_0x60d9c4(0x6a5)](_0x10bb82['width'],0x223*-0xf+-0x1*0x1303+0x3312),_0x9e0e95=_0x10bb82[_0x60d9c4(0x7cb)+'t']/(-0x1*-0x20ae+-0x556+-0x1b56),_0x1441b5=Number(_0x177e8d[_0x60d9c4(0x325)+'e'])||0x2504+0x1189+-0x368c,_0x51457c=/^#[0-9a-f]{6}$/i[_0x60d9c4(0x4a1)](_0x177e8d[_0x60d9c4(0x6ca)+'or'])?_0x177e8d[_0x60d9c4(0x6ca)+'or']:_0x2e9f12[_0x60d9c4(0x6bc)];_0x3bedce['save'](),_0x3bedce['strok'+'eStyl'+'e']=_0x51457c,_0x3bedce['fillS'+_0x60d9c4(0x5a9)]=_0x51457c,_0x3bedce[_0x60d9c4(0x781)+'idth']=Math[_0x60d9c4(0x762)](-0x15c+0xbb+-0x36*-0x3+0.5,(0x819+0x12f2+-0x1b09)*_0x1441b5),_0x3bedce[_0x60d9c4(0x274)+_0x60d9c4(0x309)+'r']=_0x51457c,_0x3bedce[_0x60d9c4(0x274)+_0x60d9c4(0x1f3)]=0x6be*-0x4+-0x1935+0x3433;var _0x143175=(-0x751+0xe4b+0x164*-0x5)*_0x1441b5,_0x218046=(-0x1c6*-0xe+-0x1*0xe2c+-0xaa0)*_0x1441b5;_0x3bedce[_0x60d9c4(0x47e)+'Path'](),_0x3bedce[_0x60d9c4(0x6d9)+'o'](_0x2e9f12['Iahek'](_0x3af0f8-_0x143175,_0x218046),_0x9e0e95),_0x3bedce['lineT'+'o'](_0x3af0f8-_0x143175,_0x9e0e95),_0x3bedce[_0x60d9c4(0x6d9)+'o'](_0x3af0f8+_0x143175,_0x9e0e95),_0x3bedce[_0x60d9c4(0x379)+'o'](_0x3af0f8+_0x143175+_0x218046,_0x9e0e95),_0x3bedce[_0x60d9c4(0x6d9)+'o'](_0x3af0f8,_0x2e9f12['Iahek'](_0x9e0e95,_0x143175)-_0x218046),_0x3bedce[_0x60d9c4(0x379)+'o'](_0x3af0f8,_0x9e0e95-_0x143175),_0x3bedce[_0x60d9c4(0x6d9)+'o'](_0x3af0f8,_0x2e9f12[_0x60d9c4(0x4fb)](_0x9e0e95,_0x143175)),_0x3bedce['lineT'+'o'](_0x3af0f8,_0x9e0e95+_0x143175+_0x218046),_0x3bedce[_0x60d9c4(0x35f)+'e'](),_0x3bedce[_0x60d9c4(0x47e)+'Path'](),_0x3bedce['arc'](_0x3af0f8,_0x9e0e95,_0x2e9f12['OJsaG'](-0xc93*0x2+-0x2027*-0x1+-0x8*0xe0+0.6000000000000001,_0x1441b5),-0x76f+-0x5f8+0xd67,_0x2e9f12['XCtgY'](Math['PI'],-0x1*0xe4b+-0x8*0xb9+-0x61*-0x35)),_0x3bedce[_0x60d9c4(0x738)](),_0x3bedce['resto'+'re']();}function _0x4c11c8(_0x407b29){var _0x2bd124=_0x507395,_0x1be3e6={'MJOyM':function(_0x24faaf,_0xdcb5c3){var _0x421a8f=_0x2878;return _0x2e9f12[_0x421a8f(0x34f)](_0x24faaf,_0xdcb5c3);},'BORSc':_0x2bd124(0x62b)+_0x2bd124(0x432)+_0x2bd124(0x6e0)+'0,0.7'+'5)'};_0x3bedce['save'](),_0x3bedce[_0x2bd124(0x7a7)]=_0x2bd124(0x46f)+_0x2bd124(0x1f8)+'i-mon'+_0x2bd124(0x360)+_0x2bd124(0x5d3)+_0x2bd124(0x360)+'e',_0x3bedce[_0x2bd124(0x376)+_0x2bd124(0x4fd)]='left',_0x3bedce['textB'+'aseli'+'ne']=_0x2e9f12['EojHj'];var _0x24046a=-0xbca+-0x12d*0xd+0x1b3f,_0x4849f2=0x4*0x40+0x2081*-0x1+0x1f8d,_0x2e2762=(_0x1404e2,_0x5630d3)=>{var _0x1bc60c=_0x2bd124;_0x3bedce[_0x1bc60c(0x34d)+'tyle']=_0x1be3e6[_0x1bc60c(0x1f9)](_0x5630d3,_0x1be3e6[_0x1bc60c(0x2c3)]),_0x3bedce[_0x1bc60c(0x3ea)+'ext'](_0x1404e2,_0x4849f2,_0x24046a),_0x24046a+=0x3*-0x475+-0x1*0x79f+0x150e;};_0x2e9f12[_0x2bd124(0x298)](_0x2e2762,'SAKUR'+_0x2bd124(0x46d)+_0x2bd124(0x227)+'1',_0x2e9f12[_0x2bd124(0x6bc)]);if(_0x177e8d['fps'])_0x2e9f12[_0x2bd124(0x3af)](_0x2e2762,_0x237552+_0x2e9f12[_0x2bd124(0x337)]);if(!_0x591997[_0x2bd124(0x3e2)+'oaded'])_0x2e2762('waiti'+_0x2bd124(0x673)+'r\x20gam'+'e…',_0x2e9f12['iLAii']);_0x3bedce['resto'+'re']();}function _0x42b5a8(){var _0x12be6e=_0x507395;_0x290ef0['qsWsT'](requestAnimationFrame,_0x42b5a8),_0xf3c16c++;var _0x545cd1=performance[_0x12be6e(0x4a3)]();_0x290ef0[_0x12be6e(0x574)](_0x545cd1-_0x21245f,-0xa*0x33d+0x147*0xe+0x1074)&&('GDFuU'==='iHYsM'?new _0x264fc0(_0x4ab037)[_0x12be6e(0x202)+'Field'](_0x270bb0,_0x10378d,_0x1bafa1):(_0x237552=Math[_0x12be6e(0x7af)](_0x290ef0['SCVrS'](_0xf3c16c*(0x277*0x1+-0x1c33+0x21e*0xe),_0x290ef0[_0x12be6e(0x49a)](_0x545cd1,_0x21245f))),_0xf3c16c=0x429+0x78b*0x1+-0xbb4,_0x21245f=_0x545cd1));_0x4c1b47(),_0x3dbeba(),_0x3bedce[_0x12be6e(0x4be)+_0x12be6e(0x43b)](-0x1a48+0x1*-0x1d71+-0x1293*-0x3,-0x39d*0x4+-0x18ab+0x271f,_0x4f58ce['w'],_0x4f58ce['h']);var _0x59b51a={'left':0x0,'top':0x0,'right':_0x4f58ce['w'],'bottom':_0x4f58ce['h'],'width':_0x4f58ce['w'],'height':_0x4f58ce['h']};if(_0x177e8d['cross'+'hair'])_0x5f1d61(_0x59b51a);if(_0x177e8d[_0x12be6e(0x43e)+'rokes'])_0x35bd23(_0x59b51a);_0x4c11c8(_0x59b51a);}var _0x562436=document['creat'+'eElem'+_0x507395(0x5f3)](_0x290ef0['jxtnO']);_0x562436['id']=_0x507395(0x34c)+'a-ui',_0x562436['style'][_0x507395(0x681)+'xt']=_0x290ef0[_0x507395(0x5da)];var _0x12f6fb=_0x562436['attac'+_0x507395(0x7c3)+'ow']({'mode':'open'});(document[_0x507395(0x521)]||document['docum'+_0x507395(0x4f1)+_0x507395(0x20b)])[_0x507395(0x7b5)+_0x507395(0x622)+'d'](_0x562436);var _0x20b355=![],_0x1d19c0={};try{_0x1d19c0=JSON[_0x507395(0x29e)](localStorage['getIt'+'em'](_0x290ef0[_0x507395(0x7d3)])||'{}');}catch(_0x379d68){}function _0x39cb94(){var _0x57d5b1=_0x507395;try{localStorage[_0x57d5b1(0x64d)+'em']('sakur'+_0x57d5b1(0x5d4)+_0x57d5b1(0x1fe)+'v1',JSON[_0x57d5b1(0x516)+'gify'](_0x1d19c0));}catch(_0x35af4f){}}function _0x44677b(_0x40e00,_0x527e64){var _0x1ac974=_0x507395,_0x223ba3={'PLyzo':_0x1ac974(0x2af)+_0x1ac974(0x744)+'ed'},_0x220fbc=document['creat'+'eElem'+'ent']('butto'+'n');return _0x220fbc['type']=_0x1ac974(0x2a2)+'n',_0x220fbc[_0x1ac974(0x577)+_0x1ac974(0x686)]=_0x1ac974(0x6a0)+_0x1ac974(0x6dc),_0x220fbc[_0x1ac974(0x5d9)+'tribu'+'te'](_0x2e9f12['flpkv'],_0x2e9f12['ApfSA']),_0x220fbc[_0x1ac974(0x5d9)+_0x1ac974(0x33d)+'te'](_0x2e9f12[_0x1ac974(0x6d3)],_0x2e9f12[_0x1ac974(0x3af)](String,!!_0x40e00)),_0x220fbc['oncli'+'ck']=_0x584380=>{var _0x3d77de=_0x1ac974;_0x584380[_0x3d77de(0x517)+_0x3d77de(0x4ef)+_0x3d77de(0x291)]();var _0x2aad32=_0x220fbc['getAt'+'tribu'+'te'](_0x223ba3['PLyzo'])!=='true';_0x220fbc[_0x3d77de(0x5d9)+'tribu'+'te']('aria-'+_0x3d77de(0x744)+'ed',String(_0x2aad32)),_0x527e64(_0x2aad32);},_0x220fbc;}function _0x50356a(_0x1313c5,_0x4e1216,_0x1f56de,_0x7317f8,_0x82cd1e){var _0x328c30=_0x507395,_0x1c641c=(_0x328c30(0x4a8)+_0x328c30(0x2cb)+'|1|12'+_0x328c30(0x30f)+_0x328c30(0x422)+_0x328c30(0x2f9)+'|4|8|'+_0x328c30(0x21b)+'0|2')[_0x328c30(0x4af)]('|'),_0x57dbf3=-0x95+0x18f+-0xfa;while(!![]){switch(_0x1c641c[_0x57dbf3++]){case'0':_0x5f441d[_0x328c30(0x7b5)+'d'](_0x5b9a74,_0x3101b0);continue;case'1':_0x5b9a74['type']='range';continue;case'2':return _0x5f441d;case'3':var _0x5b9a74=document['creat'+_0x328c30(0x2cc)+_0x328c30(0x5f3)]('input');continue;case'4':_0x3101b0[_0x328c30(0x2c9)+'onten'+'t']=_0x2e9f12['YwDMU'](String,_0x1313c5);continue;case'5':_0x5b9a74[_0x328c30(0x762)]=_0x1f56de;continue;case'6':_0x5b9a74[_0x328c30(0x6b9)]=_0x1313c5;continue;case'7':var _0x3101b0=document['creat'+_0x328c30(0x2cc)+_0x328c30(0x5f3)](_0x2e9f12[_0x328c30(0x3e3)]);continue;case'8':var _0x155ff3=()=>{var _0x5a576e=_0x328c30;_0x3101b0[_0x5a576e(0x2c9)+_0x5a576e(0x4e3)+'t']=String(_0x5b9a74[_0x5a576e(0x6b9)]),_0x5f441d[_0x5a576e(0x459)]['setPr'+'opert'+'y'](_0x5a576e(0x6fd),_0x2e9f12['OJsaG'](_0x2e9f12[_0x5a576e(0x643)](_0x5b9a74[_0x5a576e(0x6b9)],_0x4e1216)/(_0x1f56de-_0x4e1216),0x52d*0x7+-0x1f68+-0xe3*0x5)+'%');};continue;case'9':_0x155ff3();continue;case'10':_0x5b9a74['step']=_0x7317f8;continue;case'11':_0x5f441d[_0x328c30(0x577)+_0x328c30(0x686)]=_0x2e9f12[_0x328c30(0x778)];continue;case'12':_0x5b9a74['class'+'Name']=_0x2e9f12[_0x328c30(0x770)];continue;case'13':_0x5b9a74['oninp'+'ut']=()=>{var _0x3c083c=_0x328c30;_0x50ee70['jOZvl'](_0x155ff3),_0x82cd1e(Number(_0x5b9a74[_0x3c083c(0x6b9)]));};continue;case'14':var _0x50ee70={'jOZvl':function(_0x49e495){return _0x2e9f12['vCSOV'](_0x49e495);}};continue;case'15':_0x5b9a74['min']=_0x4e1216;continue;case'16':var _0x5f441d=document[_0x328c30(0x6bb)+_0x328c30(0x2cc)+'ent'](_0x328c30(0x333));continue;case'17':_0x3101b0[_0x328c30(0x577)+_0x328c30(0x686)]=_0x328c30(0x679)+'l';continue;}break;}}function _0x4b3441(_0x3d05c5,_0x3d6f50){var _0x171365=_0x507395,_0x45ac69=(_0x171365(0x5b9)+'|4|5|'+'2')['split']('|'),_0x20459d=0x248b+-0x259+0x1119*-0x2;while(!![]){switch(_0x45ac69[_0x20459d++]){case'0':_0x451df3['class'+'Name']='sk-co'+'lor';continue;case'1':_0x451df3[_0x171365(0x411)]=_0x171365(0x729);continue;case'2':return _0x451df3;case'3':var _0x451df3=document['creat'+'eElem'+_0x171365(0x5f3)](_0x171365(0x3fa));continue;case'4':_0x451df3[_0x171365(0x6b9)]=/^#[0-9a-f]{6}$/i['test'](_0x3d05c5)?_0x3d05c5:'#ff6b'+'9d';continue;case'5':_0x451df3[_0x171365(0x47a)+'ut']=()=>_0x3d6f50(_0x451df3['value']);continue;}break;}}function _0x11a320(_0x425649,_0x2921f7,_0x5f1eae){var _0xd24388=_0x507395,_0x3c1f2e=document[_0xd24388(0x6bb)+'eElem'+'ent'](_0x290ef0[_0xd24388(0x62d)]);_0x3c1f2e['class'+_0xd24388(0x686)]=_0xd24388(0x3bd)+_0xd24388(0x4e5);for(var [_0xf8772c,_0x96b21b]of _0x2921f7){var _0x25119f=document[_0xd24388(0x6bb)+_0xd24388(0x2cc)+_0xd24388(0x5f3)](_0xd24388(0x4a9)+'n');_0x25119f[_0xd24388(0x6b9)]=_0xf8772c,_0x25119f['textC'+_0xd24388(0x4e3)+'t']=_0x96b21b,_0x3c1f2e['appen'+_0xd24388(0x622)+'d'](_0x25119f);}return _0x3c1f2e[_0xd24388(0x6b9)]=_0x425649,_0x3c1f2e['oncha'+'nge']=()=>_0x5f1eae(_0x3c1f2e['value']),_0x3c1f2e;}function _0x593edc(_0x542841,_0x247ae7){var _0x33ee83=_0x507395,_0x82cb70={'JeyVE':function(_0x4d651e){var _0x5dbd56=_0x2878;return _0x290ef0[_0x5dbd56(0x3c9)](_0x4d651e);}};if('poAAS'===_0x33ee83(0x22c)){var _0x17459f=document[_0x33ee83(0x6bb)+_0x33ee83(0x2cc)+_0x33ee83(0x5f3)](_0x33ee83(0x2a2)+'n');return _0x17459f[_0x33ee83(0x411)]=_0x290ef0[_0x33ee83(0x30c)],_0x17459f[_0x33ee83(0x577)+'Name']=_0x33ee83(0x5ea)+'n',_0x17459f[_0x33ee83(0x2c9)+_0x33ee83(0x4e3)+'t']=_0x542841,_0x17459f[_0x33ee83(0x317)+'ck']=_0x46b09e=>{var _0x2fe5d7=_0x33ee83;_0x46b09e[_0x2fe5d7(0x517)+'ropag'+_0x2fe5d7(0x291)](),_0x82cb70['JeyVE'](_0x247ae7);},_0x17459f;}else _0x2fd3ac[_0x33ee83(0x697)](_0x2c6b49['code']);}function _0x6a243e(_0x1956aa,_0x66c1fe,_0x3ddfc1){var _0x51a058=_0x507395,_0x49c95f=document['creat'+'eElem'+'ent'](_0x51a058(0x333));_0x49c95f[_0x51a058(0x577)+_0x51a058(0x686)]=_0x2e9f12['nAMRo'];var _0x990d8a=document[_0x51a058(0x6bb)+_0x51a058(0x2cc)+_0x51a058(0x5f3)](_0x51a058(0x2b5));_0x990d8a[_0x51a058(0x577)+'Name']=_0x2e9f12[_0x51a058(0x386)],_0x990d8a['textC'+_0x51a058(0x4e3)+'t']=_0x1956aa;if(_0x66c1fe){if(_0x2e9f12[_0x51a058(0x50b)](_0x2e9f12['AMGUR'],_0x2e9f12['AMGUR']))_0x267299[_0x51a058(0x2c9)+_0x51a058(0x4e3)+'t']=_0x1ef57e['safeM'+'ode']?_0x51a058(0x507)+_0x51a058(0x447)+_0x51a058(0x742)+'rlay\x20'+'only,'+_0x51a058(0x5c5)+'ooks\x20'+'(relo'+_0x51a058(0x51d)+_0x51a058(0x666)+')':_0x261339[_0x51a058(0x236)]?_0x2e9f12['UGblk']('UWMK\x20'+'bound'+'\x20'+(_0x446e96[_0x51a058(0x568)+'Total']?_0x2e9f12[_0x51a058(0x671)](_0x2f613b[_0x51a058(0x568)+'Ok'],'/')+_0x4a395c[_0x51a058(0x568)+_0x51a058(0x3e6)]+('\x20hook'+'s'):_0x2e9f12[_0x51a058(0x78a)])+('\x20|\x20ga'+_0x51a058(0x41b))+(_0x5d6a03['gameL'+_0x51a058(0x5f9)]?'loade'+'d':'loadi'+'ng')+_0x2e9f12[_0x51a058(0x586)]+(_0x414dd1[_0x51a058(0x60a)+'ers']?_0x51a058(0x4c4):_0x51a058(0x5f4))+(_0x51a058(0x1eb)+_0x51a058(0x2c1)+'t\x20'),_0x5150b7['movem'+'ents']?_0x51a058(0x4c4):_0x2e9f12['xdJcb'])+(_0x517e12[_0x51a058(0x301)+_0x51a058(0x786)]?_0x2e9f12[_0x51a058(0x4ff)]('\x20|\x20ER'+_0x51a058(0x366),_0x291c0d[_0x51a058(0x301)+'rror']):''):_0x51a058(0x6d8)+_0x51a058(0x2b8)+_0x51a058(0x446)+'overl'+'ay\x20on'+'ly\x20(r'+'einst'+_0x51a058(0x3c4)+'he\x20us'+_0x51a058(0x757)+_0x51a058(0x287);else{var _0x2d101d=document[_0x51a058(0x6bb)+'eElem'+'ent'](_0x2e9f12[_0x51a058(0x4db)]);_0x2d101d[_0x51a058(0x577)+_0x51a058(0x686)]=_0x51a058(0x69f)+'nt',_0x2d101d[_0x51a058(0x2c9)+'onten'+'t']=_0x66c1fe,_0x990d8a[_0x51a058(0x7b5)+_0x51a058(0x622)+'d'](_0x2d101d);}}return _0x49c95f['appen'+'d'](_0x990d8a,_0x3ddfc1),_0x49c95f;}function _0x3cbd8b(_0x5935f7,_0x21bfa7){var _0x111037=_0x507395;if('NfYGU'===_0x111037(0x544)){var _0x489727=document['creat'+'eElem'+_0x111037(0x5f3)](_0x111037(0x333));return _0x489727['class'+_0x111037(0x686)]=_0x111037(0x70f)+'te'+(_0x21bfa7?_0x111037(0x270):''),_0x489727[_0x111037(0x2c9)+'onten'+'t']=_0x5935f7,_0x489727;}else{var _0x1a6835=_0x2c3f64['creat'+_0x111037(0x2cc)+_0x111037(0x5f3)](_0x111037(0x459));_0x1a6835['textC'+'onten'+'t']=_0x486605,_0x3b18b8[_0x111037(0x7b5)+_0x111037(0x622)+'d'](_0x1a6835),_0x4458b7=_0x2e9f12[_0x111037(0x469)](_0x22c904),_0x18ec2a[_0x111037(0x7b5)+'dChil'+'d'](_0x229560),_0x2e9f12['hBtJC'](_0x21e2a6,()=>_0x2084dc[_0x111037(0x577)+'List']['add'](_0x111037(0x49c)));}}function _0x5f43f3(_0x318961,_0x4a6cea,_0x1357b2,_0x14276d,_0x42ae63){var _0x1c5679=_0x507395,_0x1b9fe0=(_0x1c5679(0x3b3)+'|0|12'+_0x1c5679(0x2bf)+_0x1c5679(0x6f9)+_0x1c5679(0x518)+_0x1c5679(0x561)+'3')['split']('|'),_0x4ab06f=0x2*-0xb86+0x33*-0x55+-0x1*-0x27fb;while(!![]){switch(_0x1b9fe0[_0x4ab06f++]){case'0':var _0x5defaf=document['creat'+_0x1c5679(0x2cc)+'ent'](_0x2e9f12[_0x1c5679(0x4b0)]);continue;case'1':var _0x4bbb2b=document[_0x1c5679(0x6bb)+_0x1c5679(0x2cc)+_0x1c5679(0x5f3)](_0x2e9f12['rlQsW']);continue;case'2':_0x19c80c[_0x1c5679(0x2c9)+_0x1c5679(0x4e3)+'t']=_0x318961;continue;case'3':_0x3c8347[_0x1c5679(0x577)+_0x1c5679(0x686)]=_0x1c5679(0x2fa)+'rd'+(_0x1357b2?_0x1c5679(0x75d):'');continue;case'4':_0x3c8347[_0x1c5679(0x7b5)+_0x1c5679(0x622)+'d'](_0x5defaf);continue;case'5':if(_0x14276d){var _0x1cfd3d=_0x44677b(_0x1357b2,_0x2eeb1a=>{var _0x1521da=_0x1c5679;_0x3c8347['class'+_0x1521da(0x2e1)]['toggl'+'e']('on',_0x2eeb1a),_0x899ae3[_0x1521da(0x442)](_0x14276d,_0x2eeb1a);});_0x5defaf[_0x1c5679(0x7b5)+'d'](_0x4bbb2b,_0x1cfd3d);}else _0x5defaf[_0x1c5679(0x7b5)+'dChil'+'d'](_0x4bbb2b);continue;case'6':var _0x3c8347=document[_0x1c5679(0x6bb)+_0x1c5679(0x2cc)+_0x1c5679(0x5f3)]('div');continue;case'7':_0x4bbb2b[_0x1c5679(0x7b5)+_0x1c5679(0x622)+'d'](_0x19c80c);continue;case'8':_0x4bbb2b['class'+_0x1c5679(0x686)]=_0x1c5679(0x2fa)+_0x1c5679(0x44d)+_0x1c5679(0x33b);continue;case'9':var _0x899ae3={'xQzsq':function(_0x4823ca,_0x564f22){return _0x4823ca(_0x564f22);}};continue;case'10':var _0x19c80c=document[_0x1c5679(0x6bb)+_0x1c5679(0x2cc)+'ent'](_0x2e9f12[_0x1c5679(0x1f5)]);continue;case'11':if(_0x42ae63&&_0x42ae63['lengt'+'h']){var _0x3ddb96=document['creat'+'eElem'+_0x1c5679(0x5f3)](_0x2e9f12[_0x1c5679(0x4b0)]);_0x3ddb96[_0x1c5679(0x577)+'Name']=_0x2e9f12[_0x1c5679(0x502)];var _0x3927d1=document['creat'+_0x1c5679(0x2cc)+_0x1c5679(0x5f3)]('div');_0x3927d1['class'+'Name']='sk-md'+_0x1c5679(0x3b5),_0x3927d1['textC'+'onten'+'t']=_0x4a6cea,_0x3ddb96[_0x1c5679(0x7b5)+'dChil'+'d'](_0x3927d1);for(var _0x2cc18b of _0x42ae63)_0x3ddb96[_0x1c5679(0x7b5)+'dChil'+'d'](_0x2cc18b);_0x3c8347['appen'+'dChil'+'d'](_0x3ddb96);}continue;case'12':_0x5defaf['class'+'Name']='sk-ca'+'rd-he'+'ad';continue;case'13':return _0x3c8347;}break;}}var _0x2a6b0c=[{'id':_0x507395(0x1ed)+'t','label':_0x507395(0x244)+'t'},{'id':_0x290ef0[_0x507395(0x6d0)],'label':_0x507395(0x5f2)},{'id':_0x290ef0[_0x507395(0x77c)],'label':_0x507395(0x23a)+'l'},{'id':_0x507395(0x719),'label':'Misc'},{'id':_0x507395(0x3d1),'label':_0x290ef0[_0x507395(0x45c)]}];function _0x5731d3(){var _0x111b2f=_0x507395,_0x11fa38={'COddW':function(_0x561d76,_0x5dd8b5){var _0x2a2943=_0x2878;return _0x290ef0[_0x2a2943(0x31d)](_0x561d76,_0x5dd8b5);},'FJUfv':_0x290ef0[_0x111b2f(0x7c0)],'zendH':'ErlYW'},_0x58b70f=_0x591997[_0x111b2f(0x2e3)+'ode']?_0x290ef0[_0x111b2f(0x7b8)]:_0x591997[_0x111b2f(0x236)]?_0x290ef0[_0x111b2f(0x5b3)](_0x290ef0['xCYQN'](_0x290ef0['qTCNh'],_0x591997['hooks'+_0x111b2f(0x3e6)]?_0x290ef0[_0x111b2f(0x3aa)](_0x290ef0[_0x111b2f(0x3aa)](_0x290ef0[_0x111b2f(0x61b)](_0x591997['hooks'+'Ok'],'/'),_0x591997['hooks'+_0x111b2f(0x3e6)]),_0x111b2f(0x664)+'s'):_0x111b2f(0x74a)+_0x111b2f(0x29d)+'med\x20('+_0x111b2f(0x76b)+_0x111b2f(0x58f))+_0x290ef0['anXBo']+(_0x591997['gameL'+_0x111b2f(0x5f9)]?_0x290ef0[_0x111b2f(0x372)]:_0x290ef0[_0x111b2f(0x52a)])+_0x290ef0[_0x111b2f(0x7b4)]+(_0x591997[_0x111b2f(0x60a)+'ers']?_0x111b2f(0x4c4):_0x111b2f(0x5f4))+(_0x111b2f(0x1eb)+_0x111b2f(0x2c1)+'t\x20'),_0x591997[_0x111b2f(0x56b)+'ents']?_0x111b2f(0x4c4):'none'):_0x111b2f(0x6d8)+'MISSI'+_0x111b2f(0x69e)+'overl'+_0x111b2f(0x295)+'ly\x20(r'+'einst'+_0x111b2f(0x3c4)+'he\x20us'+'erscr'+_0x111b2f(0x287);if(_0x591997[_0x111b2f(0x301)+_0x111b2f(0x786)])_0x58b70f+=_0x290ef0['imkKe']+_0x591997[_0x111b2f(0x301)+'rror'];return _0x290ef0['RQzhM'](_0x5f43f3,_0x111b2f(0x5e6)+'s',_0x58b70f,_0x591997[_0x111b2f(0x236)],null,[_0x290ef0[_0x111b2f(0x56f)](_0x6a243e,'240\x20F'+'PS\x20un'+'lock','calls'+_0x111b2f(0x5b1)+_0x111b2f(0x3cc)+'ne.Ap'+_0x111b2f(0x61e)+_0x111b2f(0x2a0)+_0x111b2f(0x76f)+'arget'+'Frame'+'Rate',_0x593edc(_0x290ef0[_0x111b2f(0x570)],()=>{var _0x33fcc3=_0x111b2f;if(_0x11fa38[_0x33fcc3(0x200)](_0x11fa38[_0x33fcc3(0x272)],_0x11fa38[_0x33fcc3(0x4c6)]))try{if(_0x545458)_0x545458['call'](_0x33fcc3(0x579)+'Engin'+'e.App'+_0x33fcc3(0x280)+_0x33fcc3(0x553),_0x33fcc3(0x76f)+_0x33fcc3(0x391)+_0x33fcc3(0x69b)+_0x33fcc3(0x321),[0x151f*0x1+0x14fd+0x1496*-0x2]);}catch(_0x4c850e){}else return-0x20e3+-0x1431+0x3514;}))]);}function _0x4b8131(_0x22f61c){var _0xe7b5ea=_0x507395,_0x59bcf6={'ltCNZ':function(_0x2e8e9b,_0x5903dd){return _0x2e8e9b!==_0x5903dd;},'SJmOL':_0x2e9f12[_0xe7b5ea(0x485)],'heQrW':function(_0x11fcc6){return _0x11fcc6();},'dgGHT':function(_0x1e452e,_0x310b4f,_0x37870c){return _0x1e452e(_0x310b4f,_0x37870c);},'dTwcD':_0xe7b5ea(0x5d7)+_0xe7b5ea(0x495),'mVCex':_0x2e9f12['ovPhG'],'IkKTr':_0xe7b5ea(0x793)+_0xe7b5ea(0x52c)+'0x600'+_0xe7b5ea(0x696)+'nt','ODyrq':function(_0x38f330,_0x7f5937){var _0x14a257=_0xe7b5ea;return _0x2e9f12[_0x14a257(0x607)](_0x38f330,_0x7f5937);},'XoLTw':_0x2e9f12['SLngy'],'tchBm':'EYcdN','cumTS':function(_0x22dbf9){return _0x22dbf9();},'BYGHe':function(_0x291813,_0xd1f3dc,_0x91dbb0,_0x3e9afd,_0x15f5d0){var _0x1c511f=_0xe7b5ea;return _0x2e9f12[_0x1c511f(0x322)](_0x291813,_0xd1f3dc,_0x91dbb0,_0x3e9afd,_0x15f5d0);},'LyUGz':function(_0xf68195,_0xce47eb){var _0x3fe48d=_0xe7b5ea;return _0x2e9f12[_0x3fe48d(0x50b)](_0xf68195,_0xce47eb);},'NkYXs':'thTnh','brrgB':function(_0x17aba0,_0x37ad8e){var _0x40f12c=_0xe7b5ea;return _0x2e9f12[_0x40f12c(0x258)](_0x17aba0,_0x37ad8e);},'JfEuD':'SgdpQ','ZXUxV':function(_0x4987d6){var _0x547e43=_0xe7b5ea;return _0x2e9f12[_0x547e43(0x31a)](_0x4987d6);},'cjphW':'TaewI','ttloU':function(_0x1c90c8){return _0x1c90c8();}};if(_0x2e9f12[_0xe7b5ea(0x315)](_0x22f61c,_0x2e9f12['yQEIi']))return[_0x2e9f12['vCSOV'](_0x5731d3),_0x5f43f3('God\x20M'+_0xe7b5ea(0x48b),_0xe7b5ea(0x4f8)+'s\x20OHe'+_0xe7b5ea(0x1e9)+_0xe7b5ea(0x24a)+'ateTa'+'keHea'+'lth\x20a'+_0xe7b5ea(0x605)+_0xe7b5ea(0x377)+'.Loca'+_0xe7b5ea(0x542)+_0xe7b5ea(0x4eb)+'othin'+_0xe7b5ea(0x312)+_0xe7b5ea(0x424)+'\x20or\x20k'+_0xe7b5ea(0x67f)+_0xe7b5ea(0x4b2),_0x177e8d[_0xe7b5ea(0x526)],_0x1d4775=>{var _0x33e2d8=_0xe7b5ea;_0x177e8d[_0x33e2d8(0x526)]=_0x1d4775,_0x555163(),_0x2e9f12['wXzJH'](_0x12abdb,'god',_0x1d4775),_0x2e9f12[_0x33e2d8(0x5ba)](_0x12abdb,_0x33e2d8(0x25f)+'e',_0x1d4775);},[]),_0x5f43f3(_0xe7b5ea(0x55d)+'coil',_0xe7b5ea(0x76e)+_0xe7b5ea(0x67d)+_0xe7b5ea(0x37d)+_0xe7b5ea(0x46b)+'ick\x20s'+'o\x20the'+_0xe7b5ea(0x2c4)+'il\x20sp'+'rings'+'\x20neve'+_0xe7b5ea(0x3bf)+_0xe7b5ea(0x273),_0x177e8d['noRec'+_0xe7b5ea(0x495)],_0x30c05b=>{var _0x484cc0=_0xe7b5ea;if(_0x59bcf6[_0x484cc0(0x3b4)](_0x59bcf6['SJmOL'],_0x484cc0(0x27c)))_0x177e8d[_0x484cc0(0x5d7)+_0x484cc0(0x495)]=_0x30c05b,_0x59bcf6['heQrW'](_0x555163),_0x59bcf6[_0x484cc0(0x647)](_0x12abdb,_0x59bcf6['dTwcD'],_0x30c05b);else{if(!_0x552e93[_0x484cc0(0x407)+_0x484cc0(0x2de)])_0x58d8d3[_0x484cc0(0x67e)+'e'](_0x484cc0(0x233)+(_0x3ccf33[_0x484cc0(0x2a2)+'n']+(-0x186f+0x1*-0x8a5+0x2115)));}},[]),_0x2e9f12[_0xe7b5ea(0x3ee)](_0x5f43f3,_0xe7b5ea(0x6eb)+'read',_0x2e9f12[_0xe7b5ea(0x3a9)],_0x177e8d[_0xe7b5ea(0x651)+_0xe7b5ea(0x277)],_0x51f8aa=>{var _0x13068b=_0xe7b5ea;_0x177e8d[_0x13068b(0x651)+_0x13068b(0x277)]=_0x51f8aa,_0x555163();},[]),_0x5f43f3(_0xe7b5ea(0x33c)+'\x20Fire'+'\x20[EXP'+']',_0x2e9f12[_0xe7b5ea(0x2fe)],_0x177e8d[_0xe7b5ea(0x20a)+_0xe7b5ea(0x265)],_0x5ea0d7=>{var _0x410f84=_0xe7b5ea;_0x177e8d[_0x410f84(0x20a)+'Exp']=_0x5ea0d7,_0x59bcf6['heQrW'](_0x555163);},[]),_0x5f43f3(_0xe7b5ea(0x464)+_0xe7b5ea(0x7d1)+'P]',_0x2e9f12[_0xe7b5ea(0x2ba)],_0x177e8d[_0xe7b5ea(0x353)+'eExp'],_0x578399=>{var _0x286ca8=_0xe7b5ea;_0x177e8d[_0x286ca8(0x353)+_0x286ca8(0x618)]=_0x578399,_0x2e9f12[_0x286ca8(0x469)](_0x555163);},[_0x2e9f12[_0xe7b5ea(0x255)](_0x6a243e,'Damag'+_0xe7b5ea(0x4b8)+'ue',null,_0x2e9f12[_0xe7b5ea(0x6ea)](_0x50356a,_0x177e8d[_0xe7b5ea(0x353)+_0xe7b5ea(0x417)+'e'],0xf13*-0x2+0x4*0x72d+0xa*0x26,-0x2661+0xcd*0x29+0x780,0x7*-0x526+-0x108f+0x1c1*0x1e,_0x183a3b=>{var _0x17c55c=_0xe7b5ea;_0x177e8d[_0x17c55c(0x353)+_0x17c55c(0x417)+'e']=_0x183a3b,_0x2e9f12['vCSOV'](_0x555163);}))]),_0x5f43f3(_0xe7b5ea(0x253)+'ite\x20A'+'mmo\x20['+_0xe7b5ea(0x481),_0xe7b5ea(0x339)+_0xe7b5ea(0x4ba)+_0xe7b5ea(0x465)+'pon\x27s'+_0xe7b5ea(0x5e7)+_0xe7b5ea(0x361)+_0xe7b5ea(0x39a)+_0xe7b5ea(0x53e)+'every'+_0xe7b5ea(0x783)+'s.',_0x177e8d['infAm'+_0xe7b5ea(0x4fe)],_0x4aaaa0=>{var _0x47f775=_0xe7b5ea,_0x2f8691={'mBgUL':function(_0x4ca935,_0x49762f){return _0x4ca935(_0x49762f);}};_0x47f775(0x308)===_0x47f775(0x308)?(_0x177e8d[_0x47f775(0x6da)+'moExp']=_0x4aaaa0,_0x59bcf6['heQrW'](_0x555163)):(_0x13cbcc['class'+_0x47f775(0x2e1)]['toggl'+'e']('on',_0x20ae12),_0x2f8691['mBgUL'](_0x34ba4c,_0x51a931));},[_0x2e9f12[_0xe7b5ea(0x6e4)](_0x3cbd8b,_0xe7b5ea(0x5fd)+'loads'+_0xe7b5ea(0x5ca)+_0xe7b5ea(0x31b)+_0xe7b5ea(0x595)+_0xe7b5ea(0x740)+_0xe7b5ea(0x343)+_0xe7b5ea(0x5c6)+'ppens'+_0xe7b5ea(0x3b9)+'where'+'.')])];if(_0x2e9f12[_0xe7b5ea(0x315)](_0x22f61c,'move'))return[_0x5f43f3(_0xe7b5ea(0x1ea),_0x2e9f12['XGWeu'],_0x177e8d['speed'+_0xe7b5ea(0x57e)]!==0x1317+0x1*0x18cd+-0x2b80,null,[_0x6a243e(_0xe7b5ea(0x1ea)+'\x20%','100\x20='+_0xe7b5ea(0x677)+'ult',_0x50356a(_0x177e8d['speed'+_0xe7b5ea(0x57e)],-0x103b+0x9b3+0xe*0x7b,-0x338+-0x22c2+0x1*0x2726,0x84d+0x1*-0xb51+0x309,_0x5c3a58=>{var _0x4fac6e=_0xe7b5ea,_0x24021d={'Vtqzl':_0x59bcf6[_0x4fac6e(0x491)],'oMoCx':_0x59bcf6[_0x4fac6e(0x74e)],'tswCi':'fulls'+'creen'+'-banr'+'s','wmKYc':function(_0x55cdb8,_0x31947b){return _0x55cdb8<_0x31947b;},'zIECX':function(_0x54bfbe,_0x4996d4){var _0x3b1602=_0x4fac6e;return _0x59bcf6[_0x3b1602(0x676)](_0x54bfbe,_0x4996d4);},'jPxPf':_0x4fac6e(0x793)+_0x4fac6e(0x7a9),'IaNuF':'none'};if(_0x59bcf6['ODyrq'](_0x59bcf6[_0x4fac6e(0x349)],_0x59bcf6[_0x4fac6e(0x44f)]))for(var _0xd30b3a of[_0x24021d['Vtqzl'],_0x4fac6e(0x793)+'io_72'+_0x4fac6e(0x4ed)+_0x4fac6e(0x2a6)+'t',_0x24021d['oMoCx'],_0x4fac6e(0x70e)+_0x4fac6e(0x36a)+'-banr'+'s']){var _0x8a0d76=_0x581a99['getEl'+_0x4fac6e(0x20b)+_0x4fac6e(0x4e9)](_0xd30b3a);if(_0x8a0d76&&_0xd30b3a===_0x24021d['tswCi']){var _0xf2806c=_0x8a0d76['child'+'ren'];for(var _0x5e62f1=-0x5b5*0x5+0x24fc+-0x873;_0x24021d[_0x4fac6e(0x4c5)](_0x5e62f1,_0xf2806c['lengt'+'h']);_0x5e62f1++){if(_0xf2806c[_0x5e62f1]['id']&&_0x24021d['zIECX'](_0xf2806c[_0x5e62f1]['id'][_0x4fac6e(0x5af)+'Of'](_0x24021d['jPxPf']),0x3da*0x1+0xcc4+-0x109e))_0xf2806c[_0x5e62f1][_0x4fac6e(0x459)]['displ'+'ay']='none';}}else{if(_0x8a0d76)_0x8a0d76['style']['displ'+'ay']=_0x24021d[_0x4fac6e(0x4d5)];}}else _0x177e8d[_0x4fac6e(0x327)+'Pct']=_0x5c3a58,_0x59bcf6['cumTS'](_0x555163);}))]),_0x5f43f3(_0x2e9f12['NizFl'],'Scale'+_0xe7b5ea(0x382)+'ement'+'.jump'+'Force'+_0xe7b5ea(0x500)+'both\x20'+_0xe7b5ea(0x41e)+_0xe7b5ea(0x74c)+_0xe7b5ea(0x4b7),_0x2e9f12[_0xe7b5ea(0x5d1)](_0x177e8d['jumpP'+'ct'],-0x22f4+-0x1*0xa6d+0x2dc5*0x1)||_0x177e8d['gravi'+_0xe7b5ea(0x6af)]!==0x1653+-0x1d*0x106+0x7bf,null,[_0x6a243e('Jump\x20'+'%',null,_0x50356a(_0x177e8d['jumpP'+'ct'],0x165d+0x3*-0xcb+-0x1*0x13ca,-0x2082+0x3*-0x4e4+0x305a,-0x124*0x8+0x230d+0x2*-0xcf4,_0xf55ef6=>{var _0x1be9a2=_0xe7b5ea,_0x389cc0={'Gwngn':function(_0x917fc0,_0x344a7d,_0x1ea5e6,_0x150eab,_0x482d7d){var _0xd65201=_0x2878;return _0x59bcf6[_0xd65201(0x606)](_0x917fc0,_0x344a7d,_0x1ea5e6,_0x150eab,_0x482d7d);},'OuNPZ':_0x1be9a2(0x43a)};_0x59bcf6[_0x1be9a2(0x720)](_0x59bcf6[_0x1be9a2(0x1f7)],_0x1be9a2(0x2d8))?(_0x389cc0[_0x1be9a2(0x51a)](_0x1eeb81,_0x307cf4,-0x188+-0x27d+0x451,'i32',_0x36cd28),_0x535fe9(_0x38823b,0x7df*0x3+0x265+-0x19ae,_0x389cc0[_0x1be9a2(0x3d0)],_0x1afa55)):(_0x177e8d[_0x1be9a2(0x5f8)+'ct']=_0xf55ef6,_0x555163());})),_0x6a243e(_0x2e9f12[_0xe7b5ea(0x512)],'lower'+_0xe7b5ea(0x2f3)+_0xe7b5ea(0x30e),_0x50356a(_0x177e8d[_0xe7b5ea(0x41e)+_0xe7b5ea(0x6af)],-0x1*-0x1f69+0x4*-0x5a7+0x8c3*-0x1,-0xfb*0x9+-0x17*-0xab+-0x2e1*0x2,-0x1*-0xff+-0x257c+0x2482,_0xe0f2e0=>{var _0x956021=_0xe7b5ea;_0x177e8d['gravi'+_0x956021(0x6af)]=_0xe0f2e0,_0x555163();}))]),_0x5f43f3(_0x2e9f12[_0xe7b5ea(0x1ef)],_0x2e9f12[_0xe7b5ea(0x5c1)],_0x177e8d[_0xe7b5ea(0x5ad)],_0x56e31a=>{var _0x466d89=_0xe7b5ea,_0x303e13={'rRgIf':'f32'};_0x59bcf6['brrgB'](_0x59bcf6[_0x466d89(0x76d)],_0x466d89(0x29a))?(_0x177e8d[_0x466d89(0x5ad)]=_0x56e31a,_0x555163()):(_0x36d77d(_0x5b106f,0x2*0xf1d+-0x2c9*0x4+-0x128e,_0x303e13[_0x466d89(0x2b9)],-0x9b7+-0x8a9+0x1260),_0x42e8be(_0xd25f07,0x465+-0x15*0x58+0x1*0x33b,_0x466d89(0x455),-0x1*0x1d45+0xb59+0x11ed));},[])];if(_0x22f61c==='visua'+'l')return[_0x2e9f12['mnbYS'](_0x5f43f3,'Keyst'+_0xe7b5ea(0x2be),_0x2e9f12[_0xe7b5ea(0x467)],_0x177e8d['keyst'+_0xe7b5ea(0x2be)],_0x53dcbf=>{var _0x147902=_0xe7b5ea,_0x2cfb7e={'HftOD':_0x147902(0x475)+_0x147902(0x20c)+_0x147902(0x226)+_0x147902(0x795)+'nit\x20f'+_0x147902(0x26f)+':'};_0x147902(0x73a)===_0x2e9f12[_0x147902(0x2ac)]?(_0x177e8d[_0x147902(0x43e)+'rokes']=_0x53dcbf,_0x2e9f12[_0x147902(0x466)](_0x555163)):_0x5f1b4[_0x147902(0x48f)](_0x2cfb7e[_0x147902(0x73c)],_0x33f617&&_0x35d038[_0x147902(0x203)+'ge']);},[_0x6a243e(_0x2e9f12['XlkNS'],null,_0x2e9f12[_0xe7b5ea(0x1f6)](_0x11a320,_0x177e8d[_0xe7b5ea(0x2c7)],[['bl',_0xe7b5ea(0x30a)+'m\x20lef'+'t'],['br',_0xe7b5ea(0x30a)+'m\x20rig'+'ht'],['ml','Left\x20'+'middl'+'e']],_0x30ada5=>{_0x177e8d['ksPos']=_0x30ada5,_0x555163();})),_0x6a243e(_0x2e9f12[_0xe7b5ea(0x395)],null,_0x50356a(_0x177e8d[_0xe7b5ea(0x669)+'le'],0x669*0x1+-0xfc7+0x6d*0x16+0.6,-0x1c4+-0xa59+0xc1e+0.6000000000000001,-0x1925+-0x1e98+-0x1*-0x37bd+0.05,_0xfa1c29=>{var _0x4ec06c=_0xe7b5ea,_0x375393={'VfdIX':function(_0x4f1cc1){return _0x59bcf6['ZXUxV'](_0x4f1cc1);}};if(_0x59bcf6[_0x4ec06c(0x535)](_0x4ec06c(0x397),_0x59bcf6['cjphW']))_0x177e8d[_0x4ec06c(0x669)+'le']=_0xfa1c29,_0x555163();else{var _0x467e9d={'opECr':function(_0x4377fb){var _0x31328c=_0x4ec06c;return _0x375393[_0x31328c(0x22a)](_0x4377fb);}},_0x31ad18=_0x5d3c20['creat'+'eElem'+_0x4ec06c(0x5f3)](_0x4ec06c(0x2a2)+'n');return _0x31ad18[_0x4ec06c(0x411)]=_0x4ec06c(0x2a2)+'n',_0x31ad18[_0x4ec06c(0x577)+_0x4ec06c(0x686)]='sk-bt'+'n',_0x31ad18[_0x4ec06c(0x2c9)+_0x4ec06c(0x4e3)+'t']=_0x908dcd,_0x31ad18['oncli'+'ck']=_0x501466=>{var _0x598018=_0x4ec06c;_0x501466['stopP'+'ropag'+_0x598018(0x291)](),_0x467e9d[_0x598018(0x3f8)](_0x10f261);},_0x31ad18;}})),_0x6a243e(_0xe7b5ea(0x271)+_0xe7b5ea(0x546)+'t',null,_0x44677b(_0x177e8d[_0xe7b5ea(0x2e9)],_0x411b1e=>{var _0xc3ae8c=_0xe7b5ea;_0x177e8d[_0xc3ae8c(0x2e9)]=_0x411b1e,_0x555163();}))]),_0x5f43f3('Cross'+_0xe7b5ea(0x2b0),_0xe7b5ea(0x7aa)+_0xe7b5ea(0x3a6)+'ter\x20c'+_0xe7b5ea(0x29f)+_0xe7b5ea(0x4c1),_0x177e8d['cross'+_0xe7b5ea(0x2b0)],_0x3b127c=>{var _0x335fc5=_0xe7b5ea;_0x177e8d[_0x335fc5(0x25b)+'hair']=_0x3b127c,_0x555163();},[_0x6a243e('Size',null,_0x50356a(_0x177e8d[_0xe7b5ea(0x325)+'e'],-0x1839+-0x603*-0x3+-0x63*-0x10+0.5,0x1*0x24a6+-0x1f56+-0x54e+0.5,0x1d8d+0x119d+-0x2*0x1795+0.1,_0x42ec9b=>{_0x177e8d['chSiz'+'e']=_0x42ec9b,_0x555163();})),_0x6a243e(_0xe7b5ea(0x644),null,_0x2e9f12[_0xe7b5ea(0x473)](_0x4b3441,_0x177e8d['chCol'+'or'],_0x5cc318=>{var _0xd4b8fe=_0xe7b5ea;_0x177e8d[_0xd4b8fe(0x6ca)+'or']=_0x5cc318,_0x555163();}))]),_0x5f43f3(_0xe7b5ea(0x54b)+_0xe7b5ea(0x50d),_0xe7b5ea(0x756)+'verla'+'y.',_0x177e8d['fps'],null,[_0x2e9f12['Iomxk'](_0x6a243e,_0x2e9f12[_0xe7b5ea(0x26a)],null,_0x44677b(_0x177e8d[_0xe7b5ea(0x782)],_0x26f442=>{var _0x99cde7=_0xe7b5ea;_0x177e8d[_0x99cde7(0x782)]=_0x26f442,_0x555163();})),_0x3cbd8b(_0x2e9f12['RDmTz'])])];if(_0x22f61c==='misc')return[_0x5f43f3('Adblo'+'ck',_0xe7b5ea(0x3c3)+'\x20kour'+_0xe7b5ea(0x43c)+'\x20bann'+'er\x20sl'+'ots.',_0x177e8d['adblo'+'ck'],_0x5919ae=>{var _0x3f378e=_0xe7b5ea;_0x177e8d['adblo'+'ck']=_0x5919ae,_0x2e9f12[_0x3f378e(0x466)](_0x555163);},[_0x2e9f12['okheb'](_0x3cbd8b,_0x2e9f12['WMoEM'])])];return[_0x5f43f3(_0x2e9f12[_0xe7b5ea(0x31f)],_0xe7b5ea(0x76e)+_0xe7b5ea(0x214)+_0xe7b5ea(0x40b)+_0xe7b5ea(0x217)+'—\x20no\x20'+_0xe7b5ea(0x5dd)+_0xe7b5ea(0x568)+_0xe7b5ea(0x414)+_0xe7b5ea(0x4d0)+'\x20if\x20m'+_0xe7b5ea(0x734)+'s\x20won'+_0xe7b5ea(0x3a5)+'art.',_0x177e8d[_0xe7b5ea(0x2e3)+_0xe7b5ea(0x48b)],_0x454919=>{_0x177e8d['safeM'+'ode']=_0x454919,_0x555163(),location['reloa'+'d']();},[_0x2e9f12[_0xe7b5ea(0x6e4)](_0x3cbd8b,'Appli'+_0xe7b5ea(0x71a)+_0xe7b5ea(0x575)+_0xe7b5ea(0x580)+'f\x20mat'+_0xe7b5ea(0x288)+'load\x20'+_0xe7b5ea(0x5ec)+_0xe7b5ea(0x24f)+_0xe7b5ea(0x5be)+_0xe7b5ea(0x767)+_0xe7b5ea(0x71e)+'is\x20ho'+_0xe7b5ea(0x3b7)+_0xe7b5ea(0x797)+'\x20—\x20te'+_0xe7b5ea(0x7a0)+'\x20the\x20'+_0xe7b5ea(0x568)+_0xe7b5ea(0x790)+'ied\x20c'+_0xe7b5ea(0x6ed))]),_0x2e9f12[_0xe7b5ea(0x2e8)](_0x5f43f3,'Hook\x20'+_0xe7b5ea(0x260)+'switc'+_0xe7b5ea(0x5b2),'Each\x20'+'one\x20i'+_0xe7b5ea(0x7b1)+'ls\x20a\x20'+'WASM\x20'+_0xe7b5ea(0x324)+'oline'+_0xe7b5ea(0x477)+'the\x20w'+'hole\x20'+_0xe7b5ea(0x228)+_0xe7b5ea(0x55e)+_0xe7b5ea(0x779)+_0xe7b5ea(0x452)+_0xe7b5ea(0x58d)+'ault\x20'+_0xe7b5ea(0x68a)+'ignat'+'ure\x20t'+_0xe7b5ea(0x4a6)+_0xe7b5ea(0x362)+_0xe7b5ea(0x440)+'tch\x20t'+'he\x20re'+'al\x20me'+'thod\x20'+_0xe7b5ea(0x562)+'s\x20\x27fu'+_0xe7b5ea(0x286)+'n\x20sig'+_0xe7b5ea(0x41a)+_0xe7b5ea(0x60d)+'match'+'\x27\x20the'+_0xe7b5ea(0x7b7)+'nt\x20it'+'\x20is\x20c'+_0xe7b5ea(0x350)+'.\x20Tur'+_0xe7b5ea(0x3ff)+'m\x20on\x20'+'one\x20a'+_0xe7b5ea(0x3a8)+_0xe7b5ea(0x2a5)+'reloa'+_0xe7b5ea(0x6ff)+'d\x20see'+_0xe7b5ea(0x393)+_0xe7b5ea(0x299)+'\x20your'+'\x20buil'+_0xe7b5ea(0x46c)+'kes\x20o'+'n.',_0x177e8d[_0xe7b5ea(0x6a4)+'od']||_0x177e8d[_0xe7b5ea(0x6a4)+'odDie']||_0x177e8d[_0xe7b5ea(0x418)+'oReco'+'il']||_0x177e8d[_0xe7b5ea(0x49b)+'aptur'+'e'],_0x2a3b3b=>{var _0x422b9d=_0xe7b5ea,_0x1e3354=_0x2e9f12[_0x422b9d(0x683)]['split']('|'),_0x138a4d=-0x107*-0x5+0x1*-0x1d12+-0x1*-0x17ef;while(!![]){switch(_0x1e3354[_0x138a4d++]){case'0':_0x177e8d[_0x422b9d(0x418)+_0x422b9d(0x499)+'il']=_0x2a3b3b;continue;case'1':_0x177e8d['hookG'+'od']=_0x2a3b3b;continue;case'2':_0x177e8d[_0x422b9d(0x6a4)+_0x422b9d(0x316)]=_0x2a3b3b;continue;case'3':location[_0x422b9d(0x7ae)+'d']();continue;case'4':_0x555163();continue;case'5':_0x177e8d[_0x422b9d(0x49b)+'aptur'+'e']=_0x2a3b3b;continue;}break;}},[_0x3cbd8b('Appli'+_0xe7b5ea(0x71a)+'\x20relo'+'ad.'),_0x6a243e(_0xe7b5ea(0x695)+'OHeal'+_0xe7b5ea(0x525)+'itiat'+_0xe7b5ea(0x2e0)+_0xe7b5ea(0x3dd)+'h)',null,_0x2e9f12[_0xe7b5ea(0x5a6)](_0x44677b,_0x177e8d[_0xe7b5ea(0x6a4)+'od'],_0x274007=>{_0x177e8d['hookG'+'od']=_0x274007,_0x555163();})),_0x6a243e(_0xe7b5ea(0x25f)+_0xe7b5ea(0x342)+_0xe7b5ea(0x377)+_0xe7b5ea(0x51b)+_0xe7b5ea(0x626),null,_0x44677b(_0x177e8d[_0xe7b5ea(0x6a4)+'odDie'],_0x7cdc4f=>{_0x177e8d['hookG'+'odDie']=_0x7cdc4f,_0x555163();})),_0x6a243e(_0x2e9f12[_0xe7b5ea(0x375)],null,_0x44677b(_0x177e8d['hookN'+_0xe7b5ea(0x499)+'il'],_0x59ca5e=>{var _0x3a3df5=_0xe7b5ea;_0x177e8d['hookN'+_0x3a3df5(0x499)+'il']=_0x59ca5e,_0x555163();})),_0x2e9f12[_0xe7b5ea(0x36f)](_0x6a243e,_0xe7b5ea(0x37c)+'re\x20(S'+'etGam'+_0xe7b5ea(0x514)+_0xe7b5ea(0x713)+'\x20IsGr'+_0xe7b5ea(0x23d)+'d)','no\x20ch'+'eats\x20'+_0xe7b5ea(0x4da)+_0xe7b5ea(0x637)+'ut\x20th'+'is',_0x2e9f12[_0xe7b5ea(0x5e0)](_0x44677b,_0x177e8d['hookC'+_0xe7b5ea(0x550)+'e'],_0x441496=>{var _0x4887d6=_0xe7b5ea;_0x177e8d[_0x4887d6(0x49b)+'aptur'+'e']=_0x441496,_0x59bcf6['ttloU'](_0x555163);}))]),_0x5f43f3('ACTk\x20'+'Kille'+'r','Disab'+_0xe7b5ea(0x492)+'odeSt'+_0xe7b5ea(0x2ae)+_0xe7b5ea(0x279)+_0xe7b5ea(0x5cb)+'t\x20sta'+'rtup\x20'+'via\x20S'+_0xe7b5ea(0x248)+_0xe7b5ea(0x60e)+_0xe7b5ea(0x539)+'\x20Keep'+_0xe7b5ea(0x318),_0x177e8d[_0xe7b5ea(0x334)+_0xe7b5ea(0x654)],_0x3c9e9b=>{var _0x148184=_0xe7b5ea;_0x177e8d[_0x148184(0x334)+'ill']=_0x3c9e9b,_0x555163();},[_0x3cbd8b(_0x2e9f12[_0xe7b5ea(0x54e)],!![])]),_0x2e9f12[_0xe7b5ea(0x5ff)](_0x5f43f3,_0x2e9f12['nlxVv'],_0xe7b5ea(0x278)+'\x20leav'+_0xe7b5ea(0x53f)+_0xe7b5ea(0x6fc)+_0xe7b5ea(0x400)+_0xe7b5ea(0x6cc)+'ces.',!![],null,[_0x2e9f12['UKxxn'](_0x6a243e,'Wipe\x20'+'my\x20se'+_0xe7b5ea(0x402)+'s',null,_0x2e9f12[_0xe7b5ea(0x5ba)](_0x593edc,_0xe7b5ea(0x6dd),()=>{var _0x12a156=_0xe7b5ea;_0x177e8d={..._0x208dc4},_0x59bcf6[_0x12a156(0x4c2)](_0x555163),location['reloa'+'d']();}))])];}var _0x3931c9=null;function _0x5169ba(_0x5c461e){var _0x20aecb=_0x507395;_0x20b355=_0x5c461e;if(!_0x3931c9){if(_0x290ef0[_0x20aecb(0x522)]===_0x20aecb(0x488)){var _0x2205bd=_0x290ef0[_0x20aecb(0x5b5)]['split']('|'),_0x486256=-0x31*-0xbb+0x241*-0xf+-0x1fc;while(!![]){switch(_0x2205bd[_0x486256++]){case'0':_0x12f6fb[_0x20aecb(0x7b5)+'dChil'+'d'](_0x3931c9);continue;case'1':requestAnimationFrame(()=>_0x3931c9[_0x20aecb(0x577)+_0x20aecb(0x2e1)][_0x20aecb(0x697)](_0x20aecb(0x49c)));continue;case'2':var _0x1ec1ca=document['creat'+'eElem'+_0x20aecb(0x5f3)](_0x290ef0[_0x20aecb(0x62a)]);continue;case'3':_0x3931c9=_0x290ef0['cZnCR'](_0x5054dc);continue;case'4':_0x1ec1ca['textC'+_0x20aecb(0x4e3)+'t']=_0x415c66;continue;case'5':_0x12f6fb[_0x20aecb(0x7b5)+_0x20aecb(0x622)+'d'](_0x1ec1ca);continue;}break;}}else{var _0x23899e=_0x1ee86b[_0x20aecb(0x6bb)+_0x20aecb(0x2cc)+'ent'](_0x20aecb(0x333));return _0x23899e['class'+_0x20aecb(0x686)]=_0x2e9f12[_0x20aecb(0x6bf)]('sk-no'+'te',_0x3eb600?_0x2e9f12[_0x20aecb(0x62c)]:''),_0x23899e['textC'+'onten'+'t']=_0x186492,_0x23899e;}}_0x3931c9[_0x20aecb(0x577)+_0x20aecb(0x2e1)][_0x20aecb(0x1fc)+'e'](_0x290ef0['WpbWk'],_0x5c461e);}function _0x45ed21(){var _0x103e4b=_0x507395,_0x715021={'NNugq':_0x290ef0['RglpR']};_0x290ef0['MyDeb']('ZJXBL',_0x103e4b(0x563))?_0x1f355b(_0x33c037,_0x3125bc,_0x573ceb,_0x715021[_0x103e4b(0x774)]):_0x290ef0[_0x103e4b(0x285)](_0x5169ba,!_0x20b355);}function _0x5054dc(){var _0x4bdf41=_0x507395,_0x2008c2={'yjSri':function(_0x13cdbe,_0x341861){return _0x290ef0['XZqvP'](_0x13cdbe,_0x341861);},'kJeUu':_0x290ef0['bleKm'],'fEZTy':_0x290ef0[_0x4bdf41(0x3d3)],'AqBQc':'.sk-m'+_0x4bdf41(0x6e5),'DMSoW':_0x290ef0[_0x4bdf41(0x399)],'SQQJk':_0x290ef0['lRBHA'],'vdnhh':function(_0x5f1654,_0x3c9b6d){var _0x5ee7fc=_0x4bdf41;return _0x290ef0[_0x5ee7fc(0x4ac)](_0x5f1654,_0x3c9b6d);},'fCJHO':function(_0x1a9221,_0x44401f){var _0x142940=_0x4bdf41;return _0x290ef0[_0x142940(0x667)](_0x1a9221,_0x44401f);},'yKQKS':_0x4bdf41(0x74a)+'ks\x20ar'+'med\x20('+_0x4bdf41(0x76b)+_0x4bdf41(0x58f),'ytTdx':_0x290ef0['KBJDh'],'oowPY':'\x20|\x20sh'+_0x4bdf41(0x6ae)+'\x20','kSkdh':'held','HYqcf':_0x4bdf41(0x1eb)+'vemen'+'t\x20','iiaQC':_0x4bdf41(0x5f4),'VNDUj':_0x4bdf41(0x6d8)+_0x4bdf41(0x2b8)+'NG\x20-\x20'+_0x4bdf41(0x4df)+_0x4bdf41(0x295)+_0x4bdf41(0x486)+_0x4bdf41(0x2d0)+_0x4bdf41(0x3c4)+'he\x20us'+_0x4bdf41(0x757)+'ipt)'},_0xe43595=document['creat'+_0x4bdf41(0x2cc)+_0x4bdf41(0x5f3)](_0x290ef0[_0x4bdf41(0x758)]);_0xe43595['class'+_0x4bdf41(0x686)]='mn-pa'+'nel';var _0x38b096=document['creat'+'eElem'+_0x4bdf41(0x5f3)](_0x290ef0[_0x4bdf41(0x6d6)]);_0x38b096[_0x4bdf41(0x577)+'Name']='mn-si'+'de';var _0x17f5ee=document['creat'+_0x4bdf41(0x2cc)+_0x4bdf41(0x5f3)](_0x290ef0['jxtnO']);_0x17f5ee[_0x4bdf41(0x577)+_0x4bdf41(0x686)]=_0x290ef0[_0x4bdf41(0x7ac)],_0x17f5ee[_0x4bdf41(0x4cc)+'HTML']=_0x4bdf41(0x708)+_0x4bdf41(0x21e)+_0x4bdf41(0x3d5)+_0x4bdf41(0x7bf)+_0x4bdf41(0x2a8)+'class'+_0x4bdf41(0x6b5)+'logo-'+_0x4bdf41(0x3a3)+_0x4bdf41(0x760)+'\x20d=\x22M'+_0x4bdf41(0x3fc)+_0x4bdf41(0x656)+_0x4bdf41(0x225)+'4-4.5'+_0x4bdf41(0x551)+_0x4bdf41(0x6b3)+_0x4bdf41(0x604)+'8-4.5'+_0x4bdf41(0x4e2)+_0x4bdf41(0x44a)+_0x4bdf41(0x64a)+_0x4bdf41(0x5a7)+_0x4bdf41(0x3de)+_0x4bdf41(0x3f3)+_0x4bdf41(0x2eb)+'fill='+_0x4bdf41(0x52b)+'\x22\x20str'+'oke=\x22'+'#ff6b'+_0x4bdf41(0x223)+_0x4bdf41(0x6be)+_0x4bdf41(0x2d4)+_0x4bdf41(0x4e6)+'\x20stro'+_0x4bdf41(0x743)+_0x4bdf41(0x1fb)+'=\x22rou'+'nd\x22\x20s'+'troke'+'-line'+_0x4bdf41(0x482)+_0x4bdf41(0x5db)+_0x4bdf41(0x2cf)+_0x4bdf41(0x64b)+'e\x20cx='+'\x2212\x22\x20'+_0x4bdf41(0x33f)+'0\x22\x20r='+_0x4bdf41(0x2f7)+'\x20fill'+_0x4bdf41(0x4b3)+_0x4bdf41(0x4dc)+'/></s'+_0x4bdf41(0x59b),_0x38b096[_0x4bdf41(0x7b5)+_0x4bdf41(0x622)+'d'](_0x17f5ee);var _0x290775=document['creat'+'eElem'+'ent'](_0x4bdf41(0x333));_0x290775[_0x4bdf41(0x577)+_0x4bdf41(0x686)]=_0x290ef0['tRhCq'];var _0x58d8b2=document['creat'+_0x4bdf41(0x2cc)+'ent'](_0x290ef0['fLtGU']);_0x58d8b2[_0x4bdf41(0x577)+'Name']='mn-to'+'p';var _0x415dbf=document[_0x4bdf41(0x6bb)+'eElem'+_0x4bdf41(0x5f3)](_0x290ef0[_0x4bdf41(0x758)]);_0x415dbf[_0x4bdf41(0x577)+'Name']=_0x290ef0[_0x4bdf41(0x672)];var _0x240582=document['creat'+_0x4bdf41(0x2cc)+'ent']('h2');_0x240582[_0x4bdf41(0x577)+_0x4bdf41(0x686)]=_0x290ef0[_0x4bdf41(0x589)],_0x240582['textC'+_0x4bdf41(0x4e3)+'t']='Sakur'+_0x4bdf41(0x77b)+'r';var _0x5e41b5=document['creat'+_0x4bdf41(0x2cc)+_0x4bdf41(0x5f3)]('small');_0x5e41b5[_0x4bdf41(0x577)+_0x4bdf41(0x686)]=_0x290ef0[_0x4bdf41(0x759)],_0x5e41b5[_0x4bdf41(0x2c9)+'onten'+'t']=_0x290ef0[_0x4bdf41(0x43d)],_0x415dbf[_0x4bdf41(0x7b5)+'d'](_0x240582,_0x5e41b5);var _0x3082ff=document['creat'+_0x4bdf41(0x2cc)+'ent'](_0x290ef0['fYxnH']);_0x3082ff[_0x4bdf41(0x411)]='butto'+'n',_0x3082ff[_0x4bdf41(0x577)+'Name']=_0x4bdf41(0x5e9)+'ose',_0x3082ff['title']='Close',_0x3082ff['inner'+_0x4bdf41(0x3dc)]=_0x290ef0[_0x4bdf41(0x34b)],_0x3082ff['oncli'+'ck']=()=>_0x5169ba(![]),_0x58d8b2['appen'+'d'](_0x415dbf,_0x3082ff);var _0x38d5bd=document[_0x4bdf41(0x6bb)+_0x4bdf41(0x2cc)+'ent']('div');_0x38d5bd['class'+_0x4bdf41(0x686)]=_0x290ef0[_0x4bdf41(0x268)],_0x290775['appen'+'d'](_0x58d8b2,_0x38d5bd),_0xe43595[_0x4bdf41(0x7b5)+'d'](_0x38b096,_0x290775);var _0x4dfa95=new Map();for(var _0xf68a58 of _0x2a6b0c){var _0x2050df=('0|5|2'+_0x4bdf41(0x415)+_0x4bdf41(0x7a6))[_0x4bdf41(0x4af)]('|'),_0x224131=0x1*-0x22a4+-0x15e+-0x16*-0x1a3;while(!![]){switch(_0x2050df[_0x224131++]){case'0':var _0x34e271=document[_0x4bdf41(0x6bb)+_0x4bdf41(0x2cc)+_0x4bdf41(0x5f3)]('butto'+'n');continue;case'1':_0x4dfa95[_0x4bdf41(0x36c)](_0xf68a58['id'],_0x34e271);continue;case'2':_0x34e271['class'+_0x4bdf41(0x686)]=_0x4bdf41(0x513)+'b';continue;case'3':_0x34e271['oncli'+'ck']=(_0x47e37c=>()=>_0x4ba2b5(_0x47e37c))(_0xf68a58['id']);continue;case'4':_0x34e271['title']=_0xf68a58[_0x4bdf41(0x24e)];continue;case'5':_0x34e271[_0x4bdf41(0x411)]=_0x290ef0[_0x4bdf41(0x30c)];continue;case'6':_0x34e271[_0x4bdf41(0x4cc)+_0x4bdf41(0x3dc)]=_0x4bdf41(0x28d)+'l>'+_0xf68a58['label']+_0x290ef0[_0x4bdf41(0x252)];continue;case'7':_0x38b096[_0x4bdf41(0x7b5)+_0x4bdf41(0x622)+'d'](_0x34e271);continue;}break;}}function _0x4ba2b5(_0x815ce1){var _0x2d0318=_0x4bdf41;_0x1d19c0[_0x2d0318(0x292)]=_0x815ce1,_0x2e9f12['hdcia'](_0x39cb94);var _0x46bc63=_0x2a6b0c[_0x2d0318(0x5c0)](_0x459d6b=>_0x459d6b['id']===_0x815ce1)||_0x2a6b0c[0x8a2+-0x1*-0x126d+-0x1b0f];_0x240582['textC'+_0x2d0318(0x4e3)+'t']=_0x2d0318(0x571)+'a\x20Kou'+_0x2d0318(0x374)+_0x46bc63[_0x2d0318(0x24e)];for(var [_0x415809,_0x4615cd]of _0x4dfa95)_0x4615cd[_0x2d0318(0x577)+_0x2d0318(0x2e1)]['toggl'+'e'](_0x2e9f12['aBJZO'],_0x2e9f12[_0x2d0318(0x42e)](_0x415809,_0x815ce1));_0x38d5bd['repla'+'ceChi'+_0x2d0318(0x3b6)](..._0x2e9f12[_0x2d0318(0x768)](_0x4b8131,_0x815ce1));}return _0x4ba2b5(_0x1d19c0[_0x4bdf41(0x292)]||_0x290ef0['hBuqm']),setInterval(()=>{var _0x184166=_0x4bdf41;if(!_0x20b355)return;var _0x40d364=_0x38d5bd[_0x184166(0x40e)+_0x184166(0x5f6)];for(var _0x39cfaf=0x3*-0xc7c+0x1e26*0x1+0x74e;_0x39cfaf<_0x40d364[_0x184166(0x427)+'h'];_0x39cfaf++){if(_0x2008c2[_0x184166(0x35a)](_0x2008c2['kJeUu'],_0x2008c2['fEZTy'])){var _0xfdce37=_0x40d364[_0x39cfaf]['query'+'Selec'+'tor'](_0x2008c2['AqBQc']);_0xfdce37&&(_0xfdce37['textC'+'onten'+'t'][_0x184166(0x5af)+'Of'](_0x184166(0x27e))===-0x299*-0xb+-0x773+0x10*-0x152||_0xfdce37[_0x184166(0x2c9)+'onten'+'t'][_0x184166(0x5af)+'Of'](_0x2008c2[_0x184166(0x6cb)])===0x2483+-0x1b1a*0x1+-0x969)&&('XHuEt'!==_0x2008c2[_0x184166(0x588)]?_0xfdce37['textC'+'onten'+'t']=_0x591997['safeM'+'ode']?_0x184166(0x507)+_0x184166(0x447)+_0x184166(0x742)+'rlay\x20'+'only,'+_0x184166(0x5c5)+_0x184166(0x420)+_0x184166(0x3ed)+_0x184166(0x51d)+'\x20exit'+')':_0x591997[_0x184166(0x236)]?_0x2008c2[_0x184166(0x384)](_0x2008c2[_0x184166(0x384)](_0x184166(0x6d8)+_0x184166(0x7c8)+'\x20'+(_0x591997['hooks'+'Total']?_0x2008c2[_0x184166(0x494)](_0x2008c2['vdnhh'](_0x591997[_0x184166(0x568)+'Ok'],'/'),_0x591997[_0x184166(0x568)+_0x184166(0x3e6)])+('\x20hook'+'s'):_0x2008c2[_0x184166(0x22f)])+('\x20|\x20ga'+_0x184166(0x41b)),_0x591997['gameL'+'oaded']?_0x2008c2['ytTdx']:'loadi'+'ng'),_0x2008c2[_0x184166(0x7bb)])+(_0x591997[_0x184166(0x60a)+_0x184166(0x50d)]?_0x2008c2['kSkdh']:'none')+_0x2008c2[_0x184166(0x590)]+(_0x591997[_0x184166(0x56b)+'ents']?'held':_0x2008c2['iiaQC'])+(_0x591997['lastE'+'rror']?'\x20|\x20ER'+'R:\x20'+_0x591997[_0x184166(0x301)+'rror']:''):_0x2008c2['VNDUj']:_0x354996=_0x30826d[_0x184166(0x29e)](_0x419202[_0x184166(0x5e1)+'em'](_0x184166(0x34c)+_0x184166(0x5d4)+_0x184166(0x1fe)+'v1')||'{}'));}else return _0x3e6dc0[_0x184166(0x48f)]('[saku'+'ra-ko'+'ur]\x20h'+_0x184166(0x691)+'eg\x20fa'+'iled:',_0x5e6a3f,_0x4442cc&&_0x1f466b[_0x184166(0x203)+'ge']),null;}},-0x1*0x2686+0x1b80+0xeee*0x1),_0xe43595;}var _0x415c66=_0x507395(0x4d3)+_0x507395(0x55f)+_0x507395(0x506)+_0x507395(0x709)+_0x507395(0x5de)+';\x20}\x0a\x20'+_0x507395(0x276)+'{\x20box'+'-sizi'+_0x507395(0x6c7)+_0x507395(0x4ab)+'-box;'+'\x20marg'+_0x507395(0x4f6)+_0x507395(0x549)+_0x507395(0x7b6)+_0x507395(0x638)+_0x507395(0x57b)+'r\x22,\x20\x22'+'Segoe'+'\x20UI\x22,'+_0x507395(0x511)+_0x507395(0x3f0)+',\x20san'+'s-ser'+_0x507395(0x503)+_0x507395(0x4d3)+'.mn-p'+'anel\x20'+_0x507395(0x438)+_0x507395(0x705)+_0x507395(0x2e4)+'olute'+';\x20rig'+_0x507395(0x5eb)+_0x507395(0x348)+_0x507395(0x2a7)+_0x507395(0x40a)+_0x507395(0x231)+_0x507395(0x765)+'\x20min('+_0x507395(0x576)+_0x507395(0x409)+_0x507395(0x3d7)+'vw\x20-\x20'+_0x507395(0x51c)+');\x20ma'+_0x507395(0x496)+_0x507395(0x493)+'min(4'+_0x507395(0x520)+'\x20calc'+'(100v'+_0x507395(0x39e)+'8px))'+';\x0a\x20\x20\x20'+_0x507395(0x3c2)+'splay'+':\x20fle'+_0x507395(0x50a)+_0x507395(0x263)+_0x507395(0x206)+'addin'+'g:\x2010'+_0x507395(0x3cd)+_0x507395(0x4ab)+'-radi'+_0x507395(0x57d)+_0x507395(0x621)+_0x507395(0x569)+'er-ev'+_0x507395(0x219)+_0x507395(0x791)+_0x507395(0x619)+_0x507395(0x620)+_0x507395(0x6c6)+'und:\x20'+_0x507395(0x62b)+'24,17'+',21,.'+_0x507395(0x3e9)+_0x507395(0x799)+'rop-f'+_0x507395(0x64c)+_0x507395(0x207)+'r(22p'+_0x507395(0x515)+'turat'+_0x507395(0x256)+'%);\x20-'+_0x507395(0x39d)+_0x507395(0x4a4)+'kdrop'+_0x507395(0x750)+'er:\x20b'+_0x507395(0x715)+_0x507395(0x62e)+_0x507395(0x22e)+_0x507395(0x410)+_0x507395(0x3cb)+_0x507395(0x4d3)+_0x507395(0x450)+'-shad'+_0x507395(0x65d)+_0x507395(0x694)+_0x507395(0x215)+_0x507395(0x541)+'55,25'+_0x507395(0x3d2)+_0x507395(0x4bc)+_0x507395(0x769)+_0x507395(0x4f2)+'1px\x200'+'\x20rgba'+'(255,'+'255,2'+_0x507395(0x487)+_0x507395(0x6c8)+_0x507395(0x623)+_0x507395(0x2b4)+'\x20rgba'+'(0,0,'+'0,.55'+_0x507395(0x38f)+_0x507395(0x72a)+_0x507395(0x42d)+'y:\x200;'+'\x20tran'+_0x507395(0x73b)+_0x507395(0x471)+_0x507395(0x48a)+_0x507395(0x4d2)+_0x507395(0x5fa)+_0x507395(0x569)+_0x507395(0x658)+_0x507395(0x219)+_0x507395(0x56e)+_0x507395(0x38d)+_0x507395(0x3c7)+'on:\x20o'+_0x507395(0x42d)+_0x507395(0x1e8)+'s\x20eas'+_0x507395(0x6f3)+_0x507395(0x23c)+_0x507395(0x2b7)+_0x507395(0x41f)+_0x507395(0x49f)+_0x507395(0x401)+'(.22,'+_0x507395(0x222)+',1);\x0a'+_0x507395(0x490)+_0x507395(0x64e)+_0x507395(0x47b)+_0x507395(0x5b4)+';\x20fon'+'t-siz'+'e:\x2013'+_0x507395(0x6cd)+_0x507395(0x4d3)+'.mn-p'+_0x507395(0x52e)+'shown'+'\x20{\x20op'+_0x507395(0x2da)+':\x201;\x20'+_0x507395(0x421)+'form:'+'\x20none'+_0x507395(0x2e6)+'nter-'+_0x507395(0x27b)+_0x507395(0x396)+'to;\x20}'+'\x0a\x20\x20\x20\x20'+_0x507395(0x564)+_0x507395(0x74d)+_0x507395(0x444)+'lay:\x20'+'flex;'+'\x20flex'+'-dire'+_0x507395(0x75e)+':\x20col'+_0x507395(0x6cf)+_0x507395(0x636)+_0x507395(0x2d1)+_0x507395(0x7d5)+_0x507395(0x4b5)+_0x507395(0x5f0)+'\x204px;'+_0x507395(0x378)+'h:\x2062'+_0x507395(0x2d2)+_0x507395(0x76c)+'none;'+_0x507395(0x7a4)+_0x507395(0x262)+_0x507395(0x405)+('0;\x20bo'+_0x507395(0x484)+'radiu'+'s:\x2016'+'px;\x0a\x20'+_0x507395(0x490)+'backg'+_0x507395(0x7af)+_0x507395(0x567)+'a(255'+_0x507395(0x25d)+_0x507395(0x4fc)+'025);'+'\x20box-'+_0x507395(0x274)+'w:\x20in'+_0x507395(0x416)+'\x200\x200\x20'+_0x507395(0x215)+'gba(2'+'55,25'+'5,255'+',.05)'+';\x20}\x0a\x20'+_0x507395(0x648)+_0x507395(0x3f1)+'o\x20{\x20d'+_0x507395(0x28e)+_0x507395(0x7b0)+_0x507395(0x4cb)+'lace-'+_0x507395(0x4f4)+_0x507395(0x5fb)+_0x507395(0x453)+'width'+_0x507395(0x77d)+'x;\x20he'+'ight:'+'\x2032px'+';\x20}\x0a\x20'+_0x507395(0x648)+'n-log'+_0x507395(0x249)+_0x507395(0x246)+'dth:\x20'+_0x507395(0x718)+_0x507395(0x2ea)+_0x507395(0x5eb)+_0x507395(0x4fa)+_0x507395(0x303)+'low:\x20'+'visib'+'le;\x20f'+_0x507395(0x64c)+_0x507395(0x3e0)+_0x507395(0x398)+'dow(0'+_0x507395(0x243)+_0x507395(0x6ac)+_0x507395(0x661)+_0x507395(0x79c)+'157,.'+_0x507395(0x2e5)+_0x507395(0x210)+_0x507395(0x6a3)+_0x507395(0x3d4)+_0x507395(0x444)+'lay:\x20'+'flex;'+_0x507395(0x37b)+_0x507395(0x5c8)+_0x507395(0x266)+'enter'+';\x20jus'+_0x507395(0x7be)+_0x507395(0x4ec)+_0x507395(0x4d8)+_0x507395(0x6a6)+_0x507395(0x572)+_0x507395(0x307)+_0x507395(0x621)+_0x507395(0x7cb)+_0x507395(0x241)+_0x507395(0x3cd)+'order'+_0x507395(0x56a)+_0x507395(0x3e8)+_0x507395(0x79e)+_0x507395(0x38c)+'10px;'+'\x0a\x20\x20\x20\x20'+_0x507395(0x6b2)+'kgrou'+'nd:\x20t'+'ransp'+_0x507395(0x67c)+';\x20col'+'or:\x20r'+_0x507395(0x541)+'46,23'+'8,242'+_0x507395(0x784)+'\x20curs'+_0x507395(0x4b4)+_0x507395(0x433)+'r;\x20fo'+'nt-si'+_0x507395(0x329)+_0x507395(0x4de)+_0x507395(0x612)+_0x507395(0x3c8)+_0x507395(0x205)+_0x507395(0x745)+_0x507395(0x463)+_0x507395(0x513)+_0x507395(0x406)+'er\x20{\x20'+_0x507395(0x729)+':\x20rgb'+'a(246'+_0x507395(0x61d)+_0x507395(0x6e3)+'8);\x20}'+_0x507395(0x4d3)+_0x507395(0x37f)+_0x507395(0x426)+_0x507395(0x21a)+_0x507395(0x538)+_0x507395(0x3fb)+_0x507395(0x37a)+_0x507395(0x45f)+_0x507395(0x6c6)+_0x507395(0x451)+_0x507395(0x62b)+'255,1'+_0x507395(0x54f)+_0x507395(0x79a)+_0x507395(0x54c)+_0x507395(0x648)+_0x507395(0x474)+_0x507395(0x566)+_0x507395(0x76c)+_0x507395(0x2b2)+'n-wid'+'th:\x200'+_0x507395(0x7c5)+_0x507395(0x739)+_0x507395(0x6ab)+';\x20fle'+_0x507395(0x5cc)+'ectio'+'n:\x20co'+_0x507395(0x6ce)+_0x507395(0x3bc)+'\x20\x20.mn'+_0x507395(0x32c)+'{\x20dis'+_0x507395(0x739)+_0x507395(0x6ab)+_0x507395(0x78e)+_0x507395(0x723)+_0x507395(0x3e4)+'cente'+'r;\x20ga'+'p:\x2012'+_0x507395(0x206)+'addin'+_0x507395(0x1f1)+_0x507395(0x650)+_0x507395(0x5dc)+_0x507395(0x7a2)+_0x507395(0x478)+'ect:\x20'+_0x507395(0x3c0)+_0x507395(0x3bc)+'\x20\x20.mn'+'-titl'+_0x507395(0x448)+_0x507395(0x22d)+'\x201;\x20m'+_0x507395(0x4c0)+_0x507395(0x2dc)+_0x507395(0x745)+'\x20\x20\x20\x20.'+_0x507395(0x23b)+_0x507395(0x4f0)+_0x507395(0x71d)+'e:\x2017'+_0x507395(0x2d2)+_0x507395(0x689)+'eight'+':\x20650'+';\x20}\x0a\x20'+_0x507395(0x648)+'n-sub'+_0x507395(0x58b)+_0x507395(0x65c)+_0x507395(0x329)+_0x507395(0x461)+'opaci')+(_0x507395(0x773)+'4;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x507395(0x5e9)+'ose\x20{'+'\x20disp'+_0x507395(0x788)+'grid;'+'\x20plac'+'e-ite'+'ms:\x20c'+'enter'+_0x507395(0x572)+'th:\x202'+_0x507395(0x5ab)+_0x507395(0x7cb)+_0x507395(0x441)+_0x507395(0x3cd)+_0x507395(0x4ab)+_0x507395(0x56a)+_0x507395(0x3e8)+_0x507395(0x79e)+'ius:\x20'+'8px;\x20'+_0x507395(0x284)+'round'+_0x507395(0x471)+'nspar'+_0x507395(0x20e)+'color'+_0x507395(0x429)+_0x507395(0x2df)+'\x20opac'+'ity:\x20'+_0x507395(0x4ca)+_0x507395(0x70b)+'r:\x20po'+'inter'+';\x20}\x0a\x20'+_0x507395(0x648)+_0x507395(0x5b6)+'se:ho'+_0x507395(0x419)+_0x507395(0x47d)+_0x507395(0x4ce)+_0x507395(0x70c)+_0x507395(0x6c6)+'und:\x20'+'rgba('+_0x507395(0x432)+_0x507395(0x25e)+_0x507395(0x54d)+_0x507395(0x313)+_0x507395(0x463)+_0x507395(0x5e9)+'ose\x20s'+_0x507395(0x6b6)+_0x507395(0x302)+':\x2014p'+_0x507395(0x5d6)+_0x507395(0x27d)+_0x507395(0x7c9)+_0x507395(0x290)+_0x507395(0x4bf)+_0x507395(0x6a2)+_0x507395(0x6be)+_0x507395(0x7cd)+_0x507395(0x688)+'olor;'+_0x507395(0x5ac)+_0x507395(0x458)+_0x507395(0x2dc)+'2;\x20st'+_0x507395(0x668)+_0x507395(0x497)+_0x507395(0x5a1)+'ound;'+_0x507395(0x3bc)+_0x507395(0x39c)+_0x507395(0x554)+_0x507395(0x5c4)+_0x507395(0x616)+_0x507395(0x370)+'-heig'+_0x507395(0x63a)+';\x20ove'+_0x507395(0x68e)+_0x507395(0x4ee)+_0x507395(0x381)+'displ'+_0x507395(0x479)+_0x507395(0x245)+_0x507395(0x732)+'templ'+_0x507395(0x66f)+_0x507395(0x75a)+_0x507395(0x3eb)+_0x507395(0x509)+'auto-'+_0x507395(0x20f)+'\x20minm'+_0x507395(0x3f6)+_0x507395(0x35c)+_0x507395(0x657)+_0x507395(0x78e)+'gn-it'+'ems:\x20'+'start'+_0x507395(0x78e)+_0x507395(0x712)+_0x507395(0x736)+':\x20sta'+'rt;\x20g'+_0x507395(0x483)+_0x507395(0x4de)+_0x507395(0x345)+'ng:\x200'+_0x507395(0x3ad)+'6px\x200'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-col'+'s::-w'+_0x507395(0x31e)+_0x507395(0x609)+_0x507395(0x7cf)+_0x507395(0x246)+_0x507395(0x2dc)+_0x507395(0x5ab)+_0x507395(0x210)+_0x507395(0x6a3)+'cols:'+':-web'+_0x507395(0x3ba)+'croll'+'bar-t'+_0x507395(0x58c)+_0x507395(0x653)+_0x507395(0x617)+_0x507395(0x60b)+_0x507395(0x541)+'55,25'+_0x507395(0x3d2)+_0x507395(0x3bb)+';\x20bor'+_0x507395(0x598)+_0x507395(0x254)+_0x507395(0x66e)+_0x507395(0x54c)+_0x507395(0x2cd)+'k-car'+'d\x20{\x20b'+_0x507395(0x4ab)+_0x507395(0x437)+'us:\x201'+_0x507395(0x621)+_0x507395(0x284)+'round'+':\x20rgb'+_0x507395(0x661)+_0x507395(0x25d)+'255,.'+'025);'+_0x507395(0x224)+_0x507395(0x274)+'w:\x20in'+_0x507395(0x416)+'\x200\x200\x20'+_0x507395(0x215)+_0x507395(0x541)+_0x507395(0x25e)+_0x507395(0x3d2)+',.05)'+_0x507395(0x54c)+'\x20\x20\x20.s'+_0x507395(0x6f0)+'d.on\x20'+_0x507395(0x653)+_0x507395(0x617)+'nd:\x20r'+_0x507395(0x541)+_0x507395(0x25e)+_0x507395(0x3d2)+',.04)'+';\x20box'+_0x507395(0x687)+_0x507395(0x763)+_0x507395(0x320)+'0\x200\x200'+_0x507395(0x423)+_0x507395(0x62b)+_0x507395(0x240)+_0x507395(0x54f)+'7,.28'+');\x20}\x0a'+_0x507395(0x463)+'sk-ca'+_0x507395(0x371)+_0x507395(0x599)+'displ')+(_0x507395(0x2f4)+_0x507395(0x36d)+'align'+'-item'+_0x507395(0x7d5)+_0x507395(0x4b5)+_0x507395(0x5f0)+_0x507395(0x529)+_0x507395(0x7a4)+'ing:\x20'+_0x507395(0x663)+_0x507395(0x3a0)+_0x507395(0x3bc)+_0x507395(0x5bb)+'-card'+_0x507395(0x796)+'e\x20{\x20f'+'lex:\x20'+_0x507395(0x2b2)+'n-wid'+_0x507395(0x480)+_0x507395(0x54c)+'\x20\x20\x20.s'+'k-car'+_0x507395(0x297)+_0x507395(0x26e)+_0x507395(0x685)+_0x507395(0x4f0)+_0x507395(0x71d)+_0x507395(0x6b8)+'px;\x20f'+'ont-w'+_0x507395(0x259)+_0x507395(0x66a)+_0x507395(0x3ef)+_0x507395(0x336)+'gba(2'+'46,23'+_0x507395(0x34e)+_0x507395(0x67a)+_0x507395(0x54c)+_0x507395(0x2cd)+'k-car'+'d.on\x20'+'.sk-c'+'ard-t'+_0x507395(0x6d4)+'stron'+_0x507395(0x365)+_0x507395(0x354)+'\x20#fff'+_0x507395(0x79d)+_0x507395(0x210)+'\x20.sk-'+_0x507395(0x76a)+'\x20{\x20pa'+_0x507395(0x7ad)+_0x507395(0x230)+_0x507395(0x2fd)+'0px;\x20'+_0x507395(0x210)+_0x507395(0x527)+_0x507395(0x65b)+_0x507395(0x58b)+_0x507395(0x65c)+_0x507395(0x329)+_0x507395(0x461)+_0x507395(0x530)+'ty:\x20.'+_0x507395(0x659)+'rgin-'+'botto'+'m:\x206p'+'x;\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-ct'+_0x507395(0x454)+'ispla'+'y:\x20fl'+'ex;\x20a'+'lign-'+'items'+_0x507395(0x5fb)+'ter;\x20'+_0x507395(0x635)+'8px;\x20'+'paddi'+'ng:\x204'+_0x507395(0x335)+_0x507395(0x528)+'-size'+_0x507395(0x2ce)+'5px;\x20'+'}\x0a\x20\x20\x20'+_0x507395(0x527)+'label'+_0x507395(0x5c4)+_0x507395(0x616)+_0x507395(0x3ef)+_0x507395(0x336)+_0x507395(0x541)+_0x507395(0x5a3)+'8,242'+_0x507395(0x4ae)+_0x507395(0x54c)+_0x507395(0x2cd)+_0x507395(0x289)+'t\x20{\x20d'+_0x507395(0x28e)+_0x507395(0x56d)+_0x507395(0x2c6)+_0x507395(0x612)+_0x507395(0x36e)+'\x2010px'+_0x507395(0x641)+_0x507395(0x34a)+_0x507395(0x431)+'}\x0a\x20\x20\x20'+_0x507395(0x527)+_0x507395(0x264)+_0x507395(0x2c5)+_0x507395(0x4c9)+'on:\x20r'+_0x507395(0x79f)+_0x507395(0x611)+_0x507395(0x765)+'\x2026px'+_0x507395(0x3f5)+'ght:\x20'+'14px;'+'\x20bord'+'er:\x200'+';\x20bor'+_0x507395(0x598)+'adius'+':\x2099p'+_0x507395(0x39b)+_0x507395(0x6c6)+_0x507395(0x451)+_0x507395(0x62b)+_0x507395(0x432)+_0x507395(0x25e)+'5,.07'+_0x507395(0x3df)+_0x507395(0x32b)+'\x20poin'+_0x507395(0x453)+_0x507395(0x22d)+_0x507395(0x56e)+';\x20}\x0a\x20'+_0x507395(0x2cd)+_0x507395(0x4b1)+_0x507395(0x5aa)+'after'+'\x20{\x20co'+_0x507395(0x736)+_0x507395(0x23f)+_0x507395(0x7a1)+'tion:'+'\x20abso'+_0x507395(0x32a)+_0x507395(0x704)+_0x507395(0x700)+'\x20left'+_0x507395(0x3c6)+_0x507395(0x572)+_0x507395(0x674)+_0x507395(0x6c1)+'eight'+_0x507395(0x328)+_0x507395(0x25a)+'der-r'+'adius'+_0x507395(0x603)+';\x20bac'+_0x507395(0x617)+_0x507395(0x60b)+_0x507395(0x541)+_0x507395(0x25e)+_0x507395(0x3d2)+_0x507395(0x559)+_0x507395(0x38d)+'nsiti'+'on:\x20l'+'eft\x20.'+_0x507395(0x28a)+'ackgr'+_0x507395(0x3ae)+_0x507395(0x5df)+_0x507395(0x210)+'\x20.sk-'+_0x507395(0x264)+'h[ari'+'a-che'+'cked='+'\x22true'+_0x507395(0x2ef)+'backg'+'round'+_0x507395(0x567))+(_0x507395(0x661)+_0x507395(0x79c)+_0x507395(0x772)+_0x507395(0x592)+_0x507395(0x210)+'\x20.sk-'+'switc'+'h[ari'+'a-che'+'cked='+_0x507395(0x537)+_0x507395(0x57f)+_0x507395(0x640)+_0x507395(0x4cf)+'t:\x2015'+'px;\x20b'+'ackgr'+_0x507395(0x6f6)+_0x507395(0x21c)+_0x507395(0x21d)+_0x507395(0x210)+'\x20.sk-'+_0x507395(0x50c)+'\x20{\x20ba'+'ckgro'+_0x507395(0x451)+_0x507395(0x62b)+'255,2'+'55,25'+'5,.03'+'5);\x20b'+_0x507395(0x4ab)+_0x507395(0x56a)+_0x507395(0x3e8)+'r-rad'+'ius:\x20'+'6px;\x20'+_0x507395(0x729)+_0x507395(0x49e)+'eef2;'+'\x20padd'+_0x507395(0x262)+_0x507395(0x4c8)+_0x507395(0x2d2)+_0x507395(0x7a3)+'ize:\x20'+'11.5p'+_0x507395(0x7c6)+'tline'+':\x20non'+_0x507395(0x4d9)+_0x507395(0x519)+'dow:\x20'+_0x507395(0x32d)+'\x200\x200\x20'+_0x507395(0x584)+'\x20rgba'+_0x507395(0x534)+'255,2'+'55,.0'+'5);\x20}'+'\x0a\x20\x20\x20\x20'+'.sk-f'+'ield\x20'+_0x507395(0x4a9)+_0x507395(0x310)+_0x507395(0x238)+_0x507395(0x6f6)+'\x20#221'+_0x507395(0x775)+_0x507395(0x210)+'\x20.sk-'+_0x507395(0x3ab)+'\x20{\x20di'+'splay'+':\x20fle'+'x;\x20al'+'ign-i'+'tems:'+'\x20cent'+_0x507395(0x753)+_0x507395(0x639)+_0x507395(0x6cd)+'\x0a\x20\x20\x20\x20'+_0x507395(0x319)+'lider'+'\x20{\x20-w'+_0x507395(0x31e)+'-appe'+_0x507395(0x6d7)+_0x507395(0x5b7)+'ne;\x20a'+'ppear'+_0x507395(0x42b)+_0x507395(0x56e)+_0x507395(0x572)+_0x507395(0x717)+_0x507395(0x4de)+_0x507395(0x7cb)+'t:\x208p'+'x;\x20ba'+_0x507395(0x6c6)+_0x507395(0x451)+'trans'+_0x507395(0x2a6)+'t;\x20}\x0a'+'\x20\x20\x20\x20.'+_0x507395(0x38e)+'ider:'+':-web'+'kit-s'+'lider'+'-runn'+_0x507395(0x670)+_0x507395(0x3ce)+'\x20{\x20he'+'ight:'+'\x202px;'+_0x507395(0x435)+'er-ra'+_0x507395(0x51f)+_0x507395(0x373)+_0x507395(0x65e)+_0x507395(0x2ed)+_0x507395(0x5d5)+_0x507395(0x6aa)+'gradi'+_0x507395(0x5ae)+_0x507395(0x37a)+_0x507395(0x430)+_0x507395(0x75f)+_0x507395(0x42c)+_0x507395(0x5d2)+_0x507395(0x751)+',\x2050%'+_0x507395(0x7c7)+_0x507395(0x55c)+'repea'+'t,\x20rg'+_0x507395(0x338)+'5,255'+_0x507395(0x25d)+'.08);'+_0x507395(0x3bc)+'\x20\x20.sk'+_0x507395(0x699)+_0x507395(0x556)+_0x507395(0x39d)+'t-sli'+_0x507395(0x633)+'humb\x20'+'{\x20-we'+'bkit-'+_0x507395(0x69d)+_0x507395(0x7ab)+':\x20non'+'e;\x20wi'+_0x507395(0x2dc)+_0x507395(0x57a)+'heigh'+_0x507395(0x5a4)+_0x507395(0x293)+_0x507395(0x352)+'top:\x20'+_0x507395(0x23e)+_0x507395(0x435)+_0x507395(0x3be)+_0x507395(0x51f)+'\x2050%;'+_0x507395(0x65e)+'groun'+'d:\x20#f'+_0x507395(0x75f)+';\x20}\x0a\x20'+_0x507395(0x2cd)+_0x507395(0x61c)+_0x507395(0x58b)+'nt-si'+_0x507395(0x329)+_0x507395(0x461)+'font-'+'weigh'+_0x507395(0x7c2)+_0x507395(0x331)+'n-wid'+'th:\x202'+'8px;\x20'+_0x507395(0x2aa)+_0x507395(0x636)+':\x20rig'+_0x507395(0x7d2)+'olor:'+'\x20rgba'+'(246,'+_0x507395(0x629)+_0x507395(0x6f7)+_0x507395(0x313)+_0x507395(0x463)+'sk-co'+'lor\x20{')+(_0x507395(0x378)+'h:\x2034'+'px;\x20h'+_0x507395(0x259)+_0x507395(0x578)+_0x507395(0x730)+_0x507395(0x727)+'\x200;\x20b'+'order'+'-radi'+_0x507395(0x3c1)+'px;\x20b'+'ackgr'+_0x507395(0x6f6)+_0x507395(0x56e)+_0x507395(0x7ca)+_0x507395(0x2ca)+_0x507395(0x755)+_0x507395(0x71c)+_0x507395(0x547)+'nter;'+_0x507395(0x3bc)+'\x20\x20.sk'+'-note'+'\x20{\x20fo'+_0x507395(0x65c)+'ze:\x201'+'1px;\x20'+_0x507395(0x729)+_0x507395(0x567)+'a(246'+_0x507395(0x61d)+_0x507395(0x6e3)+_0x507395(0x684)+_0x507395(0x1fa)+'g:\x202p'+_0x507395(0x77a)+_0x507395(0x210)+_0x507395(0x527)+'note.'+_0x507395(0x357)+_0x507395(0x64e)+_0x507395(0x47b)+_0x507395(0x3b8)+_0x507395(0x54c)+_0x507395(0x2cd)+'k-btn'+_0x507395(0x506)+_0x507395(0x35e)+_0x507395(0x72f)+'flex-'+_0x507395(0x710)+_0x507395(0x25a)+_0x507395(0x4d7)+_0x507395(0x545)+_0x507395(0x484)+_0x507395(0x6b0)+'s:\x208p'+_0x507395(0x728)+'dding'+_0x507395(0x328)+_0x507395(0x7b3)+_0x507395(0x7b2)+_0x507395(0x617)+'nd:\x20#'+_0x507395(0x37a)+'d;\x20co'+'lor:\x20'+'#fff;'+_0x507395(0x528)+'-size'+_0x507395(0x2ce)+'5px;\x20'+_0x507395(0x612)+'weigh'+_0x507395(0x205)+_0x507395(0x403)+'rsor:'+_0x507395(0x665)+_0x507395(0x453)+_0x507395(0x210)+'\x20.sk-'+'btn:h'+_0x507395(0x6ef)+_0x507395(0x2f6)+'ter:\x20'+_0x507395(0x275)+'tness'+_0x507395(0x557)+';\x20}\x0a\x20'+'\x20\x20\x20');window['addEv'+'entLi'+_0x507395(0x4cd)+'r'](_0x290ef0[_0x507395(0x6a7)],_0x426637=>{var _0x4bf75f=_0x507395,_0x254a09={'ADbNh':function(_0x4177a6,_0x1014e4){return _0x4177a6+_0x1014e4;},'BgyyC':function(_0x542b3c,_0x16f0a8){var _0x6e344c=_0x2878;return _0x290ef0[_0x6e344c(0x649)](_0x542b3c,_0x16f0a8);},'AoIsA':function(_0x470c9f,_0xd1298e){return _0x290ef0['pIhqG'](_0x470c9f,_0xd1298e);},'xFjxl':_0x4bf75f(0x62b)+'255,1'+_0x4bf75f(0x54f)+_0x4bf75f(0x510)+'5)','oxkSA':'rgba('+'22,8,'+'16,0.'+'7)','gXwrC':function(_0x4a9317,_0x5e40ba){return _0x4a9317/_0x5e40ba;},'caeIU':function(_0x2c5767,_0x3f1f74){return _0x2c5767*_0x3f1f74;},'anekG':function(_0x4a4238,_0x5b3ac7){return _0x4a4238*_0x5b3ac7;},'hPjsm':function(_0x3a98d9,_0x4b620b){return _0x3a98d9*_0x4b620b;},'XuBda':function(_0x1bb5e9,_0x3e5758){return _0x1bb5e9*_0x3e5758;},'smeYj':function(_0x5a9c20,_0x335b7b){var _0xd6192b=_0x4bf75f;return _0x290ef0[_0xd6192b(0x3b0)](_0x5a9c20,_0x335b7b);},'iptTO':function(_0x11f8e7,_0x1623d4){return _0x290ef0['EGrnu'](_0x11f8e7,_0x1623d4);},'esSyJ':function(_0x525908,_0x2b310f){return _0x525908/_0x2b310f;},'hmFUL':function(_0x42624a,_0x2947c4,_0x3c3831,_0x4a8c26,_0x3c1346,_0x3798ff,_0x596888){var _0x4f4a73=_0x4bf75f;return _0x290ef0[_0x4f4a73(0x5a2)](_0x42624a,_0x2947c4,_0x3c3831,_0x4a8c26,_0x3c1346,_0x3798ff,_0x596888);},'sDckI':'KeyW','eTdQx':function(_0x44b1dc,_0xef3554){return _0x44b1dc+_0xef3554;},'WApJj':function(_0x32f2a6,_0x4d7a7a){return _0x290ef0['RVdjV'](_0x32f2a6,_0x4d7a7a);},'ZOudz':_0x4bf75f(0x213),'YPHcb':function(_0x323e2c,_0x4445bb){return _0x323e2c+_0x4445bb;},'QsZUh':'LMB','hrhrU':_0x4bf75f(0x296),'IWhRL':_0x290ef0['iBNCE'],'RVVrV':function(_0x36c264,_0x5608bb){var _0x1fe364=_0x4bf75f;return _0x290ef0[_0x1fe364(0x4f3)](_0x36c264,_0x5608bb);},'LAqbY':function(_0x52cb9d,_0x340c5e){var _0xc0a3b0=_0x4bf75f;return _0x290ef0[_0xc0a3b0(0x667)](_0x52cb9d,_0x340c5e);},'YsvTC':_0x290ef0[_0x4bf75f(0x267)],'LOnpY':function(_0x14af24,_0x423767){return _0x290ef0['anDWM'](_0x14af24,_0x423767);},'IyYaN':function(_0x1897ed,_0x4a1df5){return _0x290ef0['JtxQN'](_0x1897ed,_0x4a1df5);}};if(_0x290ef0['Uozmn']==='tdrBz'){var _0x3845d5=_0x57d5e9(_0x149333[_0x4bf75f(0x669)+'le'])||0x1*-0x1f34+-0x790+0x26c5,_0x155657=_0x254a09[_0x4bf75f(0x2db)](0x307*0xb+0x1*-0x14a7+-0x42c*0x3,_0x3845d5),_0x501637=(-0x6f5+0x2513+-0x1e1a)*_0x3845d5,_0x5adef8=_0x254a09[_0x4bf75f(0x581)](_0x155657,-0x44f*-0x8+0x60f*-0x1+0x5*-0x5ae)+_0x254a09[_0x4bf75f(0x6de)](_0x501637,0x1b46+-0x2279+0x735),_0x4cfd80=_0x254a09[_0x4bf75f(0x6e8)](_0x155657,-0x26e9+0xdcc+0x1920)+_0x254a09[_0x4bf75f(0x6e8)](_0x501637,-0x17fc+-0x1*0x223f+0x3a3d),_0x5985e8=_0x26eea9['ksPos'],_0x48cdea=_0x254a09[_0x4bf75f(0x794)](_0x5985e8,'br')?_0x254a09['iptTO'](_0x4a0bb4['right']-(0x16b7+-0x1712*0x1+0x6b),_0x5adef8):_0x529e5a['left']+(-0x1011+-0x64b+0x166c),_0x42bb69=_0x254a09['smeYj'](_0x5985e8,'ml')?_0x4be0be['top']+_0x392ae3['heigh'+'t']/(-0x25e2+-0x159*-0x13+0xc49)-_0x254a09['esSyJ'](_0x4cfd80,-0x2*0x134f+0x51d*-0x1+0x2bbd):_0x254a09[_0x4bf75f(0x257)](_0x3a34e6[_0x4bf75f(0x2a7)+'m']-_0x4cfd80,_0x5985e8==='bl'?0x16ee+-0x19b*-0x3+-0x1b5f:0x33*0x49+0x3af*-0x1+0x1*-0xa46),_0x36bdce=(_0x2dafee,_0x2ca4fc,_0xb5e02f,_0x2e931c,_0x4573f2,_0x1a994e,_0x3f364a)=>{var _0x15aabf=_0x4bf75f,_0x4b5612=(_0x15aabf(0x610)+'5|13|'+'7|12|'+_0x15aabf(0x2d7)+_0x15aabf(0x1ff)+_0x15aabf(0x2f2)+'|4|3|'+'11|10')['split']('|'),_0x45a335=0x1*0x317+-0xd2e+0xa17*0x1;while(!![]){switch(_0x4b5612[_0x45a335++]){case'0':_0x545619[_0x15aabf(0x3d6)]();continue;case'1':_0x36537d['fillS'+_0x15aabf(0x5a9)]=_0x1a7840?_0x15aabf(0x2dd):_0x15aabf(0x62b)+_0x15aabf(0x432)+'35,24'+_0x15aabf(0x3c5)+')';continue;case'2':_0x5e4687[_0x15aabf(0x376)+'lign']=_0x15aabf(0x470)+'r';continue;case'3':_0x3472da['fillT'+_0x15aabf(0x2f0)](_0x2dafee,_0xb5e02f+_0x4573f2/(-0xc3+0x1*-0x1b70+-0xf9*-0x1d),_0x254a09['ADbNh'](_0x2e931c,_0x1a994e/(0x40b*-0x3+-0x1d6c+0x298f))-(_0x3f364a?_0x254a09[_0x15aabf(0x67b)](-0xe9*-0x1f+0x1ee+-0x788*0x4,_0x3845d5):0x19*-0x1f+0x21a9+-0x51b*0x6));continue;case'4':_0x1f6a04[_0x15aabf(0x7a7)]=_0x254a09[_0x15aabf(0x4e4)](_0x15aabf(0x7d4)+_0x5925b4[_0x15aabf(0x7af)](_0x254a09[_0x15aabf(0x67b)](-0x27c+-0x1096*0x2+0x23b4,_0x3845d5)),_0x15aabf(0x28b)+_0x15aabf(0x2f1)+_0x15aabf(0x754)+'f,sys'+_0x15aabf(0x716)+_0x15aabf(0x711)+_0x15aabf(0x5c7)+'if');continue;case'5':_0x544292[_0x15aabf(0x35f)+'e']();continue;case'6':var _0x1a7840=_0x20ee74[_0x15aabf(0x47c)](_0x2ca4fc);continue;case'7':_0x51b7f3[_0x15aabf(0x34d)+_0x15aabf(0x5a9)]=_0x1a7840?_0x254a09[_0x15aabf(0x29c)]:_0x254a09['oxkSA'];continue;case'8':_0x5dec4d[_0x15aabf(0x35f)+_0x15aabf(0x6e1)+'e']=_0x1a7840?_0x51d10c:'rgba('+_0x15aabf(0x240)+'07,15'+_0x15aabf(0x68f)+'5)';continue;case'9':_0x1a7840&&(_0x564004[_0x15aabf(0x274)+_0x15aabf(0x309)+'r']=_0x417cff,_0x18cd52[_0x15aabf(0x274)+'wBlur']=-0x11*0xae+0x470+0x72c,_0x9ec1cb[_0x15aabf(0x738)](),_0x3cbe0c[_0x15aabf(0x274)+'wBlur']=0x22db*-0x1+0x2d5+0x1003*0x2);continue;case'10':_0x6419a[_0x15aabf(0x462)+'re']();continue;case'11':_0x3f364a&&(_0x53e195[_0x15aabf(0x7a7)]=_0x254a09['AoIsA'](_0x15aabf(0x602),_0x9c7932[_0x15aabf(0x7af)]((-0x8a*-0x40+-0x177a+-0xafd)*_0x3845d5))+('px\x20ui'+_0x15aabf(0x2f1)+_0x15aabf(0x754)+'f,sys'+_0x15aabf(0x716)+'i,san'+_0x15aabf(0x5c7)+'if'),_0x4ac45a[_0x15aabf(0x34d)+'tyle']=_0x1a7840?_0x15aabf(0x2dd):_0x15aabf(0x62b)+_0x15aabf(0x432)+_0x15aabf(0x6e0)+'0,0.5'+'5)',_0x354512['fillT'+_0x15aabf(0x2f0)](_0x3f364a,_0xb5e02f+_0x254a09['gXwrC'](_0x4573f2,0xc0d+-0x1bca+-0x1*-0xfbf),_0x254a09[_0x15aabf(0x4e4)](_0x2e931c+_0x254a09['gXwrC'](_0x1a994e,0x417*0x2+-0x7*0x403+0x6a3*0x3),_0x254a09[_0x15aabf(0x67b)](-0x1*-0x1136+-0x235a+-0x916*-0x2,_0x3845d5))));continue;case'12':_0xc3f65b['fill']();continue;case'13':if(_0xac7608['round'+'Rect'])_0x4e14d1[_0x15aabf(0x7af)+_0x15aabf(0x43b)](_0xb5e02f,_0x2e931c,_0x4573f2,_0x1a994e,_0x254a09[_0x15aabf(0x67b)](-0x23b9*0x1+0x1b83*0x1+0x6f*0x13,_0x3845d5));else _0x5a2965[_0x15aabf(0x24b)](_0xb5e02f,_0x2e931c,_0x4573f2,_0x1a994e);continue;case'14':_0x558122[_0x15aabf(0x33a)+_0x15aabf(0x7c1)+'ne']='middl'+'e';continue;case'15':_0x11df26['begin'+'Path']();continue;case'16':_0x2755a3['lineW'+_0x15aabf(0x33e)]=0xc70+-0x5*-0x572+-0x27a9;continue;}break;}};_0x254a09[_0x4bf75f(0x505)](_0x36bdce,'W',_0x254a09[_0x4bf75f(0x281)],_0x254a09[_0x4bf75f(0x735)](_0x254a09[_0x4bf75f(0x68b)](_0x48cdea,_0x155657),_0x501637),_0x42bb69,_0x155657,_0x155657),_0x36bdce('A',_0x4bf75f(0x7ba),_0x48cdea,_0x254a09[_0x4bf75f(0x6df)](_0x42bb69,_0x155657)+_0x501637,_0x155657,_0x155657),_0x254a09['hmFUL'](_0x36bdce,'S',_0x254a09['ZOudz'],_0x48cdea+_0x155657+_0x501637,_0x42bb69+_0x155657+_0x501637,_0x155657,_0x155657),_0x254a09['hmFUL'](_0x36bdce,'D',_0x4bf75f(0x7bd),_0x254a09[_0x4bf75f(0x4bd)](_0x48cdea,(_0x155657+_0x501637)*(0xf0*0x5+0x1*-0x2416+0x1f68)),_0x42bb69+_0x155657+_0x501637,_0x155657,_0x155657);var _0x44a338=_0x254a09[_0x4bf75f(0x73e)](_0x5adef8-_0x501637,0x1*0x2b3+0x4c7*-0x7+0x1ec0),_0x516f4b=_0x42bb69+(_0x155657+_0x501637)*(-0x21ff+0x113+-0x57d*-0x6);_0x36bdce(_0x254a09[_0x4bf75f(0x706)],_0x4bf75f(0x233)+'1',_0x48cdea,_0x516f4b,_0x44a338,_0x155657,_0x3f42ca[_0x4bf75f(0x2e9)]?_0x31edf5(-0xed8+-0x4dd+0x2*0x9db)+'\x20CPS':''),_0x36bdce(_0x254a09[_0x4bf75f(0x38a)],_0x254a09['IWhRL'],_0x254a09[_0x4bf75f(0x548)](_0x254a09['LAqbY'](_0x48cdea,_0x44a338),_0x501637),_0x516f4b,_0x44a338,_0x155657,_0xf4b790['ksCps']?_0x254a09['eTdQx'](_0x387a2b(-0xcb7+-0x1ed5+-0x3b*-0xbd),_0x254a09['YsvTC']):''),_0x254a09[_0x4bf75f(0x505)](_0x36bdce,'','Space',_0x48cdea,_0x254a09[_0x4bf75f(0x3f7)](_0x516f4b,_0x155657)+_0x501637,_0x5adef8,_0x254a09['IyYaN'](_0x155657,0x933+0x193f*0x1+-0x2272+0.45));}else _0x290ef0['OBRZj'](_0x426637['code'],'Inser'+'t')&&(_0x426637['preve'+_0x4bf75f(0x282)+_0x4bf75f(0x5e8)](),_0x290ef0['cZnCR'](_0x45ed21));},!![]);var _0x522ef3=document[_0x507395(0x6bb)+'eElem'+'ent'](_0x290ef0['jxtnO']);_0x522ef3[_0x507395(0x459)][_0x507395(0x681)+'xt']=_0x290ef0[_0x507395(0x326)],_0x522ef3[_0x507395(0x4cc)+_0x507395(0x3dc)]=_0x290ef0['ljGMJ'],_0x522ef3['title']=_0x507395(0x571)+_0x507395(0x77b)+'r',_0x522ef3['onmou'+'seent'+'er']=()=>_0x522ef3['style']['opaci'+'ty']='1',_0x522ef3[_0x507395(0x533)+'selea'+'ve']=()=>_0x522ef3['style'][_0x507395(0x530)+'ty']=_0x507395(0x7b9),_0x522ef3[_0x507395(0x317)+'ck']=_0x31c590=>{var _0x532a1e=_0x507395;_0x31c590[_0x532a1e(0x517)+_0x532a1e(0x4ef)+_0x532a1e(0x291)](),_0x45ed21();},document['body']['appen'+_0x507395(0x622)+'d'](_0x522ef3),_0x130c02(),requestAnimationFrame(_0x42b5a8),console[_0x507395(0x3ac)]('[saku'+_0x507395(0x20c)+_0x507395(0x53a)+'enu\x20r'+_0x507395(0x78b)+'\x20UWMK'+':',_0x591997[_0x507395(0x236)]);});})()));function _0x2878(_0x1c948b,_0x2d8d2d){_0x1c948b=_0x1c948b-(-0x6*0x13b+0x87b*0x1+0x3*0x45);var _0x58b55b=_0x5df4();var _0x2ecfeb=_0x58b55b[_0x1c948b];if(_0x2878['cNBMON']===undefined){var _0x4de451=function(_0x50e295){var _0x589f96='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xcf8528='',_0x1513b0='';for(var _0x5105c8=0x2158+0x5b*-0x1d+-0x1709*0x1,_0x388c6d,_0x1937aa,_0x474b5b=-0xa*0x5e+-0x2d9*0x3+0xc37;_0x1937aa=_0x50e295['charAt'](_0x474b5b++);~_0x1937aa&&(_0x388c6d=_0x5105c8%(0x153*0x13+0x3b3*-0x3+0x1d*-0x7c)?_0x388c6d*(0x9e1*0x3+-0x1a87+-0x3d*0xc)+_0x1937aa:_0x1937aa,_0x5105c8++%(0x22c3+0x136c+-0x362b))?_0xcf8528+=String['fromCharCode'](-0x409+0x3e*0x33+0x752*-0x1&_0x388c6d>>(-(0x1bd0+0x1db*-0xe+-0x1d4)*_0x5105c8&0x951+0x156c+-0xa3d*0x3)):0xe09*0x1+-0x1*0x1b69+0xd60){_0x1937aa=_0x589f96['indexOf'](_0x1937aa);}for(var _0x3111dd=-0xe0f+-0x1d48+0x2b57,_0x39943d=_0xcf8528['length'];_0x3111dd<_0x39943d;_0x3111dd++){_0x1513b0+='%'+('00'+_0xcf8528['charCodeAt'](_0x3111dd)['toString'](0x124+-0x23d3+0x22bf))['slice'](-(-0x12d3*-0x2+-0x101c+-0x1588));}return decodeURIComponent(_0x1513b0);};_0x2878['HRhWDz']=_0x4de451,_0x2878['mqCNjt']={},_0x2878['cNBMON']=!![];}var _0x220e86=_0x58b55b[0xa62+0x1*-0x147e+0x287*0x4],_0x4e0703=_0x1c948b+_0x220e86,_0x4755a1=_0x2878['mqCNjt'][_0x4e0703];return!_0x4755a1?(_0x2ecfeb=_0x2878['HRhWDz'](_0x2ecfeb),_0x2878['mqCNjt'][_0x4e0703]=_0x2ecfeb):_0x2ecfeb=_0x4755a1,_0x2ecfeb;}function _0x5df4(){var _0x492fd1=['yxjLBNq','ifjLy28','zgvSzxq','AwXSihK','v3jHCha','y3nZvgu','qML1r3m','r3HbqMu','nsK7iha','CM9UzYa','tMfTzq','lxnOywq','CMvUDem','B250lxC','lsbHihm','zvrKuxG','mtGGnIa','Ag9ZDg4','CMzSB3C','nYWWlJm','s0jRsuK','B29Rihi','rhjfug4','Dg9WoJe','idaGmca','z29KicG','lxbHCMu','ywrK','BNrLCI0','lxnSAwq','BhrO','rNjHBwu','C2HPzNq','yxbWzwe','tKCG4Ocuia','C2STAgK','C2STC3C','sgvPz2G','BMu7ihm','ic5TBI0','Ag9VA0C','wePouLi','zw50zxi','BhDLyK8','BYbWAwC','wMvYB2u','BMvHCI0','igzSzxG','EcbYz2i','EKDpuM0','B290zxi','DhLqy3q','CMfKAxu','ie92zxi','icbIywm','nsaWlti','B2TLpsi','psjTBI0','DMCGEYa','yMrTyNi','ztOGmtm','DMfSDwu','txvhAvm','y3jLyxq','Au5lCKG','rgLfv1G','DhjVA2u','wvHqy3K','CMvMAxG','ChG7igG','nxWX','ihWGz2e','nNW0Fda','B09kENC','y2TNCM8','BMC6igi','nsKSida','zxj2zxi','y2HdB2W','re1tB1C','zsb0CMe','ChG7ih0','BhvTBJS','Dw1UoYa','zM1kD20','igq9iK0','s2PKt1m','zMXUC3G','AxrSzsa','Aw9FnZi','rMPLreC','yxjHBMm','vvDnsYa','Bw92zvq','Aw5Mqw0','B24Gzxy','AxrJAa','uMvZzxq','AfbQC20','v0fWsMO','mZuSmJq','zvn0EwW','u0TOCeq','mJqYlc4','vNDkz3C','zgvZyW','Fdn8mq','r3vutxi','whvczge','BNLxBKq','yvb2CM4','tM8Gu3a','Eenzuu4','B3vUDc4','zw51','B3zLCIa','AY1Jyxi','zhjqCva','vhLPB1K','zsWGDhi','uu9ZCwq','igjHBM4','B3vUzdO','ndiSlJG','DMfS','mtb8mNW','quDct1m','DgLKzs4','DMvYlxy','ls1W','mJqWiey','zcWGyw4','idnWEdS','x19tquS','B0jdyue','AwvZlG','ihrVCdO','AxrPB24','uxnAvwG','ufDsBuu','phn2zYa','BdOGAw4','yw1L','y3vYC28','mtSGyMe','rgLL','zNvSBhm','C2STBM8','C3rHCNq','AsXZyw4','z24Ty28','Aw5NicS','ufbKwfO','BhvYkdi','DgvTlxu','DgG6idK','mJvWEdS','BwLZyW','zxmGB24','yxbWBgK','DxjZB3i','Dc1ZAxO','zwv6zsa','nc00lJu','thLvr3O','CMvHzhK','qMjKvfy','z24TAxq','ywqGD2G','CxnxC1q','ug9ZAxq','CMrLCJO','EdSGCge','y29SB3i','icaGig8','CYbHBgW','B24UvgK','BMLUzW','A291CNm','zwXMoIa','EdSGyM8','mti1AKjhv0r0','z3jPzc0','yw5Uywi','yxrJAgu','qurItMG','BNrLBNq','EvHHAgm','zMLSBa','CgXHEtO','u2DZreu','C2zVCM0','sgz0t0q','uNvUDgK','zxntEuO','DMG7EI0','AguGzgu','mc41o3q','lsbVDMu','A2uTBgK','y2HLy2S','mdSGFqO','q0LevhC','Fdv8nhW','BKfcwhq','vKPjsxu','mcbOB28','uhHrvgC','DhKGDMe','AwrLihS','swTlvhi','Dg9Y','lwzPBhq','CIGTlxa','t0XHAgy','zxi7igC','lxnLCMK','ida7igm','rLbtig8','zxjZy3i','ANH0BK8','rxDuvum','B2X1Bw4','DgLKzvC','tgLREhO','ig9U','y3rPB24','zJzIowq','phbHDgG','sM9AD3u','Bwf4','B3C6igK','odHfAMr3wxm','Awr0AdO','AguGDxm','AguGzNi','zhjvCxK','lcbPBNm','BwjVzhK','ywXSig8','Bgv4oIa','sMzfDuq','u2TPChm','C2v0x3q','EezNvuO','CNrPzgu','mtu3lc4','DhK6ic4','tK51z3e','nde5oYa','iezquW','y3zzsgS','v0Psvee','iefmtca','EcaWoYa','ysblB3u','AvDRBKW','oIaZmNa','u2v0r2e','wfPXDLa','Aw50zxi','BgLUzvC','zNbZ','idiWmg0','lc40ktS','ienquW','CNjVCG','qNvUBNK','Bgf5oIa','CMXHEsa','q09UDe8','zwfKEs4','igvMzMu','uMvJB2K','oYbHBgK','zw4GDg8','lwfWCgW','igf1Dg8','yuTVDxi','A291CI0','C21LwwO','v01ligK','lxrPDgW','Bgf0zwq','uNzPzuW','yMfJA2q','nYWUmsK','lwjHBNi','ldeWnYW','mgy1oYa','CI1Yywq','zwXHDgK','BgWGBwu','ihbVC2K','oYb1C2u','B250lxm','ihbHzgq','t0PZyuC','m3WXFdC','zM9UDa','u0XJC2u','Aw9F','q3vZDg8','CMfUy2u','tgHKtvG','zgrPBMC','CMvSB2e','CM91BMq','EtOGz3i','BNn0ywW','oYbIywm','ide2ChG','uLHQAxC','yxbWzw4','Dc1Myw0','ig1VBwu','v0PoBxe','mc41','s2v5qq','B293ufK','Cxbnt3C','s2v5ra','DgLMEs0','idaGmJq','wMH5rMq','yxnLBgK','DdOGnJa','AfnOywq','zvjHDgu','oYbKAxm','EdSGB3u','ksaXmda','yM91BMq','ide0ChG','oYbWywq','AgvPz2G','igTVDxi','oIbJDxi','tM8Gzw4','BgXIyxi','kYbmtui','zsbBrvG','Ahq7igm','z2zOquG','nZaWia','CZOGy2u','EsaUmZu','ywX0Ac4','u3bLzwq','ihWGBw8','psjYB3u','y29TyMe','ANDvqMG','ruvxyxG','vNnZCM8','zZOGnNa','ihnOB3q','D0jSDxi','kg92zxi','vMPrs0y','tgHuyKe','tMTzwhm','mNb4ihu','tuPpEu0','ywrKAw4','BMvJyxa','Dg9Nz2W','Dw5Kzwq','CI51As4','nxW5Fde','q09KzfC','CYbZChi','D3jPDgu','BwvZC2e','mIaXmK0','DdOGnZa','ChG7iha','oIbIBhu','AxHLzdS','qKDSBfO','CMfWAwq','zw1LBNq','CMeTA28','y2fUDMe','zw50oYa','zMLSBcW','FqOGica','rKfKCwC','EeDAAKe','s2v5uW','ifvxtuS','mxb4ihi','CMvHzey','CMvSEsa','nZqZmZa4CLD5rhjj','zw50CZO','DgL2zsa','mtn8oxW','icnMzJy','yJLKoYa','DMLLD0i','s2v5vW','Fdj8m3W','mcWWlJy','msWUmZy','owqIihm','igjVEc0','ltiUns0','DxjDifu','uIb2ms4','CgfNzsa','Cg9ZAxq','vMzKsvG','zM9YBxm','Cg9bqvm','zMXLEdO','C2f0Dxi','EuTrs1m','oIaWide','ChG7ihC','yw5yqM8','Bw91C2u','ihrOzsa','z3LIywm','DxDTAW','z2v0q28','ywnRz3i','uMTfqxe','vMLZDwe','Bw4TAca','yw5ZzM8','B3vUzgu','ltjWEdS','oIaIiJS','mJu1lde','DdOGmZq','AgX3B0G','idaGnha','q29TyMe','CMLKoYa','ihSGD2K','BKjeAfy','Dg9Wrgu','BY1ZDMC','sw5PDgK','CMvJDa','u3rHDgu','EfPRqMe','BgfIzwW','zMuGBw8','s0XRueS','lZ48l3m','z0jHCeG','sw5MAw4','ywrPDxm','EKjvt0q','zsGXnta','Axb0ve8','BfnmrMq','zwLNAhq','oYbIB3i','y3jVC3m','BYb0Agu','ldi1nsW','ntuSmJu','z29KrgK','CMLZAYa','y3nUuwi','Aw5NoIa','CdOGmta','C3DPDgm','rxHW','Bxm6igm','rvjzDuy','wgvKyLK','BMqIihm','rNDOshO','u0fgrq','BgLUzw4','u0XwDue','BguGC3q','ywLSzwq','igvYCG','q1btihi','rKPvzNy','yw5Jzs4','C2HHzg8','yNjPz2G','icaGkIa','zwfK','vgHLC2u','zxrLy3q','rgvvruW','zxzLBNq','DfrXC20','AwDODdO','vvDnsW','qxnZzw0','BgLJyxq','C0rJA0K','BNrezwy','DML0Eq','yMfJA2C','ALvZtKO','BMn0Aw8','Axb0kq','y2HLCYa','AY1OAw4','mNmSigi','ChGGDwK','AxvIwwi','phnTywW','AxnWBge','rwDXuvG','oYbMAwW','yxrPB24','y2f0','EdSGBwe','AwrHDgu','yxKGB24','uK1c','zc10Axq','uhDRwgW','AcbVBMu','tNrLuxm','nJTWB2K','EezQEgW','A3mGyxi','CgfYC2u','CM9ZC2G','DgLVBI4','DgvY','yNv0Dg8','EvLqtxe','DhKGmc4','Aw1Llca','CgfYzw4','yM90Dg8','idi0iIa','DdOXmda','Dgv4Dc0','vgLJAW','vK1mrLq','sNvTCfq','ywDLigq','yxjPys0','AgfPCG','Fdr8mNW','mtSGBwK','Bg9Hzgu','idGWChG','C3bHBG','EvzlzfO','CM0GlJq','tuLtu0K','CLjNswy','Auffq3a','C2vYDMu','Be1VDgK','ExLXww8','CM9Rzxm','Fdf8ohW','A2v5Dxa','DMvTzw4','AwXKigG','qK9su2m','ihjLy28','Acb7iha','B2nRoYa','A3nqB3m','D0LeruC','Dgv4Dem','zgLUzZO','FdeXFdm','zuvSzw0','icaGlNm','oIaXms4','zciVpJW','zwLUC3q','lwL0zw0','ChG7igy','Ag5Zvgq','lxDPzhq','lNnRlw0','ihrVide','mtz8ohW','DgHuBMG','t0HLywW','ywnPDhK','y2fLsvu','zhrOoIa','i2zMzG','DxjH','zxjPDdS','zvrHA2u','tgLZDa','ieDLDfy','C2fMzu0','oIbHyNm','ocKPoYa','oYbWB2K','wef6uw0','txPKu2K','A3ndChm','igHLAwC','lJv6iIa','DdOYnNa','z3jVDw4','u2fMzxq','iL0GEYa','zxH0','lxnHBNm','Fdj8mtq','id0GzMW','yxK6igy','v0ftrca','EYbMAwW','iJeUnsi','zhjVCc0','FdD8mtC','C2STy2e','zIXZExm','vgrZsMm','mNb4ide','tgD3qvu','Dw5PDhK','zs5bCha','BgfZDeu','D2LKDgG','B3zLCMy','tvzkz0G','BI5MAxi','rNnqDuq','DgG6idu','CNvXwvG','D0nVBg8','qM90Dg8','zMLSBd0','zLL4BKG','qwrIBg8','B2f0Eq','Fde1Fdu','BIb7igi','otb1rgD1Cue','zYbJyw4','ktSGFqO','AYbVBI4','A2DYvw8','B2reAwu','B25JBgK','ie9olG','lNnRlxm','AMfcEg8','BcbKCMe','DxjDigG','tK1hu2y','zwjRAxq','shv2DKi','BNnLDca','uMf0zq','wwXczxG','BwvsDw4','DhjHBxa','y2HtAxO','wM9rq0O','C3bLzwq','oIa4ChG','EMu6ide','Bhv0ztS','CNnVCJO','lxrVCca','Aw5Zzxq','EgvZige','ugf0Aa','zhbY','mdSGBwK','kYbtCge','zgL2','ywn0A0S','ChGGmdS','B3i6ihi','zff4wvm','yMeOmJu','uMvMAwW','Dgv4Dei','DgXL','uMfWAwq','DhjPyNu','Awr0Aa','y3K9iJe','oJiXndC','CML0zxm','zsaOt0G','y3jLBwu','vu9zBgC','CgfKzgK','igzVDxi','u0ziCKi','nhb4oYa','wg9mvhC','y2L0EtO','DgruywK','C2fRDxi','zMLSBfm','ocWYndi','ENPhqwq','ywXSzwq','Dw5RBM8','CMDPBI0','zgfTywC','B2XVCJO','su9nrhC','BMX5kq','zxjYihS','yMX5lum','ywrKrxy','EwPtCMK','igXPBwK','mhb4lca','uMLhCuW','AwDUlxm','C3rYB2S','B3nWywm','zwqGyw0','B2vZig4','yw1zC1a','v2vItw8','zYb7igm','uJOG','sgvyAuC','rNz3sMi','CKXNrKW','y3jLzw4','C2rzzxu','C2v0','Bgv4oYa','C2L6ztO','vuT4Eg4','oYbTAw4','CMqTAgu','s0jkrgG','idjWEdS','CIdIGjqG','rgncteC','Dgv4Dee','zwfSDgG','ihDPzhq','BgLUzvq','zMy2yJK','igfSAwC','y2fWDhu','AwXnB3q','rLnqwgW','lM1Ulxq','t0jswMO','DxrVoYa','CYbnB3y','zg93BG','DMrUAgG','EI1PBMq','v0DWuK8','tgvNAw8','nIa2Bde','zvbPEgu','AhjOCLu','DgPbq04','AxvZoIa','oYb0CMe','C2STC2W','ktSkica','Bw4TDgK','yxjNzxq','tw92zw0','ihDOAwm','rujRsMO','q2rJzwO','CZOGyxu','BKHAwMO','Cc1ZAge','svDvEu8','Bw8GDg8','EdSGyMe','icaUBw4','D2vIA2K','AcaTidq','ie1VDMu','mtjWEdS','y2fWtw8','mcWWlJu','C3zNiJ4','y29Kzq','j3qGC3q','BsbJzw4','wM1Mv28','DcbHihq','ue9Lsve','uLzKALy','CMfUz2u','Bg9N','idrWEca','B3vUzca','BeTLvMO','zKnxEhi','yKzZsu8','ywn0Axy','oxW2Fdm','BhrdtLO','zxnJ','BgrYzw4','B2STCMu','zJDHotm','igvSC2u','A2L0lxm','lc4WocK','ih0kica','C2STzMK','zxiTCMe','CIbHzhy','BM9UztS','Dxm6idy','icaGzgK','sgLKzxm','ywXSihq','mcWWlJG','oIaZChG','BNnPDgK','D2vPz2G','s1jkq28','s3bhrxi','ntaLktS','EuvUz2K','ChG7igi','DhjHy2S','lYbhCMe','t3voufO','C2fMzq','nsWYntu','q0Xizgy','DgfIihS','B3G9iJa','C2f2zq','yYGXmda','BxvXteG','AMDKBu0','DgvYo3C','C2v0vhi','sfrnta','sgvHBhq','ltiUnsa','ktSGy3u','oIbKCM8','CM9Szq','z2fTzuW','vhjjuMm','zw1ZoIa','CMfPC2u','vg90ywW','mhW2Fdu','yM9Yzgu','odiPoYa','zMLSBfq','CZOGCMu','DLbiEgO','khjLBg8','txbsCeK','oYbJB2W','zw0TDwK','BI1SB2C','Cg9W','ns00idC','zvbSyxK','oYbOzwK','yxGOmJu','te9UCfK','B3bfq3i','tfPlzgm','Aw5WDxq','B3i6icm','mtiGmJe','zwCGzMe','rLbtigm','BIb0Agu','AxnPyMW','zxPPzxi','DhrPBMC','mdSGy3u','zvLjEeG','mtjWEca','yJPOB3y','x19ZywS','Bg9JAW','lcbJywW','BtOGmJq','igvUDgK','r2PJwui','CYbpDMu','y2HPBgq','CNjTuNa','yxrLkde','DhLWzq','u0nwCLm','ntq1mtHdrLPey3u','lIbvC2u','Fdr8nNW','C2v0ida','zvzHBhu','Ag9VA04','DMvYihS','BMf0Dxi','BwuG','nhWYFda','B2LSicG','z3jHDMK','nxmGy3u','B29RCYa','DhjHBNm','FdeWFdy','idfWEca','igH1CNq','m3WXFdq','ywiUywm','BgvUz3q','zgv2Awm','oIbPBMG','zw1hChi','yw5JztO','ksaWida','CgfJAxq','B0PpDKm','BML0igy','zcWGi2y','ic40oYa','mJu1ldi','B2LUDgu','u2nHBgu','igjVCMq','zw50CW','lxjHzgK','EYbWB3m','mtjJwezzz3q','AtmY','uMvJDa','lwLVxYO','q1rvzwq','A2v5C3q','B25SEsW','B3qGBwe','DdOGmJG','Eff6C3e','C2STCMe','igrPC3a','v2LKDgG','tKCGlsa','tu9ersa','zxmGEYa','BMf2','nxm0idi','BLbSyxq','oNbVAw4','CMqTDgK','vgfRzxm','DgnOqM0','icbIB3G','Dw5KoIa','t0zgigi','DgvYoYa','Bcb7igq','zJmY','A2XyAgi','BMqGBwe','A2uTD2K','C3r5Bgu','vMfSDwu','Ag9VA1a','tfnewuK','pc9ZBwe','BwvKicG','zdSGyMe','zgD0Efm','mxb4oYa','CMvZDg8','icaGic4','rgfTywC','zsb3zwe','DKntt1y','ve1vvvy','Bw4TAa','y3HiB3O','yxmGBM8','Aw9UlLq','zcbJAg8','qsblt1u','u2rhu20','nJaWide','y2vUDgu','oIb0CMe','uw9xvNO','twDvDgm','BI1TywK','w3nHA3u','CMLNAhq','igzVCIa','CI1ZzwW','yxK6igC','B25PBNa','CJOGi2y','AgfZ','ig9Wywm','yMvNAw4','Dhm6yxu','DgG6ida','rvHqxq','AM9PBJ0','yxa6ide','CMrLCI0','BxzJB1i','BhKGkhi','ntuSlJa','swnJD3i','B3vUDgu','BNnSyxq','B2rL','lMLVig0','DNjzD1y','zw5HyMW','D2fYBG','icaGica','BvzdzxG','BgvZiem','z2H0oIa','zKnkse8','B2LS','Ec1OzwK','BgLUzwm','DhmGCgW','B1jLy28','A2TqDui','Ag9VA0m','C2HVD24','oJa7EI0','oIaJzJy','yMLJlwi','yMX1CG','DgvZDa','lK92zxi','BM93','Dc1Iywm','ihWGrvi','Agf0igq','Dg9W','mtr8mty','B3b0Aw8','z0f5vuS','B3jKzxi','yLfXD1G','DuLevNa','lc43nsK','C3bSAxq','CMXrC1C','AY1ZD2K','B3uU','psiJzMy','B3i6iha','BNrLCJS','y2fSBa','BhvLCY4','zsb2ywW','ndC0odm','BhmGDgG','zxjYB3i','lc4WnIK','wvbiy2i','y2XLyxi','BdOGBM8','Aw4TD2K','ywLYlG','wLHvEfy','wLzKseq','AgvSza','D21lwwm','EMvUzeG','nZiWnJeWvezNqNHb','nNb4idK','B3nPDgK','lJq1oYa','Awq7iha','Aw5Uzxi','C3rLBMu','Axr5oIa','EYbSzwy','ihrOAxm','ihDLyxa','zvKOmtG','cIaGica','ms4XlJa','swfoDuy','y29TCgW','zgvYoIa','BNq6igm','ztSGyM8','D29YAYa','A0nrz2y','nMi5zci','zM9fsu0','mhb4oYa','B3zLCMW','Egrky2i','tMLVvxi','idqTnc4','B250zw4','qw9jC0e','zwXK','Ad0ImIi','vwfHrvy','z2LMEq','qNLjza','s1bYyNO','ihnVig4','y29UDgu','ohG5mc0','lxK6ige','CM9WywC','EYbMB24','zw50rwW','zxqGmca','Cffytxq','AxrLBxm','rMLLBgq','Aw46ida','ode1mtnurKzwCfO','qMXVy2S','u2vSzwm','nxb4oYa','vuDIBgS','mJu1lc4','BgLNBG','Bw9fEha','rw5bvfe','igfUzca','l1jnqIa','q3DwC0i','Awy7ih0','DM5Hsfi','Ag1gvuW','ihSGywW','u0fgrsa','uKXzt0C','CgvHDcG','EdSGz2e','vw9WtNu','zMLLBgq','zxjZ','4Ocuig92zq','zgvZ','nYWWlJG','ihn5C3q','sMXAyu4','Bw4TDge','zvj1BM4','EcKGC2e','C3rYAw4','C3rVCfa','n3W1Fdq','Ec1ZAge','r3DUz24','lKXVy2e','ndHWEcK','ywqGDg8','BMv2zxi','zgL1CZO','odbWEcW','yM9KEq','vLfgvM8','AgvHzgu','zxj5idi','DgGUsw4','z29K','ic5ZAY0','igzVBNq','idHWEdS','z2L2u3C','iM5VBMu','Aw9FmZa','wxDetvu','yw5LBc4','vKfXsu0','B3bHy2K','t1vsx18','uNP5EKq','B25TB3u','kdi1nsW','yNjYz0i','rhjeDM4','iNrYDwu','EYbJB2W','B24Oks4','DxjDig0','zw50tgK','zgTPDa','mtKXmtmZuNH5tgXP','idK5osa','zsbZzxi','CMfUC2K','z2jHkdi','BerPzsW','qxbWBhK','tMzzr1u','mdSGyM8','zwfKB3u','oIbWB2K','uLzwCLy','oYbMB24','nZTWB2K','q291BNq','oYb9cIa','nsWUmdu','zK91wxK','mdCSmtu','yxb0Dxi','ltqTnY4','rM5Zzfi','Aw9U','lwnVBhm','BfjHDgK','zxi6oI0','kdeUmsK','A2vizwe','lc4YnsK','Dg87zMK','z3novNO','jsbUBY0','tM8GuMu','Bg9Hzc4','oMHVC3q','veP3s0m','FdeXFde','DgHYB3C','ww9Kr0m','lM1Ulxm','yxrLvge','BIb7igy','oIbYz2i','Ag9VA3m','Cg9PBNq','oIaWoYa','Bw92zw0','DMzVAwq','EtOGyMW','ig5VBMu','CePLqMe','vvzJvey','u2fRDxi','oYb3Awq','s0TurKW','wvLQBgm','ihjLBg8','nJiWChG','y2XHC3m','oIaYmNa','vw5PDhK','nNb4oYa','iKLUDgu','BMnL','Dxm6idi','ugn0','iL06oMe','ywqUieK','yw5LA0C','DhjPA2u','C21HBgW','mcaXChG','mNb4o3i','yMzgy3a','ntu5mtzjzLrjDNe','u1frsMS','tfHgBg0','zMLSzw4','ihSGzM8','AhvTyIa','EsbKzwy','u21jwxq','zMyP','sfLXy2y','BgPcrxK','mJuPoYa','ndi0nJH6yLv6vu4','C2STBge','Aw4Sihq','AwrLCG','z2v0','zgvYlxi','ywqGEYa','mxWWFdi','DMC+','ignVB2W','C2vSzwm','n3W4Fdu','nJq2o2m','AxmGyNu','yxa6ihi','zKncvhy','ndySmJm','DdOGnNa','mxWYFda','s2rWAKq','nwmWidm','CZPUB24','DhLSzq','DgnOoJO','ohb4oYa','ihn0CM8','yMHVCa','zw50kcm','Aw5KzxG','y2n1CMe','ifvUAxq','AgvZ','z0LMyvC','nMvLzJi','B3vPr0W','BI1JBg8','ztOGBM8','C3rPBgW','m3WXFda','zMHTzK4','icaUC2S','ihWGC2G','v2rVugm','zguSihq','txr2C3C','zMLUza','zvLhz3K','CeLOCuC','qNb5ugm','ihSGzMW','ig5VigG','BNqGAge','CY1Zzxi','BI1PDgu','yxjkv1K','ihn0AwW','B3jZige','Ec1KAxi','z0DtsNK','z2DSzwq','zcbNCMu','m1DAz0v3AG','BNnjtvi','ic8GDMe','zsXTB24','ys5RB3u','zdOGBgK','EdSGAgu','BM9szwm','sw5ZDge','C2v0qxq','y2XYuLu','iNjVDw4','ideYChG','v0fttsa','AxrPywW','lJjZoYa','D1H6sKG','z2v0sxq','EvLPy3u','zxjSyxK','C2STy3q','Fdb8nNW','u3rHDhu','ignHy2G','yxvSDa','Bw4Ty2W','C2STyNq','Ahq6idi','Aw4GC2e','u2fMzsa','uLHhrMW','lMrSBa','igDHCdO','A2v5zg8','tw92zq','zw50','BM9Uzq','q0fovKe','CMvU','y2uGB3y','ANvTCfa','B2fKzwq','ChGPoYa','oIbJzw4','zNLZyLa','swyGCMu','Bw4TC3u','zgPVuhu','u2HHCNa','BwDUELO','nJaWia','oIa1mcu','lJuGms4','BMqGt0G','qLLhsgu','txvtt0u','BwLKzgW','lxnJCM8','C2HVB3q','BMq6ihi','uw9yAKO','zsbTAxm','DgvJDgK','ruDYBNu','nNWWFde','DMu7ihC','zM9UDc0','s21jtvC','CMH1v3e','DKX6vMG','zxG6ide','A2DYB3u','zuv4Ca','oWOGica','EKPfEva','tvz1A1e','AY12ywW','ldiZocW','CgXPy2e','i2zMnMi','icaGyMe','mNb4oYa','zenOAwW','idmWChG','EwXPz1i','Bg9HzgK','BerPzsK','venzyLu','sNvTCca','mJm4ldi','Eg1krhO','CMDIysG','yvDyBfa','CgLys3K','mNb4ksa','CI52mq','y3qGB24','oJa7D2K','q3jjDxy','zgvYlxq','Fdn8mhW','z2fWoIa','ywXPz24','D2L0Ag8','AwX5oIa','yxa6idG','Ahq6ida','DYGWida','nhWXFdi','igDHDgu','zxG6mJe','rg9TvKK','zNrLCIa','oYbVCge','EhH2tvu','swfOzwS','q29SB3i','Fdz8mhW','yMPYuxO','zgDhsfq','icaGlM0','CeTLCKS','idqGnc4','y2LYy2W','AwX0zxi','C2v0sxq','ignVBg8','BKf2Cfy','Eca2ChG','BM9tChi','A2nrvMC','EYbIywm','AwXS','t1nOB28','yY0XlJu','mwzYksK','zxiTzxy','ndSGBwe','lMXHC3q','BwrLC2m','BNqTC2K','B3C6ida','igjHy2S','sunbD1G','CxvLCNK','ysGYntu','u3bHy2u','mtfWEca','igHVB2S','ihbVAw4','igv4Axq','BMjQzvG','CM9Rzs0','A3nty2e','oIa2mda','tg9Hzgu','rgzxEuK','ieaG','oIa0ChG','yxrLlwm','ywjSzs0','ve9PCxG','yxvxDvy','BMCGzM8','DgG6idG','DgfNtMe','t0r5CNe','igrLzMe','Bhvlq1i','C2STDMe','lc40nsK','qMD5Eum'];_0x5df4=function(){return _0x492fd1;};return _0x5df4();}
