:balance_scale: js-compare
==

This package is deprecated. Please use a combination of

  - [`Math.sign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign):
    For `sign`.
  - [@total-order/primitive](https://github.com/total-order/primitive):
    To compare numbers, strings, and bigints.
  - [@total-order/lex](https://github.com/total-order/lex):
    For all lexicographical ordering functions.
  - [@total-order/key](https://github.com/total-order/key):
    For `key` (was `fn`), `len`, and `prop` (was `attr`).
  - [@total-order/reversed](https://github.com/total-order/reversed):
    For `reversed` (was `reverse`).

New functionality has been made available as well:

  - [@total-order/date](https://github.com/total-order/date):
    To compare `Date` objects.
  - [@total-order/iter](https://github.com/total-order/iter):
    To compare `Iterable` or `Iterator` objects lexicographically.
  - [total-order](https://github.com/total-order/any):
    To compare arbitrary JavaScript values.
