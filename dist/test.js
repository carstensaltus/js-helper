"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha = require("mocha");
var chai = require("chai");
var index_1 = require("./index");
mocha.describe('utils/helper', function () {
    //----------------------------------------------------------------------------
    // isUndefined()
    //----------------------------------------------------------------------------
    mocha.it('isUndefined(undefined) should return "true"', function (done) {
        var a;
        var b = index_1._.isUndefined(a);
        if (chai.expect(b).to.eql(true)) {
            done();
        }
        else {
            done(new Error());
        }
    });
    mocha.it('isUndefined(231) should return "false"', function (done) {
        if (chai.expect(index_1._.isUndefined(231)).to.eql(false)) {
            done();
        }
        else {
            done(new Error());
        }
    });
    mocha.it('isUndefined(null) should return "false"', function (done) {
        if (chai.expect(index_1._.isUndefined(null)).to.eql(false)) {
            done();
        }
        else {
            done(new Error());
        }
    });
    mocha.it('isUndefined(false) should return "false"', function (done) {
        if (chai.expect(index_1._.isUndefined(false)).to.eql(false)) {
            done();
        }
        else {
            done(new Error());
        }
    });
    mocha.it('isUndefined(`undefined`) should return "false"', function (done) {
        if (chai.expect(index_1._.isUndefined('undefined')).to.eql(false)) {
            done();
        }
        else {
            done(new Error());
        }
    });
    //----------------------------------------------------------------------------
    // trim()
    //----------------------------------------------------------------------------
    mocha.it('trim(" j32lk3j4 ") should return "j32lk3j4"', function (done) {
        var b = 'j32lk3j4';
        var a = index_1._.trim(' ' + b + ' ');
        if (chai.expect(a).to.eql(b)) {
            done();
        }
        else {
            done(new Error());
        }
    });
    //----------------------------------------------------------------------------
    // upperCase()
    //----------------------------------------------------------------------------
    mocha.it('upperCase("altus") should return "ALTUS"', function (done) {
        if (chai.expect(index_1._.upperCase('altus')).to.eql('ALTUS')) {
            done();
        }
        else {
            done(new Error());
        }
    });
    //----------------------------------------------------------------------------
    // lowerCase()
    //----------------------------------------------------------------------------
    mocha.it('lowerCase("ALTUS") should return "altus"', function (done) {
        if (chai.expect(index_1._.lowerCase('ALTUS')).to.eql('altus')) {
            done();
        }
        else {
            done(new Error());
        }
    });
    //----------------------------------------------------------------------------
    // implode()
    //----------------------------------------------------------------------------
    mocha.it('implode(["a", "b", "c"], ",") should return "a,b,c"', function (done) {
        var a = index_1._.implode(['a', 'b', 'c'], ',');
        var b = 'a,b,c';
        if (chai.expect(a).to.eql(b)) {
            done();
        }
        else {
            done(new Error());
        }
    });
    mocha.it('implode([111, 222, 333], ",") should return "111,222,333"', function (done) {
        var a = index_1._.implode([111, 222, 333], ',');
        var b = '111,222,333';
        if (chai.expect(a).to.eql(b)) {
            done();
        }
        else {
            done(new Error());
        }
    });
    //----------------------------------------------------------------------------
    // explode()
    //----------------------------------------------------------------------------
    mocha.it('explode("a,b,c", ",") should return "[`a`, `b`, `c`]"', function (done) {
        var a = index_1._.explode('a,b,c', ',');
        var b = ['a', 'b', 'c'];
        if (chai.expect(a).to.eql(b)) {
            done();
        }
        else {
            done(new Error());
        }
    });
    //----------------------------------------------------------------------------
    // unique()
    //----------------------------------------------------------------------------
    mocha.it('unique([`a`, `b`, `c`, `c`]) should return "[`a`, `b`, `c`]"', function (done) {
        var a = index_1._.unique(['a', 'b', 'c', 'c']);
        var b = ['a', 'b', 'c'];
        if (chai.expect(a).to.eql(b)) {
            done();
        }
        else {
            done(new Error());
        }
    });
    //----------------------------------------------------------------------------
    // merge()
    //----------------------------------------------------------------------------
    mocha.it('merge({`a`: 1, `b`: 2}, {`a`: 3, `c`: `hello`}) should return "{`a`: 3, `b`: 2, `c`: `hello`}"', function (done) {
        var a = index_1._.merge({ a: 1, b: 2 }, { a: 3, c: 'hello' });
        var b = { a: 3, b: 2, c: 'hello' };
        if (chai.expect(a).to.eql(b)) {
            done();
        }
        else {
            done(new Error());
        }
    });
    //----------------------------------------------------------------------------
    // clone()
    //----------------------------------------------------------------------------
    mocha.it('clone([1, `2`]) should return "[1, `2`]"', function (done) {
        var a = index_1._.clone([1, '2']);
        var b = [1, '2'];
        if (chai.expect(a).to.eql(b)) {
            done();
        }
        else {
            done(new Error());
        }
    });
    //----------------------------------------------------------------------------
    // randomStr()
    //----------------------------------------------------------------------------
    mocha.it('randomStr() should return a random string of 5 characters', function (done) {
        var a = index_1._.randomStr();
        if (chai.expect(a.length).to.eql(5)) {
            done();
        }
        else {
            done(new Error());
        }
    });
    mocha.it('randomStr(7) should return a random string of 7 characters', function (done) {
        var a = index_1._.randomStr(7);
        if (chai.expect(a.length).to.eql(7)) {
            done();
        }
        else {
            done(new Error());
        }
    });
});
