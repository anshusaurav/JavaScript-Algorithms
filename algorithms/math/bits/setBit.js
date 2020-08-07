/**
 * This method shifts 1 over by bitPosition bits, creating a value that looks 
 * like 00100. Then we perform OR operation that sets specific bit into 1 but it
 * does not affect on other bits of the number.
 * @param {*} number 
 * @param {*} position 
 */

function setBit(number, position) {
    return number | (1 << position)
}