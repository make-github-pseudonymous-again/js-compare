/**
 * Generates a binary length comparator
 * from a binary comparator.
 *
 * @param {Function} compare - The function used to order lengths.
 * @return {Function} The function that orders objects by length.
 */
export const len = compare => ( a , b ) => compare( a.length , b.length ) ;
