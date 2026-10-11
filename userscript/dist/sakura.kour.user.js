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
(function(_0x5a2d18,_0x4d60dd){var _0x2e186d=_0x1dad,_0x36e15f=_0x5a2d18();while(!![]){try{var _0x3db2bd=-parseInt(_0x2e186d(0x4ff))/(-0x5a8+-0x2622+0x2bcb)+-parseInt(_0x2e186d(0x493))/(0xa*-0x1cd+0x120b+-0x1*0x7)+-parseInt(_0x2e186d(0x750))/(-0x1*0x74f+-0x423+-0x1*-0xb75)+-parseInt(_0x2e186d(0x685))/(0x8*0x2e0+0x1745*0x1+-0x1*0x2e41)+-parseInt(_0x2e186d(0x312))/(0x562+-0x3*0x151+-0x1*0x16a)+-parseInt(_0x2e186d(0x2b4))/(0x9bc+0x146d+-0x1e23*0x1)+parseInt(_0x2e186d(0x509))/(0x6*-0x54b+0x3*0x27+-0x322*-0xa);if(_0x3db2bd===_0x4d60dd)break;else _0x36e15f['push'](_0x36e15f['shift']());}catch(_0x365667){_0x36e15f['push'](_0x36e15f['shift']());}}}(_0x25b3,0xc9ce4+-0x1b6f1*0x8+0xb2b28),((()=>{'use strict';var _0x3e17ea=_0x1dad,_0x3f8c20={'NaxGJ':function(_0x868a20,_0x3ed25e){return _0x868a20===_0x3ed25e;},'KXGNk':_0x3e17ea(0x6de),'AVxDd':'unkno'+'wn','YMQjs':function(_0x4ef9a3,_0x496697){return _0x4ef9a3(_0x496697);},'wMTPZ':_0x3e17ea(0x3e9),'ktopE':'range','FkyOn':'sk-sl'+_0x3e17ea(0x661),'bmLZY':function(_0x3b532d,_0x28c410){return _0x3b532d(_0x28c410);},'Sdcak':'--p','SLNPo':function(_0x31fd8f,_0x4ed33e){return _0x31fd8f-_0x4ed33e;},'rirlh':function(_0x29ec06,_0x5dc8f9){return _0x29ec06!==_0x5dc8f9;},'EvytO':'top','XniXo':function(_0x6eaade,_0x1554b2,_0x4ce7fd){return _0x6eaade(_0x1554b2,_0x4ce7fd);},'Dsdtp':'\x20FPS','wqHrc':'rgba('+'255,1'+'80,19'+_0x3e17ea(0x708)+')','MYfMv':function(_0x3908d3,_0x596fc7){return _0x3908d3+_0x596fc7;},'KuEmt':_0x3e17ea(0x2d9),'vniof':_0x3e17ea(0x747),'SpFgw':function(_0x5edf9e,_0x5776bb,_0x47bc10,_0x3f5268,_0x51fdea){return _0x5edf9e(_0x5776bb,_0x47bc10,_0x3f5268,_0x51fdea);},'rusyw':function(_0x43b4a6,_0x36e9c9){return _0x43b4a6*_0x36e9c9;},'UQYCC':_0x3e17ea(0x3b0)+'ra-ko'+'ur]\x20h'+_0x3e17ea(0x23c)+'eg\x20fa'+_0x3e17ea(0x326),'TyGpy':function(_0x3a2158,_0x1e893d){return _0x3a2158===_0x1e893d;},'XMgYz':'sjkCt','dsPON':_0x3e17ea(0x431)+'creen'+_0x3e17ea(0x476)+'s','MsmAT':function(_0xf72462,_0x3b3aa0){return _0xf72462<_0x3b3aa0;},'iJCfc':_0x3e17ea(0x34f)+'io_','cyUMP':function(_0x3913a9,_0x5d2e0c){return _0x3913a9!==_0x5d2e0c;},'exHVv':function(_0x2d6a44,_0x1bd882,_0x5e7317,_0x2d6368,_0x38bec1){return _0x2d6a44(_0x1bd882,_0x5e7317,_0x2d6368,_0x38bec1);},'CwFaY':_0x3e17ea(0x5e2)+'ers','KQubn':'movem'+'ents','sZquX':function(_0x36beda){return _0x36beda();},'QRaAj':'sk-la'+_0x3e17ea(0x6ce),'BHDtN':'sk-ct'+'l','ycydU':'small','WLzjQ':'Inser'+'t','UWcUT':function(_0x32acdc,_0x18bba4){return _0x32acdc(_0x18bba4);},'WPuhw':function(_0x4275d8,_0x31f468){return _0x4275d8(_0x31f468);},'NOWCP':function(_0x13a8e1,_0x1da894){return _0x13a8e1!==_0x1da894;},'sXdPK':function(_0x1a9fd8,_0x3d9d5a){return _0x1a9fd8&&_0x3d9d5a;},'EZrog':'IzEhw','NCJdA':function(_0x4ef999,_0x591aa1){return _0x4ef999<_0x591aa1;},'MNUZZ':_0x3e17ea(0x644)+'|5|0|'+'1','ZRTnq':'f32','tBNCT':_0x3e17ea(0x742),'FGKgc':'JYnCD','ypuAJ':function(_0x47a9fa,_0x2a05d2,_0x5a9a9f,_0xd74516,_0x2bfe01){return _0x47a9fa(_0x2a05d2,_0x5a9a9f,_0xd74516,_0x2bfe01);},'gAZcS':function(_0x9cd6d1,_0x2a9a0f,_0x9bb3a0,_0x15865a,_0x2a7ad1){return _0x9cd6d1(_0x2a9a0f,_0x9bb3a0,_0x15865a,_0x2a7ad1);},'WYEwZ':_0x3e17ea(0x722),'JOmTw':_0x3e17ea(0x2d7),'jdTgX':'EtDUB','VdBgm':'TVLyn','CnyEJ':_0x3e17ea(0x4c7),'nXLuZ':function(_0x3f164d,_0x89320a){return _0x3f164d!==_0x89320a;},'Ylouw':function(_0x5d561c,_0x1bb1f4){return _0x5d561c>_0x1bb1f4;},'YDAHC':_0x3e17ea(0x4aa)+'wn','ylzTZ':'keyup','WnZdp':_0x3e17ea(0x423)+'up','JdaNS':function(_0xe0d1c1,_0x3a5e78){return _0xe0d1c1!==_0x3a5e78;},'MKUSv':function(_0x21cb1a,_0x8ebba8){return _0x21cb1a===_0x8ebba8;},'Elhus':'inter'+'activ'+'e','QUpPg':'compl'+_0x3e17ea(0x70f),'tbemY':'kour-'+_0x3e17ea(0x2b8)+'8x90-'+_0x3e17ea(0x262)+'t','SUbeV':_0x3e17ea(0x34f)+_0x3e17ea(0x666)+_0x3e17ea(0x6a1)+_0x3e17ea(0x325)+'nt','PSdPr':_0x3e17ea(0x718),'NhNqR':'ObAUU','PcdsM':'none','ZegMD':_0x3e17ea(0x64e),'UbCmG':function(_0x2f6a46,_0x573c6d){return _0x2f6a46===_0x573c6d;},'SVtRh':_0x3e17ea(0x763)+'255,1'+_0x3e17ea(0x6ec)+_0x3e17ea(0x427)+'5)','TnxKx':_0x3e17ea(0x763)+_0x3e17ea(0x42f)+_0x3e17ea(0x4b0)+'0,0.8'+')','UoLWN':function(_0x55da87,_0x3d30ee){return _0x55da87*_0x3d30ee;},'mlyBr':'600\x20','YfwsY':_0x3e17ea(0x29f),'glOtu':function(_0x294a08,_0x563e94){return _0x294a08===_0x563e94;},'oTUoZ':_0x3e17ea(0x71f),'XYbDc':function(_0x27ac52,_0x4982ee,_0x43c41f,_0x40eb6d,_0x35f795,_0x28b7eb,_0x141f12){return _0x27ac52(_0x4982ee,_0x43c41f,_0x40eb6d,_0x35f795,_0x28b7eb,_0x141f12);},'miQRv':function(_0x554f95,_0x11fdec){return _0x554f95+_0x11fdec;},'RrGWR':function(_0x2ed7a2,_0x2cceee){return _0x2ed7a2/_0x2cceee;},'YMcaX':_0x3e17ea(0x3dc),'ApGAa':function(_0x6f8bae,_0x44e002){return _0x6f8bae+_0x44e002;},'ErWJr':'\x20CPS','XsWqy':function(_0xba83ac,_0x249bb1){return _0xba83ac+_0x249bb1;},'PGhNB':function(_0x4e1ba0,_0x39fb84){return _0x4e1ba0(_0x39fb84);},'ZxxBN':function(_0x3ef6fa,_0x378037){return _0x3ef6fa(_0x378037);},'IsErs':function(_0x4193d6,_0x1f0c0f){return _0x4193d6>=_0x1f0c0f;},'XBZxc':function(_0x4e12ca,_0xe3c604){return _0x4e12ca*_0xe3c604;},'kjunY':function(_0x1b2346,_0x2e58aa){return _0x1b2346-_0x2e58aa;},'pYNNG':_0x3e17ea(0x483),'srKuR':_0x3e17ea(0x47a)+'check'+'ed','GpGtH':function(_0x434827,_0x3b7eb4){return _0x434827(_0x3b7eb4);},'oiizj':function(_0x5b9da3){return _0x5b9da3();},'TTnpo':_0x3e17ea(0x719),'QFqXD':_0x3e17ea(0x2ff),'jNctI':'span','eagMd':'butto'+'n','aZitB':_0x3e17ea(0x279)+'n','xtcoh':'sk-hi'+'nt','GdPug':'sk-no'+'te','HaGxK':_0x3e17ea(0x4b5),'OiGad':'HDcuj','svMRJ':_0x3e17ea(0x763)+_0x3e17ea(0x42f)+'35,24'+'0,0.7'+'5)','EurSw':function(_0x541b2d,_0x8f17c9){return _0x541b2d(_0x8f17c9);},'tKfuk':_0x3e17ea(0x66f)+'s\x20OHe'+_0x3e17ea(0x748)+_0x3e17ea(0x399)+_0x3e17ea(0x58a)+'keHea'+_0x3e17ea(0x340)+'nd\x20OH'+'ealth'+'.Loca'+_0x3e17ea(0x30e)+_0x3e17ea(0x5b0)+_0x3e17ea(0x211)+'g\x20can'+_0x3e17ea(0x394)+_0x3e17ea(0x3f1)+'ill\x20y'+'ou.','SyoOM':_0x3e17ea(0x587)+_0x3e17ea(0x6f3)+'ilMot'+_0x3e17ea(0x6d1)+_0x3e17ea(0x506)+'o\x20the'+'\x20reco'+'il\x20sp'+_0x3e17ea(0x5d0)+'\x20neve'+_0x3e17ea(0x25e)+_0x3e17ea(0x37f),'qYMsO':function(_0x281d52,_0x1652d8,_0x22bbd1,_0x7d91d7,_0x2d6501,_0x4e2ae7){return _0x281d52(_0x1652d8,_0x22bbd1,_0x7d91d7,_0x2d6501,_0x4e2ae7);},'oVciS':_0x3e17ea(0x2f5)+'ite\x20A'+_0x3e17ea(0x50e)+_0x3e17ea(0x6a7),'WgCMs':'mQAGW','tLauc':function(_0x3c58d2,_0x43eba0,_0x1c4dbd,_0x5a86d6){return _0x3c58d2(_0x43eba0,_0x1c4dbd,_0x5a86d6);},'orqOE':_0x3e17ea(0x626)+'\x20%','vhjmN':'100\x20='+_0x3e17ea(0x689)+'ult','OaTRm':_0x3e17ea(0x304)+_0x3e17ea(0x375)+'oaty','wHFMf':function(_0x9dd359,_0x4d4516,_0x54cad2,_0x3f1603,_0x385ebf,_0x5aa56a){return _0x9dd359(_0x4d4516,_0x54cad2,_0x3f1603,_0x385ebf,_0x5aa56a);},'uvhFJ':function(_0x4ee169,_0x129b36,_0x56fda5,_0x2b3c4f,_0x1efefb,_0x46b84f){return _0x4ee169(_0x129b36,_0x56fda5,_0x2b3c4f,_0x1efefb,_0x46b84f);},'FAdxF':_0x3e17ea(0x6fd)+_0x3e17ea(0x59f),'lpptG':'Keyst'+'rokes','bTHcR':_0x3e17ea(0x278)+'ion','zNJIM':'Botto'+_0x3e17ea(0x5a9)+'ht','RJOZN':'Left\x20'+_0x3e17ea(0x384)+'e','RrABt':function(_0x3f5549,_0x222266,_0x3ba71b,_0x297dd5){return _0x3f5549(_0x222266,_0x3ba71b,_0x297dd5);},'XZZQm':function(_0x31c505,_0x58fd9e,_0x1dc7ce,_0x270d0b){return _0x31c505(_0x58fd9e,_0x1dc7ce,_0x270d0b);},'dUCzI':_0x3e17ea(0x200)+'m\x20cen'+'ter\x20c'+'rossh'+_0x3e17ea(0x513),'rTicH':function(_0x1012dc,_0x269532,_0x42ad70,_0x5a4afe){return _0x1012dc(_0x269532,_0x42ad70,_0x5a4afe);},'TBnVk':_0x3e17ea(0x717)+_0x3e17ea(0x518)+'y.','ydayz':'FPS\x20c'+_0x3e17ea(0x524)+'r','wNjJh':function(_0x4e1453,_0x59c9c7){return _0x4e1453(_0x59c9c7);},'gXXvl':_0x3e17ea(0x586),'hGyGk':_0x3e17ea(0x5f1)+'ck','dUFsw':_0x3e17ea(0x31f)+_0x3e17ea(0x65a)+'-io_*'+'\x20bann'+'er\x20sl'+_0x3e17ea(0x2ef),'ftYtK':_0x3e17ea(0x36f)+_0x3e17ea(0x5ab)+_0x3e17ea(0x369)+_0x3e17ea(0x2b2),'QgTYz':function(_0x2a7f06,_0x43891a,_0x2c163f,_0xfd6e8e){return _0x2a7f06(_0x43891a,_0x2c163f,_0xfd6e8e);},'KlLLD':_0x3e17ea(0x577)+'OHeal'+'th.In'+_0x3e17ea(0x6cf)+_0x3e17ea(0x6eb)+'Healt'+'h)','jvJIw':function(_0x1075d2,_0x4ebfd5,_0x471a04,_0x2c2a48){return _0x1075d2(_0x4ebfd5,_0x471a04,_0x2c2a48);},'VAFMv':function(_0x5a4ad0,_0x15ceb9,_0x587c08){return _0x5a4ad0(_0x15ceb9,_0x587c08);},'snrZZ':_0x3e17ea(0x20f)+'les\x20C'+_0x3e17ea(0x6fb)+_0x3e17ea(0x674)+_0x3e17ea(0x701)+_0x3e17ea(0x42e)+_0x3e17ea(0x68d)+_0x3e17ea(0x62f)+_0x3e17ea(0x25b)+'topDe'+_0x3e17ea(0x3e0)+_0x3e17ea(0x690)+'\x20Keep'+'\x20ON.','zDHsk':_0x3e17ea(0x2f2)+'my\x20se'+_0x3e17ea(0x68f)+'s','VVDZA':_0x3e17ea(0x2a0),'eDtvX':_0x3e17ea(0x23a),'zfQBp':function(_0x263ef6){return _0x263ef6();},'OdDCd':_0x3e17ea(0x65e)+'t','eeRIY':function(_0x2d7bc9,_0x68594b){return _0x2d7bc9(_0x68594b);},'mqIOC':function(_0x2c01d1,_0x1ece53){return _0x2c01d1+_0x1ece53;},'JInZb':function(_0x3fd814,_0x14e2cd){return _0x3fd814!==_0x14e2cd;},'EokIJ':_0x3e17ea(0x58c),'miUMW':_0x3e17ea(0x69d)+'9d','PodaD':function(_0x339211,_0x5caafd){return _0x339211+_0x5caafd;},'QcCSU':_0x3e17ea(0x65b),'AUqUC':_0x3e17ea(0x6f1)+'g','sGMGC':function(_0x4c2878,_0x48f1bb){return _0x4c2878!==_0x48f1bb;},'bCqJy':_0x3e17ea(0x425)+_0x3e17ea(0x37d)+_0x3e17ea(0x1ec)+'licat'+'ion','dLhay':_0x3e17ea(0x516)+'MODE\x20'+'—\x20ove'+_0x3e17ea(0x4ee)+'only,'+_0x3e17ea(0x3a3)+_0x3e17ea(0x6ed)+'(relo'+_0x3e17ea(0x596)+_0x3e17ea(0x75a)+')','cmAvc':function(_0x2e271a,_0x1942dc){return _0x2e271a+_0x1942dc;},'VjRjA':_0x3e17ea(0x5c3)+_0x3e17ea(0x6d4)+'\x20','FNUzX':function(_0xaf0097,_0x4553b1){return _0xaf0097+_0x4553b1;},'BVLds':_0x3e17ea(0x4d9)+'ooter'+'\x20','wMfYs':'held','jEWQg':_0x3e17ea(0x6cc),'FIMlo':'tyQHC','xTwkT':function(_0x14c666){return _0x14c666();},'lfrpF':'UWMK','AevpL':function(_0x439d48,_0x3d8c68){return _0x439d48+_0x3d8c68;},'HVCnj':_0x3e17ea(0x459)+'go','Drkyc':_0x3e17ea(0x704)+'r','vDRmg':'mn-ti'+_0x3e17ea(0x22f),'bhTBw':_0x3e17ea(0x4c2)+'b','FleIi':_0x3e17ea(0x574),'VZbpn':_0x3e17ea(0x412)+'a.kou'+_0x3e17ea(0x23f)+'v1','iUQUH':_0x3e17ea(0x287)+'t','ugTIT':_0x3e17ea(0x696),'woTWw':'Safet'+'y','tlkXH':function(_0xfeb3fd){return _0xfeb3fd();},'tsRft':function(_0x29d309,_0x54956b){return _0x29d309(_0x54956b);},'Ewnco':_0x3e17ea(0x412)+'a.kou'+_0x3e17ea(0x2b5),'WbxbK':_0x3e17ea(0x622),'fhPzl':'Sakur'+_0x3e17ea(0x3eb),'fACDR':'god','WSmcM':function(_0x5be554,_0x226e76,_0x20adfd,_0x368545,_0x314b58,_0x575082,_0x5ec261,_0x463fba){return _0x5be554(_0x226e76,_0x20adfd,_0x368545,_0x314b58,_0x575082,_0x5ec261,_0x463fba);},'RzaZl':'OHeal'+'th','zcKkv':_0x3e17ea(0x3fd)+_0x3e17ea(0x5a5),'BRrvH':'Tick','HBWxU':'capMo'+'ve','eOGtv':'Legio'+'nPlat'+'forms'+'.Over'+_0x3e17ea(0x264)+_0x3e17ea(0x2bb)+_0x3e17ea(0x40c),'ezZMJ':'IsGro'+'unded','ZuyUH':'[saku'+'ra-ko'+'ur]\x20U'+_0x3e17ea(0x27d)+'nit\x20f'+'ailed'+':','NhMwQ':function(_0x86cd1f,_0x21d8d3,_0x3168fc){return _0x86cd1f(_0x21d8d3,_0x3168fc);}};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location['hostn'+'ame']||''))return;if(window['__SAK'+'URA_K'+'OUR__'])return;window[_0x3e17ea(0x41a)+_0x3e17ea(0x38e)+_0x3e17ea(0x694)]=!![];var _0x6b2e8e=_0x3e17ea(0x69d)+'9d',_0x2cbf20=_0x3e17ea(0x505)+'c6',_0xbebe06={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x3f8c20[_0x3e17ea(0x611)],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x579bef={..._0xbebe06};try{Object['assig'+'n'](_0x579bef,JSON[_0x3e17ea(0x650)](localStorage['getIt'+'em'](_0x3f8c20['Ewnco'])||'{}'));}catch(_0x108970){}function _0x5f101a(){var _0x28d731=_0x3e17ea,_0x5ad172={'WclXV':function(_0x14570d,_0x180b01){return _0x14570d!==_0x180b01;}};try{if(_0x3f8c20[_0x28d731(0x2cc)]('siDlL',_0x3f8c20[_0x28d731(0x3da)])){_0x4d88b0[_0x28d731(0x2a8)+'ropag'+_0x28d731(0x487)]();var _0x5e9b18=_0x5ad172['WclXV'](_0x4b69f6[_0x28d731(0x34d)+_0x28d731(0x235)+'te'](_0x28d731(0x47a)+'check'+'ed'),_0x28d731(0x550));_0x47d7f5['setAt'+_0x28d731(0x235)+'te']('aria-'+'check'+'ed',_0x415223(_0x5e9b18)),_0x376d0a(_0x5e9b18);}else localStorage['setIt'+'em'](_0x28d731(0x412)+'a.kou'+'r.v1',JSON[_0x28d731(0x23e)+_0x28d731(0x383)](_0x579bef));}catch(_0x1f4ce2){}}var _0x135c5c={'uwmk':!!window['Unity'+'WebMo'+_0x3e17ea(0x5ae)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x579bef[_0x3e17ea(0x531)+_0x3e17ea(0x32c)],'lastError':''};try{window[_0x3e17ea(0x53b)+'entLi'+_0x3e17ea(0x66a)+'r'](_0x3f8c20[_0x3e17ea(0x30b)],_0x1f3b54=>{var _0x5e541f=_0x3e17ea;try{var _0xbb148c=_0x1f3b54&&(_0x1f3b54['messa'+'ge']||_0x1f3b54[_0x5e541f(0x622)]&&_0x1f3b54[_0x5e541f(0x622)][_0x5e541f(0x324)+'ge'])||_0x3f8c20['AVxDd'];if(_0x1f3b54&&_0x1f3b54['filen'+_0x5e541f(0x34a)])_0xbb148c+='\x20@\x20'+String(_0x1f3b54[_0x5e541f(0x3d2)+_0x5e541f(0x34a)])[_0x5e541f(0x4dc)]('/')[_0x5e541f(0x5b7)]()+':'+(_0x1f3b54['linen'+'o']||'?');_0x135c5c[_0x5e541f(0x35b)+_0x5e541f(0x265)]=_0x3f8c20['YMQjs'](String,_0xbb148c)[_0x5e541f(0x688)](-0x1a*-0xd4+0x22b9+-0x3841,0x16e0+0x157c+-0x2*0x15de);}catch(_0x20e2bf){}});}catch(_0x21250b){}var _0x399284=null,_0x74e08=null,_0x472003={},_0x521e17=[],_0x33dbf6=[],_0x1d36ac=new Map();function _0x29c7dd(_0x7beb9d,_0x3738c1){var _0x15d619=_0x3e17ea;if(!_0x3738c1||_0x7beb9d['inclu'+'des'](_0x3738c1)||_0x7beb9d[_0x15d619(0x766)+'h']>-0x2*0x443+-0xad+0x1*0x973)return;_0x7beb9d['push'](_0x3738c1);}function _0x37d49d(_0x25def9,_0x2f2f07,_0x2d5035,_0x5a9401){var _0x3a1b11=_0x3e17ea,_0x4ff4f8={'ahaFx':function(_0x1bd28d,_0x3717ef){return _0x1bd28d(_0x3717ef);},'GuaSJ':_0x3f8c20[_0x3a1b11(0x318)],'oEEnx':function(_0x3317b0,_0x578a8a){return _0x3317b0*_0x578a8a;},'pnkaM':function(_0x31658f,_0x1abdc0){var _0x3a5ae2=_0x3a1b11;return _0x3f8c20[_0x3a5ae2(0x213)](_0x31658f,_0x1abdc0);}};if(_0x3f8c20[_0x3a1b11(0x22a)](_0x3a1b11(0x321),'bxVJL')){var _0x4ee197=-0x1c3a*0x1+-0x229c+0x3ed6;try{if(_0x3a1b11(0x656)!=='BYJYZ')_0x4ee197=_0x2f2f07&&_0x2f2f07[_0x3a1b11(0x401)]?_0x2f2f07[_0x3a1b11(0x401)]():0x1c03+-0x20b0+0x4ad;else{var _0xc409ae=_0x21633d[_0x3a1b11(0x1f1)+_0x3a1b11(0x26e)+_0x3a1b11(0x40c)](_0x3f8c20[_0x3a1b11(0x731)]);_0xc409ae['class'+_0x3a1b11(0x3d4)]=_0x3a1b11(0x584)+'nge';var _0x2d30a5=_0x1dba26[_0x3a1b11(0x1f1)+_0x3a1b11(0x26e)+'ent']('input');_0x2d30a5['type']=_0x3f8c20[_0x3a1b11(0x6fc)],_0x2d30a5[_0x3a1b11(0x48a)+_0x3a1b11(0x3d4)]=_0x3f8c20[_0x3a1b11(0x406)],_0x2d30a5[_0x3a1b11(0x641)]=_0x113fae,_0x2d30a5['max']=_0x156ee4,_0x2d30a5[_0x3a1b11(0x485)]=_0x560145,_0x2d30a5[_0x3a1b11(0x1dc)]=_0x131001;var _0x23a16f=_0xbe584b['creat'+'eElem'+_0x3a1b11(0x40c)](_0x3a1b11(0x752));_0x23a16f['class'+'Name']=_0x3a1b11(0x263)+'l',_0x23a16f[_0x3a1b11(0x494)+'onten'+'t']=_0x3f8c20[_0x3a1b11(0x564)](_0x41dc79,_0xbd010e);var _0x599ab0=()=>{var _0x29fbd3=_0x3a1b11;_0x23a16f['textC'+'onten'+'t']=_0x4ff4f8[_0x29fbd3(0x530)](_0x314a17,_0x2d30a5[_0x29fbd3(0x1dc)]),_0xc409ae['style'][_0x29fbd3(0x603)+'opert'+'y'](_0x4ff4f8['GuaSJ'],_0x4ff4f8['oEEnx'](_0x4ff4f8[_0x29fbd3(0x652)](_0x2d30a5[_0x29fbd3(0x1dc)],_0x4387af)/(_0x81fa98-_0x535163),-0x35*-0x3a+0x1ee2+-0x2*0x1540)+'%');};return _0x2d30a5[_0x3a1b11(0x67b)+'ut']=()=>{_0x599ab0(),_0x4ff4f8['ahaFx'](_0x953f32,_0x348129(_0x2d30a5['value']));},_0x599ab0(),_0xc409ae[_0x3a1b11(0x27e)+'d'](_0x2d30a5,_0x23a16f),_0xc409ae;}}catch(_0x57cde3){}if(!_0x4ee197)return;_0x29c7dd(_0x25def9,_0x4ee197),_0x2d5035[_0x5a9401]=_0x25def9[_0x3a1b11(0x766)+'h'];if(_0x5a9401==='movem'+_0x3a1b11(0x491)&&_0x25def9[_0x3a1b11(0x766)+'h']){var _0xb7e100=_0x472003[_0x3a1b11(0x2df)+'ve'];if(_0xb7e100)try{_0xb7e100[_0x3a1b11(0x561)+'ed']=![];}catch(_0x58dd64){}}}else return _0x14df87['warn'](_0x3a1b11(0x3b0)+'ra-ko'+_0x3a1b11(0x2fd)+_0x3a1b11(0x23c)+_0x3a1b11(0x37b)+_0x3a1b11(0x326),_0x5f5006,_0x28dad8&&_0x4ec5bf['messa'+'ge']),null;}function _0x13b7d4(_0x7ca863,_0x3d4e34,_0x30f50b){var _0x10bb34=_0x3e17ea,_0x3361e2={'jNjZO':_0x3f8c20['AVxDd'],'vsfNp':function(_0x1790eb,_0x1990f5){return _0x3f8c20['MYfMv'](_0x1790eb,_0x1990f5);},'Objaj':_0x10bb34(0x5fe),'eNDJH':function(_0x31383a,_0x52e05e){var _0xa0f908=_0x10bb34;return _0x3f8c20[_0xa0f908(0x564)](_0x31383a,_0x52e05e);},'rwSkp':function(_0xe83611,_0x361a1f){return _0xe83611(_0x361a1f);},'qsgRU':function(_0x1fb244,_0x442542){return _0x1fb244||_0x442542;}},_0x5b57df=_0x1d36ac[_0x10bb34(0x26d)](_0x7ca863);if(!_0x5b57df){if(_0x3f8c20['KuEmt']!==_0x3f8c20['vniof'])_0x5b57df=new Map(),_0x1d36ac[_0x10bb34(0x2ae)](_0x7ca863,_0x5b57df);else{var _0x462a96=_0x58a0f8&&(_0x54c792[_0x10bb34(0x324)+'ge']||_0x2b058d[_0x10bb34(0x622)]&&_0x4aba2d['error'][_0x10bb34(0x324)+'ge'])||_0x3361e2[_0x10bb34(0x424)];if(_0x1e206e&&_0x446c21[_0x10bb34(0x3d2)+'ame'])_0x462a96+=_0x3361e2['vsfNp'](_0x3361e2['Objaj'],_0x3361e2['eNDJH'](_0x38668a,_0x3238b6[_0x10bb34(0x3d2)+_0x10bb34(0x34a)])[_0x10bb34(0x4dc)]('/')['pop']())+':'+(_0xa33ff8[_0x10bb34(0x5ee)+'o']||'?');_0x26546f[_0x10bb34(0x35b)+_0x10bb34(0x265)]=_0x3361e2['rwSkp'](_0x42f05e,_0x462a96)[_0x10bb34(0x688)](-0x55*-0x5+0x1030+-0x11d9,-0x2597+0x1ad7+-0x34*-0x38);}}if(!_0x5b57df['has'](_0x3d4e34))try{if(_0x10bb34(0x34b)!==_0x10bb34(0x56d)){var _0x2f3749=new _0x399284(_0x7ca863)[_0x10bb34(0x404)+'ield'](_0x3d4e34,_0x30f50b);_0x5b57df[_0x10bb34(0x2ae)](_0x3d4e34,_0x2f3749!==undefined?_0x2f3749[_0x10bb34(0x401)]():null);}else{_0x36bb80[_0x10bb34(0x4fd)](),_0x33e351[_0x10bb34(0x608)]=_0x10bb34(0x474)+_0x10bb34(0x53a)+_0x10bb34(0x536)+'ospac'+'e,mon'+_0x10bb34(0x4cf)+'e',_0x3cb236[_0x10bb34(0x5c1)+'lign']=_0x10bb34(0x5a2),_0x5cc078['textB'+_0x10bb34(0x352)+'ne']=_0x3f8c20[_0x10bb34(0x43f)];var _0x1a64fa=-0x2b+0x199*-0x15+0x21e4,_0x2a7d8e=-0x1*-0xd3f+0x1279*0x1+-0x1fac*0x1,_0x14680d=(_0x78071b,_0x1e33d0)=>{var _0x369ead=_0x10bb34;_0x24078a[_0x369ead(0x50b)+_0x369ead(0x337)]=_0x3361e2[_0x369ead(0x659)](_0x1e33d0,'rgba('+_0x369ead(0x42f)+'35,24'+_0x369ead(0x4a0)+'5)'),_0x2182d1[_0x369ead(0x58b)+_0x369ead(0x637)](_0x78071b,_0x2a7d8e,_0x1a64fa),_0x1a64fa+=0x1b69+0xbe5+0x2*-0x139f;};_0x3f8c20[_0x10bb34(0x677)](_0x14680d,'SAKUR'+_0x10bb34(0x455)+'R\x20v1.'+'1',_0x10bb34(0x69d)+'9d');if(_0x409c55['fps'])_0x14680d(_0x1c02c0+_0x3f8c20['Dsdtp']);if(!_0x45ed1c[_0x10bb34(0x6f5)+_0x10bb34(0x2ea)])_0x3f8c20[_0x10bb34(0x677)](_0x14680d,'waiti'+'ng\x20fo'+'r\x20gam'+'e…',_0x3f8c20[_0x10bb34(0x5d3)]);_0x5df997[_0x10bb34(0x2b0)+'re']();}}catch(_0x2b8b94){_0x5b57df['set'](_0x3d4e34,null);}return _0x5b57df[_0x10bb34(0x26d)](_0x3d4e34);}function _0x932140(_0x1c5003,_0x1c5eb1,_0x1a8e69,_0x2da7f2){var _0x17329c=_0x3e17ea;try{new _0x399284(_0x1c5003)[_0x17329c(0x3ff)+'Field'](_0x1c5eb1,_0x1a8e69,_0x2da7f2);}catch(_0x1618ec){}}function _0x153ee7(_0x98a1c,_0x171c18){var _0x2636a9=_0x3e17ea;try{var _0x256914=new _0x399284(_0x98a1c)[_0x2636a9(0x404)+'ield'](_0x171c18,'u32');return _0x256914?_0x256914[_0x2636a9(0x401)]():0xc69*-0x1+-0x2594+-0x43*-0xbf;}catch(_0x18b221){return 0x214+-0x145d+-0x1249*-0x1;}}function _0x137aa6(_0x4a4dad,_0x25d4d4,_0x5014b3,_0xc13fb1){var _0x3e534c=_0x13b7d4(_0x4a4dad,_0x25d4d4,_0x5014b3);if(_0x3e534c!=null)_0x3f8c20['SpFgw'](_0x932140,_0x4a4dad,_0x25d4d4,_0x5014b3,_0x3f8c20['rusyw'](_0x3e534c,_0xc13fb1));}function _0x15ff87(_0x30b446,_0xdcc6be,_0x2b4845,_0x35bd46,_0x2d058d,_0x36192f,_0x291a00){var _0x40e3e9=_0x3e17ea;try{var _0x55e6e2=_0x74e08[_0x40e3e9(0x4a1)+_0x40e3e9(0x323)]({'typeName':_0xdcc6be,'methodName':_0x2b4845,'params':_0x35bd46,'returnType':_0x2d058d},_0x36192f);return _0x55e6e2['enabl'+'ed']=_0x291a00!==![],_0x472003[_0x30b446]=_0x55e6e2,_0x135c5c['hooks'+'Total']++,_0x55e6e2;}catch(_0x43c8c7){return console[_0x40e3e9(0x354)](_0x3f8c20[_0x40e3e9(0x3ed)],_0x30b446,_0x43c8c7&&_0x43c8c7[_0x40e3e9(0x324)+'ge']),null;}}function _0x3265e3(_0x557ac0,_0x56273b,_0x188fd4,_0x27552b,_0x57b2cd,_0x3aa2ba,_0x44e468){var _0x342c55=_0x3e17ea;try{if(_0x3f8c20[_0x342c55(0x48d)]('opzaA',_0x342c55(0x570)))_0x49c122[_0x342c55(0x267)+'le']=_0x33c8dd,_0x2fbeb4();else{var _0x3a2fd4=_0x74e08['hookP'+_0x342c55(0x3d1)+'x']({'typeName':_0x56273b,'methodName':_0x188fd4,'params':_0x27552b,'returnType':_0x57b2cd},_0x3aa2ba);return _0x3a2fd4[_0x342c55(0x561)+'ed']=_0x44e468!==![],_0x472003[_0x557ac0]=_0x3a2fd4,_0x135c5c[_0x342c55(0x28c)+'Total']++,_0x3a2fd4;}}catch(_0x54e711){if(_0x3f8c20[_0x342c55(0x22a)](_0x3f8c20[_0x342c55(0x4f8)],'sjkCt'))_0x3f8c20['SpFgw'](_0x25f911,_0x113713,_0x300aba,_0x59b4c1,'shoot'+_0x342c55(0x3c2));else return console[_0x342c55(0x354)](_0x342c55(0x3b0)+_0x342c55(0x3f3)+'ur]\x20h'+_0x342c55(0x23c)+_0x342c55(0x37b)+_0x342c55(0x326),_0x557ac0,_0x54e711&&_0x54e711[_0x342c55(0x324)+'ge']),null;}}var _0x42e509=()=>![];try{if(window[_0x3e17ea(0x425)+_0x3e17ea(0x466)+_0x3e17ea(0x5ae)]&&!_0x579bef[_0x3e17ea(0x531)+'ode']){if(_0x3f8c20['UbCmG'](_0x3e17ea(0x664),_0x3e17ea(0x664))){_0x399284=window[_0x3e17ea(0x425)+'WebMo'+_0x3e17ea(0x5ae)][_0x3e17ea(0x514)+'Wrapp'+'er'],_0x74e08=window[_0x3e17ea(0x425)+'WebMo'+_0x3e17ea(0x5ae)][_0x3e17ea(0x3ef)+'me']['creat'+'ePlug'+'in']({'name':_0x3f8c20['fhPzl'],'version':'1.1.0','referencedAssemblies':['Assem'+'bly-C'+_0x3e17ea(0x6e6)+_0x3e17ea(0x6b5)]});if(_0x579bef[_0x3e17ea(0x758)+'od'])_0x15ff87(_0x3f8c20[_0x3e17ea(0x589)],_0x3e17ea(0x462)+'th','Initi'+'ateTa'+'keHea'+'lth',['i32','i32'],undefined,_0x42e509,!!_0x579bef[_0x3e17ea(0x33d)]);if(_0x579bef['hookG'+'odDie'])_0x3f8c20[_0x3e17ea(0x5eb)](_0x15ff87,_0x3e17ea(0x56e)+'e',_0x3f8c20['RzaZl'],_0x3f8c20[_0x3e17ea(0x453)],[_0x3e17ea(0x722),'i32',_0x3f8c20['WYEwZ'],_0x3f8c20[_0x3e17ea(0x3e3)],_0x3e17ea(0x722)],undefined,_0x42e509,!!_0x579bef['god']);if(_0x579bef[_0x3e17ea(0x627)+_0x3e17ea(0x430)+'il'])_0x3f8c20[_0x3e17ea(0x5eb)](_0x15ff87,'noRec'+'oil',_0x3e17ea(0x512)+'nPlat'+'forms'+_0x3e17ea(0x44c)+'tide.'+_0x3e17ea(0x281)+_0x3e17ea(0x6d2)+'on',_0x3f8c20[_0x3e17ea(0x2b1)],[_0x3f8c20[_0x3e17ea(0x3e3)]],undefined,_0x42e509,!!_0x579bef[_0x3e17ea(0x740)+_0x3e17ea(0x310)]);if(_0x579bef['hookC'+_0x3e17ea(0x446)+'e'])_0x3f8c20[_0x3e17ea(0x5eb)](_0x3265e3,_0x3e17ea(0x4e3)+_0x3e17ea(0x433),'OShoo'+_0x3e17ea(0x389),_0x3e17ea(0x29a)+'meRun'+_0x3e17ea(0x681),['i32','i32'],undefined,(_0x33d98e,_0x54845f)=>{var _0x44338e=_0x3e17ea;if(_0x3f8c20[_0x44338e(0x6bb)](_0x44338e(0x4be),'qoiZH'))_0x3f8c20[_0x44338e(0x3f6)](_0x37d49d,_0x33dbf6,_0x54845f,_0x135c5c,_0x3f8c20[_0x44338e(0x51e)]);else{var _0x36f3ec=_0x1d525b['getEl'+'ement'+_0x44338e(0x220)](_0x5a3552);if(_0x36f3ec&&_0x58169a===_0x3f8c20[_0x44338e(0x373)]){var _0x582cbd=_0x36f3ec[_0x44338e(0x2e8)+'ren'];for(var _0x41983e=0x1*-0x10a9+0x8d8+-0x1*-0x7d1;_0x3f8c20['MsmAT'](_0x41983e,_0x582cbd[_0x44338e(0x766)+'h']);_0x41983e++){if(_0x582cbd[_0x41983e]['id']&&_0x3f8c20['NaxGJ'](_0x582cbd[_0x41983e]['id']['index'+'Of'](_0x3f8c20['iJCfc']),0x14f7*-0x1+-0x5*0x21c+0x1f83))_0x582cbd[_0x41983e]['style'][_0x44338e(0x609)+'ay']='none';}}else{if(_0x36f3ec)_0x36f3ec[_0x44338e(0x1e3)][_0x44338e(0x609)+'ay']='none';}}},!![]);if(_0x579bef[_0x3e17ea(0x1ed)+_0x3e17ea(0x446)+'e'])_0x3f8c20['WSmcM'](_0x3265e3,_0x3f8c20['HBWxU'],_0x3f8c20['eOGtv'],_0x3f8c20['ezZMJ'],['i32'],_0x3f8c20[_0x3e17ea(0x3e3)],(_0x3b5f98,_0xef64fe)=>{var _0x58a96c=_0x3e17ea;_0x37d49d(_0x521e17,_0xef64fe,_0x135c5c,_0x3f8c20[_0x58a96c(0x440)]);},!![]);}else{_0x4971b2=_0x441652;if(!_0x575cc5){var _0x115236=_0x57ce39['creat'+_0x3e17ea(0x26e)+'ent'](_0x3e17ea(0x1e3));_0x115236[_0x3e17ea(0x494)+_0x3e17ea(0x74f)+'t']=_0x519bd7,_0x31c68a[_0x3e17ea(0x27e)+_0x3e17ea(0x243)+'d'](_0x115236),_0x1a8913=_0x3f8c20[_0x3e17ea(0x3e4)](_0x5adca8),_0x26a998['appen'+'dChil'+'d'](_0x2b6462),_0x4159a0(()=>_0xc074d2[_0x3e17ea(0x48a)+_0x3e17ea(0x60b)][_0x3e17ea(0x594)](_0x3e17ea(0x23a)));}_0x512b84['class'+_0x3e17ea(0x60b)][_0x3e17ea(0x333)+'e']('shown',_0x1a940e);}}}catch(_0xf48187){console['warn'](_0x3f8c20[_0x3e17ea(0x298)],_0xf48187&&_0xf48187[_0x3e17ea(0x324)+'ge']);}function _0x51b179(_0x115768,_0x42d427){var _0x4bf4c4=_0x3e17ea,_0x4823ec=_0x472003[_0x115768];if(_0x4823ec)try{_0x4823ec[_0x4bf4c4(0x561)+'ed']=!!_0x42d427;}catch(_0x845fb6){}}_0x3f8c20['NhMwQ'](setInterval,()=>{var _0x531766=_0x3e17ea,_0x4835be={'INrHI':function(_0x341f32,_0x1c7ed7){return _0x341f32===_0x1c7ed7;},'HhRXH':_0x3f8c20['WLzjQ'],'ckOoZ':function(_0x3e4877){return _0x3e4877();}};if(!_0x399284||!window[_0x531766(0x725)+'Insta'+_0x531766(0x52c)])return;var _0x4c7604=(Number(_0x579bef[_0x531766(0x753)+_0x531766(0x43d)])||0x4cd*0x5+-0x1*-0x1649+0xfa*-0x2f)/(0x2*0xd7+0x1387*0x1+-0x14d1*0x1),_0xf4ce64=(_0x3f8c20[_0x531766(0x5ef)](Number,_0x579bef[_0x531766(0x614)+'ct'])||-0x556*0x1+0x1b20+-0x1566)/(0x1d63+0x1*-0x22d+-0x1ad2),_0x475b0b=(Number(_0x579bef['gravi'+_0x531766(0x2f4)])||0xaa2+0x1c0e+-0x264c)/(0x1*-0x79a+0x1819+0x1f*-0x85),_0x39789b=Math[_0x531766(0x6e1)](-0x1261+-0x22f5+-0x3557*-0x1,_0x3f8c20['WPuhw'](Number,_0x579bef[_0x531766(0x74d)+'eValu'+'e'])||-0x3*-0x3c2+0x194*-0x6+0x68*-0x3),_0x402431=_0x4c7604!==-0x23d3+-0x1b21+-0x1*-0x3ef5||_0xf4ce64!==0x2*-0xa27+-0x2*-0x21f+0x1011||_0x3f8c20['NOWCP'](_0x475b0b,0x99*0x2+0xb*0x2c8+-0x1fc9)||_0x579bef[_0x531766(0x41d)],_0x22a66f=_0x579bef['noSpr'+'ead']||_0x579bef[_0x531766(0x74d)+_0x531766(0x2f3)]||_0x579bef[_0x531766(0x259)+_0x531766(0x390)]||_0x579bef[_0x531766(0x393)+_0x531766(0x4ca)];if(_0x3f8c20[_0x531766(0x687)](!_0x402431,!_0x22a66f))return;try{if(_0x3f8c20[_0x531766(0x379)]!==_0x3f8c20[_0x531766(0x379)])_0x4835be['INrHI'](_0x4d6ae7[_0x531766(0x64d)],_0x4835be['HhRXH'])&&(_0x255a7a[_0x531766(0x63f)+'ntDef'+_0x531766(0x5af)](),_0x4835be['ckOoZ'](_0x2f9dcf));else for(var _0x2ae318=0xa*0x64+-0xcd2+0x8ea*0x1;_0x3f8c20[_0x531766(0x3ad)](_0x2ae318,_0x521e17[_0x531766(0x766)+'h']);_0x2ae318++){var _0x4b0b2f=_0x521e17[_0x2ae318];if(!_0x4b0b2f)continue;if(_0x4c7604!==-0x5*0x389+-0x1*-0x1d91+-0xbe3){var _0x17e8e4=_0x3f8c20['MNUZZ'][_0x531766(0x4dc)]('|'),_0x14cd23=0x970+-0xc94+-0x6*-0x86;while(!![]){switch(_0x17e8e4[_0x14cd23++]){case'0':_0x137aa6(_0x4b0b2f,-0x1a2a+0xb*0x10a+0x5f*0x28,'f32',_0x4c7604);continue;case'1':_0x3f8c20[_0x531766(0x617)](_0x137aa6,_0x4b0b2f,-0x1*0x2203+-0x2*0x1091+0x1*0x4345,_0x3f8c20[_0x531766(0x4df)],_0x4c7604);continue;case'2':_0x137aa6(_0x4b0b2f,0xedd*-0x2+-0x94+0x1e7e*0x1,_0x531766(0x1e1),_0x4c7604);continue;case'3':_0x3f8c20['exHVv'](_0x137aa6,_0x4b0b2f,0x2653+-0x19e6+-0xc45,'f32',_0x4c7604);continue;case'4':_0x3f8c20['SpFgw'](_0x137aa6,_0x4b0b2f,0x7*-0x55c+-0xc98+0x3248,'f32',_0x4c7604);continue;case'5':_0x3f8c20[_0x531766(0x3f6)](_0x137aa6,_0x4b0b2f,-0x1*-0x1c8b+0x274*0xe+-0x3eaf,'f32',_0x4c7604);continue;}break;}}if(_0xf4ce64!==-0x643+-0x579+0xbbd)_0x3f8c20['exHVv'](_0x137aa6,_0x4b0b2f,0x2239*0x1+0x1*0x1f8c+0x509*-0xd,_0x531766(0x1e1),_0xf4ce64);if(_0x3f8c20[_0x531766(0x3d0)](_0x475b0b,-0x434+0x1*-0x8e6+-0xb*-0x131)){if(_0x3f8c20['tBNCT']!==_0x3f8c20['FGKgc'])_0x137aa6(_0x4b0b2f,-0x1*-0x327+0x19e7+-0xfe*0x1d,'f32',_0x475b0b),_0x3f8c20[_0x531766(0x231)](_0x137aa6,_0x4b0b2f,0x7*0x393+-0x2*-0x864+-0x2981,_0x3f8c20[_0x531766(0x4df)],_0x475b0b);else{var _0x1266d9=(_0x531766(0x30f)+_0x531766(0x713)+_0x531766(0x537))['split']('|'),_0x5c34b8=-0x1*-0x1b91+-0x1d8a+0x1f9;while(!![]){switch(_0x1266d9[_0x5c34b8++]){case'0':_0x557127[_0x531766(0x494)+_0x531766(0x74f)+'t']=_0x2a7b4f;continue;case'1':var _0x557127=_0x3e6e9e['creat'+_0x531766(0x26e)+_0x531766(0x40c)]('span');continue;case'2':var _0xdfb0ea=_0xe19700[_0x531766(0x1f1)+'eElem'+_0x531766(0x40c)]('div');continue;case'3':_0x557127['class'+'Name']=_0x3f8c20['QRaAj'];continue;case'4':_0xdfb0ea['class'+_0x531766(0x3d4)]=_0x3f8c20['BHDtN'];continue;case'5':_0xdfb0ea[_0x531766(0x27e)+'d'](_0x557127,_0x2c7637);continue;case'6':return _0xdfb0ea;case'7':if(_0x3bdb12){var _0x1c6ec3=_0x53a4ee[_0x531766(0x1f1)+_0x531766(0x26e)+_0x531766(0x40c)](_0x3f8c20[_0x531766(0x2a3)]);_0x1c6ec3['class'+'Name']='sk-hi'+'nt',_0x1c6ec3['textC'+_0x531766(0x74f)+'t']=_0x323a8a,_0x557127['appen'+'dChil'+'d'](_0x1c6ec3);}continue;}break;}}}if(_0x579bef['bhop'])_0x3f8c20['gAZcS'](_0x932140,_0x4b0b2f,-0x2210+0x4*0x993+-0x10*0x3a,_0x3f8c20[_0x531766(0x4df)],-(-0x8f2+0x1a85+-0xdac));}}catch(_0x4725ad){}try{for(var _0x10610d=-0x6*-0x2c0+0x1747*-0x1+-0x5*-0x15b;_0x10610d<_0x33dbf6[_0x531766(0x766)+'h'];_0x10610d++){var _0x4e1ded=_0x153ee7(_0x33dbf6[_0x10610d],-0x95*0x17+-0x1fab+0x26*0x131);if(!_0x4e1ded)continue;_0x579bef[_0x531766(0x74d)+_0x531766(0x2f3)]&&(_0x3f8c20[_0x531766(0x3f6)](_0x932140,_0x4e1ded,-0x21fe+-0x121c+-0x2c2*-0x13,_0x531766(0x722),_0x39789b),_0x3f8c20[_0x531766(0x3f6)](_0x932140,_0x4e1ded,0x45e+0x256b+-0x2975,_0x3f8c20['WYEwZ'],_0x39789b));_0x579bef[_0x531766(0x478)+_0x531766(0x67a)]&&(_0x932140(_0x4e1ded,0x8d8*-0x2+0xec*-0x1c+0x2c08,_0x3f8c20['ZRTnq'],-0x73c+0x1*-0x2446+0x2b82),_0x932140(_0x4e1ded,-0x1003*-0x1+0x1aa0+-0x1*0x2a3b,_0x531766(0x1e1),0x67+-0x1fed+0x1f87));if(_0x579bef['infAm'+_0x531766(0x390)])_0x932140(_0x4e1ded,-0x1528+0x1*0x22e6+-0xd62,_0x3f8c20[_0x531766(0x3e3)],-0x2*-0xa61+-0x12bc+0x1e1);_0x579bef[_0x531766(0x393)+'Exp']&&(_0x531766(0x2d7)!==_0x3f8c20['JOmTw']?(_0x394070['hookN'+_0x531766(0x430)+'il']=_0x28bb51,_0x5a03ca()):(_0x3f8c20[_0x531766(0x502)](_0x137aa6,_0x4e1ded,0x1402+0xa35+-0x1dab,'f32',-0x37f+0x3*-0x80d+0x1ba6+0.1),_0x932140(_0x4e1ded,0x1*-0xca1+0x1ae8+0x1*-0xde7,_0x531766(0x1e1),0x1e43*0x1+0x24c6*-0x1+-0x683*-0x1+0.1)));}}catch(_0xa7476f){}},0x20b9*0x1+0x26ff+-0x11bc*0x4),setInterval(()=>{var _0x939f9c=_0x3e17ea;if(_0x939f9c(0x336)!==_0x939f9c(0x336))_0x1665ad=_0x1457f4&&_0x5f931c[_0x939f9c(0x401)]?_0x29b400['val']():0x1*-0x97d+0x1bed+0x5*-0x3b0;else{_0x135c5c['gameL'+'oaded']=!!window['unity'+_0x939f9c(0x490)+_0x939f9c(0x52c)];try{if(_0x939f9c(0x3c1)!==_0x3f8c20[_0x939f9c(0x449)]){var _0x582bbb=_0x62e08a['creat'+_0x939f9c(0x26e)+_0x939f9c(0x40c)]('div');_0x582bbb[_0x939f9c(0x48a)+_0x939f9c(0x3d4)]='sk-mb'+_0x939f9c(0x6af);var _0x25d23b=_0x21045b['creat'+'eElem'+_0x939f9c(0x40c)](_0x939f9c(0x3e9));_0x25d23b[_0x939f9c(0x48a)+'Name']=_0x939f9c(0x702)+_0x939f9c(0x268),_0x25d23b[_0x939f9c(0x494)+_0x939f9c(0x74f)+'t']=_0x2f6f40,_0x582bbb['appen'+_0x939f9c(0x243)+'d'](_0x25d23b);for(var _0x4a793a of _0x2ba651)_0x582bbb['appen'+_0x939f9c(0x243)+'d'](_0x4a793a);_0x5ea010[_0x939f9c(0x27e)+'dChil'+'d'](_0x582bbb);}else{var _0x6f1bcd=0x1e1+0x1*-0x1357+0x1176;for(var _0x4393cf in _0x472003){if(_0x3f8c20['VdBgm']!==_0x3f8c20['VdBgm'])new _0xa3ef6e(_0x98f194)[_0x939f9c(0x3ff)+_0x939f9c(0x6df)](_0x16845d,_0x427cff,_0x86558c);else{if(_0x472003[_0x4393cf]&&_0x472003[_0x4393cf][_0x939f9c(0x4cc)+'ed'])_0x6f1bcd++;}}_0x135c5c['hooks'+'Ok']=_0x6f1bcd;}}catch(_0x127e16){}}},0x10b8*-0x2+0x17bf+-0x3b*-0x3b);var _0x1e5f6d=new Set(),_0x7eda9b={0x1:[],0x3:[]},_0x202fa3=![];function _0x2fec19(_0x206c2f){var _0x50d741=_0x3e17ea;if(_0x3f8c20['NOWCP'](_0x50d741(0x6fa),_0x3f8c20['CnyEJ']))_0x1e5f6d[_0x50d741(0x594)](_0x206c2f[_0x50d741(0x64d)]);else try{new _0x542f06(_0x38ba75)[_0x50d741(0x3ff)+_0x50d741(0x6df)](_0x2334ab,_0x26e008,_0x3b2263);}catch(_0x287cf3){}}function _0x4484b6(_0x4513cd){var _0x6d777f=_0x3e17ea;_0x1e5f6d[_0x6d777f(0x6c0)+'e'](_0x4513cd['code']);}function _0x4cd0af(_0x4691c3){var _0x364c6c=_0x3e17ea;if(_0x4691c3['__sak'+_0x364c6c(0x553)])return;_0x1e5f6d['add']('mouse'+(_0x4691c3[_0x364c6c(0x724)+'n']+(-0x212*-0xe+-0x1b19+-0x1e2)));var _0x24356e=_0x7eda9b[_0x3f8c20['MYfMv'](_0x4691c3['butto'+'n'],0x1967*-0x1+0xadc*0x1+0xe8c)];if(_0x24356e){if(_0x364c6c(0x738)!=='aTYum'){_0x24356e['push'](performance[_0x364c6c(0x232)]());if(_0x3f8c20[_0x364c6c(0x542)](_0x24356e[_0x364c6c(0x766)+'h'],-0x81d+0x14*0x13a+-0x1043))_0x24356e['shift']();}else try{var _0xf18d27=new _0xf0bcc9(_0x143bcd)[_0x364c6c(0x404)+_0x364c6c(0x2a2)](_0x66c88f,_0x5e314f);_0x3c3d76[_0x364c6c(0x2ae)](_0x329473,_0x3f8c20['nXLuZ'](_0xf18d27,_0x634a76)?_0xf18d27[_0x364c6c(0x401)]():null);}catch(_0x5f4cfa){_0x55bdbd[_0x364c6c(0x2ae)](_0x2b3f59,null);}}}function _0x2abc62(_0x1b80f3){var _0x413db3=_0x3e17ea;if(!_0x1b80f3[_0x413db3(0x3df)+'ura'])_0x1e5f6d[_0x413db3(0x6c0)+'e'](_0x413db3(0x423)+_0x3f8c20[_0x413db3(0x61e)](_0x1b80f3['butto'+'n'],-0x17f*0x1+0x2037+-0x1eb7*0x1));}function _0x2eacee(){var _0x4e349f=_0x3e17ea;_0x1e5f6d[_0x4e349f(0x551)]();}function _0x180695(){var _0x28a093=_0x3e17ea;if(_0x202fa3)return;_0x202fa3=!![],window['addEv'+'entLi'+_0x28a093(0x66a)+'r'](_0x3f8c20[_0x28a093(0x240)],_0x2fec19,!![]),window[_0x28a093(0x53b)+'entLi'+_0x28a093(0x66a)+'r'](_0x3f8c20[_0x28a093(0x1f2)],_0x4484b6,!![]),window[_0x28a093(0x53b)+'entLi'+'stene'+'r'](_0x28a093(0x423)+'down',_0x4cd0af,!![]),window[_0x28a093(0x53b)+_0x28a093(0x4f5)+'stene'+'r'](_0x3f8c20[_0x28a093(0x668)],_0x2abc62,!![]),window[_0x28a093(0x53b)+_0x28a093(0x4f5)+'stene'+'r'](_0x28a093(0x422),_0x2eacee);}function _0x2a78f7(_0x54ddc9){var _0x41b844=_0x3e17ea,_0x2696d8=_0x7eda9b[_0x54ddc9]||[],_0x6ae750=performance['now']();while(_0x2696d8[_0x41b844(0x766)+'h']&&_0x3f8c20[_0x41b844(0x542)](_0x6ae750-_0x2696d8[0x1769+0x247a+-0x3be3*0x1],-0x118c+-0x5*0x7ad+-0x121*-0x35))_0x2696d8[_0x41b844(0x1ff)]();return _0x2696d8['lengt'+'h'];}function _0x42d8eb(_0x45ea84){var _0x3f10fb=_0x3e17ea;if(_0x3f8c20['JdaNS'](_0x3f10fb(0x38c),_0x3f10fb(0x38c)))try{_0x5e0f6d[_0x3f10fb(0x561)+'ed']=!!_0x5a2d9b;}catch(_0x252603){}else{if(document['body']&&(_0x3f8c20[_0x3f10fb(0x2c0)](document[_0x3f10fb(0x57c)+_0x3f10fb(0x2a9)],_0x3f8c20[_0x3f10fb(0x534)])||document[_0x3f10fb(0x57c)+'State']===_0x3f8c20['QUpPg']))_0x45ea84();else document[_0x3f10fb(0x53b)+_0x3f10fb(0x4f5)+_0x3f10fb(0x66a)+'r'](_0x3f10fb(0x592)+_0x3f10fb(0x5c5)+_0x3f10fb(0x3b9)+'d',_0x45ea84,{'once':!![]});}}_0x42d8eb(()=>{var _0x42edd3=_0x3e17ea,_0x341f4b={'lYtvI':function(_0x1249e7,_0x5b246a){return _0x1249e7*_0x5b246a;},'wZqNd':function(_0xe9fd0f){return _0x3f8c20['oiizj'](_0xe9fd0f);},'AVRDb':_0x42edd3(0x342)+_0x42edd3(0x217),'kWKSH':_0x3f8c20['OdDCd'],'dnVwf':function(_0x502a0e,_0x2d3e9b){return _0x502a0e/_0x2d3e9b;},'MHvMB':function(_0x4f2690,_0x1defbf){var _0xe36236=_0x42edd3;return _0x3f8c20[_0xe36236(0x1f8)](_0x4f2690,_0x1defbf);},'xbouL':function(_0xe58fde,_0x257c24){return _0x3f8c20['SLNPo'](_0xe58fde,_0x257c24);},'ERvfW':function(_0x5b2dcc,_0x3b2fa9){return _0x5b2dcc-_0x3b2fa9;},'zoihw':function(_0x4b9db2,_0x4bc78e){return _0x4b9db2+_0x4bc78e;},'bVjbm':function(_0x38a145,_0x53e4dd){var _0x452197=_0x42edd3;return _0x3f8c20[_0x452197(0x710)](_0x38a145,_0x53e4dd);},'ICKUk':function(_0x286ea6,_0x57d821){return _0x286ea6*_0x57d821;},'YnPgo':function(_0x355ecd,_0x398d4b){var _0x1b0fe7=_0x42edd3;return _0x3f8c20[_0x1b0fe7(0x359)](_0x355ecd,_0x398d4b);},'YLYFh':_0x42edd3(0x402),'CGsgv':_0x42edd3(0x763)+_0x42edd3(0x42f)+'35,24'+'0,0.7'+'5)','YpPkh':_0x3f8c20['EokIJ'],'mThEz':_0x42edd3(0x550),'aWErN':'aria-'+_0x42edd3(0x3bf)+'ed','HNPHK':function(_0x206131,_0x577e25){return _0x206131(_0x577e25);},'IHhzw':_0x3f8c20[_0x42edd3(0x611)],'LuVJj':'pqcWO','wTimC':_0x42edd3(0x5bf)+'n','Lsmmg':function(_0xf95ca6){var _0x31af89=_0x42edd3;return _0x3f8c20[_0x31af89(0x3e4)](_0xf95ca6);},'TAZQN':function(_0x35c98b){return _0x35c98b();},'mJyKU':function(_0x845f01,_0x50dec6){return _0x3f8c20['PodaD'](_0x845f01,_0x50dec6);},'WEOgn':function(_0x26a9b8,_0x249d61){return _0x26a9b8*_0x249d61;},'jqtmv':_0x42edd3(0x3aa)+_0x42edd3(0x590)+_0x42edd3(0x63e)+_0x42edd3(0x503)+_0x42edd3(0x510)+'i,san'+'s-ser'+'if','RniCw':_0x42edd3(0x763)+_0x42edd3(0x42f)+_0x42edd3(0x4b0)+'0,0.5'+'5)','JLDoW':_0x42edd3(0x69c),'BVXec':_0x3f8c20['wMTPZ'],'XAYjm':_0x3f8c20[_0x42edd3(0x5b8)],'BGxDg':_0x42edd3(0x64c)+_0x42edd3(0x5a1)+_0x42edd3(0x737),'OruiE':_0x3f8c20[_0x42edd3(0x55b)],'jQrKP':_0x42edd3(0x2d1),'UMZdG':'ZPVkz','xmjDp':_0x42edd3(0x605)+'ody','ZTjww':function(_0x2e96f7,_0x577ac1){return _0x2e96f7>_0x577ac1;},'BLBHv':function(_0x4e2c96,_0x51400e){var _0x1da807=_0x42edd3;return _0x3f8c20[_0x1da807(0x41f)](_0x4e2c96,_0x51400e);},'FEalN':_0x3f8c20[_0x42edd3(0x571)],'bprLs':'set_t'+'arget'+'Frame'+'Rate','ayepM':_0x3f8c20[_0x42edd3(0x2fa)],'ubaNL':function(_0x521e0c,_0xa6a208){var _0x35a39d=_0x42edd3;return _0x3f8c20[_0x35a39d(0x741)](_0x521e0c,_0xa6a208);},'XtHdA':function(_0x57c664,_0x4e9e86){return _0x57c664+_0x4e9e86;},'yMhWe':_0x3f8c20['VjRjA'],'SKeTt':function(_0x960025,_0x4d6eda){return _0x3f8c20['FNUzX'](_0x960025,_0x4d6eda);},'VTCgp':_0x3f8c20['BVLds'],'nwcmI':_0x3f8c20['wMfYs'],'eltzp':_0x42edd3(0x59e)+_0x42edd3(0x3ce)+'t\x20','KYWWe':_0x3f8c20[_0x42edd3(0x558)],'BmMDX':_0x42edd3(0x5a6)+'s','lzcaR':function(_0xfbb9e3,_0x218f9f,_0x3e46ac){return _0xfbb9e3(_0x218f9f,_0x3e46ac);},'izEFX':_0x3f8c20[_0x42edd3(0x245)],'cIxQt':function(_0x3b0e89){return _0x3f8c20['sZquX'](_0x3b0e89);},'MUXPo':'god','AwHBN':function(_0x3bbd44){return _0x3bbd44();},'fdkrt':function(_0x94b0ce){return _0x94b0ce();},'IkVOX':_0x3f8c20['FIMlo'],'cfyjg':function(_0x3a63fa){var _0x5d84ba=_0x42edd3;return _0x3f8c20[_0x5d84ba(0x6c8)](_0x3a63fa);},'seKot':function(_0x1c13a4,_0x1de80c){return _0x1c13a4===_0x1de80c;},'LompY':function(_0xe185de){return _0x3f8c20['zfQBp'](_0xe185de);},'YuLho':'\x20|\x20ga'+_0x42edd3(0x380),'qBcSr':function(_0x2b78a8,_0x3bf622,_0x5c4089,_0x537ec5,_0x5a9f15,_0x4cbea8){return _0x2b78a8(_0x3bf622,_0x5c4089,_0x537ec5,_0x5a9f15,_0x4cbea8);},'kNZIs':function(_0x5a7652,_0x3a34bf,_0x1cb254,_0x5b1f31){return _0x5a7652(_0x3a34bf,_0x1cb254,_0x5b1f31);},'DTvsn':'bdzUl','BfHgL':function(_0x5677e3,_0x1770bc){return _0x5677e3(_0x1770bc);},'iNHse':function(_0x260386){return _0x260386();},'wveWu':'activ'+'e','nxtks':function(_0x13c997,_0x334e36){return _0x3f8c20['NCJdA'](_0x13c997,_0x334e36);},'PPxqe':_0x3f8c20['lfrpF'],'NNpId':function(_0x3c7cc7,_0x15c56e){return _0x3c7cc7===_0x15c56e;},'xUAkj':_0x42edd3(0x516)+_0x42edd3(0x619)+_0x42edd3(0x743)+'rlay\x20'+_0x42edd3(0x6c4)+_0x42edd3(0x3a3)+_0x42edd3(0x6ed)+_0x42edd3(0x45e)+'ad\x20to'+_0x42edd3(0x75a)+')','kfdMq':function(_0x275f92,_0x4f5a54){var _0x6cc119=_0x42edd3;return _0x3f8c20[_0x6cc119(0x5a4)](_0x275f92,_0x4f5a54);},'brjLm':function(_0x51394b,_0xdd688a){return _0x51394b+_0xdd688a;},'IcNKE':function(_0x300340,_0x3cf49f){return _0x3f8c20['AevpL'](_0x300340,_0x3cf49f);},'CGegM':'\x20hook'+'s','EgFtY':'mn-si'+'de','GqVFk':_0x3f8c20[_0x42edd3(0x646)],'MwgIZ':_0x3f8c20[_0x42edd3(0x45f)],'vGyGx':_0x3f8c20[_0x42edd3(0x400)],'jppfD':_0x42edd3(0x1f4),'btRIn':_0x3f8c20[_0x42edd3(0x739)],'sYFdt':_0x3f8c20['eagMd'],'idkAI':function(_0x2a7245,_0x1bdc0d){return _0x2a7245+_0x1bdc0d;},'bNouP':function(_0x26a9ba,_0x4f5ddb){return _0x26a9ba===_0x4f5ddb;},'SFnCO':function(_0x6aa959,_0x5ad2bc){return _0x6aa959===_0x5ad2bc;}};_0x579bef['adblo'+'ck']&&(_0x42edd3(0x574)===_0x3f8c20['FleIi']?setInterval(()=>{var _0x5ddbfc=_0x42edd3;try{for(var _0x5a1d82 of[_0x5ddbfc(0x34f)+_0x5ddbfc(0x666)+_0x5ddbfc(0x745)+'-pare'+'nt',_0x3f8c20['tbemY'],_0x3f8c20[_0x5ddbfc(0x444)],_0x5ddbfc(0x431)+_0x5ddbfc(0x60e)+'-banr'+'s']){var _0x3574e4=document['getEl'+'ement'+_0x5ddbfc(0x220)](_0x5a1d82);if(_0x3574e4&&_0x5a1d82===_0x5ddbfc(0x431)+'creen'+_0x5ddbfc(0x476)+'s'){var _0x39abd3=_0x3574e4['child'+'ren'];for(var _0xbeb72b=0x1d87+-0x1*-0x55d+-0x2c*0xcb;_0x3f8c20['NCJdA'](_0xbeb72b,_0x39abd3['lengt'+'h']);_0xbeb72b++){if(_0x3f8c20[_0x5ddbfc(0x6ea)](_0x3f8c20['PSdPr'],_0x3f8c20['NhNqR'])){if(_0x39abd3[_0xbeb72b]['id']&&_0x39abd3[_0xbeb72b]['id'][_0x5ddbfc(0x4c5)+'Of']('kour-'+_0x5ddbfc(0x353))===-0x3*-0x9a7+-0x3*0x19+-0x3*0x98e)_0x39abd3[_0xbeb72b][_0x5ddbfc(0x1e3)]['displ'+'ay']=_0x5ddbfc(0x2ac);}else{var _0x141582=_0x4d1926['devic'+_0x5ddbfc(0x2ba)+'lRati'+'o']||0x1f5c+-0xeed+0x2bd*-0x6,_0x387fbb=_0x29ac39[_0x5ddbfc(0x31d)+_0x5ddbfc(0x47d)],_0x5dda12=_0x4556f4[_0x5ddbfc(0x31d)+'Heigh'+'t'];if(_0x387fbb===_0x29f434['w']&&_0x5dda12===_0x23dd4e['h']&&_0x141582===_0x42066b['dpr'])return;_0x515e80['w']=_0x387fbb,_0x532904['h']=_0x5dda12,_0x237d52[_0x5ddbfc(0x4b8)]=_0x141582,_0x2fd752[_0x5ddbfc(0x57a)]=_0x4cdb7f['round'](_0x341f4b[_0x5ddbfc(0x3c5)](_0x387fbb,_0x141582)),_0x51cee0[_0x5ddbfc(0x4fb)+'t']=_0x3bf2b1[_0x5ddbfc(0x428)](_0x5dda12*_0x141582),_0x13067e[_0x5ddbfc(0x49a)+_0x5ddbfc(0x48b)+'rm'](_0x141582,0xd85*-0x1+-0x92b*-0x3+0x166*-0xa,-0x821*-0x2+-0x2699+-0x2b*-0x85,_0x141582,0xd6a+0x1*-0x85a+-0x36*0x18,-0x1e59+0xe2f*0x2+-0x1fb*-0x1);}}}else{if(_0x3574e4)_0x3574e4[_0x5ddbfc(0x1e3)]['displ'+'ay']=_0x3f8c20[_0x5ddbfc(0x558)];}}}catch(_0x15cc5e){}},0x1*-0x164f+0x6*0x4eb+0x9d):(_0x4a676d=new _0x421645(),_0x42b33f[_0x42edd3(0x2ae)](_0x40ccf8,_0xc3cdf8)));var _0xf29812=document[_0x42edd3(0x1f1)+_0x42edd3(0x26e)+_0x42edd3(0x40c)](_0x42edd3(0x484)+'s');_0xf29812['style'][_0x42edd3(0x3e2)+'xt']=_0x42edd3(0x6ff)+_0x42edd3(0x75d)+_0x42edd3(0x757)+_0x42edd3(0x5ca)+_0x42edd3(0x3c0)+'dth:1'+'00vw;'+'heigh'+_0x42edd3(0x42c)+_0x42edd3(0x600)+_0x42edd3(0x4c5)+_0x42edd3(0x477)+_0x42edd3(0x527)+'6;poi'+'nter-'+_0x42edd3(0x5c8)+_0x42edd3(0x1fc)+'e';var _0x62e57a=_0xf29812['getCo'+_0x42edd3(0x43e)]('2d');function _0x204256(){var _0x423627=_0x42edd3,_0x466edf={'rsNtt':function(_0x3c3411){var _0x5c6cab=_0x1dad;return _0x341f4b[_0x5c6cab(0x29c)](_0x3c3411);}};try{if('iSJYj'===_0x423627(0x293)){var _0x262e9b=document[_0x423627(0x431)+'creen'+'Eleme'+'nt'],_0x219ea6=_0x262e9b&&_0x262e9b[_0x423627(0x62b)+'me']!==_0x423627(0x405)+'S'?_0x262e9b:document[_0x423627(0x647)]||document[_0x423627(0x730)+'entEl'+'ement'];if(_0xf29812[_0x423627(0x262)+_0x423627(0x40e)]!==_0x219ea6)_0x219ea6[_0x423627(0x27e)+_0x423627(0x243)+'d'](_0xf29812);}else _0x35e5f3[_0x423627(0x758)+'od']=_0x201a1b,_0x521260[_0x423627(0x758)+_0x423627(0x697)]=_0x72e0f9,_0x254bf3['hookN'+_0x423627(0x430)+'il']=_0x48c681,_0x2e591e[_0x423627(0x1ed)+_0x423627(0x446)+'e']=_0x53e860,_0x466edf['rsNtt'](_0x593d7f),_0x2deaff[_0x423627(0x4ec)+'d']();}catch(_0x2d83be){try{document['body'][_0x423627(0x27e)+_0x423627(0x243)+'d'](_0xf29812);}catch(_0x1c1990){}}}var _0x32b5d4={'w':0x0,'h':0x0,'dpr':0x0};function _0xc29f92(){var _0x3e8280=_0x42edd3;if(_0x3f8c20['ZegMD']!==_0x3e8280(0x361)){var _0x22bd33=window[_0x3e8280(0x72e)+'ePixe'+'lRati'+'o']||-0x72d*-0x1+0x11*-0x1c9+-0x11*-0x15d,_0x47a2fd=window[_0x3e8280(0x31d)+'Width'],_0x582bf5=window['inner'+'Heigh'+'t'];if(_0x3f8c20['UbCmG'](_0x47a2fd,_0x32b5d4['w'])&&_0x582bf5===_0x32b5d4['h']&&_0x22bd33===_0x32b5d4['dpr'])return;_0x32b5d4['w']=_0x47a2fd,_0x32b5d4['h']=_0x582bf5,_0x32b5d4[_0x3e8280(0x4b8)]=_0x22bd33,_0xf29812['width']=Math['round'](_0x47a2fd*_0x22bd33),_0xf29812[_0x3e8280(0x4fb)+'t']=Math['round'](_0x3f8c20[_0x3e8280(0x366)](_0x582bf5,_0x22bd33)),_0x62e57a[_0x3e8280(0x49a)+_0x3e8280(0x48b)+'rm'](_0x22bd33,0x7d+0x25c8+-0x2645,0xb9e+0x1de7+-0x9*0x49d,_0x22bd33,-0x86*0x3d+-0x1faf+0x3f9d*0x1,-0xeff*-0x1+0x7*-0x411+0xd78);}else{var _0x16de27=('3|2|5'+'|0|1|'+'4')[_0x3e8280(0x4dc)]('|'),_0x2fe3c2=0x2*-0xa+0x125*0x1+-0x15*0xd;while(!![]){switch(_0x16de27[_0x2fe3c2++]){case'0':_0x3c4e37[_0x3e8280(0x1dc)]=_0x187c35;continue;case'1':_0x3c4e37[_0x3e8280(0x5cf)+_0x3e8280(0x721)]=()=>_0x4baab5(_0x3c4e37['value']);continue;case'2':_0x3c4e37['class'+_0x3e8280(0x3d4)]=_0x341f4b[_0x3e8280(0x60f)];continue;case'3':var _0x3c4e37=_0x10bd11[_0x3e8280(0x1f1)+'eElem'+_0x3e8280(0x40c)](_0x341f4b[_0x3e8280(0x24d)]);continue;case'4':return _0x3c4e37;case'5':for(var [_0x2a641f,_0x85c44c]of _0x457ee5){var _0x3d3ede=_0xef5a13['creat'+_0x3e8280(0x26e)+_0x3e8280(0x40c)]('optio'+'n');_0x3d3ede[_0x3e8280(0x1dc)]=_0x2a641f,_0x3d3ede[_0x3e8280(0x494)+_0x3e8280(0x74f)+'t']=_0x85c44c,_0x3c4e37['appen'+'dChil'+'d'](_0x3d3ede);}continue;}break;}}}var _0x17918a=0x8b*0x3c+0x17c9+-0x2f*0x133,_0x4362b7=performance[_0x42edd3(0x232)](),_0x5c890a=-0x811+0x921*-0x3+-0x2*-0x11ba;function _0x50109d(_0x1aae1d){var _0x361c38=_0x42edd3,_0x12b134={'jfchR':_0x361c38(0x684),'stoTj':function(_0x3faff5,_0x39ea62){return _0x3faff5*_0x39ea62;},'gpJfN':'rgba('+_0x361c38(0x2a4)+_0x361c38(0x6ec)+_0x361c38(0x237)+'5)','PuwXB':_0x361c38(0x763)+'22,8,'+_0x361c38(0x32f)+'7)','TiyOt':_0x3f8c20[_0x361c38(0x460)],'FuxAx':_0x361c38(0x5d1),'INhfx':_0x3f8c20[_0x361c38(0x72b)],'AtKBZ':'700\x20','duJOQ':function(_0x1c6c23,_0x170a2d){return _0x1c6c23*_0x170a2d;},'bISEV':function(_0x17d8d3,_0x4133f3){var _0x29f931=_0x361c38;return _0x3f8c20[_0x29f931(0x360)](_0x17d8d3,_0x4133f3);},'SUUug':_0x3f8c20['mlyBr']};if(_0x3f8c20[_0x361c38(0x6bb)](_0x3f8c20['YfwsY'],'OIXEq'))_0x3f2429[_0x361c38(0x614)+'ct']=_0x2b321e,_0x47b4ed();else{var _0x9a39a1=Number(_0x579bef[_0x361c38(0x267)+'le'])||0xa7*-0xb+-0x10d7+0x1805,_0x2b1f4d=(-0x94a+-0x19fe+-0xbce*-0x3)*_0x9a39a1,_0x1c6973=(-0x1ec0+-0x33b+0x1*0x21ff)*_0x9a39a1,_0x1ceb13=_0x2b1f4d*(-0x2f6*0x7+-0x239e+0x1*0x385b)+_0x1c6973*(0x1*0x4bd+-0x412+-0xa9*0x1),_0x3b9013=_0x2b1f4d*(-0xcc8*0x1+-0x1659+0x2324)+_0x1c6973*(-0x1950+0xaf7+-0x4c9*-0x3),_0x1b1331=_0x579bef['ksPos'],_0x207334=_0x3f8c20[_0x361c38(0x71a)](_0x1b1331,'br')?_0x3f8c20[_0x361c38(0x213)](_0x1aae1d[_0x361c38(0x2ed)]-(0x2570+-0x84*-0x49+-0x4b04),_0x1ceb13):_0x1aae1d[_0x361c38(0x5a2)]+(0x2b*-0xb5+0x164*-0x19+-0x1*-0x413b),_0x199541=_0x3f8c20[_0x361c38(0x543)](_0x1b1331,'ml')?_0x3f8c20[_0x361c38(0x213)](_0x3f8c20[_0x361c38(0x61e)](_0x1aae1d['top'],_0x1aae1d[_0x361c38(0x4fb)+'t']/(0x872+0x1ffa+-0x286a)),_0x3b9013/(-0x2*0x3c0+-0x17a5+-0x91*-0x37)):_0x1aae1d[_0x361c38(0x616)+'m']-_0x3b9013-(_0x3f8c20['MKUSv'](_0x1b1331,'bl')?-0x1*0x22e8+0x1924+0xa24:0x32*-0x69+-0x2699+0x3bb1),_0x4556d1=(_0x352ed1,_0x3311ce,_0x3309fd,_0x41b1da,_0x15c9aa,_0x29930c,_0x142bee)=>{var _0x3ca8f6=_0x361c38,_0x3d62af={'ISgze':'optio'+'n'};if(_0x12b134[_0x3ca8f6(0x2ec)]===_0x3ca8f6(0x684)){var _0x5261b9=_0x1e5f6d['has'](_0x3311ce);_0x62e57a[_0x3ca8f6(0x4fd)](),_0x62e57a['begin'+_0x3ca8f6(0x5c9)]();if(_0x62e57a[_0x3ca8f6(0x428)+'Rect'])_0x62e57a[_0x3ca8f6(0x428)+'Rect'](_0x3309fd,_0x41b1da,_0x15c9aa,_0x29930c,_0x12b134[_0x3ca8f6(0x675)](0x2194+0x10a8+-0x3235,_0x9a39a1));else _0x62e57a[_0x3ca8f6(0x39c)](_0x3309fd,_0x41b1da,_0x15c9aa,_0x29930c);_0x62e57a['fillS'+_0x3ca8f6(0x337)]=_0x5261b9?_0x12b134[_0x3ca8f6(0x54e)]:_0x12b134[_0x3ca8f6(0x46d)],_0x62e57a[_0x3ca8f6(0x386)](),_0x62e57a[_0x3ca8f6(0x282)+'idth']=-0x74e+-0x1*0xb29+0x1278,_0x62e57a[_0x3ca8f6(0x729)+_0x3ca8f6(0x602)+'e']=_0x5261b9?_0x2cbf20:_0x12b134[_0x3ca8f6(0x607)],_0x62e57a[_0x3ca8f6(0x729)+'e']();_0x5261b9&&(_0x62e57a['shado'+'wColo'+'r']=_0x6b2e8e,_0x62e57a['shado'+_0x3ca8f6(0x4ae)]=-0x1*0x973+0x425+-0x157*-0x4,_0x62e57a['fill'](),_0x62e57a[_0x3ca8f6(0x408)+_0x3ca8f6(0x4ae)]=-0xf0e+-0x103*0x4+0x2*0x98d);_0x62e57a['fillS'+_0x3ca8f6(0x337)]=_0x5261b9?_0x12b134[_0x3ca8f6(0x5ed)]:_0x12b134['INhfx'],_0x62e57a['textA'+_0x3ca8f6(0x700)]=_0x3ca8f6(0x20d)+'r',_0x62e57a[_0x3ca8f6(0x4f4)+'aseli'+'ne']='middl'+'e',_0x62e57a[_0x3ca8f6(0x608)]=_0x12b134['AtKBZ']+Math[_0x3ca8f6(0x428)](_0x12b134[_0x3ca8f6(0x5fd)](0x688+0x542*0x7+-0x2b4a,_0x9a39a1))+('px\x20ui'+'-sans'+'-seri'+'f,sys'+'tem-u'+_0x3ca8f6(0x24f)+_0x3ca8f6(0x443)+'if'),_0x62e57a[_0x3ca8f6(0x58b)+_0x3ca8f6(0x637)](_0x352ed1,_0x3309fd+_0x15c9aa/(0x2*-0x9c7+0x22e0+-0xf50),_0x41b1da+_0x29930c/(0x10da+0x1a5d+-0x2b35)-(_0x142bee?_0x12b134[_0x3ca8f6(0x4b3)](0x1*-0x14bd+-0xa55+0x471*0x7,_0x9a39a1):0x8a9+-0x7f7*-0x1+0x98*-0x1c));if(_0x142bee){if('NNvqw'===_0x3ca8f6(0x595))try{_0x1324c6[_0x3ca8f6(0x32b)+'em']('sakur'+'a.kou'+_0x3ca8f6(0x23f)+'v1',_0x552c84[_0x3ca8f6(0x23e)+_0x3ca8f6(0x383)](_0x2f5d45));}catch(_0x34971a){}else _0x62e57a['font']=_0x12b134['SUUug']+Math[_0x3ca8f6(0x428)]((-0x22d*0x6+0x22e0+-0x15c9)*_0x9a39a1)+(_0x3ca8f6(0x3aa)+_0x3ca8f6(0x590)+'-seri'+_0x3ca8f6(0x503)+_0x3ca8f6(0x510)+_0x3ca8f6(0x24f)+_0x3ca8f6(0x443)+'if'),_0x62e57a['fillS'+_0x3ca8f6(0x337)]=_0x5261b9?_0x3ca8f6(0x5d1):_0x3ca8f6(0x763)+_0x3ca8f6(0x42f)+_0x3ca8f6(0x4b0)+_0x3ca8f6(0x1e4)+'5)',_0x62e57a['fillT'+_0x3ca8f6(0x637)](_0x142bee,_0x3309fd+_0x15c9aa/(0x1*0x12b3+-0x2f*0x55+-0x9e*0x5),_0x41b1da+_0x29930c/(0x155b+0x1c1f+0x2*-0x18bc)+(-0x1b49+0xa07*-0x3+-0x991*-0x6)*_0x9a39a1);}_0x62e57a[_0x3ca8f6(0x2b0)+'re']();}else{var _0x312af9=_0x5e0ae8['creat'+_0x3ca8f6(0x26e)+'ent'](_0x3d62af[_0x3ca8f6(0x693)]);_0x312af9['value']=_0x362056,_0x312af9[_0x3ca8f6(0x494)+_0x3ca8f6(0x74f)+'t']=_0x59dff5,_0x3d091b[_0x3ca8f6(0x27e)+_0x3ca8f6(0x243)+'d'](_0x312af9);}};_0x4556d1('W',_0x361c38(0x552),_0x3f8c20[_0x361c38(0x61e)](_0x207334,_0x2b1f4d)+_0x1c6973,_0x199541,_0x2b1f4d,_0x2b1f4d),_0x4556d1('A',_0x361c38(0x695),_0x207334,_0x199541+_0x2b1f4d+_0x1c6973,_0x2b1f4d,_0x2b1f4d),_0x4556d1('S',_0x3f8c20['oTUoZ'],_0x207334+_0x2b1f4d+_0x1c6973,_0x199541+_0x2b1f4d+_0x1c6973,_0x2b1f4d,_0x2b1f4d),_0x3f8c20['XYbDc'](_0x4556d1,'D','KeyD',_0x3f8c20['MYfMv'](_0x207334,(_0x2b1f4d+_0x1c6973)*(0x1*-0x167c+-0x6*-0x54b+-0x1*0x944)),_0x3f8c20[_0x361c38(0x61e)](_0x3f8c20['miQRv'](_0x199541,_0x2b1f4d),_0x1c6973),_0x2b1f4d,_0x2b1f4d);var _0x275fb9=_0x3f8c20[_0x361c38(0x456)](_0x1ceb13-_0x1c6973,-0x408*-0x6+-0x561+0x1*-0x12cd),_0xf86560=_0x199541+_0x3f8c20[_0x361c38(0x366)](_0x3f8c20[_0x361c38(0x61e)](_0x2b1f4d,_0x1c6973),-0xd95+-0x8e9*-0x1+-0x2*-0x257);_0x4556d1(_0x3f8c20[_0x361c38(0x205)],_0x361c38(0x423)+'1',_0x207334,_0xf86560,_0x275fb9,_0x2b1f4d,_0x579bef[_0x361c38(0x26f)]?_0x3f8c20['bmLZY'](_0x2a78f7,-0x1e7b+0x1*0x20fc+-0x280)+'\x20CPS':''),_0x4556d1('RMB',_0x361c38(0x423)+'3',_0x207334+_0x275fb9+_0x1c6973,_0xf86560,_0x275fb9,_0x2b1f4d,_0x579bef['ksCps']?_0x3f8c20['ApGAa'](_0x2a78f7(0x1*-0x26b0+0x1*0x63f+0x2074),_0x3f8c20['ErWJr']):''),_0x4556d1('',_0x361c38(0x654),_0x207334,_0x3f8c20[_0x361c38(0x45d)](_0xf86560+_0x2b1f4d,_0x1c6973),_0x1ceb13,_0x3f8c20[_0x361c38(0x360)](_0x2b1f4d,0xdab+0x26e6+-0x3491*0x1+0.45));}}function _0x33d752(_0x4ee454){var _0x8f1a79=_0x42edd3,_0x5cc8ba=_0x341f4b[_0x8f1a79(0x497)](_0x4ee454[_0x8f1a79(0x57a)],-0x21ca+-0x2437+0x4603),_0x1c22e1=_0x4ee454[_0x8f1a79(0x4fb)+'t']/(0x263d+-0x2*-0x979+-0x392d),_0x37ddb3=_0x341f4b[_0x8f1a79(0x746)](Number,_0x579bef['chSiz'+'e'])||-0x1e87*-0x1+0x1*-0x1bfd+-0x289,_0x34495b=/^#[0-9a-f]{6}$/i['test'](_0x579bef['chCol'+'or'])?_0x579bef[_0x8f1a79(0x229)+'or']:_0x8f1a79(0x69d)+'9d';_0x62e57a['save'](),_0x62e57a[_0x8f1a79(0x729)+_0x8f1a79(0x602)+'e']=_0x34495b,_0x62e57a[_0x8f1a79(0x50b)+'tyle']=_0x34495b,_0x62e57a['lineW'+'idth']=Math[_0x8f1a79(0x6e1)](-0x40d*0x3+0x55f*0x4+-0x954+0.5,(-0x12f*0x17+-0x3f5*-0x1+0x1746)*_0x37ddb3),_0x62e57a[_0x8f1a79(0x408)+_0x8f1a79(0x75f)+'r']=_0x34495b,_0x62e57a[_0x8f1a79(0x408)+_0x8f1a79(0x4ae)]=-0x5ee+0x977*0x4+-0x1fe8;var _0x8a710a=(0x1384+0x20a5+-0x3423)*_0x37ddb3,_0x442239=(0x1f*0xb3+0xbee*-0x1+0x3*-0x33d)*_0x37ddb3;_0x62e57a[_0x8f1a79(0x2e4)+'Path'](),_0x62e57a[_0x8f1a79(0x236)+'o'](_0x341f4b[_0x8f1a79(0x68c)](_0x5cc8ba,_0x8a710a)-_0x442239,_0x1c22e1),_0x62e57a['lineT'+'o'](_0x341f4b[_0x8f1a79(0x62c)](_0x5cc8ba,_0x8a710a),_0x1c22e1),_0x62e57a['moveT'+'o'](_0x5cc8ba+_0x8a710a,_0x1c22e1),_0x62e57a[_0x8f1a79(0x5b3)+'o'](_0x341f4b[_0x8f1a79(0x3b4)](_0x5cc8ba,_0x8a710a)+_0x442239,_0x1c22e1),_0x62e57a[_0x8f1a79(0x236)+'o'](_0x5cc8ba,_0x341f4b[_0x8f1a79(0x62c)](_0x1c22e1-_0x8a710a,_0x442239)),_0x62e57a[_0x8f1a79(0x5b3)+'o'](_0x5cc8ba,_0x1c22e1-_0x8a710a),_0x62e57a['moveT'+'o'](_0x5cc8ba,_0x1c22e1+_0x8a710a),_0x62e57a['lineT'+'o'](_0x5cc8ba,_0x341f4b[_0x8f1a79(0x4d1)](_0x1c22e1,_0x8a710a)+_0x442239),_0x62e57a[_0x8f1a79(0x729)+'e'](),_0x62e57a[_0x8f1a79(0x2e4)+_0x8f1a79(0x5c9)](),_0x62e57a['arc'](_0x5cc8ba,_0x1c22e1,_0x341f4b[_0x8f1a79(0x28b)](-0x1f9d*-0x1+0x56b*-0x1+0x2e9*-0x9+0.6000000000000001,_0x37ddb3),0x610+-0x17e1*0x1+0x11d1,Math['PI']*(0x1*0x30+0x13*0xc2+-0xe94)),_0x62e57a['fill'](),_0x62e57a[_0x8f1a79(0x2b0)+'re']();}function _0x57f6fb(_0x518302){var _0x327f74=_0x42edd3;_0x62e57a['save'](),_0x62e57a['font']=_0x327f74(0x474)+_0x327f74(0x53a)+_0x327f74(0x536)+_0x327f74(0x4cf)+'e,mon'+_0x327f74(0x4cf)+'e',_0x62e57a['textA'+'lign']=_0x327f74(0x5a2),_0x62e57a['textB'+_0x327f74(0x352)+'ne']='top';var _0x1e0c4a=-0x1*0x220f+-0xc7*0x29+0x421a*0x1,_0x2a3d9a=0x12e0+0x25e0+0xe2d*-0x4,_0x4c2a76=(_0x1d39e0,_0x63e7c8)=>{var _0x4dc7f4=_0x327f74,_0x2e7c79={'VpxEc':function(_0x431d7d,_0x591ccb){var _0x2208b5=_0x1dad;return _0x341f4b[_0x2208b5(0x371)](_0x431d7d,_0x591ccb);}};if(_0x341f4b[_0x4dc7f4(0x1f3)]!==_0x4dc7f4(0x402)){var _0x4024be=new _0x5cb0e6(_0x3929e6)['readF'+_0x4dc7f4(0x2a2)](_0x4fa16a,_0x36c229);_0x5833eb[_0x4dc7f4(0x2ae)](_0x4147f0,_0x2e7c79[_0x4dc7f4(0x2f1)](_0x4024be,_0x4b6365)?_0x4024be['val']():null);}else _0x62e57a['fillS'+_0x4dc7f4(0x337)]=_0x63e7c8||_0x341f4b[_0x4dc7f4(0x1e9)],_0x62e57a['fillT'+'ext'](_0x1d39e0,_0x2a3d9a,_0x1e0c4a),_0x1e0c4a+=0x25c+-0xec*0x7+0x2*0x214;};_0x4c2a76('SAKUR'+_0x327f74(0x455)+'R\x20v1.'+'1','#ff6b'+'9d');if(_0x579bef[_0x327f74(0x463)])_0x3f8c20['PGhNB'](_0x4c2a76,_0x5c890a+_0x327f74(0x3e7));if(!_0x135c5c['gameL'+_0x327f74(0x2ea)])_0x3f8c20[_0x327f74(0x677)](_0x4c2a76,_0x327f74(0x71e)+_0x327f74(0x519)+'r\x20gam'+'e…',_0x3f8c20[_0x327f74(0x5d3)]);_0x62e57a[_0x327f74(0x2b0)+'re']();}function _0x24c63d(){var _0x160ad0=_0x42edd3;_0x3f8c20['ZxxBN'](requestAnimationFrame,_0x24c63d),_0x17918a++;var _0x3a4839=performance[_0x160ad0(0x232)]();_0x3f8c20[_0x160ad0(0x488)](_0x3a4839-_0x4362b7,-0x2415+-0x2*-0x72d+0x17af)&&(_0x5c890a=Math[_0x160ad0(0x428)](_0x3f8c20[_0x160ad0(0x2c2)](_0x17918a,-0x581*0x5+-0x14b7+-0x3424*-0x1)/_0x3f8c20['kjunY'](_0x3a4839,_0x4362b7)),_0x17918a=-0x228b+-0xc9*0xe+0x2d89,_0x4362b7=_0x3a4839);_0xc29f92(),_0x204256(),_0x62e57a[_0x160ad0(0x551)+_0x160ad0(0x692)](0x1064+0x1*-0x2478+0x1414,-0xb8d*-0x1+-0x102d+-0x1*-0x4a0,_0x32b5d4['w'],_0x32b5d4['h']);var _0x4e4680={'left':0x0,'top':0x0,'right':_0x32b5d4['w'],'bottom':_0x32b5d4['h'],'width':_0x32b5d4['w'],'height':_0x32b5d4['h']};if(_0x579bef['cross'+'hair'])_0x33d752(_0x4e4680);if(_0x579bef[_0x160ad0(0x660)+'rokes'])_0x50109d(_0x4e4680);_0x57f6fb(_0x4e4680);}var _0x96c166=document['creat'+_0x42edd3(0x26e)+_0x42edd3(0x40c)](_0x3f8c20[_0x42edd3(0x731)]);_0x96c166['id']='sakur'+_0x42edd3(0x686),_0x96c166[_0x42edd3(0x1e3)]['cssTe'+'xt']='posit'+'ion:f'+_0x42edd3(0x757)+'inset'+_0x42edd3(0x3d5)+'index'+_0x42edd3(0x477)+_0x42edd3(0x527)+_0x42edd3(0x4da)+'nter-'+'event'+_0x42edd3(0x1fc)+'e;';var _0x2917eb=_0x96c166['attac'+'hShad'+'ow']({'mode':_0x42edd3(0x244)});(document['body']||document[_0x42edd3(0x730)+'entEl'+'ement'])[_0x42edd3(0x27e)+_0x42edd3(0x243)+'d'](_0x96c166);var _0x135bf7=![],_0x84a647={};try{_0x84a647=JSON['parse'](localStorage[_0x42edd3(0x5bd)+'em'](_0x3f8c20['VZbpn'])||'{}');}catch(_0x539116){}function _0x148600(){var _0x4c830c=_0x42edd3;if('ORwPb'===_0x341f4b[_0x4c830c(0x657)])try{localStorage['setIt'+'em'](_0x4c830c(0x412)+'a.kou'+_0x4c830c(0x23f)+'v1',JSON['strin'+_0x4c830c(0x383)](_0x84a647));}catch(_0x1c0c58){}else{var _0x5d9c39=_0x7e8388[_0x4c830c(0x1f1)+_0x4c830c(0x26e)+_0x4c830c(0x40c)]('small');_0x5d9c39[_0x4c830c(0x48a)+_0x4c830c(0x3d4)]=_0x4c830c(0x2de)+'nt',_0x5d9c39[_0x4c830c(0x494)+'onten'+'t']=_0x4c7fbb,_0x57b876[_0x4c830c(0x27e)+_0x4c830c(0x243)+'d'](_0x5d9c39);}}function _0x486b3a(_0x3cf6a6,_0x3ed731){var _0x2ff371=_0x42edd3,_0x4ffa06=('3|4|6'+_0x2ff371(0x25a)+_0x2ff371(0x448))[_0x2ff371(0x4dc)]('|'),_0x21003e=-0x33e+-0x150d+-0x9*-0x2b3;while(!![]){switch(_0x4ffa06[_0x21003e++]){case'0':return _0x86e616;case'1':_0x86e616['oncli'+'ck']=_0x396c69=>{var _0xf7ef72=_0x2ff371;_0x396c69[_0xf7ef72(0x2a8)+_0xf7ef72(0x55a)+_0xf7ef72(0x487)]();var _0x5a9fc3=_0x86e616['getAt'+_0xf7ef72(0x235)+'te'](_0xf7ef72(0x47a)+_0xf7ef72(0x3bf)+'ed')!==_0x341f4b[_0xf7ef72(0x6f2)];_0x86e616['setAt'+_0xf7ef72(0x235)+'te'](_0x341f4b['aWErN'],String(_0x5a9fc3)),_0x341f4b['HNPHK'](_0x3ed731,_0x5a9fc3);};continue;case'2':_0x86e616[_0x2ff371(0x6d9)+_0x2ff371(0x235)+'te'](_0x3f8c20[_0x2ff371(0x458)],'switc'+'h');continue;case'3':var _0x86e616=document[_0x2ff371(0x1f1)+_0x2ff371(0x26e)+'ent']('butto'+'n');continue;case'4':_0x86e616['type']='butto'+'n';continue;case'5':_0x86e616[_0x2ff371(0x6d9)+'tribu'+'te'](_0x3f8c20[_0x2ff371(0x3e6)],_0x3f8c20['GpGtH'](String,!!_0x3cf6a6));continue;case'6':_0x86e616[_0x2ff371(0x48a)+_0x2ff371(0x3d4)]=_0x2ff371(0x582)+'itch';continue;}break;}}function _0x135555(_0x2a03cc,_0x104cd7,_0x57f646,_0x121f25,_0x4d6670){var _0x44b39f=_0x42edd3,_0x585549={'mxsYo':function(_0x272667,_0x113071){return _0x272667+_0x113071;},'DAEuI':function(_0x503812,_0x541bc2){return _0x503812-_0x541bc2;},'fxrla':function(_0x1187b2,_0x4a8591){return _0x1187b2-_0x4a8591;},'iXOJk':function(_0x99e176){var _0x165fb0=_0x1dad;return _0x3f8c20[_0x165fb0(0x3ae)](_0x99e176);},'dfITr':function(_0x5e79b5,_0x151586){return _0x5e79b5(_0x151586);}};if(_0x3f8c20['UbCmG'](_0x44b39f(0x719),_0x3f8c20[_0x44b39f(0x6c6)])){var _0x495abd=document[_0x44b39f(0x1f1)+'eElem'+'ent'](_0x3f8c20['wMTPZ']);_0x495abd[_0x44b39f(0x48a)+'Name']='sk-ra'+_0x44b39f(0x721);var _0x1f7f0c=document[_0x44b39f(0x1f1)+'eElem'+_0x44b39f(0x40c)](_0x3f8c20[_0x44b39f(0x382)]);_0x1f7f0c[_0x44b39f(0x39a)]=_0x44b39f(0x5cd),_0x1f7f0c['class'+'Name']=_0x44b39f(0x38b)+_0x44b39f(0x661),_0x1f7f0c['min']=_0x104cd7,_0x1f7f0c['max']=_0x57f646,_0x1f7f0c[_0x44b39f(0x485)]=_0x121f25,_0x1f7f0c['value']=_0x2a03cc;var _0x2a2cc3=document[_0x44b39f(0x1f1)+'eElem'+_0x44b39f(0x40c)](_0x3f8c20['jNctI']);_0x2a2cc3['class'+'Name']=_0x44b39f(0x263)+'l',_0x2a2cc3[_0x44b39f(0x494)+'onten'+'t']=String(_0x2a03cc);var _0x307c95=()=>{var _0x82c724=_0x44b39f;_0x2a2cc3[_0x82c724(0x494)+_0x82c724(0x74f)+'t']=String(_0x1f7f0c[_0x82c724(0x1dc)]),_0x495abd[_0x82c724(0x1e3)][_0x82c724(0x603)+_0x82c724(0x4a5)+'y']('--p',_0x585549[_0x82c724(0x4a2)](_0x585549['DAEuI'](_0x1f7f0c[_0x82c724(0x1dc)],_0x104cd7)/_0x585549[_0x82c724(0x715)](_0x57f646,_0x104cd7)*(-0x19a*0x13+-0x8*0x4a8+0x4412),'%'));};return _0x1f7f0c[_0x44b39f(0x67b)+'ut']=()=>{var _0x11f2e0=_0x44b39f;_0x585549[_0x11f2e0(0x707)](_0x307c95),_0x585549[_0x11f2e0(0x1e5)](_0x4d6670,_0x585549[_0x11f2e0(0x1e5)](Number,_0x1f7f0c[_0x11f2e0(0x1dc)]));},_0x307c95(),_0x495abd[_0x44b39f(0x27e)+'d'](_0x1f7f0c,_0x2a2cc3),_0x495abd;}else{if(!_0x189912[_0x44b39f(0x3df)+'ura'])_0x14b032[_0x44b39f(0x6c0)+'e'](_0x44b39f(0x423)+(_0x9e1afe[_0x44b39f(0x724)+'n']+(0x1086+-0x1694+0x60f)));}}function _0x5b9bc9(_0x5e60da,_0x5d723e){var _0x460c63=_0x42edd3,_0x1230bc=document[_0x460c63(0x1f1)+'eElem'+_0x460c63(0x40c)](_0x460c63(0x2ff));return _0x1230bc['type']='color',_0x1230bc[_0x460c63(0x48a)+'Name']='sk-co'+_0x460c63(0x4e4),_0x1230bc[_0x460c63(0x1dc)]=/^#[0-9a-f]{6}$/i[_0x460c63(0x46b)](_0x5e60da)?_0x5e60da:_0x341f4b[_0x460c63(0x2e3)],_0x1230bc[_0x460c63(0x67b)+'ut']=()=>_0x5d723e(_0x1230bc[_0x460c63(0x1dc)]),_0x1230bc;}function _0x1172a8(_0x3b0ad0,_0x286918,_0x5d0ad0){var _0x114fa6=_0x42edd3,_0x200ad4={'YCiYQ':function(_0x38f804,_0x43dd16){return _0x38f804!==_0x43dd16;}};if(_0x114fa6(0x5dd)!==_0x341f4b['LuVJj']){var _0x4d0165=document['creat'+_0x114fa6(0x26e)+_0x114fa6(0x40c)]('selec'+'t');_0x4d0165['class'+_0x114fa6(0x3d4)]='sk-fi'+_0x114fa6(0x217);for(var [_0x48b491,_0x1b8d8b]of _0x286918){var _0x58ac2c=document['creat'+_0x114fa6(0x26e)+_0x114fa6(0x40c)](_0x341f4b['wTimC']);_0x58ac2c[_0x114fa6(0x1dc)]=_0x48b491,_0x58ac2c['textC'+'onten'+'t']=_0x1b8d8b,_0x4d0165[_0x114fa6(0x27e)+'dChil'+'d'](_0x58ac2c);}return _0x4d0165[_0x114fa6(0x1dc)]=_0x3b0ad0,_0x4d0165[_0x114fa6(0x5cf)+_0x114fa6(0x721)]=()=>_0x5d0ad0(_0x4d0165[_0x114fa6(0x1dc)]),_0x4d0165;}else try{var _0x580786=_0x13de3d[_0x114fa6(0x4a1)+'refix']({'typeName':_0x42b930,'methodName':_0x2366c6,'params':_0x59eb73,'returnType':_0x391bcd},_0x264ce2);return _0x580786[_0x114fa6(0x561)+'ed']=_0x200ad4[_0x114fa6(0x3cf)](_0x1bffe6,![]),_0x4d089a[_0x24d051]=_0x580786,_0x1a7e34[_0x114fa6(0x28c)+_0x114fa6(0x56c)]++,_0x580786;}catch(_0x2ab129){return _0x29745a[_0x114fa6(0x354)](_0x114fa6(0x3b0)+'ra-ko'+_0x114fa6(0x2fd)+'ook\x20r'+_0x114fa6(0x37b)+_0x114fa6(0x326),_0x232915,_0x2ab129&&_0x2ab129[_0x114fa6(0x324)+'ge']),null;}}function _0x22e488(_0x495284,_0x4fb6a6){var _0x5bab6b=_0x42edd3,_0x4a8bf9=document[_0x5bab6b(0x1f1)+'eElem'+'ent'](_0x5bab6b(0x724)+'n');return _0x4a8bf9['type']=_0x3f8c20['eagMd'],_0x4a8bf9[_0x5bab6b(0x48a)+'Name']=_0x3f8c20[_0x5bab6b(0x643)],_0x4a8bf9[_0x5bab6b(0x494)+'onten'+'t']=_0x495284,_0x4a8bf9['oncli'+'ck']=_0x29cb4c=>{var _0x2bc785=_0x5bab6b;_0x29cb4c[_0x2bc785(0x2a8)+_0x2bc785(0x55a)+'ation'](),_0x341f4b[_0x2bc785(0x3c6)](_0x4fb6a6);},_0x4a8bf9;}function _0x2a798a(_0x322179,_0x304684,_0x2464d4){var _0x5c0f74=_0x42edd3,_0x3a6fe2=document['creat'+'eElem'+_0x5c0f74(0x40c)](_0x3f8c20[_0x5c0f74(0x731)]);_0x3a6fe2[_0x5c0f74(0x48a)+_0x5c0f74(0x3d4)]=_0x3f8c20[_0x5c0f74(0x5d4)];var _0x18c92d=document[_0x5c0f74(0x1f1)+'eElem'+'ent']('span');_0x18c92d['class'+_0x5c0f74(0x3d4)]=_0x3f8c20[_0x5c0f74(0x30d)],_0x18c92d[_0x5c0f74(0x494)+_0x5c0f74(0x74f)+'t']=_0x322179;if(_0x304684){var _0x4ee7c4=document[_0x5c0f74(0x1f1)+_0x5c0f74(0x26e)+_0x5c0f74(0x40c)](_0x3f8c20['ycydU']);_0x4ee7c4['class'+_0x5c0f74(0x3d4)]=_0x3f8c20[_0x5c0f74(0x73d)],_0x4ee7c4[_0x5c0f74(0x494)+'onten'+'t']=_0x304684,_0x18c92d['appen'+_0x5c0f74(0x243)+'d'](_0x4ee7c4);}return _0x3a6fe2[_0x5c0f74(0x27e)+'d'](_0x18c92d,_0x2464d4),_0x3a6fe2;}function _0x2a62cf(_0x3f2924,_0x1ee98c){var _0x15d08c=_0x42edd3,_0x56793c=document[_0x15d08c(0x1f1)+_0x15d08c(0x26e)+_0x15d08c(0x40c)](_0x3f8c20[_0x15d08c(0x731)]);return _0x56793c['class'+'Name']=_0x3f8c20['GdPug']+(_0x1ee98c?_0x3f8c20[_0x15d08c(0x285)]:''),_0x56793c[_0x15d08c(0x494)+_0x15d08c(0x74f)+'t']=_0x3f2924,_0x56793c;}function _0x366b8f(_0x174738,_0x325fc3,_0x357330,_0x4f34bb,_0x426368){var _0x38fc51=_0x42edd3,_0x597f36={'dgblf':function(_0x320293,_0x35cffa){var _0x7220ca=_0x1dad;return _0x341f4b[_0x7220ca(0x5db)](_0x320293,_0x35cffa);},'cTwBn':_0x38fc51(0x50d),'THOwj':function(_0x34cf62,_0x40b0bf){return _0x341f4b['WEOgn'](_0x34cf62,_0x40b0bf);},'JzEcG':_0x341f4b['jqtmv'],'VzsZC':_0x38fc51(0x5d1),'Oxloq':_0x341f4b['RniCw'],'xPuVO':function(_0x2e6985,_0x1b0bda){return _0x2e6985/_0x1b0bda;}};if(_0x38fc51(0x69c)!==_0x341f4b['JLDoW'])_0xc2498a[_0x38fc51(0x608)]=_0x597f36['dgblf'](_0x597f36[_0x38fc51(0x295)]+_0x3f1dd4[_0x38fc51(0x428)](_0x597f36[_0x38fc51(0x249)](0x217+-0x26dc+-0x1*-0x24ce,_0x20574f)),_0x597f36['JzEcG']),_0x213708['fillS'+_0x38fc51(0x337)]=_0xe8e174?_0x597f36[_0x38fc51(0x699)]:_0x597f36[_0x38fc51(0x6bf)],_0x5baef1[_0x38fc51(0x58b)+_0x38fc51(0x637)](_0x44cbfd,_0x597f36[_0x38fc51(0x2d5)](_0x5a8d57,_0x33541b/(0x17ac+-0x1e4f*0x1+0x6a5)),_0x37d224+_0x597f36[_0x38fc51(0x2c7)](_0x43ef40,-0x207f+-0x53*0x17+0x27f6)+(0x198b*0x1+-0x3e7+-0x159c)*_0x270ed6);else{var _0x153237=document[_0x38fc51(0x1f1)+_0x38fc51(0x26e)+'ent'](_0x341f4b[_0x38fc51(0x515)]);_0x153237['class'+'Name']='sk-ca'+'rd'+(_0x357330?_0x341f4b[_0x38fc51(0x4c3)]:'');var _0x4f1d0b=document['creat'+_0x38fc51(0x26e)+_0x38fc51(0x40c)](_0x38fc51(0x3e9));_0x4f1d0b['class'+_0x38fc51(0x3d4)]=_0x38fc51(0x64c)+_0x38fc51(0x3bb)+'ad';var _0x360617=document['creat'+_0x38fc51(0x26e)+'ent'](_0x38fc51(0x3e9));_0x360617[_0x38fc51(0x48a)+_0x38fc51(0x3d4)]=_0x341f4b['BGxDg'];var _0x273ded=document['creat'+'eElem'+_0x38fc51(0x40c)](_0x341f4b[_0x38fc51(0x44e)]);_0x273ded[_0x38fc51(0x494)+_0x38fc51(0x74f)+'t']=_0x174738,_0x360617[_0x38fc51(0x27e)+_0x38fc51(0x243)+'d'](_0x273ded);if(_0x4f34bb){var _0x559a1a=_0x486b3a(_0x357330,_0x52cc65=>{var _0xf5ff08=_0x38fc51;_0x153237[_0xf5ff08(0x48a)+_0xf5ff08(0x60b)]['toggl'+'e']('on',_0x52cc65),_0x4f34bb(_0x52cc65);});_0x4f1d0b[_0x38fc51(0x27e)+'d'](_0x360617,_0x559a1a);}else{if(_0x341f4b[_0x38fc51(0x3ee)]!=='Ervrn')_0x4f1d0b[_0x38fc51(0x27e)+_0x38fc51(0x243)+'d'](_0x360617);else try{_0x349154[_0x38fc51(0x647)][_0x38fc51(0x27e)+_0x38fc51(0x243)+'d'](_0x50cdc2);}catch(_0x55e447){}}_0x153237['appen'+'dChil'+'d'](_0x4f1d0b);if(_0x426368&&_0x426368['lengt'+'h']){if(_0x341f4b[_0x38fc51(0x4af)]===_0x38fc51(0x227)){var _0x1604f5=document['creat'+_0x38fc51(0x26e)+_0x38fc51(0x40c)](_0x341f4b[_0x38fc51(0x515)]);_0x1604f5[_0x38fc51(0x48a)+'Name']=_0x341f4b['xmjDp'];var _0x405eec=document['creat'+_0x38fc51(0x26e)+'ent']('div');_0x405eec['class'+'Name']=_0x38fc51(0x702)+'esc',_0x405eec['textC'+_0x38fc51(0x74f)+'t']=_0x325fc3,_0x1604f5['appen'+_0x38fc51(0x243)+'d'](_0x405eec);for(var _0x1c26bf of _0x426368)_0x1604f5[_0x38fc51(0x27e)+_0x38fc51(0x243)+'d'](_0x1c26bf);_0x153237[_0x38fc51(0x27e)+_0x38fc51(0x243)+'d'](_0x1604f5);}else _0x4b0c82['stopP'+_0x38fc51(0x55a)+_0x38fc51(0x487)](),_0x341f4b[_0x38fc51(0x58d)](_0x1f6561);}return _0x153237;}}var _0x2f4500=[{'id':_0x42edd3(0x53d)+'t','label':_0x3f8c20[_0x42edd3(0x1fd)]},{'id':'move','label':'Move'},{'id':_0x42edd3(0x241)+'l','label':'Visua'+'l'},{'id':_0x42edd3(0x586),'label':_0x3f8c20['ugTIT']},{'id':_0x42edd3(0x6f6),'label':_0x3f8c20[_0x42edd3(0x665)]}];function _0x5131b2(){var _0x226fa8=_0x42edd3;if(_0x226fa8(0x52e)!==_0x226fa8(0x52e)){_0x556d38['push'](_0x17485b[_0x226fa8(0x232)]());if(_0x341f4b['ZTjww'](_0x5f2aa4[_0x226fa8(0x766)+'h'],-0x5*-0x205+0x7*0x32+-0xb4f))_0x547edf[_0x226fa8(0x1ff)]();}else{var _0x434efc=_0x135c5c[_0x226fa8(0x531)+'ode']?_0x341f4b[_0x226fa8(0x5ce)]:_0x135c5c[_0x226fa8(0x6ca)]?_0x341f4b[_0x226fa8(0x3b4)](_0x341f4b[_0x226fa8(0x3cb)](_0x341f4b[_0x226fa8(0x3cb)](_0x341f4b[_0x226fa8(0x765)](_0x341f4b['zoihw'](_0x341f4b['yMhWe'],_0x135c5c[_0x226fa8(0x28c)+_0x226fa8(0x56c)]?_0x341f4b['SKeTt'](_0x135c5c['hooks'+'Ok'],'/')+_0x135c5c[_0x226fa8(0x28c)+_0x226fa8(0x56c)]+('\x20hook'+'s'):_0x226fa8(0x4de)+_0x226fa8(0x764)+'med\x20('+'all\x20o'+_0x226fa8(0x4b9)),'\x20|\x20ga'+_0x226fa8(0x380))+(_0x135c5c['gameL'+_0x226fa8(0x2ea)]?_0x226fa8(0x2cd)+'d':_0x226fa8(0x464)+'ng'),_0x341f4b[_0x226fa8(0x6ab)]),_0x135c5c[_0x226fa8(0x5e2)+'ers']?_0x341f4b['nwcmI']:_0x226fa8(0x2ac))+_0x341f4b[_0x226fa8(0x1df)],_0x135c5c['movem'+_0x226fa8(0x491)]?_0x226fa8(0x2da):_0x341f4b[_0x226fa8(0x634)]):_0x226fa8(0x5c3)+_0x226fa8(0x4b2)+_0x226fa8(0x6a3)+'overl'+_0x226fa8(0x50f)+_0x226fa8(0x276)+'einst'+_0x226fa8(0x252)+'he\x20us'+_0x226fa8(0x416)+'ipt)';if(_0x135c5c[_0x226fa8(0x35b)+_0x226fa8(0x265)])_0x434efc+=_0x226fa8(0x2dd)+_0x226fa8(0x33a)+_0x135c5c[_0x226fa8(0x35b)+'rror'];return _0x366b8f(_0x341f4b[_0x226fa8(0x60d)],_0x434efc,_0x135c5c[_0x226fa8(0x6ca)],null,[_0x2a798a(_0x226fa8(0x507)+_0x226fa8(0x5de)+_0x226fa8(0x219),_0x226fa8(0x613)+_0x226fa8(0x62d)+_0x226fa8(0x5f8)+'ne.Ap'+'plica'+'tion.'+'set_t'+_0x226fa8(0x2ad)+_0x226fa8(0x6cb)+_0x226fa8(0x204),_0x341f4b[_0x226fa8(0x5d8)](_0x22e488,_0x341f4b[_0x226fa8(0x413)],()=>{var _0x2f3097=_0x226fa8,_0x15522f={'cgvrG':function(_0x3e70b0,_0x1c8aa4){return _0x3e70b0-_0x1c8aa4;}};if(_0x341f4b['BLBHv']('zSCFv',_0x2f3097(0x216)))try{if(_0x74e08)_0x74e08['call'](_0x341f4b['FEalN'],_0x341f4b['bprLs'],[0xf92+0x799+-0x1*0x163b]);}catch(_0x4909fc){}else{var _0x2441da=_0x410e50[_0x58997a]||[],_0x4ebb43=_0xa9867f[_0x2f3097(0x232)]();while(_0x2441da[_0x2f3097(0x766)+'h']&&_0x15522f[_0x2f3097(0x2c5)](_0x4ebb43,_0x2441da[0x58d*0x4+0x9fc+0x2*-0x1018])>-0x11*-0x122+0xe87*-0x1+0x1*-0xd3)_0x2441da['shift']();return _0x2441da[_0x2f3097(0x766)+'h'];}}))]);}}function _0x1d7280(_0x21f28d){var _0x4f2c0e=_0x42edd3,_0x3911e5={'ZhEWg':function(_0x472286){return _0x472286();},'QuIOr':function(_0x40ffa9,_0x462372){var _0x3a42e4=_0x1dad;return _0x3f8c20[_0x3a42e4(0x2cc)](_0x40ffa9,_0x462372);},'DRqAy':function(_0x5e895e,_0x1dbbde){return _0x5e895e!==_0x1dbbde;},'apcFP':_0x3f8c20[_0x4f2c0e(0x32e)],'hopaH':function(_0x1bd086){return _0x1bd086();},'yGhPF':function(_0x5a177b,_0x39b795,_0x152213){return _0x5a177b(_0x39b795,_0x152213);},'aUqhn':_0x4f2c0e(0x740)+_0x4f2c0e(0x310),'RLLhy':function(_0x1ef2e3,_0x2da706){return _0x1ef2e3===_0x2da706;},'bYaWR':function(_0x5a61ba){var _0x59c2fe=_0x4f2c0e;return _0x3f8c20[_0x59c2fe(0x3ae)](_0x5a61ba);},'FhjQQ':function(_0x11c15f,_0x551e47){return _0x11c15f||_0x551e47;},'TSGsh':_0x3f8c20[_0x4f2c0e(0x42a)],'qiiqP':_0x4f2c0e(0x5c2),'hkUhQ':function(_0x44575b,_0x5545fb){var _0x40e397=_0x4f2c0e;return _0x3f8c20[_0x40e397(0x59b)](_0x44575b,_0x5545fb);},'UHZEj':_0x4f2c0e(0x24a)};if(_0x3f8c20['MKUSv'](_0x21f28d,_0x4f2c0e(0x53d)+'t'))return[_0x5131b2(),_0x366b8f(_0x4f2c0e(0x53e)+'ode',_0x3f8c20['tKfuk'],_0x579bef['god'],_0x537b82=>{var _0x1014c1=_0x4f2c0e;_0x579bef['god']=_0x537b82,_0x341f4b['cIxQt'](_0x5f101a),_0x51b179(_0x341f4b['MUXPo'],_0x537b82),_0x51b179(_0x1014c1(0x56e)+'e',_0x537b82);},[]),_0x366b8f('No\x20Re'+_0x4f2c0e(0x2fb),_0x3f8c20[_0x4f2c0e(0x5bc)],_0x579bef[_0x4f2c0e(0x740)+_0x4f2c0e(0x310)],_0x15c342=>{var _0x2cd38e=_0x4f2c0e,_0x28d32f={'lVHng':function(_0x12ac65){var _0x2ba649=_0x1dad;return _0x3911e5[_0x2ba649(0x601)](_0x12ac65);},'GWzgq':'Sakur'+_0x2cd38e(0x546)+_0x2cd38e(0x320),'bMDoB':function(_0x35c742,_0x1c9ebc){var _0x26f5a2=_0x2cd38e;return _0x3911e5[_0x26f5a2(0x61a)](_0x35c742,_0x1c9ebc);}};if(_0x3911e5[_0x2cd38e(0x566)](_0x3911e5[_0x2cd38e(0x74a)],_0x2cd38e(0x599)))_0x579bef['noRec'+_0x2cd38e(0x310)]=_0x15c342,_0x3911e5[_0x2cd38e(0x26a)](_0x5f101a),_0x3911e5[_0x2cd38e(0x6ee)](_0x51b179,_0x3911e5['aUqhn'],_0x15c342);else{_0x5e5923[_0x2cd38e(0x6d0)]=_0x518ae6,_0x28d32f['lVHng'](_0xeae95);var _0x5e9569=_0x2feda8[_0x2cd38e(0x6a9)](_0x2aae88=>_0x2aae88['id']===_0x308fc9)||_0x7e685[-0x42*0x63+0x4*0x859+-0x7de];_0x4b6700['textC'+_0x2cd38e(0x74f)+'t']=_0x28d32f['GWzgq']+_0x5e9569['label'];for(var [_0x44c281,_0x131ff0]of _0x3ed4a0)_0x131ff0['class'+'List']['toggl'+'e'](_0x2cd38e(0x26c)+'e',_0x28d32f['bMDoB'](_0x44c281,_0x583c7d));_0x3d30cf['repla'+_0x2cd38e(0x21c)+'ldren'](..._0x8c91b4(_0x2d1cee));}},[]),_0x366b8f(_0x4f2c0e(0x598)+'read',_0x4f2c0e(0x343)+_0x4f2c0e(0x2b9)+'ead\x20a'+_0x4f2c0e(0x73a)+'xes\x20a'+_0x4f2c0e(0x35c)+'cy\x20on'+'\x20your'+'\x20weap'+'on\x20ev'+_0x4f2c0e(0x4b7)+'00ms.',_0x579bef['noSpr'+_0x4f2c0e(0x67a)],_0x2ff746=>{var _0x5a8e2d=_0x4f2c0e;_0x579bef[_0x5a8e2d(0x478)+_0x5a8e2d(0x67a)]=_0x2ff746,_0x5f101a();},[]),_0x366b8f('Rapid'+'\x20Fire'+_0x4f2c0e(0x71c)+']',_0x4f2c0e(0x363)+_0x4f2c0e(0x4e7)+_0x4f2c0e(0x4c4)+'Weapo'+'n.fir'+'eRate'+_0x4f2c0e(0x499)+'0%.\x20S'+'erver'+_0x4f2c0e(0x621)+'still'+'\x20gate'+'\x20shot'+'s.',_0x579bef[_0x4f2c0e(0x393)+_0x4f2c0e(0x4ca)],_0x478290=>{var _0x33b8be=_0x4f2c0e;_0x579bef['rapid'+'Exp']=_0x478290,_0x3911e5[_0x33b8be(0x601)](_0x5f101a);},[]),_0x366b8f('Damag'+'e\x20[EX'+'P]','Overw'+'rites'+'\x20Over'+_0x4f2c0e(0x6bd)+'eapon'+_0x4f2c0e(0x4bd)+_0x4f2c0e(0x492)+'annab'+'le\x20if'+_0x4f2c0e(0x254)+_0x4f2c0e(0x2c8)+'r\x20val'+'idate'+'s.',_0x579bef[_0x4f2c0e(0x74d)+'eExp'],_0x26f7d0=>{var _0x1cb42e=_0x4f2c0e;_0x579bef[_0x1cb42e(0x74d)+_0x1cb42e(0x2f3)]=_0x26f7d0,_0x5f101a();},[_0x2a798a('Damag'+'e\x20val'+'ue',null,_0x3f8c20['qYMsO'](_0x135555,_0x579bef['damag'+'eValu'+'e'],-0x1*-0x4d6+-0x262*0x10+0x2154,-0x1400+-0x1d2b*0x1+0x239*0x17,0x9e0+-0x1877*0x1+0xe9c,_0xb9f343=>{var _0x40f5c4=_0x4f2c0e;_0x579bef[_0x40f5c4(0x74d)+_0x40f5c4(0x5fc)+'e']=_0xb9f343,_0x5f101a();}))]),_0x366b8f(_0x3f8c20['oVciS'],_0x4f2c0e(0x3a8)+_0x4f2c0e(0x6ad)+_0x4f2c0e(0x300)+_0x4f2c0e(0x4cb)+_0x4f2c0e(0x301)+_0x4f2c0e(0x5b1)+_0x4f2c0e(0x638)+_0x4f2c0e(0x65f)+_0x4f2c0e(0x6cd)+'\x20200m'+'s.',_0x579bef[_0x4f2c0e(0x259)+'moExp'],_0x569dc4=>{var _0x3fbadc=_0x4f2c0e;_0x579bef[_0x3fbadc(0x259)+_0x3fbadc(0x390)]=_0x569dc4,_0x5f101a();},[_0x2a62cf(_0x4f2c0e(0x6dd)+_0x4f2c0e(0x297)+'\x20stil'+_0x4f2c0e(0x6e8)+_0x4f2c0e(0x3de)+'he\x20de'+_0x4f2c0e(0x328)+'nt\x20ha'+'ppens'+_0x4f2c0e(0x465)+'where'+'.')])];if(_0x21f28d==='move'){if('mQAGW'===_0x3f8c20['WgCMs'])return[_0x3f8c20[_0x4f2c0e(0x37a)](_0x366b8f,'Speed','Scale'+'s\x20all'+_0x4f2c0e(0x351)+'\x20Move'+'ment\x20'+_0x4f2c0e(0x753)+_0x4f2c0e(0x623)+'ts\x20pl'+_0x4f2c0e(0x580)+_0x4f2c0e(0x3a7)+'ation'+'.',_0x579bef['speed'+'Pct']!==0x1*-0x7fb+0x2410+-0x1bb1,null,[_0x3f8c20[_0x4f2c0e(0x6ae)](_0x2a798a,_0x3f8c20[_0x4f2c0e(0x387)],_0x3f8c20[_0x4f2c0e(0x1e8)],_0x135555(_0x579bef[_0x4f2c0e(0x753)+_0x4f2c0e(0x43d)],-0x3*-0x6ee+-0x233*-0x2+-0x18fe,0xf1a+-0x101a+-0x1*-0x22c,0xf64+-0x2*-0x5d5+-0x1b09,_0x15c84b=>{var _0x1c6803=_0x4f2c0e;_0x579bef[_0x1c6803(0x753)+_0x1c6803(0x43d)]=_0x15c84b,_0x341f4b['AwHBN'](_0x5f101a);}))]),_0x3f8c20['qYMsO'](_0x366b8f,_0x4f2c0e(0x25c)+'/\x20Gra'+_0x4f2c0e(0x6b8),'Scale'+_0x4f2c0e(0x481)+_0x4f2c0e(0x593)+_0x4f2c0e(0x653)+_0x4f2c0e(0x38f)+'\x20and\x20'+'both\x20'+'gravi'+'ty\x20va'+_0x4f2c0e(0x4ef),_0x3f8c20['rirlh'](_0x579bef[_0x4f2c0e(0x614)+'ct'],-0x1*0x969+-0x18b9*0x1+0x1eb*0x12)||_0x579bef['gravi'+'tyPct']!==-0x1032*-0x1+0x1*-0x236a+-0x14*-0xfb,null,[_0x2a798a(_0x4f2c0e(0x25c)+'%',null,_0x135555(_0x579bef[_0x4f2c0e(0x614)+'ct'],0x113b+-0x1d3+0x6*-0x289,-0x2145+0xc28+0x1649,0x683+0xbf2+-0x49c*0x4,_0x2d3365=>{var _0x5b5fb3=_0x4f2c0e;_0x579bef[_0x5b5fb3(0x614)+'ct']=_0x2d3365,_0x341f4b[_0x5b5fb3(0x4f0)](_0x5f101a);})),_0x2a798a(_0x4f2c0e(0x2fe)+_0x4f2c0e(0x30a),_0x3f8c20[_0x4f2c0e(0x255)],_0x3f8c20[_0x4f2c0e(0x64a)](_0x135555,_0x579bef['gravi'+_0x4f2c0e(0x2f4)],0x1bad+0xeb0+-0x2a53,0x2c8*0x5+-0xf6*0x5+0xa*-0xd5,0x15d*0x17+0x506*-0x4+0x59f*-0x2,_0x5bd418=>{var _0x23a984=_0x4f2c0e;_0x579bef[_0x23a984(0x3d6)+_0x23a984(0x2f4)]=_0x5bd418,_0x5f101a();}))]),_0x3f8c20[_0x4f2c0e(0x63b)](_0x366b8f,_0x3f8c20[_0x4f2c0e(0x673)],_0x4f2c0e(0x343)+'s\x20Mov'+'ement'+_0x4f2c0e(0x2a7)+_0x4f2c0e(0x549)+_0x4f2c0e(0x736)+_0x4f2c0e(0x2e6)+'\x20jump'+'\x20cool'+'down\x20'+_0x4f2c0e(0x6e2)+_0x4f2c0e(0x520)+'ies.',_0x579bef[_0x4f2c0e(0x41d)],_0x332693=>{var _0x3eaa87=_0x4f2c0e;_0x3911e5[_0x3eaa87(0x6a6)](_0x3eaa87(0x712),'qJnkQ')?(_0x2698b3[_0x3eaa87(0x283)+'ck']=_0x501de6,_0x5d868d()):(_0x579bef[_0x3eaa87(0x41d)]=_0x332693,_0x5f101a());},[])];else _0x58e64a['speed'+'Pct']=_0x66cd39,_0x205871();}if(_0x3f8c20[_0x4f2c0e(0x543)](_0x21f28d,'visua'+'l')){if('usipc'!==_0x4f2c0e(0x349))return[_0x366b8f(_0x3f8c20['lpptG'],_0x4f2c0e(0x29d)+_0x4f2c0e(0x25f)+'/RMB\x20'+'+\x20Spa'+_0x4f2c0e(0x33e)+_0x4f2c0e(0x426)+'.',_0x579bef['keyst'+'rokes'],_0x472712=>{var _0x4071ee=_0x4f2c0e;_0x341f4b['IkVOX']==='rdVft'?_0x47ad4d['setIt'+'em']('sakur'+_0x4071ee(0x6a5)+_0x4071ee(0x23f)+'v1',_0x1bd6e9['strin'+'gify'](_0x5eb0ce)):(_0x579bef[_0x4071ee(0x660)+_0x4071ee(0x628)]=_0x472712,_0x5f101a());},[_0x3f8c20['tLauc'](_0x2a798a,_0x3f8c20[_0x4f2c0e(0x228)],null,_0x1172a8(_0x579bef['ksPos'],[['bl','Botto'+_0x4f2c0e(0x3c3)+'t'],['br',_0x3f8c20['zNJIM']],['ml',_0x3f8c20[_0x4f2c0e(0x66e)]]],_0x4bbb77=>{var _0x26657e=_0x4f2c0e;_0x579bef[_0x26657e(0x533)]=_0x4bbb77,_0x5f101a();})),_0x3f8c20['RrABt'](_0x2a798a,_0x4f2c0e(0x3b5),null,_0x135555(_0x579bef[_0x4f2c0e(0x267)+'le'],0x66f+0x9f5+0x1*-0x1064+0.6,0xe6e+-0x20df+0x1*0x1272+0.6000000000000001,-0xeed*-0x2+0xd01+-0x2adb+0.05,_0x210066=>{_0x579bef['ksSca'+'le']=_0x210066,_0x341f4b['cfyjg'](_0x5f101a);})),_0x3f8c20['XZZQm'](_0x2a798a,_0x4f2c0e(0x43b)+_0x4f2c0e(0x1fa)+'t',null,_0x3f8c20[_0x4f2c0e(0x677)](_0x486b3a,_0x579bef[_0x4f2c0e(0x26f)],_0x449855=>{var _0x2003ba=_0x4f2c0e;_0x579bef['ksCps']=_0x449855,_0x3911e5[_0x2003ba(0x26a)](_0x5f101a);}))]),_0x366b8f('Cross'+_0x4f2c0e(0x72d),_0x3f8c20[_0x4f2c0e(0x6f4)],_0x579bef['cross'+'hair'],_0x2e945a=>{var _0x1519bc=_0x4f2c0e;_0x579bef[_0x1519bc(0x60a)+_0x1519bc(0x72d)]=_0x2e945a,_0x3911e5['bYaWR'](_0x5f101a);},[_0x3f8c20[_0x4f2c0e(0x61d)](_0x2a798a,_0x4f2c0e(0x3b5),null,_0x135555(_0x579bef[_0x4f2c0e(0x3ea)+'e'],0x739+-0x9b*0x3f+0x1eec*0x1+0.5,0x2f*0x1f+0x135f+0x42d*-0x6+0.5,0x2257+0x235c+-0x45b3+0.1,_0x3eb0e1=>{var _0x4b7f64=_0x4f2c0e;_0x341f4b['seKot']('hFFNF',_0x4b7f64(0x2cf))?(_0x5cdd47['keyst'+'rokes']=_0x335158,_0x2d8c36()):(_0x579bef[_0x4b7f64(0x3ea)+'e']=_0x3eb0e1,_0x5f101a());})),_0x2a798a(_0x4f2c0e(0x442),null,_0x5b9bc9(_0x579bef['chCol'+'or'],_0xb4e5ee=>{var _0x5775c9=_0x4f2c0e;_0x579bef['chCol'+'or']=_0xb4e5ee,_0x3911e5[_0x5775c9(0x26a)](_0x5f101a);}))]),_0x366b8f('Count'+_0x4f2c0e(0x3c2),_0x3f8c20[_0x4f2c0e(0x5ba)],_0x579bef[_0x4f2c0e(0x463)],null,[_0x2a798a(_0x3f8c20[_0x4f2c0e(0x651)],null,_0x486b3a(_0x579bef[_0x4f2c0e(0x463)],_0x44f7c1=>{var _0x1dd226=_0x4f2c0e;_0x579bef[_0x1dd226(0x463)]=_0x44f7c1,_0x341f4b[_0x1dd226(0x726)](_0x5f101a);})),_0x3f8c20[_0x4f2c0e(0x21b)](_0x2a62cf,'No\x20en'+'emy\x20c'+_0x4f2c0e(0x524)+_0x4f2c0e(0x2b3)+_0x4f2c0e(0x6b1)+_0x4f2c0e(0x378)+_0x4f2c0e(0x6a0)+_0x4f2c0e(0x691)+_0x4f2c0e(0x457)+_0x4f2c0e(0x4c6)+_0x4f2c0e(0x4d0)+_0x4f2c0e(0x4e0)+'gybac'+_0x4f2c0e(0x523))])];else _0x2cad4c[_0x4f2c0e(0x27b)+_0x4f2c0e(0x238)]=_0x9c3c8e,_0x100f01();}if(_0x21f28d===_0x3f8c20['gXXvl']){if(_0x4f2c0e(0x1fe)!=='KrZBz')_0x1ed214['enabl'+'ed']=![];else return[_0x3f8c20['qYMsO'](_0x366b8f,_0x3f8c20[_0x4f2c0e(0x679)],_0x3f8c20[_0x4f2c0e(0x365)],_0x579bef[_0x4f2c0e(0x283)+'ck'],_0x576502=>{_0x579bef['adblo'+'ck']=_0x576502,_0x5f101a();},[_0x2a62cf('Takes'+_0x4f2c0e(0x421)+'ct\x20on'+_0x4f2c0e(0x369)+_0x4f2c0e(0x714)+_0x4f2c0e(0x5e0)+_0x4f2c0e(0x711)+'.')])];}return[_0x3f8c20[_0x4f2c0e(0x64a)](_0x366b8f,_0x4f2c0e(0x65c)+'Mode\x20'+'(over'+'lay\x20o'+'nly)','Skips'+_0x4f2c0e(0x4d5)+_0x4f2c0e(0x335)+'rely\x20'+_0x4f2c0e(0x3a9)+'WASM\x20'+_0x4f2c0e(0x28c)+'.\x20Use'+_0x4f2c0e(0x2ab)+'\x20if\x20m'+'atche'+_0x4f2c0e(0x5dc)+_0x4f2c0e(0x44b)+'art.',_0x579bef[_0x4f2c0e(0x531)+_0x4f2c0e(0x32c)],_0x3f5e64=>{var _0x5835fb=_0x4f2c0e;_0x579bef['safeM'+'ode']=_0x3f5e64,_0x5f101a(),location[_0x5835fb(0x4ec)+'d']();},[_0x3f8c20[_0x4f2c0e(0x5ef)](_0x2a62cf,_0x4f2c0e(0x36f)+_0x4f2c0e(0x5ab)+'\x20relo'+_0x4f2c0e(0x4ad)+_0x4f2c0e(0x1e0)+'ches\x20'+'load\x20'+'in\x20sa'+'fe\x20mo'+'de,\x20t'+_0x4f2c0e(0x210)+_0x4f2c0e(0x450)+_0x4f2c0e(0x5f5)+'ok-re'+_0x4f2c0e(0x54f)+'\x20—\x20te'+_0x4f2c0e(0x4a8)+_0x4f2c0e(0x254)+'hooks'+'-appl'+_0x4f2c0e(0x39d)+_0x4f2c0e(0x2f9))]),_0x3f8c20['qYMsO'](_0x366b8f,'Hook\x20'+'risk\x20'+_0x4f2c0e(0x578)+_0x4f2c0e(0x649),_0x4f2c0e(0x71b)+_0x4f2c0e(0x420)+_0x4f2c0e(0x6c3)+'ls\x20a\x20'+'WASM\x20'+_0x4f2c0e(0x760)+'oline'+_0x4f2c0e(0x1de)+'the\x20w'+'hole\x20'+'page\x20'+_0x4f2c0e(0x48c)+_0x4f2c0e(0x672)+_0x4f2c0e(0x572)+_0x4f2c0e(0x3ac)+_0x4f2c0e(0x438)+_0x4f2c0e(0x271)+_0x4f2c0e(0x6ef)+_0x4f2c0e(0x303)+_0x4f2c0e(0x289)+_0x4f2c0e(0x4cd)+'ot\x20ma'+_0x4f2c0e(0x61c)+_0x4f2c0e(0x299)+_0x4f2c0e(0x209)+_0x4f2c0e(0x317)+_0x4f2c0e(0x2bf)+'s\x20\x27fu'+_0x4f2c0e(0x215)+_0x4f2c0e(0x398)+_0x4f2c0e(0x2e9)+'e\x20mis'+'match'+_0x4f2c0e(0x74b)+_0x4f2c0e(0x20c)+_0x4f2c0e(0x222)+_0x4f2c0e(0x350)+_0x4f2c0e(0x44d)+_0x4f2c0e(0x522)+'n\x20the'+_0x4f2c0e(0x5f3)+_0x4f2c0e(0x567)+_0x4f2c0e(0x4c8)+_0x4f2c0e(0x3c4)+'reloa'+_0x4f2c0e(0x53f)+_0x4f2c0e(0x658)+_0x4f2c0e(0x5b4)+_0x4f2c0e(0x20e)+'\x20your'+_0x4f2c0e(0x3fe)+'d\x20cho'+_0x4f2c0e(0x396)+'n.',_0x579bef[_0x4f2c0e(0x758)+'od']||_0x579bef[_0x4f2c0e(0x758)+_0x4f2c0e(0x697)]||_0x579bef['hookN'+'oReco'+'il']||_0x579bef[_0x4f2c0e(0x1ed)+_0x4f2c0e(0x446)+'e'],_0x49f76a=>{var _0xb11395=_0x4f2c0e;_0x579bef[_0xb11395(0x758)+'od']=_0x49f76a,_0x579bef[_0xb11395(0x758)+_0xb11395(0x697)]=_0x49f76a,_0x579bef[_0xb11395(0x627)+_0xb11395(0x430)+'il']=_0x49f76a,_0x579bef['hookC'+_0xb11395(0x446)+'e']=_0x49f76a,_0x5f101a(),location['reloa'+'d']();},[_0x2a62cf(_0x3f8c20['ftYtK']),_0x3f8c20[_0x4f2c0e(0x6f0)](_0x2a798a,_0x3f8c20['KlLLD'],null,_0x486b3a(_0x579bef[_0x4f2c0e(0x758)+'od'],_0x56b608=>{var _0x15585d=_0x4f2c0e,_0x120da9={'SIogE':function(_0x4d6843,_0x2773a2){return _0x4d6843+_0x2773a2;},'IAZBk':function(_0x27ab4c,_0x210ffb){return _0x341f4b['XtHdA'](_0x27ab4c,_0x210ffb);},'zsLuh':function(_0x5a0b5b,_0x188c49){return _0x5a0b5b+_0x188c49;},'hqbqI':_0x15585d(0x253)+'s','WEfNm':_0x341f4b[_0x15585d(0x5a8)],'vVKwP':'loade'+'d','SjrWY':_0x15585d(0x464)+'ng','UuYLF':_0x15585d(0x59e)+_0x15585d(0x3ce)+'t\x20','jroBl':'held','Xdpjb':function(_0x36e43b,_0x3f2ffd,_0x8e80e6,_0x4bd00f,_0x46ae9e,_0x1dc444){var _0xdbf96e=_0x15585d;return _0x341f4b[_0xdbf96e(0x56a)](_0x36e43b,_0x3f2ffd,_0x8e80e6,_0x4bd00f,_0x46ae9e,_0x1dc444);},'iRgTx':function(_0x58c610,_0x31f916,_0x46fc73,_0x142feb){return _0x341f4b['kNZIs'](_0x58c610,_0x31f916,_0x46fc73,_0x142feb);}};if(_0x15585d(0x508)==='NmWDp'){var _0x56a923={'tkNqr':'Unity'+'Engin'+_0x15585d(0x1ec)+_0x15585d(0x5e7)+_0x15585d(0x39f),'krMAf':'set_t'+'arget'+'Frame'+_0x15585d(0x204)},_0x41c0fb=_0x320125['safeM'+_0x15585d(0x32c)]?_0x15585d(0x516)+'MODE\x20'+_0x15585d(0x391)+_0x15585d(0x4ee)+_0x15585d(0x6c4)+'\x20no\x20h'+'ooks\x20'+_0x15585d(0x45e)+_0x15585d(0x596)+'\x20exit'+')':_0x1e6385['uwmk']?_0x120da9['SIogE'](_0x120da9['IAZBk']('UWMK\x20'+'bound'+'\x20'+(_0x522a2c['hooks'+'Total']?_0x120da9[_0x15585d(0x25d)](_0x120da9['SIogE'](_0x1fff5a[_0x15585d(0x28c)+'Ok'],'/'),_0x2bb266[_0x15585d(0x28c)+_0x15585d(0x56c)])+_0x120da9[_0x15585d(0x5ec)]:_0x15585d(0x4de)+'ks\x20ar'+_0x15585d(0x3fa)+_0x15585d(0x201)+_0x15585d(0x4b9))+_0x120da9[_0x15585d(0x410)]+(_0x47bc1a[_0x15585d(0x6f5)+_0x15585d(0x2ea)]?_0x120da9['vVKwP']:_0x120da9['SjrWY']),_0x15585d(0x4d9)+_0x15585d(0x433)+'\x20')+(_0x16ed42[_0x15585d(0x5e2)+_0x15585d(0x3c2)]?_0x15585d(0x2da):_0x15585d(0x2ac)),_0x120da9['UuYLF'])+(_0x1d5e86[_0x15585d(0x57f)+'ents']?_0x120da9['jroBl']:_0x15585d(0x2ac)):'UWMK\x20'+_0x15585d(0x4b2)+_0x15585d(0x6a3)+'overl'+_0x15585d(0x50f)+_0x15585d(0x276)+_0x15585d(0x6c7)+'all\x20t'+'he\x20us'+'erscr'+_0x15585d(0x47c);if(_0x3d9b9d[_0x15585d(0x35b)+'rror'])_0x41c0fb+=_0x15585d(0x2dd)+_0x15585d(0x33a)+_0x54ea78[_0x15585d(0x35b)+'rror'];return _0x120da9['Xdpjb'](_0x5bd6b9,_0x15585d(0x5a6)+'s',_0x41c0fb,_0x2cd50c['uwmk'],null,[_0x120da9['iRgTx'](_0x2d47b6,_0x15585d(0x507)+'PS\x20un'+_0x15585d(0x219),_0x15585d(0x613)+'\x20Unit'+_0x15585d(0x5f8)+_0x15585d(0x437)+_0x15585d(0x648)+_0x15585d(0x3cd)+_0x15585d(0x58f)+'arget'+'Frame'+_0x15585d(0x204),_0x6ded1a(_0x15585d(0x6cc),()=>{var _0x39bc2=_0x15585d;try{if(_0x38dd2a)_0x5409ae['call'](_0x56a923[_0x39bc2(0x57d)],_0x56a923['krMAf'],[-0x1bca+0x1*0x10eb+0xbcf]);}catch(_0x26d81e){}}))]);}else _0x579bef[_0x15585d(0x758)+'od']=_0x56b608,_0x5f101a();})),_0x2a798a('godDi'+_0x4f2c0e(0x480)+'ealth'+_0x4f2c0e(0x3f2)+_0x4f2c0e(0x6d5),null,_0x486b3a(_0x579bef[_0x4f2c0e(0x758)+'odDie'],_0x2e11d3=>{var _0x31c232=_0x4f2c0e;_0x341f4b['DTvsn']===_0x31c232(0x3bc)?(_0x31410d[_0x31c232(0x50b)+'tyle']=_0x3911e5['FhjQQ'](_0x45dba1,_0x3911e5['TSGsh']),_0x19936c['fillT'+_0x31c232(0x637)](_0x2bb988,_0x3640ef,_0x340d19),_0x725b9e+=-0x1916+0xd*0x164+0x712):(_0x579bef['hookG'+'odDie']=_0x2e11d3,_0x341f4b[_0x31c232(0x562)](_0x5f101a));})),_0x3f8c20[_0x4f2c0e(0x274)](_0x2a798a,'noRec'+'oil\x20('+'Recoi'+'lMoti'+_0x4f2c0e(0x568)+_0x4f2c0e(0x27f),null,_0x486b3a(_0x579bef['hookN'+'oReco'+'il'],_0x3de06b=>{var _0x72efb3=_0x4f2c0e;_0x3911e5[_0x72efb3(0x6a6)]('sHGIe',_0x3911e5[_0x72efb3(0x51d)])?(_0x579bef[_0x72efb3(0x627)+_0x72efb3(0x430)+'il']=_0x3de06b,_0x5f101a()):(_0x963522[_0x72efb3(0x758)+'od']=_0x410a34,_0x4bb376());})),_0x2a798a(_0x4f2c0e(0x2e7)+_0x4f2c0e(0x645)+'etGam'+_0x4f2c0e(0x2d8)+'ing\x20+'+'\x20IsGr'+'ounde'+'d)','no\x20ch'+'eats\x20'+_0x4f2c0e(0x71d)+_0x4f2c0e(0x355)+_0x4f2c0e(0x4d3)+'is',_0x3f8c20['VAFMv'](_0x486b3a,_0x579bef['hookC'+_0x4f2c0e(0x446)+'e'],_0x2fb4b3=>{var _0x5e8adb=_0x4f2c0e,_0x3e1d82={'JmteM':function(_0x41c662,_0x5111bc){return _0x41c662+_0x5111bc;},'sMmfR':function(_0x1f4b36,_0x4583ef){return _0x1f4b36(_0x4583ef);},'qNGWK':function(_0x3ca443,_0x3f47fe){var _0x49463b=_0x1dad;return _0x3911e5[_0x49463b(0x377)](_0x3ca443,_0x3f47fe);}};if(_0x5e8adb(0x24a)!==_0x3911e5[_0x5e8adb(0x64f)])try{var _0x59c3da=_0x578fd4&&(_0x17717c['messa'+'ge']||_0x231857['error']&&_0x1c7419[_0x5e8adb(0x622)][_0x5e8adb(0x324)+'ge'])||_0x5e8adb(0x6d3)+'wn';if(_0x59826e&&_0x430961[_0x5e8adb(0x3d2)+'ame'])_0x59c3da+=_0x3e1d82[_0x5e8adb(0x475)](_0x5e8adb(0x5fe)+_0x3e1d82[_0x5e8adb(0x4d4)](_0x3d4dc3,_0x2910e5['filen'+_0x5e8adb(0x34a)])[_0x5e8adb(0x4dc)]('/')[_0x5e8adb(0x5b7)]()+':',_0x19bb48['linen'+'o']||'?');_0x565076[_0x5e8adb(0x35b)+_0x5e8adb(0x265)]=_0x3e1d82['qNGWK'](_0x550efd,_0x59c3da)['slice'](0x179b+0x2*0x12c2+-0x3d1f,-0x68*-0x5e+0x1*-0x576+-0x7*0x496);}catch(_0x3f090d){}else _0x579bef[_0x5e8adb(0x1ed)+'aptur'+'e']=_0x2fb4b3,_0x5f101a();}))]),_0x366b8f('ACTk\x20'+'Kille'+'r',_0x3f8c20['snrZZ'],_0x579bef[_0x4f2c0e(0x27b)+_0x4f2c0e(0x238)],_0x200649=>{var _0x27b043=_0x4f2c0e;_0x579bef[_0x27b043(0x27b)+'ill']=_0x200649,_0x341f4b['AwHBN'](_0x5f101a);},[_0x3f8c20['VAFMv'](_0x2a62cf,'God/d'+'amage'+'/rapi'+'d\x20gre'+_0x4f2c0e(0x540)+'raise'+'\x20ban\x20'+'risk\x20'+'even\x20'+_0x4f2c0e(0x548)+'this\x20'+_0x4f2c0e(0x65d),!![])]),_0x366b8f('Dange'+'r','These'+_0x4f2c0e(0x2c9)+'e\x20ser'+'ver-v'+_0x4f2c0e(0x457)+_0x4f2c0e(0x33b)+'ces.',!![],null,[_0x3f8c20[_0x4f2c0e(0x61d)](_0x2a798a,_0x3f8c20['zDHsk'],null,_0x3f8c20['XniXo'](_0x22e488,_0x3f8c20['VVDZA'],()=>{_0x579bef={..._0xbebe06},_0x5f101a(),location['reloa'+'d']();}))])];}var _0x3149ab=null;function _0x5ce4d5(_0x581431){var _0x5953d4=_0x42edd3;_0x135bf7=_0x581431;if(!_0x3149ab){var _0x2c8d71=('2|0|3'+'|5|4|'+'1')['split']('|'),_0x46c5cf=-0x1*-0x107d+-0x3a6*0x1+-0xcd7;while(!![]){switch(_0x2c8d71[_0x46c5cf++]){case'0':_0xf8936b[_0x5953d4(0x494)+_0x5953d4(0x74f)+'t']=_0x4a59d8;continue;case'1':requestAnimationFrame(()=>_0x3149ab[_0x5953d4(0x48a)+'List']['add'](_0x5953d4(0x23a)));continue;case'2':var _0xf8936b=document[_0x5953d4(0x1f1)+_0x5953d4(0x26e)+'ent'](_0x5953d4(0x1e3));continue;case'3':_0x2917eb['appen'+_0x5953d4(0x243)+'d'](_0xf8936b);continue;case'4':_0x2917eb['appen'+_0x5953d4(0x243)+'d'](_0x3149ab);continue;case'5':_0x3149ab=_0x244fe4();continue;}break;}}_0x3149ab[_0x5953d4(0x48a)+_0x5953d4(0x60b)][_0x5953d4(0x333)+'e'](_0x3f8c20[_0x5953d4(0x3db)],_0x581431);}function _0x40548a(){var _0x29db8d=_0x42edd3;_0x341f4b[_0x29db8d(0x4e8)](_0x5ce4d5,!_0x135bf7);}function _0x244fe4(){var _0x3c8436=_0x42edd3,_0x27e542=document[_0x3c8436(0x1f1)+_0x3c8436(0x26e)+_0x3c8436(0x40c)](_0x341f4b['BVXec']);_0x27e542['class'+_0x3c8436(0x3d4)]=_0x3c8436(0x61f)+_0x3c8436(0x3e1);var _0x2d32d0=document[_0x3c8436(0x1f1)+'eElem'+_0x3c8436(0x40c)](_0x3c8436(0x6f8));_0x2d32d0['class'+'Name']=_0x341f4b[_0x3c8436(0x588)];var _0x384294=document['creat'+_0x3c8436(0x26e)+_0x3c8436(0x40c)](_0x3c8436(0x3e9));_0x384294[_0x3c8436(0x48a)+'Name']=_0x341f4b[_0x3c8436(0x671)],_0x384294[_0x3c8436(0x31d)+'HTML']='<svg\x20'+_0x3c8436(0x4a7)+'ox=\x220'+'\x200\x2024'+_0x3c8436(0x330)+'class'+'=\x22mn-'+'logo-'+_0x3c8436(0x461)+_0x3c8436(0x629)+_0x3c8436(0x250)+'12\x2021'+_0x3c8436(0x36a)+'-2.5-'+_0x3c8436(0x319)+_0x3c8436(0x5cc)+_0x3c8436(0x6b0)+_0x3c8436(0x756)+'8-4.5'+_0x3c8436(0x498)+_0x3c8436(0x4fe)+'\x204\x204.'+_0x3c8436(0x720)+_0x3c8436(0x3b2)+_0x3c8436(0x597)+_0x3c8436(0x28f)+'fill='+'\x22none'+'\x22\x20str'+_0x3c8436(0x439)+_0x3c8436(0x69d)+'9d\x22\x20s'+_0x3c8436(0x73b)+'-widt'+_0x3c8436(0x5e8)+_0x3c8436(0x46f)+_0x3c8436(0x33f)+_0x3c8436(0x716)+_0x3c8436(0x206)+_0x3c8436(0x302)+_0x3c8436(0x73b)+_0x3c8436(0x4b1)+_0x3c8436(0x744)+_0x3c8436(0x435)+'d\x22/><'+_0x3c8436(0x51a)+'e\x20cx='+_0x3c8436(0x49c)+_0x3c8436(0x1f5)+_0x3c8436(0x2f7)+_0x3c8436(0x2d4)+_0x3c8436(0x247)+_0x3c8436(0x357)+_0x3c8436(0x67f)+'/></s'+_0x3c8436(0x395),_0x2d32d0[_0x3c8436(0x27e)+'dChil'+'d'](_0x384294);var _0x28064f=document['creat'+_0x3c8436(0x26e)+_0x3c8436(0x40c)](_0x3c8436(0x3e9));_0x28064f[_0x3c8436(0x48a)+_0x3c8436(0x3d4)]=_0x3c8436(0x3d9)+'in';var _0x5f2346=document['creat'+_0x3c8436(0x26e)+_0x3c8436(0x40c)](_0x341f4b['MwgIZ']);_0x5f2346[_0x3c8436(0x48a)+_0x3c8436(0x3d4)]='mn-to'+'p';var _0x46f897=document['creat'+_0x3c8436(0x26e)+_0x3c8436(0x40c)]('div');_0x46f897[_0x3c8436(0x48a)+_0x3c8436(0x3d4)]=_0x341f4b[_0x3c8436(0x6ac)];var _0x364647=document[_0x3c8436(0x1f1)+_0x3c8436(0x26e)+_0x3c8436(0x40c)]('h2');_0x364647['class'+_0x3c8436(0x3d4)]='mn-h',_0x364647[_0x3c8436(0x494)+_0x3c8436(0x74f)+'t']='Sakur'+_0x3c8436(0x546)+'r';var _0x3d64e2=document['creat'+'eElem'+'ent'](_0x341f4b[_0x3c8436(0x50c)]);_0x3d64e2['class'+_0x3c8436(0x3d4)]=_0x341f4b[_0x3c8436(0x307)],_0x3d64e2['textC'+_0x3c8436(0x74f)+'t']='kours'+_0x3c8436(0x473)+'.io\x20m'+_0x3c8436(0x3a0),_0x46f897[_0x3c8436(0x27e)+'d'](_0x364647,_0x3d64e2);var _0x1d2789=document[_0x3c8436(0x1f1)+'eElem'+_0x3c8436(0x40c)](_0x3c8436(0x724)+'n');_0x1d2789['type']=_0x341f4b['sYFdt'],_0x1d2789[_0x3c8436(0x48a)+_0x3c8436(0x3d4)]='mn-cl'+_0x3c8436(0x51b),_0x1d2789[_0x3c8436(0x3f0)]=_0x3c8436(0x2a5),_0x1d2789[_0x3c8436(0x31d)+_0x3c8436(0x1f9)]='<svg\x20'+_0x3c8436(0x4a7)+_0x3c8436(0x5f9)+'\x200\x2024'+'\x2024\x22>'+_0x3c8436(0x629)+_0x3c8436(0x250)+_0x3c8436(0x4c1)+_0x3c8436(0x429)+'18\x206\x20'+_0x3c8436(0x66c)+'/></s'+_0x3c8436(0x395),_0x1d2789['oncli'+'ck']=()=>_0x5ce4d5(![]),_0x5f2346['appen'+'d'](_0x46f897,_0x1d2789);var _0x11c3e8=document[_0x3c8436(0x1f1)+'eElem'+_0x3c8436(0x40c)]('div');_0x11c3e8['class'+_0x3c8436(0x3d4)]=_0x3c8436(0x733)+'ls',_0x28064f[_0x3c8436(0x27e)+'d'](_0x5f2346,_0x11c3e8),_0x27e542['appen'+'d'](_0x2d32d0,_0x28064f);var _0x3ae766=new Map();for(var _0x180bb0 of _0x2f4500){var _0x5f278e=document['creat'+'eElem'+'ent']('butto'+'n');_0x5f278e[_0x3c8436(0x39a)]=_0x341f4b[_0x3c8436(0x6b6)],_0x5f278e[_0x3c8436(0x48a)+_0x3c8436(0x3d4)]=_0x3c8436(0x3a4)+'b',_0x5f278e[_0x3c8436(0x3f0)]=_0x180bb0['label'],_0x5f278e['inner'+_0x3c8436(0x1f9)]=_0x341f4b['idkAI'](_0x3c8436(0x2c6)+'l>'+_0x180bb0[_0x3c8436(0x258)],'</sma'+_0x3c8436(0x47e)),_0x5f278e[_0x3c8436(0x5d9)+'ck']=(_0x503d94=>()=>_0x47f00c(_0x503d94))(_0x180bb0['id']),_0x3ae766['set'](_0x180bb0['id'],_0x5f278e),_0x2d32d0['appen'+_0x3c8436(0x243)+'d'](_0x5f278e);}function _0x47f00c(_0x41dcc4){var _0x1e0cc2=_0x3c8436;_0x84a647[_0x1e0cc2(0x6d0)]=_0x41dcc4,_0x341f4b['iNHse'](_0x148600);var _0x1b9fbd=_0x2f4500['find'](_0x59d96a=>_0x59d96a['id']===_0x41dcc4)||_0x2f4500[-0x17cb*-0x1+0x2b*0x1b+-0x31*0x94];_0x364647[_0x1e0cc2(0x494)+'onten'+'t']=_0x1e0cc2(0x6ba)+_0x1e0cc2(0x546)+'r\x20—\x20'+_0x1b9fbd[_0x1e0cc2(0x258)];for(var [_0x56e8bc,_0x86fbba]of _0x3ae766)_0x86fbba[_0x1e0cc2(0x48a)+_0x1e0cc2(0x60b)]['toggl'+'e'](_0x341f4b['wveWu'],_0x56e8bc===_0x41dcc4);_0x11c3e8['repla'+'ceChi'+'ldren'](..._0x1d7280(_0x41dcc4));}return _0x341f4b['HNPHK'](_0x47f00c,_0x84a647['cat']||_0x3c8436(0x53d)+'t'),setInterval(()=>{var _0x21d143=_0x3c8436;if(!_0x135bf7)return;var _0x48af95=_0x11c3e8[_0x21d143(0x2e8)+'ren'];for(var _0x5b2c95=0x30*-0x7a+0x1*-0x1582+0x2c62;_0x341f4b['nxtks'](_0x5b2c95,_0x48af95[_0x21d143(0x766)+'h']);_0x5b2c95++){var _0x2ceda3=_0x48af95[_0x5b2c95][_0x21d143(0x308)+_0x21d143(0x75c)+_0x21d143(0x35a)](_0x21d143(0x486)+_0x21d143(0x5a7));_0x2ceda3&&(_0x341f4b[_0x21d143(0x528)](_0x2ceda3[_0x21d143(0x494)+'onten'+'t']['index'+'Of'](_0x341f4b['PPxqe']),0x4d*0xa+0x1244+-0x1546*0x1)||_0x341f4b[_0x21d143(0x418)](_0x2ceda3['textC'+'onten'+'t']['index'+'Of']('SAFE'),-0x18ed*0x1+-0xe5*0x1f+0x34a8))&&(_0x2ceda3[_0x21d143(0x494)+_0x21d143(0x74f)+'t']=_0x135c5c[_0x21d143(0x531)+_0x21d143(0x32c)]?_0x341f4b['xUAkj']:_0x135c5c['uwmk']?_0x341f4b['kfdMq'](_0x341f4b['mJyKU'](_0x341f4b[_0x21d143(0x4d6)](_0x341f4b['IcNKE'](_0x341f4b[_0x21d143(0x5f6)],_0x135c5c['hooks'+_0x21d143(0x56c)]?_0x135c5c['hooks'+'Ok']+'/'+_0x135c5c['hooks'+_0x21d143(0x56c)]+_0x341f4b[_0x21d143(0x2f0)]:_0x21d143(0x4de)+'ks\x20ar'+'med\x20('+_0x21d143(0x201)+'ff)')+_0x341f4b['YuLho'],_0x135c5c['gameL'+_0x21d143(0x2ea)]?_0x21d143(0x2cd)+'d':'loadi'+'ng'),_0x341f4b[_0x21d143(0x6ab)])+(_0x135c5c['shoot'+_0x21d143(0x3c2)]?_0x21d143(0x2da):_0x341f4b['KYWWe']),_0x341f4b['eltzp'])+(_0x135c5c['movem'+_0x21d143(0x491)]?_0x21d143(0x2da):_0x21d143(0x2ac))+(_0x135c5c['lastE'+'rror']?_0x21d143(0x2dd)+_0x21d143(0x33a)+_0x135c5c['lastE'+_0x21d143(0x265)]:''):_0x21d143(0x5c3)+_0x21d143(0x4b2)+_0x21d143(0x3d7)+'overl'+_0x21d143(0x50f)+_0x21d143(0x276)+_0x21d143(0x6c7)+_0x21d143(0x252)+'he\x20us'+'erscr'+_0x21d143(0x47c));}},-0x1b79+-0x2ff+-0x14*-0x1b8),_0x27e542;}var _0x4a59d8=_0x42edd3(0x4bf)+':host'+'\x20{\x20al'+_0x42edd3(0x385)+'itial'+_0x42edd3(0x224)+'\x20\x20\x20*\x20'+_0x42edd3(0x6fe)+'-sizi'+_0x42edd3(0x5fb)+_0x42edd3(0x768)+_0x42edd3(0x3f5)+'\x20marg'+_0x42edd3(0x55e)+_0x42edd3(0x358)+_0x42edd3(0x541)+_0x42edd3(0x3fb)+_0x42edd3(0x4bc)+'r\x22,\x20\x22'+_0x42edd3(0x31a)+_0x42edd3(0x735)+_0x42edd3(0x5c0)+_0x42edd3(0x70e)+_0x42edd3(0x4db)+_0x42edd3(0x443)+_0x42edd3(0x4c9)+'\x0a\x20\x20\x20\x20'+'.mn-p'+_0x42edd3(0x67d)+_0x42edd3(0x3bd)+'ition'+_0x42edd3(0x35e)+_0x42edd3(0x5ff)+';\x20rig'+'ht:\x202'+'4px;\x20'+_0x42edd3(0x616)+_0x42edd3(0x36c)+_0x42edd3(0x4f1)+'idth:'+_0x42edd3(0x49d)+'620px'+_0x42edd3(0x639)+_0x42edd3(0x3b6)+_0x42edd3(0x482)+'48px)'+_0x42edd3(0x3ca)+'x-hei'+_0x42edd3(0x759)+'min(4'+_0x42edd3(0x2a6)+_0x42edd3(0x4e2)+_0x42edd3(0x6d7)+_0x42edd3(0x348)+_0x42edd3(0x3f4)+_0x42edd3(0x332)+'\x20\x20\x20di'+'splay'+_0x42edd3(0x56b)+_0x42edd3(0x1f7)+_0x42edd3(0x532)+'px;\x20p'+_0x42edd3(0x436)+_0x42edd3(0x4bb)+'px;\x20b'+'order'+_0x42edd3(0x727)+'us:\x202'+_0x42edd3(0x3a5)+'point'+_0x42edd3(0x69f)+_0x42edd3(0x46e)+_0x42edd3(0x732)+';\x0a\x20\x20\x20'+_0x42edd3(0x30c)+_0x42edd3(0x60c)+'und:\x20'+'rgba('+_0x42edd3(0x4eb)+',21,.'+_0x42edd3(0x41b)+_0x42edd3(0x31b)+_0x42edd3(0x69e)+_0x42edd3(0x5a0)+':\x20blu'+'r(22p'+_0x42edd3(0x5f2)+_0x42edd3(0x705)+_0x42edd3(0x1e2)+'%);\x20-'+'webki'+_0x42edd3(0x559)+_0x42edd3(0x4d2)+_0x42edd3(0x68a)+_0x42edd3(0x447)+'lur(2'+_0x42edd3(0x5df)+_0x42edd3(0x35d)+_0x42edd3(0x72a)+_0x42edd3(0x539)+_0x42edd3(0x4bf)+_0x42edd3(0x3cc)+_0x42edd3(0x709)+'ow:\x200'+'\x200\x200\x20'+_0x42edd3(0x286)+_0x42edd3(0x5aa)+_0x42edd3(0x6c1)+_0x42edd3(0x290)+_0x42edd3(0x347)+_0x42edd3(0x62a)+'et\x200\x20'+_0x42edd3(0x5c6)+_0x42edd3(0x59d)+'(255,'+'255,2'+_0x42edd3(0x40a)+_0x42edd3(0x22e)+_0x42edd3(0x560)+'\x2080px'+_0x42edd3(0x59d)+_0x42edd3(0x292)+'0,.55'+_0x42edd3(0x59c)+_0x42edd3(0x556)+_0x42edd3(0x2dc)+'y:\x200;'+'\x20tran'+_0x42edd3(0x26b)+_0x42edd3(0x5b9)+_0x42edd3(0x3a6)+'eY(18'+'px);\x20'+_0x42edd3(0x6b3)+_0x42edd3(0x69f)+_0x42edd3(0x46e)+_0x42edd3(0x445)+';\x20tra'+_0x42edd3(0x31e)+_0x42edd3(0x230)+'pacit'+_0x42edd3(0x331)+_0x42edd3(0x754)+'e,\x20tr'+_0x42edd3(0x48b)+'rm\x20.4'+_0x42edd3(0x260)+'bic-b'+'ezier'+_0x42edd3(0x419)+'1,.36'+_0x42edd3(0x663)+'\x20\x20\x20\x20\x20'+'\x20colo'+'r:\x20#f'+_0x42edd3(0x4a9)+';\x20fon'+_0x42edd3(0x49f)+_0x42edd3(0x364)+_0x42edd3(0x624)+_0x42edd3(0x4bf)+'.mn-p'+_0x42edd3(0x2be)+'shown'+_0x42edd3(0x5e3)+'acity'+_0x42edd3(0x2e5)+_0x42edd3(0x4d7)+_0x42edd3(0x2bd)+'\x20none'+_0x42edd3(0x2d0)+_0x42edd3(0x6f7)+'event'+_0x42edd3(0x74e)+_0x42edd3(0x706)+_0x42edd3(0x4bf)+_0x42edd3(0x28d)+_0x42edd3(0x316)+_0x42edd3(0x581)+'lay:\x20'+_0x42edd3(0x202)+_0x42edd3(0x6bc)+_0x42edd3(0x432)+'ction'+_0x42edd3(0x4f3)+_0x42edd3(0x22d)+_0x42edd3(0x269)+'-item'+_0x42edd3(0x270)+'nter;'+_0x42edd3(0x44a)+_0x42edd3(0x6c5)+_0x42edd3(0x2ca)+'h:\x2062'+'px;\x20f'+'lex:\x20'+'none;'+'\x20padd'+_0x42edd3(0x314)+'12px\x20'+(_0x42edd3(0x3b8)+'rder-'+_0x42edd3(0x4e1)+_0x42edd3(0x6e4)+_0x42edd3(0x20b)+_0x42edd3(0x341)+_0x42edd3(0x6db)+'round'+':\x20rgb'+_0x42edd3(0x6b2)+_0x42edd3(0x2b7)+'255,.'+'025);'+_0x42edd3(0x504)+'shado'+_0x42edd3(0x4f2)+_0x42edd3(0x5d6)+_0x42edd3(0x667)+_0x42edd3(0x286)+_0x42edd3(0x5aa)+_0x42edd3(0x6c1)+_0x42edd3(0x290)+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-log'+_0x42edd3(0x72f)+_0x42edd3(0x50a)+_0x42edd3(0x27c)+_0x42edd3(0x256)+'lace-'+'items'+_0x42edd3(0x467)+'ter;\x20'+'width'+':\x2032p'+'x;\x20he'+_0x42edd3(0x642)+'\x2032px'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+'n-log'+'o-svg'+_0x42edd3(0x3d3)+_0x42edd3(0x207)+_0x42edd3(0x48f)+'\x20heig'+'ht:\x202'+'5px;\x20'+'overf'+'low:\x20'+_0x42edd3(0x2a1)+_0x42edd3(0x4dd)+_0x42edd3(0x5a0)+_0x42edd3(0x40d)+_0x42edd3(0x313)+_0x42edd3(0x5e5)+_0x42edd3(0x24c)+_0x42edd3(0x28a)+'a(255'+',107,'+_0x42edd3(0x5cb)+_0x42edd3(0x496)+'}\x0a\x20\x20\x20'+_0x42edd3(0x273)+_0x42edd3(0x2f6)+'\x20disp'+_0x42edd3(0x3ab)+_0x42edd3(0x202)+'\x20alig'+_0x42edd3(0x54b)+_0x42edd3(0x49e)+'enter'+_0x42edd3(0x40b)+'tify-'+_0x42edd3(0x305)+_0x42edd3(0x73e)+_0x42edd3(0x632)+_0x42edd3(0x39e)+_0x42edd3(0x34c)+'2px;\x20'+_0x42edd3(0x4fb)+_0x42edd3(0x381)+_0x42edd3(0x63d)+'order'+_0x42edd3(0x3b3)+_0x42edd3(0x45a)+'r-rad'+'ius:\x20'+'10px;'+_0x42edd3(0x4bf)+_0x42edd3(0x563)+'kgrou'+_0x42edd3(0x6e0)+_0x42edd3(0x251)+_0x42edd3(0x49b)+_0x42edd3(0x34e)+_0x42edd3(0x5c7)+_0x42edd3(0x5aa)+'46,23'+_0x42edd3(0x21e)+_0x42edd3(0x41e)+'\x20curs'+_0x42edd3(0x4a4)+'ointe'+'r;\x20fo'+_0x42edd3(0x555)+'ze:\x201'+_0x42edd3(0x471)+_0x42edd3(0x36d)+'weigh'+_0x42edd3(0x2d2)+_0x42edd3(0x5d5)+_0x42edd3(0x4f6)+_0x42edd3(0x3a4)+'b:hov'+'er\x20{\x20'+'color'+':\x20rgb'+_0x42edd3(0x6b7)+',238,'+'242,.'+_0x42edd3(0x2cb)+'\x0a\x20\x20\x20\x20'+'.mn-t'+'ab.ac'+_0x42edd3(0x272)+_0x42edd3(0x234)+_0x42edd3(0x526)+'ff6b9'+'d;\x20ba'+_0x42edd3(0x60c)+'und:\x20'+_0x42edd3(0x763)+_0x42edd3(0x2a4)+'07,15'+'7,.1)'+_0x42edd3(0x224)+'\x20\x20\x20.m'+_0x42edd3(0x723)+'n\x20{\x20f'+_0x42edd3(0x242)+_0x42edd3(0x372)+_0x42edd3(0x370)+_0x42edd3(0x62e)+_0x42edd3(0x36b)+'play:'+'\x20flex'+';\x20fle'+_0x42edd3(0x280)+'ectio'+_0x42edd3(0x56f)+'lumn;'+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+'-top\x20'+_0x42edd3(0x212)+_0x42edd3(0x6e5)+_0x42edd3(0x6bc)+_0x42edd3(0x376)+'gn-it'+_0x42edd3(0x547)+'cente'+_0x42edd3(0x6a2)+_0x42edd3(0x4a3)+'px;\x20p'+_0x42edd3(0x436)+'g:\x206p'+_0x42edd3(0x417)+_0x42edd3(0x565)+_0x42edd3(0x73c)+_0x42edd3(0x70b)+_0x42edd3(0x3e8)+_0x42edd3(0x3fc)+'\x20}\x0a\x20\x20'+_0x42edd3(0x625)+'-titl'+'es\x20{\x20'+_0x42edd3(0x4f9)+_0x42edd3(0x24e)+_0x42edd3(0x1e7)+_0x42edd3(0x207)+'0;\x20}\x0a'+_0x42edd3(0x4f6)+'mn-h\x20'+_0x42edd3(0x680)+'t-siz'+'e:\x2017'+_0x42edd3(0x434)+_0x42edd3(0x6d6)+_0x42edd3(0x610)+_0x42edd3(0x3f7)+_0x42edd3(0x224)+'\x20\x20\x20.m'+_0x42edd3(0x4ba)+'\x20{\x20fo'+_0x42edd3(0x555)+'ze:\x201'+_0x42edd3(0x749)+'opaci')+(_0x42edd3(0x225)+'4;\x20}\x0a'+'\x20\x20\x20\x20.'+'mn-cl'+_0x42edd3(0x579)+'\x20disp'+_0x42edd3(0x3ab)+'grid;'+'\x20plac'+_0x42edd3(0x5e4)+_0x42edd3(0x49e)+_0x42edd3(0x632)+';\x20wid'+'th:\x202'+_0x42edd3(0x22c)+_0x42edd3(0x4fb)+'t:\x2028'+'px;\x20b'+'order'+_0x42edd3(0x3b3)+'borde'+'r-rad'+_0x42edd3(0x54a)+_0x42edd3(0x22c)+_0x42edd3(0x6db)+_0x42edd3(0x428)+_0x42edd3(0x5b9)+_0x42edd3(0x728)+'ent;\x20'+'color'+_0x42edd3(0x3f9)+_0x42edd3(0x248)+'\x20opac'+'ity:\x20'+_0x42edd3(0x441)+'curso'+_0x42edd3(0x3a2)+_0x42edd3(0x468)+_0x42edd3(0x224)+_0x42edd3(0x63a)+_0x42edd3(0x6c2)+'se:ho'+_0x42edd3(0x591)+_0x42edd3(0x37e)+_0x42edd3(0x28e)+_0x42edd3(0x239)+'ckgro'+'und:\x20'+'rgba('+_0x42edd3(0x42f)+_0x42edd3(0x6c1)+'5,.05'+');\x20}\x0a'+'\x20\x20\x20\x20.'+_0x42edd3(0x3d8)+'ose\x20s'+_0x42edd3(0x470)+_0x42edd3(0x57a)+':\x2014p'+'x;\x20he'+_0x42edd3(0x642)+_0x42edd3(0x45b)+_0x42edd3(0x32a)+'l:\x20no'+_0x42edd3(0x6b4)+_0x42edd3(0x73b)+_0x42edd3(0x45c)+'rentC'+_0x42edd3(0x47f)+_0x42edd3(0x46f)+_0x42edd3(0x1eb)+'dth:\x20'+'2;\x20st'+_0x42edd3(0x631)+'linec'+_0x42edd3(0x367)+_0x42edd3(0x223)+'\x20}\x0a\x20\x20'+_0x42edd3(0x625)+_0x42edd3(0x2d3)+'\x20{\x20fl'+'ex:\x201'+';\x20min'+_0x42edd3(0x6b9)+'ht:\x200'+_0x42edd3(0x670)+_0x42edd3(0x33c)+'-y:\x20a'+_0x42edd3(0x635)+'displ'+_0x42edd3(0x2ce)+_0x42edd3(0x291)+_0x42edd3(0x495)+'templ'+'ate-c'+_0x42edd3(0x5da)+_0x42edd3(0x3b1)+_0x42edd3(0x762)+_0x42edd3(0x47b)+_0x42edd3(0x72c)+_0x42edd3(0x5f7)+_0x42edd3(0x452)+'0px,\x20'+_0x42edd3(0x46c)+';\x20ali'+'gn-it'+_0x42edd3(0x547)+_0x42edd3(0x511)+';\x20ali'+'gn-co'+_0x42edd3(0x5c5)+_0x42edd3(0x2f8)+'rt;\x20g'+'ap:\x201'+'0px;\x20'+'paddi'+_0x42edd3(0x275)+_0x42edd3(0x5d7)+'6px\x200'+_0x42edd3(0x224)+_0x42edd3(0x63a)+'n-col'+_0x42edd3(0x5fa)+_0x42edd3(0x6be)+'-scro'+_0x42edd3(0x3ba)+_0x42edd3(0x3d3)+'dth:\x20'+_0x42edd3(0x22c)+_0x42edd3(0x2e0)+'\x20.mn-'+_0x42edd3(0x29b)+_0x42edd3(0x32d)+'kit-s'+_0x42edd3(0x5e9)+'bar-t'+_0x42edd3(0x288)+'{\x20bac'+_0x42edd3(0x1ea)+_0x42edd3(0x3c8)+_0x42edd3(0x5aa)+_0x42edd3(0x6c1)+'5,255'+_0x42edd3(0x43a)+_0x42edd3(0x557)+'der-r'+'adius'+':\x204px'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+_0x42edd3(0x1dd)+'d\x20{\x20b'+'order'+_0x42edd3(0x727)+'us:\x201'+'2px;\x20'+'backg'+_0x42edd3(0x428)+_0x42edd3(0x75b)+'a(255'+',255,'+'255,.'+'025);'+'\x20box-'+_0x42edd3(0x408)+'w:\x20in'+'set\x200'+_0x42edd3(0x667)+_0x42edd3(0x286)+_0x42edd3(0x5aa)+'55,25'+_0x42edd3(0x290)+_0x42edd3(0x42d)+_0x42edd3(0x224)+_0x42edd3(0x233)+'k-car'+_0x42edd3(0x5b6)+_0x42edd3(0x615)+_0x42edd3(0x1ea)+'nd:\x20r'+_0x42edd3(0x5aa)+_0x42edd3(0x6c1)+_0x42edd3(0x290)+',.04)'+_0x42edd3(0x698)+_0x42edd3(0x709)+_0x42edd3(0x306)+'nset\x20'+_0x42edd3(0x472)+_0x42edd3(0x73f)+'rgba('+_0x42edd3(0x2a4)+_0x42edd3(0x6ec)+'7,.28'+_0x42edd3(0x69b)+_0x42edd3(0x4f6)+'sk-ca'+_0x42edd3(0x3bb)+_0x42edd3(0x469)+_0x42edd3(0x609))+(_0x42edd3(0x338)+_0x42edd3(0x226)+'align'+'-item'+_0x42edd3(0x270)+'nter;'+'\x20gap:'+_0x42edd3(0x5b5)+'\x20padd'+_0x42edd3(0x314)+'11px\x20'+_0x42edd3(0x5f4)+_0x42edd3(0x2c4)+'\x20\x20.sk'+_0x42edd3(0x57b)+'-titl'+'e\x20{\x20f'+_0x42edd3(0x242)+_0x42edd3(0x372)+'n-wid'+_0x42edd3(0x62e)+_0x42edd3(0x224)+'\x20\x20\x20.s'+_0x42edd3(0x1dd)+'d-tit'+'le\x20st'+'rong\x20'+_0x42edd3(0x680)+_0x42edd3(0x49f)+_0x42edd3(0x364)+_0x42edd3(0x434)+_0x42edd3(0x6d6)+'eight'+_0x42edd3(0x346)+_0x42edd3(0x34e)+'or:\x20r'+_0x42edd3(0x5aa)+_0x42edd3(0x633)+_0x42edd3(0x21e)+_0x42edd3(0x38d)+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-car'+_0x42edd3(0x5b6)+'.sk-c'+_0x42edd3(0x6c9)+_0x42edd3(0x4a6)+_0x42edd3(0x6f1)+_0x42edd3(0x415)+'olor:'+'\x20#fff'+_0x42edd3(0x356)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x42edd3(0x59a)+'\x20{\x20pa'+_0x42edd3(0x246)+_0x42edd3(0x61b)+'2px\x201'+'0px;\x20'+'}\x0a\x20\x20\x20'+_0x42edd3(0x6d8)+_0x42edd3(0x583)+_0x42edd3(0x409)+_0x42edd3(0x555)+_0x42edd3(0x761)+'1px;\x20'+'opaci'+_0x42edd3(0x225)+_0x42edd3(0x68e)+_0x42edd3(0x535)+_0x42edd3(0x616)+_0x42edd3(0x4d8)+_0x42edd3(0x68b)+'\x20\x20\x20\x20.'+_0x42edd3(0x6da)+_0x42edd3(0x4b6)+_0x42edd3(0x50a)+_0x42edd3(0x23b)+_0x42edd3(0x55f)+'lign-'+'items'+_0x42edd3(0x467)+_0x42edd3(0x3dd)+'gap:\x20'+_0x42edd3(0x22c)+_0x42edd3(0x5e6)+_0x42edd3(0x70d)+'px\x200;'+_0x42edd3(0x2c1)+'-size'+':\x2011.'+_0x42edd3(0x362)+_0x42edd3(0x2e0)+_0x42edd3(0x6d8)+_0x42edd3(0x258)+_0x42edd3(0x3b7)+'ex:\x201'+';\x20col'+'or:\x20r'+'gba(2'+'46,23'+_0x42edd3(0x21e)+',.75)'+_0x42edd3(0x224)+_0x42edd3(0x233)+'k-hin'+_0x42edd3(0x21d)+_0x42edd3(0x50a)+'y:\x20bl'+_0x42edd3(0x2d6)+'font-'+_0x42edd3(0x345)+'\x2010px'+_0x42edd3(0x1e6)+'city:'+_0x42edd3(0x662)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'switc'+_0x42edd3(0x575)+_0x42edd3(0x640)+_0x42edd3(0x414)+'elati'+_0x42edd3(0x55c)+_0x42edd3(0x74c)+'\x2026px'+';\x20hei'+_0x42edd3(0x759)+_0x42edd3(0x5d2)+_0x42edd3(0x4ac)+'er:\x200'+_0x42edd3(0x557)+'der-r'+_0x42edd3(0x4c0)+':\x2099p'+'x;\x20ba'+_0x42edd3(0x60c)+_0x42edd3(0x52f)+'rgba('+_0x42edd3(0x42f)+'55,25'+'5,.07'+_0x42edd3(0x620)+'rsor:'+'\x20poin'+'ter;\x20'+'flex:'+'\x20none'+';\x20}\x0a\x20'+'\x20\x20\x20.s'+'k-swi'+_0x42edd3(0x261)+'after'+_0x42edd3(0x214)+_0x42edd3(0x5c5)+':\x20\x22\x22;'+_0x42edd3(0x51f)+_0x42edd3(0x2c3)+_0x42edd3(0x479)+_0x42edd3(0x2e2)+'\x20top:'+_0x42edd3(0x53c)+'\x20left'+':\x203px'+_0x42edd3(0x39e)+_0x42edd3(0x4e9)+_0x42edd3(0x31c)+'eight'+_0x42edd3(0x3c7)+';\x20bor'+_0x42edd3(0x655)+'adius'+':\x2050%'+_0x42edd3(0x5f0)+_0x42edd3(0x1ea)+'nd:\x20r'+_0x42edd3(0x5aa)+'55,25'+'5,255'+',.25)'+_0x42edd3(0x2fc)+'nsiti'+_0x42edd3(0x2db)+'eft\x20.'+'2s,\x20b'+'ackgr'+_0x42edd3(0x277)+_0x42edd3(0x57e)+_0x42edd3(0x2e0)+_0x42edd3(0x6d8)+'switc'+_0x42edd3(0x334)+_0x42edd3(0x612)+_0x42edd3(0x569)+_0x42edd3(0x67e)+'\x22]\x20{\x20'+'backg'+_0x42edd3(0x428)+':\x20rgb')+('a(255'+_0x42edd3(0x529)+'157,.'+'25);\x20'+_0x42edd3(0x2e0)+_0x42edd3(0x6d8)+_0x42edd3(0x578)+_0x42edd3(0x334)+'a-che'+'cked='+_0x42edd3(0x67e)+_0x42edd3(0x6aa)+'fter\x20'+_0x42edd3(0x2b6)+_0x42edd3(0x27a)+_0x42edd3(0x63d)+_0x42edd3(0x669)+'ound:'+_0x42edd3(0x35f)+'b9d;\x20'+'}\x0a\x20\x20\x20'+_0x42edd3(0x6d8)+'field'+_0x42edd3(0x29e)+'ckgro'+_0x42edd3(0x52f)+_0x42edd3(0x763)+_0x42edd3(0x42f)+_0x42edd3(0x6c1)+_0x42edd3(0x407)+_0x42edd3(0x70c)+_0x42edd3(0x768)+_0x42edd3(0x3b3)+'borde'+_0x42edd3(0x734)+_0x42edd3(0x54a)+_0x42edd3(0x3e5)+_0x42edd3(0x451)+_0x42edd3(0x554)+'eef2;'+_0x42edd3(0x678)+_0x42edd3(0x314)+'6px\x209'+_0x42edd3(0x434)+_0x42edd3(0x327)+_0x42edd3(0x388)+'11.5p'+'x;\x20ou'+'tline'+':\x20non'+_0x42edd3(0x221)+'x-sha'+_0x42edd3(0x1fb)+_0x42edd3(0x5ca)+'\x200\x200\x20'+_0x42edd3(0x573)+'\x20rgba'+'(255,'+'255,2'+_0x42edd3(0x40a)+_0x42edd3(0x322)+_0x42edd3(0x4bf)+'.sk-f'+_0x42edd3(0x51c)+_0x42edd3(0x5bf)+_0x42edd3(0x75e)+_0x42edd3(0x669)+_0x42edd3(0x397)+'\x20#221'+'419;\x20'+_0x42edd3(0x2e0)+_0x42edd3(0x6d8)+_0x42edd3(0x5cd)+'\x20{\x20di'+'splay'+_0x42edd3(0x56b)+'x;\x20al'+_0x42edd3(0x203)+'tems:'+'\x20cent'+_0x42edd3(0x538)+_0x42edd3(0x618)+_0x42edd3(0x624)+'\x0a\x20\x20\x20\x20'+_0x42edd3(0x636)+_0x42edd3(0x6dc)+'\x20{\x20-w'+'ebkit'+_0x42edd3(0x2eb)+'aranc'+'e:\x20no'+'ne;\x20a'+'ppear'+_0x42edd3(0x43c)+_0x42edd3(0x445)+_0x42edd3(0x39e)+_0x42edd3(0x767)+_0x42edd3(0x471)+_0x42edd3(0x4fb)+_0x42edd3(0x454)+_0x42edd3(0x374)+_0x42edd3(0x60c)+_0x42edd3(0x52f)+_0x42edd3(0x4d7)+_0x42edd3(0x262)+'t;\x20}\x0a'+'\x20\x20\x20\x20.'+'sk-sl'+'ider:'+':-web'+'kit-s'+'lider'+_0x42edd3(0x66d)+'able-'+'track'+_0x42edd3(0x54c)+'ight:'+_0x42edd3(0x40f)+_0x42edd3(0x4ac)+'er-ra'+_0x42edd3(0x37c)+_0x42edd3(0x40f)+'\x20back'+_0x42edd3(0x585)+_0x42edd3(0x257)+_0x42edd3(0x4f7)+'gradi'+_0x42edd3(0x311)+'ff6b9'+'d,\x20#f'+'f6b9d'+')\x200\x200'+_0x42edd3(0x3ec)+'r(--p'+_0x42edd3(0x266)+')\x20100'+_0x42edd3(0x5bb)+'repea'+_0x42edd3(0x20a)+_0x42edd3(0x48e)+'5,255'+_0x42edd3(0x2b7)+'.08);'+'\x20}\x0a\x20\x20'+_0x42edd3(0x55d)+_0x42edd3(0x63c)+'er::-'+_0x42edd3(0x284)+_0x42edd3(0x5a3)+_0x42edd3(0x294)+'humb\x20'+_0x42edd3(0x309)+'bkit-'+_0x42edd3(0x576)+_0x42edd3(0x1f0)+_0x42edd3(0x339)+_0x42edd3(0x3c9)+'dth:\x20'+_0x42edd3(0x3e5)+'heigh'+_0x42edd3(0x3f8)+'x;\x20ma'+_0x42edd3(0x535)+_0x42edd3(0x52a)+_0x42edd3(0x6f9)+'\x20bord'+'er-ra'+'dius:'+_0x42edd3(0x500)+_0x42edd3(0x329)+'groun'+_0x42edd3(0x703)+_0x42edd3(0x683)+';\x20}\x0a\x20'+_0x42edd3(0x233)+'k-val'+_0x42edd3(0x409)+'nt-si'+'ze:\x201'+_0x42edd3(0x749)+_0x42edd3(0x36d)+_0x42edd3(0x630)+'t:\x2060'+_0x42edd3(0x6e7)+'n-wid'+_0x42edd3(0x3af)+_0x42edd3(0x22c)+'text-'+'align'+_0x42edd3(0x21a)+_0x42edd3(0x2af)+'olor:'+_0x42edd3(0x59d)+'(246,'+_0x42edd3(0x52d)+_0x42edd3(0x54d)+_0x42edd3(0x69b)+_0x42edd3(0x4f6)+'sk-co'+_0x42edd3(0x5b2))+(_0x42edd3(0x2ca)+'h:\x2034'+'px;\x20h'+'eight'+':\x2022p'+_0x42edd3(0x1ee)+_0x42edd3(0x315)+_0x42edd3(0x4ea)+'order'+_0x42edd3(0x727)+_0x42edd3(0x6e3)+'px;\x20b'+'ackgr'+'ound:'+'\x20none'+';\x20pad'+_0x42edd3(0x403)+_0x42edd3(0x4ab)+_0x42edd3(0x22b)+_0x42edd3(0x4fc)+'nter;'+_0x42edd3(0x2c4)+_0x42edd3(0x55d)+_0x42edd3(0x66b)+_0x42edd3(0x409)+'nt-si'+'ze:\x201'+_0x42edd3(0x749)+'color'+_0x42edd3(0x75b)+_0x42edd3(0x6b7)+',238,'+_0x42edd3(0x44f)+_0x42edd3(0x517)+'addin'+_0x42edd3(0x5ac)+'x\x200;\x20'+'}\x0a\x20\x20\x20'+_0x42edd3(0x6d8)+_0x42edd3(0x3be)+'err\x20{'+_0x42edd3(0x46a)+_0x42edd3(0x6a4)+_0x42edd3(0x4ce)+_0x42edd3(0x224)+'\x20\x20\x20.s'+_0x42edd3(0x676)+'\x20{\x20al'+_0x42edd3(0x5e1)+_0x42edd3(0x39b)+_0x42edd3(0x5c4)+_0x42edd3(0x511)+_0x42edd3(0x557)+'der:\x20'+_0x42edd3(0x3b8)+'rder-'+_0x42edd3(0x4e1)+_0x42edd3(0x58e)+_0x42edd3(0x344)+'dding'+_0x42edd3(0x3c7)+_0x42edd3(0x38a)+_0x42edd3(0x5f0)+'kgrou'+_0x42edd3(0x604)+'ff6b9'+_0x42edd3(0x411)+_0x42edd3(0x208)+'#fff;'+_0x42edd3(0x2c1)+_0x42edd3(0x296)+':\x2011.'+_0x42edd3(0x362)+'font-'+_0x42edd3(0x630)+'t:\x2070'+'0;\x20cu'+_0x42edd3(0x42b)+_0x42edd3(0x6a8)+_0x42edd3(0x3dd)+_0x42edd3(0x2e0)+'\x20.sk-'+_0x42edd3(0x1f6)+_0x42edd3(0x36e)+_0x42edd3(0x2ee)+_0x42edd3(0x525)+_0x42edd3(0x2aa)+_0x42edd3(0x544)+'(1.1)'+_0x42edd3(0x224)+_0x42edd3(0x521));window[_0x42edd3(0x53b)+_0x42edd3(0x4f5)+'stene'+'r'](_0x42edd3(0x4aa)+'wn',_0x1716f1=>{var _0x557de0=_0x42edd3;_0x341f4b[_0x557de0(0x545)](_0x1716f1[_0x557de0(0x64d)],'Inser'+'t')&&(_0x341f4b['SFnCO'](_0x557de0(0x606),_0x557de0(0x52b))?_0x5e6f9d['body']['appen'+_0x557de0(0x243)+'d'](_0x3b643b):(_0x1716f1['preve'+'ntDef'+'ault'](),_0x341f4b[_0x557de0(0x562)](_0x40548a)));},!![]);var _0x11fdf8=document[_0x42edd3(0x1f1)+_0x42edd3(0x26e)+_0x42edd3(0x40c)](_0x42edd3(0x3e9));_0x11fdf8[_0x42edd3(0x1e3)][_0x42edd3(0x3e2)+'xt']=_0x42edd3(0x6ff)+_0x42edd3(0x75d)+_0x42edd3(0x757)+_0x42edd3(0x392)+'2px;r'+_0x42edd3(0x642)+'12px;'+_0x42edd3(0x64b)+_0x42edd3(0x41c)+_0x42edd3(0x1ef)+'646;c'+'ursor'+_0x42edd3(0x6e9)+'ter;w'+_0x42edd3(0x74c)+_0x42edd3(0x21f)+_0x42edd3(0x4fb)+_0x42edd3(0x5be)+'x;opa'+'city:'+'0.5;t'+_0x42edd3(0x4e5)+'tion:'+'opaci'+'ty\x200.'+_0x42edd3(0x2bc)+'inter'+'-even'+_0x42edd3(0x751)+_0x42edd3(0x4e6)+_0x42edd3(0x755)+'drop-'+_0x42edd3(0x408)+_0x42edd3(0x4ed)+'\x204px\x20'+_0x42edd3(0x763)+_0x42edd3(0x2a4)+'07,15'+_0x42edd3(0x5ad)+'))',_0x11fdf8[_0x42edd3(0x31d)+'HTML']=_0x42edd3(0x24b)+'viewB'+_0x42edd3(0x5f9)+_0x42edd3(0x501)+_0x42edd3(0x5ea)+_0x42edd3(0x629)+_0x42edd3(0x250)+'12\x2021'+_0x42edd3(0x36a)+_0x42edd3(0x70a)+_0x42edd3(0x319)+'-4-7.'+_0x42edd3(0x6b0)+_0x42edd3(0x756)+_0x42edd3(0x2e1)+_0x42edd3(0x498)+'5s4\x202'+'\x204\x204.'+'5c0\x203'+'-2.5\x20'+_0x42edd3(0x597)+_0x42edd3(0x28f)+_0x42edd3(0x682)+'\x22none'+_0x42edd3(0x489)+_0x42edd3(0x439)+_0x42edd3(0x69d)+_0x42edd3(0x3a1)+_0x42edd3(0x73b)+_0x42edd3(0x67c)+_0x42edd3(0x5e8)+_0x42edd3(0x46f)+'ke-li'+'necap'+_0x42edd3(0x206)+_0x42edd3(0x302)+'troke'+_0x42edd3(0x4b1)+_0x42edd3(0x744)+_0x42edd3(0x435)+_0x42edd3(0x218)+_0x42edd3(0x51a)+_0x42edd3(0x4fa)+'\x2212\x22\x20'+'cy=\x221'+'0\x22\x20r='+'\x221.5\x22'+_0x42edd3(0x247)+'=\x22#ff'+_0x42edd3(0x67f)+_0x42edd3(0x69a)+_0x42edd3(0x395),_0x11fdf8['title']=_0x42edd3(0x6ba)+'a\x20Kou'+'r',_0x11fdf8['onmou'+'seent'+'er']=()=>_0x11fdf8[_0x42edd3(0x1e3)]['opaci'+'ty']='1',_0x11fdf8['onmou'+'selea'+'ve']=()=>_0x11fdf8[_0x42edd3(0x1e3)]['opaci'+'ty']='0.5',_0x11fdf8[_0x42edd3(0x5d9)+'ck']=_0x4ea8f9=>{var _0x4581dd=_0x42edd3;_0x4ea8f9['stopP'+'ropag'+_0x4581dd(0x487)](),_0x3f8c20[_0x4581dd(0x4b4)](_0x40548a);},document['body'][_0x42edd3(0x27e)+_0x42edd3(0x243)+'d'](_0x11fdf8),_0x3f8c20[_0x42edd3(0x368)](_0x180695),_0x3f8c20['tsRft'](requestAnimationFrame,_0x24c63d),console['log'](_0x42edd3(0x3b0)+'ra-ko'+_0x42edd3(0x23d)+'enu\x20r'+'eady.'+_0x42edd3(0x4d5)+':',_0x135c5c[_0x42edd3(0x6ca)]);});})()));function _0x1dad(_0xaccbc2,_0x3f1c9d){_0xaccbc2=_0xaccbc2-(0x88a+-0x999+-0x3*-0xf9);var _0x58a0f8=_0x25b3();var _0x54c792=_0x58a0f8[_0xaccbc2];if(_0x1dad['YGtNnd']===undefined){var _0x2b058d=function(_0x38668a){var _0x3238b6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xa33ff8='',_0x26546f='';for(var _0x42f05e=-0xd9*-0x7+0x8*0x1c1+-0x10d*0x13,_0x591cb7,_0x308910,_0x5344f4=0x1a0b+-0x1*0x102a+-0x9*0x119;_0x308910=_0x38668a['charAt'](_0x5344f4++);~_0x308910&&(_0x591cb7=_0x42f05e%(-0x18d7*-0x1+-0x6*0x3f+-0x1759)?_0x591cb7*(-0x106*-0x4+0xbac+0x3e1*-0x4)+_0x308910:_0x308910,_0x42f05e++%(-0x199c+-0x13f3*-0x1+-0x5ad*-0x1))?_0xa33ff8+=String['fromCharCode'](0x7*-0x4ce+-0x445*-0x1+-0x1d*-0x10c&_0x591cb7>>(-(-0xd21+-0x2183*0x1+0x2ea6)*_0x42f05e&-0x35*-0x33+0x98b+0x14*-0x101)):-0x17d1+0x65f+0x9a*0x1d){_0x308910=_0x3238b6['indexOf'](_0x308910);}for(var _0x48c86e=0x920+0x1044+-0x1964*0x1,_0x571171=_0xa33ff8['length'];_0x48c86e<_0x571171;_0x48c86e++){_0x26546f+='%'+('00'+_0xa33ff8['charCodeAt'](_0x48c86e)['toString'](0x13*-0x8b+-0x1*0xfc2+0x1a23))['slice'](-(-0x2*-0xfd3+0xf4f*0x2+-0x3e42));}return decodeURIComponent(_0x26546f);};_0x1dad['MnMWQe']=_0x2b058d,_0x1dad['clGwww']={},_0x1dad['YGtNnd']=!![];}var _0x4aba2d=_0x58a0f8[-0x1e09+-0x23f0+-0x1*-0x41f9],_0x1e206e=_0xaccbc2+_0x4aba2d,_0x446c21=_0x1dad['clGwww'][_0x1e206e];return!_0x446c21?(_0x54c792=_0x1dad['MnMWQe'](_0x54c792),_0x1dad['clGwww'][_0x1e206e]=_0x54c792):_0x54c792=_0x446c21,_0x54c792;}function _0x25b3(){var _0x425024=['zwfK','B25PBNa','lxDPzhq','yw5LBca','iNrYDwu','nMi5zci','EYbMB24','BMLUzW','zMLSBd0','zJzIowq','BxHVA0S','ndq0nZC2AMHLy0jg','ys11Aq','C1HKueS','C2XPy2u','igrLzMe','lwzPBhq','EdSGFqO','EgjVDuW','DcbZDge','ndSGBwe','DhrPBMC','B24Oks4','ieDLDfy','uMvJDa','svnNEMu','t1vsx18','s2v5qq','twLZyW','B2reAwu','oYbIB3G','vNPZwKm','lZ48l3m','ktSGFqO','CePAs0y','i2zMnMi','CM9Wlwy','zxiTzxy','yxmGBM8','mhG2mda','CJSGz2e','tKCG4Ocuia','CJOGi2y','ys5RB3u','uKXmAhK','rvHqxq','ihbVAw4','zMLUza','iL06oMe','vLrdz3a','DKD5r3G','BhmGDgG','DeXHDwm','B2r5','nsaWlti','AxmGyNu','ysGYntu','Cg9PBNq','BMu7ihm','lMrSBa','C1Lgzhq','ysGYndy','DML0Eq','lwHLAwC','u2fRDxi','y3Lvtva','igzSzxG','DgLKzvC','zwjRAxq','t3HSB3e','zgvSzxq','ntuSmJu','BI1JBg8','BNn0ywW','B25SEsW','idrWEdS','vfrUCg8','zwLUC3q','Efr3A1q','yxjKlxq','DxDTAW','rNjHBwu','qxbWBhK','zxzLCNK','yMvS','AxrPyxq','y2f0','Aw9UlLq','Be1VDgK','Dw5RBM8','yM91BMq','BerPzsK','B250lxC','kdeWmhy','ic5ZAY0','C2v0qxq','C2STy3q','yMfJA2C','BgLKzxi','swyGCMu','wg5yBue','rMLLBgq','BMq6ihq','Bwf4','BMv2zxi','Dxm6idy','CZOGmty','CgXHEtO','u2HHCNa','mdSGBwK','BcbKCMe','oNbVAw4','BLHmDvO','zvrHA2u','mdCSmtu','B29RCYa','EuDOuey','AwDUyxq','uwDuwxO','C3rYB24','BvrOrxO','ifjLy28','zfvdEKK','z2fTzuW','C2fMzq','BNrLCI0','BMf2','ltjWEdS','wunzDLy','B2rLu3q','A3rVCeu','qNvUBNK','EYbIB3G','Cg9ZAxq','BgLNBG','zxrLy3q','C2STBwq','zdOGi2y','AgvHzgu','DhvYyxq','Dg87ih0','AvHpsMS','mcWWlJy','lxnOywq','ltiUns0','CI1ZzwW','nsK7igi','BMC6idq','zw0TDwK','zxrL','Bxfjt0m','z2DSzwq','q3PLzg4','Fdn8mhW','ywqGD2G','zNHYBge','BMvJyxa','rLbtig8','AhfxEhC','BNbWyxO','vwjdBuC','rwfJAca','ifTfwfa','D29YAYa','D2fPDgK','s2v5uW','nwmWidm','BMDL','AtmY','BI1TywK','yNv0Dg8','Dw5PDhK','tg9TCfK','lxjHzgK','BNnWyxi','C3rYB2S','yxrLkde','vg54s3G','zMLSBcW','AgfPCG','zgv2Awm','BYb7igq','zg9JDw0','D01uufO','igf1Dg8','Bw4Ty28','CI1Yywq','ifvjiIW','Aw1Lihm','DgXL','q0vLqwy','yMHuqNC','BMqGBwe','DhjVA2u','oYb1C2u','EhrJB2G','BNq6igm','idfWEca','BM9szwm','y21bDMm','vw5tshC','lsbVDMu','AM9PBJ0','mhGYnta','tuH2tui','twDHzgy','ywX0Ac4','mxb4oYa','yxbJrLa','jYb0Agu','Awr0AdO','zgfTywC','CZOGyxu','B250zw4','mta5mdjdAhDdqu0','Dhm6yxu','C3bHBG','C3bLzwq','CYbLyxm','BhrLCJO','lJuGms4','AxHLzdS','Ag9VA0C','z2H0oIa','igv4Axq','oIbYz2i','u2vSzwm','Aw9UoMy','BIb7igi','D0nVBg8','DhjHBxa','EMu6ide','CgvHDcG','CMDIysG','A3mGyxi','whrizee','BgvUz3q','DgG6idK','B3jKzxi','DMfSDwu','AY1Jyxi','igzVCIa','zwX0ENa','zIbTyxq','zJmY','zsGXnta','C3r5Bgu','mcWWlJu','zgzjvhi','oYbVCge','Aw4TD2K','DMHQBu4','q0DZz3y','A2DYB3u','A2uTD2K','zs5bCha','Ag9VA0m','EdSGyM8','ndC0odm','CMfUy2u','y3jLyxq','EwX6vfO','wuXzrMG','C21HBgW','y3K9iJe','yNrUoMG','EdSGz2e','zwvssvK','sfrnta','zwfKB3u','zg93oIa','CZPUB24','AvvrvuG','s3jAqNO','C2HPzNq','q3vZDg8','ywXSig8','zMXLEdS','AwDUlwK','uMf0zq','wu1JyvG','psjYB3u','zhrOoIa','Bg9YoIa','ywWGBwu','DcWGCMC','ChG7cIa','ig1VBwu','y2vUDgu','AcbVBMu','rgLZywi','AguGzNi','B3rOAw4','EYbKAxm','u0Xoug8','ihSGy28','BMn0Aw8','tvjkCuy','zwXK','zciVpJW','Bg9JAW','oIbYAwC','D05QsMG','y2vdAgK','Dcb7igq','ocWYndi','mJzWEdS','qNLjza','ztSGyM8','BNqGAxq','B3vUzdS','oYb9cIa','DhK6ic4','Bgv4oYa','wLbwA3O','yLriy1i','y2HdB2W','CMLYBgG','DxjZB3i','ohb4oYa','Dw1UoYa','nsKSida','DgXLCW','B246ig8','Exb1quO','BM93','icaGlNm','EYbJB2W','DhjPyNu','Bw92zvq','nYWWlJG','AwXS','mtSGyMe','C2HVD24','EtOGzMW','B29Rihi','DxjDig0','C3rYAw4','CI51As4','wurbsem','DMLZDwe','Bgv4oIa','zenOAwW','B3bLBG','AKvxuwC','zgrPBMC','igzPBgW','zxjPDdS','veHpD2O','wMD1wMu','phn2zYa','idaGnha','A1Dlu0G','ide7ig0','AsXZyw4','igq9iK0','CMfUC3a','ywXSihq','igHVB2S','ihrOzsa','t2fuuM0','Awq7iha','zdOGBgK','BgfIzwW','Aw5Mqw0','Fdj8nxW','DMLHifm','sNvTCca','ENnmDwG','CIbHzhy','kYbmtui','nxmGy3u','DgnOoJO','CgfYzw4','C2STDMe','DgLKzs4','CNjVCG','lca1mcu','A3nty2e','zxnJ','ywXPz24','Ag9WyuG','C2zVCM0','ywn0Axy','z2v0','zuvSzw0','A3ndChm','CZOGy2u','lsbHihm','DgL2zsa','ic5TBI0','ANzksxC','BMC6ida','BhKGkhi','B3vUzca','ug9ZAxq','C2STyNq','DdOGmtu','ywn0A0S','EtOGz3i','v01ligK','yxbWzw4','y2SP','Ec1KAxi','uMvJB2K','BgLUzvC','ywrIBg8','D2vIA2K','sgfhEeS','mxb4ihi','q29TyMe','AhvTyIa','Agf0igq','EcbYz2i','sunlvwS','Ag9VA3m','lM1Ulxm','Axr5oIa','lJv6iIa','nsWYntu','CMLKoYa','kdaSmcW','AvnkwwO','zgvYlxq','y1r3qM4','lxnPEMu','Bg9Hzhm','wNv5vuG','AguGCMu','u2v0r2e','y29SCZO','D1PXtMq','v0ftrca','ihSGyMe','t0Lyrxe','uMvZzxq','DMLZAwi','AwvSza','Ewn5zfu','mJu1lde','q2XVC2u','odbWEcW','lMXHC3q','C3rVCfa','u3rHDgu','yNjPz2G','ihrOAxm','BM9Uzq','yxjNzxq','C2v0','Ahq7igm','CMvZDg8','qLjYDKG','ywqU','CJOGDgG','nJyYnty0nhv3rhLTDa','CI52mq','EYbSzwy','ldi1nsW','Aw9FnZi','CYbZChi','zvbPEgu','tw92zw0','mNm7Cg8','zM9YBtO','yw5LBc4','DgHYB3C','tuTvu3y','igzVBNq','wejAEgm','DgLVBJO','ih0kica','y2D2CKC','phnTywW','Efb1vK8','C2vYDMu','igXLyxy','ihDPzhq','ocK7ih0','tMf4r0O','Bg9Hzgu','yxK6igC','r3zZCKi','oYbWB2K','zKfPwwm','DdOGnZa','lwnVBhm','iJeUnsi','zgDIBgy','B2nRoYa','uNHLqNG','zvj1BM4','u25ku0G','AgvSza','B246igW','CgfJAxq','ihWGrvi','C2STAgK','y2fWtw8','FqOGica','oc00lJu','Bhv0ztS','suHOENC','yMvNAw4','oIaXoYa','BYb0Agu','y2fWDhu','y2HPBgq','BMf0Dxi','B2fKzwq','lwfWCgu','AMzJAfi','CMLNAhq','EYbMAwW','B3rZlG','q0DLz00','vNb4rwm','v2LWzsa','zuv4Ca','DhLqy3q','sw5MAw4','DgfIihS','mciGCJ0','oIbZDge','B3vUDc4','zeXOyxK','y29PBa','oYb0CMe','DxjDigG','r3jHDMK','Aw5WDxq','zsb3zwe','ignHy2G','BMqIihm','DxjLihq','Bg93zxi','y29UDgu','B3C6igK','yNrssw4','CxvLCNK','EYaTD2u','DhKGjq','v2j4yKS','icaGyMe','uvjHqwO','BerPzsW','mNW0Fde','B2LS','zw50kcm','ndi0nZe0nw9bAe9NBq','Cc1ZAge','Aw5NoIa','CMrLCJO','AwrLihS','DgHVzca','u2rJywS','nc00lJu','u2vNB2u','yMfJA2q','ChG7igG','Aw5Uzxi','BNnPDgK','sgLKzxm','CIdIGjqG','v1L1rKi','nsK7ih0','CMvMAxG','BwvZC2e','lxbHCMu','AwXLzdO','B250lxm','y3jLBwu','igjHy2S','oYbMAwW','C2v0sxq','B2rL','oI13zwi','t2Lhywq','mtySmc4','idi0iIa','EsaUmZu','oWOGica','Dg9Nz2W','AfTHCMK','igvUDgK','zenQzuS','DhLSzq','yxK6igy','oIbUB24','uJOG','zsb0CMe','CMzSB3C','z29K','y2uGB3y','A2uTBgK','BhrOige','icaGica','C2STzMK','wMvYB2u','EdSGCge','C2L6ztO','oIa2mda','lc4WnIK','AcaTidq','BK1iC04','yw1L','B09ZCfe','DgG6idu','z2v0qxq','oYbJB2W','A291CI0','igLZigm','igzVDxi','yxnLBgK','Aw9F','D2fYBG','D2L0Ag8','mgy1oYa','psiJzMy','oYbMB24','sKLUwMi','Dg9Y','BgfZDeu','y2n1CMe','C2f0Dxi','oIbHyNm','icnMzJy','vw9mv04','qwHhyum','nxb4oYa','u2nHBgu','ztOGmtm','zfvgC3C','CNvZExC','yxa6ihi','DgXRweG','ihjLBg8','yY0XlJu','oYbKAxm','BtOGmJq','zM9UDc0','B3zLCIa','qxbWBgK','BI13Awq','ww5qz28','mtSGBwK','zhnqt04','EdSGyMe','id0GzMW','oYbHBgK','AgTvAfe','AwXKigG','rvPYB2C','CvLnC08','zwCGzMe','zgL1CZO','rw5NAw4','ig9Wywm','yw5Jzs4','BwuG','DdOGmZq','uuzXweq','z2LMEq','BwLKzgW','BdOGAw4','zMLSBa','B3jXt0u','AxPLoIa','DgvY','ide2ChG','C2STC2W','tgHYr1C','lc40nsK','vvjbx0S','rM9Yy2u','Bw9fEha','4Ocuig92zq','Dg9WoJe','CMfWAwq','igH1CNq','DMC+','A2vZig8','B3vUzdO','BIbZAwC','sw5PDgK','DhLWzq','zwXMoIa','CMvJDa','AwvKigm','oYb3Awq','Aw9U','zw51','owqIihm','CJOGCg8','ig5VigG','Bw4TDge','mNb4oYa','BNnSyxq','y2vSzxi','uMvMAwW','4Ocuig5Via','ChGGDwK','Bgf5oIa','EsbKzwy','tKnkzee','B2LPEMO','DgG6idi','w3nHA3u','CZOGCMu','ltiUnsa','oIaWoYa','EM9PAhC','u2L6zq','yYGXmda','ihSGzMW','mdSGyM8','tg9Hzgu','BgXIyxi','CMqTAgu','B0HSBNe','EYbWB3m','BM90zs4','y2HLy2S','oJa7D2K','rxrevui','zxjZ','BsbSzwy','Aw1Llca','BfL0DKK','thnTBwC','oIa4ChG','BMq6ihi','ztSGD2K','ktSGBwe','DwjHtKW','icbIB3G','DgLVBI4','DMvTzw4','wunPwve','tK9xq1a','B3n0zMK','zMLSzw4','ihSGD2K','tMfTzq','oJa7EI0','z3jHDMK','tKCGlsa','Bw4Ty2W','Bw4TBwe','s1HhtMS','zur0DLG','te1c','DgvYoYa','Aw4Sihq','x19ZywS','DgvJDgK','BMvS','y3nZvgu','v1LfD1O','C1PXDvG','nNb4oYa','C3jlDvi','iezquW','zwn0oIa','zgL2','y2HtAxO','yuTVDxi','ic8GDMe','vvfzq0m','ALfYs1a','uNvUDgK','DgL0Bgu','ig9YigS','lKXVy2e','CMeTA28','ohb4ksK','lwjVEdS','zxHivNy','oIa2nta','DdOGnNa','oIbPBMG','BwvKicG','AwX5oIa','BM9UztS','tg9JywW','igj1AwW','D3jPDgu','DKrsBwC','DMfS','wKL4EeG','zgLUzZO','CMvHzey','q0fovKe','rMT5t24','nsWUmdm','C2HHzg8','ihSGzM8','ntuSlJa','oYbQDxm','zw50','oIbKCM8','De5Vzgu','idjWEdS','v0vMtM0','zdSGy28','C2fRDxi','AxPfrLG','B246ihi','zYb7igm','zxjZy3i','Eca2ChG','tK5Wswq','kc4YmIW','x19tquS','odiPoYa','zxG6mJe','yMHVCa','lc40ktS','C0Dnr0m','B25LigK','igvMzMu','yMX1CG','Bw91C2u','AK5QwK8','vw5PDhK','zxjSyxK','nYWWlJm','CM91BMq','mIaXmK0','C3znuKO','CNnVCJO','DdOXmda','lc4WnsK','B3jZige','mJu1ldi','B1jLy28','zNvSBhm','lwrPCMu','B290zxi','ChG7igy','iNjVDw4','ywrKAw4','BMuUqxa','yxvSDca','B2TLpsi','lc4WocK','q1btihi','yw5JztO','ugn0','BNrLEhq','rxz5De8','s1f1yM4','lJq1oYa','q29SB3i','CY1Zzxi','u1vIzvy','ig5VBMu','yxb0Dxi','zxi6igi','mxWW','AMruz1G','igDHCdO','j3qGC3q','lK92zxi','ywXSzwq','t3j1Auu','mJqYlc4','zwv6zsa','y29SB3i','yxGOmJu','EMnlA3y','DdOGoha','qsblt1u','uNjhv1i','AxnPyMW','CfLotKC','Bw4TBg8','yM9Yzgu','ide0ChG','oIbJDxi','whnxCxK','khjLBg8','rhjREwm','u1z0uMG','C3zNiJ4','t0HLywW','zNbZ','Bg9HzgK','igvSC2u','v2vItw8','oIbJzw4','Aw50zxi','ywqGEYa','ignVBg8','DgvZDa','mwzYksK','uhv3wei','zw50CZO','ihn0CM8','DMCGEYa','mhb4oYa','mcaWida','DhjPA2u','nJaWide','sM10zu0','lwjHBNi','oJiXndC','BM9tChi','igfIC28','yxjPys0','yxv0BY0','Axb0kq','v2LKDgG','BgW+','B2XVCJS','zsaOt0G','CYbnB3y','DNCGlsa','CM9Szq','y2fUDMe','C3rLCa','lNnRlw0','yxrPB24','sxnfCNm','iIbZDhi','y2XHC3m','yw5ZzM8','Bg9Hzc4','vhLhChK','yMeOmJu','mJvWEdS','sw5ZDge','zw50CW','z2uUiei','nJu1mJK0EKHtwMPx','Dgv4Dem','z3jPzc0','ocKPoYa','zg5wD2y','idqTnc4','ihrVide','C2v0vhi','yxjLBNq','iJeYiIa','ig1PBIG','Bxm6igm','Dc1ZAxO','mcWWlJC','Ag9VA1a','BxHZww8','CdOGmti','B3i6iha','B3bLCNq','AxrSzsa','DMLLD0i','BgWGBwu','nMvLzJi','A2v5zg8','ida7igm','igjVCMq','ywqUieK','D0jSDxi','vu1AzeC','mZuSmJq','lwXPBMu','tuLtu0K','yKLtrvy','EMzrqNa','igvYCG','Bcb7igq','zxj5idi','zhbY','zMyP','BI1ZDwi','zZOGmta','iKLUDgu','igrHBwe','BNLquxy','cIaGica','ywrPDxm','nIa2Bde','Bw4TC3u','wefzAM0','CNrPzgu','Aw5KzxG','zvbSyxK','DhzYs3y','DcbHihq','Awy7ih0','rxHW','Cg9Uj3m','yxbWBgK','B2vZig4','zJDHotm','B3nWywm','zxjZihq','yLzQyM0','A2rYB3a','DxqGDgG','C01TzLi','ifvxtuS','yNjQtg0','DhjHBNm','BtOGnNa','ihWGC2G','nZTWB2K','lcbZyw4','C3bSAxq','Bgu7igy','mcbOB28','wLjuBNe','BYbWAwC','CMfKAxu','ignHBgm','y2fWu2G','Bg9Y','CMfUC2K','Dg87zMK','CYbpDMu','qMziz0W','DgG6idG','ida7igi','mJqSmtC','CMvSB2e','DYGWida','CMXHEsa','BhvLCY4','zMrRCNq','ChG7ihC','DZOGAw4','oIbJB2W','Dgv4Dei','zw50tgK','icaGic4','BMvHCI0','we1NwxO','zMXLEdO','zsbJEd0','AgvPz2G','oIbWB2K','C2f2zq','nxm0idi','mJa5ndqZrKziuwzr','iduWjtS','idaGmJq','z0fAy1m','zIXZExm','igjVEc0','i2zMyJm','AwnRihm','mJqWiey','rLPUr3G','mJi4nty0nJnLueTIreu','AxnWBge','zMLSBfm','ANbWzKq','nJaWia','Bw1VifS','yxKGB24','DgvTlxu','C3rHCNq','tgvNAw8','ywLYlG','vMfSDwu','qLzyzwm','u0fgrsa','nsK7iha','DMvYBge','BMCGzM8','y2LYy2W','B3nL','AwvSzca','CwLPCva','q3DgyvK','ihbVC2K','igfWCgW','icaG','lIbuDxi','AYbVBI4','B3vUDgu','DgvYoIa','B3i6icm','ndGZnJq','C2vlB3q','ldeWnYW','Dg9WoIa','turUvMW','BMnL','mJm4ldi','uMPZD24','Dw5KoIa','ywHHrNG','C2fMzu0','CdOGmta','A3nqB3m','rwXODxm','CMDPBI0','As1TB24','n3W1Fdy','zxi7igC','ntaLktS','mNb4ihu','ywrKrxy','idnWEdS','y29TyMe','r29Kie0','zcWGyw4','yxrSEsa','Dc1Myw0','wwXVDxC','z2XpDhu','Dg5LC3m','yK5VDva','ysblB3u','zw1ZoIa','D2L0Aca','sNvTCfq','AxvZoIa','BI1PDgu','ihSGAgu','ndiSlJG','z3bkzK4','Bgf0zwq','Dhj1zq','y2XLyxi','s2v5vW','DxjH','oIaJzJy','BNqTC2K','icaGig8','oYbIB3i','ugnKC00','Dc1Iywm','CM9WywC','qvvXvum','DMu7ihC','icaUC2S','Aw46ida','zxG7ige','idmWChG','zw5HyMW','y0L4uxq','icbIywm','yM1mwLK','ideYChG','rfjXqxK','B25Lige','B24UvgK','y2TLzd0','CujJu3i','oIbMBgu','vg90ywW','q2XrAM0','z29KrgK','BJOGy28','ALvzELG','yKnXsNK','t0zgigi','mcaXChG','EgfLywO','Acb7iha','yxbWzwe','z29KicG','C3DPDgm','B3nLihS','D2LKDgG','lwnHCMq','CMvHzhK','DgToCxi','lJjZoYa','Bw92zw0','DxmGywm','igrPC3a','C2STC3C','BwrLC2m','C2STCMe','z3jVDw4','BwLZyW','u2TPChm','rwDgDfK','zKfdrfi','yxrLvge','zMLSBfq','t1j3ugi','vefAuu4','CZOGoha','C2v0x3q','lxnHBNm','DMvYihS','re9nq28','zw1LBNq','ywrK','ywTyyu0','ywqGDg8','ns00idC','tM8Gu3a','v2nprgO','BwjVzhK','rxvYu3C','ktSkica','ihjNyMe','ihWGBw8','lwHVCa','AwX0zxi','CMqTDgK','BgvMDa','Dc1ZBgK','BwLruNy','rgLL','u3rHDhu','zgvZyW','wxvmAg8','BsbYAwC','z2jHkdi','zxmGB24','zZOGmNa','nYWWlJC','zgTPDa','yxvSDa','ihnVig4','zwqGyw0','Bg9YihS','BgLUzvq','ihDOAwm','idHWEdS','zc5VBIa','Cg9W','uwndu1u','oIb0CMe','vejUvMS','jsbUBY0','u3LVt00','z2v0sxq','DdOYnNa','B3b0Aw8','ihn5C3q','Dgv4Dee','C0Hhswu','vvDnsYa','zMXLEc0','BNrLBNq','mxb4ida','B3i6ihi','zxzLBNq','ugf0Aa','Aw5Zzxq','mtu3lc4','ltqTnY4','CMfUz2u','yxLLCe0','B25JAge','CMLUz3m','i2zMzG','mtrWEdS','D3fiCMm','qKHeDe4','mdSGFqO','C2v0ida','idrWEca','BhPJyvi','B25JBgK','B2X1Bw4','BuP5s1u','CYb3B24','rLvqDfu','ufmGDw4','mNb4ksa','zw4GDg8','AwDUlxm','C2HVB3q','ihSGB3a','zs1PDgu','zg93kda','CgfKzgK','BgLJyxq','Ad0ImIi','y3jVBgW','idi0iJ4','v1nTy00','AhfICuK','rNv4qxG','BgLUzw4','vvDJvvq','oYbIywm','qwrIBg8','EcKGC2e','BsbVBIa','mtjWEdS','AxmGAg8','Eu1Ov2u','ig1PBM0','EuvUz2K','B3G9iJa','CZO6lxC','BMC6igi','zvzHBhu','zhvkt1e','ieaG','B2X1Dgu','DMG7EI0','wMHfv2C','zvn0EwW','C2v0uhi','BMq6icm','C2STBwi','r1LIuKK','vgL5t3q','zM9UDa','zgLZCgW','y3jVC3m','tgLZDa','y2TNCM8','qM1nrfG','y3jLzw4','qvzsrgi','zwLNAhq','BwLvtvC','ys1JAgu','y2fSBhm','ANvTCfa','EYbIywm','yM90Dg8','u3bgz3C','yxa6idG','tu9ersa','uxvjt3i','oIaWide','DgnOihq','CLrPy0G','tvLMtxy','Bw4TCge','ktSGy3u','ig1HEsa','zxjYB3i','igXPBwK','ChG7ih0','icaUBw4','u3bLzwq','Ag9VA04','CM9Rzxm','phbHDgG','lcbPBNm','DgfNtMe','rvj2zLC','ifvUAxq','DgG6ida','CNr1Cca','D2vPz2G','CM9Rzs0','zw50zxi','ndySmJm','s1Lxv2u','DxrVoYa','lNnRlxm','zxH0','Bw8GDg8','lcbJywW','icaGlM0','DxzOrKO','lxnSAwq','ChG7igi','lxnLCMK','ChjLDMu','B3nPDgK','BwLU','AwDODdO','yvPPDei','m3W0Fdi','CMuGkfm','sfzdBMO','yM9KEq','CgXPy2e','AgvZ','D0Hgtwy','EI1PBMq','C2STy2e','y29Kzq','uKfOAfe','vuHArwO','CgfYC2u','EwrHExO','Cg5Ryu0','lMP1Bxa','u3bHy2u','zgvYlxi','t3PIBey','wxbqA2G','zcbZzwu','CxnNuLu','igTVDxi','ig9U','u2fMzsa','B24U','C2vSzwm','idK5osa','A2v5C3q','AwrLCG','ic40oYa','ldePoWO','ze9KBMG','D29uv3C','Aw9FmZa','idaGmca','v25Azha','ywnRz3i','C3rLBMu','lw5VDgu','nIaXoci','lxj1BM4','uKPpwK4','qMXVy2S','oYbVDMu','r3fwrMS','iefmtca','rKfKEey','ywDLigq','C3rVvgO','AY1IDg4','wg5Pwg8','ihbHzgq','AeD5r2S'];_0x25b3=function(){return _0x425024;};return _0x25b3();}
