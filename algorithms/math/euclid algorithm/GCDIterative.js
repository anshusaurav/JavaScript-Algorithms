/**
 * Iterative version of Euclidean Algorithm of finding greatest common divisor (GCD).
 * @param {*} numA 
 * @param {*} numB 
 */
function euclideanAlgorithm(numA, numB) {
    numA = Math.abs(numA), numB = Math.abs(numB);
    while (numA && numB && numA !== numB) {
        if (numA > numB) {
            numA -= numB;
        }
        else {
            numB -= numA;
        }
    }
    return numA || numB;
}