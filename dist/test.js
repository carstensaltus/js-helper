'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mocha = require('mocha');
var chai = require('chai');
var index_1 = require("./index");
mocha.describe('js-helper', function () {
    mocha.describe('isUndefined()', function () {
        mocha.it('isUndefined(undefined) should return "true"', function () {
            var a;
            var b = index_1._.isUndefined(a);
            chai.expect(b).to.eql(true);
        });
        mocha.it('isUndefined(231) should return "false"', function () {
            chai.expect(index_1._.isUndefined(231)).to.eql(false);
        });
        mocha.it('isUndefined(null) should return "false"', function () {
            chai.expect(index_1._.isUndefined(null)).to.eql(false);
        });
        mocha.it('isUndefined(false) should return "false"', function () {
            chai.expect(index_1._.isUndefined(false)).to.eql(false);
        });
        mocha.it('isUndefined(`undefined`) should return "false"', function () {
            chai.expect(index_1._.isUndefined('undefined')).to.eql(false);
        });
    });
    mocha.describe('trim()', function () {
        mocha.it('trim(" j32lk3j4 ") should return "j32lk3j4"', function () {
            var b = 'j32lk3j4';
            var a = index_1._.trim(' ' + b + ' ');
            chai.expect(a).to.eql(b);
        });
    });
    mocha.describe('upperCase()', function () {
        mocha.it('upperCase("altus") should return "ALTUS"', function () {
            chai.expect(index_1._.upperCase('altus')).to.eql('ALTUS');
        });
    });
    mocha.describe('lowerCase()', function () {
        mocha.it('lowerCase("ALTUS") should return "altus"', function () {
            chai.expect(index_1._.lowerCase('ALTUS')).to.eql('altus');
        });
    });
    mocha.describe('implode()', function () {
        mocha.it('implode(["a", "b", "c"], ",") should return "a,b,c"', function () {
            var a = index_1._.implode(['a', 'b', 'c'], ',');
            var b = 'a,b,c';
            chai.expect(a).to.eql(b);
        });
        mocha.it('implode([111, 222, 333], ",") should return "111,222,333"', function () {
            var a = index_1._.implode([111, 222, 333], ',');
            var b = '111,222,333';
            chai.expect(a).to.eql(b);
        });
    });
    mocha.describe('explode()', function () {
        mocha.it('explode("a,b,c", ",") should return "[`a`, `b`, `c`]"', function () {
            var a = index_1._.explode('a,b,c', ',');
            var b = ['a', 'b', 'c'];
            chai.expect(a).to.eql(b);
        });
    });
    mocha.describe('unique()', function () {
        mocha.it('unique([`a`, `b`, `c`, `c`]) should return "[`a`, `b`, `c`]"', function () {
            var a = index_1._.unique(['a', 'b', 'c', 'c']);
            var b = ['a', 'b', 'c'];
            chai.expect(a).to.eql(b);
        });
    });
    mocha.describe('merge()', function () {
        mocha.it('merge({`a`: 1, `b`: 2}, {`a`: 3, `c`: `hello`}) should return "{`a`: 3, `b`: 2, `c`: `hello`}"', function () {
            var a = index_1._.merge({ a: 1, b: 2 }, { a: 3, c: 'hello' });
            var b = { a: 3, b: 2, c: 'hello' };
            chai.expect(a).to.eql(b);
        });
    });
    mocha.describe('clone()', function () {
        mocha.it('clone([1, `2`]) should return "[1, `2`]"', function () {
            var a = index_1._.clone([1, '2']);
            var b = [1, '2'];
            chai.expect(a).to.eql(b);
        });
    });
    mocha.describe('randomStr()', function () {
        mocha.it('randomStr() should return a random string of 5 characters', function () {
            var a = index_1._.randomStr();
            chai.expect(a.length).to.eql(5);
        });
        mocha.it('randomStr(7) should return a random string of 7 characters', function () {
            var a = index_1._.randomStr(7);
            chai.expect(a.length).to.eql(7);
        });
    });
});
