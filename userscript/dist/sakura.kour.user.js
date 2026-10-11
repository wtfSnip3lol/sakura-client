// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      2.9.9
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
function _0x238f(_0x33958d,_0x3b1d07){_0x33958d=_0x33958d-(0x1442+0x2686+-0x3910);var _0x31e799=_0x222f();var _0x274c4d=_0x31e799[_0x33958d];if(_0x238f['rXJlmx']===undefined){var _0x114d3e=function(_0x569c11){var _0x1952f8='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x9de837='',_0x2a83b3='';for(var _0xf82c06=-0x1f62*-0x1+-0xe5f+0xd*-0x14f,_0x2f8f59,_0x395c2f,_0x2cb596=-0x1a02+-0x12*-0x1f+0x17d4;_0x395c2f=_0x569c11['charAt'](_0x2cb596++);~_0x395c2f&&(_0x2f8f59=_0xf82c06%(0x24db+-0x13ed*0x1+-0xa*0x1b1)?_0x2f8f59*(0x2*0x407+0x15ff*-0x1+0x207*0x7)+_0x395c2f:_0x395c2f,_0xf82c06++%(-0x1*0x1af3+0x136e+0x3*0x283))?_0x9de837+=String['fromCharCode'](0xd*-0x301+-0x1*-0x17ba+0x829*0x2&_0x2f8f59>>(-(0xa4d+-0x220e+-0x4f*-0x4d)*_0xf82c06&0x14d3+-0x2*0xcbb+-0x1*-0x4a9)):-0x1*-0xbf5+0x38*-0x90+0x138b){_0x395c2f=_0x1952f8['indexOf'](_0x395c2f);}for(var _0x142253=0x41*-0x13+0x41f*-0x1+0x479*0x2,_0x5b87b7=_0x9de837['length'];_0x142253<_0x5b87b7;_0x142253++){_0x2a83b3+='%'+('00'+_0x9de837['charCodeAt'](_0x142253)['toString'](-0x1*0x22e9+0x24fd+-0x204))['slice'](-(-0xbc4+0x1f*-0x9d+-0xa43*-0x3));}return decodeURIComponent(_0x2a83b3);};_0x238f['niFfSB']=_0x114d3e,_0x238f['iCSFcz']={},_0x238f['rXJlmx']=!![];}var _0x47b419=_0x31e799[-0x1aef+0x10ad+0xa42],_0xfc63ae=_0x33958d+_0x47b419,_0x388b7a=_0x238f['iCSFcz'][_0xfc63ae];return!_0x388b7a?(_0x274c4d=_0x238f['niFfSB'](_0x274c4d),_0x238f['iCSFcz'][_0xfc63ae]=_0x274c4d):_0x274c4d=_0x388b7a,_0x274c4d;}(function(_0x119728,_0x1db863){var _0xab448c=_0x238f,_0x585632=_0x119728();while(!![]){try{var _0x349638=parseInt(_0xab448c(0x3a1))/(0x1ffd+0x21f1+-0x96b*0x7)*(parseInt(_0xab448c(0x530))/(0x2*-0x65+0x8bd*0x4+-0x2228))+parseInt(_0xab448c(0x525))/(-0x171b+-0x7e6*-0x1+0xf38*0x1)+parseInt(_0xab448c(0x669))/(-0xf63+-0xf39+0x1ea0)*(parseInt(_0xab448c(0x58d))/(-0x1813+-0x23*0x4+0x18a4))+parseInt(_0xab448c(0x6da))/(0x24a7+0x1579+-0x3a1a)+parseInt(_0xab448c(0x72a))/(0x19e3+0x1b6c+-0x554*0xa)+parseInt(_0xab448c(0x672))/(-0xb2+0x2541+-0x1*0x2487)*(-parseInt(_0xab448c(0x397))/(-0x6dd*-0x1+0x5bf+-0xc93))+-parseInt(_0xab448c(0x3d2))/(0xf*-0x116+0x4b9*-0x5+0x27f1);if(_0x349638===_0x1db863)break;else _0x585632['push'](_0x585632['shift']());}catch(_0x178a46){_0x585632['push'](_0x585632['shift']());}}}(_0x222f,-0x54f*-0x19f+-0x7ab37+0x49f18),((()=>{'use strict';var _0x39b5c6=_0x238f,_0x13a3ad={'pSfcq':function(_0x54f5c1){return _0x54f5c1();},'BLIhC':_0x39b5c6(0x662),'FoAfT':'QuWXK','wuyPd':'REJdO','mLwng':_0x39b5c6(0x2eb)+'wn','LHqOL':function(_0x1d74bd,_0x722f1e){return _0x1d74bd+_0x722f1e;},'JyNqt':'\x20@\x20','nQcfV':function(_0x28788a,_0x2dbe85){return _0x28788a(_0x2dbe85);},'HsrjR':function(_0x239ed2,_0x46d5bc){return _0x239ed2>_0x46d5bc;},'xqgGR':'DOMCo'+_0x39b5c6(0x4c4)+_0x39b5c6(0x719)+'d','csWrB':'dOoUG','EaPBV':'WOSMB','wkIJq':function(_0x1618b4,_0x5b2117,_0x294269){return _0x1618b4(_0x5b2117,_0x294269);},'naXBG':_0x39b5c6(0x68b)+_0x39b5c6(0x4ce),'BfCsU':'1.1.0','OipaY':function(_0x438614,_0x5952cc,_0x3d11f3,_0x1d769e,_0x398bbe,_0x17b815,_0xe059ac,_0x1d0a19){return _0x438614(_0x5952cc,_0x3d11f3,_0x1d769e,_0x398bbe,_0x17b815,_0xe059ac,_0x1d0a19);},'sVGFM':_0x39b5c6(0x5a6),'WBPOh':_0x39b5c6(0x2d1),'ndahG':'Local'+_0x39b5c6(0x5e2),'pUMOR':_0x39b5c6(0x51f)+_0x39b5c6(0x203)+_0x39b5c6(0x546)+'.Over'+'tide.'+_0x39b5c6(0x24e)+'lMoti'+'on','Ftjah':_0x39b5c6(0x25a),'QsPlf':_0x39b5c6(0x51f)+_0x39b5c6(0x203)+_0x39b5c6(0x546)+_0x39b5c6(0x2ed)+_0x39b5c6(0x726)+_0x39b5c6(0x267)+_0x39b5c6(0x2c0),'GshJz':function(_0x20114e,_0x3b28bd){return _0x20114e!=_0x3b28bd;},'PoSVM':function(_0x10e545,_0xe65251){return _0x10e545===_0xe65251;},'fBsAT':_0x39b5c6(0x4ae),'ZzscA':_0x39b5c6(0x572),'bwmTt':function(_0x174637,_0x283af2){return _0x174637!==_0x283af2;},'SQvkm':_0x39b5c6(0x69e),'NlZjX':_0x39b5c6(0x40d),'GgxkG':_0x39b5c6(0x5b2),'zPpdR':'vGcVQ','flDSW':_0x39b5c6(0x5dc)+'ra-ko'+_0x39b5c6(0x535)+'ook\x20r'+_0x39b5c6(0x37d)+'iled:','XZydF':function(_0x20c16b,_0x28c426,_0x2f7ee5,_0x23a933,_0x29017a){return _0x20c16b(_0x28c426,_0x2f7ee5,_0x23a933,_0x29017a);},'xmPGh':'shoot'+_0x39b5c6(0x2db),'JohUF':function(_0x3783de,_0x1cdaa0){return _0x3783de+_0x1cdaa0;},'AuXFt':function(_0x1c5053,_0x192b1f){return _0x1c5053+_0x192b1f;},'uyyPG':'\x20hook'+'s','xcxMc':_0x39b5c6(0x5b9)+_0x39b5c6(0x5d0)+'med\x20('+_0x39b5c6(0x42a)+'ff)','SEydD':_0x39b5c6(0x4c7)+'me\x20','isTaq':_0x39b5c6(0x2c6),'dMLXW':'UWMK\x20'+'MISSI'+_0x39b5c6(0x6fb)+_0x39b5c6(0x2a5)+'ay\x20on'+_0x39b5c6(0x427)+'einst'+_0x39b5c6(0x1c0)+_0x39b5c6(0x341)+'erscr'+_0x39b5c6(0x673),'Oohik':function(_0x4d5d5b,_0x4da1f3){return _0x4d5d5b+_0x4da1f3;},'KSGSd':_0x39b5c6(0x6ca)+_0x39b5c6(0x586),'AOTRZ':_0x39b5c6(0x2ee)+'s','qYkmC':'calls'+'\x20Unit'+_0x39b5c6(0x6f4)+'ne.Ap'+_0x39b5c6(0x6f8)+_0x39b5c6(0x470)+'set_t'+_0x39b5c6(0x1c4)+_0x39b5c6(0x428)+'Rate','TZUtM':_0x39b5c6(0x60b),'umrOs':'sakur'+'a.kou'+_0x39b5c6(0x32e),'GcFEe':_0x39b5c6(0x294)+'n','SxzPI':_0x39b5c6(0x6e3)+'n','FGEtY':function(_0x505256,_0x5e41b9){return _0x505256/_0x5e41b9;},'IjydK':function(_0xb4a012,_0x20ef29){return _0xb4a012!==_0x20ef29;},'ympak':_0x39b5c6(0x295),'gXnhd':'f32','hJNoa':function(_0xfb0ad0,_0x3aeb36,_0xedef65,_0x28e114,_0x382b46){return _0xfb0ad0(_0x3aeb36,_0xedef65,_0x28e114,_0x382b46);},'eRBex':function(_0x41d582,_0x3f5a10,_0xd52e1d,_0x102b1b,_0x154b63){return _0x41d582(_0x3f5a10,_0xd52e1d,_0x102b1b,_0x154b63);},'LkhnV':'OZhwD','KmLci':function(_0x27f2c9,_0x22c2fd,_0x109d15,_0x59fdb0,_0x295829){return _0x27f2c9(_0x22c2fd,_0x109d15,_0x59fdb0,_0x295829);},'KLpUv':'AJQAI','bNGyx':'mouse','weadA':function(_0x2dca13,_0x117af9){return _0x2dca13+_0x117af9;},'Dlkkl':function(_0x1ace99,_0x20a73e){return _0x1ace99>_0x20a73e;},'wgaNQ':_0x39b5c6(0x286),'LPrnZ':_0x39b5c6(0x40f)+'wn','SbEUH':_0x39b5c6(0x2f1),'eGJgk':_0x39b5c6(0x6c1)+'down','AqZje':_0x39b5c6(0x6c1)+'up','lkjUO':function(_0x42615e,_0x51e586){return _0x42615e-_0x51e586;},'aGBXy':_0x39b5c6(0x4ef)+_0x39b5c6(0x646)+'e','aemng':_0x39b5c6(0x1db)+_0x39b5c6(0x6b8),'Gpxyc':function(_0x50107e,_0x8541fb){return _0x50107e!==_0x8541fb;},'xsqqb':'kour-'+'io_72'+_0x39b5c6(0x254)+'paren'+'t','kXarn':_0x39b5c6(0x5c0),'MZySm':'guJzp','pDcIk':function(_0x2fd814,_0x5f0500){return _0x2fd814===_0x5f0500;},'PTcOI':_0x39b5c6(0x238)+_0x39b5c6(0x299)+_0x39b5c6(0x29e)+'s','BxSJc':_0x39b5c6(0x72f),'VVrni':_0x39b5c6(0x348),'HMhwY':'CANVA'+'S','AcqUF':function(_0x1bf7ce,_0x11aa58){return _0x1bf7ce===_0x11aa58;},'MhFSY':function(_0x202dc9,_0x281fd0){return _0x202dc9===_0x281fd0;},'mnnrD':function(_0x59aff6,_0x5f046d){return _0x59aff6*_0x5f046d;},'GozOF':function(_0x59beeb,_0x1f7bae){return _0x59beeb*_0x1f7bae;},'SFjeQ':function(_0x3abecc,_0x537eb7){return _0x3abecc===_0x537eb7;},'SLBnK':function(_0xe80f81,_0x10b42b){return _0xe80f81-_0x10b42b;},'EqVUK':function(_0x3fb225,_0x55407b){return _0x3fb225/_0x55407b;},'FOLSd':function(_0x272565,_0x304f7d){return _0x272565/_0x304f7d;},'lEyCl':function(_0x2a82b2,_0x5aaf05,_0x5544d8,_0x222fc9,_0x52b73e,_0x442d94,_0x55ea34){return _0x2a82b2(_0x5aaf05,_0x5544d8,_0x222fc9,_0x52b73e,_0x442d94,_0x55ea34);},'EoXFP':function(_0x112942,_0x3b0d64){return _0x112942+_0x3b0d64;},'xrNMm':function(_0x46d24b,_0x192e8f){return _0x46d24b+_0x192e8f;},'vqxbD':function(_0x261925,_0x2ca896){return _0x261925+_0x2ca896;},'sicoT':_0x39b5c6(0x2fb),'ilVik':function(_0x4bfdf7,_0x49b8b0){return _0x4bfdf7*_0x49b8b0;},'OmGDL':function(_0x492ce7,_0x54521d){return _0x492ce7/_0x54521d;},'HHGyj':_0x39b5c6(0x550),'BVnsN':'RMB','sMcDZ':function(_0x55232e,_0x458be0){return _0x55232e+_0x458be0;},'ZDfUU':function(_0x3eb8ef,_0x367648){return _0x3eb8ef+_0x367648;},'SMHCL':function(_0x2490e0,_0x2fabca){return _0x2490e0/_0x2fabca;},'AFvAr':'#ff6b'+'9d','vdiUW':function(_0xa428ad,_0x2377b7){return _0xa428ad-_0x2377b7;},'OyUQr':function(_0x35f355,_0xd2162f){return _0x35f355-_0xd2162f;},'XnVFR':function(_0x1154a5,_0x261e84){return _0x1154a5+_0x261e84;},'pciKx':function(_0x1d5d34,_0x2bf3d6){return _0x1d5d34+_0x2bf3d6;},'LAmGk':_0x39b5c6(0x6ec),'JMAKj':_0x39b5c6(0x256)+_0x39b5c6(0x6a5),'DMHVt':'aria-'+_0x39b5c6(0x3d6)+'ed','aWtSl':'sk-fi'+'eld','FwnaQ':'div','GdcmF':_0x39b5c6(0x23f)+'l','coUJG':function(_0x32b15f,_0x5a32a0){return _0x32b15f+_0x5a32a0;},'vbSgf':function(_0x2c97ea){return _0x2c97ea();},'icOAi':_0x39b5c6(0x72d)+_0x39b5c6(0x261),'opgiv':function(_0x13a186,_0x171fae){return _0x13a186===_0x171fae;},'VWmIX':function(_0x284b4e){return _0x284b4e();},'bNxGb':'kkjfx','UFooL':'comba'+'t','kuMOe':'Block'+'s\x20OHe'+_0x39b5c6(0x3ec)+_0x39b5c6(0x2da)+_0x39b5c6(0x676)+_0x39b5c6(0x425)+'lth\x20a'+'nd\x20OH'+_0x39b5c6(0x549)+'.Loca'+'lDie,'+_0x39b5c6(0x625)+_0x39b5c6(0x514)+_0x39b5c6(0x25d)+_0x39b5c6(0x326)+'\x20or\x20k'+_0x39b5c6(0x613)+'ou.','kWSEP':function(_0x42b1a1,_0x38346d,_0x226dee,_0x521e35,_0x45e300,_0x57b30e){return _0x42b1a1(_0x38346d,_0x226dee,_0x521e35,_0x45e300,_0x57b30e);},'qkRQG':'Zeroe'+_0x39b5c6(0x515)+_0x39b5c6(0x331)+'nd\x20ma'+'xes\x20a'+_0x39b5c6(0x218)+_0x39b5c6(0x732)+'\x20your'+'\x20weap'+_0x39b5c6(0x43d)+_0x39b5c6(0x235)+_0x39b5c6(0x3f1),'aNmEd':'Rapid'+_0x39b5c6(0x28d)+'\x20[EXP'+']','iciYc':_0x39b5c6(0x5c1)+_0x39b5c6(0x45d)+_0x39b5c6(0x57c)+_0x39b5c6(0x450)+_0x39b5c6(0x6c4)+_0x39b5c6(0x4c6)+_0x39b5c6(0x601)+'0%.\x20S'+'erver'+_0x39b5c6(0x201)+'still'+_0x39b5c6(0x233)+_0x39b5c6(0x44e)+'s.','xtszX':'Damag'+_0x39b5c6(0x329)+'P]','OwHtZ':_0x39b5c6(0x415)+'rites'+'\x20Over'+_0x39b5c6(0x684)+'eapon'+'\x20dama'+_0x39b5c6(0x563)+'annab'+'le\x20if'+_0x39b5c6(0x3c2)+'serve'+_0x39b5c6(0x1f7)+_0x39b5c6(0x6ac)+'s.','qgCvp':function(_0x6f4bc,_0x538ca9,_0xe2d8e1,_0x434103){return _0x6f4bc(_0x538ca9,_0xe2d8e1,_0x434103);},'JReou':function(_0x8b63a7,_0x26e3f1){return _0x8b63a7===_0x26e3f1;},'yyxFz':_0x39b5c6(0x65e),'NPDOD':'Speed','dkWga':'100\x20='+_0x39b5c6(0x22c)+_0x39b5c6(0x5c4),'HMxar':_0x39b5c6(0x2d7)+_0x39b5c6(0x335),'wXzUr':'Zeroe'+'s\x20Mov'+_0x39b5c6(0x4f7)+'.last'+'JumpT'+'ime\x20s'+_0x39b5c6(0x59a)+'\x20jump'+_0x39b5c6(0x240)+'down\x20'+_0x39b5c6(0x429)+_0x39b5c6(0x655)+_0x39b5c6(0x5e1),'Uebqh':_0x39b5c6(0x58f)+'l','XTpcZ':'Keyst'+_0x39b5c6(0x1c3),'nMorc':'Botto'+'m\x20lef'+'t','MENoO':'Left\x20'+_0x39b5c6(0x5a4)+'e','taGbv':function(_0x322924,_0x5971d6,_0x5afea5){return _0x322924(_0x5971d6,_0x5afea5);},'YCIZG':_0x39b5c6(0x492)+_0x39b5c6(0x3e3),'bWCcz':_0x39b5c6(0x620)+_0x39b5c6(0x220)+'ter\x20c'+_0x39b5c6(0x42f)+_0x39b5c6(0x2b2),'eckhK':function(_0x37e121,_0x37f10b,_0x37d26f,_0x3bccc3){return _0x37e121(_0x37f10b,_0x37d26f,_0x3bccc3);},'rFZpE':_0x39b5c6(0x1d4),'vgEna':_0x39b5c6(0x57a)+_0x39b5c6(0x2db),'zGGsq':'FPS\x20o'+_0x39b5c6(0x691)+'y.','wQzHg':_0x39b5c6(0x271)+'ck','MnLGK':_0x39b5c6(0x47a)+_0x39b5c6(0x5fa)+_0x39b5c6(0x508)+_0x39b5c6(0x632)+'—\x20no\x20'+_0x39b5c6(0x67d)+'hooks'+'.\x20Use'+_0x39b5c6(0x695)+'\x20if\x20m'+_0x39b5c6(0x69f)+'s\x20won'+_0x39b5c6(0x3b0)+'art.','EuZxJ':_0x39b5c6(0x559)+_0x39b5c6(0x6a1)+_0x39b5c6(0x35a)+'ad.\x20I'+_0x39b5c6(0x312)+'ches\x20'+_0x39b5c6(0x1e7)+'in\x20sa'+'fe\x20mo'+_0x39b5c6(0x4ee)+_0x39b5c6(0x391)+_0x39b5c6(0x354)+'is\x20ho'+'ok-re'+'lated'+'\x20—\x20te'+_0x39b5c6(0x50e)+_0x39b5c6(0x3c2)+_0x39b5c6(0x731)+_0x39b5c6(0x52a)+'ied\x20c'+_0x39b5c6(0x64d),'qhpxy':'Each\x20'+_0x39b5c6(0x6ae)+_0x39b5c6(0x66b)+'ls\x20a\x20'+'WASM\x20'+_0x39b5c6(0x334)+'oline'+_0x39b5c6(0x270)+_0x39b5c6(0x398)+'hole\x20'+'page\x20'+_0x39b5c6(0x73b)+'\x20ALL\x20'+'OFF\x20b'+_0x39b5c6(0x342)+_0x39b5c6(0x65c)+'-\x20a\x20s'+_0x39b5c6(0x27c)+'ure\x20t'+'hat\x20d'+_0x39b5c6(0x31c)+'ot\x20ma'+_0x39b5c6(0x5da)+_0x39b5c6(0x5b6)+_0x39b5c6(0x2f7)+'thod\x20'+'throw'+_0x39b5c6(0x490)+_0x39b5c6(0x444)+'n\x20sig'+_0x39b5c6(0x539)+_0x39b5c6(0x5a5)+'match'+_0x39b5c6(0x53e)+_0x39b5c6(0x69b)+'nt\x20it'+_0x39b5c6(0x46d)+'alled'+_0x39b5c6(0x5f6)+'n\x20the'+'m\x20on\x20'+'one\x20a'+_0x39b5c6(0x3a0)+'ime,\x20'+_0x39b5c6(0x344)+'d,\x20an'+_0x39b5c6(0x714)+_0x39b5c6(0x3f9)+_0x39b5c6(0x738)+_0x39b5c6(0x24d)+_0x39b5c6(0x1e6)+_0x39b5c6(0x422)+'kes\x20o'+'n.','ndcvO':'god\x20('+'OHeal'+_0x39b5c6(0x597)+_0x39b5c6(0x6ef)+_0x39b5c6(0x623)+_0x39b5c6(0x642)+'h)','xOjrG':function(_0x31356d,_0x573d10,_0x3b752d){return _0x31356d(_0x573d10,_0x3b752d);},'pTRGH':_0x39b5c6(0x264)+_0x39b5c6(0x2c4)+_0x39b5c6(0x549)+_0x39b5c6(0x2de)+_0x39b5c6(0x324),'kHaNU':function(_0x219926,_0x454207,_0x4b43ac,_0x17fea8){return _0x219926(_0x454207,_0x4b43ac,_0x17fea8);},'iUJMl':_0x39b5c6(0x72d)+'oil\x20('+'Recoi'+'lMoti'+_0x39b5c6(0x6c7)+_0x39b5c6(0x630),'vDBbx':'captu'+'re\x20(S'+'etGam'+_0x39b5c6(0x4b9)+'ing\x20+'+_0x39b5c6(0x665)+_0x39b5c6(0x322)+'d)','OSXzT':'no\x20ch'+'eats\x20'+_0x39b5c6(0x430)+_0x39b5c6(0x564)+'ut\x20th'+'is','vyXuK':'Disab'+'les\x20C'+_0x39b5c6(0x304)+'age\x20d'+_0x39b5c6(0x3b9)+'ors\x20a'+_0x39b5c6(0x718)+_0x39b5c6(0x2e3)+_0x39b5c6(0x4a8)+'topDe'+'tecti'+_0x39b5c6(0x2c9)+_0x39b5c6(0x52c)+_0x39b5c6(0x5c8),'KGavz':_0x39b5c6(0x2f6)+_0x39b5c6(0x332)+_0x39b5c6(0x39f)+'ver-v'+_0x39b5c6(0x1d9)+_0x39b5c6(0x3dd)+'ces.','lKkAj':function(_0x1e0243,_0x383712,_0x174056,_0x314d21){return _0x1e0243(_0x383712,_0x174056,_0x314d21);},'vPEbc':'shown','iSRRY':function(_0x43c41a,_0x4f5cbf){return _0x43c41a+_0x4f5cbf;},'kReBP':'px\x20ui'+_0x39b5c6(0x41b)+'-seri'+_0x39b5c6(0x2cf)+_0x39b5c6(0x553)+_0x39b5c6(0x28e)+_0x39b5c6(0x22b)+'if','uAbfz':_0x39b5c6(0x1d2),'uUCFW':function(_0x161087,_0x322b3e){return _0x161087(_0x322b3e);},'IbXPM':function(_0x577d2f,_0x2047f6){return _0x577d2f(_0x2047f6);},'mNahL':'XWJzq','POwLO':'sk-ca'+'rd','OOnze':_0x39b5c6(0x381),'hNnwz':_0x39b5c6(0x592),'sxecI':_0x39b5c6(0x537)+_0x39b5c6(0x31d)+_0x39b5c6(0x56d)+_0x39b5c6(0x40b)+_0x39b5c6(0x42e),'SoScC':function(_0x2c9548,_0x2582f2){return _0x2c9548+_0x2582f2;},'ywlpk':_0x39b5c6(0x57b)+'vemen'+'t\x20','HAojT':function(_0x502533,_0x537997,_0x3fdacd,_0x337809){return _0x502533(_0x537997,_0x3fdacd,_0x337809);},'AJqmq':function(_0x134de4,_0x53fc46){return _0x134de4(_0x53fc46);},'EITTG':_0x39b5c6(0x349)+'nel','uspgb':'mn-lo'+'go','ycKob':'mn-cl'+_0x39b5c6(0x495),'KTPWD':'EtKuT','eLRoP':function(_0x265227,_0x3ba306,_0x378514){return _0x265227(_0x3ba306,_0x378514);},'nBnTS':_0x39b5c6(0x26a)+'s','aBIhx':_0x39b5c6(0x712)+_0x39b5c6(0x2cb)+'ixed;'+_0x39b5c6(0x2e5)+':0;z-'+'index'+':2147'+_0x39b5c6(0x4f0)+'7;poi'+'nter-'+'event'+_0x39b5c6(0x1bf)+'e;','NQztN':_0x39b5c6(0x21c),'zNjHi':'Comba'+'t','pmlbP':_0x39b5c6(0x568),'aEtpv':'safe','DVKJg':'Safet'+'y','XbBmM':_0x39b5c6(0x68b)+_0x39b5c6(0x68c)+'r','VVvmo':'[saku'+_0x39b5c6(0x622)+_0x39b5c6(0x60f)+'enu\x20r'+_0x39b5c6(0x46c)+'\x20UWMK'+':','srwjj':'error','dgvSq':'Assem'+'bly-C'+_0x39b5c6(0x5d3)+_0x39b5c6(0x533),'QnTeS':_0x39b5c6(0x667)+'ooter','HZuQc':_0x39b5c6(0x643)+'ve','XWuFb':_0x39b5c6(0x27f)+'th','FNFKX':'CKhzt'};if(!/(^|\.)(kourstrike\.io|overtide\.io)$/['test'](location[_0x39b5c6(0x2c3)+_0x39b5c6(0x2dc)]||''))return;if(window[_0x39b5c6(0x3f2)+_0x39b5c6(0x3f4)+_0x39b5c6(0x6bc)])return;window[_0x39b5c6(0x3f2)+_0x39b5c6(0x3f4)+_0x39b5c6(0x6bc)]=!![];var _0x3470c6='#ff6b'+'9d',_0x31eae4=_0x39b5c6(0x323)+'c6',_0x28decd={'god':![],'noRecoil':![],'noSpread':![],'rapidExp':![],'damageExp':![],'damageValue':0x96,'infAmmoExp':![],'speedPct':0x64,'jumpPct':0x64,'gravityPct':0x64,'bhop':![],'keystrokes':!![],'ksPos':'bl','ksScale':0x1,'ksCps':!![],'fps':!![],'crosshair':!![],'chSize':0x1,'chColor':_0x39b5c6(0x211)+'9d','adblock':!![],'actkKill':!![],'safeMode':![],'hookGod':![],'hookGodDie':![],'hookNoRecoil':![],'hookCapture':![]},_0x5e9d7e={..._0x28decd};try{Object[_0x39b5c6(0x528)+'n'](_0x5e9d7e,JSON['parse'](localStorage[_0x39b5c6(0x46a)+'em'](_0x39b5c6(0x41c)+'a.kou'+'r.v1')||'{}'));}catch(_0x2e34d9){}function _0x24936c(){var _0x1f22b4=_0x39b5c6;if('cJMdy'!==_0x13a3ad['BLIhC'])_0x4f6680[_0x1f22b4(0x58c)+'od']=_0x5169dd,_0x13a3ad[_0x1f22b4(0x44d)](_0xd46199);else try{_0x13a3ad['FoAfT']!==_0x13a3ad['FoAfT']?new _0x220b82(_0x545322)[_0x1f22b4(0x363)+_0x1f22b4(0x6ed)](_0x4f64c3,_0x13b544,_0x2ae0f5):localStorage[_0x1f22b4(0x6e2)+'em']('sakur'+'a.kou'+_0x1f22b4(0x32e),JSON[_0x1f22b4(0x4aa)+'gify'](_0x5e9d7e));}catch(_0x4e3a08){}}var _0x42c33f={'uwmk':!!window['Unity'+'WebMo'+_0x39b5c6(0x339)],'hooksOk':0x0,'hooksTotal':0x0,'gameLoaded':![],'movements':0x0,'shooters':0x0,'safeMode':!!_0x5e9d7e[_0x39b5c6(0x67c)+'ode'],'lastError':''};try{window[_0x39b5c6(0x3cb)+'entLi'+_0x39b5c6(0x39a)+'r'](_0x13a3ad[_0x39b5c6(0x3c0)],_0x1adcd2=>{var _0x294abe=_0x39b5c6;try{if(_0x13a3ad[_0x294abe(0x61e)]===_0x13a3ad[_0x294abe(0x61e)]){var _0x251578=_0x1adcd2&&(_0x1adcd2[_0x294abe(0x1ea)+'ge']||_0x1adcd2[_0x294abe(0x4f5)]&&_0x1adcd2[_0x294abe(0x4f5)][_0x294abe(0x1ea)+'ge'])||_0x13a3ad[_0x294abe(0x222)];if(_0x1adcd2&&_0x1adcd2[_0x294abe(0x2cc)+_0x294abe(0x2dc)])_0x251578+=_0x13a3ad['LHqOL'](_0x13a3ad['JyNqt']+String(_0x1adcd2[_0x294abe(0x2cc)+'ame'])[_0x294abe(0x273)]('/')[_0x294abe(0x24f)]()+':',_0x1adcd2[_0x294abe(0x66d)+'o']||'?');_0x42c33f[_0x294abe(0x6b3)+_0x294abe(0x2a9)]=_0x13a3ad[_0x294abe(0x315)](String,_0x251578)['slice'](-0x67*-0x43+-0x1727+-0x3ce,-0x1316+0xc5+-0xd*-0x175);}else{var _0x1b78cd=_0x1da16b[_0x294abe(0x643)+'ve'];if(_0x1b78cd)try{_0x1b78cd[_0x294abe(0x58e)+'ed']=![];}catch(_0x357aac){}}}catch(_0x216ad2){}});}catch(_0xbd9fd1){}var _0x8bcb4f=null,_0x51b2b9=null,_0x3ae67b={},_0x1c5b3f=[],_0x489e1c=[],_0xf20980=new Map();function _0x37b98c(_0x7f99c5,_0x26cc90){var _0x1d6414=_0x39b5c6;if(!_0x26cc90||_0x7f99c5['inclu'+_0x1d6414(0x60e)](_0x26cc90)||_0x13a3ad['HsrjR'](_0x7f99c5[_0x1d6414(0x372)+'h'],-0xcb9*-0x1+-0x2177*0x1+0x14fe))return;_0x7f99c5['push'](_0x26cc90);}function _0x254900(_0x525d25,_0x199092,_0x2f88be,_0x3a354d){var _0x262626=_0x39b5c6,_0x2b8432={'xEKwy':_0x13a3ad[_0x262626(0x473)]},_0xecdd25=0x26ee+0x1608+-0x3*0x1452;try{if(_0x13a3ad[_0x262626(0x37f)]===_0x13a3ad['EaPBV'])return-0x2638+-0x21c5+0x47fd;else _0xecdd25=_0x199092&&_0x199092[_0x262626(0x6af)]?_0x199092[_0x262626(0x6af)]():-0x2348+-0x196f+0x3cb7;}catch(_0x4579af){}if(!_0xecdd25)return;_0x13a3ad[_0x262626(0x4db)](_0x37b98c,_0x525d25,_0xecdd25),_0x2f88be[_0x3a354d]=_0x525d25[_0x262626(0x372)+'h'];if(_0x3a354d===_0x262626(0x4d1)+'ents'&&_0x525d25[_0x262626(0x372)+'h']){var _0x2d8ef8=_0x3ae67b[_0x262626(0x643)+'ve'];if(_0x2d8ef8){if('CgVRL'===_0x262626(0x25b))try{if(_0x262626(0x20d)===_0x262626(0x54f)){if(_0x156da8[_0x262626(0x72c)]&&(_0x3c58cf['ready'+'State']===_0x262626(0x4ef)+'activ'+'e'||_0x4700e6[_0x262626(0x5b7)+_0x262626(0x654)]===_0x262626(0x4fa)+_0x262626(0x4fc)))_0x4e35e6();else _0x480ee3[_0x262626(0x3cb)+_0x262626(0x2ab)+_0x262626(0x39a)+'r'](_0x2b8432[_0x262626(0x53f)],_0x26d5bd,{'once':!![]});}else _0x2d8ef8['enabl'+'ed']=![];}catch(_0x42613a){}else _0x4e36a2[_0x262626(0x3a6)+_0x262626(0x252)]['toggl'+'e']('on',_0x48e642),_0x21178e(_0x2dac1c);}}}function _0x561351(_0x1fc49f,_0x125e10,_0x56391b){var _0x11505b=_0x39b5c6,_0x7c5c75=_0xf20980[_0x11505b(0x4dd)](_0x1fc49f);!_0x7c5c75&&(_0x7c5c75=new Map(),_0xf20980[_0x11505b(0x706)](_0x1fc49f,_0x7c5c75));if(!_0x7c5c75[_0x11505b(0x468)](_0x125e10))try{var _0x34607b=new _0x8bcb4f(_0x1fc49f)[_0x11505b(0x1ef)+'ield'](_0x125e10,_0x56391b);_0x7c5c75[_0x11505b(0x706)](_0x125e10,_0x34607b!==undefined?_0x34607b[_0x11505b(0x6af)]():null);}catch(_0x43a775){_0x7c5c75[_0x11505b(0x706)](_0x125e10,null);}return _0x7c5c75['get'](_0x125e10);}function _0x38268c(_0x111472,_0x371406,_0x35b9e5,_0x4644dd){var _0x16e99c=_0x39b5c6;try{if('qaEQb'==='BRufp'){var _0x1c7164={'ynjHR':function(_0xf57d93,_0x480c3d,_0x2711d5,_0x5366db,_0x6e292c){return _0xf57d93(_0x480c3d,_0x2711d5,_0x5366db,_0x6e292c);}};_0x203639=_0x2c0501[_0x16e99c(0x537)+'WebMo'+'dkit'][_0x16e99c(0x543)+_0x16e99c(0x67e)+'er'],_0x5b189a=_0x57ffc8[_0x16e99c(0x537)+_0x16e99c(0x2e9)+'dkit']['Runti'+'me'][_0x16e99c(0x406)+'ePlug'+'in']({'name':_0x13a3ad[_0x16e99c(0x5d6)],'version':_0x13a3ad['BfCsU'],'referencedAssemblies':['Assem'+_0x16e99c(0x439)+_0x16e99c(0x5d3)+_0x16e99c(0x533)]});if(_0x2ea5fa['hookG'+'od'])_0x13a3ad['OipaY'](_0x482b47,_0x13a3ad[_0x16e99c(0x635)],_0x16e99c(0x27f)+'th',_0x16e99c(0x2da)+_0x16e99c(0x676)+_0x16e99c(0x425)+_0x16e99c(0x700),[_0x13a3ad[_0x16e99c(0x1cc)],'i32'],_0x2f373a,_0x360d78,!!_0x154bb2['god']);if(_0xc4a7a7[_0x16e99c(0x58c)+_0x16e99c(0x5cf)])_0x13a3ad[_0x16e99c(0x50d)](_0x17db9a,_0x16e99c(0x264)+'e',_0x16e99c(0x27f)+'th',_0x13a3ad[_0x16e99c(0x345)],[_0x16e99c(0x2d1),_0x13a3ad[_0x16e99c(0x1cc)],_0x13a3ad['WBPOh'],_0x13a3ad['WBPOh'],_0x16e99c(0x2d1)],_0x5fb526,_0x5227d4,!!_0x139ae2['god']);if(_0x3f8bea[_0x16e99c(0x320)+_0x16e99c(0x65b)+'il'])_0x3a9e9d('noRec'+_0x16e99c(0x261),_0x13a3ad['pUMOR'],_0x13a3ad[_0x16e99c(0x69d)],[_0x13a3ad[_0x16e99c(0x1cc)]],_0x5ed5c6,_0x1ef352,!!_0x5245ed[_0x16e99c(0x72d)+'oil']);if(_0x33c016[_0x16e99c(0x352)+_0x16e99c(0x3cc)+'e'])_0x13a3ad['OipaY'](_0xfdd4f8,_0x16e99c(0x667)+'ooter',_0x16e99c(0x727)+'ter','SetGa'+'meRun'+'ning',[_0x16e99c(0x2d1),_0x16e99c(0x2d1)],_0x1df6f6,(_0x153b0d,_0x388fb5)=>{_0x91d0d4(_0xb99db,_0x388fb5,_0xcb4c50,'shoot'+'ers');},!![]);if(_0x4b6283['hookC'+_0x16e99c(0x3cc)+'e'])_0x485ba8(_0x16e99c(0x643)+'ve',_0x13a3ad['QsPlf'],'IsGro'+_0x16e99c(0x5cb),[_0x16e99c(0x2d1)],_0x16e99c(0x2d1),(_0x53876b,_0x55227a)=>{var _0x4e9796=_0x16e99c;_0x1c7164[_0x4e9796(0x5ed)](_0x218d7d,_0x4ccf48,_0x55227a,_0x4970f9,_0x4e9796(0x4d1)+_0x4e9796(0x72e));},!![]);}else new _0x8bcb4f(_0x111472)['write'+_0x16e99c(0x6ed)](_0x371406,_0x35b9e5,_0x4644dd);}catch(_0x4b8155){}}function _0x3d8c56(_0x584cfa,_0x7f2d41){var _0x4d9997=_0x39b5c6;try{var _0x254b2e=new _0x8bcb4f(_0x584cfa)[_0x4d9997(0x1ef)+_0x4d9997(0x433)](_0x7f2d41,_0x4d9997(0x2b0));return _0x254b2e?_0x254b2e[_0x4d9997(0x6af)]():-0x50d+0x7f*0x4c+-0xd*0x283;}catch(_0x2cf1e4){return-0x1*0x2ce+-0x9*0x3a5+0x239b;}}function _0x5dcd64(_0x5d541d,_0x447f90,_0x1b67ed,_0x40f730){var _0x29715a=_0x561351(_0x5d541d,_0x447f90,_0x1b67ed);if(_0x13a3ad['GshJz'](_0x29715a,null))_0x38268c(_0x5d541d,_0x447f90,_0x1b67ed,_0x29715a*_0x40f730);}function _0x16c609(_0x53a02e,_0x20bbc2,_0x2fa803,_0x10797b,_0x2febaa,_0x17c8d2,_0x2d3494){var _0x23c705=_0x39b5c6,_0x161ada={'ocykp':function(_0x5ec286,_0x3e2230){return _0x13a3ad['PoSVM'](_0x5ec286,_0x3e2230);},'CBqKh':function(_0x82307f,_0x419855){return _0x82307f<_0x419855;},'RMEct':'kour-'+_0x23c705(0x6b8),'plBsb':_0x13a3ad['fBsAT']};if('dJpyr'===_0x13a3ad['ZzscA'])_0x4a20aa(_0x52515d,_0x536d61,_0x384120,_0x23c705(0x464)+_0x23c705(0x2db));else try{if(_0x13a3ad[_0x23c705(0x6b9)](_0x13a3ad['SQvkm'],_0x13a3ad[_0x23c705(0x442)])){var _0x7fd0e8=_0x51b2b9['hookP'+_0x23c705(0x449)]({'typeName':_0x20bbc2,'methodName':_0x2fa803,'params':_0x10797b,'returnType':_0x2febaa},_0x17c8d2);return _0x7fd0e8['enabl'+'ed']=_0x2d3494!==![],_0x3ae67b[_0x53a02e]=_0x7fd0e8,_0x42c33f['hooks'+_0x23c705(0x2ba)]++,_0x7fd0e8;}else{var _0x20e99c=_0x59268c[_0x23c705(0x68e)+'ement'+_0x23c705(0x62e)](_0x5f28bf);if(_0x20e99c&&_0x161ada['ocykp'](_0xb84752,_0x23c705(0x238)+'creen'+_0x23c705(0x29e)+'s')){var _0x473467=_0x20e99c['child'+_0x23c705(0x509)];for(var _0x481a23=0x18c7+-0x1761+-0x166;_0x161ada['CBqKh'](_0x481a23,_0x473467['lengt'+'h']);_0x481a23++){if(_0x473467[_0x481a23]['id']&&_0x473467[_0x481a23]['id'][_0x23c705(0x24b)+'Of'](_0x161ada[_0x23c705(0x253)])===-0xd6+-0xb1a*-0x2+-0x155e)_0x473467[_0x481a23][_0x23c705(0x317)][_0x23c705(0x6a7)+'ay']=_0x161ada[_0x23c705(0x33a)];}}else{if(_0x20e99c)_0x20e99c[_0x23c705(0x317)]['displ'+'ay']=_0x161ada[_0x23c705(0x33a)];}}}catch(_0x210c9c){return console['warn']('[saku'+'ra-ko'+_0x23c705(0x535)+_0x23c705(0x44b)+_0x23c705(0x37d)+'iled:',_0x53a02e,_0x210c9c&&_0x210c9c['messa'+'ge']),null;}}function _0x38b2d(_0x3e45cc,_0x4e5df9,_0x97c8f2,_0x28d663,_0x168e61,_0x43971b,_0x11c54a){var _0xb378b=_0x39b5c6;try{if(_0xb378b(0x5b2)===_0x13a3ad['GgxkG']){var _0xa823fb=_0x51b2b9[_0xb378b(0x4be)+_0xb378b(0x2d5)+'x']({'typeName':_0x4e5df9,'methodName':_0x97c8f2,'params':_0x28d663,'returnType':_0x168e61},_0x43971b);return _0xa823fb['enabl'+'ed']=_0x13a3ad[_0xb378b(0x6b9)](_0x11c54a,![]),_0x3ae67b[_0x3e45cc]=_0xa823fb,_0x42c33f[_0xb378b(0x731)+_0xb378b(0x2ba)]++,_0xa823fb;}else try{_0x2331df['enabl'+'ed']=!!_0x5e5388;}catch(_0x389eb7){}}catch(_0x9f28bd){if(_0x13a3ad['zPpdR']!==_0xb378b(0x4e0))return console[_0xb378b(0x4af)](_0x13a3ad['flDSW'],_0x3e45cc,_0x9f28bd&&_0x9f28bd['messa'+'ge']),null;else _0x33b81a['speed'+_0xb378b(0x5b4)]=_0x39dffc,_0x3ea0ee();}}var _0x206dc1=()=>![];try{if(window[_0x39b5c6(0x537)+_0x39b5c6(0x2e9)+_0x39b5c6(0x339)]&&!_0x5e9d7e[_0x39b5c6(0x67c)+'ode']){var _0xd401b1=('0|1|6'+_0x39b5c6(0x722)+_0x39b5c6(0x258))[_0x39b5c6(0x273)]('|'),_0x506e7e=0x1*0x1a4b+-0x12c7*-0x1+0x2*-0x1689;while(!![]){switch(_0xd401b1[_0x506e7e++]){case'0':_0x8bcb4f=window[_0x39b5c6(0x537)+'WebMo'+_0x39b5c6(0x339)]['Value'+_0x39b5c6(0x67e)+'er'];continue;case'1':_0x51b2b9=window[_0x39b5c6(0x537)+'WebMo'+_0x39b5c6(0x339)][_0x39b5c6(0x682)+'me']['creat'+_0x39b5c6(0x227)+'in']({'name':_0x39b5c6(0x68b)+'aKour','version':'1.1.0','referencedAssemblies':[_0x13a3ad[_0x39b5c6(0x5ff)]]});continue;case'2':if(_0x5e9d7e['hookC'+_0x39b5c6(0x3cc)+'e'])_0x38b2d(_0x13a3ad['QnTeS'],'OShoo'+_0x39b5c6(0x3c7),'SetGa'+'meRun'+_0x39b5c6(0x280),[_0x39b5c6(0x2d1),_0x39b5c6(0x2d1)],undefined,(_0x387be5,_0x1d8624)=>{var _0x2734b4=_0x39b5c6;_0x13a3ad['XZydF'](_0x254900,_0x489e1c,_0x1d8624,_0x42c33f,_0x13a3ad[_0x2734b4(0x5c5)]);},!![]);continue;case'3':if(_0x5e9d7e[_0x39b5c6(0x320)+_0x39b5c6(0x65b)+'il'])_0x13a3ad[_0x39b5c6(0x50d)](_0x16c609,_0x13a3ad['icOAi'],_0x13a3ad['pUMOR'],_0x39b5c6(0x25a),['i32'],undefined,_0x206dc1,!!_0x5e9d7e['noRec'+'oil']);continue;case'4':if(_0x5e9d7e[_0x39b5c6(0x352)+_0x39b5c6(0x3cc)+'e'])_0x38b2d(_0x13a3ad[_0x39b5c6(0x487)],_0x13a3ad['QsPlf'],_0x39b5c6(0x26e)+'unded',[_0x13a3ad['WBPOh']],_0x13a3ad[_0x39b5c6(0x1cc)],(_0x31048d,_0x16aa36)=>{var _0x38ee0b=_0x39b5c6;_0x254900(_0x1c5b3f,_0x16aa36,_0x42c33f,_0x38ee0b(0x4d1)+_0x38ee0b(0x72e));},!![]);continue;case'5':if(_0x5e9d7e['hookG'+_0x39b5c6(0x5cf)])_0x16c609(_0x39b5c6(0x264)+'e',_0x39b5c6(0x27f)+'th',_0x13a3ad[_0x39b5c6(0x345)],[_0x13a3ad[_0x39b5c6(0x1cc)],_0x13a3ad[_0x39b5c6(0x1cc)],_0x13a3ad[_0x39b5c6(0x1cc)],_0x13a3ad[_0x39b5c6(0x1cc)],_0x39b5c6(0x2d1)],undefined,_0x206dc1,!!_0x5e9d7e[_0x39b5c6(0x5a6)]);continue;case'6':if(_0x5e9d7e['hookG'+'od'])_0x16c609(_0x13a3ad[_0x39b5c6(0x635)],_0x13a3ad['XWuFb'],_0x39b5c6(0x2da)+_0x39b5c6(0x676)+'keHea'+_0x39b5c6(0x700),[_0x39b5c6(0x2d1),_0x39b5c6(0x2d1)],undefined,_0x206dc1,!!_0x5e9d7e[_0x39b5c6(0x5a6)]);continue;}break;}}}catch(_0x5e5256){if(_0x39b5c6(0x5b0)!==_0x13a3ad['FNFKX']){var _0x4ce8ce={'bLeVc':'set_t'+'arget'+_0x39b5c6(0x428)+'Rate'},_0x12553a=_0x5833ca['safeM'+'ode']?_0x39b5c6(0x481)+'MODE\x20'+_0x39b5c6(0x262)+_0x39b5c6(0x1f8)+'only,'+_0x39b5c6(0x581)+_0x39b5c6(0x28f)+_0x39b5c6(0x6f5)+_0x39b5c6(0x5aa)+'\x20exit'+')':_0x44e4b6[_0x39b5c6(0x47e)]?_0x13a3ad[_0x39b5c6(0x3c5)](_0x13a3ad['JohUF'](_0x39b5c6(0x5df)+_0x39b5c6(0x291)+'\x20',_0x12ebc1[_0x39b5c6(0x731)+_0x39b5c6(0x2ba)]?_0x13a3ad[_0x39b5c6(0x384)](_0x13a3ad['AuXFt'](_0x41111e['hooks'+'Ok'],'/'),_0x517d78['hooks'+_0x39b5c6(0x2ba)])+_0x13a3ad['uyyPG']:_0x13a3ad[_0x39b5c6(0x43c)])+_0x13a3ad[_0x39b5c6(0x30c)]+(_0x2be104['gameL'+_0x39b5c6(0x67f)]?_0x39b5c6(0x1fe)+'d':'loadi'+'ng')+(_0x39b5c6(0x538)+'ooter'+'\x20')+(_0x2c333d[_0x39b5c6(0x464)+_0x39b5c6(0x2db)]?_0x39b5c6(0x2c6):_0x13a3ad[_0x39b5c6(0x55e)]),'\x20|\x20mo'+_0x39b5c6(0x489)+'t\x20')+(_0xf4e856['movem'+_0x39b5c6(0x72e)]?_0x13a3ad[_0x39b5c6(0x565)]:_0x13a3ad['fBsAT']):_0x13a3ad[_0x39b5c6(0x6f1)];if(_0x23b926[_0x39b5c6(0x6b3)+'rror'])_0x12553a+=_0x13a3ad[_0x39b5c6(0x6e0)](_0x13a3ad[_0x39b5c6(0x351)],_0x336f7b['lastE'+_0x39b5c6(0x2a9)]);return _0x5c319b(_0x13a3ad['AOTRZ'],_0x12553a,_0x5bd42e['uwmk'],null,[_0x29c337('240\x20F'+'PS\x20un'+'lock',_0x13a3ad[_0x39b5c6(0x421)],_0x39ff30(_0x13a3ad[_0x39b5c6(0x1cd)],()=>{var _0x1018b1=_0x39b5c6;try{if(_0x4b8036)_0x145963['call'](_0x1018b1(0x537)+'Engin'+'e.App'+_0x1018b1(0x40b)+_0x1018b1(0x42e),_0x4ce8ce['bLeVc'],[-0x5*0x328+0xc5*0x11+0x3a3]);}catch(_0x9bff34){}}))]);}else console[_0x39b5c6(0x4af)](_0x39b5c6(0x5dc)+'ra-ko'+_0x39b5c6(0x42c)+_0x39b5c6(0x6be)+'nit\x20f'+'ailed'+':',_0x5e5256&&_0x5e5256['messa'+'ge']);}function _0x456495(_0x17c4d7,_0x93cfcb){var _0x7e3e97=_0x39b5c6,_0x5f53bb={'aXkTU':_0x13a3ad[_0x7e3e97(0x4d6)]},_0x5f13a2=_0x3ae67b[_0x17c4d7];if(_0x5f13a2)try{_0x13a3ad[_0x7e3e97(0x230)]('CBWpW','CBWpW')?_0x5f13a2['enabl'+'ed']=!!_0x93cfcb:_0x5c51d5[_0x7e3e97(0x6e2)+'em'](_0x5f53bb[_0x7e3e97(0x1e1)],_0x50e482['strin'+_0x7e3e97(0x527)](_0xecc0d1));}catch(_0x431061){}}setInterval(()=>{var _0x4fcc82=_0x39b5c6,_0x13c0ce={'Olzbz':function(_0x2bcdd8){return _0x13a3ad['pSfcq'](_0x2bcdd8);},'QVFgq':_0x13a3ad['SxzPI']};if(!_0x8bcb4f||!window[_0x4fcc82(0x2d9)+_0x4fcc82(0x717)+_0x4fcc82(0x6a0)])return;var _0x242fcc=(Number(_0x5e9d7e[_0x4fcc82(0x47d)+_0x4fcc82(0x5b4)])||0x11*0x1c7+0x3d*-0x7+-0x88*0x35)/(0x208*0x3+0x7c+0x210*-0x3),_0x3eb86b=_0x13a3ad[_0x4fcc82(0x56a)](Number(_0x5e9d7e[_0x4fcc82(0x724)+'ct'])||0x263e+-0x56*0x13+-0x98*0x35,0x2*0x11ab+-0x1266+-0x108c),_0x110ba7=_0x13a3ad['FGEtY'](Number(_0x5e9d7e[_0x4fcc82(0x353)+_0x4fcc82(0x57d)])||-0x7d5*0x1+0x8d0+-0x97,0x599+0x2418+-0x294d),_0x251569=Math[_0x4fcc82(0x60d)](-0xce*0x6+0x1481+0x3eb*-0x4,Number(_0x5e9d7e[_0x4fcc82(0x463)+_0x4fcc82(0x5ab)+'e'])||-0x1*0x146c+0x1b4*-0x2+-0xa*-0x271),_0x10efc4=_0x13a3ad[_0x4fcc82(0x3db)](_0x242fcc,0x66e+-0x115d+-0x578*-0x2)||_0x3eb86b!==-0x17a1+-0x2a8*-0x5+0xa5a||_0x13a3ad[_0x4fcc82(0x3db)](_0x110ba7,-0x146d+-0x11b4*-0x1+0x2ba)||_0x5e9d7e['bhop'],_0x2e1744=_0x5e9d7e['noSpr'+_0x4fcc82(0x37e)]||_0x5e9d7e[_0x4fcc82(0x463)+_0x4fcc82(0x5f2)]||_0x5e9d7e[_0x4fcc82(0x43f)+_0x4fcc82(0x497)]||_0x5e9d7e['rapid'+_0x4fcc82(0x362)];if(!_0x10efc4&&!_0x2e1744)return;try{if(_0x13a3ad['ympak']===_0x13a3ad['ympak'])for(var _0x49b455=0x190f+-0xd3*0x4+0x26b*-0x9;_0x49b455<_0x1c5b3f[_0x4fcc82(0x372)+'h'];_0x49b455++){if(_0x13a3ad['IjydK']('hhLDw','hhLDw')){var _0x21f009={'zBkGi':function(_0x11e5dc){var _0xb34b7=_0x4fcc82;return _0x13c0ce[_0xb34b7(0x617)](_0x11e5dc);}},_0x4a7471=_0x1e220b[_0x4fcc82(0x406)+_0x4fcc82(0x532)+'ent'](_0x13c0ce[_0x4fcc82(0x29d)]);return _0x4a7471['type']=_0x13c0ce[_0x4fcc82(0x29d)],_0x4a7471[_0x4fcc82(0x3a6)+_0x4fcc82(0x204)]=_0x4fcc82(0x5d1)+'n',_0x4a7471[_0x4fcc82(0x5ef)+_0x4fcc82(0x5f3)+'t']=_0x290939,_0x4a7471['oncli'+'ck']=_0x15cc72=>{var _0x3c45ca=_0x4fcc82;_0x15cc72[_0x3c45ca(0x61b)+_0x3c45ca(0x2b7)+'ation'](),_0x21f009[_0x3c45ca(0x25c)](_0x4348cc);},_0x4a7471;}else{var _0x2f651e=_0x1c5b3f[_0x49b455];if(!_0x2f651e)continue;_0x242fcc!==0x1*0xa99+-0x172*0x19+0x198a&&(_0x5dcd64(_0x2f651e,0x1d8e+0xa7+0x1e0d*-0x1,_0x13a3ad[_0x4fcc82(0x588)],_0x242fcc),_0x13a3ad['XZydF'](_0x5dcd64,_0x2f651e,0x1*-0x193f+0x1241+0x72a*0x1,_0x4fcc82(0x61d),_0x242fcc),_0x13a3ad[_0x4fcc82(0x465)](_0x5dcd64,_0x2f651e,0x489*-0x1+0x2298+-0x1ddf,_0x4fcc82(0x61d),_0x242fcc),_0x13a3ad[_0x4fcc82(0x465)](_0x5dcd64,_0x2f651e,0x17a5+-0x1974+-0x5*-0x67,_0x13a3ad[_0x4fcc82(0x588)],_0x242fcc),_0x13a3ad['XZydF'](_0x5dcd64,_0x2f651e,0x1*-0xe72+0xee+0x1b4*0x8,'f32',_0x242fcc),_0x5dcd64(_0x2f651e,0x1*-0x1166+-0xed+-0x1*-0x1273,_0x4fcc82(0x61d),_0x242fcc));if(_0x13a3ad[_0x4fcc82(0x6b9)](_0x3eb86b,0x838+0x3*0x613+-0x1a70))_0x13a3ad[_0x4fcc82(0x465)](_0x5dcd64,_0x2f651e,-0x1516+0x2615+0x1*-0x10af,_0x4fcc82(0x61d),_0x3eb86b);_0x13a3ad['IjydK'](_0x110ba7,-0x2695+0x1821+0xe75)&&(_0x13a3ad['hJNoa'](_0x5dcd64,_0x2f651e,0xca9+0x1132+0x71*-0x43,_0x4fcc82(0x61d),_0x110ba7),_0x13a3ad[_0x4fcc82(0x281)](_0x5dcd64,_0x2f651e,0x510*0x1+-0x1a*-0x14f+-0x26ca,_0x13a3ad['gXnhd'],_0x110ba7));if(_0x5e9d7e[_0x4fcc82(0x4d3)])_0x38268c(_0x2f651e,0x183b+0x12ea*0x1+-0x2a89,_0x13a3ad[_0x4fcc82(0x588)],-(-0x27a*0xb+-0x1ba+0x20df));}}else{var _0x2bff85=_0xf786bc['creat'+_0x4fcc82(0x532)+_0x4fcc82(0x2c0)](_0x13a3ad[_0x4fcc82(0x36f)]);_0x2bff85[_0x4fcc82(0x266)]=_0x3e880c,_0x2bff85[_0x4fcc82(0x5ef)+'onten'+'t']=_0x2c99c5,_0x223eb8[_0x4fcc82(0x22e)+_0x4fcc82(0x3de)+'d'](_0x2bff85);}}catch(_0x302c9f){}try{for(var _0x4d13f9=-0x1444+0xf*-0x167+0x294d;_0x4d13f9<_0x489e1c[_0x4fcc82(0x372)+'h'];_0x4d13f9++){var _0x520b82=_0x13a3ad[_0x4fcc82(0x4db)](_0x3d8c56,_0x489e1c[_0x4d13f9],-0xd1*-0x2f+-0x181a+0x3*-0x4af);if(!_0x520b82)continue;_0x5e9d7e['damag'+_0x4fcc82(0x5f2)]&&(_0x13a3ad[_0x4fcc82(0x465)](_0x38268c,_0x520b82,0x1f47*0x1+-0x22d3*-0x1+-0x41ce,'i32',_0x251569),_0x38268c(_0x520b82,0x4ec*-0x2+0x21*0x25+-0x1cd*-0x3,_0x13a3ad[_0x4fcc82(0x1cc)],_0x251569));_0x5e9d7e['noSpr'+_0x4fcc82(0x37e)]&&(_0x38268c(_0x520b82,-0x96+-0x9*-0x26+-0x38,_0x4fcc82(0x61d),-0x1756+0x26+0x350*0x7),_0x38268c(_0x520b82,0xe36+0x819+-0x10b*0x15,_0x13a3ad[_0x4fcc82(0x588)],0x57f+-0x1757+0x11d9));if(_0x5e9d7e['infAm'+_0x4fcc82(0x497)])_0x38268c(_0x520b82,-0x114d+0xc2*0x25+-0xa61*0x1,_0x4fcc82(0x2d1),-0x139*0x2+0x7*0x122+-0x195);if(_0x5e9d7e['rapid'+'Exp']){if(_0x13a3ad[_0x4fcc82(0x297)]===_0x4fcc82(0x38c))_0x13a3ad[_0x4fcc82(0x5ca)](_0x5dcd64,_0x520b82,-0x1*0xd2d+-0x2097+0x2e50,_0x4fcc82(0x61d),0x3b*-0x4c+-0x1*0x1a2e+0x2bb2+0.1),_0x13a3ad[_0x4fcc82(0x281)](_0x38268c,_0x520b82,0x7e0+-0x22e7+0x1b67,'f32',0xdbf+0x3*0x946+-0x3*0xddb+0.1);else{var _0x36f1a=_0x13b489(_0x3ba0c3,_0x484eac=>{var _0x4c39a0=_0x4fcc82;_0x30b6ac['class'+_0x4c39a0(0x252)][_0x4c39a0(0x2fc)+'e']('on',_0x484eac),_0x170d5e(_0x484eac);});_0x3683ec['appen'+'d'](_0x48886f,_0x36f1a);}}}}catch(_0x449735){}},0x1d0+-0x2164+0x817*0x4),setInterval(()=>{var _0x39ca42=_0x39b5c6;_0x42c33f['gameL'+'oaded']=!!window[_0x39ca42(0x2d9)+'Insta'+_0x39ca42(0x6a0)];try{var _0x1e6700=-0x2de*-0x2+-0x4*0x337+-0x18*-0x4c;for(var _0x54f9ce in _0x3ae67b){if('rPrSz'!==_0x13a3ad[_0x39ca42(0x589)]){if(_0x3ae67b[_0x54f9ce]&&_0x3ae67b[_0x54f9ce][_0x39ca42(0x3fd)+'ed'])_0x1e6700++;}else _0x55285f(),_0x65df27(_0x1fdfa0(_0x390f0e[_0x39ca42(0x266)]));}_0x42c33f['hooks'+'Ok']=_0x1e6700;}catch(_0x32878f){}},-0x3*-0x7a7+-0x20df+-0xdd2*-0x1);var _0xa3c0b2=new Set(),_0x1db69={0x1:[],0x3:[]},_0x373324=![];function _0x3336a0(_0xe006bf){var _0x3cc561=_0x39b5c6;_0xa3c0b2[_0x3cc561(0x223)](_0xe006bf['code']);}function _0x5433a8(_0x35e3c2){var _0x4692ff=_0x39b5c6;_0xa3c0b2['delet'+'e'](_0x35e3c2[_0x4692ff(0x4ed)]);}function _0x5dfb7c(_0x24c1b6){var _0x4d2204=_0x39b5c6;if(_0x24c1b6['__sak'+'ura'])return;_0xa3c0b2[_0x4d2204(0x223)](_0x13a3ad[_0x4d2204(0x6ab)]+(_0x24c1b6[_0x4d2204(0x6e3)+'n']+(0x3*0x10f+0xc20+0xb2*-0x16)));var _0x3ec85b=_0x1db69[_0x13a3ad[_0x4d2204(0x696)](_0x24c1b6[_0x4d2204(0x6e3)+'n'],-0x237c+-0x2546+0x377*0x15)];if(_0x3ec85b){_0x3ec85b[_0x4d2204(0x46f)](performance[_0x4d2204(0x3ea)]());if(_0x3ec85b[_0x4d2204(0x372)+'h']>-0xeab+0xc8a+0x9*0x41)_0x3ec85b[_0x4d2204(0x498)]();}}function _0x4db279(_0x2d1be1){var _0x309351=_0x39b5c6;if(!_0x2d1be1[_0x309351(0x21b)+_0x309351(0x725)])_0xa3c0b2['delet'+'e'](_0x13a3ad['AuXFt'](_0x309351(0x6c1),_0x2d1be1[_0x309351(0x6e3)+'n']+(-0x1*0x189b+0x1b10+-0x9d*0x4)));}function _0x1ffeff(){_0xa3c0b2['clear']();}function _0x4ca917(){var _0x2a45eb=_0x39b5c6;if(_0x13a3ad[_0x2a45eb(0x6de)]===_0x2a45eb(0x6fe)){if(!_0x1cd168||_0x51786f[_0x2a45eb(0x6c8)+_0x2a45eb(0x60e)](_0x33c560)||_0x13a3ad[_0x2a45eb(0x54a)](_0x330428[_0x2a45eb(0x372)+'h'],0x1cf7*0x1+-0x14ee+0x7c9*-0x1))return;_0x2cc3c2['push'](_0x30a14d);}else{if(_0x373324)return;_0x373324=!![],window['addEv'+'entLi'+_0x2a45eb(0x39a)+'r'](_0x13a3ad['LPrnZ'],_0x3336a0,!![]),window['addEv'+'entLi'+_0x2a45eb(0x39a)+'r'](_0x13a3ad[_0x2a45eb(0x729)],_0x5433a8,!![]),window[_0x2a45eb(0x3cb)+_0x2a45eb(0x2ab)+_0x2a45eb(0x39a)+'r'](_0x13a3ad[_0x2a45eb(0x365)],_0x5dfb7c,!![]),window[_0x2a45eb(0x3cb)+'entLi'+'stene'+'r'](_0x13a3ad[_0x2a45eb(0x3af)],_0x4db279,!![]),window[_0x2a45eb(0x3cb)+_0x2a45eb(0x2ab)+_0x2a45eb(0x39a)+'r'](_0x2a45eb(0x48d),_0x1ffeff);}}function _0x3f5d4c(_0x570b2b){var _0x7486bc=_0x39b5c6,_0x5468b0=_0x1db69[_0x570b2b]||[],_0x418462=performance[_0x7486bc(0x3ea)]();while(_0x5468b0[_0x7486bc(0x372)+'h']&&_0x13a3ad['HsrjR'](_0x13a3ad['lkjUO'](_0x418462,_0x5468b0[0x1e0a+-0x4e7*-0x3+-0x2cbf]),-0xe9e+0x17*0x164+-0x6bb*0x2))_0x5468b0[_0x7486bc(0x498)]();return _0x5468b0[_0x7486bc(0x372)+'h'];}function _0x59f683(_0x7c14c3){var _0x1d9b99=_0x39b5c6;if(document[_0x1d9b99(0x72c)]&&(document['ready'+'State']===_0x13a3ad['aGBXy']||document['ready'+_0x1d9b99(0x654)]===_0x1d9b99(0x4fa)+_0x1d9b99(0x4fc)))_0x13a3ad[_0x1d9b99(0x44d)](_0x7c14c3);else document[_0x1d9b99(0x3cb)+'entLi'+_0x1d9b99(0x39a)+'r'](_0x13a3ad[_0x1d9b99(0x473)],_0x7c14c3,{'once':!![]});}_0x59f683(()=>{var _0x55a7b0=_0x39b5c6,_0x550501={'pChAc':_0x55a7b0(0x6a3)+_0x55a7b0(0x1f6)+_0x55a7b0(0x51c)+_0x55a7b0(0x634)+'5)','iQWsf':_0x55a7b0(0x232)+'r','Gdufa':function(_0xb479c5,_0x1a9467){var _0x352d90=_0x55a7b0;return _0x13a3ad[_0x352d90(0x670)](_0xb479c5,_0x1a9467);},'jIpJr':function(_0x205f4b,_0xc94de2){return _0x205f4b/_0xc94de2;},'oQZEd':function(_0x2d0d9b,_0x30213c){return _0x2d0d9b-_0x30213c;},'oYbhw':function(_0x403c56,_0x26fdbe){return _0x403c56+_0x26fdbe;},'yzOXJ':function(_0x4b3907,_0x21381f){return _0x4b3907*_0x21381f;},'pVOLa':_0x13a3ad['kReBP'],'cEnlo':function(_0x23f690,_0x46c358){return _0x23f690+_0x46c358;},'zYqBV':function(_0x1bbed7,_0x416936){return _0x1bbed7||_0x416936;},'ZLNNN':'1|3|5'+'|2|4|'+'0','hRQsq':function(_0x4b1a47,_0x35613a){var _0x479707=_0x55a7b0;return _0x13a3ad[_0x479707(0x658)](_0x4b1a47,_0x35613a);},'SZCtE':'FIXhv','vDXtI':_0x13a3ad['uAbfz'],'PYzYr':_0x55a7b0(0x1fa),'qebTH':function(_0xcc7c2,_0x2d10c0,_0x5ee471){return _0xcc7c2(_0x2d10c0,_0x5ee471);},'kLeCA':'SAKUR'+'A\x20KOU'+_0x55a7b0(0x609)+'1','HJdGY':function(_0x21b676,_0x3ab8d9){return _0x13a3ad['uUCFW'](_0x21b676,_0x3ab8d9);},'uiGRp':_0x55a7b0(0x399),'anQmj':'waiti'+_0x55a7b0(0x208)+_0x55a7b0(0x2c2)+'e…','wvwkB':function(_0x550d0c,_0x101e4c){return _0x550d0c===_0x101e4c;},'FPgUg':_0x55a7b0(0x3d3),'ZBxut':_0x55a7b0(0x2f9),'atmuc':'oKhTw','zrsYG':function(_0x1bd53c,_0x22f5f3){return _0x1bd53c/_0x22f5f3;},'fojvB':function(_0x7ad382,_0x129dab){return _0x7ad382-_0x129dab;},'tmrhY':function(_0x4665a3,_0x2e828c){return _0x13a3ad['nQcfV'](_0x4665a3,_0x2e828c);},'WOkHo':function(_0x1354f6,_0xae2432){var _0x5590de=_0x55a7b0;return _0x13a3ad[_0x5590de(0x31f)](_0x1354f6,_0xae2432);},'OzYEk':function(_0x595c54,_0x44bb79){return _0x595c54===_0x44bb79;},'QxItB':_0x13a3ad[_0x55a7b0(0x5bb)],'ouBXs':_0x55a7b0(0x41c)+_0x55a7b0(0x3df)+_0x55a7b0(0x432)+'v1','KHQgx':'div','lfamN':function(_0x2c1b14){return _0x2c1b14();},'HgtPD':_0x55a7b0(0x211)+'9d','wODMi':_0x55a7b0(0x6e3)+'n','LJHxh':_0x55a7b0(0x5d1)+'n','qObud':function(_0x936d87,_0x4ffc51){var _0x3fab9a=_0x55a7b0;return _0x13a3ad[_0x3fab9a(0x384)](_0x936d87,_0x4ffc51);},'ewZdY':_0x13a3ad[_0x55a7b0(0x507)],'pVwlu':_0x55a7b0(0x502)+_0x55a7b0(0x5f4),'VzCpy':_0x55a7b0(0x4b3)+'g','tUdGC':_0x13a3ad[_0x55a7b0(0x5de)],'XSFiZ':_0x13a3ad[_0x55a7b0(0x255)],'neSYU':_0x13a3ad[_0x55a7b0(0x3f0)],'ZKfEa':function(_0x52e8b8,_0x38221a){var _0x1b745b=_0x55a7b0;return _0x13a3ad[_0x1b745b(0x3c3)](_0x52e8b8,_0x38221a);},'AARcX':function(_0xba6b08,_0x4f6309){return _0xba6b08+_0x4f6309;},'XeVXg':_0x55a7b0(0x5b9)+_0x55a7b0(0x5d0)+'med\x20('+_0x55a7b0(0x42a)+_0x55a7b0(0x2e7),'zUZpE':_0x55a7b0(0x4c7)+'me\x20','NnISa':'loade'+'d','ALFkd':_0x13a3ad['fBsAT'],'TbEbe':_0x13a3ad[_0x55a7b0(0x6f9)],'tCTQe':_0x13a3ad[_0x55a7b0(0x565)],'hsDow':_0x55a7b0(0x5df)+_0x55a7b0(0x3e5)+_0x55a7b0(0x6fb)+_0x55a7b0(0x2a5)+'ay\x20on'+'ly\x20(r'+_0x55a7b0(0x657)+'all\x20t'+_0x55a7b0(0x341)+_0x55a7b0(0x5ae)+_0x55a7b0(0x673),'ipEYg':_0x55a7b0(0x2ee)+'s','kFJlS':function(_0x5b131b,_0x7b3149,_0x3fb1d7,_0x56e8fc){return _0x13a3ad['HAojT'](_0x5b131b,_0x7b3149,_0x3fb1d7,_0x56e8fc);},'oumFO':'calls'+_0x55a7b0(0x68f)+'yEngi'+'ne.Ap'+_0x55a7b0(0x6f8)+'tion.'+_0x55a7b0(0x579)+'arget'+'Frame'+_0x55a7b0(0x20e),'pqQPb':function(_0x207265){return _0x207265();},'eERNe':function(_0x483c9d,_0xcd9e){return _0x13a3ad['AJqmq'](_0x483c9d,_0xcd9e);},'lXIlw':_0x55a7b0(0x646)+'e','uioWh':function(_0x2e0261,_0x379a92){return _0x2e0261(_0x379a92);},'DnZoj':_0x55a7b0(0x6a9),'ADlrf':function(_0x196205,_0x3da6da){return _0x196205+_0x3da6da;},'zfuiU':_0x13a3ad[_0x55a7b0(0x242)],'ZWmoh':_0x55a7b0(0x2b4)+'de','oMRwd':_0x13a3ad['uspgb'],'GFuzn':_0x55a7b0(0x4bf)+'in','lftfo':'small','RUQqc':_0x13a3ad['ycKob'],'adNzF':'Close','AUZqr':'<svg\x20'+'viewB'+_0x55a7b0(0x703)+_0x55a7b0(0x5cc)+_0x55a7b0(0x1d3)+'<path'+_0x55a7b0(0x1da)+_0x55a7b0(0x1de)+'2\x2012M'+_0x55a7b0(0x2bf)+'6\x2018\x22'+'/></s'+_0x55a7b0(0x2d4),'sCXcT':_0x55a7b0(0x4a5)+'ls','dCHMQ':_0x13a3ad[_0x55a7b0(0x5c3)],'IbEjX':_0x13a3ad[_0x55a7b0(0x4a0)],'ZarWw':'nYGCx','ICokU':function(_0x535b2e){return _0x535b2e();}};_0x5e9d7e['adblo'+'ck']&&_0x13a3ad[_0x55a7b0(0x213)](setInterval,()=>{var _0x3281bc=_0x55a7b0,_0x1f0454={'cIIvo':function(_0x59349a,_0x22edbb){return _0x59349a<_0x22edbb;},'BqZJk':function(_0x3988d3,_0x3a5ee8){return _0x3988d3===_0x3a5ee8;},'zYvSw':_0x13a3ad[_0x3281bc(0x45c)]};if(_0x13a3ad[_0x3281bc(0x658)]('NJKma','NJKma')){var _0x5b1c4a=_0x195fda[_0x3281bc(0x4fd)+_0x3281bc(0x509)];for(var _0x3e2de5=-0x152*-0x4+0x1*-0x6cd+-0x1*-0x185;_0x1f0454['cIIvo'](_0x3e2de5,_0x5b1c4a[_0x3281bc(0x372)+'h']);_0x3e2de5++){if(_0x5b1c4a[_0x3e2de5]['id']&&_0x1f0454[_0x3281bc(0x263)](_0x5b1c4a[_0x3e2de5]['id'][_0x3281bc(0x24b)+'Of'](_0x1f0454['zYvSw']),0x13*0x12d+-0x7*0x1b1+-0x4*0x2a0))_0x5b1c4a[_0x3e2de5][_0x3281bc(0x317)][_0x3281bc(0x6a7)+'ay']=_0x3281bc(0x4ae);}}else try{for(var _0x56a87d of[_0x3281bc(0x1db)+_0x3281bc(0x519)+'0x250'+_0x3281bc(0x327)+'nt',_0x13a3ad['xsqqb'],_0x3281bc(0x1db)+'io_30'+'0x600'+_0x3281bc(0x327)+'nt','fulls'+'creen'+_0x3281bc(0x29e)+'s']){if(_0x13a3ad[_0x3281bc(0x424)]!==_0x13a3ad[_0x3281bc(0x5fc)]){var _0x37e9e2=document[_0x3281bc(0x68e)+_0x3281bc(0x4f7)+_0x3281bc(0x62e)](_0x56a87d);if(_0x37e9e2&&_0x13a3ad[_0x3281bc(0x4b0)](_0x56a87d,_0x13a3ad[_0x3281bc(0x383)])){if('TaGYz'===_0x3281bc(0x466))try{_0x5d153e['setIt'+'em'](_0x3281bc(0x41c)+'a.kou'+_0x3281bc(0x432)+'v1',_0x2af70e['strin'+_0x3281bc(0x527)](_0xa7648c));}catch(_0xde51d9){}else{var _0x104d7e=_0x37e9e2['child'+_0x3281bc(0x509)];for(var _0x1b28b8=0x3*-0x821+-0x28a*0xa+0x31c7;_0x1b28b8<_0x104d7e[_0x3281bc(0x372)+'h'];_0x1b28b8++){if(_0x104d7e[_0x1b28b8]['id']&&_0x104d7e[_0x1b28b8]['id'][_0x3281bc(0x24b)+'Of'](_0x13a3ad[_0x3281bc(0x45c)])===-0x14e7+0xd38+-0x7af*-0x1)_0x104d7e[_0x1b28b8][_0x3281bc(0x317)][_0x3281bc(0x6a7)+'ay']=_0x3281bc(0x4ae);}}}else{if(_0x37e9e2)_0x37e9e2[_0x3281bc(0x317)]['displ'+'ay']=_0x13a3ad[_0x3281bc(0x55e)];}}else _0x5ae786[_0x3281bc(0x463)+'eValu'+'e']=_0x14f5c9,_0x54a5fc();}}catch(_0x5a5f06){}},-0x12af+-0x1*0x20f7+0x76*0x81);var _0x3dcc57=document[_0x55a7b0(0x406)+_0x55a7b0(0x532)+_0x55a7b0(0x2c0)](_0x13a3ad['nBnTS']);_0x3dcc57['style'][_0x55a7b0(0x544)+'xt']=_0x55a7b0(0x712)+_0x55a7b0(0x2cb)+_0x55a7b0(0x346)+_0x55a7b0(0x2e5)+_0x55a7b0(0x64e)+_0x55a7b0(0x4e6)+_0x55a7b0(0x526)+_0x55a7b0(0x47f)+_0x55a7b0(0x228)+_0x55a7b0(0x6e9)+'index'+_0x55a7b0(0x5fb)+'48364'+'6;poi'+_0x55a7b0(0x446)+_0x55a7b0(0x653)+'s:non'+'e';var _0x467278=_0x3dcc57[_0x55a7b0(0x2a7)+_0x55a7b0(0x302)]('2d');function _0x2e6201(){var _0x165653=_0x55a7b0,_0x80adbd={'gecQq':function(_0x2e325a,_0x41d327,_0x4932c3,_0x485bf1,_0x450930){return _0x2e325a(_0x41d327,_0x4932c3,_0x485bf1,_0x450930);},'gSvMF':_0x165653(0x61d)};if(_0x13a3ad['BxSJc']===_0x13a3ad[_0x165653(0x205)])_0x80adbd['gecQq'](_0x303091,_0xdfdccd,0xb18+-0x207e+-0x15f2*-0x1,_0x80adbd[_0x165653(0x1e3)],0x527+-0x1*0xcd+-0x22d*0x2+0.1),_0x80adbd[_0x165653(0x715)](_0x50f413,_0x128174,0x1369+0xa20+-0x1d29,_0x165653(0x61d),0x260a+-0x2224+-0x3e6+0.1);else try{var _0x426564=document[_0x165653(0x238)+_0x165653(0x299)+_0x165653(0x3b3)+'nt'],_0x12b320=_0x426564&&_0x426564[_0x165653(0x462)+'me']!==_0x13a3ad['HMhwY']?_0x426564:document[_0x165653(0x72c)]||document['docum'+_0x165653(0x607)+_0x165653(0x4f7)];if(_0x13a3ad['Gpxyc'](_0x3dcc57[_0x165653(0x2ff)+_0x165653(0x2cd)],_0x12b320))_0x12b320[_0x165653(0x22e)+'dChil'+'d'](_0x3dcc57);}catch(_0x499db3){try{document[_0x165653(0x72c)][_0x165653(0x22e)+_0x165653(0x3de)+'d'](_0x3dcc57);}catch(_0x2f42d1){}}}var _0x40374e={'w':0x0,'h':0x0,'dpr':0x0};function _0xd46044(){var _0x43387c=_0x55a7b0,_0x30381a=window[_0x43387c(0x6b0)+_0x43387c(0x6d9)+_0x43387c(0x1be)+'o']||0x2*-0x427+-0x791*0x1+0x10*0xfe,_0x53e26e=window[_0x43387c(0x307)+_0x43387c(0x378)],_0x3f79e9=window[_0x43387c(0x307)+_0x43387c(0x3b2)+'t'];if(_0x13a3ad['AcqUF'](_0x53e26e,_0x40374e['w'])&&_0x13a3ad[_0x43387c(0x375)](_0x3f79e9,_0x40374e['h'])&&_0x13a3ad[_0x43387c(0x375)](_0x30381a,_0x40374e[_0x43387c(0x678)]))return;_0x40374e['w']=_0x53e26e,_0x40374e['h']=_0x3f79e9,_0x40374e[_0x43387c(0x678)]=_0x30381a,_0x3dcc57[_0x43387c(0x70d)]=Math[_0x43387c(0x3b5)](_0x53e26e*_0x30381a),_0x3dcc57[_0x43387c(0x47f)+'t']=Math[_0x43387c(0x3b5)](_0x3f79e9*_0x30381a),_0x467278['setTr'+_0x43387c(0x692)+'rm'](_0x30381a,-0x14ac+0x2*0x71c+0x674,-0x64c*-0x4+-0x24f7+0xbc7,_0x30381a,0x481*0x3+0x34d*0x9+-0x4*0xace,-0x2441*-0x1+-0x1c1b+-0x826);}var _0x5626f6=-0x1*0xa63+0x13e9+-0x986,_0x2a1f0a=performance[_0x55a7b0(0x3ea)](),_0x21f5b1=0x5af+-0x1b75+0x6*0x3a1;function _0xffd750(_0x935abf){var _0x503bb9=_0x55a7b0,_0x4acb95=Number(_0x5e9d7e['ksSca'+'le'])||0x216d*-0x1+0x874+0x18fa,_0x4f7f0c=(-0x1852+0x17*-0x12a+0x333a)*_0x4acb95,_0x50407b=_0x13a3ad[_0x503bb9(0x4d5)](0xd44+-0x1*0x1d3f+0x1c7*0x9,_0x4acb95),_0x366d95=_0x13a3ad[_0x503bb9(0x259)](_0x4f7f0c,0x2*-0xdea+0x167*0xe+0x835)+_0x50407b*(-0x52+-0x10b7*0x1+0x1*0x110b),_0x49ffe3=_0x4f7f0c*(0x146d+0x10b9+-0x2523)+_0x13a3ad[_0x503bb9(0x259)](_0x50407b,0x2441*-0x1+0x43c*0x2+0x58f*0x5),_0x3f8486=_0x5e9d7e[_0x503bb9(0x56c)],_0x4974fb=_0x13a3ad[_0x503bb9(0x3bc)](_0x3f8486,'br')?_0x13a3ad[_0x503bb9(0x42b)](_0x935abf['right']-(0x21f5+0x98c+0x2b71*-0x1),_0x366d95):_0x935abf[_0x503bb9(0x1d2)]+(-0x1*0x54d+0x557+0x6),_0x2a4bae=_0x3f8486==='ml'?_0x935abf[_0x503bb9(0x1fa)]+_0x13a3ad['EqVUK'](_0x935abf[_0x503bb9(0x47f)+'t'],-0xe86+-0x226*0x3+0x14fa)-_0x13a3ad[_0x503bb9(0x627)](_0x49ffe3,-0xa7b+0x346+0x737):_0x13a3ad['lkjUO'](_0x935abf['botto'+'m'],_0x49ffe3)-(_0x3f8486==='bl'?0x1c23+-0x21b3+0x5f0:-0x1*0x20f5+0x6*-0x296+0x310f),_0x31f4b5=(_0x1b1116,_0xb624f1,_0x5708ab,_0x7f942e,_0x5de2c3,_0x324d15,_0x3d4c2e)=>{var _0x1f5285=_0x503bb9,_0xa3d4ec=_0xa3c0b2[_0x1f5285(0x468)](_0xb624f1);_0x467278[_0x1f5285(0x5ea)](),_0x467278[_0x1f5285(0x5e7)+'Path']();if(_0x467278['round'+_0x1f5285(0x52b)])_0x467278['round'+_0x1f5285(0x52b)](_0x5708ab,_0x7f942e,_0x5de2c3,_0x324d15,(-0x5*0x657+0x176b+-0x1*-0x84f)*_0x4acb95);else _0x467278[_0x1f5285(0x1f2)](_0x5708ab,_0x7f942e,_0x5de2c3,_0x324d15);_0x467278['fillS'+_0x1f5285(0x454)]=_0xa3d4ec?_0x550501[_0x1f5285(0x4d0)]:'rgba('+'22,8,'+_0x1f5285(0x1e9)+'7)',_0x467278[_0x1f5285(0x22d)](),_0x467278[_0x1f5285(0x62c)+_0x1f5285(0x59b)]=-0x1*0x1d5+-0x2565+0x273b,_0x467278['strok'+_0x1f5285(0x5f5)+'e']=_0xa3d4ec?_0x31eae4:_0x1f5285(0x6a3)+_0x1f5285(0x1f6)+_0x1f5285(0x51c)+_0x1f5285(0x5c9)+'5)',_0x467278[_0x1f5285(0x49d)+'e'](),_0xa3d4ec&&(_0x467278['shado'+'wColo'+'r']=_0x3470c6,_0x467278['shado'+'wBlur']=-0x1*0x1dc+0x3c5*0x1+-0x1*0x1db,_0x467278['fill'](),_0x467278[_0x1f5285(0x5af)+_0x1f5285(0x5d4)]=0x1*-0x142f+0x10b3+-0x4*-0xdf),_0x467278[_0x1f5285(0x5f7)+_0x1f5285(0x454)]=_0xa3d4ec?_0x1f5285(0x602):'rgba('+_0x1f5285(0x4a7)+_0x1f5285(0x1d5)+'0,0.8'+')',_0x467278['textA'+_0x1f5285(0x656)]=_0x550501[_0x1f5285(0x6aa)],_0x467278['textB'+'aseli'+'ne']=_0x1f5285(0x5a4)+'e',_0x467278['font']=_0x550501['Gdufa'](_0x1f5285(0x3b1)+Math[_0x1f5285(0x3b5)]((-0xa1f+-0x3*-0x63d+-0x88c)*_0x4acb95),'px\x20ui'+_0x1f5285(0x41b)+'-seri'+_0x1f5285(0x2cf)+_0x1f5285(0x553)+_0x1f5285(0x28e)+_0x1f5285(0x22b)+'if'),_0x467278['fillT'+'ext'](_0x1b1116,_0x5708ab+_0x550501['jIpJr'](_0x5de2c3,-0xa*-0xb0+0x11a4+-0x1882),_0x550501[_0x1f5285(0x234)](_0x550501[_0x1f5285(0x626)](_0x7f942e,_0x550501['jIpJr'](_0x324d15,-0x34*-0x43+0x5d*0x59+-0x42d*0xb)),_0x3d4c2e?(0x26e6+0x147f+-0x3b60)*_0x4acb95:-0x15d+0x2f*-0xc1+0x24cc)),_0x3d4c2e&&(_0x467278['font']='600\x20'+Math['round'](_0x550501[_0x1f5285(0x4b6)](0x2128+0x6b*0x58+-0x4a9*0xf,_0x4acb95))+_0x550501[_0x1f5285(0x57e)],_0x467278[_0x1f5285(0x5f7)+'tyle']=_0xa3d4ec?_0x1f5285(0x602):_0x1f5285(0x6a3)+_0x1f5285(0x4a7)+_0x1f5285(0x1d5)+_0x1f5285(0x6db)+'5)',_0x467278['fillT'+'ext'](_0x3d4c2e,_0x550501[_0x1f5285(0x739)](_0x5708ab,_0x550501[_0x1f5285(0x277)](_0x5de2c3,0x9fa*-0x1+0x2267*-0x1+0x2c63)),_0x550501[_0x1f5285(0x30e)](_0x7f942e+_0x324d15/(-0xfc4+-0x76c+0xb99*0x2),(0x67b+0x2f9+-0x96c)*_0x4acb95))),_0x467278['resto'+'re']();};_0x13a3ad[_0x503bb9(0x63d)](_0x31f4b5,'W',_0x503bb9(0x618),_0x13a3ad[_0x503bb9(0x554)](_0x4974fb+_0x4f7f0c,_0x50407b),_0x2a4bae,_0x4f7f0c,_0x4f7f0c),_0x31f4b5('A',_0x503bb9(0x387),_0x4974fb,_0x2a4bae+_0x4f7f0c+_0x50407b,_0x4f7f0c,_0x4f7f0c),_0x31f4b5('S',_0x503bb9(0x475),_0x13a3ad[_0x503bb9(0x671)](_0x13a3ad[_0x503bb9(0x696)](_0x4974fb,_0x4f7f0c),_0x50407b),_0x13a3ad[_0x503bb9(0x1c2)](_0x13a3ad[_0x503bb9(0x6e0)](_0x2a4bae,_0x4f7f0c),_0x50407b),_0x4f7f0c,_0x4f7f0c),_0x31f4b5('D',_0x13a3ad['sicoT'],_0x4974fb+_0x13a3ad[_0x503bb9(0x488)](_0x13a3ad[_0x503bb9(0x1c2)](_0x4f7f0c,_0x50407b),0x2226+0xb51+-0x2d75),_0x13a3ad[_0x503bb9(0x70c)](_0x2a4bae,_0x4f7f0c)+_0x50407b,_0x4f7f0c,_0x4f7f0c);var _0x19b5bc=_0x13a3ad['OmGDL'](_0x13a3ad[_0x503bb9(0x42b)](_0x366d95,_0x50407b),-0x196*0x1+-0x5d*-0x17+-0x1*0x6c3),_0x20e970=_0x2a4bae+(_0x4f7f0c+_0x50407b)*(0x1607*-0x1+0x1249*0x2+-0xe89);_0x31f4b5(_0x503bb9(0x67a),_0x503bb9(0x6c1)+'1',_0x4974fb,_0x20e970,_0x19b5bc,_0x4f7f0c,_0x5e9d7e['ksCps']?_0x13a3ad['nQcfV'](_0x3f5d4c,0x10a+0xd8f+-0x74c*0x2)+_0x13a3ad['HHGyj']:''),_0x31f4b5(_0x13a3ad['BVnsN'],_0x503bb9(0x6c1)+'3',_0x13a3ad[_0x503bb9(0x1c2)](_0x13a3ad['weadA'](_0x4974fb,_0x19b5bc),_0x50407b),_0x20e970,_0x19b5bc,_0x4f7f0c,_0x5e9d7e[_0x503bb9(0x3ce)]?_0x13a3ad[_0x503bb9(0x315)](_0x3f5d4c,-0x4d*-0x3b+0x184b+-0x2a07)+_0x503bb9(0x550):''),_0x31f4b5('',_0x503bb9(0x702),_0x4974fb,_0x13a3ad['sMcDZ'](_0x13a3ad[_0x503bb9(0x308)](_0x20e970,_0x4f7f0c),_0x50407b),_0x366d95,_0x4f7f0c*(0x1ac1+0x473*0x1+-0x1f34+0.45));}function _0x58aa73(_0x3adb96){var _0x1074ee=_0x55a7b0,_0x2ee720=(_0x1074ee(0x6c9)+'|10|1'+'|3|6|'+_0x1074ee(0x309)+'|15|1'+_0x1074ee(0x33b)+'|14|1'+'1|22|'+_0x1074ee(0x484)+_0x1074ee(0x27e)+'|20|7'+'|23|1'+'6')['split']('|'),_0x2ea58c=-0x3*-0x8e4+0x9e6+-0x1f*0x12e;while(!![]){switch(_0x2ee720[_0x2ea58c++]){case'0':var _0x5344bd=_0x13a3ad[_0x1074ee(0x248)](_0x3adb96[_0x1074ee(0x70d)],-0xeca+0x1b67+-0xc9b*0x1),_0x4f0d79=_0x3adb96[_0x1074ee(0x47f)+'t']/(0x1c31+0xf7e+0x3*-0xe8f);continue;case'1':_0x467278['strok'+_0x1074ee(0x5f5)+'e']=_0x5f1ed0;continue;case'2':_0x467278[_0x1074ee(0x61a)+'o'](_0x5344bd,_0x4f0d79+_0x2689a2);continue;case'3':_0x467278[_0x1074ee(0x5f7)+_0x1074ee(0x454)]=_0x5f1ed0;continue;case'4':var _0x5f1ed0=/^#[0-9a-f]{6}$/i['test'](_0x5e9d7e[_0x1074ee(0x2e0)+'or'])?_0x5e9d7e['chCol'+'or']:_0x13a3ad[_0x1074ee(0x28b)];continue;case'5':_0x467278[_0x1074ee(0x61a)+'o'](_0x13a3ad[_0x1074ee(0x236)](_0x5344bd-_0x2689a2,_0x3e4d52),_0x4f0d79);continue;case'6':_0x467278[_0x1074ee(0x62c)+_0x1074ee(0x59b)]=Math[_0x1074ee(0x60d)](-0x151*0x1b+-0x2419+-0x1*-0x47a5+0.5,(-0x9d*-0x25+-0x4*-0x328+-0x45*0x83)*_0x2adc19);continue;case'7':_0x467278['arc'](_0x5344bd,_0x4f0d79,(0x1f71*-0x1+-0x19*0x173+-0x43ad*-0x1+0.6000000000000001)*_0x2adc19,0x6b*0x46+-0xe5f*0x1+0x1*-0xee3,Math['PI']*(0x39b*-0x7+0xc3e+0xd01));continue;case'8':var _0x2adc19=_0x13a3ad[_0x1074ee(0x315)](Number,_0x5e9d7e[_0x1074ee(0x42d)+'e'])||-0xf7a+-0x1*0xa6d+-0x19e8*-0x1;continue;case'9':_0x467278['lineT'+'o'](_0x13a3ad[_0x1074ee(0x3c4)](_0x5344bd,_0x2689a2),_0x4f0d79);continue;case'10':_0x467278[_0x1074ee(0x5ea)]();continue;case'11':_0x467278[_0x1074ee(0x431)+'o'](_0x13a3ad[_0x1074ee(0x358)](_0x13a3ad[_0x1074ee(0x278)](_0x5344bd,_0x2689a2),_0x3e4d52),_0x4f0d79);continue;case'12':_0x467278[_0x1074ee(0x431)+'o'](_0x5344bd,_0x4f0d79-_0x2689a2);continue;case'13':_0x467278['shado'+'wColo'+'r']=_0x5f1ed0;continue;case'14':_0x467278['moveT'+'o'](_0x13a3ad['ZDfUU'](_0x5344bd,_0x2689a2),_0x4f0d79);continue;case'15':var _0x2689a2=(0x29f*-0x4+0x2*-0xc97+0x8ec*0x4)*_0x2adc19,_0x3e4d52=(-0x298+0x214e+0x21*-0xee)*_0x2adc19;continue;case'16':_0x467278[_0x1074ee(0x1ee)+'re']();continue;case'17':_0x467278[_0x1074ee(0x5e7)+'Path']();continue;case'18':_0x467278[_0x1074ee(0x49d)+'e']();continue;case'19':_0x467278[_0x1074ee(0x5af)+_0x1074ee(0x5d4)]=0x1*0x1b8e+-0x123*-0x21+-0x410b;continue;case'20':_0x467278['begin'+'Path']();continue;case'21':_0x467278[_0x1074ee(0x431)+'o'](_0x5344bd,_0x4f0d79+_0x2689a2+_0x3e4d52);continue;case'22':_0x467278['moveT'+'o'](_0x5344bd,_0x13a3ad['OyUQr'](_0x4f0d79,_0x2689a2)-_0x3e4d52);continue;case'23':_0x467278[_0x1074ee(0x22d)]();continue;}break;}}function _0x36b201(_0x372f79){var _0x544388=_0x55a7b0,_0x1eabe8={'ABfAV':_0x550501['ZLNNN'],'MumYD':_0x544388(0x294)+'n'};if(_0x550501['hRQsq'](_0x550501['SZCtE'],'FIXhv')){var _0x3d8f16=_0x1eabe8['ABfAV'][_0x544388(0x273)]('|'),_0x5de625=-0x1ef8+-0x50a+0x2402;while(!![]){switch(_0x3d8f16[_0x5de625++]){case'0':return _0x40625b;case'1':var _0x40625b=_0x271c1d[_0x544388(0x406)+'eElem'+_0x544388(0x2c0)](_0x544388(0x39e)+'t');continue;case'2':_0x40625b[_0x544388(0x266)]=_0x5256d9;continue;case'3':_0x40625b[_0x544388(0x3a6)+'Name']='sk-fi'+'eld';continue;case'4':_0x40625b['oncha'+'nge']=()=>_0x2c56f9(_0x40625b[_0x544388(0x266)]);continue;case'5':for(var [_0x492d11,_0x26cba1]of _0x5ef0b7){var _0x20362c=_0x5a269d[_0x544388(0x406)+'eElem'+_0x544388(0x2c0)](_0x1eabe8['MumYD']);_0x20362c['value']=_0x492d11,_0x20362c[_0x544388(0x5ef)+'onten'+'t']=_0x26cba1,_0x40625b[_0x544388(0x22e)+_0x544388(0x3de)+'d'](_0x20362c);}continue;}break;}}else{_0x467278['save'](),_0x467278['font']='600\x201'+_0x544388(0x590)+'i-mon'+_0x544388(0x536)+'e,mon'+_0x544388(0x536)+'e',_0x467278['textA'+_0x544388(0x656)]=_0x550501[_0x544388(0x33d)],_0x467278['textB'+_0x544388(0x2ce)+'ne']=_0x550501[_0x544388(0x6d4)];var _0x239560=0x110+0x69d*0x2+-0x1a*0x8b,_0x7fee94=-0x1c1c+0x24c4+-0x1*0x89c,_0x1a910f=(_0x2a061a,_0x35afef)=>{var _0x28a6dd=_0x544388;_0x467278['fillS'+_0x28a6dd(0x454)]=_0x550501['zYqBV'](_0x35afef,'rgba('+'255,2'+'35,24'+_0x28a6dd(0x369)+'5)'),_0x467278['fillT'+'ext'](_0x2a061a,_0x7fee94,_0x239560),_0x239560+=-0x5d8+-0x3*0x89e+0xa96*0x3;};_0x550501['qebTH'](_0x1a910f,_0x550501[_0x544388(0x720)],'#ff6b'+'9d');if(_0x5e9d7e[_0x544388(0x20b)])_0x550501['HJdGY'](_0x1a910f,_0x550501['oYbhw'](_0x21f5b1,_0x550501[_0x544388(0x1f3)]));if(!_0x42c33f['gameL'+_0x544388(0x67f)])_0x1a910f(_0x550501[_0x544388(0x1c9)],_0x544388(0x6a3)+_0x544388(0x1f6)+'80,19'+'0,0.6'+')');_0x467278['resto'+'re']();}}function _0x5a3da9(){var _0x19373a=_0x55a7b0;if(_0x550501['wvwkB'](_0x19373a(0x482),_0x550501[_0x19373a(0x5e0)]))_0x22d5f0[_0x19373a(0x42d)+'e']=_0x134d87,_0x199084();else{requestAnimationFrame(_0x5a3da9),_0x5626f6++;var _0x380be0=performance['now']();if(_0x380be0-_0x2a1f0a>=-0x1cfc+-0x8*0x358+-0x8e*-0x68){if(_0x550501[_0x19373a(0x2f5)]!==_0x550501['atmuc'])_0x21f5b1=Math[_0x19373a(0x3b5)](_0x550501[_0x19373a(0x516)](_0x5626f6*(-0x677+-0x5c9*0x5+0x274c*0x1),_0x550501[_0x19373a(0x629)](_0x380be0,_0x2a1f0a))),_0x5626f6=0x1da0+0xe5e+-0xeaa*0x3,_0x2a1f0a=_0x380be0;else{var _0x18d450=new _0x345ce2(_0x3fd472)[_0x19373a(0x1ef)+_0x19373a(0x433)](_0x2b1f2f,_0x19373a(0x2b0));return _0x18d450?_0x18d450['val']():0x86*0x4a+-0x1547+-0x1175;}}_0xd46044(),_0x2e6201(),_0x467278[_0x19373a(0x373)+_0x19373a(0x52b)](0x14d9+0x2528+-0x3a01,-0x53d+-0xd8a*-0x1+-0x11*0x7d,_0x40374e['w'],_0x40374e['h']);var _0x1afed3={'left':0x0,'top':0x0,'right':_0x40374e['w'],'bottom':_0x40374e['h'],'width':_0x40374e['w'],'height':_0x40374e['h']};if(_0x5e9d7e[_0x19373a(0x382)+_0x19373a(0x3e3)])_0x550501['tmrhY'](_0x58aa73,_0x1afed3);if(_0x5e9d7e[_0x19373a(0x529)+_0x19373a(0x1c3)])_0x550501['WOkHo'](_0xffd750,_0x1afed3);_0x550501[_0x19373a(0x587)](_0x36b201,_0x1afed3);}}var _0x11bb2d=document[_0x55a7b0(0x406)+_0x55a7b0(0x532)+_0x55a7b0(0x2c0)](_0x13a3ad[_0x55a7b0(0x26c)]);_0x11bb2d['id']='sakur'+_0x55a7b0(0x5ac),_0x11bb2d['style'][_0x55a7b0(0x544)+'xt']=_0x13a3ad['aBIhx'];var _0x385812=_0x11bb2d['attac'+_0x55a7b0(0x713)+'ow']({'mode':_0x13a3ad[_0x55a7b0(0x3ee)]});(document[_0x55a7b0(0x72c)]||document[_0x55a7b0(0x51e)+_0x55a7b0(0x607)+'ement'])[_0x55a7b0(0x22e)+'dChil'+'d'](_0x11bb2d);var _0x13a7f6=![],_0xe97cb9={};try{_0xe97cb9=JSON[_0x55a7b0(0x650)](localStorage[_0x55a7b0(0x46a)+'em'](_0x55a7b0(0x41c)+_0x55a7b0(0x3df)+_0x55a7b0(0x432)+'v1')||'{}');}catch(_0x2c60c8){}function _0x4f8191(){var _0x2061e3=_0x55a7b0;try{_0x550501['OzYEk'](_0x550501['QxItB'],'XWJzq')?localStorage['setIt'+'em'](_0x550501[_0x2061e3(0x50c)],JSON[_0x2061e3(0x4aa)+'gify'](_0xe97cb9)):(_0x4709ac['bhop']=_0x3ae04d,_0x1d98b0());}catch(_0x5b275e){}}function _0x5595b6(_0x13b097,_0x4977dd){var _0x48ba05=_0x55a7b0,_0x37c231={'XQYUI':_0x48ba05(0x41c)+_0x48ba05(0x3df)+_0x48ba05(0x432)+'v1','VSoHX':_0x13a3ad[_0x48ba05(0x3b7)],'nCuRC':function(_0x10e10d,_0x35730e){return _0x10e10d!==_0x35730e;}},_0x762298=document[_0x48ba05(0x406)+'eElem'+_0x48ba05(0x2c0)](_0x13a3ad['SxzPI']);return _0x762298[_0x48ba05(0x23b)]=_0x48ba05(0x6e3)+'n',_0x762298[_0x48ba05(0x3a6)+_0x48ba05(0x204)]=_0x13a3ad[_0x48ba05(0x686)],_0x762298['setAt'+_0x48ba05(0x6fc)+'te']('role',_0x48ba05(0x3a3)+'h'),_0x762298[_0x48ba05(0x2a2)+'tribu'+'te'](_0x13a3ad[_0x48ba05(0x296)],String(!!_0x13b097)),_0x762298['oncli'+'ck']=_0x512767=>{var _0x445863=_0x48ba05,_0x971531={'uXBaD':_0x37c231['XQYUI']};if(_0x445863(0x6ec)===_0x37c231[_0x445863(0x206)]){_0x512767[_0x445863(0x61b)+'ropag'+_0x445863(0x23a)]();var _0x4e2548=_0x37c231['nCuRC'](_0x762298[_0x445863(0x2ef)+_0x445863(0x6fc)+'te']('aria-'+'check'+'ed'),_0x445863(0x649));_0x762298[_0x445863(0x2a2)+_0x445863(0x6fc)+'te'](_0x445863(0x2e6)+_0x445863(0x3d6)+'ed',String(_0x4e2548)),_0x4977dd(_0x4e2548);}else _0x287927=_0x3e8cff['parse'](_0x14288b[_0x445863(0x46a)+'em'](_0x971531[_0x445863(0x46b)])||'{}');},_0x762298;}function _0x2a61cb(_0x3f4ec3,_0x5dbdcd,_0x4c8298,_0x2b2653,_0x4afd91){var _0x50087a=_0x55a7b0,_0x9bea8f=document['creat'+_0x50087a(0x532)+_0x50087a(0x2c0)](_0x550501['KHQgx']);_0x9bea8f['class'+_0x50087a(0x204)]=_0x50087a(0x31e)+'nge';var _0x536a72=document['creat'+'eElem'+_0x50087a(0x2c0)](_0x50087a(0x2e4));_0x536a72['type']='range',_0x536a72['class'+_0x50087a(0x204)]=_0x50087a(0x4a2)+_0x50087a(0x680),_0x536a72['min']=_0x5dbdcd,_0x536a72[_0x50087a(0x60d)]=_0x4c8298,_0x536a72['step']=_0x2b2653,_0x536a72['value']=_0x3f4ec3;var _0x48d5de=document[_0x50087a(0x406)+'eElem'+_0x50087a(0x2c0)](_0x50087a(0x730));_0x48d5de[_0x50087a(0x3a6)+_0x50087a(0x204)]=_0x50087a(0x338)+'l',_0x48d5de[_0x50087a(0x5ef)+_0x50087a(0x5f3)+'t']=String(_0x3f4ec3);var _0x4fa1d9=()=>{var _0x3d32b0=_0x50087a;_0x3d32b0(0x3d1)!==_0x3d32b0(0x716)?(_0x48d5de[_0x3d32b0(0x5ef)+_0x3d32b0(0x5f3)+'t']=String(_0x536a72[_0x3d32b0(0x266)]),_0x9bea8f[_0x3d32b0(0x317)]['setPr'+_0x3d32b0(0x5c2)+'y'](_0x3d32b0(0x360),_0x550501[_0x3d32b0(0x4b6)]((_0x536a72[_0x3d32b0(0x266)]-_0x5dbdcd)/_0x550501[_0x3d32b0(0x629)](_0x4c8298,_0x5dbdcd),-0x1*0xccf+-0x1f5c+0x2c8f)+'%')):(_0x28a470['safeM'+'ode']=_0x231028,_0x1d8ef0(),_0x391d82[_0x3d32b0(0x344)+'d']());};return _0x536a72[_0x50087a(0x582)+'ut']=()=>{var _0x13bfc8=_0x50087a;_0x4fa1d9(),_0x4afd91(Number(_0x536a72[_0x13bfc8(0x266)]));},_0x550501[_0x50087a(0x423)](_0x4fa1d9),_0x9bea8f['appen'+'d'](_0x536a72,_0x48d5de),_0x9bea8f;}function _0x54de8b(_0x391a7f,_0x452f52){var _0xc2f018=_0x55a7b0,_0x2314f9=(_0xc2f018(0x523)+'|5|3|'+'0')[_0xc2f018(0x273)]('|'),_0x4e7006=0x3f1+-0x223*0x6+0x8e1;while(!![]){switch(_0x2314f9[_0x4e7006++]){case'0':return _0x244995;case'1':_0x244995[_0xc2f018(0x23b)]=_0xc2f018(0x4e1);continue;case'2':_0x244995['class'+'Name']=_0xc2f018(0x661)+_0xc2f018(0x371);continue;case'3':_0x244995['oninp'+'ut']=()=>_0x452f52(_0x244995[_0xc2f018(0x266)]);continue;case'4':var _0x244995=document[_0xc2f018(0x406)+'eElem'+'ent'](_0xc2f018(0x2e4));continue;case'5':_0x244995[_0xc2f018(0x266)]=/^#[0-9a-f]{6}$/i['test'](_0x391a7f)?_0x391a7f:_0x550501['HgtPD'];continue;}break;}}function _0x147f12(_0x498231,_0x171ed2,_0x56e957){var _0x10d9e0=_0x55a7b0,_0x1685b9=document[_0x10d9e0(0x406)+_0x10d9e0(0x532)+'ent'](_0x10d9e0(0x39e)+'t');_0x1685b9[_0x10d9e0(0x3a6)+_0x10d9e0(0x204)]=_0x13a3ad['aWtSl'];for(var [_0x20d01e,_0x51f142]of _0x171ed2){var _0x1daa15=document[_0x10d9e0(0x406)+_0x10d9e0(0x532)+_0x10d9e0(0x2c0)](_0x13a3ad[_0x10d9e0(0x36f)]);_0x1daa15['value']=_0x20d01e,_0x1daa15[_0x10d9e0(0x5ef)+'onten'+'t']=_0x51f142,_0x1685b9[_0x10d9e0(0x22e)+_0x10d9e0(0x3de)+'d'](_0x1daa15);}return _0x1685b9['value']=_0x498231,_0x1685b9[_0x10d9e0(0x36d)+'nge']=()=>_0x56e957(_0x1685b9['value']),_0x1685b9;}function _0xa11b22(_0x5ae73c,_0x5dae3f){var _0x1d422a=_0x55a7b0,_0x528063=document[_0x1d422a(0x406)+'eElem'+_0x1d422a(0x2c0)](_0x550501['wODMi']);return _0x528063[_0x1d422a(0x23b)]='butto'+'n',_0x528063['class'+_0x1d422a(0x204)]=_0x550501['LJHxh'],_0x528063[_0x1d422a(0x5ef)+'onten'+'t']=_0x5ae73c,_0x528063[_0x1d422a(0x69a)+'ck']=_0x4ebf77=>{var _0x6ff56a=_0x1d422a;_0x4ebf77[_0x6ff56a(0x61b)+'ropag'+_0x6ff56a(0x23a)](),_0x5dae3f();},_0x528063;}function _0x2802e1(_0x278e12,_0x5558d4,_0x2e2a62){var _0xd64932=_0x55a7b0,_0x59ce19=document[_0xd64932(0x406)+'eElem'+_0xd64932(0x2c0)](_0x13a3ad[_0xd64932(0x26c)]);_0x59ce19[_0xd64932(0x3a6)+_0xd64932(0x204)]=_0x13a3ad[_0xd64932(0x364)];var _0xd05b0d=document[_0xd64932(0x406)+'eElem'+_0xd64932(0x2c0)](_0xd64932(0x730));_0xd05b0d['class'+'Name']=_0xd64932(0x558)+_0xd64932(0x510),_0xd05b0d['textC'+_0xd64932(0x5f3)+'t']=_0x278e12;if(_0x5558d4){var _0xbefb00=document['creat'+'eElem'+'ent'](_0xd64932(0x276));_0xbefb00[_0xd64932(0x3a6)+'Name']='sk-hi'+'nt',_0xbefb00[_0xd64932(0x5ef)+'onten'+'t']=_0x5558d4,_0xd05b0d['appen'+_0xd64932(0x3de)+'d'](_0xbefb00);}return _0x59ce19[_0xd64932(0x22e)+'d'](_0xd05b0d,_0x2e2a62),_0x59ce19;}function _0x3757ea(_0x348a56,_0x33e8cf){var _0x55fd61=_0x55a7b0,_0x1fd35a=document['creat'+_0x55fd61(0x532)+_0x55fd61(0x2c0)](_0x13a3ad[_0x55fd61(0x26c)]);return _0x1fd35a['class'+'Name']=_0x13a3ad[_0x55fd61(0x6d1)]('sk-no'+'te',_0x33e8cf?_0x55fd61(0x60c):''),_0x1fd35a['textC'+_0x55fd61(0x5f3)+'t']=_0x348a56,_0x1fd35a;}function _0x1abb31(_0x460820,_0x3f683a,_0x2d6c93,_0x71e09e,_0x242d11){var _0x1e7f43=_0x55a7b0,_0x21dac1=('10|7|'+'3|0|4'+_0x1e7f43(0x5ad)+_0x1e7f43(0x289)+_0x1e7f43(0x521)+_0x1e7f43(0x61f))['split']('|'),_0x22e740=-0xe+0x25*0xd+0x1d3*-0x1;while(!![]){switch(_0x21dac1[_0x22e740++]){case'0':_0x41e01c[_0x1e7f43(0x3a6)+_0x1e7f43(0x204)]=_0x1e7f43(0x562)+_0x1e7f43(0x52f)+'ad';continue;case'1':_0x20fc65['class'+'Name']=_0x1e7f43(0x562)+_0x1e7f43(0x598)+'tle';continue;case'2':return _0x7fe495;case'3':var _0x41e01c=document[_0x1e7f43(0x406)+_0x1e7f43(0x532)+_0x1e7f43(0x2c0)]('div');continue;case'4':var _0x20fc65=document['creat'+_0x1e7f43(0x532)+_0x1e7f43(0x2c0)]('div');continue;case'5':_0x20fc65[_0x1e7f43(0x22e)+_0x1e7f43(0x3de)+'d'](_0x5770ea);continue;case'6':_0x5770ea['textC'+_0x1e7f43(0x5f3)+'t']=_0x460820;continue;case'7':_0x7fe495['class'+_0x1e7f43(0x204)]=_0x550501['qObud'](_0x550501[_0x1e7f43(0x6b6)],_0x2d6c93?_0x1e7f43(0x5e6):'');continue;case'8':if(_0x242d11&&_0x242d11[_0x1e7f43(0x372)+'h']){var _0x30a422=document['creat'+'eElem'+'ent'](_0x550501[_0x1e7f43(0x229)]);_0x30a422['class'+_0x1e7f43(0x204)]='sk-mb'+_0x1e7f43(0x1fc);var _0xb9768b=document[_0x1e7f43(0x406)+_0x1e7f43(0x532)+'ent'](_0x550501[_0x1e7f43(0x229)]);_0xb9768b[_0x1e7f43(0x3a6)+_0x1e7f43(0x204)]=_0x550501['pVwlu'],_0xb9768b['textC'+_0x1e7f43(0x5f3)+'t']=_0x3f683a,_0x30a422[_0x1e7f43(0x22e)+'dChil'+'d'](_0xb9768b);for(var _0x52997f of _0x242d11)_0x30a422['appen'+'dChil'+'d'](_0x52997f);_0x7fe495[_0x1e7f43(0x22e)+'dChil'+'d'](_0x30a422);}continue;case'9':if(_0x71e09e){var _0x3822e1=_0x550501[_0x1e7f43(0x3f8)](_0x5595b6,_0x2d6c93,_0x85f29=>{var _0x3ddc60=_0x1e7f43;_0x7fe495[_0x3ddc60(0x3a6)+_0x3ddc60(0x252)][_0x3ddc60(0x2fc)+'e']('on',_0x85f29),_0x71e09e(_0x85f29);});_0x41e01c[_0x1e7f43(0x22e)+'d'](_0x20fc65,_0x3822e1);}else _0x41e01c['appen'+_0x1e7f43(0x3de)+'d'](_0x20fc65);continue;case'10':var _0x7fe495=document[_0x1e7f43(0x406)+'eElem'+_0x1e7f43(0x2c0)](_0x550501[_0x1e7f43(0x229)]);continue;case'11':_0x7fe495['appen'+_0x1e7f43(0x3de)+'d'](_0x41e01c);continue;case'12':var _0x5770ea=document['creat'+_0x1e7f43(0x532)+'ent'](_0x550501[_0x1e7f43(0x3fb)]);continue;}break;}}var _0x2d7b1e=[{'id':'comba'+'t','label':_0x13a3ad['zNjHi']},{'id':'move','label':_0x55a7b0(0x268)},{'id':_0x13a3ad['Uebqh'],'label':'Visua'+'l'},{'id':_0x55a7b0(0x3d4),'label':_0x13a3ad[_0x55a7b0(0x452)]},{'id':_0x13a3ad['aEtpv'],'label':_0x13a3ad['DVKJg']}];function _0x344e47(){var _0x556164=_0x55a7b0,_0x2022d2=_0x42c33f[_0x556164(0x67c)+_0x556164(0x2b8)]?_0x556164(0x481)+_0x556164(0x2b5)+_0x556164(0x262)+_0x556164(0x1f8)+'only,'+_0x556164(0x581)+_0x556164(0x28f)+'(relo'+_0x556164(0x5aa)+'\x20exit'+')':_0x42c33f[_0x556164(0x47e)]?_0x550501[_0x556164(0x30e)](_0x550501[_0x556164(0x739)](_0x550501[_0x556164(0x21f)](_0x550501[_0x556164(0x38a)]('UWMK\x20'+_0x556164(0x291)+'\x20'+(_0x42c33f[_0x556164(0x731)+_0x556164(0x2ba)]?_0x42c33f['hooks'+'Ok']+'/'+_0x42c33f[_0x556164(0x731)+_0x556164(0x2ba)]+('\x20hook'+'s'):_0x550501[_0x556164(0x3a8)])+_0x550501[_0x556164(0x511)]+(_0x42c33f['gameL'+_0x556164(0x67f)]?_0x550501[_0x556164(0x5cd)]:_0x556164(0x38d)+'ng'),'\x20|\x20sh'+'ooter'+'\x20'),_0x42c33f[_0x556164(0x464)+'ers']?_0x556164(0x2c6):_0x550501['ALFkd']),_0x550501['TbEbe']),_0x42c33f[_0x556164(0x4d1)+_0x556164(0x72e)]?_0x550501['tCTQe']:_0x556164(0x4ae)):_0x550501['hsDow'];if(_0x42c33f['lastE'+_0x556164(0x2a9)])_0x2022d2+='\x20|\x20ER'+_0x556164(0x586)+_0x42c33f[_0x556164(0x6b3)+'rror'];return _0x1abb31(_0x550501[_0x556164(0x652)],_0x2022d2,_0x42c33f[_0x556164(0x47e)],null,[_0x550501['kFJlS'](_0x2802e1,_0x556164(0x5fe)+_0x556164(0x493)+_0x556164(0x1c1),_0x550501[_0x556164(0x555)],_0xa11b22(_0x556164(0x60b),()=>{var _0x13f957=_0x556164;try{if(_0x550501[_0x13f957(0x321)]!==_0x550501[_0x13f957(0x269)]){if(_0x51b2b9)_0x51b2b9[_0x13f957(0x237)](_0x550501[_0x13f957(0x51a)],'set_t'+_0x13f957(0x1c4)+'Frame'+'Rate',[-0x26e4+0x2680+0x154]);}else _0x4a6088[_0x13f957(0x5af)+_0x13f957(0x39d)+'r']=_0x14ebb9,_0x212a3d[_0x13f957(0x5af)+_0x13f957(0x5d4)]=-0x5*0x619+0x1d37+0xa*0x22,_0xca8f15[_0x13f957(0x22d)](),_0xc9bf50[_0x13f957(0x5af)+'wBlur']=-0x1813+0x2328+-0xb15;}catch(_0xa3af94){}}))]);}function _0x2704e6(_0x575587){var _0x46ac0d=_0x55a7b0,_0x456c35={'IYfDj':function(_0x3f69c6){return _0x3f69c6();},'AaLec':_0x13a3ad[_0x46ac0d(0x635)],'BJjEv':function(_0x533388,_0x93c40d){return _0x533388*_0x93c40d;},'KkrEm':function(_0xd88a9e,_0x2a5184){return _0xd88a9e-_0x2a5184;},'ersMr':_0x46ac0d(0x58a),'MdLww':function(_0x1c6f62){return _0x13a3ad['vbSgf'](_0x1c6f62);},'WfZcz':function(_0xa83034,_0x1d3f7f,_0x1e1a10){return _0xa83034(_0x1d3f7f,_0x1e1a10);},'ZcuSI':_0x13a3ad[_0x46ac0d(0x477)],'MiuwI':_0x46ac0d(0x2fd)+_0x46ac0d(0x202)+'5','wIDaP':function(_0x6358ee){return _0x6358ee();},'GCiOp':'ReJfN','eGINg':function(_0x312fd5){var _0x5ab7cc=_0x46ac0d;return _0x13a3ad[_0x5ab7cc(0x32f)](_0x312fd5);},'ZBbge':'input','HRtGE':'color','dIzUn':function(_0x2b73b8,_0xb5b06b){return _0x13a3ad['opgiv'](_0x2b73b8,_0xb5b06b);},'nKBKj':function(_0x2a18b9){return _0x2a18b9();},'CdkUe':function(_0x8da149){return _0x13a3ad['vbSgf'](_0x8da149);},'FNuyX':function(_0x316d71){return _0x316d71();},'SDguB':function(_0x38538b){return _0x38538b();},'diGqf':function(_0xe28a12){return _0xe28a12();},'dtmxx':function(_0x3fd95f){var _0x2371e6=_0x46ac0d;return _0x13a3ad[_0x2371e6(0x51d)](_0x3fd95f);},'OiPxx':function(_0x45ed5a,_0x223312){return _0x45ed5a(_0x223312);},'RyTDU':function(_0x26bcd7,_0x2a7629){return _0x13a3ad['bwmTt'](_0x26bcd7,_0x2a7629);},'BLSsS':_0x13a3ad[_0x46ac0d(0x5a1)],'CjMrC':function(_0x580e8d){var _0xce7272=_0x46ac0d;return _0x13a3ad[_0xce7272(0x44d)](_0x580e8d);}};if(_0x575587===_0x13a3ad['UFooL'])return[_0x344e47(),_0x1abb31('God\x20M'+'ode',_0x13a3ad[_0x46ac0d(0x583)],_0x5e9d7e['god'],_0x3f3672=>{var _0x3c9c1b=_0x46ac0d;_0x5e9d7e[_0x3c9c1b(0x5a6)]=_0x3f3672,_0x456c35['IYfDj'](_0x24936c),_0x456495(_0x456c35['AaLec'],_0x3f3672),_0x456495(_0x3c9c1b(0x264)+'e',_0x3f3672);},[]),_0x13a3ad['kWSEP'](_0x1abb31,_0x46ac0d(0x1d8)+'coil',_0x46ac0d(0x47a)+_0x46ac0d(0x1c5)+_0x46ac0d(0x31b)+'ion.T'+_0x46ac0d(0x1e5)+'o\x20the'+_0x46ac0d(0x3f7)+_0x46ac0d(0x34d)+'rings'+_0x46ac0d(0x311)+'r\x20adv'+'ance.',_0x5e9d7e[_0x46ac0d(0x72d)+_0x46ac0d(0x261)],_0x532c2c=>{var _0x45deb2=_0x46ac0d,_0x541752={'hcvdp':function(_0x2da634,_0x106fa9){return _0x2da634/_0x106fa9;},'liiWG':function(_0x44ca15,_0x3ca664){var _0x281435=_0x238f;return _0x456c35[_0x281435(0x48a)](_0x44ca15,_0x3ca664);},'DIxmg':function(_0x14f949,_0x25976b){var _0x4216d6=_0x238f;return _0x456c35[_0x4216d6(0x570)](_0x14f949,_0x25976b);}};_0x456c35[_0x45deb2(0x5b3)]!=='itXNw'?(_0x1b3d07=_0x5531fb[_0x45deb2(0x3b5)](_0x541752['hcvdp'](_0x541752['liiWG'](_0x1d7a48,-0x661*0x1+0x4ef*-0x7+0x2cd2),_0x541752[_0x45deb2(0x664)](_0x42dc9f,_0x480847))),_0x293f29=0x2*0x829+0x21f8+0x9d*-0x52,_0x2a4148=_0x5219f9):(_0x5e9d7e['noRec'+_0x45deb2(0x261)]=_0x532c2c,_0x456c35['MdLww'](_0x24936c),_0x456c35['WfZcz'](_0x456495,_0x456c35['ZcuSI'],_0x532c2c));},[]),_0x13a3ad['kWSEP'](_0x1abb31,_0x46ac0d(0x4bd)+_0x46ac0d(0x4d2),_0x13a3ad['qkRQG'],_0x5e9d7e['noSpr'+'ead'],_0x4cc14f=>{var _0x448190=_0x46ac0d;_0x5e9d7e[_0x448190(0x32c)+_0x448190(0x37e)]=_0x4cc14f,_0x24936c();},[]),_0x1abb31(_0x13a3ad[_0x46ac0d(0x55a)],_0x13a3ad['iciYc'],_0x5e9d7e['rapid'+_0x46ac0d(0x362)],_0x3f7338=>{var _0x45a550=_0x46ac0d;if('ReJfN'===_0x456c35[_0x45a550(0x4dc)])_0x5e9d7e[_0x45a550(0x333)+'Exp']=_0x3f7338,_0x456c35[_0x45a550(0x1df)](_0x24936c);else{var _0x3d3009=_0x456c35[_0x45a550(0x474)][_0x45a550(0x273)]('|'),_0x169628=0x1*0x2482+0x1f2e+-0x43b0;while(!![]){switch(_0x3d3009[_0x169628++]){case'0':_0x2ad9c4[_0x45a550(0x352)+_0x45a550(0x3cc)+'e']=_0x289726;continue;case'1':_0x2bdd2d[_0x45a550(0x58c)+'od']=_0x1ea710;continue;case'2':_0x5d2182[_0x45a550(0x58c)+_0x45a550(0x5cf)]=_0x150c5b;continue;case'3':_0x456c35[_0x45a550(0x1df)](_0xe4786a);continue;case'4':_0x339a47['hookN'+'oReco'+'il']=_0x4b6296;continue;case'5':_0x30ec68[_0x45a550(0x344)+'d']();continue;}break;}}},[]),_0x1abb31(_0x13a3ad[_0x46ac0d(0x621)],_0x13a3ad[_0x46ac0d(0x275)],_0x5e9d7e[_0x46ac0d(0x463)+_0x46ac0d(0x5f2)],_0x1bc0c3=>{_0x5e9d7e['damag'+'eExp']=_0x1bc0c3,_0x456c35['eGINg'](_0x24936c);},[_0x13a3ad[_0x46ac0d(0x389)](_0x2802e1,_0x46ac0d(0x28a)+_0x46ac0d(0x1ed)+'ue',null,_0x2a61cb(_0x5e9d7e[_0x46ac0d(0x463)+'eValu'+'e'],0x223b+-0x375+0xe*-0x232,0x1f67+-0x7*-0xd6+-0x234d,0x1*-0x1615+0x65*-0xb+-0x1*-0x1a71,_0x398f6b=>{var _0x3cc776=_0x46ac0d,_0x18c903={'ONiZq':_0x456c35[_0x3cc776(0x27b)],'sXdfW':_0x456c35[_0x3cc776(0x70e)]};if(_0x456c35[_0x3cc776(0x6bb)]('tAFiG',_0x3cc776(0x551)))_0x5e9d7e[_0x3cc776(0x463)+_0x3cc776(0x5ab)+'e']=_0x398f6b,_0x456c35['nKBKj'](_0x24936c);else{var _0x2af87e=_0x2abe04['creat'+'eElem'+_0x3cc776(0x2c0)](_0x18c903[_0x3cc776(0x4e5)]);return _0x2af87e['type']=_0x18c903['sXdfW'],_0x2af87e[_0x3cc776(0x3a6)+'Name']=_0x3cc776(0x661)+'lor',_0x2af87e[_0x3cc776(0x266)]=/^#[0-9a-f]{6}$/i['test'](_0x40b2bb)?_0x5165f4:'#ff6b'+'9d',_0x2af87e['oninp'+'ut']=()=>_0x20816a(_0x2af87e['value']),_0x2af87e;}}))]),_0x13a3ad[_0x46ac0d(0x6c6)](_0x1abb31,_0x46ac0d(0x438)+_0x46ac0d(0x221)+'mmo\x20['+'EXP]',_0x46ac0d(0x3d5)+'ls\x20th'+_0x46ac0d(0x6d5)+'pon\x27s'+_0x46ac0d(0x39c)+_0x46ac0d(0x410)+_0x46ac0d(0x316)+_0x46ac0d(0x6e6)+_0x46ac0d(0x455)+_0x46ac0d(0x4f8)+'s.',_0x5e9d7e[_0x46ac0d(0x43f)+'moExp'],_0x27035a=>{var _0x120052=_0x46ac0d;_0x5e9d7e[_0x120052(0x43f)+_0x120052(0x497)]=_0x27035a,_0x24936c();},[_0x3757ea('If\x20re'+'loads'+_0x46ac0d(0x6bf)+'l\x20dra'+'in,\x20t'+_0x46ac0d(0x60a)+'creme'+_0x46ac0d(0x585)+_0x46ac0d(0x26b)+'\x20else'+_0x46ac0d(0x45a)+'.')])];if(_0x13a3ad['JReou'](_0x575587,_0x46ac0d(0x4ac))){if('Famcj'!==_0x13a3ad['yyxFz'])return[_0x13a3ad['kWSEP'](_0x1abb31,_0x13a3ad['NPDOD'],_0x46ac0d(0x5c1)+_0x46ac0d(0x5c6)+'\x20four'+_0x46ac0d(0x59c)+'ment\x20'+'speed'+_0x46ac0d(0x2f3)+'ts\x20pl'+_0x46ac0d(0x2be)+_0x46ac0d(0x520)+'ation'+'.',_0x5e9d7e[_0x46ac0d(0x47d)+_0x46ac0d(0x5b4)]!==0x170f*0x1+0x22ff+-0x2*0x1cd5,null,[_0x2802e1('Speed'+'\x20%',_0x13a3ad[_0x46ac0d(0x456)],_0x2a61cb(_0x5e9d7e[_0x46ac0d(0x47d)+'Pct'],-0x2003+0x129a+-0x1b*-0x81,0x4b*0x3+0x140*-0x1a+0x1*0x20cb,0xa85+-0x1f7c*0x1+0x14fc,_0x4e304f=>{var _0x4d7643=_0x46ac0d;_0x5e9d7e[_0x4d7643(0x47d)+_0x4d7643(0x5b4)]=_0x4e304f,_0x24936c();}))]),_0x1abb31(_0x46ac0d(0x214)+'/\x20Gra'+'vity',_0x46ac0d(0x5c1)+_0x46ac0d(0x4e9)+_0x46ac0d(0x4f7)+'.jump'+_0x46ac0d(0x231)+_0x46ac0d(0x605)+'both\x20'+'gravi'+'ty\x20va'+_0x46ac0d(0x6d2),_0x5e9d7e[_0x46ac0d(0x724)+'ct']!==-0x23b1+0xbf*0x33+-0x1f8||_0x5e9d7e[_0x46ac0d(0x353)+_0x46ac0d(0x57d)]!==0x1*-0x261a+0x185*0x19+-0x2b*-0x3,null,[_0x13a3ad[_0x46ac0d(0x389)](_0x2802e1,'Jump\x20'+'%',null,_0x2a61cb(_0x5e9d7e[_0x46ac0d(0x724)+'ct'],0x1001+-0x1efc+0x103*0xf,0x808*0x2+-0x2*-0x41c+-0xae*0x22,0x14b5+-0x1223*0x2+0xf96,_0x4f51a6=>{var _0x5864bc=_0x46ac0d;_0x5e9d7e[_0x5864bc(0x724)+'ct']=_0x4f51a6,_0x456c35[_0x5864bc(0x40c)](_0x24936c);})),_0x2802e1(_0x46ac0d(0x6dd)+'ty\x20%',_0x46ac0d(0x355)+_0x46ac0d(0x22a)+_0x46ac0d(0x21d),_0x2a61cb(_0x5e9d7e['gravi'+_0x46ac0d(0x57d)],-0x7f0+0x43*-0x4c+0x57*0x52,-0x1772+-0x40*0x13+0x1cfa,0x2b*-0xd+0x8d*0x22+-0x1086,_0x5d710c=>{var _0x2b6b8f=_0x46ac0d;_0x5e9d7e[_0x2b6b8f(0x353)+'tyPct']=_0x5d710c,_0x456c35[_0x2b6b8f(0x1df)](_0x24936c);}))]),_0x13a3ad[_0x46ac0d(0x6c6)](_0x1abb31,_0x13a3ad[_0x46ac0d(0x467)],_0x13a3ad[_0x46ac0d(0x55c)],_0x5e9d7e['bhop'],_0x4b82d8=>{_0x5e9d7e['bhop']=_0x4b82d8,_0x24936c();},[])];else try{_0x3ee950[_0x46ac0d(0x72c)]['appen'+_0x46ac0d(0x3de)+'d'](_0x1fa019);}catch(_0x41b70e){}}if(_0x575587===_0x13a3ad[_0x46ac0d(0x1eb)])return[_0x13a3ad[_0x46ac0d(0x6c6)](_0x1abb31,_0x13a3ad['XTpcZ'],_0x46ac0d(0x5bf)+_0x46ac0d(0x705)+_0x46ac0d(0x677)+_0x46ac0d(0x640)+_0x46ac0d(0x3e6)+'erlay'+'.',_0x5e9d7e['keyst'+'rokes'],_0x2b1949=>{var _0x57dddf=_0x46ac0d;_0x5e9d7e[_0x57dddf(0x529)+_0x57dddf(0x1c3)]=_0x2b1949,_0x456c35['nKBKj'](_0x24936c);},[_0x2802e1('Posit'+_0x46ac0d(0x42e),null,_0x13a3ad[_0x46ac0d(0x389)](_0x147f12,_0x5e9d7e[_0x46ac0d(0x56c)],[['bl',_0x13a3ad[_0x46ac0d(0x1bc)]],['br',_0x46ac0d(0x4a3)+_0x46ac0d(0x408)+'ht'],['ml',_0x13a3ad['MENoO']]],_0x264cdd=>{var _0x485f4f=_0x46ac0d;_0x5e9d7e[_0x485f4f(0x56c)]=_0x264cdd,_0x24936c();})),_0x13a3ad[_0x46ac0d(0x389)](_0x2802e1,_0x46ac0d(0x1d4),null,_0x13a3ad[_0x46ac0d(0x6c6)](_0x2a61cb,_0x5e9d7e[_0x46ac0d(0x21e)+'le'],0x5*-0x786+-0x8*0x69+0x6*0x6d1+0.6,0x92*0x2d+0x17ef*0x1+-0x8*0x633+0.6000000000000001,-0x5e*0x34+0x11aa*-0x1+0x24c2*0x1+0.05,_0x22d554=>{var _0xff60a6=_0x46ac0d;_0x5e9d7e['ksSca'+'le']=_0x22d554,_0x456c35[_0xff60a6(0x59e)](_0x24936c);})),_0x2802e1(_0x46ac0d(0x736)+_0x46ac0d(0x359)+'t',null,_0x13a3ad[_0x46ac0d(0x4de)](_0x5595b6,_0x5e9d7e['ksCps'],_0x2fac80=>{var _0x357641=_0x46ac0d;_0x5e9d7e[_0x357641(0x3ce)]=_0x2fac80,_0x456c35['SDguB'](_0x24936c);}))]),_0x1abb31(_0x13a3ad[_0x46ac0d(0x3da)],_0x13a3ad['bWCcz'],_0x5e9d7e['cross'+'hair'],_0x1277e6=>{var _0x52b18b=_0x46ac0d;_0x5e9d7e['cross'+'hair']=_0x1277e6,_0x550501[_0x52b18b(0x1c7)](_0x24936c);},[_0x13a3ad[_0x46ac0d(0x2b3)](_0x2802e1,_0x13a3ad[_0x46ac0d(0x306)],null,_0x2a61cb(_0x5e9d7e['chSiz'+'e'],-0x641*0x1+0x209a+-0x1a59+0.5,-0x41*0x8f+0x2*0xf1a+0x61d+0.5,-0x8e*0xd+0x1412+-0xcdc+0.1,_0x4a6dcb=>{var _0x4d019e=_0x46ac0d;if('FIwzu'!==_0x4d019e(0x3f5)){_0x21b17d['gameL'+'oaded']=!!_0x1ee2ba[_0x4d019e(0x2d9)+_0x4d019e(0x717)+_0x4d019e(0x6a0)];try{var _0x424f20=0xaf5+0x1da4+-0x223*0x13;for(var _0x405238 in _0x1d0d7f){if(_0x5deea3[_0x405238]&&_0x1b0de4[_0x405238]['appli'+'ed'])_0x424f20++;}_0x45c2a1['hooks'+'Ok']=_0x424f20;}catch(_0x114a51){}}else _0x5e9d7e[_0x4d019e(0x42d)+'e']=_0x4a6dcb,_0x456c35[_0x4d019e(0x457)](_0x24936c);})),_0x2802e1(_0x46ac0d(0x709),null,_0x54de8b(_0x5e9d7e[_0x46ac0d(0x2e0)+'or'],_0x5ba41b=>{var _0x1551f8=_0x46ac0d;_0x5e9d7e[_0x1551f8(0x2e0)+'or']=_0x5ba41b,_0x24936c();}))]),_0x13a3ad[_0x46ac0d(0x6c6)](_0x1abb31,_0x13a3ad['vgEna'],_0x13a3ad['zGGsq'],_0x5e9d7e['fps'],null,[_0x2802e1(_0x46ac0d(0x34c)+_0x46ac0d(0x43b)+'r',null,_0x5595b6(_0x5e9d7e[_0x46ac0d(0x20b)],_0x531303=>{var _0x451353=_0x46ac0d;_0x5e9d7e[_0x451353(0x20b)]=_0x531303,_0x550501['lfamN'](_0x24936c);})),_0x3757ea('No\x20en'+_0x46ac0d(0x4f6)+'ounte'+'r:\x20th'+_0x46ac0d(0x577)+'ild\x20h'+'as\x20no'+'\x20GetV'+_0x46ac0d(0x1d9)+_0x46ac0d(0x5a3)+_0x46ac0d(0x56f)+_0x46ac0d(0x22f)+'gybac'+'k\x20on.')])];if(_0x575587==='misc')return[_0x13a3ad[_0x46ac0d(0x6c6)](_0x1abb31,_0x13a3ad['wQzHg'],_0x46ac0d(0x35b)+'\x20kour'+_0x46ac0d(0x663)+_0x46ac0d(0x737)+_0x46ac0d(0x1bb)+_0x46ac0d(0x518),_0x5e9d7e[_0x46ac0d(0x409)+'ck'],_0x9bdd09=>{_0x5e9d7e['adblo'+'ck']=_0x9bdd09,_0x24936c();},[_0x3757ea('Takes'+'\x20effe'+'ct\x20on'+_0x46ac0d(0x35a)+_0x46ac0d(0x290)+_0x46ac0d(0x68d)+'ggled'+'.')])];return[_0x13a3ad[_0x46ac0d(0x6c6)](_0x1abb31,_0x46ac0d(0x1fb)+'Mode\x20'+_0x46ac0d(0x6ce)+_0x46ac0d(0x4ca)+'nly)',_0x13a3ad[_0x46ac0d(0x2bc)],_0x5e9d7e['safeM'+'ode'],_0x22eb2e=>{var _0x1ceca6=_0x46ac0d;_0x5e9d7e[_0x1ceca6(0x67c)+_0x1ceca6(0x2b8)]=_0x22eb2e,_0x456c35['eGINg'](_0x24936c),location[_0x1ceca6(0x344)+'d']();},[_0x3757ea(_0x13a3ad[_0x46ac0d(0x4d7)])]),_0x1abb31('Hook\x20'+_0x46ac0d(0x448)+'switc'+'hes',_0x13a3ad[_0x46ac0d(0x6f7)],_0x5e9d7e['hookG'+'od']||_0x5e9d7e[_0x46ac0d(0x58c)+'odDie']||_0x5e9d7e[_0x46ac0d(0x320)+_0x46ac0d(0x65b)+'il']||_0x5e9d7e['hookC'+_0x46ac0d(0x3cc)+'e'],_0x2bd362=>{var _0x6f3e95=_0x46ac0d;_0x5e9d7e[_0x6f3e95(0x58c)+'od']=_0x2bd362,_0x5e9d7e['hookG'+'odDie']=_0x2bd362,_0x5e9d7e[_0x6f3e95(0x320)+'oReco'+'il']=_0x2bd362,_0x5e9d7e['hookC'+'aptur'+'e']=_0x2bd362,_0x456c35[_0x6f3e95(0x459)](_0x24936c),location[_0x6f3e95(0x344)+'d']();},[_0x3757ea(_0x46ac0d(0x559)+_0x46ac0d(0x6a1)+'\x20relo'+_0x46ac0d(0x1cf)),_0x2802e1(_0x13a3ad['ndcvO'],null,_0x13a3ad['xOjrG'](_0x5595b6,_0x5e9d7e['hookG'+'od'],_0x5cf961=>{var _0x4cf19f=_0x46ac0d;_0x456c35['RyTDU'](_0x456c35[_0x4cf19f(0x4b4)],_0x4cf19f(0x23c))?_0x456c35['OiPxx'](_0x2b3a2f,!_0x3d9daa):(_0x5e9d7e['hookG'+'od']=_0x5cf961,_0x456c35[_0x4cf19f(0x459)](_0x24936c));})),_0x2802e1(_0x13a3ad[_0x46ac0d(0x6d3)],null,_0x5595b6(_0x5e9d7e['hookG'+'odDie'],_0x30f0be=>{var _0x5e2f9d=_0x46ac0d;_0x5e9d7e[_0x5e2f9d(0x58c)+'odDie']=_0x30f0be,_0x456c35['diGqf'](_0x24936c);})),_0x13a3ad[_0x46ac0d(0x1e8)](_0x2802e1,_0x13a3ad[_0x46ac0d(0x6a8)],null,_0x5595b6(_0x5e9d7e[_0x46ac0d(0x320)+_0x46ac0d(0x65b)+'il'],_0x515dfc=>{var _0x1cdf15=_0x46ac0d;_0x5e9d7e[_0x1cdf15(0x320)+_0x1cdf15(0x65b)+'il']=_0x515dfc,_0x456c35[_0x1cdf15(0x6ba)](_0x24936c);})),_0x2802e1(_0x13a3ad['vDBbx'],_0x13a3ad['OSXzT'],_0x5595b6(_0x5e9d7e[_0x46ac0d(0x352)+_0x46ac0d(0x3cc)+'e'],_0x5dbaac=>{var _0x1948ef=_0x46ac0d;_0x5e9d7e['hookC'+_0x1948ef(0x3cc)+'e']=_0x5dbaac,_0x24936c();}))]),_0x13a3ad[_0x46ac0d(0x6c6)](_0x1abb31,_0x46ac0d(0x337)+'Kille'+'r',_0x13a3ad[_0x46ac0d(0x366)],_0x5e9d7e[_0x46ac0d(0x2bb)+'ill'],_0x422de0=>{var _0x2a0ed7=_0x46ac0d;_0x5e9d7e[_0x2a0ed7(0x2bb)+'ill']=_0x422de0,_0x24936c();},[_0x3757ea(_0x46ac0d(0x49f)+'amage'+_0x46ac0d(0x542)+_0x46ac0d(0x3fa)+_0x46ac0d(0x596)+_0x46ac0d(0x4ad)+_0x46ac0d(0x679)+_0x46ac0d(0x448)+'even\x20'+_0x46ac0d(0x5c7)+_0x46ac0d(0x556)+'on.',!![])]),_0x1abb31(_0x46ac0d(0x47c)+'r',_0x13a3ad[_0x46ac0d(0x503)],!![],null,[_0x13a3ad[_0x46ac0d(0x6f6)](_0x2802e1,_0x46ac0d(0x6d7)+_0x46ac0d(0x3eb)+_0x46ac0d(0x5bd)+'s',null,_0x13a3ad[_0x46ac0d(0x604)](_0xa11b22,_0x46ac0d(0x44c),()=>{_0x5e9d7e={..._0x28decd},_0x550501['lfamN'](_0x24936c),location['reloa'+'d']();}))])];}var _0x37629c=null;function _0x34ec32(_0xca1d0b){var _0x2a0a2b=_0x55a7b0,_0x3a8358={'PeEjQ':function(_0xfd4ef0){return _0xfd4ef0();}};if(_0x2a0a2b(0x33f)==='QBKTG'){_0x13a7f6=_0xca1d0b;if(!_0x37629c){var _0x4a04b1=document[_0x2a0a2b(0x406)+_0x2a0a2b(0x532)+'ent'](_0x2a0a2b(0x317));_0x4a04b1[_0x2a0a2b(0x5ef)+_0x2a0a2b(0x5f3)+'t']=_0x9a765e,_0x385812[_0x2a0a2b(0x22e)+_0x2a0a2b(0x3de)+'d'](_0x4a04b1),_0x37629c=_0x8227f3(),_0x385812['appen'+'dChil'+'d'](_0x37629c),requestAnimationFrame(()=>_0x37629c['class'+'List'][_0x2a0a2b(0x223)](_0x2a0a2b(0x4d8)));}_0x37629c[_0x2a0a2b(0x3a6)+'List'][_0x2a0a2b(0x2fc)+'e'](_0x13a3ad[_0x2a0a2b(0x1c8)],_0xca1d0b);}else _0x225bfc[_0x2a0a2b(0x529)+_0x2a0a2b(0x1c3)]=_0x5bd08c,_0x3a8358['PeEjQ'](_0x1c6e2e);}function _0x4cc252(){var _0x59ba5e=_0x55a7b0;_0x550501[_0x59ba5e(0x288)](_0x34ec32,!_0x13a7f6);}function _0x8227f3(){var _0x403c1d=_0x55a7b0,_0x23355f={'zZWcK':function(_0x48c349,_0x20b439){return _0x550501['yzOXJ'](_0x48c349,_0x20b439);},'kPbFk':function(_0x2493f5,_0x425496,_0x497b85){return _0x2493f5(_0x425496,_0x497b85);},'skRFT':'god','KEVvm':_0x403c1d(0x264)+'e','VAZLl':_0x550501['DnZoj'],'MSATc':function(_0x4ebddd,_0x5acafb){return _0x4ebddd===_0x5acafb;},'xOGMv':'SAFE','slQgK':function(_0x457975,_0x3d6957){return _0x457975+_0x3d6957;},'syEzj':function(_0x28a507,_0x566352){return _0x28a507+_0x566352;},'kXfcU':_0x403c1d(0x5b9)+_0x403c1d(0x5d0)+_0x403c1d(0x1b8)+_0x403c1d(0x42a)+'ff)','IKHgH':'held','zAMTX':_0x403c1d(0x4ae),'XbxPA':function(_0x131b57,_0xeb3ac3){return _0x550501['ADlrf'](_0x131b57,_0xeb3ac3);}},_0xf977f4=document[_0x403c1d(0x406)+'eElem'+_0x403c1d(0x2c0)](_0x550501['KHQgx']);_0xf977f4[_0x403c1d(0x3a6)+_0x403c1d(0x204)]=_0x550501[_0x403c1d(0x5d7)];var _0x4f7247=document['creat'+_0x403c1d(0x532)+'ent']('nav');_0x4f7247['class'+_0x403c1d(0x204)]=_0x550501['ZWmoh'];var _0x124c60=document['creat'+_0x403c1d(0x532)+'ent'](_0x403c1d(0x483));_0x124c60[_0x403c1d(0x3a6)+'Name']=_0x550501['oMRwd'],_0x124c60[_0x403c1d(0x307)+_0x403c1d(0x20f)]=_0x403c1d(0x3bd)+'viewB'+_0x403c1d(0x703)+'\x200\x2024'+_0x403c1d(0x4b2)+_0x403c1d(0x3a6)+_0x403c1d(0x5e8)+_0x403c1d(0x2f8)+_0x403c1d(0x578)+_0x403c1d(0x6bd)+_0x403c1d(0x1da)+_0x403c1d(0x56b)+_0x403c1d(0x377)+'-2.5-'+_0x403c1d(0x681)+'-4-7.'+'5\x200-2'+_0x403c1d(0x4f3)+_0x403c1d(0x591)+'\x204-4.'+_0x403c1d(0x41d)+_0x403c1d(0x697)+'5c0\x203'+_0x403c1d(0x3b8)+_0x403c1d(0x3e8)+_0x403c1d(0x30f)+_0x403c1d(0x2bd)+_0x403c1d(0x73a)+'\x22\x20str'+_0x403c1d(0x4cc)+'#ff6b'+'9d\x22\x20s'+'troke'+_0x403c1d(0x1e2)+_0x403c1d(0x412)+'\x20stro'+_0x403c1d(0x29b)+'necap'+_0x403c1d(0x282)+'nd\x22\x20s'+_0x403c1d(0x3f3)+_0x403c1d(0x552)+'join='+_0x403c1d(0x5db)+'d\x22/><'+'circl'+_0x403c1d(0x485)+'\x2212\x22\x20'+_0x403c1d(0x443)+'0\x22\x20r='+_0x403c1d(0x1c6)+_0x403c1d(0x6cd)+_0x403c1d(0x3c6)+'6b9d\x22'+_0x403c1d(0x395)+'vg>',_0x4f7247['appen'+_0x403c1d(0x3de)+'d'](_0x124c60);var _0x130db7=document[_0x403c1d(0x406)+_0x403c1d(0x532)+'ent'](_0x550501[_0x403c1d(0x229)]);_0x130db7[_0x403c1d(0x3a6)+'Name']=_0x550501[_0x403c1d(0x6fa)];var _0x20f347=document[_0x403c1d(0x406)+_0x403c1d(0x532)+_0x403c1d(0x2c0)]('heade'+'r');_0x20f347[_0x403c1d(0x3a6)+_0x403c1d(0x204)]=_0x403c1d(0x62b)+'p';var _0xcd784e=document[_0x403c1d(0x406)+_0x403c1d(0x532)+_0x403c1d(0x2c0)](_0x403c1d(0x483));_0xcd784e['class'+_0x403c1d(0x204)]=_0x403c1d(0x6f3)+_0x403c1d(0x2d0);var _0x2b9f94=document['creat'+_0x403c1d(0x532)+'ent']('h2');_0x2b9f94['class'+_0x403c1d(0x204)]='mn-h',_0x2b9f94[_0x403c1d(0x5ef)+_0x403c1d(0x5f3)+'t']=_0x403c1d(0x68b)+_0x403c1d(0x68c)+'r';var _0x508402=document[_0x403c1d(0x406)+_0x403c1d(0x532)+'ent'](_0x550501['lftfo']);_0x508402['class'+'Name']='mn-su'+'b',_0x508402[_0x403c1d(0x5ef)+_0x403c1d(0x5f3)+'t']='kours'+_0x403c1d(0x45f)+_0x403c1d(0x66e)+_0x403c1d(0x70a),_0xcd784e['appen'+'d'](_0x2b9f94,_0x508402);var _0x648825=document['creat'+'eElem'+_0x403c1d(0x2c0)](_0x550501[_0x403c1d(0x64b)]);_0x648825[_0x403c1d(0x23b)]='butto'+'n',_0x648825[_0x403c1d(0x3a6)+'Name']=_0x550501['RUQqc'],_0x648825[_0x403c1d(0x3c9)]=_0x550501[_0x403c1d(0x1fd)],_0x648825['inner'+_0x403c1d(0x20f)]=_0x550501[_0x403c1d(0x45e)],_0x648825[_0x403c1d(0x69a)+'ck']=()=>_0x34ec32(![]),_0x20f347[_0x403c1d(0x22e)+'d'](_0xcd784e,_0x648825);var _0x179d1a=document['creat'+'eElem'+_0x403c1d(0x2c0)]('div');_0x179d1a[_0x403c1d(0x3a6)+_0x403c1d(0x204)]=_0x550501['sCXcT'],_0x130db7['appen'+'d'](_0x20f347,_0x179d1a),_0xf977f4['appen'+'d'](_0x4f7247,_0x130db7);var _0x1a32d9=new Map();for(var _0x39612f of _0x2d7b1e){if(_0x550501[_0x403c1d(0x701)](_0x550501['dCHMQ'],_0x550501[_0x403c1d(0x633)])){var _0x5b155=document['creat'+'eElem'+'ent'](_0x403c1d(0x6e3)+'n');_0x5b155[_0x403c1d(0x23b)]=_0x403c1d(0x6e3)+'n',_0x5b155[_0x403c1d(0x3a6)+'Name']=_0x403c1d(0x704)+'b',_0x5b155['title']=_0x39612f['label'],_0x5b155[_0x403c1d(0x307)+'HTML']=_0x550501[_0x403c1d(0x21f)](_0x403c1d(0x5ec)+'l>'+_0x39612f['label'],_0x403c1d(0x710)+_0x403c1d(0x392)),_0x5b155['oncli'+'ck']=(_0x5b5ba5=>()=>_0x44f51a(_0x5b5ba5))(_0x39612f['id']),_0x1a32d9[_0x403c1d(0x706)](_0x39612f['id'],_0x5b155),_0x4f7247[_0x403c1d(0x22e)+_0x403c1d(0x3de)+'d'](_0x5b155);}else _0x501c52[_0x403c1d(0x5ef)+'onten'+'t']=_0x16eefb(_0x2ba374['value']),_0x56d1b3[_0x403c1d(0x317)]['setPr'+_0x403c1d(0x5c2)+'y'](_0x403c1d(0x360),_0x23355f['zZWcK']((_0x12b7e2[_0x403c1d(0x266)]-_0x3240a9)/(_0x3d88fe-_0x9b88a9),-0x9d1*0x1+-0x1*0xe1c+0x1851)+'%');}function _0x44f51a(_0x130e13){var _0x31907d=_0x403c1d;_0xe97cb9[_0x31907d(0x540)]=_0x130e13,_0x550501[_0x31907d(0x1c7)](_0x4f8191);var _0x3a7ee8=_0x2d7b1e['find'](_0x1dc81e=>_0x1dc81e['id']===_0x130e13)||_0x2d7b1e[-0x6*-0x1c6+0x4b*-0x14+0x48*-0x11];_0x2b9f94['textC'+'onten'+'t']=_0x31907d(0x68b)+'a\x20Kou'+'r\x20—\x20'+_0x3a7ee8[_0x31907d(0x367)];for(var [_0x2d8fa9,_0x571736]of _0x1a32d9)_0x571736['class'+'List']['toggl'+'e'](_0x550501[_0x31907d(0x2a3)],_0x550501[_0x31907d(0x512)](_0x2d8fa9,_0x130e13));_0x179d1a[_0x31907d(0x62f)+'ceChi'+'ldren'](..._0x550501[_0x31907d(0x614)](_0x2704e6,_0x130e13));}return _0x550501['eERNe'](_0x44f51a,_0xe97cb9[_0x403c1d(0x540)]||_0x550501[_0x403c1d(0x699)]),_0x550501['qebTH'](setInterval,()=>{var _0x3efcef=_0x403c1d;if(_0x23355f[_0x3efcef(0x292)]==='iWKOz')_0x5470a0['god']=_0x4f32f7,_0x14bf9d(),_0x23355f['kPbFk'](_0x4f2467,_0x23355f['skRFT'],_0x17a2cd),_0x3dd83c(_0x23355f['KEVvm'],_0x2b2a29);else{if(!_0x13a7f6)return;var _0x228780=_0x179d1a['child'+_0x3efcef(0x509)];for(var _0x392f56=0x1*0x2595+-0x4a9*0x5+-0xe48;_0x392f56<_0x228780['lengt'+'h'];_0x392f56++){var _0x157e8f=_0x228780[_0x392f56][_0x3efcef(0x6b7)+_0x3efcef(0x1cb)+'tor']('.sk-m'+_0x3efcef(0x239));_0x157e8f&&(_0x23355f[_0x3efcef(0x648)](_0x157e8f['textC'+_0x3efcef(0x5f3)+'t']['index'+'Of'](_0x3efcef(0x247)),0x5*-0x24b+-0x25*-0xb6+-0xed7)||_0x157e8f[_0x3efcef(0x5ef)+'onten'+'t'][_0x3efcef(0x24b)+'Of'](_0x23355f[_0x3efcef(0x2e8)])===-0x1e4f*-0x1+0xdb0+0x649*-0x7)&&(_0x157e8f['textC'+_0x3efcef(0x5f3)+'t']=_0x42c33f['safeM'+'ode']?_0x3efcef(0x481)+_0x3efcef(0x2b5)+_0x3efcef(0x569)+_0x3efcef(0x1f8)+'only,'+_0x3efcef(0x581)+_0x3efcef(0x28f)+'(relo'+_0x3efcef(0x5aa)+_0x3efcef(0x3ae)+')':_0x42c33f[_0x3efcef(0x47e)]?_0x23355f['slQgK'](_0x23355f[_0x3efcef(0x2e2)](_0x23355f[_0x3efcef(0x29f)](_0x3efcef(0x5df)+'bound'+'\x20'+(_0x42c33f['hooks'+'Total']?_0x42c33f['hooks'+'Ok']+'/'+_0x42c33f[_0x3efcef(0x731)+_0x3efcef(0x2ba)]+(_0x3efcef(0x5ee)+'s'):_0x23355f[_0x3efcef(0x6a4)])+('\x20|\x20ga'+'me\x20'),_0x42c33f[_0x3efcef(0x55b)+_0x3efcef(0x67f)]?'loade'+'d':_0x3efcef(0x38d)+'ng'),'\x20|\x20sh'+'ooter'+'\x20')+(_0x42c33f[_0x3efcef(0x464)+'ers']?_0x23355f[_0x3efcef(0x45b)]:_0x23355f[_0x3efcef(0x5e3)])+(_0x3efcef(0x57b)+_0x3efcef(0x489)+'t\x20')+(_0x42c33f['movem'+_0x3efcef(0x72e)]?_0x3efcef(0x2c6):_0x23355f[_0x3efcef(0x5e3)]),_0x42c33f[_0x3efcef(0x6b3)+_0x3efcef(0x2a9)]?_0x23355f['XbxPA'](_0x3efcef(0x6ca)+_0x3efcef(0x586),_0x42c33f[_0x3efcef(0x6b3)+_0x3efcef(0x2a9)]):''):_0x3efcef(0x5df)+_0x3efcef(0x3e5)+'NG\x20-\x20'+_0x3efcef(0x2a5)+'ay\x20on'+_0x3efcef(0x427)+'einst'+_0x3efcef(0x1c0)+'he\x20us'+'erscr'+'ipt)');}}},-0xd66+-0x1f16+-0x146*-0x26),_0xf977f4;}var _0x9a765e='\x0a\x20\x20\x20\x20'+_0x55a7b0(0x3a9)+'\x20{\x20al'+_0x55a7b0(0x534)+_0x55a7b0(0x49b)+';\x20}\x0a\x20'+'\x20\x20\x20*\x20'+_0x55a7b0(0x67b)+_0x55a7b0(0x57f)+_0x55a7b0(0x3d7)+_0x55a7b0(0x4d9)+_0x55a7b0(0x723)+'\x20marg'+_0x55a7b0(0x56e)+';\x20fon'+_0x55a7b0(0x4f9)+_0x55a7b0(0x735)+'\x22Inte'+'r\x22,\x20\x22'+_0x55a7b0(0x28c)+_0x55a7b0(0x36a)+_0x55a7b0(0x6cf)+_0x55a7b0(0x6f0)+_0x55a7b0(0x1d7)+'s-ser'+_0x55a7b0(0x210)+'\x0a\x20\x20\x20\x20'+_0x55a7b0(0x3e4)+_0x55a7b0(0x4c0)+_0x55a7b0(0x4a6)+'ition'+':\x20abs'+_0x55a7b0(0x59d)+';\x20rig'+_0x55a7b0(0x43e)+_0x55a7b0(0x293)+_0x55a7b0(0x48f)+'m:\x2024'+_0x55a7b0(0x4b8)+'idth:'+_0x55a7b0(0x5fd)+_0x55a7b0(0x567)+',\x20cal'+'c(100'+_0x55a7b0(0x3ff)+_0x55a7b0(0x5bc)+_0x55a7b0(0x2c1)+_0x55a7b0(0x6b1)+_0x55a7b0(0x310)+'min(4'+_0x55a7b0(0x314)+'\x20calc'+'(100v'+'h\x20-\x204'+_0x55a7b0(0x2a4)+';\x0a\x20\x20\x20'+'\x20\x20\x20di'+_0x55a7b0(0x58b)+_0x55a7b0(0x2ea)+_0x55a7b0(0x531)+'p:\x2010'+'px;\x20p'+_0x55a7b0(0x62d)+_0x55a7b0(0x4b7)+_0x55a7b0(0x5b1)+'order'+_0x55a7b0(0x693)+_0x55a7b0(0x368)+'2px;\x20'+_0x55a7b0(0x300)+_0x55a7b0(0x219)+'ents:'+_0x55a7b0(0x594)+_0x55a7b0(0x3ab)+'\x20\x20\x20ba'+_0x55a7b0(0x5ba)+'und:\x20'+_0x55a7b0(0x6a3)+'24,17'+_0x55a7b0(0x517)+_0x55a7b0(0x3ef)+_0x55a7b0(0x376)+_0x55a7b0(0x1dd)+_0x55a7b0(0x34e)+':\x20blu'+'r(22p'+'x)\x20sa'+'turat'+'e(150'+_0x55a7b0(0x274)+_0x55a7b0(0x73c)+'t-bac'+_0x55a7b0(0x610)+'-filt'+_0x55a7b0(0x469)+_0x55a7b0(0x5f8)+'2px)\x20'+'satur'+_0x55a7b0(0x283)+_0x55a7b0(0x20c)+'\x0a\x20\x20\x20\x20'+_0x55a7b0(0x212)+'-shad'+'ow:\x200'+_0x55a7b0(0x3c1)+'1px\x20r'+_0x55a7b0(0x6dc)+_0x55a7b0(0x303)+_0x55a7b0(0x32d)+_0x55a7b0(0x31a)+',\x20ins'+_0x55a7b0(0x545)+'1px\x200'+'\x20rgba'+_0x55a7b0(0x685)+'255,2'+_0x55a7b0(0x64c)+_0x55a7b0(0x615)+'\x2030px'+_0x55a7b0(0x225)+_0x55a7b0(0x3cf)+_0x55a7b0(0x4c2)+_0x55a7b0(0x26d)+_0x55a7b0(0x6e4)+_0x55a7b0(0x3c8)+_0x55a7b0(0x2e1)+_0x55a7b0(0x2c8)+_0x55a7b0(0x436)+_0x55a7b0(0x504)+':\x20tra'+_0x55a7b0(0x3be)+'eY(18'+'px);\x20'+_0x55a7b0(0x300)+_0x55a7b0(0x219)+_0x55a7b0(0x4fe)+_0x55a7b0(0x1f4)+_0x55a7b0(0x249)+_0x55a7b0(0x34b)+_0x55a7b0(0x394)+_0x55a7b0(0x2e1)+'y\x20.35'+'s\x20eas'+'e,\x20tr'+'ansfo'+'rm\x20.4'+'5s\x20cu'+_0x55a7b0(0x6a6)+_0x55a7b0(0x4c9)+_0x55a7b0(0x1bd)+_0x55a7b0(0x5d5)+',1);\x0a'+'\x20\x20\x20\x20\x20'+'\x20colo'+_0x55a7b0(0x4bc)+_0x55a7b0(0x3ba)+';\x20fon'+'t-siz'+'e:\x2013'+'px;\x20}'+'\x0a\x20\x20\x20\x20'+_0x55a7b0(0x3e4)+'anel.'+'shown'+_0x55a7b0(0x500)+_0x55a7b0(0x734)+_0x55a7b0(0x260)+_0x55a7b0(0x301)+_0x55a7b0(0x272)+'\x20none'+_0x55a7b0(0x6ff)+_0x55a7b0(0x446)+_0x55a7b0(0x653)+'s:\x20au'+_0x55a7b0(0x4f1)+_0x55a7b0(0x2df)+_0x55a7b0(0x265)+_0x55a7b0(0x245)+'\x20disp'+_0x55a7b0(0x4df)+'flex;'+'\x20flex'+_0x55a7b0(0x5f0)+'ction'+_0x55a7b0(0x486)+_0x55a7b0(0x64a)+_0x55a7b0(0x2ec)+_0x55a7b0(0x603)+_0x55a7b0(0x471)+_0x55a7b0(0x6c0)+'\x20gap:'+'\x204px;'+_0x55a7b0(0x374)+'h:\x2062'+_0x55a7b0(0x1e0)+'lex:\x20'+_0x55a7b0(0x200)+_0x55a7b0(0x2aa)+'ing:\x20'+_0x55a7b0(0x6a2)+(_0x55a7b0(0x708)+_0x55a7b0(0x370)+'radiu'+_0x55a7b0(0x612)+'px;\x0a\x20'+_0x55a7b0(0x402)+'backg'+'round'+_0x55a7b0(0x23e)+_0x55a7b0(0x54c)+_0x55a7b0(0x71b)+'255,.'+'025);'+_0x55a7b0(0x4ff)+_0x55a7b0(0x5af)+_0x55a7b0(0x20a)+_0x55a7b0(0x41f)+'\x200\x200\x20'+'1px\x20r'+'gba(2'+'55,25'+'5,255'+',.05)'+';\x20}\x0a\x20'+'\x20\x20\x20.m'+_0x55a7b0(0x50a)+'o\x20{\x20d'+'ispla'+_0x55a7b0(0x34f)+_0x55a7b0(0x27a)+_0x55a7b0(0x595)+'items'+_0x55a7b0(0x33c)+_0x55a7b0(0x608)+'width'+_0x55a7b0(0x44f)+_0x55a7b0(0x3fe)+'ight:'+'\x2032px'+_0x55a7b0(0x328)+'\x20\x20\x20.m'+_0x55a7b0(0x50a)+_0x55a7b0(0x6ee)+_0x55a7b0(0x257)+'dth:\x20'+'25px;'+_0x55a7b0(0x472)+'ht:\x202'+'5px;\x20'+'overf'+_0x55a7b0(0x1d6)+_0x55a7b0(0x61c)+_0x55a7b0(0x24c)+_0x55a7b0(0x34e)+_0x55a7b0(0x63b)+'p-sha'+'dow(0'+_0x55a7b0(0x524)+_0x55a7b0(0x43a)+'a(255'+',107,'+_0x55a7b0(0x2a8)+_0x55a7b0(0x3ac)+'}\x0a\x20\x20\x20'+_0x55a7b0(0x3d0)+_0x55a7b0(0x647)+_0x55a7b0(0x215)+_0x55a7b0(0x4df)+_0x55a7b0(0x50f)+_0x55a7b0(0x548)+_0x55a7b0(0x6ad)+_0x55a7b0(0x4ea)+'enter'+_0x55a7b0(0x5ce)+_0x55a7b0(0x356)+_0x55a7b0(0x1d1)+'nt:\x20c'+_0x55a7b0(0x2b9)+';\x20wid'+_0x55a7b0(0x207)+_0x55a7b0(0x668)+_0x55a7b0(0x47f)+'t:\x2034'+_0x55a7b0(0x5b1)+_0x55a7b0(0x4d9)+_0x55a7b0(0x2d6)+_0x55a7b0(0x4ab)+_0x55a7b0(0x3cd)+'ius:\x20'+_0x55a7b0(0x38f)+'\x0a\x20\x20\x20\x20'+'\x20\x20bac'+'kgrou'+'nd:\x20t'+_0x55a7b0(0x49a)+_0x55a7b0(0x4da)+_0x55a7b0(0x226)+_0x55a7b0(0x434)+'gba(2'+_0x55a7b0(0x69c)+_0x55a7b0(0x2d2)+_0x55a7b0(0x403)+_0x55a7b0(0x651)+'or:\x20p'+_0x55a7b0(0x330)+'r;\x20fo'+'nt-si'+_0x55a7b0(0x574)+_0x55a7b0(0x40a)+'font-'+'weigh'+_0x55a7b0(0x557)+_0x55a7b0(0x2d8)+'\x20\x20\x20\x20.'+_0x55a7b0(0x704)+_0x55a7b0(0x36c)+_0x55a7b0(0x217)+_0x55a7b0(0x4e1)+_0x55a7b0(0x23e)+'a(246'+_0x55a7b0(0x385)+_0x55a7b0(0x541)+_0x55a7b0(0x506)+_0x55a7b0(0x2df)+_0x55a7b0(0x68a)+'ab.ac'+_0x55a7b0(0x418)+_0x55a7b0(0x6d8)+'or:\x20#'+'ff6b9'+_0x55a7b0(0x313)+_0x55a7b0(0x5ba)+'und:\x20'+'rgba('+_0x55a7b0(0x1f6)+_0x55a7b0(0x51c)+_0x55a7b0(0x628)+_0x55a7b0(0x328)+_0x55a7b0(0x2fe)+_0x55a7b0(0x3bb)+'n\x20{\x20f'+_0x55a7b0(0x386)+'1;\x20mi'+'n-wid'+_0x55a7b0(0x3ed)+';\x20dis'+_0x55a7b0(0x216)+_0x55a7b0(0x2a1)+_0x55a7b0(0x63a)+_0x55a7b0(0x48c)+_0x55a7b0(0x6b2)+_0x55a7b0(0x6cc)+'lumn;'+_0x55a7b0(0x250)+'\x20\x20.mn'+_0x55a7b0(0x6cb)+_0x55a7b0(0x405)+_0x55a7b0(0x216)+_0x55a7b0(0x2a1)+';\x20ali'+_0x55a7b0(0x6b5)+_0x55a7b0(0x5e4)+_0x55a7b0(0x232)+'r;\x20ga'+_0x55a7b0(0x53d)+'px;\x20p'+_0x55a7b0(0x62d)+_0x55a7b0(0x3e7)+'x\x206px'+_0x55a7b0(0x379)+_0x55a7b0(0x6e8)+'r-sel'+'ect:\x20'+_0x55a7b0(0x200)+'\x20}\x0a\x20\x20'+_0x55a7b0(0x571)+_0x55a7b0(0x4ec)+'es\x20{\x20'+_0x55a7b0(0x37b)+_0x55a7b0(0x631)+'in-wi'+'dth:\x20'+_0x55a7b0(0x2d8)+_0x55a7b0(0x4b1)+'mn-h\x20'+_0x55a7b0(0x575)+_0x55a7b0(0x361)+_0x55a7b0(0x66c)+_0x55a7b0(0x1e0)+_0x55a7b0(0x461)+_0x55a7b0(0x27d)+_0x55a7b0(0x4a1)+';\x20}\x0a\x20'+_0x55a7b0(0x2fe)+'n-sub'+_0x55a7b0(0x3ad)+_0x55a7b0(0x46e)+'ze:\x201'+_0x55a7b0(0x39b)+_0x55a7b0(0x728))+(_0x55a7b0(0x2c5)+_0x55a7b0(0x5a0)+'\x20\x20\x20\x20.'+'mn-cl'+'ose\x20{'+_0x55a7b0(0x215)+_0x55a7b0(0x4df)+'grid;'+_0x55a7b0(0x400)+'e-ite'+'ms:\x20c'+_0x55a7b0(0x2b9)+';\x20wid'+_0x55a7b0(0x63f)+_0x55a7b0(0x2b1)+_0x55a7b0(0x47f)+_0x55a7b0(0x38b)+'px;\x20b'+_0x55a7b0(0x4d9)+_0x55a7b0(0x2d6)+'borde'+_0x55a7b0(0x3cd)+_0x55a7b0(0x690)+_0x55a7b0(0x2b1)+_0x55a7b0(0x1ff)+_0x55a7b0(0x3b5)+_0x55a7b0(0x30b)+'nspar'+_0x55a7b0(0x3e1)+_0x55a7b0(0x4e1)+':\x20inh'+_0x55a7b0(0x390)+_0x55a7b0(0x1ba)+'ity:\x20'+_0x55a7b0(0x2fa)+_0x55a7b0(0x479)+'r:\x20po'+_0x55a7b0(0x4ef)+_0x55a7b0(0x328)+_0x55a7b0(0x2fe)+'n-clo'+'se:ho'+'ver\x20{'+_0x55a7b0(0x1ba)+'ity:\x20'+'1;\x20ba'+'ckgro'+_0x55a7b0(0x53b)+_0x55a7b0(0x6a3)+'255,2'+_0x55a7b0(0x303)+_0x55a7b0(0x287)+_0x55a7b0(0x336)+_0x55a7b0(0x4b1)+'mn-cl'+'ose\x20s'+'vg\x20{\x20'+'width'+_0x55a7b0(0x561)+'x;\x20he'+'ight:'+_0x55a7b0(0x5a8)+_0x55a7b0(0x71f)+'l:\x20no'+_0x55a7b0(0x2dd)+_0x55a7b0(0x3f3)+':\x20cur'+_0x55a7b0(0x419)+'olor;'+'\x20stro'+_0x55a7b0(0x4e7)+_0x55a7b0(0x53a)+'2;\x20st'+'roke-'+_0x55a7b0(0x244)+_0x55a7b0(0x639)+'ound;'+'\x20}\x0a\x20\x20'+_0x55a7b0(0x571)+'-cols'+'\x20{\x20fl'+'ex:\x201'+_0x55a7b0(0x29c)+_0x55a7b0(0x40e)+'ht:\x200'+';\x20ove'+'rflow'+'-y:\x20a'+_0x55a7b0(0x5d2)+'displ'+_0x55a7b0(0x54e)+_0x55a7b0(0x51b)+_0x55a7b0(0x24a)+'templ'+_0x55a7b0(0x319)+'olumn'+'s:\x20re'+_0x55a7b0(0x63e)+'auto-'+_0x55a7b0(0x3d9)+'\x20minm'+_0x55a7b0(0x5dd)+'0px,\x20'+'1fr))'+_0x55a7b0(0x393)+_0x55a7b0(0x6b5)+'ems:\x20'+_0x55a7b0(0x5d8)+_0x55a7b0(0x393)+_0x55a7b0(0x66f)+_0x55a7b0(0x4c4)+':\x20sta'+'rt;\x20g'+'ap:\x201'+_0x55a7b0(0x40a)+_0x55a7b0(0x5d9)+_0x55a7b0(0x458)+_0x55a7b0(0x3a7)+_0x55a7b0(0x4c3)+_0x55a7b0(0x328)+'\x20\x20\x20.m'+_0x55a7b0(0x3e9)+'s::-w'+'ebkit'+'-scro'+_0x55a7b0(0x414)+'\x20{\x20wi'+_0x55a7b0(0x53a)+_0x55a7b0(0x2b1)+_0x55a7b0(0x1b9)+'\x20.mn-'+_0x55a7b0(0x683)+_0x55a7b0(0x44a)+_0x55a7b0(0x688)+_0x55a7b0(0x638)+'bar-t'+'humb\x20'+_0x55a7b0(0x407)+_0x55a7b0(0x284)+'nd:\x20r'+_0x55a7b0(0x6dc)+'55,25'+_0x55a7b0(0x32d)+_0x55a7b0(0x2ca)+_0x55a7b0(0x4ba)+_0x55a7b0(0x6d0)+'adius'+':\x204px'+_0x55a7b0(0x328)+_0x55a7b0(0x3a5)+_0x55a7b0(0x711)+_0x55a7b0(0x6d6)+'order'+_0x55a7b0(0x693)+'us:\x201'+'2px;\x20'+_0x55a7b0(0x1ff)+_0x55a7b0(0x3b5)+_0x55a7b0(0x23e)+'a(255'+',255,'+'255,.'+_0x55a7b0(0x4cb)+_0x55a7b0(0x4ff)+'shado'+'w:\x20in'+_0x55a7b0(0x41f)+'\x200\x200\x20'+_0x55a7b0(0x62a)+'gba(2'+_0x55a7b0(0x303)+_0x55a7b0(0x32d)+_0x55a7b0(0x48e)+_0x55a7b0(0x328)+_0x55a7b0(0x3a5)+_0x55a7b0(0x711)+'d.on\x20'+_0x55a7b0(0x407)+_0x55a7b0(0x284)+_0x55a7b0(0x6c2)+_0x55a7b0(0x6dc)+_0x55a7b0(0x303)+_0x55a7b0(0x32d)+',.04)'+_0x55a7b0(0x5f1)+_0x55a7b0(0x707)+'ow:\x20i'+_0x55a7b0(0x36b)+'0\x200\x200'+'\x201px\x20'+_0x55a7b0(0x6a3)+'255,1'+_0x55a7b0(0x51c)+_0x55a7b0(0x4a9)+_0x55a7b0(0x336)+_0x55a7b0(0x4b1)+'sk-ca'+_0x55a7b0(0x52f)+'ad\x20{\x20'+'displ')+('ay:\x20f'+'lex;\x20'+_0x55a7b0(0x2ec)+_0x55a7b0(0x603)+_0x55a7b0(0x471)+_0x55a7b0(0x6c0)+_0x55a7b0(0x505)+'\x208px;'+_0x55a7b0(0x2aa)+'ing:\x20'+_0x55a7b0(0x4eb)+'12px;'+_0x55a7b0(0x250)+'\x20\x20.sk'+_0x55a7b0(0x49e)+_0x55a7b0(0x4ec)+'e\x20{\x20f'+_0x55a7b0(0x386)+'1;\x20mi'+_0x55a7b0(0x641)+'th:\x200'+_0x55a7b0(0x328)+_0x55a7b0(0x3a5)+_0x55a7b0(0x711)+_0x55a7b0(0x224)+'le\x20st'+'rong\x20'+'{\x20fon'+_0x55a7b0(0x361)+'e:\x2013'+'px;\x20f'+'ont-w'+_0x55a7b0(0x27d)+_0x55a7b0(0x65a)+_0x55a7b0(0x226)+'or:\x20r'+_0x55a7b0(0x6dc)+_0x55a7b0(0x69c)+'8,242'+_0x55a7b0(0x3a4)+_0x55a7b0(0x328)+_0x55a7b0(0x3a5)+'k-car'+_0x55a7b0(0x417)+'.sk-c'+_0x55a7b0(0x34a)+_0x55a7b0(0x1f0)+_0x55a7b0(0x4b3)+'g\x20{\x20c'+'olor:'+'\x20#fff'+_0x55a7b0(0x1ca)+_0x55a7b0(0x1b9)+'\x20.sk-'+_0x55a7b0(0x6eb)+_0x55a7b0(0x347)+_0x55a7b0(0x63c)+_0x55a7b0(0x2c7)+_0x55a7b0(0x71a)+'0px;\x20'+'}\x0a\x20\x20\x20'+_0x55a7b0(0x441)+'mdesc'+_0x55a7b0(0x3ad)+_0x55a7b0(0x46e)+'ze:\x201'+'1px;\x20'+_0x55a7b0(0x728)+_0x55a7b0(0x2c5)+'4;\x20ma'+_0x55a7b0(0x343)+'botto'+_0x55a7b0(0x5f9)+_0x55a7b0(0x435)+_0x55a7b0(0x4b1)+'sk-ct'+'l\x20{\x20d'+_0x55a7b0(0x4fb)+_0x55a7b0(0x4b5)+'ex;\x20a'+'lign-'+'items'+':\x20cen'+'ter;\x20'+'gap:\x20'+'8px;\x20'+_0x55a7b0(0x5d9)+'ng:\x204'+_0x55a7b0(0x48b)+_0x55a7b0(0x66a)+'-size'+_0x55a7b0(0x5e5)+_0x55a7b0(0x246)+'}\x0a\x20\x20\x20'+'\x20.sk-'+'label'+_0x55a7b0(0x209)+'ex:\x201'+';\x20col'+_0x55a7b0(0x434)+_0x55a7b0(0x6dc)+'46,23'+'8,242'+_0x55a7b0(0x3b6)+';\x20}\x0a\x20'+_0x55a7b0(0x3a5)+'k-hin'+_0x55a7b0(0x4cf)+_0x55a7b0(0x4fb)+_0x55a7b0(0x1ec)+'ock;\x20'+'font-'+'size:'+'\x2010px'+_0x55a7b0(0x2f4)+'city:'+_0x55a7b0(0x54b)+_0x55a7b0(0x1b9)+_0x55a7b0(0x441)+_0x55a7b0(0x3a3)+'h\x20{\x20p'+_0x55a7b0(0x388)+_0x55a7b0(0x1dc)+_0x55a7b0(0x593)+_0x55a7b0(0x645)+_0x55a7b0(0x1f9)+_0x55a7b0(0x1d0)+_0x55a7b0(0x453)+_0x55a7b0(0x310)+'14px;'+_0x55a7b0(0x440)+'er:\x200'+';\x20bor'+'der-r'+'adius'+_0x55a7b0(0x501)+_0x55a7b0(0x64f)+_0x55a7b0(0x5ba)+_0x55a7b0(0x53b)+_0x55a7b0(0x6a3)+_0x55a7b0(0x4a7)+_0x55a7b0(0x303)+_0x55a7b0(0x38e)+');\x20cu'+'rsor:'+_0x55a7b0(0x499)+_0x55a7b0(0x608)+_0x55a7b0(0x37b)+_0x55a7b0(0x1f4)+_0x55a7b0(0x328)+'\x20\x20\x20.s'+_0x55a7b0(0x47b)+_0x55a7b0(0x71d)+'after'+_0x55a7b0(0x55d)+_0x55a7b0(0x4c4)+_0x55a7b0(0x380)+'\x20posi'+'tion:'+_0x55a7b0(0x616)+'lute;'+_0x55a7b0(0x476)+'\x203px;'+'\x20left'+_0x55a7b0(0x298)+_0x55a7b0(0x52e)+_0x55a7b0(0x411)+_0x55a7b0(0x71e)+_0x55a7b0(0x27d)+_0x55a7b0(0x5a9)+_0x55a7b0(0x4ba)+'der-r'+_0x55a7b0(0x70f)+_0x55a7b0(0x279)+_0x55a7b0(0x6e7)+_0x55a7b0(0x284)+'nd:\x20r'+_0x55a7b0(0x6dc)+'55,25'+_0x55a7b0(0x32d)+_0x55a7b0(0x584)+_0x55a7b0(0x249)+_0x55a7b0(0x34b)+'on:\x20l'+_0x55a7b0(0x23d)+'2s,\x20b'+'ackgr'+_0x55a7b0(0x6e1)+'.2s;\x20'+_0x55a7b0(0x1b9)+_0x55a7b0(0x441)+'switc'+_0x55a7b0(0x3ca)+'a-che'+'cked='+'\x22true'+'\x22]\x20{\x20'+'backg'+_0x55a7b0(0x3b5)+':\x20rgb')+(_0x55a7b0(0x54c)+',107,'+'157,.'+_0x55a7b0(0x2b6)+'}\x0a\x20\x20\x20'+_0x55a7b0(0x441)+'switc'+_0x55a7b0(0x3ca)+'a-che'+'cked='+_0x55a7b0(0x3f6)+_0x55a7b0(0x445)+'fter\x20'+_0x55a7b0(0x2a0)+_0x55a7b0(0x3dc)+'px;\x20b'+_0x55a7b0(0x21a)+_0x55a7b0(0x285)+'\x20#ff6'+_0x55a7b0(0x318)+_0x55a7b0(0x1b9)+'\x20.sk-'+_0x55a7b0(0x694)+_0x55a7b0(0x5be)+_0x55a7b0(0x5ba)+_0x55a7b0(0x53b)+_0x55a7b0(0x6a3)+'255,2'+_0x55a7b0(0x303)+'5,.03'+'5);\x20b'+'order'+_0x55a7b0(0x2d6)+_0x55a7b0(0x4ab)+_0x55a7b0(0x3cd)+_0x55a7b0(0x690)+_0x55a7b0(0x413)+_0x55a7b0(0x4e1)+_0x55a7b0(0x35d)+_0x55a7b0(0x340)+_0x55a7b0(0x2aa)+_0x55a7b0(0x496)+_0x55a7b0(0x4d4)+'px;\x20f'+_0x55a7b0(0x619)+_0x55a7b0(0x4f2)+_0x55a7b0(0x325)+'x;\x20ou'+'tline'+_0x55a7b0(0x1f1)+_0x55a7b0(0x72b)+'x-sha'+_0x55a7b0(0x26f)+_0x55a7b0(0x2e5)+_0x55a7b0(0x3c1)+'0\x201px'+_0x55a7b0(0x3cf)+_0x55a7b0(0x685)+'255,2'+_0x55a7b0(0x64c)+_0x55a7b0(0x6c3)+'\x0a\x20\x20\x20\x20'+_0x55a7b0(0x6e5)+_0x55a7b0(0x41a)+'optio'+'n\x20{\x20b'+_0x55a7b0(0x21a)+_0x55a7b0(0x285)+'\x20#221'+_0x55a7b0(0x3aa)+_0x55a7b0(0x1b9)+_0x55a7b0(0x441)+'range'+_0x55a7b0(0x4e4)+'splay'+_0x55a7b0(0x2ea)+_0x55a7b0(0x5a7)+_0x55a7b0(0x573)+_0x55a7b0(0x3b4)+_0x55a7b0(0x624)+'er;\x20g'+'ap:\x208'+_0x55a7b0(0x660)+'\x0a\x20\x20\x20\x20'+_0x55a7b0(0x4c8)+_0x55a7b0(0x33e)+'\x20{\x20-w'+_0x55a7b0(0x65f)+_0x55a7b0(0x54d)+'aranc'+'e:\x20no'+'ne;\x20a'+_0x55a7b0(0x560)+'ance:'+'\x20none'+';\x20wid'+_0x55a7b0(0x4e8)+'0px;\x20'+_0x55a7b0(0x47f)+_0x55a7b0(0x3d8)+'x;\x20ba'+'ckgro'+_0x55a7b0(0x53b)+_0x55a7b0(0x301)+'paren'+'t;\x20}\x0a'+_0x55a7b0(0x4b1)+'sk-sl'+'ider:'+':-web'+_0x55a7b0(0x688)+'lider'+_0x55a7b0(0x689)+_0x55a7b0(0x4e2)+'track'+'\x20{\x20he'+'ight:'+'\x202px;'+_0x55a7b0(0x440)+_0x55a7b0(0x659)+'dius:'+_0x55a7b0(0x241)+_0x55a7b0(0x2f0)+'groun'+'d:\x20li'+_0x55a7b0(0x6fd)+'gradi'+_0x55a7b0(0x2a6)+'ff6b9'+'d,\x20#f'+'f6b9d'+_0x55a7b0(0x576)+'\x20/\x20va'+'r(--p'+_0x55a7b0(0x611)+_0x55a7b0(0x4e3)+_0x55a7b0(0x6b4)+_0x55a7b0(0x480)+_0x55a7b0(0x1e4)+_0x55a7b0(0x4bb)+_0x55a7b0(0x32d)+',255,'+_0x55a7b0(0x6df)+'\x20}\x0a\x20\x20'+_0x55a7b0(0x404)+_0x55a7b0(0x599)+'er::-'+'webki'+'t-sli'+_0x55a7b0(0x29a)+_0x55a7b0(0x491)+_0x55a7b0(0x478)+_0x55a7b0(0x644)+'appea'+'rance'+_0x55a7b0(0x1f1)+_0x55a7b0(0x674)+_0x55a7b0(0x53a)+_0x55a7b0(0x413)+'heigh'+_0x55a7b0(0x513)+_0x55a7b0(0x30d)+_0x55a7b0(0x343)+_0x55a7b0(0x1f5)+'-2px;'+_0x55a7b0(0x440)+_0x55a7b0(0x659)+'dius:'+_0x55a7b0(0x447)+_0x55a7b0(0x2f0)+_0x55a7b0(0x3bf)+_0x55a7b0(0x55f)+_0x55a7b0(0x2af)+_0x55a7b0(0x328)+_0x55a7b0(0x3a5)+'k-val'+_0x55a7b0(0x3ad)+_0x55a7b0(0x46e)+_0x55a7b0(0x574)+_0x55a7b0(0x39b)+'font-'+_0x55a7b0(0x426)+'t:\x2060'+_0x55a7b0(0x721)+_0x55a7b0(0x641)+_0x55a7b0(0x63f)+_0x55a7b0(0x2b1)+_0x55a7b0(0x53c)+'align'+_0x55a7b0(0x2ac)+_0x55a7b0(0x2f2)+_0x55a7b0(0x460)+_0x55a7b0(0x3cf)+_0x55a7b0(0x36e)+'238,2'+_0x55a7b0(0x49c)+_0x55a7b0(0x336)+_0x55a7b0(0x4b1)+_0x55a7b0(0x661)+'lor\x20{')+('\x20widt'+_0x55a7b0(0x636)+_0x55a7b0(0x71e)+_0x55a7b0(0x27d)+':\x2022p'+'x;\x20bo'+'rder:'+'\x200;\x20b'+_0x55a7b0(0x4d9)+'-radi'+'us:\x206'+'px;\x20b'+'ackgr'+'ound:'+'\x20none'+';\x20pad'+_0x55a7b0(0x2ae)+_0x55a7b0(0x600)+_0x55a7b0(0x437)+_0x55a7b0(0x2d3)+'nter;'+'\x20}\x0a\x20\x20'+'\x20\x20.sk'+'-note'+_0x55a7b0(0x3ad)+_0x55a7b0(0x46e)+'ze:\x201'+'1px;\x20'+_0x55a7b0(0x4e1)+_0x55a7b0(0x23e)+'a(246'+',238,'+'242,.'+'5);\x20p'+_0x55a7b0(0x62d)+'g:\x202p'+'x\x200;\x20'+'}\x0a\x20\x20\x20'+'\x20.sk-'+'note.'+_0x55a7b0(0x32b)+'\x20colo'+_0x55a7b0(0x4bc)+'f7a93'+_0x55a7b0(0x328)+_0x55a7b0(0x3a5)+_0x55a7b0(0x637)+'\x20{\x20al'+'ign-s'+_0x55a7b0(0x1ce)+_0x55a7b0(0x35f)+'start'+_0x55a7b0(0x4ba)+_0x55a7b0(0x4c5)+'0;\x20bo'+'rder-'+_0x55a7b0(0x350)+'s:\x208p'+_0x55a7b0(0x71c)+_0x55a7b0(0x63c)+_0x55a7b0(0x5a9)+_0x55a7b0(0x5eb)+';\x20bac'+'kgrou'+'nd:\x20#'+'ff6b9'+_0x55a7b0(0x65d)+_0x55a7b0(0x5b5)+_0x55a7b0(0x420)+_0x55a7b0(0x66a)+_0x55a7b0(0x3a2)+_0x55a7b0(0x5e5)+_0x55a7b0(0x246)+_0x55a7b0(0x37a)+_0x55a7b0(0x426)+'t:\x2070'+_0x55a7b0(0x73d)+_0x55a7b0(0x3e0)+_0x55a7b0(0x499)+_0x55a7b0(0x608)+'}\x0a\x20\x20\x20'+'\x20.sk-'+_0x55a7b0(0x4cd)+'over\x20'+_0x55a7b0(0x243)+_0x55a7b0(0x41e)+_0x55a7b0(0x305)+'tness'+_0x55a7b0(0x675)+_0x55a7b0(0x328)+_0x55a7b0(0x6f2));window[_0x55a7b0(0x3cb)+_0x55a7b0(0x2ab)+_0x55a7b0(0x39a)+'r']('keydo'+'wn',_0x3c318a=>{var _0x1ed06b=_0x55a7b0;if(_0x550501['ZarWw']!=='rUmen')_0x3c318a[_0x1ed06b(0x4ed)]==='Inser'+'t'&&(_0x3c318a['preve'+_0x1ed06b(0x251)+_0x1ed06b(0x566)](),_0x550501[_0x1ed06b(0x451)](_0x4cc252));else{var _0x5e24d1=_0x369c6d[_0x88ae2f];if(_0x5e24d1)try{_0x5e24d1[_0x1ed06b(0x58e)+'ed']=!!_0x3e6e5b;}catch(_0x49bfdb){}}},!![]);var _0x5ab1b5=document['creat'+_0x55a7b0(0x532)+_0x55a7b0(0x2c0)](_0x13a3ad[_0x55a7b0(0x26c)]);_0x5ab1b5[_0x55a7b0(0x317)]['cssTe'+'xt']=_0x55a7b0(0x712)+_0x55a7b0(0x2cb)+'ixed;'+_0x55a7b0(0x687)+_0x55a7b0(0x52d)+'ight:'+_0x55a7b0(0x522)+'z-ind'+_0x55a7b0(0x35e)+_0x55a7b0(0x3fc)+'646;c'+'ursor'+':poin'+_0x55a7b0(0x35c)+'idth:'+_0x55a7b0(0x5a2)+'heigh'+_0x55a7b0(0x25e)+_0x55a7b0(0x6ea)+'city:'+'0.5;t'+'ransi'+_0x55a7b0(0x30a)+'opaci'+_0x55a7b0(0x733)+_0x55a7b0(0x4c1)+'inter'+_0x55a7b0(0x416)+_0x55a7b0(0x59f)+_0x55a7b0(0x666)+_0x55a7b0(0x4f4)+_0x55a7b0(0x357)+_0x55a7b0(0x5af)+_0x55a7b0(0x5b8)+'\x204px\x20'+_0x55a7b0(0x6a3)+_0x55a7b0(0x1f6)+'07,15'+'7,0.7'+'))',_0x5ab1b5['inner'+'HTML']='<svg\x20'+_0x55a7b0(0x547)+'ox=\x220'+_0x55a7b0(0x5cc)+_0x55a7b0(0x1d3)+_0x55a7b0(0x6bd)+_0x55a7b0(0x1da)+'12\x2021'+_0x55a7b0(0x377)+_0x55a7b0(0x37c)+'4-4.5'+_0x55a7b0(0x5e9)+_0x55a7b0(0x50b)+_0x55a7b0(0x4f3)+'8-4.5'+_0x55a7b0(0x606)+'5s4\x202'+_0x55a7b0(0x697)+'5c0\x203'+_0x55a7b0(0x3b8)+_0x55a7b0(0x3e8)+'.5z\x22\x20'+_0x55a7b0(0x2bd)+_0x55a7b0(0x73a)+_0x55a7b0(0x6c5)+_0x55a7b0(0x4cc)+'#ff6b'+_0x55a7b0(0x401)+_0x55a7b0(0x3f3)+_0x55a7b0(0x1e2)+'h=\x222\x22'+_0x55a7b0(0x580)+'ke-li'+_0x55a7b0(0x25f)+'=\x22rou'+'nd\x22\x20s'+_0x55a7b0(0x3f3)+'-line'+'join='+_0x55a7b0(0x5db)+_0x55a7b0(0x70b)+_0x55a7b0(0x32a)+_0x55a7b0(0x485)+'\x2212\x22\x20'+'cy=\x221'+'0\x22\x20r='+_0x55a7b0(0x1c6)+_0x55a7b0(0x6cd)+'=\x22#ff'+_0x55a7b0(0x396)+_0x55a7b0(0x395)+_0x55a7b0(0x2d4),_0x5ab1b5[_0x55a7b0(0x3c9)]=_0x13a3ad[_0x55a7b0(0x698)],_0x5ab1b5['onmou'+_0x55a7b0(0x3e2)+'er']=()=>_0x5ab1b5[_0x55a7b0(0x317)]['opaci'+'ty']='1',_0x5ab1b5[_0x55a7b0(0x494)+'selea'+'ve']=()=>_0x5ab1b5['style'][_0x55a7b0(0x728)+'ty']=_0x55a7b0(0x2ad),_0x5ab1b5[_0x55a7b0(0x69a)+'ck']=_0x2a08c4=>{var _0x444503=_0x55a7b0;_0x2a08c4[_0x444503(0x61b)+_0x444503(0x2b7)+_0x444503(0x23a)](),_0x4cc252();},document[_0x55a7b0(0x72c)]['appen'+'dChil'+'d'](_0x5ab1b5),_0x4ca917(),requestAnimationFrame(_0x5a3da9),console[_0x55a7b0(0x4a4)](_0x13a3ad['VVvmo'],_0x42c33f['uwmk']);});})()));function _0x222f(){var _0x40d68e=['nYWWlJG','C1zhrK0','AdOGmZq','AY1IDg4','y3jVBgW','yxa6ihi','oYbMBgu','oIbKCM8','zgrPBMC','Bev5q2W','CgvHDcG','DgG6idi','kYbtCge','BI13Awq','sgvHBhq','y2fWtw8','yMTPDc0','DMu7ihC','ywn0Axy','DgfIihS','tvnbvgm','Dhj1zq','Dw1UoYa','D09etwK','ntuSlJa','B3vUDc4','oJa7D2K','EdSGyMe','CgfYC2u','ign1CNm','AxbfwwC','zxzLBNq','u3rHDgu','igfWCgW','BgLNBG','zwLUC3q','r3b4Ewm','zxiTCMe','oIa2mda','B1jLy28','yxvSDca','zdSGy28','y2ntsMO','zwjRAxq','ChG7ih0','C2STy28','y0PnzhK','lwLVxYO','reL4BwC','ieLZr3i','Dg87zMK','y2fWu2G','mNb4oYa','mJG0mZzQwMPswwS','igzVBNq','BNn0ywW','ztOGmtC','BgLUzw4','lMLVig0','z24Ty28','AvnsuLK','Ehjotw0','mtG0zKrXu0ro','Axb0kq','ztSGD2K','kdeUmsK','yxrLvge','l1jnqIa','zhbY','igjHBIa','te1c','EYbIB3G','C2fMzu0','v0fttsa','v3jHCha','B2fKzwq','AwrLCG','nc00lJu','uNvUDgK','y29SCZO','DgLKzvC','kdi1nsW','sK1bs2O','Dg9WoJe','A2L0lxm','lxj1BM4','lM1Ulxq','u2fRDxi','ysblB3u','zw4GDg8','z2v0rwW','ifvUAxq','AxvZoIa','DMvYBge','yw5ZzM8','lxjHzgK','zMLLBgq','ihrOAxm','D2vHzee','idqGnc4','wgjcBu0','swjfALG','B25JBgK','ig1VBwu','ndySmJm','rNrQywG','A1Psu2y','yxrJAgu','BMnL','zxmGB24','mtjWEca','CMDIysG','A1HMy1u','AxrJAa','yMLJlwi','zgLZCgW','AvvktwW','Dfrisfe','AvfxC2y','yK5hExG','AwrHDgu','BI1PDgu','B25LigK','DMfS','zgv2Awm','Ec1OzwK','zwn0Aw8','BgfZDeu','jsbUBY0','z24TAxq','zxDAzfK','CxvLCNK','Aw9F','yNDTvhq','q2PnCKm','zeL6vw4','t1vsx18','phbHDgG','v01ligK','ihn0AwW','BNrLCJS','Bw91C2u','BMq6ihi','nsK7ih0','BI5MAxi','iIbZDhi','A1Dtrva','B24UvgK','Aw5JBhu','mhW4Fdq','ihWGrvi','lxrVCca','BJOGy28','igzPBgW','kg92zxi','ihn5C3q','zgvYlxi','y29vsKC','BhvLCY4','Cfrsr0G','ufL6wxi','zsb3zwe','zcb7igi','v2LWzsa','EYbJB2W','zvbPEgu','mZGZmJm3nfrLrMj1Da','mcWWlJu','z2jHkdi','r3jHDMK','D2DHtLe','lJa4ktS','t29OAwS','B3vUzca','C2v0sxq','yNv0Dg8','ktSkica','lNnRlwy','idK5osa','oYbIywm','oYb1C2u','DMG7EI0','EdTVCge','BwjVzhK','yvjtyLa','rMLLBgq','BY1ZDMC','AxrPyxq','zw0TDwK','ze1mwfC','icaG','Bw4TDgK','EuvUz2K','khjLBg8','BeTRqwO','CwHWEhK','CgXPy2e','ExDSCgS','r0z1EM4','tKCG4Ocuia','DhjPyNu','BMvHCI0','zfbVufG','oYbWB2K','BhrO','D3z3A0i','u3bHy2u','B3G9iJa','Bw4TDge','kYbmtui','C2v0','lxnOywq','mdSGyM8','q29SB3i','zw51','zciVpJW','qxvyrNq','D2LKDgG','sfj0r0u','ywrPDxm','pc9ZBwe','AY1Jyxi','Cg9ZAxq','AfnOywq','zcbZzwu','z2vJuxe','z3vIB1i','sw5ZDge','DcbZDge','tg9Hzgu','mNb4ide','ldi1nsW','EdSGCge','DgnOoJO','ChG7igG','oYbMAwW','A0XLq0e','mdSGBwK','Fdv8m3W','lwjVEdS','ANvTCfa','DxjH','DgLKzs4','t1nOB28','B3bHy2K','u2jfvuG','mZe4nde4mwXLz25yvW','ztSGyM8','yM9KEq','BM9szwm','zw50CW','EeLwvNe','C3bHBG','Ag9VA3m','y3KGB24','DhKGmc4','ywnPDhK','AwX5oIa','q1btihi','igjHBM4','AcbVBMu','y0vUBg8','iM5VBMu','Bg9Hzc4','D2vIA2K','mdSGy3u','BwvKicG','FqOGica','ig9Wywm','zxiGC2W','BK1VCMm','kc4YmIW','BfjHDgK','CZPUB24','ywXSihq','Bg9JAW','DNf4yKq','CM9Rzxm','yxjNzxq','ifjLy28','iJeUnsi','Chfrugi','DLbfyMm','yw5rBwO','mgy1oYa','u2vSzwm','v0jqt2G','vfPvDe0','zwXMoIa','ywqU','idi2ChG','y29UDgu','BgvMDa','idi0iJ4','u2L6zq','mZuSmJq','Bg93oIa','lcbZyw4','tM8GuMu','AxnPyMW','igq9iK0','A291CI0','B246ihi','CM9Wlwy','nIa2Bde','D0Leyva','ChG7igy','yvHRvfu','lxDPzhq','z1n2tuy','DcWGCMC','AwnRihm','igj1AwW','Bg9Hzca','A0HHtLu','mtySmc4','BwvZC2e','vwvICwG','EtOGyMW','zsb2ywW','CMvZDg8','CMvHzey','AxrSzsa','oIbUB24','CMvJDa','DwLhuNa','ig5VBMu','Dg9WoIa','mJu1lde','CIb2ywW','CMXHEsa','Awr0AdO','Dg9W','u2fMzsa','B2r5','ywroEKy','Bg9Hzgu','yMfJA2C','BM9UztS','ig1HEsa','Fdb8m3W','BLbSyxq','tMfTzq','vLzYBMK','vLnVsfG','DgG6idu','BMCGzM8','ihSGzMW','DZOGAw4','zNbZ','ntaLktS','z3vHwg4','uMf0zq','sfrnta','Awy7ih0','i2zMnMi','icbIB3G','zuXsB1a','sNvTCca','igrPC3a','CgXHEtO','zxiGEYa','y2n1CMe','zxiTzxy','ywnRz3i','x19ZywS','B3bLBG','B2f0Eq','A3nty2e','wKTMrwe','BsbJzw4','AxrLiee','BuX3BMC','ywrK','zc10Axq','idGWChG','oYbJB2W','zvbSDwC','DdOXmda','s0Hrz3G','id0GzMW','CY1Zzxi','igrLzMe','zMLSBa','yxbWzw4','BYbWAwC','ug9tvK0','rM9Yy2u','y2vUDgu','igDHDgu','B1fArwq','zxj5idi','DMrPvvC','y2fSBa','zNvSBhm','zgvZyW','yxrPB24','DhLWzq','A2TQzNG','zwz0ic4','oIbYz2i','C2STy3q','ignVB2W','idjWEdS','ruLuveC','EYbMAwW','BgLUzwm','AwrLihS','nxb4oYa','vvDnsW','u01iq0W','oYb0CMe','z3jPzc0','Aw5KzxG','Bgu7igy','ihLVDxi','uMvJB2K','Cg9W','ih0kica','BNrezwy','tgLZDa','uK1fy3q','ohG5mc0','Ae5UD3O','C2STC3C','ihSGD2K','mNW0','r296t0y','vgLJAW','q2DwuKW','EKjRr2K','zYbJyw4','DdOYnNa','BMvJyxa','oIaXoYa','B2LS','4Ocuig92zq','qNfAsMS','z29KrgK','lM1Ulxm','DMfSDwu','tw92zw0','tw92zq','wfngAvO','y2fUDMe','ChbLBNm','rNDUyve','mcWUntu','sxnhCM8','zg93oIa','igzVCIa','qwrIBg8','zM9YBtO','C3bSAxq','jsK7ic0','t3DiDfO','C21HBgW','AKLWsNi','CgnPs3G','oIa1mcu','Awq7iha','wKjIz2u','AwDUyxq','zwLNAhq','mJf8mtG','t0HLywW','BMLUzW','zvjczxG','psjYB3u','yxrLkde','A2DYB3u','B3vUzdO','DNbiuhq','nsWUmdu','zuvstMu','Fdz8nxW','rgfTywC','quz2qxi','u2vNB2u','iezPCMu','AsXZyw4','B29RCYa','ywqGD2G','yM91BMq','vKfAtgW','nhb4oYa','B3b0Aw8','qNLuAfy','re1ivNq','tgTOBLy','oIaZChG','y3jLzw4','zgvYlxq','A2uTBgK','oYbTAw4','uvzgz3e','lwjHBNi','C2Xrz0S','EYbSzwy','igzSzxG','C2v0qxq','BfHjBhC','ohb4ksK','B3zLCMW','zw50kcm','z2v0q28','mtu3lc4','CNjVCG','ihbHzgq','zw50tgK','oIbYAwC','mc41','zgLUzZO','zJzIowq','DtmY','ohb4oYa','ywLYlG','zwnRAeS','Bw4TC2K','tu9ersa','mJuPoYa','CM9WywC','B2rL','zw50zxi','vg90ywW','ywn0A0S','tw5mr0S','zMLSBd0','DxmGywm','mtGGnIa','zw50','ktSGBwe','CIbNyw0','Ag9ZDg4','zsaOt0G','DhK6ic4','AgvSza','oIaWide','EtOGmdS','B24Oks4','lc4WocK','Aw9UoMy','zMLSzw4','De5Vzgu','yxnLBgK','zIXZExm','DgXLCW','AtmY','ocWYndi','oIbWB2K','DMC+','B3n0zMK','oIaWoYa','qNvUBNK','mdSGFqO','Dw5PDhK','sw5PDgK','zxjZ','yw1L','BMu7ihm','lKXVy2e','cIaGica','y2HdB2W','CgfJAxq','C3LfEMO','CNr1Cca','Aw5WDxq','Aw5Zzxq','yxjPys0','zMyP','Ee9htxy','v2vItw8','oIbMBgu','Dw5RBM8','ywXPz24','lK92zxi','u3rHDhu','z2v0qxq','igjHy2S','A2v5Dxa','Ahq7igm','igXPBwK','oYbVCge','wKj4Dxq','vgHLC2u','ywWGBwu','Bg9NBY0','z0XQD2i','lJq1oYa','s2v5ra','Dg9Nz2W','mxWYFdq','icaGlM0','CgfYzw4','Cg9PBNq','DhjHBNm','BNrLEhq','ntuSmJu','B2rLu3q','yNjPz2G','CKzACeu','Aw5Uzxi','wKrMvvu','mtn8mtK','DgLVBJO','oIb0CMe','u0v5zeq','EdSGBwe','r2r1zMe','lJv6iIa','z2H0oIa','ig5LDMu','zIbTyxq','zdSGyMe','odbWEcW','BLfJzLy','Bw8GDg8','C3r5Bgu','yJLKoYa','yxrLlwm','lc4WnIK','AwXnB3q','B2vZig4','rw5NAw4','C2STCMe','swjyue0','Ag9VA04','DfvKr0m','B3vUzgu','i2zMyJm','BerPzsK','mteUnxa','igH1CNq','lxbHCMu','oYb9cIa','zsbBrvG','y2LYy2W','zxjYihS','BM9tChi','nsWYntu','CI52mq','DMjtz2y','B2LUDgu','zwfKige','igXLyxy','CMfWAwq','DhjHBxa','lwHVCa','ktSGFqO','qunuAYa','C2STDMe','zgTPDa','CgXcC2i','n3W1FdK','oIbJzw4','DKryDeK','BgLKzxi','uujlveC','zwvMmJS','AguGDxm','EsbKzwy','CMDPBI0','CMvSB2e','BMrHAeC','AxHLzdS','ihSGCge','ufL1zMG','Bw4TCge','yxjKlxq','BNnPDgK','rLbtigm','AwWGC3a','AwX0zxi','EtOGz3i','CMfKAxu','s1nhu2q','Ag9VA0m','z3jHDMK','zwv6zsa','Bg93zxi','DgLMEs0','zhjVCc0','wg5wrLi','zwfKB3u','ihjLBg8','sgLKzxm','DgvYo3C','oIaJzJy','zxG6mJe','zMXLEc0','ls1W','Dc1ZAxO','rxHW','D3jPDgu','r2rJBuy','zuDkz2S','DNLyDuS','BgfIzwW','Dxm6idi','mcWWlJC','ifvjiIW','BNnLDca','yJPOB3y','B25JAge','kdi0nIW','r2ngrwu','CMrLCI0','Bg9Y','BgvUz3q','y2XLyxi','ihDPzhq','twHgu1K','yMfJA2q','yY0XlJu','v2LKDgG','ideYChG','zM9UDc0','zMXLEdO','ltiUns0','zwCGzMe','zwfK','y3nxCKi','oIaIiJS','EgH4yLO','y3jVC3m','ufrJt0K','sM9Ovuy','ldiZocW','Bgv4oIa','s2v5qq','B3nPDgK','CwDdDNa','qufsy1G','DdOGmJG','t1POD0q','Bg9HzgK','nsWUmdC','mtbWEdS','zxjPDdS','AguGzNi','BgW+','oYbHBgK','B246ig8','lZ48l3m','nMi5zci','mJa3mdi3A1fyDef5','DgHLihC','iezquW','C3rLBMu','mxb4oYa','ignHy2G','D0nVBg8','C2vSzwm','zsbZzxi','DcbHihq','mte0mdjuufPuCKC','lxnPEMu','C3DPDgm','lc40nsK','icaGlNm','y2XHC3m','idrWEca','wgvwwgC','oMHVC3q','nde5oYa','oWOGica','ocKPoYa','ihSGzM8','igv4Axq','qxfAAMu','j3qGC3q','nZaWia','sgvPz2G','rwXLBwu','DgvTCZO','CM91BMq','lc43nsK','tefTr2S','ltiUnsa','zxrLy3q','nMvLzJi','BI1TywK','u0zQzve','phn2zYa','BNnSyxq','z3jVDw4','C3j3AMO','idaGmca','ihrOzsa','u29ty0m','t3Lvuxi','teHXt0W','psiJzMy','DgvY','icaGig8','DgL0Bgu','AfTHCMK','ywrKrxy','yxb0Dxi','CI1Yywq','A3ndChm','ihjNyMe','ic5TBI0','CxzMCuC','mteZndy2mJbIsNPUEwy','A3rlD1O','BwLZyW','uMvMAwW','y2HLy2S','BMC6igi','DdOGoha','zMLSBcW','wunjwKC','swP5zeS','DdOGmtu','zsb0CMe','zenOAwW','ys5RB3u','CNnVCJO','zw50oYa','C2vLBNq','AgfPCG','lM1Ulxa','tuLtu0K','y2uGB3y','zZOGnNa','ns00idC','BI1JB2W','BM93','BxKGC2u','ywX0Ac4','DgG6ida','tLf6De4','odiPoYa','C3HLy0K','mdbTCY4','x19tquS','DhjVA2u','vvjbx0S','rKL3ENu','iNrYDwu','ihjLy28','CwvIveG','ihDOAwm','zcbNCMu','vNPdChK','ndC0odm','yxbWBgK','EdSGAgu','DNCGlsa','ihbSywm','owqIihm','icaGica','lc40ktS','icaUC2S','EYbKAxm','y3jLyxq','EYbIywm','BsbYAwC','ywrIBg8','mhb4oYa','BgLJyxq','q2rRvwu','s0riAha','lwHLAwC','A2v5zg8','zwqGyw0','DgG6idG','Ad0ImIi','nNb4oYa','BgXIyxi','t3zLCNC','lwv2zw4','zc5VBIa','DgL2zsa','CMvUDem','AwvSzca','lxnHBNm','C2fRDxi','nxm0idi','DgvYoIa','C2v0ida','i2zMzJS','CvLRBum','zcbJAg8','BgzHBu4','A1HHCM4','A2vizwe','D2vPz2G','BhKGkhi','rNjHBwu','BMv2zxi','ywXSig8','u0XcBKS','DxjDifu','y2HtAxO','Aw9U','CM9ZC2G','D29YAYa','BgLUzvq','CI51As4','AwvSza','B3i6ihi','EdSGFqO','ihrYyw4','DxjZB3i','sw5MAw4','yMX5lum','EcbYz2i','B3vUDgu','Egn4twm','B24Gzxy','Ahq6idi','Aw5Mqw0','igjVCMq','ic5ZAY0','tMXAALG','y3K9iJe','BMn0Aw8','iL06oMe','BNrLCI0','iduWjtS','CMLZAYa','CMvMAxG','oI13zwi','B29Rihi','uMvZzxq','CfnMy3e','ihnOB3q','oIaZmNa','v2vHCg8','sunVA1u','Cg1SyLa','oYbOzwK','DhLSzq','zxzLCNK','zgTxz2e','zgLhCwy','BMC6ida','zhrTEhG','D2HLCMu','suTiz0G','ywvTBMC','CYbpDMu','qvvACxi','DhjPA2u','B2XVCJO','B250lxC','DgfNtMe','zgfTywC','C2HVB3q','AePoB2e','rufRzK0','se14yxi','AgfZ','zxi6igi','z2v0sxq','DvHcyuq','zwfKEs4','igLZigm','BNqTC2K','ChvZAa','DgLVBI4','CZOGy2u','igHLAwC','EhfNr1i','twL1D0K','s2v5uW','ihrVCdO','AwnpqwK','EYaTD2u','y3vYC28','u2TPChm','AY1ZD2K','rgfUz2u','C3bLzwq','DxDTAW','AgvPz2G','CMvWzwe','u0fgrsa','EhfcB3q','zgL2','mtj8mNW','zsbJEd0','oIbJB2W','sfP1uwm','AwXwAwS','DMvTzw4','qKPQrxy','ChGGmdS','Ec1KAxi','yMX1CG','lc4WnsK','yM90Dg8','CYaNzNu','AhvTyIa','q3jVC3m','ufmGDw4','B25TB3u','B3nL','Aw5NoIa','Bw9fEha','C2HPzNq','ihbVAw4','CMfUC3a','AxrPywW','ndiSlJG','C3rYB2S','lwnHCMq','r29Kl2q','vuzVB0W','oIa2nta','C2STC2W','qM90Dg8','Bg9N','Bw4Ty28','EYbWB3m','mJu1ldi','DMLHifm','nYWUmJG','C3rYAw4','yM9Yzgu','Bw92zq','CMfPC2u','BM9Uzq','D2fYBG','CerJswS','icaGic4','idi0iIa','C3rYB24','qKXtC1m','EtOGzMW','ExPpweO','zZOGmta','ChG7ihC','zvj1BM4','oYbIB3i','yMeOmJu','CJOGi2y','tM8Gu3a','Ag9VA1a','Bw4TBwe','yw5LBca','mNm7Cg8','kdaSmcW','nNb4ida','BNrLBNq','zgvYoIa','zvjHDgu','ihWGz2e','lNnRlxm','zxPPzxi','Bgf5ig8','mdi1ktS','B2TLpsi','yNrUoMG','yuTVDxi','Dcb7igq','CenOqwm','Bw92zw0','CMvHza','yMHVCa','nNb4idK','Bw5UCKq','Dw1Yt3m','rxvAEeO','C2HVD24','B3jKzxi','yxjLBNq','D2TjsNe','r0nPt3a','z2v0','DgfhyNy','Bgf5oIa','tvjky2C','y29SB3i','ywjSzs0','ksaXmda','ihSGzgK','t05PwNe','zhrOoJe','A2uTD2K','DgG6idK','CYbnB3y','Bxm6igm','mtfWEca','lxrPDgW','y29Kzq','zguSihq','Aw50zxi','ndGZnJq','Dg87ih0','AxPLoIa','lJuGms4','BhrLCJO','zxjYB3i','zw15igm','zw1LBNq','idiWmg0','Dc1Myw0','y29TCgW','AxnWBge','zxrL','y2HPBgq','zw50CZO','igjVEc0','ihSGB3a','oIa5oxa','C2STBwq','s0DHDNO','C2zVCM0','igDHCdO','ocK7ih0','ue93te8','igvUDgK','CMvU','BI1SB2C','nsaWlti','B3vcwhm','t2LWyvK','BgWGBwu','zMXLEdS','yMvS','ELvACeu','t3PzrwS','DdOGnNa','B3rOAw4','CYbZChi','ENjZwuC','ldiXlc4','B3rZlG','Aw9FmZa','BMvtwvu','CMLKoYa','mdCSmtu','vLDTsvG','zg9JDw0','tgvNAw8','y2vSzxi','oxWXmxW','mtjWEdS','nhWXFdi','idaGnha','mtqWntu3oezIBvDhta','mdb2DZS','z2LMEq','yxnZAwC','A2v5C3q','lwfWCgW','uMvJDa','ieTLzxa','mNb4o3i','oYb3Awq','CMqTAgu','nJHkz0fxtM4','EdSGz2e','zuvSzw0','lMrSBa','BdOGAw4','DxjDigG','B3nWywm','vw5PDhK','ihWGC2G','BMf0Dxi','zhrOoIa','Dw5KoIa','Dgv4Dc0','CdOGmti','jYb0Agu','EevlD3K','y2f0','mJqYlc4','l3jHCgK','vMfSDwu','y3nZvgu','zxqGmca','zM9YBxm','DMLLD0i','igfSAwC','zwfSDgG','rgXRA2W','ic40oYa','ysGYntu','lwfWCgu','yxK6igC','rfDJugW','ienquW','DefgAuC','lwXPBMu','DgvTlxu','rw9yrLa','B3vTrK8','DgHPCYa','DdOGnZa','C2STBge','qxbWBgK','yu5Trwq','z2fTzuW','D1H6vxi','ihSGy28','zKjZqvq','zdOGi2y','ChbLyxi','oIaXnha','C2STy2e','z2uUiei','D2L0Ag8','Axnuyxe','yxvSDa','nJiWChG','twLZyW','lsbVDMu','rKDfDfK','mtiGmJe','A3nqB3m','zs5bCha','Aw46ida','zxjZihq','s2TYrw0','icaUBw4','DuXOv3e','AwDUlwK','EMu6ide','EYbMB24','ksaWida','AxmGyNu','C3zNiJ4','C2v0x3q','q291BNq','ihWGBw8','CNrPzgu','DhLqy3q','Cfzptge','lxnPEMK','ihn0CM8','ig5VigG','B25PBNa','A3vnt2u','lc4YnsK','BNqGAge','uJOG','v09Rsg8','z1HUAgq','s0XWvxy','AxrytNC','C3bSyxK','Ag9VA0C','ntvhs0zZC2S','zw5HyMW','DMLZDwe','mNb4ihu','oc00lJu','A1bmse0','zwXHDgK','igf1Dg8','BgfJzs0','yxrSEsa','DgGUsw4','CMqTDgK','lxnSAwq','BYb0Agu','Awr0Aa','ie1VDMu','B2X1Dgu','rK51EvG','Dhm6yxu','ndSGFqO','yK54r2i','mJzWEdS','zvbSyxK','BwLKzgW','zsbTAxm','z29K','EdSGywW','ide0ChG','oIa4ChG','ywqGDg8','zvzHBhu','ys11Aq','Fdf8mti','zxjZy3i','C2HHzg8','q0TOENq','ChG7igi','v3LktM8','zxjZtxi','ugn0','Bg9YoIa','AguGCMu','CMvHzhK','DYGWida','mcbOB28','y2TNCM8','Bu5HAeW','ndHWEcK','DhrPBMC','ihSGyMe','v0ftrca','s1PoyNm','u2nHBgu','B3bLCNq','s1rqv0q','DwX0','Eg1qr2G','CYbHBgW','D2L0Aca','ie9olG','nYWWlJm','s21my2K','Dw5Kzwq','idaGmJq','tM5ju2e','oYbQDxm','B2reAwu','A3mGyxi','C2STyNq','DxrVoYa','u2HHCNa','D0jSDxi','msWUmZy','BMfyqKC','EMz1Avu','C3rHCNq','CgfKzgK','DgnOihq','iNjVDw4','w3nHA3u','yxGOmJu','t09UEMu','vvDnsYa','rLbNvwC','AwvZlG','rgLL','EKfnvfG','zw1ZoIa','oIaXms4','ig9U','yMvNAw4','psjTBI0','ltqTnY4','C2f2zq','ide2ChG','phnTywW','Ew5Qsfi','igHVB2S','Dgv4Dem','lwrPCMu','oYbIB3G','zuv4Ca','B250zw4','zxnJ','zvn0EwW','lIbuDxi','zMLSBfm','BhvYkdi','BtOGnNa','ifvxtuS','oJiXndC','tvP5u20','ig1PBIG','mJqWiey','zgD2u3e','ida7igm','ihrVide','i2zMzG','lwL0zw0','Ee9QCKC','igfUzca','idqTnc4','zw50rwW','DgvYoYa','uIb2ms4','AguGzgu','qxbWBhK','igvYCG','Bwf4','zgvZ','DxjDig0','A2rYB3a','lca1mcu','CZOGmty','AwXSihK','DwLVv2G','nsKSida','igfIC28','t2X6yNO','s2v5vW','B250lxm','Bw92zvq','C3rVCfa','DMLZAwi','zJmY','D3v5ugq','ohWY','q3vZDg8','EhrZELG','CMeTA28','zvrHA2u','ignLBNq','ihnVig4','B1LIAhC','rK9mu2q','nYWUmsK','zM9QDKi','mxb4ihi','Bw4TDg8','BgLUzvC','ywrKAw4','qNLjza','CMvWBge','y2SP','ide7ig0','CMvSEsa','zenitve'];_0x222f=function(){return _0x40d68e;};return _0x222f();}
