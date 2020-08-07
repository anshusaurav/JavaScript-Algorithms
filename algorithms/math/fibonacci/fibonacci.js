

function getNTerm(num) {
    if (n == 1)
        return [0];
    if (n == 2)
        return [0, 1];
    let res = [0, 1];
    for (i = 2; i < num; i++) {
        res.push(res[i - 1] + res[i - 2]);
    }
    return res;
}

/**
 * Calculate fibonacci number at specific position 
 * @param {*} num 
 */
function getNthTerm(num) {
    if (num == 1) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    return getNTerm(num - 1) + getNTerm(num - 2);
}