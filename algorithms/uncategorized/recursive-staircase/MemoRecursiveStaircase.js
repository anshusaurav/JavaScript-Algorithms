

function memoRecursiveStaircase(numStairs) {
    let memo = [];

    const getRes = (nStairs) => {

        if (nStairs <= 0)
            return 0;
        if (nStairs === 1)
            return 1;
        if (nStairs === 2)
            return 2;
        if (memo[nStairs])
            return memo[nStairs];
        memo[nStairs] = getRes(nStairs - 1) + getRes(nStairs - 2);
        return memo[nStairs];
    }
    return getRes(numStairs);
}