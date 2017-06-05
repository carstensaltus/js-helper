// TODO only load relevant lodash functions

import {uniq, merge, clone} from 'lodash';

export class Helper implements IHelper {

	/**
	 * Checks if a value is undefined.
	 *
	 * @param  {any} value
	 * @return {boolean}
	 */
	public isUndefined (value: any): boolean {
		return typeof value === 'undefined';
	}

	/**
	 * Trims a string.
	 *
	 * @param  {string} value
	 * @return {string}
	 */
	public trim (value: string): string {
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
	public upperCase (str: string): string {
		return str.toUpperCase();
	}

	/**
	 * lower case a string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	public lowerCase (str: string): string {
		return str.toLowerCase();
	}

	/**
	 * Turn a string into an array split by a character.
	 *
	 * @param  {string} str
	 * @param  {string} character
	 * @return {Array<string>}
	 */
	public explode (str: string, character: string): Array<string> {
		return str.split(character);
	}

	/**
	 * Join an array into a string with a character.
	 *
	 * @param  {Array<string|number>} arr
	 * @param  {string} character
	 * @return {string}
	 */
	public implode (arr: Array<string|number>, character: string): string {
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
	public unique (value: Array<any>): Array<any> {
		return uniq(value);
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
	public merge (objectA: any, objectB: any): any {
		return merge(objectA, objectB);
	}

	/**
	 * Creates a shallow clone of value.
	 *
	 * https://lodash.com/docs/#clone
	 *
	 * @param  {any} value
	 * @return {any}
	 */
	public clone (value: any): any {
		return clone(value);
	}

	/**
	 * Returns a random string.
	 *
	 * @param  {number} length - Optional, defaults to 5
	 * @return {string}
	 */
	public randomStr (length?: number): string {
    let str: string = '';
    let possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < (length || 5); i++) {
      str += possible.charAt(Math.floor(Math.random() * possible.length));
		}
    return str;
	}

}

export interface IHelper {
	isUndefined (value: any): boolean;
	trim (value: string): string;
	upperCase (str: string): string;
	lowerCase (str: string): string;
	explode (str: string, character: string): Array<string>;
	implode (arr: Array<string|number>, character: string): string;
	unique (value: Array<any>): Array<any>;
	merge (objectA: any, objectB: any): any;
	clone (value: any): any;
	randomStr (length?: number): string;
}

export const _: IHelper = new Helper();
