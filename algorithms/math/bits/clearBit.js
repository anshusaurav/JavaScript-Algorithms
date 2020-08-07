/**
 * This method shifts 1 over by bitPosition bits, creating a value that looks 
 * like 00100. Than it inverts this mask to get the number that looks like 
 * 11011. Then AND operation is being applied to both the number and the mask. 
 * That operation unsets the bit.
 * @param {*} number 
 * @param {*} position 
 */

function setBit(number, position) {
    return number & (~(1 << position))
}