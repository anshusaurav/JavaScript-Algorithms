/**
 * Generates Cartesian Product of two sets.
 * @param {*} setA 
 * @param {*} setB 
 */
function cartesianProduct(setA, setB) {
    if (!setA || !setB || !setA.length || !setB.length) {
        return null;
    }
    let res = [];
    for (let i = 0; i < setA.length; i++) {
        for (let j = 0; j < setB.length; j++) {
            res.push([setA[i], setB[j]]);
        }
    }
    return res;

}