/**
 * Generates a binary attribute comparator
 * from a binary comparator and an attribute key.
 *
 * @param {Function} compare - The function used to order attributes.
 * @param {Object} key - The key of the attribute used in the comparison.
 * @return {Function} The function that orders objects by attribute.
 */
const attr = (compare, key) => (a, b) => compare(a[key], b[key]);
export default attr;
