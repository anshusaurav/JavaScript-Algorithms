/**
 * This method multiplies two integer numbers using bitwise operators. This 
 * method is based on that "Every number can be denoted as the sum of powers 
 * of 2".
 * The main idea of bitwise multiplication is that every number may be split to 
 * the sum of powers of two
 * @param {*} a 
 * @param {*} b 
 */
function multiplyUnsigned(a, b) {
    let res = 0;
    let tmp = b;
    let index = 0;
    while (tmp !== 0) {
        if (tmp & 1) {
            res += (a << index)
        }
        index += 1;
        tmp >>= 1;
    }
    return res;
}
