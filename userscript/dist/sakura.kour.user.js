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
function _0x496d(_0x1236cf,_0x2baf69){_0x1236cf=_0x1236cf-(0x202a+-0xb8f*0x3+0x4*0xc9);var _0x5314e3=_0x2505();var _0x3c5bbc=_0x5314e3[_0x1236cf];if(_0x496d['bSJfNC']===undefined){var _0x4eb683=function(_0x440032){var _0x58d4db='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x23d81e='',_0x36688d='';for(var _0x20039e=0x1b1a+0xe4d+0xdcd*-0x3,_0x41a5ec,_0x4ab20a,_0x2beb51=0x772+-0x536+0xb*-0x34;_0x4ab20a=_0x440032['charAt'](_0x2beb51++);~_0x4ab20a&&(_0x41a5ec=_0x20039e%(-0x550+0x29*0x7f+-0x3f*0x3d)?_0x41a5ec*(-0x16*-0x1a2+0x89d+0x2c49*-0x1)+_0x4ab20a:_0x4ab20a,_0x20039e++%(-0x1b8d+-0x1*-0x25d5+-0x9*0x124))?_0x23d81e+=String['fromCharCode'](-0x110f+0x2119+-0xf0b*0x1&_0x41a5ec>>(-(-0x12c+0x1*0x1f42+-0x1e14)*_0x20039e&-0xf2e+0xcf6+0x52*0x7)):0x1dd5*-0x1+0xc59+0x117c){_0x4ab20a=_0x58d4db['indexOf'](_0x4ab20a);}for(var _0xd41c29=-0x1193+0xb33+0x660,_0x44f34a=_0x23d81e['length'];_0xd41c29<_0x44f34a;_0xd41c29++){_0x36688d+='%'+('00'+_0x23d81e['charCodeAt'](_0xd41c29)['toString'](0x4ca+0x9a*-0x7+0x2c*-0x3))['slice'](-(-0x2*-0x7ad+-0x9d0+-0x3*0x1d8));}return decodeURIComponent(_0x36688d);};_0x496d['vQMMii']=_0x4eb683,_0x496d['CykBeP']={},_0x496d['bSJfNC']=!![];}var _0x2229bb=_0x5314e3[0x6*-0x164+-0x1*-0x10c1+-0x869],_0x4deafc=_0x1236cf+_0x2229bb,_0x28a3d5=_0x496d['CykBeP'][_0x4deafc];return!_0x28a3d5?(_0x3c5bbc=_0x496d['vQMMii'](_0x3c5bbc),_0x496d['CykBeP'][_0x4deafc]=_0x3c5bbc):_0x3c5bbc=_0x28a3d5,_0x3c5bbc;}(function(_0x32089a,_0x47c456){var _0x54f3c1=_0x496d,_0x41bc72=_0x32089a();while(!![]){try{var _0x4308da=-parseInt(_0x54f3c1(0x39d))/(0x3*-0x883+-0x1*0x20ff+0xf*0x3e7)+-parseInt(_0x54f3c1(0x570))/(0x2673+0x47f*-0x1+-0x21f2)*(parseInt(_0x54f3c1(0x274))/(-0x27c*-0x5+0x145c+-0x20c5*0x1))+-parseInt(_0x54f3c1(0x580))/(-0xc*0xa4+-0xbce+-0xe3*-0x16)+parseInt(_0x54f3c1(0x407))/(0x21fb*-0x1+-0xce0+0x10*0x2ee)*(-parseInt(_0x54f3c1(0x18a))/(-0x591+-0xf*0xc2+0x3*0x5a7))+parseInt(_0x54f3c1(0x3d0))/(-0xe80+0xb44+0x343)*(parseInt(_0x54f3c1(0x253))/(-0x439+0x35*-0x1e+-0x2f*-0x39))+-parseInt(_0x54f3c1(0x331))/(0x2681+0x1993+-0xccf*0x5)*(-parseInt(_0x54f3c1(0x12e))/(-0xd*-0x22f+0x2*0x19c+-0x1f91*0x1))+-parseInt(_0x54f3c1(0x113))/(0x3*-0x1d5+-0xd9*-0x3+0x2ff)*(parseInt(_0x54f3c1(0x4de))/(0x65a+0x12*0x169+-0x34*0x9c));if(_0x4308da===_0x47c456)break;else _0x41bc72['push'](_0x41bc72['shift']());}catch(_0x5694bd){_0x41bc72['push'](_0x41bc72['shift']());}}}(_0x2505,-0x15008+0x1610ac+-0x61aac),((()=>{'use strict';var _0x47e283=_0x496d,_0x57a957={'pzJAz':_0x47e283(0x3e3)+'wn','nBqNk':function(_0xc974ff,_0x41397c){return _0xc974ff+_0x41397c;},'HWERP':function(_0x1ce962,_0x2962a5){return _0x1ce962>_0x2962a5;},'osxgj':'movem'+_0x47e283(0x5e1),'vTjrT':'UWMK\x20'+_0x47e283(0x1cd)+'\x20','DKjdy':_0x47e283(0x108)+_0x47e283(0x5a7)+'\x20','GOCHh':'\x20|\x20ER'+_0x47e283(0x61e),'CbQQx':function(_0x3afdc8,_0x2e65f6){return _0x3afdc8!==_0x2e65f6;},'EeoUF':function(_0x586784,_0x16e78a){return _0x586784!==_0x16e78a;},'JSsqp':_0x47e283(0x19a),'PeSSq':function(_0xca1f72,_0x46d8f7){return _0xca1f72===_0x46d8f7;},'vZPpo':'PExYB','PdpbI':_0x47e283(0x62c),'biXPc':_0x47e283(0x181)+'a.kou'+_0x47e283(0xd5)+'v1','Pgidh':'SUcZR','luUWL':function(_0x1a5ea5,_0xba7c75,_0x125170,_0x17f2e9){return _0x1a5ea5(_0xba7c75,_0x125170,_0x17f2e9);},'exTOh':_0x47e283(0x48f)+_0x47e283(0x468)+_0x47e283(0x315)+_0x47e283(0x1c7),'ZvgXt':function(_0x52e9ca,_0x27a46e,_0x24b51b){return _0x52e9ca(_0x27a46e,_0x24b51b);},'TzzVU':_0x47e283(0x212)+_0x47e283(0x1bd)+_0x47e283(0xf9)+'e…','BlCWh':'rgba('+_0x47e283(0x457)+_0x47e283(0x419)+'0,0.6'+')','MhVIK':'top','aUPMg':function(_0x1dd671){return _0x1dd671();},'YpWvF':_0x47e283(0x3e6)+_0x47e283(0xfd)+'-seri'+_0x47e283(0x2b3)+_0x47e283(0x466)+_0x47e283(0x164)+_0x47e283(0x118)+'if','BYmeB':_0x47e283(0x498),'ArSfQ':'rgba('+_0x47e283(0x3a5)+'35,24'+'0,0.5'+'5)','qMklA':function(_0x2acb09,_0x55a8b5){return _0x2acb09*_0x55a8b5;},'TTDux':_0x47e283(0x161),'lnaGh':_0x47e283(0x56f),'qDmrP':function(_0x39e187,_0x1565e2,_0x55c991,_0xf83589,_0x17ad4c){return _0x39e187(_0x1565e2,_0x55c991,_0xf83589,_0x17ad4c);},'DzRdC':function(_0x1909f2,_0x24a7d8,_0x2405a2,_0x220e39,_0x3ba97b){return _0x1909f2(_0x24a7d8,_0x2405a2,_0x220e39,_0x3ba97b);},'dsjTz':function(_0x23ffd2,_0x207d95){return _0x23ffd2-_0x207d95;},'qMRfv':function(_0x1f3fa5,_0xedc5de){return _0x1f3fa5===_0xedc5de;},'CPJMn':'RMcgi','BMdyr':_0x47e283(0x42e)+_0x47e283(0x13c)+_0x47e283(0x3b5)+_0x47e283(0x2bc),'PyGOq':_0x47e283(0x58a)+_0x47e283(0x182)+'keHea'+_0x47e283(0x55c),'TSOxb':_0x47e283(0xa4)+'Die','RZPax':_0x47e283(0x235),'dZDzo':_0x47e283(0x5c2)+_0x47e283(0x49a)+'forms'+_0x47e283(0x43c)+'tide.'+'Recoi'+'lMoti'+'on','lOLUh':_0x47e283(0x137),'sqZlV':function(_0x184fbe,_0x31ab2d,_0x5f268c,_0x246457,_0x11ee9b,_0x180e08,_0x2db51f,_0x13f716){return _0x184fbe(_0x31ab2d,_0x5f268c,_0x246457,_0x11ee9b,_0x180e08,_0x2db51f,_0x13f716);},'VnbGl':_0x47e283(0x5ea)+'ter','YKfss':_0x47e283(0x15b)+_0x47e283(0x587)+'ning','WFziK':'small','fpkiZ':function(_0x3d771d,_0x15e8eb){return _0x3d771d(_0x15e8eb);},'ZzaJe':_0x47e283(0xc8),'ReyMY':_0x47e283(0x33a),'ghZTL':_0x47e283(0x12f),'WVHcb':'Jmnqx','Rkkcy':_0x47e283(0x100),'xMbDo':function(_0x2ebf35,_0x215e95,_0x234b43,_0xf77d28,_0x263dde){return _0x2ebf35(_0x215e95,_0x234b43,_0xf77d28,_0x263dde);},'HUfUA':function(_0x3f52de,_0x247e97){return _0x3f52de===_0x247e97;},'lcJSz':_0x47e283(0x38f),'GwynY':function(_0x1b5808,_0x1ca45e){return _0x1b5808!==_0x1ca45e;},'opELp':_0x47e283(0x271),'zWzFW':function(_0x516727,_0x1b5d9c){return _0x516727===_0x1b5d9c;},'fHlks':_0x47e283(0x63b)+_0x47e283(0x1ca)+'e','kmWkH':'compl'+_0x47e283(0x255),'vAviY':_0x47e283(0xef)+_0x47e283(0xd6),'dtSRy':function(_0x36b1be,_0x16e923){return _0x36b1be===_0x16e923;},'Lefem':_0x47e283(0x2a3),'IHoPi':'mouse','reKvm':function(_0xcfd7e1,_0x10b907){return _0xcfd7e1!==_0x10b907;},'xRIuR':_0x47e283(0x63d)+_0x47e283(0x337),'bTlQJ':_0x47e283(0x63d)+'up','bWnRf':'blur','ocgHs':function(_0x40b215,_0x537dab){return _0x40b215===_0x537dab;},'QUaJP':'CANVA'+'S','xAPSv':function(_0x725ba8,_0x38e7b5){return _0x725ba8!==_0x38e7b5;},'vfgRo':'cente'+'r','VnMVe':function(_0x1fb34b,_0x250cd4){return _0x1fb34b/_0x250cd4;},'SZWuw':function(_0x592f04,_0x15489c){return _0x592f04*_0x15489c;},'PBRwP':function(_0x47f6bf,_0x4c5ccc){return _0x47f6bf+_0x4c5ccc;},'MANyx':_0x47e283(0x41d),'FYPke':function(_0x53374e,_0xb4d6b1,_0x50692c,_0x236981,_0x5d9d9f,_0x2578a0,_0x9b7f93){return _0x53374e(_0xb4d6b1,_0x50692c,_0x236981,_0x5d9d9f,_0x2578a0,_0x9b7f93);},'lHgVz':function(_0x2f3bfe,_0x1e2df1){return _0x2f3bfe+_0x1e2df1;},'mhvrL':function(_0x5ddba5,_0x47cfe6){return _0x5ddba5+_0x47cfe6;},'PmMqc':'LMB','IFKay':_0x47e283(0x63d)+'1','XXexl':'\x20CPS','Gcsmw':function(_0x4affc1,_0x508c70){return _0x4affc1+_0x508c70;},'QIGLz':_0x47e283(0x2f6),'ZazdM':function(_0xdc4a70,_0x4c42ab){return _0xdc4a70*_0x4c42ab;},'NMQft':function(_0x5d1ba8,_0x1b2522){return _0x5d1ba8-_0x1b2522;},'DGOFX':function(_0x537557,_0x4f7fbd){return _0x537557+_0x4f7fbd;},'ICmIO':'selec'+'t','bJSTJ':'sk-fi'+'eld','gsIKq':_0x47e283(0x344),'rTCvk':_0x47e283(0x5a8),'iZixM':'sk-ct'+'l','fIPyQ':_0x47e283(0x43a)+'rd-he'+'ad','jMtBU':'sk-mb'+_0x47e283(0x52b),'Qmzis':_0x47e283(0x3af),'mpnbR':_0x47e283(0x134),'giftA':function(_0x546e23,_0x37ef91){return _0x546e23===_0x37ef91;},'juMdp':function(_0xff205,_0x5e0e5f){return _0xff205||_0x5e0e5f;},'bBTIK':function(_0x4b7234){return _0x4b7234();},'hHcPS':function(_0x31a7a4,_0x490d05,_0x4d3639,_0x2917cf,_0x593bda){return _0x31a7a4(_0x490d05,_0x4d3639,_0x2917cf,_0x593bda);},'cGTPy':_0x47e283(0x321),'bZBEi':'sk-sl'+_0x47e283(0x51a),'RrKIS':'span','ieWWp':_0x47e283(0x10d)+'l','YegoK':_0x47e283(0x606),'epHyx':'3|0|1'+'|4|2|'+'5','JRqyG':_0x47e283(0x13d)+_0x47e283(0x4b5),'OfxEl':'MCjeX','xMOjc':_0x47e283(0x489)+_0x47e283(0x443)+'Frame'+'Rate','Nmvnv':function(_0x44fe98,_0x2bf548){return _0x44fe98+_0x2bf548;},'QwqFi':function(_0x17f348,_0x38c9e8,_0x29af9e){return _0x17f348(_0x38c9e8,_0x29af9e);},'xfkuR':_0x47e283(0x5f1),'TRfDX':'KpFKd','MUieF':function(_0x28de58){return _0x28de58();},'zpPDe':_0x47e283(0x484),'jwWeP':_0x47e283(0x382)+_0x47e283(0x3bb)+_0x47e283(0x55e)+_0x47e283(0x441),'DItQS':function(_0x302c41,_0x31108d){return _0x302c41(_0x31108d);},'UWCjI':_0x47e283(0x185)+'\x20%','NoIhe':'Jump\x20'+'/\x20Gra'+_0x47e283(0x458),'cWDzF':'Scale'+_0x47e283(0xee)+'ement'+_0x47e283(0x1e0)+'Force'+'\x20and\x20'+_0x47e283(0x48a)+_0x47e283(0x58f)+_0x47e283(0x379)+_0x47e283(0x29f),'OZZJP':_0x47e283(0x2e1)+'ty\x20%','OvPuB':_0x47e283(0x635)+'\x20=\x20fl'+_0x47e283(0x162),'ClCmf':function(_0x5afb73,_0x5703bd,_0x4d518d,_0x13d49b){return _0x5afb73(_0x5703bd,_0x4d518d,_0x13d49b);},'cdEJk':function(_0x520e5b,_0x278965,_0x3cd284,_0x9cdecb,_0x1a989a,_0x22ef72){return _0x520e5b(_0x278965,_0x3cd284,_0x9cdecb,_0x1a989a,_0x22ef72);},'FdqIQ':_0x47e283(0xb9)+_0x47e283(0x27a)+_0x47e283(0x4bc)+_0x47e283(0x548)+_0x47e283(0x648),'oElRt':'no\x20ch'+_0x47e283(0xd9)+_0x47e283(0x44d)+_0x47e283(0x384)+'ut\x20th'+'is','tZbvn':'.sk-m'+_0x47e283(0x546),'NGeGo':function(_0x470f00,_0x57fdeb){return _0x470f00+_0x57fdeb;},'ugMzC':function(_0x27919e,_0x32b3b3){return _0x27919e+_0x32b3b3;},'UrhHp':'loadi'+'ng','ygzPl':'mn-pa'+_0x47e283(0x650),'RbQcs':_0x47e283(0x144),'vDmCB':_0x47e283(0x4e1)+'in','XzTfB':'mn-to'+'p','xmISz':_0x47e283(0x589)+'tles','LVTQr':_0x47e283(0xf2)+_0x47e283(0x24c),'Arkda':_0x47e283(0x11e)+'t','qYCuU':function(_0x155992){return _0x155992();},'NUfQW':'posit'+_0x47e283(0x2c2)+'ixed;'+_0x47e283(0x44b)+':0;wi'+_0x47e283(0x618)+_0x47e283(0x1aa)+_0x47e283(0x55b)+_0x47e283(0xb4)+_0x47e283(0x352)+_0x47e283(0x5fa)+_0x47e283(0x270)+_0x47e283(0x623)+_0x47e283(0x4b8)+'nter-'+_0x47e283(0x1dc)+_0x47e283(0x1b1)+'e','OXOMk':'sakur'+_0x47e283(0x544),'wpaUZ':_0x47e283(0x24b)+'ion:f'+'ixed;'+'inset'+':0;z-'+'index'+_0x47e283(0x270)+'48364'+_0x47e283(0x4ec)+_0x47e283(0x2a8)+_0x47e283(0x1dc)+_0x47e283(0x1b1)+'e;','gbBqG':_0x47e283(0xd0),'EaQyO':_0x47e283(0x155)+'t','ccbed':'Move','tFIZk':_0x47e283(0x5b8)+'l','iCnYk':'Visua'+'l','qjolu':_0x47e283(0x300),'sfxOg':_0x47e283(0x50c),'RQBfm':'Safet'+'y','xGaJG':_0x47e283(0x28e)+'wn','bDAjO':_0x47e283(0x24b)+_0x47e283(0x2c2)+_0x47e283(0x54c)+'top:1'+'2px;r'+_0x47e283(0x36e)+'12px;'+'z-ind'+_0x47e283(0x2e8)+_0x47e283(0x1e7)+'646;c'+_0x47e283(0x34a)+_0x47e283(0x32d)+_0x47e283(0xeb)+_0x47e283(0x53b)+'26px;'+_0x47e283(0x55b)+_0x47e283(0x2e6)+'x;opa'+'city:'+'0.5;t'+_0x47e283(0x24e)+'tion:'+_0x47e283(0x195)+'ty\x200.'+_0x47e283(0x2bf)+_0x47e283(0x63b)+_0x47e283(0x11c)+'ts:au'+_0x47e283(0x473)+_0x47e283(0x500)+_0x47e283(0x2b2)+'shado'+_0x47e283(0x35d)+_0x47e283(0xbb)+_0x47e283(0x4d5)+'255,1'+_0x47e283(0x217)+_0x47e283(0x3a2)+'))','GbKIS':function(_0x2b0201){return _0x2b0201();},'hQwIB':_0x47e283(0xc9)+'9d','ftGQM':_0x47e283(0x181)+_0x47e283(0x614)+_0x47e283(0x1b5),'LBUrG':function(_0x51664d,_0x31819c,_0xac1bb,_0x3328f1,_0x4893fa,_0x4bc91b,_0x1013e5,_0x16e5bf){return _0x51664d(_0x31819c,_0xac1bb,_0x3328f1,_0x4893fa,_0x4bc91b,_0x1013e5,_0x16e5bf);},'QQowQ':_0x47e283(0x126),'TYyLo':_0x47e283(0x64f)+'th','jlYAV':_0x47e283(0x393)+_0x47e283(0x148),'LcHiU':'capSh'+_0x47e283(0x5a7),'myTRb':'IsGro'+_0x47e283(0x3f8),'xgOJy':_0x47e283(0x177)+_0x47e283(0x418)+_0x47e283(0x2ec)+'WMK\x20i'+_0x47e283(0x26f)+'ailed'+':'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0x47e283(0xc5)+_0x47e283(0x4fc)]||''))return;if(window['__SAK'+_0x47e283(0x51e)+_0x47e283(0x1f4)])return;window['__SAK'+'URA_K'+_0x47e283(0x1f4)]=!![];var _0xa76b4b=_0x47e283(0xc9)+'9d',_0x3c4a43=_0x47e283(0x56b)+'c6',_0x19f8ee={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x57a957[_0x47e283(0x4a3)],'adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x17df89={..._0x19f8ee};try{Object[_0x47e283(0x59f)+'n'](_0x17df89,JSON['parse'](localStorage[_0x47e283(0x286)+'em'](_0x57a957[_0x47e283(0x1b0)])||'{}'));}catch(_0x2a1661){}function _0x20e6d2(){var _0xf6e677=_0x47e283;try{localStorage[_0xf6e677(0x356)+'em']('sakur'+_0xf6e677(0x614)+_0xf6e677(0x1b5),JSON[_0xf6e677(0x5b1)+_0xf6e677(0x135)](_0x17df89));}catch(_0x10db31){}}var _0xd5276e={'uwmk':!!window['Unity'+'WebMo'+_0x47e283(0xc2)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x17df89[_0x47e283(0x4fb)+'ode'],'lastError':''};try{window[_0x47e283(0x2e7)+'entLi'+'stene'+'r'](_0x47e283(0x159),_0x34718d=>{var _0x5096fc=_0x47e283;try{var _0xf88888=_0x34718d&&(_0x34718d['messa'+'ge']||_0x34718d[_0x5096fc(0x159)]&&_0x34718d['error'][_0x5096fc(0x1ff)+'ge'])||_0x57a957[_0x5096fc(0x58c)];if(_0x34718d&&_0x34718d[_0x5096fc(0x639)+'ame'])_0xf88888+=_0x57a957[_0x5096fc(0x45d)](_0x5096fc(0x42f)+String(_0x34718d['filen'+_0x5096fc(0x4fc)])[_0x5096fc(0x4f4)]('/')['pop']()+':',_0x34718d['linen'+'o']||'?');_0xd5276e['lastE'+_0x5096fc(0x16f)]=String(_0xf88888)['slice'](0x1c1+0x257*-0x9+-0xe*-0x161,-0x1*0x77f+0x14*-0x75+-0x9*-0x1eb);}catch(_0x1bfe49){}});}catch(_0xb9a288){}var _0x232f75=null,_0x30ecc6=null,_0x3a8678={},_0x319d5b=[],_0x176165=[],_0x19f56b=new Map();function _0x56f527(_0x111ed6,_0x359946){var _0x321cdc=_0x47e283;if(!_0x359946||_0x111ed6[_0x321cdc(0xe5)+_0x321cdc(0x53c)](_0x359946)||_0x57a957['HWERP'](_0x111ed6[_0x321cdc(0x5d9)+'h'],0xbff*-0x1+-0x120a*-0x1+-0x5cb))return;_0x111ed6[_0x321cdc(0x3cd)](_0x359946);}function _0x5a8822(_0x51d54a,_0x64def6,_0x2d1a33,_0x3a1de8){var _0x5f089a=_0x47e283,_0x315072={'UgBMC':'.sk-m'+'desc','JolQb':function(_0x1debc8,_0x2b4275){return _0x1debc8===_0x2b4275;},'qajMM':function(_0x337b40,_0x4a4a9e){return _0x337b40===_0x4a4a9e;},'zrqCc':_0x5f089a(0x4c3)+'MODE\x20'+_0x5f089a(0x16b)+'rlay\x20'+'only,'+'\x20no\x20h'+'ooks\x20'+'(relo'+_0x5f089a(0x302)+'\x20exit'+')','oviRw':function(_0x1666d8,_0x4807ba){return _0x1666d8+_0x4807ba;},'sixnK':function(_0x2825ce,_0x50a125){return _0x2825ce+_0x50a125;},'twgXp':function(_0xab679f,_0x1a49b8){return _0xab679f+_0x1a49b8;},'vyJFS':_0x57a957['vTjrT'],'EcbIa':function(_0x11da7f,_0x550f71){return _0x11da7f+_0x550f71;},'qazLs':function(_0x4e3853,_0x3b6554){return _0x4e3853+_0x3b6554;},'CLxHh':_0x57a957[_0x5f089a(0x347)],'UvUIX':_0x5f089a(0x2ce),'qpJJm':_0x5f089a(0x1ed),'aUBUL':_0x57a957[_0x5f089a(0x207)]},_0x3184b0=0x161f+-0x15*0x47+0x413*-0x4;try{_0x57a957[_0x5f089a(0x17b)]('wUoxM',_0x5f089a(0x3ae))?_0x3184b0=_0x64def6&&_0x64def6['val']?_0x64def6['val']():-0x164b*0x1+-0x7*0x2a8+0x28e3:_0x4ca9c2(_0x52f42e,_0x1ddd74,_0x537090,_0x57a957['osxgj']);}catch(_0x8aec){}if(!_0x3184b0)return;_0x56f527(_0x51d54a,_0x3184b0),_0x2d1a33[_0x3a1de8]=_0x51d54a[_0x5f089a(0x5d9)+'h'];if(_0x3a1de8===_0x5f089a(0x31b)+'ents'&&_0x51d54a['lengt'+'h']){var _0x353235=_0x3a8678[_0x5f089a(0x54f)+'ve'];if(_0x353235)try{if(_0x57a957[_0x5f089a(0x3be)](_0x57a957[_0x5f089a(0x380)],'SvVVW'))_0x353235[_0x5f089a(0x4bd)+'ed']=![];else{var _0x5eb549=_0x10b346[_0x2665db]['query'+'Selec'+'tor'](_0x315072['UgBMC']);_0x5eb549&&(_0x315072[_0x5f089a(0x4e7)](_0x5eb549[_0x5f089a(0xa3)+_0x5f089a(0x1f0)+'t'][_0x5f089a(0x5fa)+'Of'](_0x5f089a(0x174)),0x1eeb*-0x1+0x1042+0xea9)||_0x315072['qajMM'](_0x5eb549[_0x5f089a(0xa3)+_0x5f089a(0x1f0)+'t'][_0x5f089a(0x5fa)+'Of'](_0x5f089a(0x4f1)),0x45*-0x66+-0x6b1*0x1+0xb65*0x3))&&(_0x5eb549['textC'+_0x5f089a(0x1f0)+'t']=_0x432edd['safeM'+'ode']?_0x315072['zrqCc']:_0x5af88c[_0x5f089a(0x5c9)]?_0x315072[_0x5f089a(0x4ea)](_0x315072['sixnK'](_0x315072[_0x5f089a(0x4ba)](_0x315072['oviRw'](_0x315072[_0x5f089a(0x3f9)],_0x11fc51[_0x5f089a(0x1d6)+_0x5f089a(0x564)]?_0x315072[_0x5f089a(0x3f2)](_0x315072[_0x5f089a(0x1ab)](_0x315072['sixnK'](_0x547b49[_0x5f089a(0x1d6)+'Ok'],'/'),_0x3f9ee9[_0x5f089a(0x1d6)+_0x5f089a(0x564)]),_0x5f089a(0x5c7)+'s'):_0x5f089a(0x3d3)+_0x5f089a(0x387)+'med\x20('+_0x5f089a(0x661)+_0x5f089a(0x1f1))+(_0x5f089a(0x273)+_0x5f089a(0x26a)),_0x2e64c7[_0x5f089a(0x49e)+_0x5f089a(0x496)]?_0x5f089a(0x65b)+'d':'loadi'+'ng')+_0x315072['CLxHh'],_0x152a5e[_0x5f089a(0xbf)+_0x5f089a(0x5ad)]?_0x315072[_0x5f089a(0x312)]:_0x315072[_0x5f089a(0x556)])+(_0x5f089a(0x3ba)+_0x5f089a(0x15e)+'t\x20')+(_0xfa1109['movem'+_0x5f089a(0x5e1)]?'held':_0x315072[_0x5f089a(0x556)]),_0x594b30[_0x5f089a(0xce)+_0x5f089a(0x16f)]?_0x315072[_0x5f089a(0x4ea)](_0x315072[_0x5f089a(0x2d1)],_0x16f9df[_0x5f089a(0xce)+_0x5f089a(0x16f)]):''):'UWMK\x20'+_0x5f089a(0x452)+_0x5f089a(0x114)+'overl'+'ay\x20on'+_0x5f089a(0x541)+'einst'+'all\x20t'+'he\x20us'+_0x5f089a(0x4aa)+_0x5f089a(0x325));}}catch(_0xa349b8){}}}function _0x3b8544(_0x35cdb4,_0x491cae,_0x23a28e){var _0x439598=_0x47e283,_0x5a95ea={'ADFJt':function(_0x42572a){return _0x42572a();}},_0x254b9f=_0x19f56b[_0x439598(0x4bf)](_0x35cdb4);!_0x254b9f&&(_0x254b9f=new Map(),_0x19f56b[_0x439598(0x30c)](_0x35cdb4,_0x254b9f));if(!_0x254b9f[_0x439598(0x351)](_0x491cae)){if(_0x57a957['PeSSq'](_0x57a957['vZPpo'],_0x57a957['PdpbI']))try{var _0x2ff629=_0x2b6d6f[_0x439598(0x1f8)+'refix']({'typeName':_0x832f31,'methodName':_0x55b53c,'params':_0xd676b,'returnType':_0x65b7dc},_0x58542a);return _0x2ff629[_0x439598(0x4bd)+'ed']=_0x3a0cc0!==![],_0x4126f5[_0x17ac4f]=_0x2ff629,_0x17e15d['hooks'+'Total']++,_0x2ff629;}catch(_0x9dc5dd){return _0x29d2b8[_0x439598(0x597)](_0x439598(0x177)+_0x439598(0x418)+_0x439598(0x32e)+_0x439598(0x36c)+'eg\x20fa'+_0x439598(0x55f),_0x4077d3,_0x9dc5dd&&_0x9dc5dd[_0x439598(0x1ff)+'ge']),null;}else try{var _0x36aa47=new _0x232f75(_0x35cdb4)[_0x439598(0x479)+_0x439598(0x360)](_0x491cae,_0x23a28e);_0x254b9f[_0x439598(0x30c)](_0x491cae,_0x36aa47!==undefined?_0x36aa47[_0x439598(0x5f0)]():null);}catch(_0x10813c){if(_0x439598(0x38e)==='WNSZv')_0x254b9f[_0x439598(0x30c)](_0x491cae,null);else{var _0x4849c1=('2|4|0'+_0x439598(0x38b)+'3')['split']('|'),_0x2b3d29=-0x9*-0x233+-0x1*-0x26f1+-0x3abc;while(!![]){switch(_0x4849c1[_0x2b3d29++]){case'0':_0x281223[_0x439598(0x5ca)+_0x439598(0x4d0)+'il']=_0x3a741f;continue;case'1':_0x5a95ea[_0x439598(0x309)](_0x34abda);continue;case'2':_0x5a3224[_0x439598(0x4c5)+'od']=_0x50adf2;continue;case'3':_0x41c419[_0x439598(0x4e8)+'d']();continue;case'4':_0x3f38fe['hookG'+'odDie']=_0x9c49ee;continue;case'5':_0x30ab1b[_0x439598(0x36a)+_0x439598(0x442)+'e']=_0x1641b6;continue;}break;}}}}return _0x254b9f[_0x439598(0x4bf)](_0x491cae);}function _0x5ae2bf(_0x4ab32f,_0x2914cd,_0x321e35,_0x48d9f5){var _0x476976=_0x47e283;try{new _0x232f75(_0x4ab32f)['write'+_0x476976(0x5d0)](_0x2914cd,_0x321e35,_0x48d9f5);}catch(_0x1ad338){}}function _0x1f395a(_0x4edd8f,_0x4cbffd){var _0x5d5074=_0x47e283;try{if(_0x57a957[_0x5d5074(0x17b)]('qYArW',_0x5d5074(0xe4)))_0x416678[_0x5d5074(0x356)+'em'](_0x57a957[_0x5d5074(0x2f0)],_0x450bce[_0x5d5074(0x5b1)+_0x5d5074(0x135)](_0x971c8b));else{var _0xc359c7=new _0x232f75(_0x4edd8f)[_0x5d5074(0x479)+_0x5d5074(0x360)](_0x4cbffd,_0x5d5074(0x3bc));return _0xc359c7?_0xc359c7[_0x5d5074(0x5f0)]():-0x1ee7+-0xab2+0x17*0x1cf;}}catch(_0x5c3aff){if(_0x57a957[_0x5d5074(0x4fd)]===_0x57a957['Pgidh'])return 0x1*0x7ed+0x9f3+-0x160*0xd;else _0x465de0['ksPos']=_0x45ec8b,_0xaae2();}}function _0x31e9a0(_0x58c72d,_0x84aa75,_0x234a49,_0x5e29ea){var _0x27eca4=_0x57a957['luUWL'](_0x3b8544,_0x58c72d,_0x84aa75,_0x234a49);if(_0x27eca4!=null)_0x5ae2bf(_0x58c72d,_0x84aa75,_0x234a49,_0x27eca4*_0x5e29ea);}function _0x3da7e3(_0x394e77,_0x3cb2f0,_0x4d0031,_0x37bf26,_0xc4de54,_0x324b85,_0x2364f7){var _0x322a53=_0x47e283;try{var _0xc982bc=('0|2|4'+'|1|3')[_0x322a53(0x4f4)]('|'),_0x3aa076=-0x175*0x11+-0x31c*-0x5+-0x3*-0x313;while(!![]){switch(_0xc982bc[_0x3aa076++]){case'0':var _0x2a1927=_0x30ecc6[_0x322a53(0x1f8)+'refix']({'typeName':_0x3cb2f0,'methodName':_0x4d0031,'params':_0x37bf26,'returnType':_0xc4de54},_0x324b85);continue;case'1':_0xd5276e[_0x322a53(0x1d6)+_0x322a53(0x564)]++;continue;case'2':_0x2a1927[_0x322a53(0x4bd)+'ed']=_0x2364f7!==![];continue;case'3':return _0x2a1927;case'4':_0x3a8678[_0x394e77]=_0x2a1927;continue;}break;}}catch(_0x4509e6){if(_0x322a53(0x415)===_0x322a53(0x415))return console['warn'](_0x322a53(0x177)+_0x322a53(0x418)+_0x322a53(0x32e)+_0x322a53(0x36c)+_0x322a53(0x42d)+'iled:',_0x394e77,_0x4509e6&&_0x4509e6[_0x322a53(0x1ff)+'ge']),null;else{var _0x32dc43=_0x57a957[_0x322a53(0xad)]['split']('|'),_0x15aad3=0x1f48+-0xfc4+-0xf84*0x1;while(!![]){switch(_0x32dc43[_0x15aad3++]){case'0':var _0x3c2115=0x1adb+0x530+-0x1fdf,_0x3974a2=0x17da+-0xfa5+-0x829;continue;case'1':_0x467f4a['font']=_0x322a53(0x5eb)+_0x322a53(0x461)+_0x322a53(0x175)+'ospac'+'e,mon'+_0x322a53(0x24a)+'e';continue;case'2':_0x27c6a9[_0x322a53(0x4b7)+'re']();continue;case'3':if(!_0x298435[_0x322a53(0x49e)+'oaded'])_0x57a957[_0x322a53(0x5e3)](_0x1e17b3,_0x57a957[_0x322a53(0x3e7)],_0x57a957[_0x322a53(0x1d9)]);continue;case'4':_0x1e17b3('SAKUR'+_0x322a53(0x3e1)+_0x322a53(0xbd)+'1',_0x322a53(0xc9)+'9d');continue;case'5':var _0x1e17b3=(_0xfdba0d,_0x4952df)=>{var _0x47f693=_0x322a53;_0x34429b[_0x47f693(0x3f1)+_0x47f693(0x5a4)]=_0x4952df||_0x47f693(0x4d5)+_0x47f693(0x3a5)+_0x47f693(0x5db)+_0x47f693(0x2a6)+'5)',_0x996267[_0x47f693(0x38d)+_0x47f693(0x54a)](_0xfdba0d,_0x3974a2,_0x3c2115),_0x3c2115+=0x14d3+0x1*0x845+-0x1d08*0x1;};continue;case'6':_0x5ae98b[_0x322a53(0x4ce)+_0x322a53(0x25b)+'ne']=_0x57a957[_0x322a53(0x282)];continue;case'7':_0x47612f[_0x322a53(0xe2)+'lign']='left';continue;case'8':_0x3f7c49[_0x322a53(0x3c9)]();continue;case'9':if(_0x15d3fb[_0x322a53(0x494)])_0x1e17b3(_0xbee50d+'\x20FPS');continue;}break;}}}}function _0x17cc94(_0x74bde5,_0x45b118,_0xcd2c95,_0x5582f6,_0x32f888,_0x3603d4,_0x48f00b){var _0x435570=_0x47e283;if(_0x57a957[_0x435570(0x4f0)]!==_0x435570(0x63a))try{if(_0x57a957['lnaGh']==='wDTiI'){var _0x2bc554=_0x30ecc6[_0x435570(0x1f8)+_0x435570(0x206)+'x']({'typeName':_0x45b118,'methodName':_0xcd2c95,'params':_0x5582f6,'returnType':_0x32f888},_0x3603d4);return _0x2bc554['enabl'+'ed']=_0x57a957['EeoUF'](_0x48f00b,![]),_0x3a8678[_0x74bde5]=_0x2bc554,_0xd5276e[_0x435570(0x1d6)+_0x435570(0x564)]++,_0x2bc554;}else _0x1b4db9[_0x435570(0x313)+'rokes']=_0x3dea73,_0x57a957[_0x435570(0x166)](_0x2cca6c);}catch(_0x1b6072){return console['warn'](_0x435570(0x177)+_0x435570(0x418)+_0x435570(0x32e)+'ook\x20r'+'eg\x20fa'+'iled:',_0x74bde5,_0x1b6072&&_0x1b6072[_0x435570(0x1ff)+'ge']),null;}else _0x306546[_0x435570(0x18b)]=_0x435570(0x3b6)+_0x573390[_0x435570(0x40d)]((0x63*-0x23+-0x211f+0x2eb1*0x1)*_0x1718f0)+_0x57a957['YpWvF'],_0x45ebb1[_0x435570(0x3f1)+'tyle']=_0x4e4d84?_0x57a957['BYmeB']:_0x57a957['ArSfQ'],_0x3b8fe2[_0x435570(0x38d)+'ext'](_0x48670d,_0x57a957[_0x435570(0x45d)](_0x2e707d,_0x1db60a/(0xeff+-0x1*-0x1822+0x271f*-0x1)),_0x57a957[_0x435570(0x45d)](_0x371820,_0x33ae43/(0x89c+-0x1*-0x259d+-0x2e37))+_0x57a957['qMklA'](-0x349*0x1+-0x9cd*-0x1+0x33e*-0x2,_0xe86803));}var _0x2caf49=()=>![];try{if(window[_0x47e283(0x254)+'WebMo'+'dkit']&&!_0x17df89[_0x47e283(0x4fb)+_0x47e283(0x147)]){_0x232f75=window['Unity'+'WebMo'+'dkit']['Value'+_0x47e283(0x2b5)+'er'],_0x30ecc6=window[_0x47e283(0x254)+_0x47e283(0x3a4)+_0x47e283(0xc2)]['Runti'+'me'][_0x47e283(0x40e)+'ePlug'+'in']({'name':_0x47e283(0x13f)+'aKour','version':_0x47e283(0x1d3),'referencedAssemblies':[_0x57a957[_0x47e283(0x2cc)]]});if(_0x17df89['hookG'+'od'])_0x57a957[_0x47e283(0x1eb)](_0x3da7e3,_0x57a957['QQowQ'],_0x57a957['TYyLo'],_0x57a957[_0x47e283(0x396)],['i32','i32'],undefined,_0x2caf49,!!_0x17df89[_0x47e283(0x126)]);if(_0x17df89[_0x47e283(0x4c5)+'odDie'])_0x57a957['sqZlV'](_0x3da7e3,_0x47e283(0x420)+'e',_0x57a957[_0x47e283(0x1cb)],'Local'+'Die',[_0x47e283(0x235),_0x57a957['RZPax'],_0x57a957[_0x47e283(0x52d)],'i32',_0x57a957[_0x47e283(0x52d)]],undefined,_0x2caf49,!!_0x17df89[_0x47e283(0x126)]);if(_0x17df89[_0x47e283(0x5ca)+_0x47e283(0x4d0)+'il'])_0x3da7e3(_0x57a957[_0x47e283(0x54b)],_0x47e283(0x5c2)+'nPlat'+_0x47e283(0x502)+'.Over'+'tide.'+_0x47e283(0x288)+'lMoti'+'on',_0x47e283(0x137),[_0x57a957[_0x47e283(0x52d)]],undefined,_0x2caf49,!!_0x17df89[_0x47e283(0x393)+_0x47e283(0x148)]);if(_0x17df89['hookC'+_0x47e283(0x442)+'e'])_0x17cc94(_0x57a957[_0x47e283(0x2d7)],_0x47e283(0x5ea)+'ter',_0x47e283(0x15b)+_0x47e283(0x587)+_0x47e283(0x3ea),['i32',_0x47e283(0x235)],undefined,(_0x382407,_0x18637b)=>{var _0x31718f=_0x47e283;_0x57a957['qDmrP'](_0x5a8822,_0x176165,_0x18637b,_0xd5276e,_0x31718f(0xbf)+_0x31718f(0x5ad));},!![]);if(_0x17df89[_0x47e283(0x36a)+_0x47e283(0x442)+'e'])_0x17cc94(_0x47e283(0x54f)+'ve',_0x47e283(0x5c2)+_0x47e283(0x49a)+_0x47e283(0x502)+_0x47e283(0x43c)+'tide.'+'Movem'+_0x47e283(0x1cc),_0x57a957['myTRb'],[_0x57a957['RZPax']],_0x47e283(0x235),(_0x55e738,_0x43a65e)=>{var _0x5b1392=_0x47e283;_0x57a957[_0x5b1392(0x292)](_0x5a8822,_0x319d5b,_0x43a65e,_0xd5276e,_0x5b1392(0x31b)+_0x5b1392(0x5e1));},!![]);}}catch(_0x2ecdfc){console['warn'](_0x57a957[_0x47e283(0x233)],_0x2ecdfc&&_0x2ecdfc[_0x47e283(0x1ff)+'ge']);}function _0x29be02(_0x33826d,_0x4fee98){var _0x5b4bb4=_0x47e283;if(_0x57a957[_0x5b4bb4(0x2ca)](_0x57a957['CPJMn'],'hxubX'))_0xd1d6cb[_0x5b4bb4(0x324)]==='Inser'+'t'&&(_0x16abb8[_0x5b4bb4(0x1df)+_0x5b4bb4(0x400)+'ault'](),_0x4ab6d7());else{var _0x26975d=_0x3a8678[_0x33826d];if(_0x26975d){if(_0x5b4bb4(0x3f7)==='bltqF')try{_0x26975d[_0x5b4bb4(0x4bd)+'ed']=!!_0x4fee98;}catch(_0x3d3d9a){}else _0xbc2ed0=_0x4e1f2a[_0x5b4bb4(0x40d)](_0x311f4d*(-0x44*0x3b+0x123a*0x2+0x9*-0x1e0)/_0x57a957[_0x5b4bb4(0x5a6)](_0x184433,_0x52b172)),_0x41ce8c=0x1559+-0x3e*0x18+-0xf89,_0x141552=_0x4e9337;}}}setInterval(()=>{var _0xd87931=_0x47e283,_0x3f795a={'ZzyRw':'sk-ct'+'l','RzlUC':'sk-la'+_0xd87931(0x523),'cPWmi':_0x57a957['WFziK']};if(_0xd87931(0x463)==='FDezt'){var _0x22adba={'FcHur':function(_0x5b8fd0,_0xa54c6b,_0xaceeda,_0x55889f,_0x5339e8){return _0x5b8fd0(_0xa54c6b,_0xaceeda,_0x55889f,_0x5339e8);}};_0x5cf2f0=_0x157575[_0xd87931(0x254)+_0xd87931(0x3a4)+_0xd87931(0xc2)][_0xd87931(0x4c2)+_0xd87931(0x2b5)+'er'],_0x4823d6=_0x495313[_0xd87931(0x254)+_0xd87931(0x3a4)+_0xd87931(0xc2)]['Runti'+'me'][_0xd87931(0x40e)+_0xd87931(0x3dc)+'in']({'name':'Sakur'+_0xd87931(0x191),'version':_0xd87931(0x1d3),'referencedAssemblies':[_0x57a957[_0xd87931(0x2cc)]]});if(_0xaf8a1a[_0xd87931(0x4c5)+'od'])_0x44370a('god','OHeal'+'th',_0x57a957[_0xd87931(0x396)],[_0xd87931(0x235),_0xd87931(0x235)],_0x4f8318,_0xa53075,!!_0x160886[_0xd87931(0x126)]);if(_0x156753[_0xd87931(0x4c5)+_0xd87931(0x4dd)])_0xa44667(_0xd87931(0x420)+'e',_0xd87931(0x64f)+'th',_0x57a957['TSOxb'],[_0x57a957['RZPax'],_0x57a957[_0xd87931(0x52d)],'i32',_0x57a957['RZPax'],_0xd87931(0x235)],_0x298deb,_0x5175a7,!!_0x17cc36['god']);if(_0x14fdc5[_0xd87931(0x5ca)+_0xd87931(0x4d0)+'il'])_0x40d385(_0xd87931(0x393)+_0xd87931(0x148),_0x57a957['dZDzo'],_0x57a957[_0xd87931(0x1ef)],[_0x57a957['RZPax']],_0x287c65,_0x1253df,!!_0x31c18b[_0xd87931(0x393)+_0xd87931(0x148)]);if(_0x40cb05['hookC'+'aptur'+'e'])_0x57a957[_0xd87931(0x5f7)](_0x2aefd1,_0xd87931(0x2fa)+_0xd87931(0x5a7),_0x57a957[_0xd87931(0x545)],_0x57a957['YKfss'],['i32',_0xd87931(0x235)],_0x38a83e,(_0xb0f666,_0x16c214)=>{var _0x1d567f=_0xd87931;_0x13123e(_0x2cdbcb,_0x16c214,_0xb90b9,_0x1d567f(0xbf)+'ers');},!![]);if(_0x114d1b['hookC'+'aptur'+'e'])_0x57a957[_0xd87931(0x5f7)](_0x562a3c,_0xd87931(0x54f)+'ve',_0xd87931(0x5c2)+_0xd87931(0x49a)+'forms'+_0xd87931(0x43c)+'tide.'+_0xd87931(0x3c8)+'ent','IsGro'+_0xd87931(0x3f8),['i32'],_0x57a957[_0xd87931(0x52d)],(_0x5a7c25,_0x42f647)=>{var _0x42f7f3=_0xd87931;_0x22adba['FcHur'](_0x8e736d,_0x24ac4c,_0x42f647,_0x1eab87,_0x42f7f3(0x31b)+'ents');},!![]);}else{if(!_0x232f75||!window['unity'+'Insta'+_0xd87931(0x3d9)])return;var _0x1cbe7a=(_0x57a957[_0xd87931(0x19b)](Number,_0x17df89[_0xd87931(0x21e)+'Pct'])||-0x1*-0x2151+-0x1c73*-0x1+-0x2*0x1eb0)/(-0x58b+0x2345+-0x1d56),_0x18be02=(Number(_0x17df89[_0xd87931(0xfe)+'ct'])||0xe57+-0x41*-0x5+-0xf38)/(0x1390+0x1a*0x145+-0x342e),_0x29af39=(_0x57a957[_0xd87931(0x19b)](Number,_0x17df89[_0xd87931(0x58f)+'tyPct'])||-0xa8a+0x1282+-0x794)/(0x6*-0x14+-0x156d*-0x1+0xd*-0x195),_0xf01da9=Math[_0xd87931(0x26b)](-0x11a5*-0x1+0x23f1+-0x3595,Number(_0x17df89['damag'+'eValu'+'e'])||-0x87*0x2f+-0x8ff+-0x225e*-0x1),_0x526f34=_0x1cbe7a!==0x263b+0x10fc+-0x1b9b*0x2||_0x57a957[_0xd87931(0x3be)](_0x18be02,0x300+-0xd03+0x4*0x281)||_0x29af39!==-0x263f+-0x227f+-0x48bf*-0x1||_0x17df89[_0xd87931(0x3b1)],_0x1fa2c1=_0x17df89[_0xd87931(0x561)+'ead']||_0x17df89['damag'+_0xd87931(0x409)]||_0x17df89['infAm'+'moExp']||_0x17df89[_0xd87931(0x5b3)+_0xd87931(0x39f)];if(!_0x526f34&&!_0x1fa2c1)return;try{if(_0x57a957[_0xd87931(0x223)]!==_0x57a957[_0xd87931(0x4e6)])for(var _0x107bbb=0x29*-0x69+0x7e7*-0x1+0x18b8;_0x107bbb<_0x319d5b['lengt'+'h'];_0x107bbb++){var _0x58fffe=_0x319d5b[_0x107bbb];if(!_0x58fffe)continue;if(_0x57a957['EeoUF'](_0x1cbe7a,-0x1a5*-0x13+0x253a+-0x4*0x111e)){if(_0x57a957[_0xd87931(0x2a2)]===_0x57a957['WVHcb']){var _0x11b3e4=(_0xd87931(0x34e)+'|4|0|'+'5|3|7')[_0xd87931(0x4f4)]('|'),_0x184082=-0x24a6+0x438+0x206e;while(!![]){switch(_0x11b3e4[_0x184082++]){case'0':_0x2e9eba['textC'+'onten'+'t']=_0x3dbd44;continue;case'1':var _0x92f293=_0x508d2e[_0xd87931(0x40e)+_0xd87931(0x4d3)+'ent'](_0xd87931(0x5a8));continue;case'2':_0x92f293[_0xd87931(0xf6)+_0xd87931(0x60c)]=_0x3f795a[_0xd87931(0x15d)];continue;case'3':_0x92f293[_0xd87931(0x47d)+'d'](_0x2e9eba,_0x540afa);continue;case'4':_0x2e9eba[_0xd87931(0xf6)+'Name']=_0x3f795a[_0xd87931(0x4a6)];continue;case'5':if(_0x30a3e3){var _0x51e283=_0x46d0ab[_0xd87931(0x40e)+_0xd87931(0x4d3)+_0xd87931(0x1cc)](_0x3f795a['cPWmi']);_0x51e283[_0xd87931(0xf6)+_0xd87931(0x60c)]='sk-hi'+'nt',_0x51e283[_0xd87931(0xa3)+_0xd87931(0x1f0)+'t']=_0x3057cf,_0x2e9eba['appen'+_0xd87931(0x2db)+'d'](_0x51e283);}continue;case'6':var _0x2e9eba=_0x2a200d['creat'+_0xd87931(0x4d3)+'ent']('span');continue;case'7':return _0x92f293;}break;}}else _0x31e9a0(_0x58fffe,0x1949+-0x1deb+-0x265*-0x2,_0x57a957['Rkkcy'],_0x1cbe7a),_0x31e9a0(_0x58fffe,0x1*-0x169d+0x2514+-0xe4b,_0x57a957[_0xd87931(0x26d)],_0x1cbe7a),_0x57a957[_0xd87931(0x474)](_0x31e9a0,_0x58fffe,0xc*-0x240+0xa0*-0x34+0x3bb0,_0x57a957['Rkkcy'],_0x1cbe7a),_0x31e9a0(_0x58fffe,-0x233d+0x1e95*-0x1+0x4206,_0x57a957[_0xd87931(0x26d)],_0x1cbe7a),_0x31e9a0(_0x58fffe,-0x359*0x2+-0x1*-0x1b9f+-0x1*0x14d1,'f32',_0x1cbe7a),_0x31e9a0(_0x58fffe,-0xf30*0x2+-0xb8a*0x3+0xa*0x683,_0xd87931(0x100),_0x1cbe7a);}if(_0x18be02!==-0x1173*-0x2+-0x2263+-0x5*0x1a)_0x31e9a0(_0x58fffe,0x4*-0x7e1+-0x5*0x443+0x3523,_0x57a957[_0xd87931(0x26d)],_0x18be02);_0x57a957[_0xd87931(0x3be)](_0x29af39,-0x1*-0xaf3+0x1607+-0x20f9)&&(_0x31e9a0(_0x58fffe,-0x1*-0x356+0x1*-0x67+-0x2a7,_0xd87931(0x100),_0x29af39),_0x57a957[_0xd87931(0x292)](_0x31e9a0,_0x58fffe,-0x1f9*0xb+-0x1b08+-0xa3*-0x4d,_0x57a957[_0xd87931(0x26d)],_0x29af39));if(_0x17df89['bhop'])_0x5ae2bf(_0x58fffe,-0x2*0x38d+-0x24c0+0x163b*0x2,_0xd87931(0x100),-(0x80*0x4c+0x2*-0xf0d+-0x3ff));}else _0x1842cc[_0xd87931(0xfe)+'ct']=_0x4daa66,_0x299235();}catch(_0x1ba8b1){}try{if(_0x57a957[_0xd87931(0x2e2)](_0x57a957[_0xd87931(0x4dc)],_0x57a957[_0xd87931(0x4dc)]))for(var _0xb02031=-0x7*0x4b3+-0x22e2+0x43c7;_0xb02031<_0x176165['lengt'+'h'];_0xb02031++){var _0x3b72f8=_0x1f395a(_0x176165[_0xb02031],0x1d97+-0x24df*-0x1+-0x423e);if(!_0x3b72f8)continue;_0x17df89[_0xd87931(0x1c3)+_0xd87931(0x409)]&&(_0x5ae2bf(_0x3b72f8,-0x1042+-0x18b4+0x2942,_0x57a957['RZPax'],_0xf01da9),_0x5ae2bf(_0x3b72f8,-0x2640+0x254e*-0x1+0x373*0x16,_0xd87931(0x235),_0xf01da9));_0x17df89[_0xd87931(0x561)+_0xd87931(0x17d)]&&(_0x57a957['xMbDo'](_0x5ae2bf,_0x3b72f8,-0xe1+-0xd3*-0x2+-0x3d*0x1,_0x57a957[_0xd87931(0x26d)],0x14b6+0x9*0x23f+-0x28ed*0x1),_0x57a957['xMbDo'](_0x5ae2bf,_0x3b72f8,-0xf84*-0x1+0x18f2+-0x6*0x6ad,'f32',0x5ec+-0x403+-0x8*0x3d));if(_0x17df89[_0xd87931(0x204)+_0xd87931(0x1c2)])_0x5ae2bf(_0x3b72f8,-0x9*-0x39c+0x1*0x1dad+-0x3dcd,'i32',-0x13f0+0x261d+-0xe46);_0x17df89[_0xd87931(0x5b3)+_0xd87931(0x39f)]&&(_0x31e9a0(_0x3b72f8,-0x1b8+-0x3*0x74b+0x1825,_0x57a957[_0xd87931(0x26d)],-0x2222+-0x8*-0xa9+-0x6*-0x4cf+0.1),_0x57a957[_0xd87931(0x474)](_0x5ae2bf,_0x3b72f8,-0x700+0xffa+-0x89a,_0x57a957['Rkkcy'],-0xb27+0x1663+0x2*-0x59e+0.1));}else _0x105015[_0xd87931(0x5a3)]=_0x107969,_0x1c7664();}catch(_0x3af58c){}}},0x15bb*-0x1+0x13*-0x1df+0x3a10),setInterval(()=>{var _0x4705ca=_0x47e283;_0xd5276e['gameL'+_0x4705ca(0x496)]=!!window['unity'+_0x4705ca(0x2a7)+_0x4705ca(0x3d9)];try{if(_0x57a957[_0x4705ca(0x640)](_0x57a957[_0x4705ca(0xb2)],_0x57a957['opELp']))try{_0x42a04f[_0x4705ca(0x356)+'em']('sakur'+'a.kou'+'r.ui.'+'v1',_0x3ca59b[_0x4705ca(0x5b1)+_0x4705ca(0x135)](_0x96ee09));}catch(_0x29b477){}else{var _0x48dfa5=0x12fc+0x3d3*0x9+-0x3567;for(var _0x4435e4 in _0x3a8678){if(_0x3a8678[_0x4435e4]&&_0x3a8678[_0x4435e4][_0x4705ca(0x62b)+'ed'])_0x48dfa5++;}_0xd5276e['hooks'+'Ok']=_0x48dfa5;}}catch(_0x44a42a){}},0x2460+0x10d*0x2+0x3b*-0x96);var _0x1e8382=new Set(),_0x16b7ac={0x1:[],0x3:[]},_0x1e59ac=![];function _0x21238c(_0x1a2c2c){var _0x3644d3=_0x47e283;_0x1e8382['add'](_0x1a2c2c[_0x3644d3(0x324)]);}function _0x17373f(_0x24bb0c){var _0x1a30b4=_0x47e283;_0x1e8382[_0x1a30b4(0x504)+'e'](_0x24bb0c[_0x1a30b4(0x324)]);}function _0x3c9b87(_0x58d801){var _0xd82b8e=_0x47e283,_0xd600a9={'Uhfwl':function(_0x25b638,_0x449d8a){return _0x57a957['zWzFW'](_0x25b638,_0x449d8a);},'jgQDC':_0x57a957['fHlks'],'vQlTC':function(_0x4bbccd,_0x1aaa4c){var _0x2b2d6b=_0x496d;return _0x57a957[_0x2b2d6b(0x657)](_0x4bbccd,_0x1aaa4c);},'PuxAN':_0x57a957[_0xd82b8e(0x61b)],'vbQfQ':function(_0x3e5713){return _0x3e5713();}};if(_0x57a957[_0xd82b8e(0x2ca)]('lilkp',_0xd82b8e(0x19f))){if(_0x58d801['__sak'+_0xd82b8e(0x225)])return;_0x1e8382[_0xd82b8e(0x5cf)](_0xd82b8e(0x63d)+(_0x58d801[_0xd82b8e(0x555)+'n']+(-0x848+0x13c6+0xad*-0x11)));var _0x19d670=_0x16b7ac[_0x58d801[_0xd82b8e(0x555)+'n']+(0x17e2+0x6*0x434+-0x3119)];if(_0x19d670){_0x19d670[_0xd82b8e(0x3cd)](performance['now']());if(_0x19d670[_0xd82b8e(0x5d9)+'h']>0xf*-0x26+0x97*-0x1a+-0x5e8*-0x3)_0x19d670['shift']();}}else{if(_0x480779[_0xd82b8e(0x14b)]&&(_0xd600a9[_0xd82b8e(0xd8)](_0x254879[_0xd82b8e(0x2ff)+'State'],_0xd600a9[_0xd82b8e(0x25c)])||_0xd600a9[_0xd82b8e(0x65c)](_0x217064[_0xd82b8e(0x2ff)+'State'],_0xd600a9[_0xd82b8e(0x156)])))_0xd600a9['vbQfQ'](_0x395c07);else _0x8dcbaf[_0xd82b8e(0x2e7)+_0xd82b8e(0x3ef)+_0xd82b8e(0x196)+'r'](_0xd82b8e(0x3c0)+'ntent'+'Loade'+'d',_0x5bcdb3,{'once':!![]});}}function _0x36ad3e(_0x1dfb10){var _0x4fc1d3=_0x47e283;if(_0x57a957[_0x4fc1d3(0x4ff)](_0x57a957[_0x4fc1d3(0x278)],_0x57a957[_0x4fc1d3(0x278)])){if(!_0x1dfb10[_0x4fc1d3(0x339)+'ura'])_0x1e8382['delet'+'e'](_0x57a957[_0x4fc1d3(0x45d)](_0x57a957[_0x4fc1d3(0xb0)],_0x1dfb10[_0x4fc1d3(0x555)+'n']+(-0x1938+-0x1*-0xead+0xa8c)));}else{var _0x363177=_0x57a957['vAviY'][_0x4fc1d3(0x4f4)]('|'),_0x4e4c1a=-0x175b+-0x1*0x10a3+0x27fe;while(!![]){switch(_0x363177[_0x4e4c1a++]){case'0':return _0x5e34bb;case'1':_0x3bc0b4[_0x4fc1d3(0x1d6)+_0x4fc1d3(0x564)]++;continue;case'2':var _0x5e34bb=_0x58a2dd['hookP'+_0x4fc1d3(0x206)+'x']({'typeName':_0x322e4f,'methodName':_0x3f4c6c,'params':_0x450076,'returnType':_0xd0154},_0x48edab);continue;case'3':_0x3da5f1[_0x391bcb]=_0x5e34bb;continue;case'4':_0x5e34bb[_0x4fc1d3(0x4bd)+'ed']=_0x4953a3!==![];continue;}break;}}}function _0x4533bf(){var _0x4ebc07=_0x47e283;_0x57a957[_0x4ebc07(0x28d)]('jaYUV','RjGOr')?_0x1e8382[_0x4ebc07(0x50f)]():(_0x5daa3f[_0x4ebc07(0x628)+'wColo'+'r']=_0x29555c,_0x3ef234[_0x4ebc07(0x628)+_0x4ebc07(0x342)]=0x2541+0x2035+-0x4568,_0x40b210['fill'](),_0x5636df[_0x4ebc07(0x628)+'wBlur']=0x7c+-0x4*0x41b+-0x2*-0x7f8);}function _0x2b63b6(){var _0x3b367d=_0x47e283;if(_0x1e59ac)return;_0x1e59ac=!![],window[_0x3b367d(0x2e7)+'entLi'+_0x3b367d(0x196)+'r']('keydo'+'wn',_0x21238c,!![]),window['addEv'+'entLi'+_0x3b367d(0x196)+'r']('keyup',_0x17373f,!![]),window[_0x3b367d(0x2e7)+'entLi'+'stene'+'r'](_0x57a957['xRIuR'],_0x3c9b87,!![]),window[_0x3b367d(0x2e7)+'entLi'+'stene'+'r'](_0x57a957[_0x3b367d(0x2f1)],_0x36ad3e,!![]),window[_0x3b367d(0x2e7)+_0x3b367d(0x3ef)+_0x3b367d(0x196)+'r'](_0x57a957[_0x3b367d(0x33f)],_0x4533bf);}function _0x568df9(_0x4cadc4){var _0x23fb4c=_0x47e283,_0x2c3dda=_0x16b7ac[_0x4cadc4]||[],_0x1323dc=performance['now']();while(_0x2c3dda['lengt'+'h']&&_0x1323dc-_0x2c3dda[0xab*-0x3+0x1d51+0x4*-0x6d4]>0x25ab+0xdf*-0x23+-0x1*0x346)_0x2c3dda[_0x23fb4c(0x163)]();return _0x2c3dda['lengt'+'h'];}function _0x4b886e(_0x3827c6){var _0x3d19bc=_0x47e283;if(document[_0x3d19bc(0x14b)]&&(_0x57a957['ocgHs'](document[_0x3d19bc(0x2ff)+_0x3d19bc(0x307)],_0x3d19bc(0x63b)+_0x3d19bc(0x1ca)+'e')||document['ready'+_0x3d19bc(0x307)]===_0x57a957[_0x3d19bc(0x61b)]))_0x3827c6();else document[_0x3d19bc(0x2e7)+_0x3d19bc(0x3ef)+_0x3d19bc(0x196)+'r']('DOMCo'+'ntent'+_0x3d19bc(0x29b)+'d',_0x3827c6,{'once':!![]});}_0x57a957[_0x47e283(0x19b)](_0x4b886e,()=>{var _0x389ead=_0x47e283,_0x5511ff={'LNmYK':_0x57a957[_0x389ead(0x4d8)],'abKcL':_0x389ead(0x51b),'Iaylo':'kour-'+_0x389ead(0x187)+_0x389ead(0x1d0)+_0x389ead(0x23b)+'t','MLIza':'kour-'+_0x389ead(0x287)+_0x389ead(0xf7)+'-pare'+'nt','CEMxU':_0x389ead(0x261)+'creen'+'-banr'+'s','qnCOI':function(_0x336527,_0x4e7cd4){var _0x3db30c=_0x389ead;return _0x57a957[_0x3db30c(0x138)](_0x336527,_0x4e7cd4);},'dLKSw':'none','KlcGp':function(_0x3f515b){return _0x3f515b();},'FQRLJ':function(_0x10a7cb,_0x1e0bb4){var _0x5b3fef=_0x389ead;return _0x57a957[_0x5b3fef(0x3c7)](_0x10a7cb,_0x1e0bb4);},'esITS':_0x57a957[_0x389ead(0x282)],'pFMGL':_0x389ead(0x48e),'ffxTV':function(_0x539034,_0x17da8f){return _0x539034(_0x17da8f);},'tJUwY':function(_0x4486c3,_0x28a220){return _0x4486c3>=_0x28a220;},'aOsGg':function(_0x8cbcfe,_0x587762){return _0x8cbcfe-_0x587762;},'qMAlo':function(_0x1d152c){var _0x409ed6=_0x389ead;return _0x57a957[_0x409ed6(0x49f)](_0x1d152c);},'qIbDk':function(_0x357a46,_0xd01538){return _0x357a46(_0xd01538);},'eBsIC':_0x389ead(0x3bc),'LzKCY':_0x389ead(0x5d7),'fkibM':function(_0x194e04,_0x413f68){return _0x194e04!==_0x413f68;},'hpHFN':_0x389ead(0x3e4),'nlIOB':_0x389ead(0x5dc)+'check'+'ed','PLpxp':function(_0x1f0e6c,_0x582118){return _0x57a957['fpkiZ'](_0x1f0e6c,_0x582118);},'uXufS':_0x389ead(0x555)+'n','YurWQ':_0x389ead(0x125),'fOhuT':function(_0x34b93a,_0x3052fa){return _0x57a957['nBqNk'](_0x34b93a,_0x3052fa);},'kpLni':function(_0x3ed487,_0x4d47f5){return _0x3ed487-_0x4d47f5;},'fMOdD':'3|1|5'+_0x389ead(0x50b)+'0','WpAAR':function(_0x4b4608,_0x15e300,_0x51eec8,_0xda4c3c,_0x5831fd){var _0x5c246c=_0x389ead;return _0x57a957[_0x5c246c(0x292)](_0x4b4608,_0x15e300,_0x51eec8,_0xda4c3c,_0x5831fd);},'EvRhs':_0x57a957[_0x389ead(0x26d)],'EZjiB':function(_0x1ced44,_0x19039e,_0x47f6d9,_0x24bbfa,_0x2e164d){var _0x3be4ba=_0x389ead;return _0x57a957[_0x3be4ba(0x46b)](_0x1ced44,_0x19039e,_0x47f6d9,_0x24bbfa,_0x2e164d);},'QVHNu':function(_0x9243f6,_0x37d38d,_0x35c6f4,_0x3d0e34,_0x517ed5){var _0x430b42=_0x389ead;return _0x57a957[_0x430b42(0x292)](_0x9243f6,_0x37d38d,_0x35c6f4,_0x3d0e34,_0x517ed5);},'gVBcL':_0x57a957[_0x389ead(0x198)],'zYjdc':'sk-ra'+'nge','IEYDv':_0x389ead(0x525),'JAaOL':_0x57a957[_0x389ead(0x5b2)],'UzVoc':_0x57a957[_0x389ead(0x20a)],'koASC':_0x57a957[_0x389ead(0x632)],'YREXt':function(_0xc61330,_0x5dffd6){return _0xc61330(_0x5dffd6);},'eEoHZ':_0x57a957[_0x389ead(0x295)],'vvCVa':_0x57a957[_0x389ead(0x33c)],'rIjAl':'color','IjucV':_0x57a957['JRqyG'],'gFYik':'sk-bt'+'n','KtwEl':_0x57a957[_0x389ead(0x221)],'IDjmI':_0x389ead(0x254)+_0x389ead(0x10e)+'e.App'+_0x389ead(0x1f5)+_0x389ead(0x562),'CJoZP':_0x57a957[_0x389ead(0x1a9)],'COLEd':function(_0x1270c,_0x167cec){var _0x1431c2=_0x389ead;return _0x57a957[_0x1431c2(0x1a7)](_0x1270c,_0x167cec);},'xQLZP':function(_0x5afd94,_0x5f2d50){var _0x46708e=_0x389ead;return _0x57a957[_0x46708e(0xe7)](_0x5afd94,_0x5f2d50);},'UKMlt':_0x389ead(0x65b)+'d','ZcncB':_0x57a957[_0x389ead(0x207)],'BZISr':_0x389ead(0x3ed)+'s','sTWSA':function(_0x134744,_0x4e5d13,_0x510e2b,_0x187ce1){return _0x134744(_0x4e5d13,_0x510e2b,_0x187ce1);},'TysmS':function(_0x50268d,_0x251ace,_0x173b91){var _0x306bc6=_0x389ead;return _0x57a957[_0x306bc6(0x476)](_0x50268d,_0x251ace,_0x173b91);},'gdWXX':function(_0x39662b,_0x5f663,_0x505c54){return _0x39662b(_0x5f663,_0x505c54);},'PgyYD':function(_0x2eb310){return _0x2eb310();},'jpVtE':function(_0x57ae71,_0x2142ef,_0x3c99e0){return _0x57ae71(_0x2142ef,_0x3c99e0);},'oAoHD':_0x389ead(0x393)+'oil','DtnDr':_0x57a957[_0x389ead(0x32b)],'DhbGL':function(_0x4c8768,_0x458199){return _0x4c8768!==_0x458199;},'DuoBo':_0x389ead(0x25a),'ikUoc':_0x57a957[_0x389ead(0x220)],'iQQoQ':function(_0x3996bf){return _0x3996bf();},'mZRTs':function(_0x40fe6d,_0x382519){return _0x40fe6d!==_0x382519;},'iYGcU':function(_0x8c9b04){return _0x8c9b04();},'BActr':'aatwY','sQQmQ':_0x389ead(0x1d5),'rrHsB':function(_0x23f8a5){return _0x23f8a5();},'gEade':_0x389ead(0x430),'Zulei':function(_0x3ba168){return _0x57a957['MUieF'](_0x3ba168);},'IxHCT':'optio'+'n','uIPOW':_0x57a957[_0x389ead(0x368)],'yWTfS':'AzACg','BEFMO':_0x389ead(0x128),'PpcHE':'byjJO','sfgXb':'FRERo','OzWKG':_0x389ead(0x3f6)+'s\x20Ove'+'rtide'+'Weapo'+'n.fir'+_0x389ead(0x52e)+'\x20to\x201'+'0%.\x20S'+_0x389ead(0x36f)+'\x20may\x20'+_0x389ead(0x405)+_0x389ead(0x39c)+'\x20shot'+'s.','leMkr':function(_0x473d48,_0x1a7546,_0x23dc37,_0x28393a,_0x21fe4a,_0x416403){return _0x473d48(_0x1a7546,_0x23dc37,_0x28393a,_0x21fe4a,_0x416403);},'XvCwF':_0x389ead(0x301)+_0x389ead(0x359)+'P]','Ghctd':function(_0x273e25,_0x1e77ef,_0x17151c,_0x4ca517){return _0x273e25(_0x1e77ef,_0x17151c,_0x4ca517);},'FiZmB':_0x57a957['jwWeP'],'gVTwh':_0x389ead(0x2e5)+_0x389ead(0x3f5)+_0x389ead(0x1b4)+'pon\x27s'+'\x20cach'+'ed\x20am'+_0x389ead(0x5d8)+_0x389ead(0x158)+_0x389ead(0x46c)+'\x20200m'+'s.','bTryo':function(_0x45fb92,_0x4d9993){return _0x57a957['DItQS'](_0x45fb92,_0x4d9993);},'ZwCSf':function(_0x3b78f6,_0x6cf675){var _0x426d93=_0x389ead;return _0x57a957[_0x426d93(0x138)](_0x3b78f6,_0x6cf675);},'OMuKE':_0x389ead(0x2a1),'qpLuU':_0x57a957['UWCjI'],'PbGVZ':_0x57a957['NoIhe'],'lcINa':_0x57a957['cWDzF'],'PfqPH':function(_0x474423,_0x1480cd){var _0x1faf27=_0x389ead;return _0x57a957[_0x1faf27(0x640)](_0x474423,_0x1480cd);},'pisAl':function(_0x55ce51,_0x583812){return _0x55ce51!==_0x583812;},'KBviO':function(_0x155223,_0x3931a7,_0x34adca,_0x22238d){var _0x4c8602=_0x389ead;return _0x57a957[_0x4c8602(0x1f7)](_0x155223,_0x3931a7,_0x34adca,_0x22238d);},'ExjZS':_0x57a957[_0x389ead(0x267)],'MDSFo':_0x57a957[_0x389ead(0x1a4)],'VyyMk':function(_0x21bd3e,_0x27b35c,_0x17e746,_0x333d1f,_0x46b602,_0x1e04fc){return _0x21bd3e(_0x27b35c,_0x17e746,_0x333d1f,_0x46b602,_0x1e04fc);},'tXHkZ':_0x389ead(0x1ba)+'rokes','UPuFb':_0x389ead(0x2aa)+_0x389ead(0x562),'lwXgr':function(_0xd5159d,_0x467de4,_0x2764a9,_0x54eab7){var _0x1292b9=_0x389ead;return _0x57a957[_0x1292b9(0x1d1)](_0xd5159d,_0x467de4,_0x2764a9,_0x54eab7);},'mipqb':'CPS\x20r'+_0x389ead(0x193)+'t','eyDgM':function(_0x2cb97f,_0x2ff6a2,_0x1f87bc,_0x1b34a3,_0x4cbd69,_0x23b963){return _0x57a957['cdEJk'](_0x2cb97f,_0x2ff6a2,_0x1f87bc,_0x1b34a3,_0x4cbd69,_0x23b963);},'vRKsq':_0x57a957['FdqIQ'],'gCSqZ':function(_0x11323d,_0x595a1b,_0x2d21e1,_0x18c014,_0x92bd91,_0x59d932){return _0x11323d(_0x595a1b,_0x2d21e1,_0x18c014,_0x92bd91,_0x59d932);},'cKHTK':_0x389ead(0x358)+_0x389ead(0x5ad),'FTuUI':function(_0x3fef82,_0x253986,_0x17dfca,_0x162985){return _0x3fef82(_0x253986,_0x17dfca,_0x162985);},'CCLxs':_0x389ead(0x604)+_0x389ead(0x454)+_0x389ead(0x5e5)+_0x389ead(0x4be)+_0x389ead(0x294)+_0x389ead(0x575),'Piexr':function(_0x4eaf09,_0x28b164,_0x58de1d,_0x1c9162,_0x576fc9,_0x4d7e58){return _0x4eaf09(_0x28b164,_0x58de1d,_0x1c9162,_0x576fc9,_0x4d7e58);},'hDVFu':function(_0x4611d2,_0x4d5d99){return _0x4611d2(_0x4d5d99);},'ODXMO':'Appli'+'es\x20on'+'\x20relo'+'ad.\x20I'+_0x389ead(0xb8)+'ches\x20'+'load\x20'+_0x389ead(0x4fe)+'fe\x20mo'+_0x389ead(0x16a)+'he\x20fr'+_0x389ead(0x4a8)+_0x389ead(0x503)+'ok-re'+'lated'+_0x389ead(0x414)+_0x389ead(0x5cc)+_0x389ead(0x21d)+'hooks'+_0x389ead(0x4f7)+_0x389ead(0x540)+_0x389ead(0x434),'KngVR':function(_0x5e4ca1,_0xab7cfb){return _0x5e4ca1(_0xab7cfb);},'lNPEJ':function(_0x268803,_0x22e938,_0x75825a,_0x14815d){return _0x268803(_0x22e938,_0x75825a,_0x14815d);},'rWbvZ':function(_0x2036e4,_0x3ef952,_0x466b65,_0x29152b){return _0x2036e4(_0x3ef952,_0x466b65,_0x29152b);},'CaAgd':'godDi'+_0x389ead(0x123)+'ealth'+_0x389ead(0xa9)+'lDie)','pNbgl':function(_0x2ec388,_0x5995c4,_0x1d0ce0){return _0x2ec388(_0x5995c4,_0x1d0ce0);},'uBJWO':'noRec'+_0x389ead(0x5e4)+'Recoi'+_0x389ead(0x61a)+'on.Ti'+_0x389ead(0x5c4),'Zizpr':function(_0x1de73e,_0x7ddf5,_0x41cd37){var _0x39a77c=_0x389ead;return _0x57a957[_0x39a77c(0x5e3)](_0x1de73e,_0x7ddf5,_0x41cd37);},'gwiDC':_0x389ead(0x172)+'re\x20(S'+_0x389ead(0x338)+'eRunn'+'ing\x20+'+'\x20IsGr'+'ounde'+'d)','mdEMG':_0x57a957[_0x389ead(0x44a)],'vzfRo':_0x389ead(0x216)+_0x389ead(0x3a0)+'odeSt'+'age\x20d'+_0x389ead(0x5c5)+_0x389ead(0x26c)+_0x389ead(0x13a)+_0x389ead(0x2c6)+'via\x20S'+_0x389ead(0x4f9)+_0x389ead(0x5f5)+'on().'+_0x389ead(0x47e)+'\x20ON.','QLStM':_0x389ead(0x103)+_0x389ead(0xbc)+_0x389ead(0x4f5)+_0x389ead(0x47a)+_0x389ead(0x327)+_0x389ead(0x50a)+_0x389ead(0x43f)+_0x389ead(0x45c)+'even\x20'+'with\x20'+_0x389ead(0x576)+'on.','RblKc':_0x389ead(0x2d9)+_0x389ead(0x1e9)+'e\x20ser'+_0x389ead(0x167)+'isibl'+_0x389ead(0x5a2)+_0x389ead(0xab),'uWFHO':function(_0x20f216,_0x1ee053,_0x35028f,_0x441370){return _0x20f216(_0x1ee053,_0x35028f,_0x441370);},'wUNAi':'Sakur'+'a\x20Kou'+_0x389ead(0x336),'lAEpT':_0x57a957[_0x389ead(0x281)],'ZQLJS':function(_0x27ad21,_0x5468ba){return _0x27ad21===_0x5468ba;},'TqkSW':'bZQsW','MCNzy':function(_0x581077,_0x504a93){return _0x57a957['NGeGo'](_0x581077,_0x504a93);},'FXkoO':function(_0x59be10,_0x474286){var _0x3cd958=_0x389ead;return _0x57a957[_0x3cd958(0x5ed)](_0x59be10,_0x474286);},'MsSpa':_0x57a957[_0x389ead(0x154)],'Tnogr':function(_0x5de5e5,_0x5935e2){return _0x5de5e5+_0x5935e2;},'gcgMH':_0x57a957[_0x389ead(0x248)],'zYNie':_0x389ead(0x3ba)+_0x389ead(0x15e)+'t\x20','uRGYa':_0x389ead(0x5a8),'DMNNN':_0x57a957[_0x389ead(0xfb)],'FDOoE':_0x57a957[_0x389ead(0x2f2)],'aPGvp':_0x389ead(0x1c1)+'de','tjVni':_0x57a957['vDmCB'],'LsExI':_0x389ead(0x4f2)+'r','rNNhh':_0x57a957[_0x389ead(0x29d)],'dPpRG':_0x57a957['xmISz'],'ZTIhB':'kours'+'trike'+_0x389ead(0x5af)+_0x389ead(0x1e3),'iBosJ':_0x57a957[_0x389ead(0x57d)],'awtMV':'mn-co'+'ls','SQLeS':'<smal'+'l>','Augxb':_0x57a957['Arkda'],'ToFXl':function(_0x53425b){return _0x57a957['qYCuU'](_0x53425b);}};_0x17df89[_0x389ead(0x303)+'ck']&&(_0x57a957[_0x389ead(0x28d)]('hHzcQ','FgBGF')?setInterval(()=>{var _0x3d92ce=_0x389ead;try{if(_0x5511ff[_0x3d92ce(0x4d7)]!==_0x5511ff['abKcL'])for(var _0x2a60a4 of['kour-'+'io_30'+_0x3d92ce(0x5b0)+'-pare'+'nt',_0x5511ff['Iaylo'],_0x5511ff['MLIza'],_0x3d92ce(0x261)+_0x3d92ce(0x3bd)+_0x3d92ce(0x515)+'s']){var _0x5133aa=document[_0x3d92ce(0xcc)+_0x3d92ce(0x14e)+_0x3d92ce(0x1be)](_0x2a60a4);if(_0x5133aa&&_0x2a60a4===_0x5511ff['CEMxU']){var _0x5ee6f2=_0x5133aa[_0x3d92ce(0x1f9)+'ren'];for(var _0x3d0263=0xc*-0xf3+0x14b1*-0x1+0x1*0x2015;_0x3d0263<_0x5ee6f2[_0x3d92ce(0x5d9)+'h'];_0x3d0263++){if(_0x5ee6f2[_0x3d0263]['id']&&_0x5511ff[_0x3d92ce(0x1e4)](_0x5ee6f2[_0x3d0263]['id']['index'+'Of'](_0x3d92ce(0x406)+'io_'),-0x27a*0x1+0x1493+-0x1219))_0x5ee6f2[_0x3d0263][_0x3d92ce(0x3af)]['displ'+'ay']=_0x3d92ce(0x1ed);}}else{if(_0x5133aa)_0x5133aa['style']['displ'+'ay']=_0x5511ff['dLKSw'];}}else _0x3c917f={..._0x540e1d},_0x10c617(),_0x45e678[_0x3d92ce(0x4e8)+'d']();}catch(_0x39df88){}},-0x18b6*-0x1+0x48*0x88+-0x1a*0x21f):(_0x3a471b[_0x389ead(0x393)+'oil']=_0x3343d1,_0x5511ff[_0x389ead(0x305)](_0x2f3bb3),_0x370ff9('noRec'+'oil',_0x488e5a)));var _0x52d17c=document[_0x389ead(0x40e)+_0x389ead(0x4d3)+_0x389ead(0x1cc)]('canva'+'s');_0x52d17c['style']['cssTe'+'xt']=_0x57a957['NUfQW'];var _0x4a3b31=_0x52d17c[_0x389ead(0x569)+'ntext']('2d');function _0x26b935(){var _0xd0843=_0x389ead;try{var _0x13820a=document[_0xd0843(0x261)+'creen'+_0xd0843(0x179)+'nt'],_0x316256=_0x13820a&&_0x13820a[_0xd0843(0x3fc)+'me']!==_0x57a957[_0xd0843(0x2d4)]?_0x13820a:document[_0xd0843(0x14b)]||document[_0xd0843(0x110)+'entEl'+_0xd0843(0x14e)];if(_0x57a957[_0xd0843(0x34d)](_0x52d17c[_0xd0843(0x23b)+'tNode'],_0x316256))_0x316256[_0xd0843(0x47d)+_0xd0843(0x2db)+'d'](_0x52d17c);}catch(_0x46c197){try{document[_0xd0843(0x14b)][_0xd0843(0x47d)+_0xd0843(0x2db)+'d'](_0x52d17c);}catch(_0x5d17bb){}}}var _0x7f1dff={'w':0x0,'h':0x0,'dpr':0x0};function _0x494d09(){var _0x1dfee1=_0x389ead,_0x259b45=window['devic'+'ePixe'+_0x1dfee1(0x431)+'o']||0x19*-0x42+0x1fea+-0x1977,_0x380e8d=window[_0x1dfee1(0x374)+_0x1dfee1(0x5a5)],_0x3b81fd=window[_0x1dfee1(0x374)+_0x1dfee1(0x280)+'t'];if(_0x380e8d===_0x7f1dff['w']&&_0x3b81fd===_0x7f1dff['h']&&_0x259b45===_0x7f1dff['dpr'])return;_0x7f1dff['w']=_0x380e8d,_0x7f1dff['h']=_0x3b81fd,_0x7f1dff['dpr']=_0x259b45,_0x52d17c[_0x1dfee1(0x11b)]=Math['round'](_0x380e8d*_0x259b45),_0x52d17c[_0x1dfee1(0x55b)+'t']=Math['round'](_0x57a957[_0x1dfee1(0x308)](_0x3b81fd,_0x259b45)),_0x4a3b31[_0x1dfee1(0x2e0)+_0x1dfee1(0x18d)+'rm'](_0x259b45,-0x2*-0x134a+-0xa31+0x1*-0x1c63,-0x1d0f+-0x3*-0xb1+0x1*0x1afc,_0x259b45,0x1649+0x1ee0+-0x1f*0x1b7,0x225+-0x4*-0x231+-0x15*0x85);}var _0x3369c0=-0x2226+-0xfd3*0x2+0x41cc,_0x356214=performance[_0x389ead(0x24f)](),_0x1848dc=0x1*0x90b+-0x938+0x2d;function _0x1c068f(_0x11d901){var _0x53d1c8=_0x389ead,_0x8ed9d8={'ZjdcS':_0x53d1c8(0x4d5)+_0x53d1c8(0x457)+_0x53d1c8(0x217)+_0x53d1c8(0x4da)+'5)','Nblng':_0x57a957['vfgRo'],'ladGS':function(_0x40037c,_0x4c1b70){return _0x40037c+_0x4c1b70;},'IhfMg':function(_0x813600,_0x398031){return _0x813600*_0x398031;},'lYBaL':_0x53d1c8(0x3e6)+_0x53d1c8(0xfd)+'-seri'+'f,sys'+'tem-u'+_0x53d1c8(0x164)+_0x53d1c8(0x118)+'if','bCrAB':function(_0x354912,_0x49a2b6){var _0x3d9337=_0x53d1c8;return _0x57a957[_0x3d9337(0x437)](_0x354912,_0x49a2b6);},'fLVjP':function(_0x4fdfa2,_0x2811ea){return _0x4fdfa2+_0x2811ea;},'CaMLt':_0x57a957['ArSfQ'],'Erndl':function(_0x52801b,_0x4a3a70){return _0x52801b/_0x4a3a70;}},_0x517297=_0x57a957['fpkiZ'](Number,_0x17df89['ksSca'+'le'])||0x2192+0x1*0x483+0x130a*-0x2,_0x50e60a=(-0x3*-0x33d+0x1704+-0x2099)*_0x517297,_0x22c835=_0x57a957['SZWuw'](0x4*0x801+0x2630+-0x4630*0x1,_0x517297),_0x55d82e=_0x57a957['PBRwP'](_0x57a957['qMklA'](_0x50e60a,-0x1d68*-0x1+-0x1*-0x172d+0x2*-0x1a49),_0x57a957[_0x53d1c8(0x308)](_0x22c835,0x12ad*0x1+0x1f08+-0x3*0x1091)),_0x5ee6a9=_0x57a957[_0x53d1c8(0x381)](_0x50e60a,0x1*-0xde+0xb4+0x2d)+_0x22c835*(0x2*0x7de+-0x9d*0x2d+-0x1*-0xbdf),_0x87600f=_0x17df89[_0x53d1c8(0x208)],_0x52f26f=_0x87600f==='br'?_0x11d901['right']-(0x1*0x13d9+-0x16*-0x112+-0x1*0x2b55)-_0x55d82e:_0x57a957[_0x53d1c8(0x45d)](_0x11d901[_0x53d1c8(0x48e)],0x1*0x1107+-0x102f+-0xc8),_0x38827f=_0x87600f==='ml'?_0x11d901['top']+_0x11d901[_0x53d1c8(0x55b)+'t']/(0x1e2c+-0x1ad8+-0x352)-_0x5ee6a9/(-0x1*0x2081+-0x107d*0x1+0x3100):_0x57a957['dsjTz'](_0x57a957[_0x53d1c8(0x5a6)](_0x11d901[_0x53d1c8(0x2ea)+'m'],_0x5ee6a9),_0x87600f==='bl'?0x1*-0x128e+0xc4d+0x6a1:-0xd*-0x75+-0xa*-0x43+-0x7f9*0x1),_0x4eb60b=(_0x326827,_0x566eab,_0x596ee9,_0x1f2464,_0x53167d,_0x1890f9,_0x5541c9)=>{var _0x2af42d=_0x53d1c8,_0x219b93=_0x1e8382[_0x2af42d(0x351)](_0x566eab);_0x4a3b31['save'](),_0x4a3b31['begin'+'Path']();if(_0x4a3b31['round'+_0x2af42d(0x4b9)])_0x4a3b31['round'+_0x2af42d(0x4b9)](_0x596ee9,_0x1f2464,_0x53167d,_0x1890f9,(-0x254a+-0x145a*0x1+0x39ab)*_0x517297);else _0x4a3b31['rect'](_0x596ee9,_0x1f2464,_0x53167d,_0x1890f9);_0x4a3b31['fillS'+'tyle']=_0x219b93?_0x8ed9d8[_0x2af42d(0x153)]:_0x2af42d(0x4d5)+_0x2af42d(0x47f)+'16,0.'+'7)',_0x4a3b31[_0x2af42d(0x62a)](),_0x4a3b31['lineW'+'idth']=-0x8ba+-0xf5a+0x807*0x3,_0x4a3b31[_0x2af42d(0x483)+_0x2af42d(0x577)+'e']=_0x219b93?_0x3c4a43:'rgba('+_0x2af42d(0x457)+_0x2af42d(0x217)+_0x2af42d(0x4e9)+'5)',_0x4a3b31['strok'+'e'](),_0x219b93&&(_0x4a3b31['shado'+'wColo'+'r']=_0xa76b4b,_0x4a3b31[_0x2af42d(0x628)+_0x2af42d(0x342)]=-0x6d*-0x59+-0xb38+-0x5*0x553,_0x4a3b31[_0x2af42d(0x62a)](),_0x4a3b31[_0x2af42d(0x628)+_0x2af42d(0x342)]=0x1b71*0x1+0x1a30+-0x35a1),_0x4a3b31['fillS'+'tyle']=_0x219b93?'#fff':_0x2af42d(0x4d5)+_0x2af42d(0x3a5)+'35,24'+'0,0.8'+')',_0x4a3b31[_0x2af42d(0xe2)+'lign']=_0x8ed9d8[_0x2af42d(0x2cb)],_0x4a3b31[_0x2af42d(0x4ce)+'aseli'+'ne']='middl'+'e',_0x4a3b31[_0x2af42d(0x18b)]=_0x8ed9d8['ladGS'](_0x2af42d(0x285)+Math[_0x2af42d(0x40d)](_0x8ed9d8[_0x2af42d(0x10a)](-0x46*-0x38+0xb2+-0xff6,_0x517297)),_0x8ed9d8['lYBaL']),_0x4a3b31['fillT'+_0x2af42d(0x54a)](_0x326827,_0x596ee9+_0x8ed9d8['bCrAB'](_0x53167d,-0x1e7c+0xaad*0x3+-0x189),_0x1f2464+_0x1890f9/(-0x651+0x272*-0x4+0x101b)-(_0x5541c9?(0x1d0+0x2588+-0x2753)*_0x517297:0x20b8+-0x1890+-0x6*0x15c)),_0x5541c9&&(_0x4a3b31['font']=_0x8ed9d8[_0x2af42d(0x290)](_0x8ed9d8[_0x2af42d(0x34c)](_0x2af42d(0x3b6),Math['round']((-0xc4d*-0x3+0x2*-0x683+-0x17d8)*_0x517297)),'px\x20ui'+'-sans'+_0x2af42d(0x3a9)+'f,sys'+'tem-u'+'i,san'+_0x2af42d(0x118)+'if'),_0x4a3b31['fillS'+'tyle']=_0x219b93?_0x2af42d(0x498):_0x8ed9d8[_0x2af42d(0x5a1)],_0x4a3b31['fillT'+'ext'](_0x5541c9,_0x8ed9d8['fLVjP'](_0x596ee9,_0x8ed9d8[_0x2af42d(0x19d)](_0x53167d,-0x5f*0x54+0x24a2+-0x574)),_0x1f2464+_0x8ed9d8[_0x2af42d(0x19d)](_0x1890f9,-0x5*-0x515+-0x465+0xa81*-0x2)+(-0x1882+0x24e1+-0xc57)*_0x517297)),_0x4a3b31[_0x2af42d(0x4b7)+'re']();};_0x4eb60b('W','KeyW',_0x57a957[_0x53d1c8(0x4c6)](_0x52f26f,_0x50e60a)+_0x22c835,_0x38827f,_0x50e60a,_0x50e60a),_0x4eb60b('A',_0x57a957['MANyx'],_0x52f26f,_0x38827f+_0x50e60a+_0x22c835,_0x50e60a,_0x50e60a),_0x57a957[_0x53d1c8(0x12a)](_0x4eb60b,'S',_0x53d1c8(0x397),_0x57a957[_0x53d1c8(0x27e)](_0x52f26f,_0x50e60a)+_0x22c835,_0x38827f+_0x50e60a+_0x22c835,_0x50e60a,_0x50e60a),_0x4eb60b('D','KeyD',_0x57a957['nBqNk'](_0x52f26f,_0x57a957[_0x53d1c8(0xc0)](_0x50e60a,_0x22c835)*(0x8*-0x15b+0x6fb+-0x3df*-0x1)),_0x38827f+_0x50e60a+_0x22c835,_0x50e60a,_0x50e60a);var _0x5f503=_0x57a957[_0x53d1c8(0x437)](_0x55d82e-_0x22c835,-0x2183+-0x29*0xd+0x239a),_0x2d5b9c=_0x38827f+(_0x50e60a+_0x22c835)*(-0xd49+0x5*-0x18b+0x1502);_0x4eb60b(_0x57a957['PmMqc'],_0x57a957[_0x53d1c8(0x249)],_0x52f26f,_0x2d5b9c,_0x5f503,_0x50e60a,_0x17df89['ksCps']?_0x568df9(0x1cd0+0x394*-0x3+0x1213*-0x1)+_0x57a957['XXexl']:''),_0x4eb60b('RMB',_0x53d1c8(0x63d)+'3',_0x57a957['Gcsmw'](_0x57a957[_0x53d1c8(0x4c6)](_0x52f26f,_0x5f503),_0x22c835),_0x2d5b9c,_0x5f503,_0x50e60a,_0x17df89['ksCps']?_0x57a957[_0x53d1c8(0x19b)](_0x568df9,-0x1*0x25a2+-0x186e+0x3e13)+'\x20CPS':''),_0x4eb60b('',_0x57a957[_0x53d1c8(0x560)],_0x52f26f,_0x2d5b9c+_0x50e60a+_0x22c835,_0x55d82e,_0x57a957['SZWuw'](_0x50e60a,0x16e7+-0x114f*0x2+0xbb7+0.45));}function _0x4c915f(_0x2d0dc2){var _0x4fc518=_0x389ead,_0x2e86b9=_0x57a957['VnMVe'](_0x2d0dc2['width'],0xb48+0xde*0x4+-0xebe),_0x5bbe34=_0x2d0dc2[_0x4fc518(0x55b)+'t']/(0x775+-0x1dff+0x1*0x168c),_0x1d2290=Number(_0x17df89['chSiz'+'e'])||0xd43+0x198*0x4+-0x13a2,_0x1d55e5=/^#[0-9a-f]{6}$/i[_0x4fc518(0x41a)](_0x17df89['chCol'+'or'])?_0x17df89['chCol'+'or']:'#ff6b'+'9d';_0x4a3b31[_0x4fc518(0x3c9)](),_0x4a3b31[_0x4fc518(0x483)+_0x4fc518(0x577)+'e']=_0x1d55e5,_0x4a3b31['fillS'+_0x4fc518(0x5a4)]=_0x1d55e5,_0x4a3b31['lineW'+'idth']=Math[_0x4fc518(0x26b)](0xf53+0x1370+-0x22c2+0.5,(0x104e+0x5*0x33e+0x49*-0x72)*_0x1d2290),_0x4a3b31[_0x4fc518(0x628)+_0x4fc518(0x11d)+'r']=_0x1d55e5,_0x4a3b31['shado'+_0x4fc518(0x342)]=-0x1*0xb37+-0x21f3+-0x10*-0x2d3;var _0x1bffd3=_0x57a957['ZazdM'](0x756+-0x1*0x782+0x32,_0x1d2290),_0x5a504a=(0x2b*0x82+-0x76*0x41+-0x57*-0x18)*_0x1d2290;_0x4a3b31[_0x4fc518(0x15f)+_0x4fc518(0x180)](),_0x4a3b31['moveT'+'o'](_0x57a957[_0x4fc518(0x506)](_0x2e86b9,_0x1bffd3)-_0x5a504a,_0x5bbe34),_0x4a3b31['lineT'+'o'](_0x2e86b9-_0x1bffd3,_0x5bbe34),_0x4a3b31[_0x4fc518(0x4f8)+'o'](_0x2e86b9+_0x1bffd3,_0x5bbe34),_0x4a3b31['lineT'+'o'](_0x57a957[_0x4fc518(0x17f)](_0x2e86b9,_0x1bffd3)+_0x5a504a,_0x5bbe34),_0x4a3b31[_0x4fc518(0x4f8)+'o'](_0x2e86b9,_0x5bbe34-_0x1bffd3-_0x5a504a),_0x4a3b31['lineT'+'o'](_0x2e86b9,_0x57a957['dsjTz'](_0x5bbe34,_0x1bffd3)),_0x4a3b31['moveT'+'o'](_0x2e86b9,_0x5bbe34+_0x1bffd3),_0x4a3b31[_0x4fc518(0x392)+'o'](_0x2e86b9,_0x57a957[_0x4fc518(0x45d)](_0x5bbe34,_0x1bffd3)+_0x5a504a),_0x4a3b31[_0x4fc518(0x483)+'e'](),_0x4a3b31[_0x4fc518(0x15f)+'Path'](),_0x4a3b31['arc'](_0x2e86b9,_0x5bbe34,(0x6b*0x34+0x95a+-0x1*0x1f15+0.6000000000000001)*_0x1d2290,-0x4c5*0x5+0x1*0x4cd+-0x5c*-0x35,Math['PI']*(-0x260a+-0x3b7+0x29c3)),_0x4a3b31[_0x4fc518(0x62a)](),_0x4a3b31[_0x4fc518(0x4b7)+'re']();}function _0x57f7e2(_0x5e155d){var _0x14f555=_0x389ead,_0x1bb7a5={'GZshA':function(_0x4a2330){return _0x4a2330();}};if(_0x14f555(0xd1)==='evniI')_0x2d214f[_0x14f555(0x36a)+_0x14f555(0x442)+'e']=_0x34ec52,_0x1bb7a5[_0x14f555(0x4db)](_0x1c3af6);else{var _0x44a063=(_0x14f555(0x3c2)+_0x14f555(0x5ef)+_0x14f555(0x448)+'|4|6')['split']('|'),_0x2308f4=0x941+0x27*0xa9+0x7*-0x500;while(!![]){switch(_0x44a063[_0x2308f4++]){case'0':var _0x18a137=(_0x302e91,_0x3a7f6f)=>{var _0x5c40f6=_0x14f555;_0x4a3b31[_0x5c40f6(0x3f1)+'tyle']=_0x5511ff['FQRLJ'](_0x3a7f6f,_0x5c40f6(0x4d5)+_0x5c40f6(0x3a5)+_0x5c40f6(0x5db)+_0x5c40f6(0x2a6)+'5)'),_0x4a3b31[_0x5c40f6(0x38d)+'ext'](_0x302e91,_0x537ed3,_0x7da537),_0x7da537+=0xb*0x2c7+-0x3f5*-0x1+-0x2272;};continue;case'1':_0x4a3b31[_0x14f555(0x3c9)]();continue;case'2':_0x18a137('SAKUR'+_0x14f555(0x3e1)+_0x14f555(0xbd)+'1',_0x14f555(0xc9)+'9d');continue;case'3':_0x4a3b31['textB'+_0x14f555(0x25b)+'ne']=_0x5511ff['esITS'];continue;case'4':if(!_0xd5276e[_0x14f555(0x49e)+'oaded'])_0x18a137(_0x14f555(0x212)+_0x14f555(0x1bd)+'r\x20gam'+'e…','rgba('+_0x14f555(0x457)+'80,19'+_0x14f555(0x49d)+')');continue;case'5':if(_0x17df89[_0x14f555(0x494)])_0x18a137(_0x1848dc+'\x20FPS');continue;case'6':_0x4a3b31[_0x14f555(0x4b7)+'re']();continue;case'7':_0x4a3b31[_0x14f555(0xe2)+_0x14f555(0x14a)]=_0x5511ff['pFMGL'];continue;case'8':var _0x7da537=0x164*0x18+0x1578+0x2*-0x1b56,_0x537ed3=-0x74c+-0x655+0xdad;continue;case'9':_0x4a3b31[_0x14f555(0x18b)]='600\x201'+_0x14f555(0x461)+_0x14f555(0x175)+'ospac'+'e,mon'+_0x14f555(0x24a)+'e';continue;}break;}}}function _0x11b53f(){var _0x518081=_0x389ead;_0x5511ff[_0x518081(0x186)](requestAnimationFrame,_0x11b53f),_0x3369c0++;var _0x46060c=performance[_0x518081(0x24f)]();_0x5511ff[_0x518081(0x586)](_0x46060c-_0x356214,-0x1*0x1d83+0x2604+-0x68d)&&(_0x1848dc=Math[_0x518081(0x40d)](_0x3369c0*(-0x2*0x583+0x57*0x9+0xbdf)/_0x5511ff[_0x518081(0x2d2)](_0x46060c,_0x356214)),_0x3369c0=-0x24a2+-0x24ee+0x2*0x24c8,_0x356214=_0x46060c);_0x5511ff['qMAlo'](_0x494d09),_0x26b935(),_0x4a3b31['clear'+_0x518081(0x4b9)](0x7f8+-0x237c+0x1b84,-0x1*0x1035+0x20c6+-0x1091,_0x7f1dff['w'],_0x7f1dff['h']);var _0x549fd7={'left':0x0,'top':0x0,'right':_0x7f1dff['w'],'bottom':_0x7f1dff['h'],'width':_0x7f1dff['w'],'height':_0x7f1dff['h']};if(_0x17df89['cross'+_0x518081(0x345)])_0x5511ff[_0x518081(0x3d1)](_0x4c915f,_0x549fd7);if(_0x17df89['keyst'+_0x518081(0x4bb)])_0x5511ff[_0x518081(0x3d1)](_0x1c068f,_0x549fd7);_0x57f7e2(_0x549fd7);}var _0x1ec94a=document['creat'+_0x389ead(0x4d3)+_0x389ead(0x1cc)](_0x57a957[_0x389ead(0x20e)]);_0x1ec94a['id']=_0x57a957['OXOMk'],_0x1ec94a['style']['cssTe'+'xt']=_0x57a957[_0x389ead(0x649)];var _0x52636f=_0x1ec94a[_0x389ead(0x610)+'hShad'+'ow']({'mode':'open'});(document['body']||document[_0x389ead(0x110)+_0x389ead(0x3df)+_0x389ead(0x14e)])['appen'+'dChil'+'d'](_0x1ec94a);var _0x5324d7=![],_0xd72ac2={};try{if(_0x57a957[_0x389ead(0x3be)]('YKMbS',_0x57a957[_0x389ead(0x3aa)]))_0xd72ac2=JSON[_0x389ead(0x4ac)](localStorage['getIt'+'em'](_0x389ead(0x181)+'a.kou'+_0x389ead(0xd5)+'v1')||'{}');else{var _0x34aa8c=new _0x2bb417(_0x5d9980)[_0x389ead(0x479)+_0x389ead(0x360)](_0x48b1c1,_0x5511ff[_0x389ead(0x3f4)]);return _0x34aa8c?_0x34aa8c[_0x389ead(0x5f0)]():-0xd93*0x2+-0x1041+-0x29*-0x10f;}}catch(_0x2ab767){}function _0x584b4(){var _0x3ba3b1=_0x389ead,_0x3e4291={'MyJYH':_0x3ba3b1(0x406)+'io_','ikMEU':_0x3ba3b1(0x1ed)};if(_0x5511ff[_0x3ba3b1(0x1e4)](_0x3ba3b1(0x5b6),_0x5511ff[_0x3ba3b1(0x531)])){var _0x95b15d=_0x4c9946[_0x3ba3b1(0x54f)+'ve'];if(_0x95b15d)try{_0x95b15d[_0x3ba3b1(0x4bd)+'ed']=![];}catch(_0x1f86e0){}}else try{if(_0x5511ff[_0x3ba3b1(0x239)](_0x3ba3b1(0x10f),'OGvUf')){var _0x540bb4=_0x4ca28c['child'+'ren'];for(var _0x62c35e=-0x1baa+-0x19f8+0x1ad1*0x2;_0x62c35e<_0x540bb4['lengt'+'h'];_0x62c35e++){if(_0x540bb4[_0x62c35e]['id']&&_0x540bb4[_0x62c35e]['id'][_0x3ba3b1(0x5fa)+'Of'](_0x3e4291[_0x3ba3b1(0x22b)])===-0x19f8+0x99a+0x105e)_0x540bb4[_0x62c35e]['style'][_0x3ba3b1(0x421)+'ay']=_0x3e4291[_0x3ba3b1(0x486)];}}else localStorage[_0x3ba3b1(0x356)+'em']('sakur'+'a.kou'+_0x3ba3b1(0xd5)+'v1',JSON['strin'+'gify'](_0xd72ac2));}catch(_0x5ba7c9){}}function _0x47732a(_0x43a846,_0x20cb7e){var _0x8f0ffb=_0x389ead,_0x350cc4={'oMCJY':function(_0xf97cb1,_0x5bc796){return _0xf97cb1(_0x5bc796);}},_0xf2ad36=document[_0x8f0ffb(0x40e)+_0x8f0ffb(0x4d3)+'ent'](_0x5511ff[_0x8f0ffb(0x203)]);return _0xf2ad36[_0x8f0ffb(0x23c)]='butto'+'n',_0xf2ad36[_0x8f0ffb(0xf6)+'Name']='sk-sw'+_0x8f0ffb(0x60f),_0xf2ad36['setAt'+_0x8f0ffb(0x27c)+'te'](_0x5511ff[_0x8f0ffb(0x3b4)],_0x8f0ffb(0x629)+'h'),_0xf2ad36[_0x8f0ffb(0x184)+_0x8f0ffb(0x27c)+'te'](_0x8f0ffb(0x5dc)+_0x8f0ffb(0x243)+'ed',String(!!_0x43a846)),_0xf2ad36[_0x8f0ffb(0x55d)+'ck']=_0xe47b3c=>{var _0x502319=_0x8f0ffb;if(_0x5511ff['hpHFN']!==_0x502319(0x377)){_0xe47b3c['stopP'+_0x502319(0x1a6)+'ation']();var _0x437fa1=_0x5511ff[_0x502319(0x239)](_0xf2ad36[_0x502319(0x4ef)+'tribu'+'te'](_0x5511ff[_0x502319(0x1af)]),'true');_0xf2ad36['setAt'+'tribu'+'te'](_0x502319(0x5dc)+'check'+'ed',String(_0x437fa1)),_0x5511ff[_0x502319(0x5c6)](_0x20cb7e,_0x437fa1);}else _0x340bd8['class'+'List'][_0x502319(0x2f4)+'e']('on',_0x1c778d),_0x350cc4[_0x502319(0x447)](_0x28489b,_0x532737);},_0xf2ad36;}function _0x49935e(_0xcef8ec,_0x15eb80,_0x1ec67a,_0x9e13fa,_0x4d214b){var _0x198cc8=_0x389ead;if(_0x5511ff[_0x198cc8(0x276)]==='JvVWb'){var _0x1f8941=document['creat'+_0x198cc8(0x4d3)+_0x198cc8(0x1cc)](_0x198cc8(0x5a8));_0x1f8941[_0x198cc8(0xf6)+_0x198cc8(0x60c)]=_0x5511ff[_0x198cc8(0x29e)];var _0x40d327=document[_0x198cc8(0x40e)+'eElem'+'ent'](_0x5511ff[_0x198cc8(0x310)]);_0x40d327['type']='range',_0x40d327['class'+_0x198cc8(0x60c)]=_0x5511ff[_0x198cc8(0x512)],_0x40d327[_0x198cc8(0x516)]=_0x15eb80,_0x40d327[_0x198cc8(0x26b)]=_0x1ec67a,_0x40d327['step']=_0x9e13fa,_0x40d327['value']=_0xcef8ec;var _0x1438bc=document['creat'+_0x198cc8(0x4d3)+'ent'](_0x5511ff[_0x198cc8(0x4c1)]);_0x1438bc['class'+'Name']=_0x5511ff[_0x198cc8(0x499)],_0x1438bc[_0x198cc8(0xa3)+'onten'+'t']=_0x5511ff['YREXt'](String,_0xcef8ec);var _0x1342cf=()=>{var _0x50fa78=_0x198cc8;_0x1438bc[_0x50fa78(0xa3)+'onten'+'t']=String(_0x40d327[_0x50fa78(0x5f6)]),_0x1f8941['style']['setPr'+_0x50fa78(0x157)+'y'](_0x50fa78(0x5d4),_0x5511ff['fOhuT']((_0x40d327[_0x50fa78(0x5f6)]-_0x15eb80)/_0x5511ff[_0x50fa78(0x3d4)](_0x1ec67a,_0x15eb80)*(-0x200c+-0x6a3+0x2713*0x1),'%'));};return _0x40d327[_0x198cc8(0x35c)+'ut']=()=>{var _0x13f208=_0x198cc8;_0x1342cf(),_0x4d214b(Number(_0x40d327[_0x13f208(0x5f6)]));},_0x1342cf(),_0x1f8941[_0x198cc8(0x47d)+'d'](_0x40d327,_0x1438bc),_0x1f8941;}else{var _0x33daf7=_0x5511ff['fMOdD']['split']('|'),_0x595745=-0x1*-0x234a+-0xc*0x281+-0x53e;while(!![]){switch(_0x33daf7[_0x595745++]){case'0':_0x5511ff[_0x198cc8(0x5b4)](_0x369b6c,_0x47ada3,-0x1c35+-0x2bb*0x9+0x34e8,_0x5511ff[_0x198cc8(0x12c)],_0x3bf828);continue;case'1':_0x5511ff[_0x198cc8(0x21b)](_0x1d18bc,_0x2c4ec6,-0x2be+-0x18d1*-0x1+-0x15e7,_0x198cc8(0x100),_0x2b426a);continue;case'2':_0x5511ff[_0x198cc8(0x21b)](_0x5f02a5,_0x1f7926,-0x1c78+-0x1*0x2e1+0x1f75,_0x5511ff['EvRhs'],_0x51878f);continue;case'3':_0x5511ff['QVHNu'](_0x6a4ca2,_0x3b10f9,0x4*0x71f+-0xb1*0x2d+0x2c9,'f32',_0xc23949);continue;case'4':_0x1a42a9(_0x52a518,-0x579+0x1e1a+-0xd*0x1e1,_0x5511ff[_0x198cc8(0x12c)],_0x462cad);continue;case'5':_0x9f0640(_0x42f885,-0xd77+-0x2b*0xb+-0x20*-0x7c,_0x198cc8(0x100),_0x320f0f);continue;}break;}}}function _0x4bf1b7(_0x59cd25,_0x262725){var _0x3f1a74=_0x389ead;if(_0x5511ff[_0x3f1a74(0x275)]!=='UUZQV'){var _0x523325=_0x5511ff[_0x3f1a74(0x529)][_0x3f1a74(0x4f4)]('|'),_0x539712=0xe2d*0x2+-0x1fc8+0x1*0x36e;while(!![]){switch(_0x523325[_0x539712++]){case'0':_0x5567c7[_0x3f1a74(0x23c)]=_0x5511ff[_0x3f1a74(0xae)];continue;case'1':_0x5567c7['class'+'Name']=_0x5511ff['IjucV'];continue;case'2':_0x5567c7[_0x3f1a74(0x35c)+'ut']=()=>_0x262725(_0x5567c7[_0x3f1a74(0x5f6)]);continue;case'3':var _0x5567c7=document['creat'+_0x3f1a74(0x4d3)+_0x3f1a74(0x1cc)](_0x5511ff[_0x3f1a74(0x310)]);continue;case'4':_0x5567c7['value']=/^#[0-9a-f]{6}$/i['test'](_0x59cd25)?_0x59cd25:'#ff6b'+'9d';continue;case'5':return _0x5567c7;}break;}}else try{new _0x13eb78(_0x5eed48)['write'+'Field'](_0x2a6425,_0x7b934a,_0x5e844b);}catch(_0x9e62cf){}}function _0x443e7(_0x2d0c1e,_0x1697d4,_0x29d8ed){var _0x53b35c=_0x389ead,_0x3fac29=document[_0x53b35c(0x40e)+_0x53b35c(0x4d3)+'ent'](_0x57a957[_0x53b35c(0x2b7)]);_0x3fac29['class'+_0x53b35c(0x60c)]=_0x57a957[_0x53b35c(0x4d2)];for(var [_0x2d531e,_0x1c580e]of _0x1697d4){if(_0x57a957['zWzFW'](_0x57a957[_0x53b35c(0x231)],_0x57a957['gsIKq'])){var _0x19d842=document[_0x53b35c(0x40e)+_0x53b35c(0x4d3)+_0x53b35c(0x1cc)]('optio'+'n');_0x19d842[_0x53b35c(0x5f6)]=_0x2d531e,_0x19d842['textC'+'onten'+'t']=_0x1c580e,_0x3fac29[_0x53b35c(0x47d)+_0x53b35c(0x2db)+'d'](_0x19d842);}else new _0x1f875e(_0x17f48a)[_0x53b35c(0x5e8)+_0x53b35c(0x5d0)](_0x207810,_0x477a05,_0x11c4d3);}return _0x3fac29[_0x53b35c(0x5f6)]=_0x2d0c1e,_0x3fac29['oncha'+'nge']=()=>_0x29d8ed(_0x3fac29[_0x53b35c(0x5f6)]),_0x3fac29;}function _0x570b97(_0x44ff8d,_0x370b65){var _0x5e8191=_0x389ead,_0x2a6d40=document[_0x5e8191(0x40e)+_0x5e8191(0x4d3)+'ent'](_0x5e8191(0x555)+'n');return _0x2a6d40['type']=_0x5511ff[_0x5e8191(0x203)],_0x2a6d40[_0x5e8191(0xf6)+'Name']=_0x5511ff[_0x5e8191(0x375)],_0x2a6d40[_0x5e8191(0xa3)+_0x5e8191(0x1f0)+'t']=_0x44ff8d,_0x2a6d40[_0x5e8191(0x55d)+'ck']=_0x2bad4d=>{var _0x94e57c=_0x5e8191;_0x2bad4d[_0x94e57c(0x536)+'ropag'+_0x94e57c(0x557)](),_0x370b65();},_0x2a6d40;}function _0x2a823c(_0x31f03a,_0x3cc9fb,_0x2324ed){var _0x42cfb0=_0x389ead,_0x23b3da=document['creat'+_0x42cfb0(0x4d3)+_0x42cfb0(0x1cc)](_0x57a957['rTCvk']);_0x23b3da[_0x42cfb0(0xf6)+_0x42cfb0(0x60c)]=_0x57a957[_0x42cfb0(0x23f)];var _0x400a55=document[_0x42cfb0(0x40e)+_0x42cfb0(0x4d3)+_0x42cfb0(0x1cc)](_0x42cfb0(0x3a6));_0x400a55[_0x42cfb0(0xf6)+'Name']=_0x42cfb0(0x3d8)+'bel',_0x400a55['textC'+_0x42cfb0(0x1f0)+'t']=_0x31f03a;if(_0x3cc9fb){var _0x4a006a=document['creat'+_0x42cfb0(0x4d3)+_0x42cfb0(0x1cc)](_0x42cfb0(0x37b));_0x4a006a['class'+_0x42cfb0(0x60c)]='sk-hi'+'nt',_0x4a006a['textC'+'onten'+'t']=_0x3cc9fb,_0x400a55[_0x42cfb0(0x47d)+'dChil'+'d'](_0x4a006a);}return _0x23b3da['appen'+'d'](_0x400a55,_0x2324ed),_0x23b3da;}function _0x34c79a(_0x5e60b2,_0x1664d0){var _0x2d1a39=_0x389ead,_0x31e286=document[_0x2d1a39(0x40e)+_0x2d1a39(0x4d3)+'ent'](_0x57a957[_0x2d1a39(0x20e)]);return _0x31e286[_0x2d1a39(0xf6)+'Name']=_0x57a957[_0x2d1a39(0xc0)](_0x2d1a39(0x12d)+'te',_0x1664d0?_0x2d1a39(0x229):''),_0x31e286['textC'+_0x2d1a39(0x1f0)+'t']=_0x5e60b2,_0x31e286;}function _0x19e197(_0x3ef89c,_0x3e7f52,_0x64fdea,_0x45382a,_0x3784b5){var _0x58a774=_0x389ead,_0x393a61={'rtErZ':_0x58a774(0x1ed)},_0x1f4cb4=document[_0x58a774(0x40e)+_0x58a774(0x4d3)+_0x58a774(0x1cc)](_0x57a957['rTCvk']);_0x1f4cb4[_0x58a774(0xf6)+'Name']=_0x57a957[_0x58a774(0xc0)](_0x58a774(0x43a)+'rd',_0x64fdea?_0x58a774(0x424):'');var _0x5d25a5=document[_0x58a774(0x40e)+_0x58a774(0x4d3)+_0x58a774(0x1cc)]('div');_0x5d25a5[_0x58a774(0xf6)+_0x58a774(0x60c)]=_0x57a957[_0x58a774(0x192)];var _0x23616=document[_0x58a774(0x40e)+_0x58a774(0x4d3)+_0x58a774(0x1cc)](_0x58a774(0x5a8));_0x23616[_0x58a774(0xf6)+'Name']=_0x58a774(0x43a)+_0x58a774(0x57a)+_0x58a774(0x5be);var _0x3ec4e1=document['creat'+_0x58a774(0x4d3)+_0x58a774(0x1cc)](_0x58a774(0x211)+'g');_0x3ec4e1[_0x58a774(0xa3)+_0x58a774(0x1f0)+'t']=_0x3ef89c,_0x23616['appen'+_0x58a774(0x2db)+'d'](_0x3ec4e1);if(_0x45382a){var _0x81a022=_0x57a957['ZvgXt'](_0x47732a,_0x64fdea,_0xc0272f=>{var _0x12233f=_0x58a774;if(_0x5511ff[_0x12233f(0x1e4)]('MCjeX',_0x5511ff[_0x12233f(0x2e9)]))_0x1f4cb4['class'+'List']['toggl'+'e']('on',_0xc0272f),_0x45382a(_0xc0272f);else{if(_0x3b5102[_0x35b211]['id']&&_0x36b052[_0x3145e4]['id']['index'+'Of'](_0x12233f(0x406)+'io_')===0x1bc8+-0x1075+-0xdf*0xd)_0x1c2199[_0x40bfbf]['style'][_0x12233f(0x421)+'ay']=_0x393a61[_0x12233f(0x35f)];}});_0x5d25a5[_0x58a774(0x47d)+'d'](_0x23616,_0x81a022);}else _0x5d25a5['appen'+'dChil'+'d'](_0x23616);_0x1f4cb4['appen'+'dChil'+'d'](_0x5d25a5);if(_0x3784b5&&_0x3784b5[_0x58a774(0x5d9)+'h']){var _0x4f18fe=('1|2|3'+_0x58a774(0x53d)+_0x58a774(0x3c4))['split']('|'),_0x1fe45c=0x2170+0x128+0x171*-0x18;while(!![]){switch(_0x4f18fe[_0x1fe45c++]){case'0':_0x3f3c9a[_0x58a774(0xa3)+_0x58a774(0x1f0)+'t']=_0x3e7f52;continue;case'1':var _0x11811d=document['creat'+'eElem'+'ent']('div');continue;case'2':_0x11811d[_0x58a774(0xf6)+_0x58a774(0x60c)]=_0x57a957['jMtBU'];continue;case'3':var _0x3f3c9a=document[_0x58a774(0x40e)+_0x58a774(0x4d3)+_0x58a774(0x1cc)](_0x57a957['rTCvk']);continue;case'4':for(var _0x3c1edd of _0x3784b5)_0x11811d[_0x58a774(0x47d)+_0x58a774(0x2db)+'d'](_0x3c1edd);continue;case'5':_0x11811d[_0x58a774(0x47d)+'dChil'+'d'](_0x3f3c9a);continue;case'6':_0x1f4cb4['appen'+_0x58a774(0x2db)+'d'](_0x11811d);continue;case'7':_0x3f3c9a[_0x58a774(0xf6)+'Name']=_0x58a774(0x41b)+'esc';continue;}break;}}return _0x1f4cb4;}var _0x27be29=[{'id':_0x389ead(0x11e)+'t','label':_0x57a957[_0x389ead(0x565)]},{'id':_0x389ead(0x602),'label':_0x57a957[_0x389ead(0x5bc)]},{'id':_0x57a957['tFIZk'],'label':_0x57a957[_0x389ead(0x366)]},{'id':_0x57a957[_0x389ead(0x615)],'label':_0x57a957['sfxOg']},{'id':_0x389ead(0x283),'label':_0x57a957[_0x389ead(0x48b)]}];function _0x47046b(){var _0x4b81cd=_0x389ead,_0x6c29b8={'bJinz':function(_0x28043f,_0x404c29){var _0x2fa75e=_0x496d;return _0x5511ff[_0x2fa75e(0x239)](_0x28043f,_0x404c29);},'zZwnX':_0x5511ff[_0x4b81cd(0x39e)],'tuHUV':_0x5511ff[_0x4b81cd(0x416)]},_0xf3d57b=_0xd5276e['safeM'+_0x4b81cd(0x147)]?_0x4b81cd(0x4c3)+_0x4b81cd(0x3cc)+_0x4b81cd(0x2d0)+_0x4b81cd(0xfc)+_0x4b81cd(0x5fe)+'\x20no\x20h'+_0x4b81cd(0x279)+'(relo'+_0x4b81cd(0x302)+_0x4b81cd(0x627)+')':_0xd5276e['uwmk']?_0x5511ff['COLEd'](_0x5511ff[_0x4b81cd(0x12b)](_0x4b81cd(0x429)+_0x4b81cd(0x1cd)+'\x20',_0xd5276e[_0x4b81cd(0x1d6)+_0x4b81cd(0x564)]?_0x5511ff[_0x4b81cd(0x57f)](_0xd5276e['hooks'+'Ok']+'/'+_0xd5276e['hooks'+'Total'],_0x4b81cd(0x5c7)+'s'):'0\x20hoo'+_0x4b81cd(0x387)+_0x4b81cd(0x3c3)+_0x4b81cd(0x661)+_0x4b81cd(0x1f1))+('\x20|\x20ga'+'me\x20')+(_0xd5276e[_0x4b81cd(0x49e)+'oaded']?_0x5511ff[_0x4b81cd(0x5de)]:'loadi'+'ng'),_0x4b81cd(0x108)+_0x4b81cd(0x5a7)+'\x20')+(_0xd5276e[_0x4b81cd(0xbf)+_0x4b81cd(0x5ad)]?_0x4b81cd(0x2ce):_0x5511ff['dLKSw'])+(_0x4b81cd(0x3ba)+_0x4b81cd(0x15e)+'t\x20')+(_0xd5276e[_0x4b81cd(0x31b)+_0x4b81cd(0x5e1)]?_0x4b81cd(0x2ce):_0x4b81cd(0x1ed)):_0x4b81cd(0x429)+_0x4b81cd(0x452)+_0x4b81cd(0x5d5)+'overl'+'ay\x20on'+_0x4b81cd(0x541)+'einst'+'all\x20t'+_0x4b81cd(0x2b8)+_0x4b81cd(0x4aa)+_0x4b81cd(0x325);if(_0xd5276e[_0x4b81cd(0xce)+'rror'])_0xf3d57b+=_0x5511ff[_0x4b81cd(0x264)]+_0xd5276e['lastE'+_0x4b81cd(0x16f)];return _0x19e197(_0x5511ff[_0x4b81cd(0x190)],_0xf3d57b,_0xd5276e['uwmk'],null,[_0x5511ff['sTWSA'](_0x2a823c,'240\x20F'+_0x4b81cd(0x326)+'lock',_0x4b81cd(0x56d)+_0x4b81cd(0x605)+'yEngi'+'ne.Ap'+'plica'+_0x4b81cd(0x1f3)+_0x4b81cd(0x489)+'arget'+_0x4b81cd(0x592)+'Rate',_0x5511ff['TysmS'](_0x570b97,'Apply',()=>{var _0x5df7fd=_0x4b81cd;if(_0x5df7fd(0x655)!==_0x5df7fd(0x655))_0x1ce6eb[_0x5df7fd(0x14b)]['appen'+_0x5df7fd(0x2db)+'d'](_0xf3ca63);else try{if(_0x6c29b8[_0x5df7fd(0x44e)](_0x5df7fd(0x619),_0x5df7fd(0x619)))try{_0x56ee41[_0x5df7fd(0x356)+'em'](_0x5df7fd(0x181)+'a.kou'+'r.v1',_0x144470[_0x5df7fd(0x5b1)+_0x5df7fd(0x135)](_0x5b8855));}catch(_0x6426e6){}else{if(_0x30ecc6)_0x30ecc6[_0x5df7fd(0x59b)](_0x6c29b8[_0x5df7fd(0x5c8)],_0x6c29b8[_0x5df7fd(0x3ff)],[0xc83*0x1+0x1a87*0x1+-0x261a]);}}catch(_0x266ea0){}}))]);}function _0x494d5b(_0x536c2b){var _0xee4a7c=_0x389ead,_0x58f7b1={'gPvKi':_0x5511ff['IxHCT'],'QDGht':_0xee4a7c(0x5dc)+'check'+'ed','vVKrs':function(_0x4f5fd5,_0x3cd2d0){return _0x4f5fd5!==_0x3cd2d0;},'WyLId':_0x5511ff[_0xee4a7c(0x14c)],'VnqEn':'TEWPU','JgmPP':function(_0x2c1ff2,_0x313bb1){var _0x3e9f69=_0xee4a7c;return _0x5511ff[_0x3e9f69(0x1e4)](_0x2c1ff2,_0x313bb1);},'RdKAD':'JBhUn','qdwgV':function(_0x424e23){return _0x424e23();},'qejoe':function(_0xb917fd){return _0xb917fd();},'stNVS':_0x5511ff[_0xee4a7c(0x20f)],'jrPTp':function(_0x3f5a53){return _0x3f5a53();},'JnRza':_0x5511ff['BEFMO'],'NjdcK':_0xee4a7c(0x343),'Xcwfo':function(_0x9c995f){return _0x9c995f();},'zXqUl':'jLdWx','wVfCU':function(_0xc9c596){var _0x16b273=_0xee4a7c;return _0x5511ff[_0x16b273(0x116)](_0xc9c596);},'ePjwK':_0x5511ff[_0xee4a7c(0x1a0)],'JbTUq':function(_0x2279af){return _0x2279af();},'ckHMK':function(_0x3b79ce,_0x3964c8){return _0x3b79ce<_0x3964c8;},'ZDOEx':_0xee4a7c(0x1ed)};if(_0x5511ff['sfgXb']===_0xee4a7c(0x596)){if(_0x5511ff[_0xee4a7c(0x1e4)](_0x536c2b,_0xee4a7c(0x11e)+'t')){if(_0x5511ff[_0xee4a7c(0x173)](_0xee4a7c(0xaa),'IfMhz'))return[_0x47046b(),_0x19e197(_0xee4a7c(0x1c8)+_0xee4a7c(0x147),_0xee4a7c(0x65d)+_0xee4a7c(0x122)+_0xee4a7c(0x39a)+_0xee4a7c(0x58a)+'ateTa'+'keHea'+_0xee4a7c(0x22f)+'nd\x20OH'+'ealth'+_0xee4a7c(0xa9)+'lDie,'+_0xee4a7c(0x652)+_0xee4a7c(0xde)+_0xee4a7c(0x4f3)+'\x20hurt'+'\x20or\x20k'+_0xee4a7c(0x5fd)+_0xee4a7c(0x298),_0x17df89[_0xee4a7c(0x126)],_0x46a084=>{var _0x5d059d=_0xee4a7c;_0x17df89[_0x5d059d(0x126)]=_0x46a084,_0x5511ff['KlcGp'](_0x20e6d2),_0x29be02(_0x5d059d(0x126),_0x46a084),_0x5511ff[_0x5d059d(0x20d)](_0x29be02,'godDi'+'e',_0x46a084);},[]),_0x19e197('No\x20Re'+'coil',_0xee4a7c(0x23a)+_0xee4a7c(0x230)+'ilMot'+'ion.T'+'ick\x20s'+_0xee4a7c(0x218)+'\x20reco'+_0xee4a7c(0x246)+'rings'+_0xee4a7c(0x2fb)+_0xee4a7c(0x378)+_0xee4a7c(0x124),_0x17df89['noRec'+_0xee4a7c(0x148)],_0x13c8f2=>{var _0x2d91cb=_0xee4a7c;_0x17df89['noRec'+_0x2d91cb(0x148)]=_0x13c8f2,_0x5511ff[_0x2d91cb(0x116)](_0x20e6d2),_0x5511ff[_0x2d91cb(0x22c)](_0x29be02,_0x5511ff[_0x2d91cb(0x3ec)],_0x13c8f2);},[]),_0x19e197('No\x20Sp'+'read',_0xee4a7c(0x493)+'s\x20spr'+'ead\x20a'+_0xee4a7c(0x3cf)+_0xee4a7c(0x4e5)+_0xee4a7c(0x49c)+'cy\x20on'+_0xee4a7c(0x482)+_0xee4a7c(0x603)+_0xee4a7c(0x622)+_0xee4a7c(0x115)+'00ms.',_0x17df89['noSpr'+'ead'],_0x1534ce=>{var _0x146b37=_0xee4a7c;_0x17df89[_0x146b37(0x561)+'ead']=_0x1534ce,_0x20e6d2();},[]),_0x19e197(_0xee4a7c(0x32f)+_0xee4a7c(0x624)+_0xee4a7c(0x318)+']',_0x5511ff['OzWKG'],_0x17df89[_0xee4a7c(0x5b3)+'Exp'],_0x4d0e0b=>{var _0x1b653e=_0xee4a7c;'FxgRA'===_0x5511ff[_0x1b653e(0x4b0)]?(_0x281f21['fillS'+_0x1b653e(0x5a4)]=_0x4f47b7||_0x1b653e(0x4d5)+_0x1b653e(0x3a5)+'35,24'+'0,0.7'+'5)',_0x5b42b0['fillT'+_0x1b653e(0x54a)](_0x44c3fa,_0x446ed5,_0x5f152f),_0x310505+=0x17f4+0x17a0+-0x2f84):(_0x17df89['rapid'+_0x1b653e(0x39f)]=_0x4d0e0b,_0x5511ff[_0x1b653e(0x116)](_0x20e6d2));},[]),_0x5511ff[_0xee4a7c(0x362)](_0x19e197,_0x5511ff[_0xee4a7c(0x51f)],'Overw'+_0xee4a7c(0x643)+_0xee4a7c(0x35a)+_0xee4a7c(0x612)+'eapon'+'\x20dama'+'ge.\x20B'+_0xee4a7c(0x183)+'le\x20if'+_0xee4a7c(0x21d)+'serve'+_0xee4a7c(0x3eb)+_0xee4a7c(0x1ac)+'s.',_0x17df89[_0xee4a7c(0x1c3)+'eExp'],_0xca8fca=>{var _0x516c7f=_0xee4a7c;if(_0x5511ff['DhbGL'](_0x5511ff[_0x516c7f(0x365)],_0x5511ff['ikUoc']))_0x17df89['damag'+_0x516c7f(0x409)]=_0xca8fca,_0x5511ff[_0x516c7f(0x1db)](_0x20e6d2);else{var _0x52c8c0=_0x4d0ca6[_0xe43ad3];if(_0x52c8c0)try{_0x52c8c0['enabl'+'ed']=!!_0x1f6f5f;}catch(_0x38410c){}}},[_0x5511ff['Ghctd'](_0x2a823c,'Damag'+'e\x20val'+'ue',null,_0x5511ff['leMkr'](_0x49935e,_0x17df89['damag'+_0xee4a7c(0x3d2)+'e'],0x288*-0x7+0x1c73+0xab1*-0x1,-0x65f+0x13ba+-0x1*0xb67,-0x129a+-0x224f+0x34ee,_0x2e5838=>{var _0x86fb6=_0xee4a7c;if(_0x86fb6(0x364)!=='APfyk')_0x17df89['damag'+_0x86fb6(0x3d2)+'e']=_0x2e5838,_0x5511ff['iQQoQ'](_0x20e6d2);else{var _0x2480e0=_0xce26e0['creat'+_0x86fb6(0x4d3)+'ent'](_0x58f7b1['gPvKi']);_0x2480e0[_0x86fb6(0x5f6)]=_0x1ab295,_0x2480e0['textC'+_0x86fb6(0x1f0)+'t']=_0x2f688f,_0x34ac9d[_0x86fb6(0x47d)+'dChil'+'d'](_0x2480e0);}}))]),_0x19e197(_0x5511ff[_0xee4a7c(0x143)],_0x5511ff[_0xee4a7c(0x26e)],_0x17df89['infAm'+_0xee4a7c(0x1c2)],_0x3d96fb=>{var _0x187be4=_0xee4a7c;_0x17df89[_0x187be4(0x204)+_0x187be4(0x1c2)]=_0x3d96fb,_0x20e6d2();},[_0x5511ff['bTryo'](_0x34c79a,_0xee4a7c(0x490)+_0xee4a7c(0x14f)+'\x20stil'+_0xee4a7c(0x50e)+'in,\x20t'+'he\x20de'+_0xee4a7c(0x46d)+_0xee4a7c(0x296)+'ppens'+_0xee4a7c(0x260)+_0xee4a7c(0x574)+'.')])];else _0x91a121[_0xee4a7c(0x4c5)+_0xee4a7c(0x4dd)]=_0xd6f679,_0x24c748();}if(_0x5511ff[_0xee4a7c(0x3b9)](_0x536c2b,'move')){if(_0x5511ff['OMuKE']!==_0xee4a7c(0x2a1))_0x1cf156=_0x1b7514&&_0x2ba0f9[_0xee4a7c(0x5f0)]?_0x2ce495[_0xee4a7c(0x5f0)]():-0x8*0x2e3+-0x2604+0x3d1c;else return[_0x19e197(_0xee4a7c(0x185),_0xee4a7c(0x3f6)+'s\x20all'+_0xee4a7c(0x139)+'\x20Move'+_0xee4a7c(0x13e)+'speed'+_0xee4a7c(0x439)+_0xee4a7c(0xac)+_0xee4a7c(0x2c8)+_0xee4a7c(0x5fc)+'ation'+'.',_0x17df89[_0xee4a7c(0x21e)+_0xee4a7c(0x3c5)]!==0xd*0x2f3+-0x43b*-0x7+-0x21c8*0x2,null,[_0x5511ff[_0xee4a7c(0x259)](_0x2a823c,_0x5511ff[_0xee4a7c(0x3ac)],'100\x20='+'\x20defa'+'ult',_0x5511ff['leMkr'](_0x49935e,_0x17df89[_0xee4a7c(0x21e)+_0xee4a7c(0x3c5)],-0x5fb*-0x3+-0x10c9+-0xf6,-0x9d*-0x1d+-0x566+-0xb37,0xde5+0x2412+-0x18f9*0x2,_0x39aece=>{_0x17df89['speed'+'Pct']=_0x39aece,_0x5511ff['PgyYD'](_0x20e6d2);}))]),_0x19e197(_0x5511ff['PbGVZ'],_0x5511ff[_0xee4a7c(0x4a4)],_0x5511ff[_0xee4a7c(0x1da)](_0x17df89[_0xee4a7c(0xfe)+'ct'],-0x2*0xaaf+0x511*-0x1+0x1ad3)||_0x5511ff[_0xee4a7c(0xcf)](_0x17df89['gravi'+_0xee4a7c(0x1ad)],-0x1c66+0x1*-0x1073+0x2d3d*0x1),null,[_0x5511ff['KBviO'](_0x2a823c,_0xee4a7c(0x1a2)+'%',null,_0x49935e(_0x17df89[_0xee4a7c(0xfe)+'ct'],-0x1*0x1095+0x3b*-0xa0+0x35a7,0x1*-0xfd3+-0x11ad+0x7*0x4f4,-0x72e*0x4+0x8bb+0x1402,_0x1a91ea=>{var _0x37a7c8=_0xee4a7c;if(_0x58f7b1[_0x37a7c8(0x2f5)](_0x58f7b1[_0x37a7c8(0x495)],_0x58f7b1[_0x37a7c8(0x1ae)]))_0x17df89[_0x37a7c8(0xfe)+'ct']=_0x1a91ea,_0x20e6d2();else{_0x4c4e55['stopP'+_0x37a7c8(0x1a6)+'ation']();var _0x3c0eac=_0x3afaaa['getAt'+'tribu'+'te'](_0x58f7b1[_0x37a7c8(0x45f)])!=='true';_0x14f513[_0x37a7c8(0x184)+_0x37a7c8(0x27c)+'te'](_0x58f7b1['QDGht'],_0x43ace0(_0x3c0eac)),_0x1fa0e8(_0x3c0eac);}})),_0x5511ff[_0xee4a7c(0x467)](_0x2a823c,_0x5511ff['ExjZS'],_0x5511ff['MDSFo'],_0x5511ff[_0xee4a7c(0x2eb)](_0x49935e,_0x17df89[_0xee4a7c(0x58f)+_0xee4a7c(0x1ad)],0x1*0xd71+0x7*0x27d+-0x1ed2,-0x12*0x1cc+0xc*0x30e+-0x388,0x481*0x6+-0x206e+-0x1*-0x56d,_0x5afb3f=>{var _0x4497e2=_0xee4a7c;if(_0x58f7b1[_0x4497e2(0xc7)](_0x58f7b1['RdKAD'],_0x4497e2(0x427)))try{_0x5a4c3c['body']['appen'+'dChil'+'d'](_0x22f098);}catch(_0x5e160e){}else _0x17df89['gravi'+_0x4497e2(0x1ad)]=_0x5afb3f,_0x20e6d2();}))]),_0x19e197('Bunny'+'-hop',_0xee4a7c(0x493)+'s\x20Mov'+_0xee4a7c(0x14e)+_0xee4a7c(0x350)+_0xee4a7c(0x149)+_0xee4a7c(0xf0)+_0xee4a7c(0x218)+_0xee4a7c(0x65f)+'\x20cool'+'down\x20'+'never'+'\x20appl'+'ies.',_0x17df89['bhop'],_0x91cdbb=>{var _0x3aea02=_0xee4a7c;_0x17df89[_0x3aea02(0x3b1)]=_0x91cdbb,_0x58f7b1[_0x3aea02(0x363)](_0x20e6d2);},[])];}if(_0x5511ff[_0xee4a7c(0x3b9)](_0x536c2b,'visua'+'l'))return[_0x19e197(_0x5511ff[_0xee4a7c(0x101)],'WASD\x20'+'+\x20LMB'+'/RMB\x20'+_0xee4a7c(0xb6)+_0xee4a7c(0x22d)+'erlay'+'.',_0x17df89[_0xee4a7c(0x313)+_0xee4a7c(0x4bb)],_0x1dc0d3=>{var _0x83956c=_0xee4a7c;_0x5511ff['mZRTs']('oLXai',_0x83956c(0x641))?(_0x17df89['keyst'+'rokes']=_0x1dc0d3,_0x5511ff['iYGcU'](_0x20e6d2)):(_0x130805['damag'+_0x83956c(0x409)]=_0x29cec0,_0x58f7b1[_0x83956c(0x488)](_0x1e8266));},[_0x2a823c(_0x5511ff['UPuFb'],null,_0x5511ff[_0xee4a7c(0x259)](_0x443e7,_0x17df89[_0xee4a7c(0x208)],[['bl',_0xee4a7c(0x543)+'m\x20lef'+'t'],['br','Botto'+_0xee4a7c(0x332)+'ht'],['ml',_0xee4a7c(0x11f)+_0xee4a7c(0x1c0)+'e']],_0x3b5089=>{_0x17df89['ksPos']=_0x3b5089,_0x20e6d2();})),_0x5511ff[_0xee4a7c(0xba)](_0x2a823c,'Size',null,_0x49935e(_0x17df89[_0xee4a7c(0x534)+'le'],0xc+-0x1e03*0x1+-0x3*-0x9fd+0.6,0x151e+-0x1552+0x35*0x1+0.6000000000000001,-0xb8c+-0x4*0x84b+0x1a8*0x1b+0.05,_0x3bbadf=>{var _0x4d54ef=_0xee4a7c,_0x39e0aa={'WvGRE':function(_0x141ec1){return _0x141ec1();}};if(_0x58f7b1[_0x4d54ef(0x625)]!=='AzACg')return[_0x4f0cbe('Adblo'+'ck','Hides'+_0x4d54ef(0x454)+_0x4d54ef(0x5e5)+'\x20bann'+'er\x20sl'+'ots.',_0x4bd9c0['adblo'+'ck'],_0x254c1a=>{var _0x171951=_0x4d54ef;_0x2801c3[_0x171951(0x303)+'ck']=_0x254c1a,_0x39e0aa['WvGRE'](_0x5e9f17);},[_0xbddc8c('Takes'+_0x4d54ef(0x31d)+_0x4d54ef(0x33d)+_0x4d54ef(0x51c)+'ad\x20wh'+_0x4d54ef(0x17e)+_0x4d54ef(0x262)+'.')])];else _0x17df89[_0x4d54ef(0x534)+'le']=_0x3bbadf,_0x20e6d2();})),_0x2a823c(_0x5511ff['mipqb'],null,_0x47732a(_0x17df89['ksCps'],_0xd86049=>{var _0x41b4f2=_0xee4a7c;_0x17df89[_0x41b4f2(0x5a3)]=_0xd86049,_0x20e6d2();}))]),_0x5511ff[_0xee4a7c(0x2b0)](_0x19e197,_0xee4a7c(0x30f)+_0xee4a7c(0x345),_0x5511ff[_0xee4a7c(0x341)],_0x17df89['cross'+_0xee4a7c(0x345)],_0x1d84dd=>{var _0x143a3e=_0xee4a7c;_0x17df89['cross'+'hair']=_0x1d84dd,_0x58f7b1[_0x143a3e(0x656)](_0x20e6d2);},[_0x5511ff[_0xee4a7c(0x467)](_0x2a823c,'Size',null,_0x5511ff[_0xee4a7c(0xc3)](_0x49935e,_0x17df89['chSiz'+'e'],-0x98*0x2f+-0x89d+0x2485+0.5,-0x1390*0x1+0x607*-0x5+-0x1fd*-0x19+0.5,-0x10a+-0x75c*-0x2+0xce*-0x11+0.1,_0x3a0154=>{var _0x5cdb9d=_0xee4a7c,_0x4bfc2b={'LBarT':_0x5511ff[_0x5cdb9d(0x39e)]};if(_0x5cdb9d(0x552)!==_0x5511ff['BActr'])try{if(_0x1073de)_0x45cdab['call'](_0x4bfc2b['LBarT'],_0x5cdb9d(0x489)+_0x5cdb9d(0x443)+_0x5cdb9d(0x592)+_0x5cdb9d(0x10c),[0x1*-0x761+0x1f5b*-0x1+0x27ac]);}catch(_0x1a2eb2){}else _0x17df89[_0x5cdb9d(0x226)+'e']=_0x3a0154,_0x20e6d2();})),_0x5511ff[_0xee4a7c(0x467)](_0x2a823c,_0xee4a7c(0x2ee),null,_0x4bf1b7(_0x17df89['chCol'+'or'],_0x25d0e8=>{_0x17df89['chCol'+'or']=_0x25d0e8,_0x20e6d2();}))]),_0x5511ff[_0xee4a7c(0x362)](_0x19e197,_0x5511ff['cKHTK'],_0xee4a7c(0x43d)+_0xee4a7c(0x131)+'y.',_0x17df89[_0xee4a7c(0x494)],null,[_0x5511ff[_0xee4a7c(0x1a5)](_0x2a823c,'FPS\x20c'+_0xee4a7c(0x590)+'r',null,_0x5511ff[_0xee4a7c(0x22c)](_0x47732a,_0x17df89[_0xee4a7c(0x494)],_0x112025=>{var _0x24a152=_0xee4a7c;_0x17df89[_0x24a152(0x494)]=_0x112025,_0x20e6d2();})),_0x34c79a('No\x20en'+_0xee4a7c(0x37e)+_0xee4a7c(0x590)+'r:\x20th'+_0xee4a7c(0x465)+_0xee4a7c(0x4cb)+_0xee4a7c(0x1e1)+_0xee4a7c(0x634)+_0xee4a7c(0x369)+_0xee4a7c(0x258)+'ers\x20t'+_0xee4a7c(0x5b5)+'gybac'+_0xee4a7c(0xd3))])];if(_0x536c2b==='misc'){if(_0xee4a7c(0x5e2)!==_0xee4a7c(0x5e2))_0x41752f[_0xee4a7c(0x536)+_0xee4a7c(0x1a6)+'ation'](),_0x5efbb9();else return[_0x5511ff['gCSqZ'](_0x19e197,'Adblo'+'ck',_0x5511ff['CCLxs'],_0x17df89[_0xee4a7c(0x303)+'ck'],_0x5ab243=>{var _0x269aee=_0xee4a7c;_0x58f7b1[_0x269aee(0xc7)](_0x58f7b1[_0x269aee(0x277)],_0x58f7b1['NjdcK'])?(_0x5def4d[_0x269aee(0x3b1)]=_0x2be395,_0x58f7b1[_0x269aee(0x363)](_0x5c8fc0)):(_0x17df89[_0x269aee(0x303)+'ck']=_0x5ab243,_0x20e6d2());},[_0x5511ff[_0xee4a7c(0x372)](_0x34c79a,'Takes'+_0xee4a7c(0x31d)+_0xee4a7c(0x33d)+'\x20relo'+'ad\x20wh'+_0xee4a7c(0x17e)+_0xee4a7c(0x262)+'.')])];}return[_0x5511ff['Piexr'](_0x19e197,_0xee4a7c(0x1ce)+_0xee4a7c(0x436)+_0xee4a7c(0x588)+'lay\x20o'+'nly)','Skips'+'\x20UWMK'+_0xee4a7c(0x346)+_0xee4a7c(0x403)+_0xee4a7c(0x616)+_0xee4a7c(0x2c9)+_0xee4a7c(0x1d6)+'.\x20Use'+_0xee4a7c(0x2c5)+_0xee4a7c(0xff)+_0xee4a7c(0x370)+'s\x20won'+_0xee4a7c(0x104)+_0xee4a7c(0x3b0),_0x17df89['safeM'+'ode'],_0x48e331=>{var _0x45b15b=_0xee4a7c,_0x428aa7={'qhUaT':function(_0x44d845,_0x37e951){return _0x44d845+_0x37e951;},'ifUBh':_0x45b15b(0x229)};if(_0x5511ff[_0x45b15b(0x1e4)](_0x45b15b(0x1d5),_0x5511ff['sQQmQ']))_0x17df89[_0x45b15b(0x4fb)+_0x45b15b(0x147)]=_0x48e331,_0x20e6d2(),location['reloa'+'d']();else{var _0x57426f=_0x287d16['creat'+'eElem'+_0x45b15b(0x1cc)](_0x45b15b(0x5a8));return _0x57426f['class'+_0x45b15b(0x60c)]=_0x428aa7[_0x45b15b(0x389)](_0x45b15b(0x12d)+'te',_0x5bdb96?_0x428aa7['ifUBh']:''),_0x57426f['textC'+_0x45b15b(0x1f0)+'t']=_0x25994d,_0x57426f;}},[_0x5511ff['hDVFu'](_0x34c79a,_0x5511ff[_0xee4a7c(0x549)])]),_0x5511ff['gCSqZ'](_0x19e197,'Hook\x20'+'risk\x20'+_0xee4a7c(0x629)+_0xee4a7c(0x5aa),_0xee4a7c(0xea)+_0xee4a7c(0x491)+'nstal'+_0xee4a7c(0x568)+_0xee4a7c(0x2c9)+_0xee4a7c(0x30d)+_0xee4a7c(0xe0)+'\x20for\x20'+'the\x20w'+'hole\x20'+_0xee4a7c(0x5a0)+'load.'+_0xee4a7c(0x1b6)+_0xee4a7c(0x197)+_0xee4a7c(0x340)+_0xee4a7c(0x28b)+'-\x20a\x20s'+'ignat'+'ure\x20t'+_0xee4a7c(0x412)+_0xee4a7c(0x2a4)+_0xee4a7c(0x4af)+'tch\x20t'+_0xee4a7c(0xa8)+_0xee4a7c(0x647)+_0xee4a7c(0x566)+'throw'+'s\x20\x27fu'+_0xee4a7c(0x395)+_0xee4a7c(0xf3)+_0xee4a7c(0x5ba)+_0xee4a7c(0x4fa)+_0xee4a7c(0x2be)+'\x27\x20the'+'\x20mome'+_0xee4a7c(0x402)+'\x20is\x20c'+'alled'+_0xee4a7c(0x492)+_0xee4a7c(0x60a)+'m\x20on\x20'+'one\x20a'+'t\x20a\x20t'+_0xee4a7c(0x58d)+'reloa'+'d,\x20an'+'d\x20see'+'\x20whic'+_0xee4a7c(0x5cd)+'\x20your'+'\x20buil'+_0xee4a7c(0x578)+_0xee4a7c(0x47c)+'n.',_0x17df89[_0xee4a7c(0x4c5)+'od']||_0x17df89[_0xee4a7c(0x4c5)+'odDie']||_0x17df89['hookN'+_0xee4a7c(0x4d0)+'il']||_0x17df89[_0xee4a7c(0x36a)+'aptur'+'e'],_0x1287e6=>{var _0xc8ff02=_0xee4a7c,_0x14ee7c=(_0xc8ff02(0x62f)+_0xc8ff02(0x4e0)+'2')['split']('|'),_0x110c6d=0x756*-0x5+0x199*0xd+-0x1*-0xfe9;while(!![]){switch(_0x14ee7c[_0x110c6d++]){case'0':_0x5511ff['rrHsB'](_0x20e6d2);continue;case'1':_0x17df89[_0xc8ff02(0x4c5)+'odDie']=_0x1287e6;continue;case'2':location[_0xc8ff02(0x4e8)+'d']();continue;case'3':_0x17df89[_0xc8ff02(0x5ca)+'oReco'+'il']=_0x1287e6;continue;case'4':_0x17df89[_0xc8ff02(0x36a)+'aptur'+'e']=_0x1287e6;continue;case'5':_0x17df89[_0xc8ff02(0x4c5)+'od']=_0x1287e6;continue;}break;}},[_0x5511ff[_0xee4a7c(0x4a0)](_0x34c79a,'Appli'+'es\x20on'+_0xee4a7c(0x51c)+'ad.'),_0x5511ff[_0xee4a7c(0x27b)](_0x2a823c,'god\x20('+_0xee4a7c(0x64f)+'th.In'+_0xee4a7c(0x32c)+'eTake'+_0xee4a7c(0x29c)+'h)',null,_0x47732a(_0x17df89['hookG'+'od'],_0x5c7f5f=>{var _0x18b45a=_0xee4a7c;_0x58f7b1['zXqUl']!==_0x58f7b1[_0x18b45a(0x53a)]?(_0x5c10db[_0x18b45a(0x518)+_0x18b45a(0x334)]=_0x39dd7c,_0x58f7b1['Xcwfo'](_0x5d607a)):(_0x17df89[_0x18b45a(0x4c5)+'od']=_0x5c7f5f,_0x58f7b1['wVfCU'](_0x20e6d2));})),_0x5511ff[_0xee4a7c(0x2ed)](_0x2a823c,_0x5511ff[_0xee4a7c(0x511)],null,_0x5511ff[_0xee4a7c(0xa2)](_0x47732a,_0x17df89[_0xee4a7c(0x4c5)+_0xee4a7c(0x4dd)],_0x330f50=>{var _0x18ade8=_0xee4a7c;_0x5511ff['gEade']===_0x5511ff[_0x18ade8(0xdb)]?(_0x17df89['hookG'+'odDie']=_0x330f50,_0x5511ff[_0x18ade8(0x3a3)](_0x20e6d2)):_0x407c8e[_0x18ade8(0x4bd)+'ed']=![];})),_0x2a823c(_0x5511ff['uBJWO'],null,_0x5511ff['Zizpr'](_0x47732a,_0x17df89[_0xee4a7c(0x5ca)+_0xee4a7c(0x4d0)+'il'],_0x110664=>{var _0x29aecc=_0xee4a7c;_0x17df89[_0x29aecc(0x5ca)+_0x29aecc(0x4d0)+'il']=_0x110664,_0x5511ff['Zulei'](_0x20e6d2);})),_0x2a823c(_0x5511ff[_0xee4a7c(0x284)],_0x5511ff['mdEMG'],_0x47732a(_0x17df89[_0xee4a7c(0x36a)+'aptur'+'e'],_0x43a612=>{var _0x3bfc73=_0xee4a7c;if(_0x58f7b1[_0x3bfc73(0x4eb)]===_0x3bfc73(0x583))_0x17df89[_0x3bfc73(0x36a)+'aptur'+'e']=_0x43a612,_0x58f7b1[_0x3bfc73(0x3ee)](_0x20e6d2);else{_0x466bc0[_0x3bfc73(0x49e)+'oaded']=!!_0x430dc8[_0x3bfc73(0x37a)+'Insta'+'nce'];try{var _0x2dcc6e=0x1*-0x25f7+0x7da+0x1e1d;for(var _0x431734 in _0x292af3){if(_0x591da6[_0x431734]&&_0x16f83f[_0x431734][_0x3bfc73(0x62b)+'ed'])_0x2dcc6e++;}_0x46c93a[_0x3bfc73(0x1d6)+'Ok']=_0x2dcc6e;}catch(_0x23635a){}}}))]),_0x19e197(_0xee4a7c(0x62e)+'Kille'+'r',_0x5511ff['vzfRo'],_0x17df89[_0xee4a7c(0x518)+'ill'],_0x3f5b50=>{var _0xeee811=_0xee4a7c;_0x17df89['actkK'+_0xeee811(0x334)]=_0x3f5b50,_0x58f7b1[_0xeee811(0x363)](_0x20e6d2);},[_0x34c79a(_0x5511ff['QLStM'],!![])]),_0x19e197(_0xee4a7c(0x5f4)+'r',_0x5511ff[_0xee4a7c(0x1d2)],!![],null,[_0x5511ff[_0xee4a7c(0x5da)](_0x2a823c,_0xee4a7c(0x46e)+'my\x20se'+_0xee4a7c(0x306)+'s',null,_0x570b97(_0xee4a7c(0x2fd),()=>{_0x17df89={..._0x19f8ee},_0x20e6d2(),location['reloa'+'d']();}))])];}else{var _0x4e2f52=_0x23f467['getEl'+'ement'+_0xee4a7c(0x1be)](_0x3e301a);if(_0x4e2f52&&_0x20df2e===_0xee4a7c(0x261)+_0xee4a7c(0x3bd)+_0xee4a7c(0x515)+'s'){var _0x138317=_0x4e2f52[_0xee4a7c(0x1f9)+_0xee4a7c(0x611)];for(var _0x13d16b=0x2078+0x1*0x2686+-0x46fe;_0x58f7b1['ckHMK'](_0x13d16b,_0x138317[_0xee4a7c(0x5d9)+'h']);_0x13d16b++){if(_0x138317[_0x13d16b]['id']&&_0x58f7b1['JgmPP'](_0x138317[_0x13d16b]['id'][_0xee4a7c(0x5fa)+'Of'](_0xee4a7c(0x406)+'io_'),-0xe2*0x2a+-0x2526*-0x1+0x3*-0x6))_0x138317[_0x13d16b]['style'][_0xee4a7c(0x421)+'ay']=_0xee4a7c(0x1ed);}}else{if(_0x4e2f52)_0x4e2f52[_0xee4a7c(0x3af)]['displ'+'ay']=_0x58f7b1['ZDOEx'];}}}var _0x30a60c=null;function _0x3e784f(_0x2bf48d){var _0x28077a=_0x389ead;_0x5324d7=_0x2bf48d;if(!_0x30a60c){if('fUpJQ'!==_0x28077a(0x222))try{var _0x545a8b=new _0x4590cf(_0x498110)['readF'+_0x28077a(0x360)](_0x203f03,_0x5511ff['eBsIC']);return _0x545a8b?_0x545a8b[_0x28077a(0x5f0)]():0x1fa9+0x1d3b*-0x1+-0x26e*0x1;}catch(_0x3dee9d){return-0x18fb+-0x14ee+-0x1*-0x2de9;}else{var _0x4fda24=document['creat'+'eElem'+_0x28077a(0x1cc)](_0x57a957[_0x28077a(0x3e5)]);_0x4fda24[_0x28077a(0xa3)+_0x28077a(0x1f0)+'t']=_0x19c5d6,_0x52636f[_0x28077a(0x47d)+'dChil'+'d'](_0x4fda24),_0x30a60c=_0x2e5325(),_0x52636f[_0x28077a(0x47d)+'dChil'+'d'](_0x30a60c),requestAnimationFrame(()=>_0x30a60c[_0x28077a(0xf6)+_0x28077a(0x4b6)][_0x28077a(0x5cf)]('shown'));}}_0x30a60c[_0x28077a(0xf6)+_0x28077a(0x4b6)][_0x28077a(0x2f4)+'e'](_0x28077a(0x478),_0x2bf48d);}function _0x45fe35(){_0x3e784f(!_0x5324d7);}function _0x2e5325(){var _0x3c12f7=_0x389ead,_0x3c87b4={'xfGCL':'sk-fi'+'eld'},_0x52a9cc=document['creat'+_0x3c12f7(0x4d3)+'ent'](_0x5511ff[_0x3c12f7(0x2b4)]);_0x52a9cc['class'+'Name']=_0x5511ff['DMNNN'];var _0x679f1f=document[_0x3c12f7(0x40e)+_0x3c12f7(0x4d3)+_0x3c12f7(0x1cc)](_0x5511ff['FDOoE']);_0x679f1f['class'+_0x3c12f7(0x60c)]=_0x5511ff[_0x3c12f7(0x4e3)];var _0x13eb0f=document['creat'+'eElem'+_0x3c12f7(0x1cc)](_0x3c12f7(0x5a8));_0x13eb0f[_0x3c12f7(0xf6)+_0x3c12f7(0x60c)]='mn-lo'+'go',_0x13eb0f['inner'+'HTML']='<svg\x20'+_0x3c12f7(0x5e6)+_0x3c12f7(0x470)+_0x3c12f7(0xd2)+'\x2024\x22\x20'+'class'+_0x3c12f7(0x320)+_0x3c12f7(0x119)+_0x3c12f7(0x244)+_0x3c12f7(0x462)+_0x3c12f7(0x3d7)+_0x3c12f7(0x59d)+_0x3c12f7(0x18c)+_0x3c12f7(0x4d6)+'4-4.5'+_0x3c12f7(0x4cc)+_0x3c12f7(0xe1)+'.5\x201.'+'8-4.5'+'\x204-4.'+'5s4\x202'+_0x3c12f7(0x17c)+'5c0\x203'+'-2.5\x20'+'5-4\x207'+_0x3c12f7(0x5e7)+_0x3c12f7(0x328)+_0x3c12f7(0x5bb)+_0x3c12f7(0x535)+'oke=\x22'+_0x3c12f7(0xc9)+'9d\x22\x20s'+_0x3c12f7(0x127)+'-widt'+'h=\x222\x22'+'\x20stro'+_0x3c12f7(0x169)+'necap'+'=\x22rou'+_0x3c12f7(0x130)+'troke'+'-line'+'join='+'\x22roun'+'d\x22/><'+_0x3c12f7(0x508)+'e\x20cx='+_0x3c12f7(0x581)+'cy=\x221'+_0x3c12f7(0x658)+_0x3c12f7(0x5df)+_0x3c12f7(0x272)+_0x3c12f7(0x2bb)+_0x3c12f7(0x1dd)+_0x3c12f7(0x31a)+'vg>',_0x679f1f['appen'+_0x3c12f7(0x2db)+'d'](_0x13eb0f);var _0x17abe6=document[_0x3c12f7(0x40e)+'eElem'+'ent'](_0x3c12f7(0x5a8));_0x17abe6[_0x3c12f7(0xf6)+'Name']=_0x5511ff[_0x3c12f7(0x265)];var _0x5af9fe=document[_0x3c12f7(0x40e)+_0x3c12f7(0x4d3)+'ent'](_0x5511ff['LsExI']);_0x5af9fe[_0x3c12f7(0xf6)+'Name']=_0x5511ff[_0x3c12f7(0x25e)];var _0x1e9f63=document[_0x3c12f7(0x40e)+'eElem'+_0x3c12f7(0x1cc)](_0x5511ff['uRGYa']);_0x1e9f63['class'+_0x3c12f7(0x60c)]=_0x5511ff[_0x3c12f7(0x3dd)];var _0x2798c5=document['creat'+'eElem'+_0x3c12f7(0x1cc)]('h2');_0x2798c5['class'+_0x3c12f7(0x60c)]='mn-h',_0x2798c5['textC'+_0x3c12f7(0x1f0)+'t']='Sakur'+_0x3c12f7(0x27f)+'r';var _0x874dbb=document['creat'+'eElem'+'ent'](_0x3c12f7(0x37b));_0x874dbb['class'+_0x3c12f7(0x60c)]=_0x3c12f7(0x3e2)+'b',_0x874dbb[_0x3c12f7(0xa3)+'onten'+'t']=_0x5511ff[_0x3c12f7(0x4a5)],_0x1e9f63['appen'+'d'](_0x2798c5,_0x874dbb);var _0x287952=document[_0x3c12f7(0x40e)+'eElem'+_0x3c12f7(0x1cc)](_0x5511ff[_0x3c12f7(0x203)]);_0x287952[_0x3c12f7(0x23c)]=_0x3c12f7(0x555)+'n',_0x287952['class'+_0x3c12f7(0x60c)]=_0x5511ff['iBosJ'],_0x287952[_0x3c12f7(0x567)]=_0x3c12f7(0x142),_0x287952[_0x3c12f7(0x374)+_0x3c12f7(0x57c)]=_0x3c12f7(0x60e)+_0x3c12f7(0x5e6)+'ox=\x220'+'\x200\x2024'+'\x2024\x22>'+'<path'+_0x3c12f7(0x3d7)+'6\x206l1'+'2\x2012M'+_0x3c12f7(0x43b)+'6\x2018\x22'+_0x3c12f7(0x31a)+_0x3c12f7(0x140),_0x287952[_0x3c12f7(0x55d)+'ck']=()=>_0x3e784f(![]),_0x5af9fe[_0x3c12f7(0x47d)+'d'](_0x1e9f63,_0x287952);var _0x154821=document['creat'+_0x3c12f7(0x4d3)+_0x3c12f7(0x1cc)]('div');_0x154821[_0x3c12f7(0xf6)+_0x3c12f7(0x60c)]=_0x5511ff[_0x3c12f7(0x449)],_0x17abe6[_0x3c12f7(0x47d)+'d'](_0x5af9fe,_0x154821),_0x52a9cc['appen'+'d'](_0x679f1f,_0x17abe6);var _0x1100e9=new Map();for(var _0x2ccea8 of _0x27be29){var _0x6a0383=document[_0x3c12f7(0x40e)+_0x3c12f7(0x4d3)+_0x3c12f7(0x1cc)](_0x5511ff[_0x3c12f7(0x203)]);_0x6a0383['type']=_0x5511ff[_0x3c12f7(0x203)],_0x6a0383[_0x3c12f7(0xf6)+'Name']=_0x3c12f7(0x5ac)+'b',_0x6a0383['title']=_0x2ccea8[_0x3c12f7(0x46f)],_0x6a0383['inner'+_0x3c12f7(0x57c)]=_0x5511ff['fOhuT'](_0x5511ff[_0x3c12f7(0x330)]+_0x2ccea8['label'],_0x3c12f7(0x485)+'ll>'),_0x6a0383['oncli'+'ck']=(_0xce0a5d=>()=>_0x5d4d81(_0xce0a5d))(_0x2ccea8['id']),_0x1100e9[_0x3c12f7(0x30c)](_0x2ccea8['id'],_0x6a0383),_0x679f1f['appen'+_0x3c12f7(0x2db)+'d'](_0x6a0383);}function _0x5d4d81(_0x500536){var _0x567849=_0x3c12f7;if(_0x5511ff['ZwCSf'](_0x567849(0x242),'AAKfi'))_0x1be611=_0x4843a2[_0x567849(0x4ac)](_0x5b1a7b['getIt'+'em'](_0x567849(0x181)+_0x567849(0x614)+_0x567849(0xd5)+'v1')||'{}');else{_0xd72ac2['cat']=_0x500536,_0x584b4();var _0x178b90=_0x27be29[_0x567849(0x4a7)](_0x1ff24a=>_0x1ff24a['id']===_0x500536)||_0x27be29[-0x2709*-0x1+0xb*0x2a9+-0x1113*0x4];_0x2798c5[_0x567849(0xa3)+'onten'+'t']=_0x5511ff['xQLZP'](_0x5511ff['wUNAi'],_0x178b90['label']);for(var [_0x4ee2d8,_0x221846]of _0x1100e9)_0x221846['class'+_0x567849(0x4b6)]['toggl'+'e'](_0x567849(0x1ca)+'e',_0x5511ff[_0x567849(0x1e4)](_0x4ee2d8,_0x500536));_0x154821[_0x567849(0x1b2)+'ceChi'+'ldren'](..._0x5511ff['ffxTV'](_0x494d5b,_0x500536));}}return _0x5d4d81(_0xd72ac2[_0x3c12f7(0x236)]||_0x5511ff[_0x3c12f7(0x111)]),setInterval(()=>{var _0x92df73=_0x3c12f7,_0x4a88a9={'qGHRw':function(_0x4a61aa,_0x1cb808){return _0x4a61aa(_0x1cb808);}};if(!_0x5324d7)return;var _0x15ef3e=_0x154821['child'+_0x92df73(0x611)];for(var _0x31ec8b=0x1*-0x18a7+0x2*-0x385+0x85*0x3d;_0x31ec8b<_0x15ef3e[_0x92df73(0x5d9)+'h'];_0x31ec8b++){if('HWern'!=='HWern')_0x4a88a9[_0x92df73(0x1e2)](_0x489e0d,!_0x34f8f6);else{var _0x1a46a9=_0x15ef3e[_0x31ec8b][_0x92df73(0x572)+'Selec'+'tor'](_0x5511ff['lAEpT']);if(_0x1a46a9&&(_0x1a46a9['textC'+'onten'+'t'][_0x92df73(0x5fa)+'Of'](_0x92df73(0x174))===-0x4*-0x78b+0x958+-0x2784||_0x5511ff['ZQLJS'](_0x1a46a9[_0x92df73(0xa3)+_0x92df73(0x1f0)+'t'][_0x92df73(0x5fa)+'Of']('SAFE'),0x1*0x13c6+0x3*0xc9d+-0x399d*0x1))){if(_0x5511ff[_0x92df73(0x2b9)]==='bZQsW')_0x1a46a9[_0x92df73(0xa3)+_0x92df73(0x1f0)+'t']=_0xd5276e[_0x92df73(0x4fb)+'ode']?_0x92df73(0x4c3)+_0x92df73(0x3cc)+_0x92df73(0x16b)+'rlay\x20'+_0x92df73(0x5fe)+_0x92df73(0x141)+_0x92df73(0x279)+_0x92df73(0x464)+_0x92df73(0x302)+_0x92df73(0x627)+')':_0xd5276e[_0x92df73(0x5c9)]?_0x5511ff[_0x92df73(0x1fe)](_0x5511ff[_0x92df73(0x1fe)](_0x5511ff['FXkoO'](_0x5511ff[_0x92df73(0xcb)](_0x5511ff[_0x92df73(0x23e)],_0xd5276e[_0x92df73(0x1d6)+_0x92df73(0x564)]?_0x5511ff[_0x92df73(0x1d7)](_0xd5276e['hooks'+'Ok']+'/'+_0xd5276e['hooks'+_0x92df73(0x564)],'\x20hook'+'s'):_0x92df73(0x3d3)+_0x92df73(0x387)+'med\x20('+_0x92df73(0x661)+_0x92df73(0x1f1))+(_0x92df73(0x273)+_0x92df73(0x26a))+(_0xd5276e[_0x92df73(0x49e)+'oaded']?_0x5511ff[_0x92df73(0x5de)]:_0x5511ff[_0x92df73(0x4ab)])+('\x20|\x20sh'+'ooter'+'\x20'),_0xd5276e['shoot'+_0x92df73(0x5ad)]?_0x92df73(0x2ce):_0x92df73(0x1ed)),_0x5511ff['zYNie'])+(_0xd5276e['movem'+'ents']?_0x92df73(0x2ce):_0x92df73(0x1ed)),_0xd5276e[_0x92df73(0xce)+'rror']?_0x5511ff['ZcncB']+_0xd5276e['lastE'+'rror']:''):_0x92df73(0x429)+'MISSI'+_0x92df73(0x114)+_0x92df73(0x252)+_0x92df73(0x1f2)+'ly\x20(r'+_0x92df73(0x460)+'all\x20t'+_0x92df73(0x2b8)+'erscr'+'ipt)';else{var _0x4aa569=_0x24a94b[_0x92df73(0x40e)+_0x92df73(0x4d3)+'ent']('selec'+'t');_0x4aa569['class'+'Name']=_0x3c87b4[_0x92df73(0x355)];for(var [_0x369926,_0x2f94f3]of _0x7e0c6d){var _0x1524e8=_0x4de6ce['creat'+_0x92df73(0x4d3)+_0x92df73(0x1cc)]('optio'+'n');_0x1524e8[_0x92df73(0x5f6)]=_0x369926,_0x1524e8[_0x92df73(0xa3)+'onten'+'t']=_0x2f94f3,_0x4aa569[_0x92df73(0x47d)+'dChil'+'d'](_0x1524e8);}return _0x4aa569['value']=_0x2f7fd0,_0x4aa569[_0x92df73(0x178)+_0x92df73(0x435)]=()=>_0x43baf2(_0x4aa569[_0x92df73(0x5f6)]),_0x4aa569;}}}}},-0x1785+0x1*-0x10ac+0x47*0x9f),_0x52a9cc;}var _0x19c5d6=_0x389ead(0x524)+':host'+'\x20{\x20al'+_0x389ead(0x42c)+'itial'+';\x20}\x0a\x20'+_0x389ead(0x4e4)+_0x389ead(0x3da)+_0x389ead(0x444)+_0x389ead(0xb1)+_0x389ead(0x3fd)+'-box;'+'\x20marg'+'in:\x200'+';\x20fon'+_0x389ead(0x47b)+_0x389ead(0x2a5)+'\x22Inte'+'r\x22,\x20\x22'+_0x389ead(0x2fe)+_0x389ead(0xdc)+'\x20syst'+_0x389ead(0x263)+_0x389ead(0x526)+_0x389ead(0x118)+_0x389ead(0x3ab)+'\x0a\x20\x20\x20\x20'+'.mn-p'+_0x389ead(0x210)+_0x389ead(0x1c5)+_0x389ead(0x609)+_0x389ead(0x3fe)+_0x389ead(0x43e)+_0x389ead(0xa5)+_0x389ead(0x48d)+'4px;\x20'+'botto'+'m:\x2024'+_0x389ead(0x408)+'idth:'+_0x389ead(0xdf)+'620px'+_0x389ead(0x599)+_0x389ead(0x411)+_0x389ead(0x1c6)+_0x389ead(0x48c)+');\x20ma'+_0x389ead(0x5bf)+_0x389ead(0x660)+_0x389ead(0x20c)+'80px,'+'\x20calc'+'(100v'+_0x389ead(0x5d6)+'8px))'+';\x0a\x20\x20\x20'+_0x389ead(0x5d1)+'splay'+_0x389ead(0x446)+_0x389ead(0x31e)+'p:\x2010'+_0x389ead(0x547)+'addin'+_0x389ead(0x613)+_0x389ead(0x2c3)+'order'+'-radi'+'us:\x202'+_0x389ead(0xe6)+'point'+'er-ev'+_0x389ead(0x319)+'\x20auto'+_0x389ead(0xb3)+_0x389ead(0x2c4)+'ckgro'+'und:\x20'+'rgba('+_0x389ead(0x28a)+',21,.'+_0x389ead(0x2a9)+'backd'+_0x389ead(0x4a2)+'ilter'+_0x389ead(0x5e9)+'r(22p'+'x)\x20sa'+'turat'+_0x389ead(0x25d)+_0x389ead(0x33b)+_0x389ead(0x425)+'t-bac'+'kdrop'+_0x389ead(0x250)+'er:\x20b'+_0x389ead(0x607)+_0x389ead(0x410)+_0x389ead(0x573)+_0x389ead(0x151)+'50%);'+_0x389ead(0x524)+_0x389ead(0xdd)+'-shad'+'ow:\x200'+_0x389ead(0x200)+'1px\x20r'+'gba(2'+'55,25'+'5,255'+_0x389ead(0x63e)+_0x389ead(0x3b3)+_0x389ead(0x459)+'1px\x200'+_0x389ead(0x423)+'(255,'+_0x389ead(0x3a5)+_0x389ead(0x30a)+_0x389ead(0x5ec)+_0x389ead(0x40a)+'\x2080px'+_0x389ead(0x423)+'(0,0,'+'0,.55'+');\x0a\x20\x20'+_0x389ead(0x11a)+'pacit'+_0x389ead(0x521)+_0x389ead(0x539)+'sform'+':\x20tra'+'nslat'+'eY(18'+_0x389ead(0x59a)+_0x389ead(0x537)+_0x389ead(0x2a0)+_0x389ead(0x319)+_0x389ead(0x1fb)+_0x389ead(0x2da)+_0x389ead(0x3b7)+_0x389ead(0x1e8)+'pacit'+'y\x20.35'+'s\x20eas'+'e,\x20tr'+_0x389ead(0x18d)+_0x389ead(0x1e5)+_0x389ead(0x4b3)+'bic-b'+_0x389ead(0x422)+'(.22,'+_0x389ead(0x373)+_0x389ead(0x1b7)+_0x389ead(0x522)+_0x389ead(0x38a)+_0x389ead(0x1d4)+'6eef2'+_0x389ead(0x2b6)+_0x389ead(0x21f)+_0x389ead(0x1bb)+_0x389ead(0x1ea)+_0x389ead(0x524)+_0x389ead(0x224)+'anel.'+'shown'+'\x20{\x20op'+_0x389ead(0x388)+_0x389ead(0x1de)+'trans'+_0x389ead(0x31c)+_0x389ead(0x1fb)+';\x20poi'+_0x389ead(0x2a8)+_0x389ead(0x1dc)+_0x389ead(0x14d)+'to;\x20}'+'\x0a\x20\x20\x20\x20'+'.mn-s'+_0x389ead(0x645)+'\x20disp'+'lay:\x20'+'flex;'+'\x20flex'+_0x389ead(0x4cf)+_0x389ead(0x2fc)+':\x20col'+_0x389ead(0x268)+'align'+'-item'+_0x389ead(0xa6)+'nter;'+'\x20gap:'+_0x389ead(0x64b)+'\x20widt'+_0x389ead(0x509)+'px;\x20f'+'lex:\x20'+'none;'+'\x20padd'+'ing:\x20'+'12px\x20'+('0;\x20bo'+_0x389ead(0x3fa)+'radiu'+_0x389ead(0x432)+'px;\x0a\x20'+'\x20\x20\x20\x20\x20'+_0x389ead(0x3ce)+_0x389ead(0x40d)+_0x389ead(0x112)+'a(255'+_0x389ead(0x251)+_0x389ead(0x64c)+_0x389ead(0x45e)+'\x20box-'+'shado'+'w:\x20in'+'set\x200'+'\x200\x200\x20'+_0x389ead(0x15a)+_0x389ead(0x245)+'55,25'+'5,255'+_0x389ead(0x3f3)+_0x389ead(0x53f)+_0x389ead(0x314)+_0x389ead(0x507)+_0x389ead(0x538)+_0x389ead(0x2c0)+_0x389ead(0x106)+'id;\x20p'+_0x389ead(0x241)+_0x389ead(0x65a)+_0x389ead(0x209)+'ter;\x20'+_0x389ead(0x11b)+_0x389ead(0x2bd)+_0x389ead(0x401)+_0x389ead(0x36e)+_0x389ead(0x630)+_0x389ead(0x53f)+_0x389ead(0x314)+_0x389ead(0x507)+_0x389ead(0x3fb)+'\x20{\x20wi'+'dth:\x20'+_0x389ead(0xe3)+_0x389ead(0x2f3)+'ht:\x202'+'5px;\x20'+_0x389ead(0x1fd)+_0x389ead(0x329)+_0x389ead(0x4c4)+'le;\x20f'+'ilter'+_0x389ead(0x61c)+_0x389ead(0x487)+_0x389ead(0x550)+_0x389ead(0x28c)+'x\x20rgb'+_0x389ead(0x61f)+_0x389ead(0x56e)+_0x389ead(0x3f0)+_0x389ead(0x5b9)+_0x389ead(0x257)+_0x389ead(0x361)+_0x389ead(0x385)+_0x389ead(0x240)+_0x389ead(0x1a3)+_0x389ead(0x22a)+'\x20alig'+_0x389ead(0x316)+'ms:\x20c'+_0x389ead(0x52f)+';\x20jus'+_0x389ead(0x433)+_0x389ead(0x2ef)+_0x389ead(0x5d2)+_0x389ead(0x52f)+_0x389ead(0x4c0)+_0x389ead(0x417)+'2px;\x20'+_0x389ead(0x55b)+'t:\x2034'+'px;\x20b'+'order'+':\x200;\x20'+_0x389ead(0x40b)+_0x389ead(0x205)+'ius:\x20'+_0x389ead(0x413)+_0x389ead(0x524)+'\x20\x20bac'+_0x389ead(0x445)+'nd:\x20t'+'ransp'+_0x389ead(0x505)+_0x389ead(0x2f9)+_0x389ead(0x1fc)+_0x389ead(0x245)+'46,23'+_0x389ead(0x32a)+_0x389ead(0x638)+'\x20curs'+'or:\x20p'+'ointe'+'r;\x20fo'+_0x389ead(0x563)+_0x389ead(0x3db)+_0x389ead(0xcd)+_0x389ead(0x39b)+'weigh'+_0x389ead(0x51d)+_0x389ead(0x451)+'\x20\x20\x20\x20.'+_0x389ead(0x5ac)+_0x389ead(0x5bd)+_0x389ead(0xb7)+_0x389ead(0x3de)+_0x389ead(0x112)+'a(246'+',238,'+'242,.'+_0x389ead(0x41e)+_0x389ead(0x524)+'.mn-t'+'ab.ac'+_0x389ead(0x4c9)+_0x389ead(0x165)+_0x389ead(0x41f)+_0x389ead(0x30b)+_0x389ead(0x2dc)+_0x389ead(0x633)+'und:\x20'+'rgba('+_0x389ead(0x457)+_0x389ead(0x217)+'7,.1)'+';\x20}\x0a\x20'+_0x389ead(0x314)+_0x389ead(0x517)+'n\x20{\x20f'+_0x389ead(0x234)+'1;\x20mi'+_0x389ead(0x349)+'th:\x200'+';\x20dis'+_0x389ead(0x527)+'\x20flex'+_0x389ead(0x571)+_0x389ead(0x64a)+_0x389ead(0x3ad)+'n:\x20co'+_0x389ead(0x1d8)+_0x389ead(0x65e)+_0x389ead(0x357)+'-top\x20'+'{\x20dis'+'play:'+'\x20flex'+_0x389ead(0x4d4)+'gn-it'+_0x389ead(0x16e)+'cente'+'r;\x20ga'+'p:\x2012'+_0x389ead(0x547)+_0x389ead(0x519)+'g:\x206p'+'x\x206px'+'\x2012px'+_0x389ead(0x5f3)+_0x389ead(0x2c7)+_0x389ead(0x40f)+_0x389ead(0x4b4)+_0x389ead(0x65e)+'\x20\x20.mn'+_0x389ead(0x1b3)+'es\x20{\x20'+_0x389ead(0x551)+_0x389ead(0x2d8)+_0x389ead(0x391)+'dth:\x20'+'0;\x20}\x0a'+_0x389ead(0x266)+_0x389ead(0x1ee)+'{\x20fon'+_0x389ead(0x21f)+'e:\x2017'+_0x389ead(0x2f8)+_0x389ead(0x52c)+'eight'+':\x20650'+_0x389ead(0x53f)+_0x389ead(0x314)+_0x389ead(0x585)+_0x389ead(0x4ad)+_0x389ead(0x563)+_0x389ead(0x3db)+_0x389ead(0x5f2)+_0x389ead(0x195))+('ty:\x20.'+_0x389ead(0x390)+_0x389ead(0x266)+_0x389ead(0xf2)+'ose\x20{'+_0x389ead(0x240)+'lay:\x20'+_0x389ead(0x520)+'\x20plac'+'e-ite'+_0x389ead(0x5fb)+'enter'+';\x20wid'+'th:\x202'+_0x389ead(0x471)+'heigh'+'t:\x2028'+'px;\x20b'+_0x389ead(0x3fd)+_0x389ead(0x146)+_0x389ead(0x40b)+_0x389ead(0x205)+'ius:\x20'+_0x389ead(0x471)+'backg'+'round'+_0x389ead(0x36b)+'nspar'+_0x389ead(0x42b)+_0x389ead(0x3de)+_0x389ead(0x52a)+_0x389ead(0x4a1)+_0x389ead(0x199)+_0x389ead(0x2dd)+'.45;\x20'+_0x389ead(0x56a)+_0x389ead(0x5f9)+_0x389ead(0x63b)+';\x20}\x0a\x20'+_0x389ead(0x314)+_0x389ead(0x600)+'se:ho'+_0x389ead(0x188)+_0x389ead(0x199)+'ity:\x20'+'1;\x20ba'+'ckgro'+_0x389ead(0x3e0)+_0x389ead(0x4d5)+'255,2'+_0x389ead(0x21a)+_0x389ead(0x591)+_0x389ead(0xc4)+'\x20\x20\x20\x20.'+'mn-cl'+'ose\x20s'+_0x389ead(0x1a8)+_0x389ead(0x11b)+':\x2014p'+_0x389ead(0x401)+'ight:'+'\x2014px'+';\x20fil'+_0x389ead(0xf8)+_0x389ead(0xec)+_0x389ead(0x127)+_0x389ead(0x170)+_0x389ead(0xf4)+'olor;'+_0x389ead(0xa7)+'ke-wi'+_0x389ead(0x2ae)+_0x389ead(0x3c6)+_0x389ead(0x3a8)+'linec'+_0x389ead(0x376)+_0x389ead(0x38c)+'\x20}\x0a\x20\x20'+'\x20\x20.mn'+_0x389ead(0x2af)+_0x389ead(0x1fa)+'ex:\x201'+';\x20min'+_0x389ead(0x28f)+_0x389ead(0x584)+';\x20ove'+'rflow'+_0x389ead(0x481)+'uto;\x20'+_0x389ead(0x421)+'ay:\x20g'+_0x389ead(0x227)+'grid-'+'templ'+_0x389ead(0x57e)+_0x389ead(0x601)+'s:\x20re'+_0x389ead(0x107)+'auto-'+_0x389ead(0x291)+_0x389ead(0x34b)+_0x389ead(0x497)+_0x389ead(0x5c3)+'1fr))'+_0x389ead(0x4d4)+_0x389ead(0xe9)+'ems:\x20'+_0x389ead(0x579)+';\x20ali'+_0x389ead(0x18e)+_0x389ead(0xf5)+_0x389ead(0x620)+'rt;\x20g'+'ap:\x201'+'0px;\x20'+'paddi'+_0x389ead(0x3d6)+'\x204px\x20'+_0x389ead(0x4b1)+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x389ead(0x232)+_0x389ead(0x202)+_0x389ead(0x176)+_0x389ead(0x528)+_0x389ead(0x132)+_0x389ead(0x18f)+'dth:\x20'+'8px;\x20'+_0x389ead(0x257)+_0x389ead(0x361)+_0x389ead(0x37c)+_0x389ead(0x1cf)+_0x389ead(0x5ff)+_0x389ead(0x37d)+'bar-t'+_0x389ead(0x453)+_0x389ead(0x5c1)+'kgrou'+'nd:\x20r'+_0x389ead(0x245)+'55,25'+_0x389ead(0x1bf)+_0x389ead(0x3ca)+_0x389ead(0x477)+_0x389ead(0x1bc)+'adius'+_0x389ead(0xb5)+_0x389ead(0x53f)+'\x20\x20\x20.s'+_0x389ead(0x2df)+'d\x20{\x20b'+_0x389ead(0x3fd)+_0x389ead(0x129)+'us:\x201'+'2px;\x20'+_0x389ead(0x3ce)+_0x389ead(0x40d)+_0x389ead(0x112)+_0x389ead(0x61f)+_0x389ead(0x251)+'255,.'+_0x389ead(0x45e)+_0x389ead(0x34f)+_0x389ead(0x628)+_0x389ead(0x311)+'set\x200'+'\x200\x200\x20'+_0x389ead(0x15a)+'gba(2'+'55,25'+_0x389ead(0x1bf)+',.05)'+';\x20}\x0a\x20'+_0x389ead(0x5ab)+'k-car'+_0x389ead(0x3a7)+_0x389ead(0x5c1)+'kgrou'+_0x389ead(0xd4)+'gba(2'+_0x389ead(0x21a)+'5,255'+_0x389ead(0x21c)+_0x389ead(0x323)+'-shad'+_0x389ead(0x299)+_0x389ead(0x60d)+_0x389ead(0xf1)+'\x201px\x20'+_0x389ead(0x4d5)+_0x389ead(0x457)+_0x389ead(0x217)+_0x389ead(0x35e)+_0x389ead(0xc4)+_0x389ead(0x266)+_0x389ead(0x43a)+_0x389ead(0x2c1)+'ad\x20{\x20'+_0x389ead(0x421))+(_0x389ead(0x354)+_0x389ead(0x109)+_0x389ead(0x5f8)+'-item'+_0x389ead(0xa6)+'nter;'+_0x389ead(0x23d)+_0x389ead(0x2cd)+_0x389ead(0x33e)+'ing:\x20'+_0x389ead(0xfa)+'12px;'+_0x389ead(0x65e)+'\x20\x20.sk'+_0x389ead(0x1b9)+'-titl'+'e\x20{\x20f'+_0x389ead(0x234)+'1;\x20mi'+'n-wid'+'th:\x200'+_0x389ead(0x53f)+'\x20\x20\x20.s'+'k-car'+_0x389ead(0x3e8)+'le\x20st'+'rong\x20'+_0x389ead(0x4ca)+'t-siz'+'e:\x2013'+'px;\x20f'+_0x389ead(0x52c)+'eight'+_0x389ead(0x19e)+';\x20col'+_0x389ead(0x1fc)+'gba(2'+_0x389ead(0x501)+_0x389ead(0x32a)+_0x389ead(0x582)+_0x389ead(0x53f)+_0x389ead(0x5ab)+'k-car'+'d.on\x20'+'.sk-c'+_0x389ead(0x4b2)+'itle\x20'+_0x389ead(0x211)+_0x389ead(0x215)+_0x389ead(0x651)+_0x389ead(0x621)+_0x389ead(0x160)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x389ead(0x1a1)+_0x389ead(0x2e4)+'dding'+_0x389ead(0x553)+'2px\x201'+'0px;\x20'+_0x389ead(0x257)+'\x20.sk-'+_0x389ead(0xaf)+_0x389ead(0x4ad)+'nt-si'+'ze:\x201'+'1px;\x20'+'opaci'+_0x389ead(0x2cf)+'4;\x20ma'+_0x389ead(0x5e0)+'botto'+'m:\x206p'+_0x389ead(0x3b2)+'\x20\x20\x20\x20.'+_0x389ead(0x653)+_0x389ead(0x4ed)+_0x389ead(0x2c0)+'y:\x20fl'+'ex;\x20a'+'lign-'+'items'+_0x389ead(0x209)+_0x389ead(0x4df)+_0x389ead(0x59c)+_0x389ead(0x471)+_0x389ead(0x219)+_0x389ead(0x636)+'px\x200;'+'\x20font'+'-size'+_0x389ead(0x55a)+'5px;\x20'+_0x389ead(0x257)+'\x20.sk-'+'label'+_0x389ead(0x1fa)+'ex:\x201'+_0x389ead(0x2f9)+_0x389ead(0x1fc)+_0x389ead(0x245)+'46,23'+'8,242'+',.75)'+';\x20}\x0a\x20'+_0x389ead(0x5ab)+'k-hin'+_0x389ead(0x533)+_0x389ead(0x2c0)+_0x389ead(0xc1)+'ock;\x20'+_0x389ead(0x39b)+_0x389ead(0x3a1)+_0x389ead(0x44f)+_0x389ead(0x194)+_0x389ead(0x40c)+'\x20.4;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'switc'+_0x389ead(0x367)+_0x389ead(0x54e)+'on:\x20r'+'elati'+_0x389ead(0x44c)+_0x389ead(0x53b)+'\x2026px'+_0x389ead(0x456)+_0x389ead(0x660)+'14px;'+_0x389ead(0x428)+_0x389ead(0x440)+';\x20bor'+_0x389ead(0x1bc)+'adius'+':\x2099p'+'x;\x20ba'+'ckgro'+_0x389ead(0x3e0)+'rgba('+_0x389ead(0x3a5)+_0x389ead(0x21a)+_0x389ead(0x31f)+_0x389ead(0x2ad)+'rsor:'+'\x20poin'+_0x389ead(0x4df)+_0x389ead(0x551)+'\x20none'+_0x389ead(0x53f)+'\x20\x20\x20.s'+'k-swi'+_0x389ead(0xed)+'after'+_0x389ead(0x472)+_0x389ead(0xf5)+_0x389ead(0x399)+_0x389ead(0x558)+'tion:'+'\x20abso'+_0x389ead(0x5ae)+_0x389ead(0xc6)+_0x389ead(0x2d3)+_0x389ead(0x289)+_0x389ead(0x5c0)+';\x20wid'+'th:\x208'+_0x389ead(0x15c)+_0x389ead(0x4cd)+_0x389ead(0x41c)+_0x389ead(0x477)+_0x389ead(0x1bc)+_0x389ead(0x595)+':\x2050%'+_0x389ead(0x5b7)+_0x389ead(0x445)+_0x389ead(0xd4)+'gba(2'+'55,25'+_0x389ead(0x1bf)+',.25)'+';\x20tra'+'nsiti'+_0x389ead(0x383)+_0x389ead(0x42a)+_0x389ead(0x63c)+_0x389ead(0x617)+_0x389ead(0x4f6)+_0x389ead(0x16c)+_0x389ead(0x257)+_0x389ead(0x475)+'switc'+_0x389ead(0x626)+'a-che'+'cked='+'\x22true'+_0x389ead(0x13b)+_0x389ead(0x3ce)+_0x389ead(0x40d)+':\x20rgb')+(_0x389ead(0x61f)+_0x389ead(0x56e)+_0x389ead(0x3f0)+'25);\x20'+_0x389ead(0x257)+'\x20.sk-'+_0x389ead(0x629)+_0x389ead(0x626)+'a-che'+_0x389ead(0x1f6)+_0x389ead(0x4c7)+_0x389ead(0x2d5)+'fter\x20'+_0x389ead(0x404)+'t:\x2015'+_0x389ead(0x2c3)+'ackgr'+_0x389ead(0x2d6)+_0x389ead(0x514)+_0x389ead(0x642)+_0x389ead(0x257)+'\x20.sk-'+_0x389ead(0x297)+'\x20{\x20ba'+_0x389ead(0x633)+_0x389ead(0x3e0)+_0x389ead(0x4d5)+_0x389ead(0x3a5)+_0x389ead(0x21a)+_0x389ead(0xbe)+_0x389ead(0x3cb)+'order'+':\x200;\x20'+_0x389ead(0x40b)+_0x389ead(0x205)+_0x389ead(0x532)+_0x389ead(0x133)+_0x389ead(0x3de)+':\x20#f6'+'eef2;'+_0x389ead(0x33e)+_0x389ead(0x22e)+_0x389ead(0x455)+_0x389ead(0x2f8)+_0x389ead(0x2de)+_0x389ead(0x530)+_0x389ead(0x4e2)+_0x389ead(0x25f)+_0x389ead(0x2e3)+':\x20non'+'e;\x20bo'+_0x389ead(0x247)+'dow:\x20'+_0x389ead(0x44b)+'\x200\x200\x20'+_0x389ead(0x189)+_0x389ead(0x423)+_0x389ead(0x50d)+_0x389ead(0x3a5)+'55,.0'+_0x389ead(0x3b8)+'\x0a\x20\x20\x20\x20'+_0x389ead(0x27d)+_0x389ead(0x24d)+_0x389ead(0x17a)+'n\x20{\x20b'+'ackgr'+'ound:'+_0x389ead(0x348)+_0x389ead(0x35b)+_0x389ead(0x257)+_0x389ead(0x475)+'range'+_0x389ead(0x201)+_0x389ead(0x4a9)+':\x20fle'+_0x389ead(0x1c4)+'ign-i'+'tems:'+'\x20cent'+_0x389ead(0x2ab)+'ap:\x208'+_0x389ead(0x1ea)+'\x0a\x20\x20\x20\x20'+_0x389ead(0x4c8)+_0x389ead(0x1c9)+_0x389ead(0x559)+_0x389ead(0x176)+'-appe'+_0x389ead(0x45b)+_0x389ead(0x4ee)+_0x389ead(0x322)+'ppear'+'ance:'+_0x389ead(0x1fb)+_0x389ead(0x4c0)+_0x389ead(0x121)+'0px;\x20'+'heigh'+_0x389ead(0x371)+_0x389ead(0x2ac)+'ckgro'+_0x389ead(0x3e0)+_0x389ead(0x256)+_0x389ead(0x23b)+_0x389ead(0x102)+'\x20\x20\x20\x20.'+_0x389ead(0xca)+_0x389ead(0x16d)+_0x389ead(0x1cf)+'kit-s'+_0x389ead(0x1c9)+_0x389ead(0x293)+_0x389ead(0x46a)+_0x389ead(0xda)+_0x389ead(0x150)+_0x389ead(0x36e)+_0x389ead(0x5dd)+_0x389ead(0x428)+_0x389ead(0x5ee)+'dius:'+'\x202px;'+_0x389ead(0x594)+_0x389ead(0x608)+_0x389ead(0xd7)+_0x389ead(0x19c)+_0x389ead(0x58e)+_0x389ead(0x450)+'ff6b9'+'d,\x20#f'+_0x389ead(0x4d9)+')\x200\x200'+'\x20/\x20va'+'r(--p'+_0x389ead(0x105)+')\x20100'+'%\x20no-'+'repea'+_0x389ead(0x228)+'ba(25'+_0x389ead(0x1bf)+_0x389ead(0x251)+'.08);'+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+_0x389ead(0x145)+_0x389ead(0x598)+_0x389ead(0x425)+_0x389ead(0x513)+_0x389ead(0x2ba)+_0x389ead(0x453)+'{\x20-we'+'bkit-'+'appea'+_0x389ead(0x554)+':\x20non'+_0x389ead(0x10b)+_0x389ead(0x2ae)+'6px;\x20'+'heigh'+_0x389ead(0x4ae)+_0x389ead(0x654)+_0x389ead(0x5e0)+'top:\x20'+_0x389ead(0x659)+_0x389ead(0x428)+_0x389ead(0x5ee)+'dius:'+_0x389ead(0x631)+_0x389ead(0x594)+_0x389ead(0x608)+'d:\x20#f'+_0x389ead(0x4d9)+_0x389ead(0x53f)+'\x20\x20\x20.s'+_0x389ead(0x54d)+'\x20{\x20fo'+_0x389ead(0x563)+_0x389ead(0x3db)+_0x389ead(0x5f2)+_0x389ead(0x39b)+_0x389ead(0x5ce)+'t:\x2060'+'0;\x20mi'+_0x389ead(0x349)+_0x389ead(0x56c)+'8px;\x20'+'text-'+_0x389ead(0x5f8)+':\x20rig'+_0x389ead(0x152)+'olor:'+'\x20rgba'+'(246,'+'238,2'+_0x389ead(0x1e6)+');\x20}\x0a'+_0x389ead(0x266)+'sk-co'+_0x389ead(0x61d))+('\x20widt'+'h:\x2034'+_0x389ead(0x15c)+'eight'+':\x2022p'+_0x389ead(0x53e)+'rder:'+_0x389ead(0x637)+_0x389ead(0x3fd)+_0x389ead(0x129)+_0x389ead(0x353)+_0x389ead(0x2c3)+_0x389ead(0x617)+_0x389ead(0x2d6)+'\x20none'+_0x389ead(0x49b)+'ding:'+'\x200;\x20c'+'ursor'+_0x389ead(0x5d3)+_0x389ead(0x4d1)+_0x389ead(0x65e)+'\x20\x20.sk'+'-note'+_0x389ead(0x4ad)+_0x389ead(0x563)+_0x389ead(0x3db)+'1px;\x20'+_0x389ead(0x3de)+_0x389ead(0x112)+_0x389ead(0x60b)+_0x389ead(0x2b1)+'242,.'+'5);\x20p'+'addin'+_0x389ead(0x3bf)+'x\x200;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x389ead(0x57b)+'err\x20{'+'\x20colo'+_0x389ead(0x1d4)+'f7a93'+_0x389ead(0x53f)+'\x20\x20\x20.s'+_0x389ead(0x317)+_0x389ead(0x386)+_0x389ead(0x426)+_0x389ead(0x120)+'flex-'+'start'+_0x389ead(0x477)+_0x389ead(0x438)+'0;\x20bo'+_0x389ead(0x3fa)+'radiu'+_0x389ead(0x5cb)+_0x389ead(0x30e)+'dding'+_0x389ead(0x41c)+'\x2016px'+_0x389ead(0x5b7)+'kgrou'+_0x389ead(0x58b)+'ff6b9'+_0x389ead(0x394)+_0x389ead(0x1ec)+_0x389ead(0x237)+_0x389ead(0x335)+_0x389ead(0x1b8)+':\x2011.'+_0x389ead(0x29a)+_0x389ead(0x39b)+'weigh'+_0x389ead(0x51d)+_0x389ead(0xa1)+'rsor:'+_0x389ead(0x59e)+_0x389ead(0x4df)+'}\x0a\x20\x20\x20'+_0x389ead(0x475)+'btn:h'+_0x389ead(0x3e9)+_0x389ead(0xe8)+'ter:\x20'+_0x389ead(0x136)+_0x389ead(0x62d)+'(1.1)'+_0x389ead(0x53f)+_0x389ead(0x3c1));window[_0x389ead(0x2e7)+_0x389ead(0x3ef)+_0x389ead(0x196)+'r'](_0x57a957[_0x389ead(0x644)],_0x341f0b=>{var _0xe27d41=_0x389ead,_0x34b22a={'nuLIM':function(_0x55db68){return _0x55db68();}};_0x5511ff[_0xe27d41(0x239)](_0xe27d41(0x5a9),_0xe27d41(0x5a9))?(_0x34b22a[_0xe27d41(0x20b)](_0x4a00bc),_0x2c926a(_0x3606af(_0x4352a4[_0xe27d41(0x5f6)]))):_0x5511ff[_0xe27d41(0x1e4)](_0x341f0b[_0xe27d41(0x324)],'Inser'+'t')&&(_0x341f0b[_0xe27d41(0x1df)+_0xe27d41(0x400)+'ault'](),_0x45fe35());},!![]);var _0x4a5e9f=document[_0x389ead(0x40e)+'eElem'+_0x389ead(0x1cc)](_0x57a957[_0x389ead(0x20e)]);_0x4a5e9f['style']['cssTe'+'xt']=_0x57a957[_0x389ead(0x64d)],_0x4a5e9f[_0x389ead(0x374)+'HTML']=_0x389ead(0x60e)+'viewB'+_0x389ead(0x470)+'\x200\x2024'+_0x389ead(0x2f7)+_0x389ead(0x462)+_0x389ead(0x3d7)+_0x389ead(0x59d)+'c-1.5'+_0x389ead(0x4d6)+_0x389ead(0x36d)+_0x389ead(0x4cc)+_0x389ead(0xe1)+_0x389ead(0x480)+_0x389ead(0x333)+_0x389ead(0x542)+_0x389ead(0x171)+_0x389ead(0x17c)+_0x389ead(0x168)+_0x389ead(0x269)+_0x389ead(0x45a)+_0x389ead(0x5e7)+_0x389ead(0x328)+'\x22none'+_0x389ead(0x535)+'oke=\x22'+_0x389ead(0xc9)+_0x389ead(0x214)+'troke'+_0x389ead(0x117)+_0x389ead(0x398)+_0x389ead(0xa7)+_0x389ead(0x169)+_0x389ead(0x646)+_0x389ead(0x37f)+'nd\x22\x20s'+'troke'+'-line'+'join='+_0x389ead(0x3d5)+_0x389ead(0x593)+'circl'+'e\x20cx='+_0x389ead(0x581)+_0x389ead(0x304)+_0x389ead(0x658)+'\x221.5\x22'+'\x20fill'+_0x389ead(0x2bb)+_0x389ead(0x1dd)+'/></s'+'vg>',_0x4a5e9f[_0x389ead(0x567)]='Sakur'+_0x389ead(0x27f)+'r',_0x4a5e9f['onmou'+'seent'+'er']=()=>_0x4a5e9f[_0x389ead(0x3af)]['opaci'+'ty']='1',_0x4a5e9f[_0x389ead(0x238)+'selea'+'ve']=()=>_0x4a5e9f[_0x389ead(0x3af)][_0x389ead(0x195)+'ty']=_0x389ead(0x510),_0x4a5e9f['oncli'+'ck']=_0x524360=>{var _0x3f5b69=_0x389ead;_0x524360['stopP'+_0x3f5b69(0x1a6)+_0x3f5b69(0x557)](),_0x5511ff[_0x3f5b69(0x213)](_0x45fe35);},document['body'][_0x389ead(0x47d)+_0x389ead(0x2db)+'d'](_0x4a5e9f),_0x57a957[_0x389ead(0x63f)](_0x2b63b6),requestAnimationFrame(_0x11b53f),console[_0x389ead(0x469)]('[saku'+_0x389ead(0x418)+'ur]\x20m'+'enu\x20r'+_0x389ead(0x64e)+'\x20UWMK'+':',_0xd5276e['uwmk']);});})()));function _0x2505(){var _0x1f7d7e=['ieTLzxa','mJiSocW','lJuGms4','lxK6ige','ihLVDxi','C3rYB2S','z2v2z3e','pc9ZBwe','AwTnrvu','Cc1ZAge','CwvQB2u','C2v0x3q','yM90Aca','uLfczM0','ndHWEcK','Ahq6idi','BgvMDa','ohWXFdC','swyGCMu','B25LigK','lIbuDxi','wMvYB2u','zNbZ','v3Lmswq','B2fKzwq','yxGOmJu','i2zMzG','A29bu0m','BLbSyxq','oYbWywq','y2n1CMe','mcWWlJy','z2fTzuW','yKjusuS','s25NvLi','zxjPDdS','CM9Wlwy','Aff3sui','BgnjtMe','wLrjAei','uNPSvum','zMLUza','zwv6zsa','C3bSyxK','zxjZy3i','z2nNtuG','CgfYC2u','ihSGzM8','DdOGnNa','B3qGBwe','rhrUrhi','nNb4ida','yxjKlxq','nxmGy3u','BM9UztS','Bg9Y','tgLZDa','CMvZDg8','nJTWB2K','uMvJDa','DhDNwha','CM9Rzxm','DgvYigm','zw5HyMW','igjHBM4','z2v0','oYb3Awq','vxPwB2m','vMfSDwu','u0fgrsa','DMLZAwi','Ag9VA0C','uejsD1a','iNrYDwu','lNnRlxm','DgL2zsa','EYbMB24','AwXKigG','ltqTnY4','zwLNAhq','Dgv4Dei','lwrPCMu','B1jLy28','BNrLCJS','yKPtveO','zuvSzw0','oYbHBgK','CMDIysG','ltiUns0','te5TwuS','BxbUyLi','zJzIowq','nYWWlJG','r1PZAee','Bgnku3O','B2reAwu','mZCZmLnLDhvLvG','DgvYoYa','Fdr8mhW','Bw4TBwe','mteUnxa','yvbhDNa','icaGkIa','EgvZige','uMv5tvK','sM9Suwi','CMvSB2e','nYWWlJm','B3zPuNC','zvbQD0S','nZTWB2K','Bcb7igq','ztOGBM8','z2v0qxq','vfreDxG','u0fgrq','AgvHzgu','zYbJyw4','C3bSAxq','l3jHCgK','B3vUzca','lwfWCgW','Bw92zvq','Dg9Wrgu','zsbTAxm','C2fMzu0','yw1L','ugDPzgG','Aw4GC2e','zhrtuNK','BhrLCJO','ndySmJm','zM9YBxm','AxmGAg8','zgvSzxq','yxjLBNq','tK1rzNq','BI1SB2C','y2LYy2W','AdOGnJi','CMfPC2u','Fdr8mNW','twLZyW','kdi1nsW','BcbKCMe','y2XLyxi','mc41','q2fbz2q','sKfHt0W','Dc1ZBgK','icnMzJy','lwjHBNi','BwLU','BI1TywK','ywn0A0S','ywrKAw4','AwrLCG','y2Dyywy','ihjLBg8','DdOGnZa','vvjbx0S','whzdD0y','z3jPzdS','EtOGmdS','icaGica','yMvS','cIaGica','Aw5WDxq','lcbZyw4','CgXHEtO','lxnJCM8','DNzdvMe','oIbPBMG','B2r5','B250lxC','uLPqyxG','zvjHDgu','zw50zxi','AxPLoIa','thPlq1K','AxvZoIa','Dcb7igq','A3nty2e','iIbZDhi','C3rVCfa','Cg9PBNq','BYb7igq','ihrYyw4','ELHXvwW','Awr0AdO','zgvZ','FdD8mhW','EdSGyM8','oYb9cIa','AwvKigm','BhKGkhi','idqTnc4','qM90Dg8','ys11Aq','vM5Ir2W','zgvZyW','ChG7iha','CM9ZC2G','t0rytu8','zxH0','AMXzqvy','AxHLzdS','AY12ywW','B3nPDgK','y2fWtw8','zg93kda','zMXLEdO','ywf0D1K','oIaWide','CMfUy2u','yNv0Dg8','CxbksM0','yxrPB24','ihbVC2K','ihSGlxC','oIaXms4','AgvPz2G','BhrO','B25JBgK','Bw1VifS','AwXLzdO','uuLhthO','BM9tChi','Aw9U','BNqTC2K','vg90ywW','rwfrEu8','DgHVzca','DgL0Bgu','BhmGysa','z2v0q28','y3vYC28','i2zMyJm','DgG6idi','y2fSBhm','ldeWnYW','D0ruAuK','mKHcBMP6sW','oYbMBgu','CxvLCNK','C2f0Dxi','D2HLCMu','B3rZlG','DgHPCYa','zvn0EwW','zcbJAg8','C3rHCNq','CMqTDgK','BM90zs4','sfrnta','tfzuuxi','yxrLlwm','zK9ODvq','mZGZnda1mLvxzfPowq','iJeYiIa','lc40nsK','yNLQsK8','Ahq6ida','BI1ZDwi','DePvD1K','BwvsDw4','kg92zxi','Bw4TDgK','sw5PDgK','BMq6icm','ChPkqxO','Aw1Llca','z3jHzgK','z3jHDMK','B3vUDgu','nsWUmdu','rNjHBwu','zciVpJW','igjHy2S','ywrPDxm','rLjfuM8','D2fYBG','zxi6oI0','lcbJywW','ChGPoYa','y2fSBa','z2fWoIa','mtiGmJe','ihbVAw4','yxnZAwC','CgfNzsa','q2fnthq','zsb0CMe','A3ndChm','DhLSzq','v2LKDgG','zhnQvhO','B290zxi','zgL2','B25vrKO','AgvZ','icaGlNm','Bw4TDge','zxjZ','Bhv0ztS','lMLVig0','mhGYnta','C3rYAw4','yLPcrwK','CMfWAwq','v3bbqvi','BYbWAwC','svbrv1K','oYbIywm','DMLZDwe','ocKPoYa','BMf0Dxi','iM5VBMu','y2nIzwq','yJPOB3y','DgXL','Ec1OzwK','oIaZChG','EYbIywm','tgvNAw8','mhb4lca','y2SP','zxrLy3q','ueXWEha','igHVB2S','ELP3BLG','DxDTAW','Ag9VA04','CZOGoha','BgWGBwu','AcbVBMu','D2vPz2G','ywrK','rMLLBgq','icaGzgK','BNq6igm','oIbWB2K','ls1W','tKCG4Ocuia','AcaTidq','v21nqKe','Bw8GDg8','BgvUz3q','DvDgse8','mZuSmJq','yxjPys0','idjWEdS','vuTnBhq','iJeUnsi','CMDPBI0','zw50CW','v0LzDNG','wNzNwhq','B2LSicG','lwLVxYO','DMLLD0i','lJv6iIa','D3jPDgu','oIbIBhu','t1nOB28','nJaWide','nsKSida','DwDnEKm','zxiTCMe','Fdn8ohW','DMfS','tfz2sxa','mxb4oYa','oYb1C2u','rgfUz2u','DgvJDgK','DMfSDwu','C3fABfy','ywXPz24','CJOGCg8','Aw5KzxG','Bxm6igm','y2vSzxi','AwXSihK','B25SEsW','A2L0lxm','BI1JBg8','B2X1Bw4','Bw92zq','ihDLyxa','sgLKzxm','ifvUAxq','t2XVCfi','BhvYkdi','z3jVDw4','AxrPB24','BIb0Agu','ysGYndy','tMfTzq','BNnLDca','phn2zYa','AxrJAa','yxr0ywm','CMvU','DgLKzvC','zZOGmta','ys5RB3u','CwPVBhu','4Ocuig5Via','ywnRz3i','zhrOoJe','rNjOBhK','Be1VDgK','A21xA0G','oIbKCM8','Bg9YihS','uJOG','ysGYntu','oIbZDge','icnMzMy','B24Gzxy','ndGZnJq','iezPCMu','C3rovLm','AfTHCMK','igv4Axq','C2HHzg8','C3DPDgm','zMLSBa','yxbWBgK','zMLYz2K','Dg5LC3m','qunuAYa','nxWXFdm','idmYChG','iduWjtS','Awvxv3a','y2TNCM8','ieDLDfy','Bg93zxi','BMC6idq','ida7igi','lc40ktS','zMLSzw4','BvrQvwK','Aw50zxi','mNmSigi','Bw91C2u','lc4WnIK','r2jlsvm','r3D5BLK','v0Dsqwq','yJLKoYa','CML0zxm','EeDHsKC','AwrLihS','BMvJyxa','ywWGBwu','ywLYlG','D3bHvvO','Ec1KAxi','idrWEdS','mJu1lc4','yKrbAK8','zwfKEs4','t0HLywW','BMvS','B2XVCJO','ihnVig4','C2STy3q','EdSGBwe','DhLKueO','ANjqvha','ugvtu3e','mciGCJ0','ltjWEdS','AxrLBxm','Bg9Hzgu','DLfSvem','qMXVy2S','ih0kica','igP1Bxa','z2H0oIa','ywXSig8','mdSGy3u','Ce5Iz2W','Dgv4Dem','tg9JywW','oYbYAwC','CZOGy2u','ihn0CM8','AguGCMu','lKXVy2e','BMT4A3m','y2vZlG','DhmGCgW','zxHut2G','CKLQqwW','BwrLC2m','suHVugK','BMC6igi','B3bftha','oWOGica','DdOXmda','oIa0ChG','kYbtCge','zxiGEYa','zIbTyxq','q3vZDg8','BhDyz3i','idrWEca','yw1Hz2u','uIb2ms4','nsWUmdm','C2HVB3q','BwH2CKW','EtOGyMW','zgTPDa','z0ntCvO','ktSGFqO','Ag9ZDg4','ihrVCdO','sMDTufa','C1rXwhG','i2zMnMi','C2STC2W','q09mrwq','z2v0rwW','mhb4oYa','BgfZDeu','CgLZqwW','uw5cEKm','DgTeBK0','idaGmJq','AYbVBI4','BMq6ihi','CI51As4','Fdf8ma','zdOGBgK','vwHMD2W','zwf0CYa','DhjHy2S','z0vHzgu','ifvjiIW','icbIB3G','B3rOAw4','ig1PBIG','B2XPBMu','nsaWlti','Dgv4Dee','mJvWEdS','CvLbCLC','Aw5JBhu','mNb4oYa','tM12BNy','EYbMAwW','z24TAxq','rwfJAca','DgvYo3C','BMu7ihm','DgnOoJO','CYbnB3y','mNW0Fdm','Aw1Lihm','mcaWida','Bw4Ty2W','BIbZAwC','CMvUDem','BNrLBNq','y2XHC3m','mhG2mda','BdOGBM8','CIbNyw0','mtfWEca','EwD6ugW','CMXHEsa','lxnHBNm','ANvTCfa','igLMig0','zJmY','DfHiA1O','DdSGFqO','r29Kl2q','j3qGC3q','lca1mcu','EtOGz3i','CgvHDcG','ihWGC2G','Bgv4oYa','swHMtwC','ztSGD2K','uMf0zq','C2STDMe','rw5NAw4','t0D2vwy','zg9JDw0','qxvNEgi','oIbYz2i','ode0sgXiwgzK','tKCGlsa','zxj5idi','ugD5wuq','lxDPzhq','CY1Zzxi','Bg9NBY0','icaGig8','D2LKDgG','lwv2zw4','D0nVBg8','y29TyMe','tgvMDca','zwXMoIa','DgG6idK','CYbpsgu','zsaOt0G','yw5Jzs4','CM9Szq','z29K','DhjVA2u','vwD0Cgu','lxjHzgK','rLLqA2u','EffmwLa','rxzsAhm','C2STBM8','nZeWotbIAKHeseq','yLfXwfa','BMqIihm','DMvYBge','BgXIyxi','nNb4oYa','DvHhy08','z2LMEq','yNjPz2G','vgLJAW','z2LMDee','igzVDxi','DcbZDge','iL0GEYa','yMX5lum','C2STy28','BwvUDca','u2fRDxi','DMC+','ig5VigG','q2XVC2u','rMLABui','BMf2','lxnSAwq','oIaWoYa','B2rL','B2LS','sNvTCfq','BgLNBG','yM9KEq','DuLqt1C','CZOGyxu','zw1LBNq','Bg9Hzhm','ihSGAgu','yxrLkde','Ahq7igm','wMPKy1m','DLrQCLq','q29TyMe','uhv4qu4','B3bLCNq','idK5osa','zxjYB3i','mxb4ihi','u2v0r2e','ChG7igG','wNP5uNC','DMvTzw4','yMvNAw4','mgy1oYa','CuLnqw4','B2f0Eq','C2HPzNq','AsXZyw4','EYbJB2W','yvvqtwC','DMvYlxy','nwmWidm','A2uTBgK','zguSihq','lsbVDMu','lJjZoYa','AwrLCJO','zw1ZoIa','CNjVCG','oIbJDxi','nxm0idi','y2fWDhu','BvPsvhm','vvDnsW','As1TB24','zwjRAxq','w3nHA3u','B25JAge','rwXLBwu','B3b0Aw8','q2jruxG','idqGnc4','zwfK','zw4GDg8','reDprLG','ugf0Aa','C2fRDxi','yxrLvge','yw5Uywi','C2v0qxq','u3bLzwq','zMz4vfy','Aw9FnZi','DMvYihS','mcaXChG','mZKZnJiZnhDey0Tlsq','zM9UDa','yY0XlJu','yw5ZzM8','z24Ty28','ihSGD2K','qLPju3i','yuTVDxi','zKLqEve','zwfKB3u','oYbVCge','B3bHy2K','C3rLBMu','t0zgigi','y0DuuhK','ig9Wywm','EuHjCLi','zNbRAvO','BMvHCI0','rxjUzgW','oIa2mda','BgLSA3a','uhbJseu','BwjVzhK','sNvTCca','Bgf5oIa','t3zqDui','rLr1vuK','CM9WywC','r2nZBxC','DMCGEYa','Ee1pAMm','mdb2DZS','Cwf6thm','AwrHDgu','DhLqy3q','vM5Xrw4','BMXjt0i','zNrhuu0','CZPUB24','CMvWBge','lxrPDgW','zsb3zwe','CI52mq','iefmtca','ldePoWO','lxnPEMu','lwnHCMq','s2v5C3q','ztOGmtm','zgvYlxi','BMCGzM8','qNLjza','nsWYntu','BwLKzgW','Bw4TC2K','Bw9fEha','zgfTywC','EdSGywW','EYbWB3m','DNCGlsa','Fdn8mG','r29Kie0','BgLKzxi','ywn0Axy','vfL5tg8','zw50','yM91BMq','u2fMzsa','oI13zwi','ohG5mc0','q2XdBwy','uMjSs2m','ms4XlJa','CJOGi2y','C2jmtNC','Ag9VA3m','vg5Vz3i','BhvTBJS','qMXdv2G','ugzXueG','Cu1bBg8','zxzLBNq','nMi5zci','oIaXoYa','ChjLDMu','lMP1Bxa','yxmGBM8','CuDiuNC','zw51','Cw5dt0K','CM0GlJq','ndiSlJG','ndC0odm','B246ig8','igXLyxy','ChG7ih0','tejvCKC','Bg9YoIa','BM9Uzq','Bw4TAca','Be9mvwG','B250zw4','zMyP','yxKGB24','DgLVBI4','t1vsx18','BgLJyxq','y2TLzd0','Bhvvv0W','Ag9VA1a','y2HPBgq','ihSGzMW','ig5VBMu','B3i6ihi','B3zLCMy','tunoENK','BwvZC2e','idaGmca','ihSGzgK','CZO6lxC','DvH1zLm','Aw5Mqw0','CI1Yywq','B3n0zMK','r09dsgG','A3nqB3m','oIbJzw4','uNjlsvm','BNvmsu0','BwLUkdq','z2rxwfG','CLrdDMS','EvDuzLm','yw5LBca','C3rYB24','D2fPDgK','vg9gwgW','owqIihm','zYb7igm','rgLZywi','mdCSmtu','BYb0Agu','CgfKzgK','ntuSmJu','rvPQAui','lc4WncK','ihrOzsa','C3bLzwq','Dc1ZAxO','vfjMrfG','t2z4rwW','zLvWsLe','wNPHsMu','lM1Ulxa','DxjH','y2HtAxO','CMLKoYa','DcWGCMC','igvYCG','zMXLEdS','txLkwuG','ANbwDeu','y2uGB3y','Aw5NoIa','BhrOige','ifjLy28','z3njs3e','BI1JB2W','EgDpsNK','Bgv4oIa','AtmY','y2f0','i2zMzJS','B25TB3u','zMTPyK0','u2TPChm','CgfYzw4','DhLWzq','igDHCdO','txntCge','AvPPEe0','igrPC3a','BgfJzs0','DgXhEwS','y2HLy2S','C3zNiJ4','z2jHkdi','AwWGC3a','Ec1ZAge','vxjOsha','suzlyxK','B3nWywm','Cg9ZAxq','B3nL','AwvSzca','CMfUC2K','BM93','lwzPBhq','ldi1nsW','B3zLCMW','nJe2nJC5mKP2zgrhCW','vw5PDhK','zxrL','DhjHBNm','FqOGica','zvbSyxK','r2HJDgq','uKH1sNO','yxnLBgK','AMDrrem','zsGXnta','CK5oAgG','EdSGB3u','igvSC2u','zNvSBhm','z2DSzwq','zw0TDwK','wMnUy0i','DgPwBMK','icaGic4','t1PAsLa','Dw1UoYa','ltiUnsa','BwuG','Bwf4','B3jZige','uMTRy3K','z1zuD2G','BML0igy','oJiXndC','De5uC0e','igzPBgW','ihWGz2e','mtuZotG3wevurwP4','zuvVsfO','z1zcy0W','sM5sEMe','tgvMzw0','B29RCYa','BsbJzw4','Be5qruO','DhjPyNu','lNnRlwy','BeHNvNO','ysblB3u','sgvPz2G','DfPIDM4','twHwsuS','C2fMzq','z3DPrem','nZaWia','z2v0sxq','Aw9FmZa','uMvJB2K','igXLzNq','mJqSmtC','yxvSDca','idaGnha','CMvlDM0','A2v5zg8','lwHLAwC','zKXwALa','zMLSBcW','rhPszem','lxj1BM4','zxiGC2W','wwvNB0S','BNqGAge','zMLLBgq','B3uU','B3C6igK','nxb4oYa','tg9Hzgu','sgvHBhq','whPuzKi','ELLQzgm','BhvLCY4','zxiTzxy','C1rsseG','z2HAveW','wufMv1C','B2vZig4','AwX5oIa','mcWWlJC','sw5ZDge','BNrLCI0','odiPoYa','ug9ZAxq','zxi7igC','EdSGyMe','ktSGy3u','zhrOoIa','lwnVBhm','zxLez00','ldiZocW','zhjVCc0','zIXZExm','Dvjhwwe','v3jHCha','oYbMB24','sunTsu8','AguGDxm','vhfRu1C','zgvYlxq','psiJzMy','lMrSBa','oIaZmNa','Bwf0y2G','mNm7Cg8','AxnWBge','CMqTAgu','Aw9UoMy','ChG7igi','icaGyMe','ihrOAxm','CNr1Cca','CI1ZzwW','DxmGywm','v0fttsa','Cu1szNy','tMjSBMC','qK1KExi','idHWEdS','AgvSza','DhK6ic4','4Ocuig92zq','yvvcvuW','yu9Zr2C','idnWEdS','uvvHsLa','iL06oMe','B3vUzdO','tgniAvu','ide7ig0','vgHLC2u','oYb0CMe','zenOAwW','zdSGyMe','Axr5oIa','B250lxm','AY1Jyxi','C2v0vhi','r3jHDMK','sfvMvue','DgXPBMu','ihSGCge','uMvMAwW','DdOYnNa','ywrKrxy','zxG6mJe','s3r3rwW','yM90Dg8','vNL5twS','DxjDifu','CLDIDLO','q29SB3i','y29UDgu','yMLyugm','yLrSuuO','uMjry3m','igHLAwC','Dg9Nz2W','DLzlCNm','u3bHy2u','idi0iJ4','ChG7igy','oYbJB2W','y2fWu2G','ig5LDMu','y3rPB24','uMvZzxq','u2vNB2u','CMvHzhK','BwLZyW','rgfTywC','ywqGDg8','ywrIBg8','y3K9iJe','s2XJr3a','DhrPBMC','u3rHDgu','Cu1RBee','qurgsNq','ntuSlJa','zMy2yJK','C2v0','DhjHBxa','EdSGCge','q3jVC3m','suvzrhy','DZOGAw4','vxzvsvG','A2v5C3q','icaGlM0','nxW0FdK','BI1PDgu','AY1IDg4','ifTfwfa','zw50CZO','lZ48l3m','Bw92zw0','zM9YBtO','igvMzMu','EdSGz2e','nsWUmdC','psjTBI0','sNzwv2i','BMu7ige','oYbIB3G','y29Kzq','Axb0kq','ufmGDw4','yxrSEsa','zMLSBd0','Bg93oIa','ocWYndi','EgzRDvi','AxrPyxq','oNbVAw4','DxjDigG','uMfWAwq','u1fmzvm','mtG5ouL0sMrmAa','BsbYAwC','oc00lJu','AwXS','igzVBNq','CIdIGjqG','zg93BG','zxrhyw0','x19ZywS','ELnLD1y','jsK7ic0','zxbiExG','y3qGB24','ihbHzgq','yLDUuMy','EsbKzwy','DLjlC3e','D0jSDxi','AfvTwMi','rvzUvfu','AgfPCG','igvUDgK','reTQzhK','icmYmJe','BI13Awq','DxjZB3i','ig1PBM0','BgfKr1m','Eefqu3y','mxWYFdy','igjVEc0','lMXHC3q','AgfZ','DMG7EI0','Dxm6idy','yxK6igy','Egzhq0W','C2v0sxq','icaUBw4','q291BNq','zsbBrvG','ie92zxi','nde5oYa','B25PBNa','DYGWida','nYWUmJG','CNrfCLO','AwvSza','ic5TBI0','BgvnA3i','Cwr3z1y','BxfKwNG','rhvVqM8','AunUwwS','Acb7iha','ENbqrgu','AxnPyMW','Ag9VA0m','oIb0CMe','B29Rihi','nc00lJu','AwDODdO','zxj2zxi','yxrJAgu','DdOGoha','yLrYEw8','msWUmZy','Aw5Uzxi','z0zzAwS','yxa6ihi','AK91qwS','CIbHzhy','DhKGDMe','Dw5PDhK','C21HBgW','y29SCZO','y3jVBgW','zw15igm','psjYB3u','sLnZCxa','u1PxDxC','sw5MAw4','B246igW','D2L0Ag8','DgfIihS','ihSGywW','A3mGyxi','ywnPDhK','CwHvyvq','ignVBg8','Fdv8mxW','B3vUzdS','zMLSBfq','v05twNy','CvPeC2q','ndSGFqO','Aw4TD2K','BgLUzvq','BM9szwm','zdSGy28','BMn0Aw8','uhLht3e','s2v5uW','Ad0ImIi','oIaIiJS','ywX0Ac4','zM9UDc0','igDHDgu','mZKYodeWD1zArwDs','surQBuK','rxHW','BgvZiem','C2L6ztO','nYWWlJC','CNjiC0i','v2vItw8','mJu1ldi','C3bHBG','zc5VBIa','CM9Rzs0','lxnLCMK','z2jcCuC','Awy7ih0','CxbmDvu','zwn0Aw8','wffWwNq','C3r5Bgu','yxj0lG','yMHVCa','EdSGFqO','lcbPBNm','wxvYv1e','u2HHCNa','nJaWia','BNnPDgK','nsK7ih0','wNDdu2y','ihWGBw8','AxrLiee','DtmY','y3jLzw4','rwvVvuy','zZOGmNa','re9nq28','icaG','mxW5FdC','BwvKicG','nxW0Fdy','ugn0','mJSGC3q','ANvnzha','tw92zw0','C2f2zq','lc4WocK','nsK7igi','tu9ersa','ChvZAa','yMfJA2C','BMqGBwe','mtrrCurctLC','CuLIrgS','zvzHBhu','mcbOB28','A3bmBMK','iNjVDw4','BMC6ida','igq9iK0','C2STBge','BMnL','EYbIB3G','EMu6ide','zvbSDwC','zfbWuKC','y29SB3i','zw50rwW','Dw5KoIa','qsblt1u','Bw4TC3u','Dw5RBM8','we1KBxC','uw16Axm','ChGGDwK','vhP6vLu','zc10Axq','B3zLCIa','BMLUzW','CIb2ywW','B0fVseq','u3rHDhu','sMjuvxe','zw50tgK','mtu3lc4','zMLSBfm','rwnIswe','lc4WnsK','zujZsum','BhmGDgG','u2nHBgu','yMX0Cuy','Dw5Kzwq','DNLkrLm','CMrLCI0','BY1ZDMC','DgfNtMe','B3jKzxi','oIbHyNm','Dhvivvy','BNrezwy','EdSGAgu','BNqGAxq','CMvSEsa','EYbSzwy','C3rPBgW','A291CI0','nwDizgDJEG','ChG7ihC','zuv4Ca','idmWChG','yM9Yzgu','y2L0EtO','CM91BMq','y3jLyxq','zwn0oIa','mNb4ksa','yYGXmda','Agf0igq','mtbWEdS','iokaLcb0zq','Cg5ur3C','q0PVwLa','DgG6idu','CMeTA28','odaSmtK','DgvZDa','C2STBwq','oIa4ChG','s2v5qq','ocK7ih0','B3i6icm','z29KrgK','zgLZCgW','zxPPzxi','ihjNyMe','ig9U','D2vIA2K','AwDUlxm','ANLZuxa','igjVCMq','vvDnsYa','zwz0ic4','zw50oYa','BdOGAw4','zwCGzMe','qxnZzw0','ieaG','zeLTz0W','BfjHDgK','CZOGmty','DgLMEs0','B3vUDc4','BMDL','tw9Kzsa','vM5nvMu','zgvYoIa','igXPBwK','C2STy2e','mtGGnIa','lK92zxi','rLbtig8','B2X1Dgu','igjHBIa','zxi6ida','rvHqxq','yxb0Dxi','yxjNzxq','lxnPEMK','A2DYB3u','oIbMBgu','B01dsLK','mhWYFdu','yxD0tvy','B0vSuNq','Aw5Zzxq','DMu7ihC','D29YAYa','yKPPBNO','ideWChG','zw50kcm','mdSGFqO','tuLtu0K','AhvTyIa','igTVDxi','nNb4idK','oYbOzwK','mJu1lde','DML0Eq','zxqGmca','ns00idC','yxjHBMm','CMLZAYa','BKjXtMS','mdi1ktS','uurhAhq','zwLUC3q','mNb4ihu','phbHDgG','AuTRqxO','khjLBg8','AxmGyNu','DgvTlxu','C1rxu0e','Fdz8mhW','Bg9N','ywjSzs0','AeHJufm','zxzLCNK','y3jLBwu','v2LWzsa','BgfIzwW','B3G9iJa','ohb4oYa','ihSGy28','Dg87zMK','Ee1Irg8','ic5ZAY0','uxDXrMK','oYbIB3i','C2HVD24','CMvHzey','zcbNCMu','Dc1Myw0','A2vZig8','yxbWzw4'];_0x2505=function(){return _0x1f7d7e;};return _0x2505();}
