"use strict";

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/lexicographical */
		/* js/src/lexicographical/colexicographical.js */

		/**
   * Generates a binary colexicographical comparator
   * from a binary comparator.
   *
   * https://en.wikipedia.org/wiki/Lexicographical_order#Colexicographic_order
   *
   * compare( a, b ) should always return
   *   - a negative value if a < b
   *   - a positive value if a > b
   *   - zero if a === b
   *
   * compare should express an increasing ordering
   */

		var colexicographical = function colexicographical(compare) {

			/**
    * Compares 2 arrays a and b colexicographically.
    */

			return function (a, b) {

				var m = a.length;
				var n = b.length;

				var len = Math.min(m, n);

				for (var i = 1; i <= len; ++i) {

					var d = compare(a[m - i], b[n - i]);

					if (d !== 0) return d;
				}

				return m - n;
			};
		};

		exports.colexicographical = colexicographical;

		/* js/src/lexicographical/fixed */
		/* js/src/lexicographical/fixed/fixedcolexicographical.js */

		/**
   * Generates a binary colexicographical comparator for fixed size arrays.
   *
   * https://en.wikipedia.org/wiki/Lexicographical_order#Colexicographic_order
   *
   * compare( a , b ) should always return
   *   - a negative value if a < b
   *   - a positive value if a > b
   *   - zero if a === b
   *
   */

		var fixedcolexicographical = function fixedcolexicographical(compare, len) {

			/**
    * Compares 2 fixed size arrays a and b of size len colexicographically.
    */

			return function (a, b) {

				for (var i = len; i--;) {

					var d = compare(a[i], b[i]);

					if (d !== 0) return d;
				}

				return 0;
			};
		};

		exports.fixedcolexicographical = fixedcolexicographical;

		/* js/src/lexicographical/fixed/fixedlexicographical.js */

		/**
   * Generates a binary lexicographical comparator for fixed size arrays.
   *
   * https://en.wikipedia.org/wiki/Lexicographical_order
   *
   * compare( a , b ) should always return
   *   - a negative value if a < b
   *   - a positive value if a > b
   *   - zero if a === b
   *
   */

		var fixedlexicographical = function fixedlexicographical(compare, len) {

			/**
    * Compares 2 fixed size arrays a and b of size len lexicographically.
    */

			return function (a, b) {

				for (var i = 0; i < len; ++i) {

					var d = compare(a[i], b[i]);

					if (d !== 0) return d;
				}

				return 0;
			};
		};

		exports.fixedlexicographical = fixedlexicographical;

		/* js/src/lexicographical/lexicographical.js */

		/**
   * Generates a binary lexicographical comparator
   * from a binary comparator.
   *
   * https://en.wikipedia.org/wiki/Lexicographical_order
   *
   * compare( a, b ) should always return
   *   - a negative value if a < b
   *   - a positive value if a > b
   *   - zero if a === b
   *
   * compare should express an increasing ordering
   */

		var lexicographical = function lexicographical(compare) {

			/**
    * Compares 2 arrays a and b lexicographically.
    */

			return function (a, b) {

				var m = a.length;
				var n = b.length;

				var len = Math.min(m, n);

				for (var i = 0; i < len; ++i) {

					var d = compare(a[i], b[i]);

					if (d !== 0) return d;
				}

				return m - n;
			};
		};

		exports.lexicographical = lexicographical;

		/* js/src/lexicographical/quasi */
		/* js/src/lexicographical/quasi/quasicolexicographical.js */

		/**
   * Generates a binary quasicolexicographical comparator
   * from a binary comparator.
   *
   * https://en.wikipedia.org/wiki/Lexicographical_order#Quasi-lexicographic_order
   * https://en.wikipedia.org/wiki/Lexicographical_order#Colexicographic_order
   *
   * compare( a, b ) should always return
   *   - a negative value if a < b
   *   - a positive value if a > b
   *   - zero if a === b
   *
   * compare should express an increasing ordering
   */

		var quasicolexicographical = function quasicolexicographical(compare) {

			/**
    * Compares 2 arrays a and b quasicolexicographically.
    */

			return function (a, b) {

				var m = a.length;
				var n = b.length;

				if (m !== n) return m - n;

				var len = Math.min(m, n);

				for (var i = 1; i <= len; ++i) {

					var d = compare(a[m - i], b[n - i]);

					if (d !== 0) return d;
				}

				return 0;
			};
		};

		exports.quasicolexicographical = quasicolexicographical;

		/* js/src/lexicographical/quasi/quasilexicographical.js */

		/**
   * Generates a binary quasilexicographical comparator
   * from a binary comparator.
   *
   * https://en.wikipedia.org/wiki/Lexicographical_order#Quasi-lexicographic_order
   *
   * compare( a, b ) should always return
   *   - a negative value if a < b
   *   - a positive value if a > b
   *   - zero if a === b
   *
   * compare should express an increasing ordering
   */

		var quasilexicographical = function quasilexicographical(compare) {

			/**
    * Compares 2 arrays a and b quasilexicographically.
    */

			return function (a, b) {

				var m = a.length;
				var n = b.length;

				if (m !== n) return m - n;

				var len = Math.min(m, n);

				for (var i = 0; i < len; ++i) {

					var d = compare(a[i], b[i]);

					if (d !== 0) return d;
				}

				return 0;
			};
		};

		exports.quasilexicographical = quasilexicographical;

		/* js/src/lexicographical/ranged */
		/* js/src/lexicographical/ranged/rangedcolexicographical.js */

		/**
   * Generates a binary colexicographical comparator for ranges of arrays.
   *
   * https://en.wikipedia.org/wiki/Lexicographical_order#Colexicographic_order
   *
   * compare( a , b ) should always return
   *   - a negative value if a < b
   *   - a positive value if a > b
   *   - zero if a === b
   *
   */

		var rangedcolexicographical = function rangedcolexicographical(compare, begin, end) {

			/**
    * Compares the range [begin, end[ of 2 arrays a and b colexicographically.
    */

			return function (a, b) {

				for (var i = end; i-- > begin;) {

					var d = compare(a[i], b[i]);

					if (d !== 0) return d;
				}

				return 0;
			};
		};

		exports.rangedcolexicographical = rangedcolexicographical;

		/* js/src/lexicographical/ranged/rangedlexicographical.js */

		/**
   * Generates a binary lexicographical comparator for ranges of arrays.
   *
   * https://en.wikipedia.org/wiki/Lexicographical_order
   *
   * compare( a , b ) should always return
   *   - a negative value if a < b
   *   - a positive value if a > b
   *   - zero if a === b
   *
   */

		var rangedlexicographical = function rangedlexicographical(compare, begin, end) {

			/**
    * Compares the range [begin, end[ of 2 arrays a and b lexicographically.
    */

			return function (a, b) {

				for (var i = begin; i < end; ++i) {

					var d = compare(a[i], b[i]);

					if (d !== 0) return d;
				}

				return 0;
			};
		};

		exports.rangedlexicographical = rangedlexicographical;

		/* js/src/native */
		/* js/src/native/decreasing.js */

		var decreasing = function decreasing(a, b) {
			return a > b ? -1 : a === b ? 0 : 1;
		};

		exports.decreasing = decreasing;

		/* js/src/native/increasing.js */

		var increasing = function increasing(a, b) {
			return a < b ? -1 : a === b ? 0 : 1;
		};

		exports.increasing = increasing;

		/* js/src/proxy */
		/* js/src/proxy/attr */
		/* js/src/proxy/attr/attr.js */

		var attr = function attr(compare, key) {
			return function (a, b) {
				return compare(a[key], b[key]);
			};
		};

		exports.attr = attr;

		/* js/src/proxy/attr/len.js */

		var len = function len(compare) {
			return function (a, b) {
				return compare(a.length, b.length);
			};
		};

		exports.len = len;

		/* js/src/proxy/fn.js */

		var fn = function fn(compare, callable) {
			return function (a, b) {
				return compare(callable(a), callable(b));
			};
		};

		exports.fn = fn;

		/* js/src/tools */
		/* js/src/tools/reverse.js */

		var reverse = function reverse(compare) {
			return function (a, b) {
				return compare(b, a);
			};
		};

		exports.reverse = reverse;

		/* js/src/tools/sign.js */

		var sign = function sign(v) {
			return v < 0 ? -1 : v > 0 ? 1 : 0;
		};

		exports.sign = sign;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-compare", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["compare"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-compare");
})();