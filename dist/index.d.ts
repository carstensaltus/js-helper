export declare class Helper implements IHelper {
    /**
     * Checks if a value is undefined.
     *
     * @param  {any} value
     * @return {boolean}
     */
    isUndefined(value: any): boolean;
    /**
     * Trims a string.
     *
     * @param  {string} value
     * @return {string}
     */
    trim(value: string): string;
    /**
     * Uppercase a string.
     *
     * https://www.w3schools.com/jsref/jsref_touppercase.asp
     *
     * @param  {string} str
     * @return {string}
     */
    upperCase(str: string): string;
    /**
     * lower case a string.
     *
     * @param  {string} str
     * @return {string}
     */
    lowerCase(str: string): string;
    /**
     * Turn a string into an array split by a character.
     *
     * @param  {string} str
     * @param  {string} character
     * @return {Array<string>}
     */
    explode(str: string, character: string): Array<string>;
    /**
     * Join an array into a string with a character.
     *
     * @param  {Array<string|number>} arr
     * @param  {string} character
     * @return {string}
     */
    implode(arr: Array<string | number>, character: string): string;
    /**
     * Creates a duplicate-free version of an array, using SameValueZero for
     * equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the
     * order they occur in the array.
     *
     * @param  {Array<any>} value
     * @return {Array<any>}
     */
    unique(value: Array<any>): Array<any>;
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
    merge(objectA: any, objectB: any): any;
    /**
     * Creates a shallow clone of value.
     *
     * https://lodash.com/docs/#clone
     *
     * @param  {any} value
     * @return {any}
     */
    clone(value: any): any;
    /**
     * Returns a random string.
     *
     * @param  {number} length - Optional, defaults to 5
     * @return {string}
     */
    randomStr(length?: number): string;
}
export interface IHelper {
    isUndefined(value: any): boolean;
    trim(value: string): string;
    upperCase(str: string): string;
    lowerCase(str: string): string;
    explode(str: string, character: string): Array<string>;
    implode(arr: Array<string | number>, character: string): string;
    unique(value: Array<any>): Array<any>;
    merge(objectA: any, objectB: any): any;
    clone(value: any): any;
    randomStr(length?: number): string;
}
export declare const _: IHelper;
