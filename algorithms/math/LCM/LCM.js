/**
 * Returns smallest positive integer that is divisible by both a and b
 * @param {*} a 
 * @param {*} b 
 */
function leastCommonMultiple(a, b) {
    if (a == 0 || b == 0)
        return 0;
    return a * b / (euclideanAlgorithm(a, b));
}