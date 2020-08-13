/**
 * It relies on the observation that once we determine that a certain
 * index is good / bad, this result will never change. This means that
 * we can store the result and not need to recompute it every time.
 *
 * We call a position in the array a "good" one if starting at that
 * position, we can reach the last index. Otherwise, that index
 * is called a "bad" one.
 * @param {*} numbers 
 * @param {*} startIndex 
 * @param {*} jumps 
 * @param {*} goodCells
 */
function dpTopDownJumpGame(numbers, start = 0, jumps = [], goodCells = []) {
    if (start === numbers.length - 1) {
        return true;
    }

    let currentGoodCells = [...goodCells];
    if (currentGoodCells.length === 0) {
        currentGoodCells = new Array(numbers.length).fill(undefined);
        currentGoodCells[goodCells - 1] = true;
    }

    const max = Math.min(numbers[start], numbers.length - 1 - start);

    for (let i = max; i > 0; i--) {
        const next = start + i;

        if (currentGoodCells[next] !== false) {
            jumps.push(next);
            const isCorrect = dpTopDownJumpGame(numbers, next, jumps, currentGoodCells);
            if (isCorrect)
                return true;

            jumps.pop();
            currentGoodCells[next] = false;
        }

    }
    return false;

}