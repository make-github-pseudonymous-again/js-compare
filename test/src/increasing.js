import test from 'ava';
import * as compare from '../../src/index.js';

test('increasing', (t) => {
	t.true(compare.increasing(0, Number.POSITIVE_INFINITY) < 0, 'double <');
	t.true(
		compare.increasing(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY) ===
			0,
		'double =',
	);
	t.true(compare.increasing(Number.POSITIVE_INFINITY, 0) > 0, 'double >');

	t.true(compare.increasing('ab', 'abc') < 0, 'string <');
	t.true(compare.increasing('abc', 'abc') === 0, 'string =');
	t.true(compare.increasing('abc', 'ab') > 0, 'string >');

	t.true(compare.increasing(Number.NaN, Number.NaN) !== 0, 'NaN != NaN');
	t.true(compare.increasing(Number.NaN, 0) !== 0, 'NaN != 0');
	t.true(compare.increasing(0, Number.NaN) !== 0, '0 != NaN');
	t.true(
		compare.increasing(Number.NaN, Number.POSITIVE_INFINITY) !== 0,
		'NaN != Infinity',
	);
	t.true(
		compare.increasing(Number.POSITIVE_INFINITY, Number.NaN) !== 0,
		'Infinity != NaN',
	);
	t.true(
		compare.increasing(Number.NaN, Number.NEGATIVE_INFINITY) !== 0,
		'NaN != -Infinity',
	);
	t.true(
		compare.increasing(Number.NEGATIVE_INFINITY, Number.NaN) !== 0,
		'-Infinity != NaN',
	);

	t.true(
		compare.increasing(new Date(1), new Date(1)) !== 0,
		'this library is not suitable for date value equality checking',
	);
	t.true(compare.increasing(new Date(0), new Date(1)) < 0, 'date <');
	t.true(compare.increasing(new Date(1), new Date(0)) > 0, 'date >');
});
