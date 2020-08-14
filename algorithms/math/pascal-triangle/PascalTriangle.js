function pascalTriangle(num) {
    let lvls = [1];

    let sz = num + 1;
    for (let i = 1; i < sz; i++) {
        lvls[i] = (lvls[i - 1] * (num - i + 1)) / i;
    }
    return lvls;
}