/**
 * Generates a binary comparator
 * from a binary comparator and a function.
 *
 * @param {Function} compare - The function used to order values.
 * @param {Function} callable - The function that generates values used in the comparison.
 * @return {Function} The function that orders objects by value.
 */
const fn = (compare, callable) => (a, b) => compare(callable(a), callable(b));
export default fn;
