

function bruteForceRecursiveStaircase(numStairs) {
    if (numStairs <= 0)
        return 0;
    if (numStairs === 1)
        return 1;
    if (numStairs === 2)
        return 2;

    return bruteForceRecursiveStaircase(numStairs - 1) +
        bruteForceRecursiveStaircase(numStairs - 2);
}