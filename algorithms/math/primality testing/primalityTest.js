/**
 * A primality test is an algorithm for determining whether an input number is prime.
 * @param {*} number 
 */
function isPrime(number) {
    if (number % 1 !== 0) {
        return false;
    }
    if (number <= 1)
        return false;

    if (number <= 3)
        return true;

    if (number % 2 === 0)
        return false;
    for (let i = 3; i < Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}