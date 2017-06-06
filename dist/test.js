'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mocha = require('mocha');
const chai = require('chai');
const index_1 = require("./index");
mocha.describe('js-helper', () => {
    mocha.describe('isUndefined()', () => {
        mocha.it('isUndefined(undefined) should return "true"', () => {
            let a;
            let b = index_1._.isUndefined(a);
            chai.expect(b).to.eql(true);
        });
        mocha.it('isUndefined(231) should return "false"', () => {
            chai.expect(index_1._.isUndefined(231)).to.eql(false);
        });
        mocha.it('isUndefined(null) should return "false"', () => {
            chai.expect(index_1._.isUndefined(null)).to.eql(false);
        });
        mocha.it('isUndefined(false) should return "false"', () => {
            chai.expect(index_1._.isUndefined(false)).to.eql(false);
        });
        mocha.it('isUndefined(`undefined`) should return "false"', () => {
            chai.expect(index_1._.isUndefined('undefined')).to.eql(false);
        });
    });
    mocha.describe('trim()', () => {
        mocha.it('trim(" j32lk3j4 ") should return "j32lk3j4"', () => {
            let b = 'j32lk3j4';
            let a = index_1._.trim(' ' + b + ' ');
            chai.expect(a).to.eql(b);
        });
    });
    mocha.describe('upperCase()', () => {
        mocha.it('upperCase("altus") should return "ALTUS"', () => {
            chai.expect(index_1._.upperCase('altus')).to.eql('ALTUS');
        });
    });
    mocha.describe('lowerCase()', () => {
        mocha.it('lowerCase("ALTUS") should return "altus"', () => {
            chai.expect(index_1._.lowerCase('ALTUS')).to.eql('altus');
        });
    });
    mocha.describe('implode()', () => {
        mocha.it('implode(["a", "b", "c"], ",") should return "a,b,c"', () => {
            let a = index_1._.implode(['a', 'b', 'c'], ',');
            let b = 'a,b,c';
            chai.expect(a).to.eql(b);
        });
        mocha.it('implode([111, 222, 333], ",") should return "111,222,333"', () => {
            let a = index_1._.implode([111, 222, 333], ',');
            let b = '111,222,333';
            chai.expect(a).to.eql(b);
        });
    });
    mocha.describe('explode()', () => {
        mocha.it('explode("a,b,c", ",") should return "[`a`, `b`, `c`]"', () => {
            let a = index_1._.explode('a,b,c', ',');
            let b = ['a', 'b', 'c'];
            chai.expect(a).to.eql(b);
        });
    });
    mocha.describe('unique()', () => {
        mocha.it('unique([`a`, `b`, `c`, `c`]) should return "[`a`, `b`, `c`]"', () => {
            let a = index_1._.unique(['a', 'b', 'c', 'c']);
            let b = ['a', 'b', 'c'];
            chai.expect(a).to.eql(b);
        });
    });
    mocha.describe('merge()', () => {
        mocha.it('merge({`a`: 1, `b`: 2}, {`a`: 3, `c`: `hello`}) should return "{`a`: 3, `b`: 2, `c`: `hello`}"', () => {
            let a = index_1._.merge({ a: 1, b: 2 }, { a: 3, c: 'hello' });
            let b = { a: 3, b: 2, c: 'hello' };
            chai.expect(a).to.eql(b);
        });
    });
    mocha.describe('clone()', () => {
        mocha.it('clone([1, `2`]) should return "[1, `2`]"', () => {
            let a = index_1._.clone([1, '2']);
            let b = [1, '2'];
            chai.expect(a).to.eql(b);
        });
    });
    mocha.describe('randomStr()', () => {
        mocha.it('randomStr() should return a random string of 5 characters', () => {
            let a = index_1._.randomStr();
            chai.expect(a.length).to.eql(5);
        });
        mocha.it('randomStr(7) should return a random string of 7 characters', () => {
            let a = index_1._.randomStr(7);
            chai.expect(a.length).to.eql(7);
        });
    });
});
