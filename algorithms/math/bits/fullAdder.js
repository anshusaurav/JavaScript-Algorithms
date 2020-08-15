/**
 *  It's using the boolean logic to cover all possible cases of adding two input
 *  bits: with and without a "carry bit" from adding the previous 
 *  less-significant stage.
 * @param {*} a 
 * @param {*} b 
 */
function fullAdder(a, b) {
    let res = 0;
    let carry = 0;

    for (let i = 0; i < 32; i++) {
        const ai = getBit(a, i)
        const bi = getBit(b, i);
        const carryIn = carry;

        const binSum = ai ^ bi;

        const bitSum = binSum ^ carryIn;

        const carryOut = (binSum & carryIn) || (ai & bi);

        carry = carryOut;
        res |= bitSum << i;
    }
    return res;
}