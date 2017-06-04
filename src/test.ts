import * as mocha from 'mocha';
import * as chai from 'chai';
import {_} from './index';

mocha.describe('utils/helper', () => {

	//----------------------------------------------------------------------------
	// isUndefined()
	//----------------------------------------------------------------------------

	mocha.it('isUndefined(undefined) should return "true"', (done) => {
		let a: any;
		let b: boolean = _.isUndefined(a);

		if (chai.expect(b).to.eql(true)) {
			done();
		} else {
			done(new Error());
		}
	});

	mocha.it('isUndefined(231) should return "false"', (done) => {
		if (chai.expect(_.isUndefined(231)).to.eql(false)) {
			done();
		} else {
			done(new Error());
		}
	});

	mocha.it('isUndefined(null) should return "false"', (done) => {
		if (chai.expect(_.isUndefined(null)).to.eql(false)) {
			done();
		} else {
			done(new Error());
		}
	});

	mocha.it('isUndefined(false) should return "false"', (done) => {
		if (chai.expect(_.isUndefined(false)).to.eql(false)) {
			done();
		} else {
			done(new Error());
		}
	});

	mocha.it('isUndefined(`undefined`) should return "false"', (done) => {
		if (chai.expect(_.isUndefined('undefined')).to.eql(false)) {
			done();
		} else {
			done(new Error());
		}
	});

	//----------------------------------------------------------------------------
	// trim()
	//----------------------------------------------------------------------------

	mocha.it('trim(" j32lk3j4 ") should return "j32lk3j4"', (done) => {
		let b: string = 'j32lk3j4';
		let a: string = _.trim(' ' + b + ' ');

		if (chai.expect(a).to.eql(b)) {
			done();
		} else {
			done(new Error());
		}
	});

	//----------------------------------------------------------------------------
	// upperCase()
	//----------------------------------------------------------------------------

	mocha.it('upperCase("altus") should return "ALTUS"', (done) => {
		if (chai.expect(_.upperCase('altus')).to.eql('ALTUS')) {
			done();
		} else {
			done(new Error());
		}
	});

	//----------------------------------------------------------------------------
	// lowerCase()
	//----------------------------------------------------------------------------

	mocha.it('lowerCase("ALTUS") should return "altus"', (done) => {
		if (chai.expect(_.lowerCase('ALTUS')).to.eql('altus')) {
			done();
		} else {
			done(new Error());
		}
	});

	//----------------------------------------------------------------------------
	// implode()
	//----------------------------------------------------------------------------

	mocha.it('implode(["a", "b", "c"], ",") should return "a,b,c"', (done) => {
		let a: string = _.implode(['a', 'b', 'c'], ',');
		let b: string = 'a,b,c';

		if (chai.expect(a).to.eql(b)) {
			done();
		} else {
			done(new Error());
		}
	});

	mocha.it('implode([111, 222, 333], ",") should return "111,222,333"', (done) => {
		let a: string = _.implode([111, 222, 333], ',');
		let b: string = '111,222,333';

		if (chai.expect(a).to.eql(b)) {
			done();
		} else {
			done(new Error());
		}
	});

	//----------------------------------------------------------------------------
	// explode()
	//----------------------------------------------------------------------------

	mocha.it('explode("a,b,c", ",") should return "[`a`, `b`, `c`]"', (done) => {
		let a: Array<string> = _.explode('a,b,c', ',');
		let b: Array<string> = ['a', 'b', 'c'];

		if (chai.expect(a).to.eql(b)) {
			done();
		} else {
			done(new Error());
		}
	});

	//----------------------------------------------------------------------------
	// unique()
	//----------------------------------------------------------------------------

	mocha.it('unique([`a`, `b`, `c`, `c`]) should return "[`a`, `b`, `c`]"', (done) => {
		let a: Array<string> = _.unique(['a', 'b', 'c', 'c']);
		let b: Array<string> = ['a', 'b', 'c'];

		if (chai.expect(a).to.eql(b)) {
			done();
		} else {
			done(new Error());
		}
	});

	//----------------------------------------------------------------------------
	// merge()
	//----------------------------------------------------------------------------

	mocha.it('merge({`a`: 1, `b`: 2}, {`a`: 3, `c`: `hello`}) should return "{`a`: 3, `b`: 2, `c`: `hello`}"', (done) => {
		let a: Object = _.merge({a: 1, b: 2}, {a: 3, c: 'hello'});
		let b: Object = {a: 3, b: 2, c: 'hello'};

		if (chai.expect(a).to.eql(b)) {
			done();
		} else {
			done(new Error());
		}
	});

	//----------------------------------------------------------------------------
	// clone()
	//----------------------------------------------------------------------------

	mocha.it('clone([1, `2`]) should return "[1, `2`]"', (done) => {
		let a: Array<string|number> = _.clone([1, '2']);
		let b: Array<string|number> = [1, '2'];

		if (chai.expect(a).to.eql(b)) {
			done();
		} else {
			done(new Error());
		}
	});

	//----------------------------------------------------------------------------
	// randomStr()
	//----------------------------------------------------------------------------

	mocha.it('randomStr() should return a random string of 5 characters', (done) => {
		let a: string = _.randomStr();

		if (chai.expect(a.length).to.eql(5)) {
			done();
		} else {
			done(new Error());
		}
	});

	mocha.it('randomStr(7) should return a random string of 7 characters', (done) => {
		let a: string = _.randomStr(7);

		if (chai.expect(a.length).to.eql(7)) {
			done();
		} else {
			done(new Error());
		}
	});

});
