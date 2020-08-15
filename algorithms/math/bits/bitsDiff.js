/**
 * This methods outputs the number of bits required to convert one number to 
 * another. This makes use of property that when numbers are XOR-ed the result 
 * will be number of different bits.
 * @param {*} a 
 * @param {*} b 
 */
function bitsDiff(a, b) {
    return countSetBits(a ^ b);
}