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
    randomStr(length?: number, chars?: string): string;
}
export declare const _: IHelper;
