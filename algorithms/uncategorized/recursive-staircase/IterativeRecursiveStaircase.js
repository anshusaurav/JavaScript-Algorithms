
function iterativeRecursiveStaircase(numStairs) {
    if (numStairs < 0)
        return 0;
    const res = [1, 2];
    if (numStairs <= 2)
        return res[numStairs - 1]
    for (i = 3; i <= numStairs; i++) {
        [res[0], res[1]] = [res[1], res[0] + res[1]];
    }
    return res[1];
}