
/**
 * Measures the minimum number of substitutions required to change one string 
 * into the other
 * @param {*} a 
 * @param {*} b 
 */
function hammingDistance(a, b) {
    if (a.length !== b.length)
        return "Strings should have same length";
    let res = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i])
            res++;
    }
    return res;
}