
/**
 * we just keep dividing the number by two unless the number becomes 1 and 
 * every time we do so we check that remainder after division is always 0. 
 * Otherwise the number can't be a power of two.
 * @param {*} num 
 */
function isPowerOfTwo(num) {
    if (num < 1)
        return false;

    let number = num;
    while (number !== 1) {
        if (number % 2 !== 0) {
            return false;
        }
        number /= 2;
    }
    return true;
}