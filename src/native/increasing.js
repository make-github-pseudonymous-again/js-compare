/**
 * Compare two objects in increasing order using the native comparison and
 * equality operators.
 *
 * @param {Object} a - The first parameter.
 * @param {Object} b - The second parameter.
 * @return {Number} -1 if a < b, 0 if a === b, and 1 otherwise.
 */
const increasing = ( a , b ) => ( a < b ) ? -1 : ( a === b ) ? 0 : 1 ;
export default increasing;
