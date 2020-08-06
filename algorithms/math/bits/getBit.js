/**
 * shifts the relevant bit to the zeroth position. Then we perform AND operation
 * with one which has bit pattern like 0001. This clears all bits from the 
 * original number except the relevant one. If the relevant bit is one, the 
 * result is 1, otherwise the result is 0.
 * @param {*} number 
 * @param {*} position 
 */

function getBit(number, position) {
    //Shift right by position then take &
    return (number >> position) & 1;
}