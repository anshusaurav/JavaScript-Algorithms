function pascalTriangleRecursive(num) {
    if (num === 0)
        return [1];

    let lineSize = num + 1;
    let prevLineSize = num;

    let res = [];

    let prevLine = pascalTriangleRecursive(num - 1);

    for (i = 0; i < lineSize; i++) {
        const leftNum = i - 1 >= 0 ? prevLine[i - 1] : 0;
        const rightNum = i < prevLine.length ? prevLine[i] : 0;

        res[i] = leftNum + rightNum;
    }
    return res;
}