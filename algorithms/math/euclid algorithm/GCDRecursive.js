/**
 * Recursive version of Euclidean Algorithm of finding greatest common divisor (GCD).
 * @param {*} numA 
 * @param {*} numB 
 */
function euclideanAlgorithm(numA, numB) {
    numA = Math.abs(numA);
    numB = Math.abs(numB);
    if (numB > numA) {
        let tmp = numB;
        numB = numA;
        numA = tmp;
    }
    if (numB === 0)
        return numA;
    return euclideanAlgorithm(numB, numA % numB);
}