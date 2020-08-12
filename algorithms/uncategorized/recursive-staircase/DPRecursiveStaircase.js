function dpRecursiveStaircase(numstairs) {
    if (numstairs < 0)
        return 0;

    const res = new Array(numstairs + 1).fill(0);
    res[0] = 0;
    res[1] = 1;
    res[2] = 2;
    for (let i = 3; i <= numstairs; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }
    return res[numstairs];

}