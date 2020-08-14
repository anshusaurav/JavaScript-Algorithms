/**
 * Uses the fact that
 * For even Y
 *      X^Y = X^(Y/2) * X^(Y/2) 
 * For odd Y:
 *      X^Y = X^(Y//2) * X^(Y//2) * X
 *      where Y//2 is result of division of Y by 2 without reminder.
 * @param {*} base 
 * @param {*} power 
 */
function fastPowering(base, power) {
    if (power === 0)
        return 1;
    if (power % 2 === 0) {
        const half = fastPowering(base, power / 2);
        return half * half;
    }
    else {
        const half = fastPowering(base, Math.floor(power / 2));
        return half * half * base;
    }
}