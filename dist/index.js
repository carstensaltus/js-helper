"use strict";
// TODO only load relevant lodash functions
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var Helper = (function () {
    function Helper() {
    }
    /**
     * Checks if a value is undefined.
     *
     * @param  {any} value
     * @return {boolean}
     */
    Helper.prototype.isUndefined = function (value) {
        return typeof value === 'undefined';
    };
    /**
     * Trims a string.
     *
     * @param  {string} value
     * @return {string}
     */
    Helper.prototype.trim = function (value) {
        return value.trim();
    };
    /**
     * Uppercase a string.
     *
     * https://www.w3schools.com/jsref/jsref_touppercase.asp
     *
     * @param  {string} str
     * @return {string}
     */
    Helper.prototype.upperCase = function (str) {
        return str.toUpperCase();
    };
    /**
     * lower case a string.
     *
     * @param  {string} str
     * @return {string}
     */
    Helper.prototype.lowerCase = function (str) {
        return str.toLowerCase();
    };
    /**
     * Turn a string into an array split by a character.
     *
     * @param  {string} str
     * @param  {string} character
     * @return {Array<string>}
     */
    Helper.prototype.explode = function (str, character) {
        return str.split(character);
    };
    /**
     * Join an array into a string with a character.
     *
     * @param  {Array<string|number>} arr
     * @param  {string} character
     * @return {string}
     */
    Helper.prototype.implode = function (arr, character) {
        return arr.join(character);
    };
    /**
     * Creates a duplicate-free version of an array, using SameValueZero for
     * equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the
     * order they occur in the array.
     *
     * @param  {Array<any>} value
     * @return {Array<any>}
     */
    Helper.prototype.unique = function (value) {
        return lodash_1.uniq(value);
    };
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
    Helper.prototype.merge = function (objectA, objectB) {
        return lodash_1.merge(objectA, objectB);
    };
    /**
     * Creates a shallow clone of value.
     *
     * https://lodash.com/docs/#clone
     *
     * @param  {any} value
     * @return {any}
     */
    Helper.prototype.clone = function (value) {
        return lodash_1.clone(value);
    };
    /**
     * Returns a random string.
     *
     * @param  {number} length - Optional, defaults to 5
     * @return {string}
     */
    Helper.prototype.randomStr = function (length) {
        var str = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < (length || 5); i++) {
            str += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return str;
    };
    return Helper;
}());
exports.Helper = Helper;
exports._ = new Helper();
