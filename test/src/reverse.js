import test from 'ava';
import * as compare from '../../src/index.js';

import {format} from 'util';

const increasing = compare.increasing;
const decreasing = compare.decreasing;
const increasing2 = compare.reverse(decreasing);
const decreasing2 = compare.reverse(increasing);

function one(t, a, b) {
	const i = increasing(a, b);
	const d = decreasing(a, b);
	const i2 = increasing2(a, b);
	const d2 = decreasing2(a, b);
	const ri = increasing(b, a);
	const rd = decreasing(b, a);
	const ri2 = increasing2(b, a);
	const rd2 = decreasing2(b, a);

	t.deepEqual(i, i2, format('i i2 ( %f, %f)', a, b));
	t.deepEqual(-i, ri, format('-i ri ( %f, %f)', a, b));
	t.deepEqual(-i, ri2, format('-i ri2 ( %f, %f)', a, b));
	t.deepEqual(-i, d, format('-i d ( %f, %f)', a, b));
	t.deepEqual(-i, d2, format('-i d2 ( %f, %f)', a, b));
	t.deepEqual(i, rd, format('i rd ( %f, %f)', a, b));
	t.deepEqual(i, rd2, format('i rd2 ( %f, %f)', a, b));
}

one.title = (title, a, b) => title || `reverse ${a} ? ${b}`;

for (let n = 0; n < 100; ++n) {
	test(one, Math.random(), Math.random());
}
