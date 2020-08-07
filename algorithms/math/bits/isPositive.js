/**
 * This method determines if the number is positive. It is based on the fact 
 * that all positive numbers have their leftmost bit to be set to 0. However, 
 * if the number provided is zero or negative zero, it should still return 
 * false.
 * @param {*} number 
 */

function isPositive(number) {
    if (number === 0)
        return false;
    if (1 << 31 & number !== 0)
        return false;
    return true;
}