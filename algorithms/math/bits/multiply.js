/**
 * Multiply two signed numbers using bitwise operations.
 *
 * If a is zero or b is zero or if both a and b are zeros:
 * multiply(a, b) = 0
 *
 * If b is even:
 * multiply(a, b) = multiply(2a, b/2)
 *
 * If b is odd and b is positive:
 * multiply(a, b) = multiply(2a, (b-1)/2) + a
 *
 * If b is odd and b is negative:
 * multiply(a, b) = multiply(2a, (b+1)/2) - a 
 * @param {*} a 
 * @param {*} b 
 */
function multiply(a, b) {
    if (b === 0 || a === 0) {
        return 0;
    }

    // Otherwise we will have four different cases that are described above.
    const multiplyByOddPositive = () => multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;
    const multiplyByOddNegative = () => multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;

    const multiplyByEven = multiply(multiplyByTwo(a), divideByTwo(b));
    const multiplyByOdd = (isPositive(b) ? multiplyByOddPositive() : multiplyByOddNegative());

    return isEven(b) ? multiplyByEven : multiplyByOdd;
}