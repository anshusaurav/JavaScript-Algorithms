/**
 * his method make positive numbers to be negative and backwards. To do so it 
 * uses "Twos Complement" approach which does it by inverting all of the bits 
 * of the number and adding 1 to it.
 * @param {*} number 
 */
function switchSign(number) {
    return ~number + 1;
}