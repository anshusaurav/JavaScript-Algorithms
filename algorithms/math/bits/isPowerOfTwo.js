/**
 * This method checks if a number provided is power of two. It uses the 
 * following property. 
 *  Let's say that powerNumber is a number that has been formed as a power of 
 *  two (i.e. 2, 4, 8, 16 etc.). Then if we'll do & operation between 
 *  powerNumber and powerNumber - 1 it will return 0 (in case if number is 
 *  power of two).
 */
function isPowerOfTwo(a) {
    return (a & (a - 1)) === 0
}