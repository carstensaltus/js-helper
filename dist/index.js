// TODO only load relevant lodash functions
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class Helper {
    /**
     * Checks if a value is undefined.
     *
     * @param  {any} value
     * @return {boolean}
     */
    isUndefined(value) {
        return typeof value === 'undefined';
    }
    /**
     * Trims a string.
     *
     * @param  {string} value
     * @return {string}
     */
    trim(value) {
        return value.trim();
    }
    /**
     * Uppercase a string.
     *
     * https://www.w3schools.com/jsref/jsref_touppercase.asp
     *
     * @param  {string} str
     * @return {string}
     */
    upperCase(str) {
        return str.toUpperCase();
    }
    /**
     * lower case a string.
     *
     * @param  {string} str
     * @return {string}
     */
    lowerCase(str) {
        return str.toLowerCase();
    }
    /**
     * Turn a string into an array split by a character.
     *
     * @param  {string} str
     * @param  {string} character
     * @return {Array<string>}
     */
    explode(str, character) {
        return str.split(character);
    }
    /**
     * Join an array into a string with a character.
     *
     * @param  {Array<string|number>} arr
     * @param  {string} character
     * @return {string}
     */
    implode(arr, character) {
        return arr.join(character);
    }
    /**
     * Creates a duplicate-free version of an array, using SameValueZero for
     * equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the
     * order they occur in the array.
     *
     * @param  {Array<any>} value
     * @return {Array<any>}
     */
    unique(value) {
        return lodash_1.uniq(value);
    }
    /**
     * This method is like _.assign except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to undefined are skipped
     * if a destination value exists. Array and plain object properties are merged
     * recursively. Other objects and value types are overridden by assignment.
     * Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * https://lodash.com/docs/#merge
     *
     * @param  {Object} objectA
     * @param  {Object} objectB
     * @return {Object}
     */
    merge(objectA, objectB) {
        return lodash_1.merge(objectA, objectB);
    }
    /**
     * Creates a shallow clone of value.
     *
     * https://lodash.com/docs/#clone
     *
     * @param  {any} value
     * @return {any}
     */
    clone(value) {
        return lodash_1.clone(value);
    }
    /**
     * Returns a random string.
     *
     * @param  {number} length - Optional, defaults to 5
     * @param {string} chars - The type of random strings
     * @return {string}
     */
    randomStr(length, chars) {
        chars = chars || 'aA';
        let mask = '';
        if (chars.indexOf('a') > -1) {
            mask += 'abcdefghijklmnopqrstuvwxyz';
        }
        if (chars.indexOf('A') > -1) {
            mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (chars.indexOf('#') > -1) {
            mask += '0123456789';
        }
        if (chars.indexOf('!') > -1) {
            mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
        }
        let result = '';
        for (var i = (length || 5); i > 0; --i) {
            result += mask[Math.floor(Math.random() * mask.length)];
        }
        return result;
    }
}
exports._ = new Helper();
