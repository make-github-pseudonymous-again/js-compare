import test from 'ava';
import * as compare from '../../src/index.js';

test('decreasing', (t) => {
	t.true(compare.decreasing(Number.POSITIVE_INFINITY, 0) < 0, 'double <');
	t.true(
		compare.decreasing(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY) ===
			0,
		'double =',
	);
	t.true(compare.decreasing(0, Number.POSITIVE_INFINITY) > 0, 'double >');

	t.true(compare.decreasing('abc', 'ab') < 0, 'string <');
	t.true(compare.decreasing('abc', 'abc') === 0, 'string =');
	t.true(compare.decreasing('ab', 'abc') > 0, 'string >');

	t.true(compare.decreasing(Number.NaN, Number.NaN) !== 0, 'NaN != NaN');
	t.true(compare.decreasing(Number.NaN, 0) !== 0, 'NaN != 0');
	t.true(compare.decreasing(0, Number.NaN) !== 0, '0 != NaN');
	t.true(
		compare.decreasing(Number.NaN, Number.POSITIVE_INFINITY) !== 0,
		'NaN != Infinity',
	);
	t.true(
		compare.decreasing(Number.POSITIVE_INFINITY, Number.NaN) !== 0,
		'Infinity != NaN',
	);
	t.true(
		compare.decreasing(Number.NaN, Number.NEGATIVE_INFINITY) !== 0,
		'NaN != -Infinity',
	);
	t.true(
		compare.decreasing(Number.NEGATIVE_INFINITY, Number.NaN) !== 0,
		'-Infinity != NaN',
	);

	t.true(
		compare.decreasing(new Date(1), new Date(1)) !== 0,
		'this library is not suitable for date value equality checking',
	);
	t.true(compare.decreasing(new Date(0), new Date(1)) > 0, 'date >');
	t.true(compare.decreasing(new Date(1), new Date(0)) < 0, 'date <');
});
