/**
 * This method shifts original number by one bit to the right. Thus all binary 
 * number components (powers of two) are being divided by two and thus the 
 * number itself is being divided by two without remainder.
 * @param {*} number 
 */
function multiplyByTwo(number) {
    return number >> 1;
}