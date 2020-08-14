/**
 * This method shifts original number by one bit to the left. Thus all binary 
 * number components (powers of two) are being multiplying by two and thus the 
 * number itself is being multiplied by two.
 * @param {*} number 
 */
function multiplyByTwo(number) {
    return number << 1;
}