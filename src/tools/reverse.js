/**
 * Reverse the order of a comparator.
 *
 * @param {Function} compare - The comparator to reverse.
 * @return {Function} A function f such that compare(a,b) === f(b,a) for all a,b.
 */
const reverse = compare => ( a , b ) => compare( b , a ) ;
export default reverse;
