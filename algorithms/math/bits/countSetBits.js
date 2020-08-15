/**
 * This method counts the number of set bits in a number using bitwise 
 * operators. The main idea is that we shift the number right by one bit at a 
 * time and check the result of & operation that is 1 if bit is set and 0 
 * otherwise.
 * @param {*} number 
 */
function countSetBits(number) {
    let res = 0;

    while (number) {
        res += number & 1;
        number >>= 1;

    }
    return res;
}