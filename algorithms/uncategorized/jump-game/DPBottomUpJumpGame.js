/**
 * This comes out as an optimisation of DYNAMIC PROGRAMMING TOP-DOWN approach.
 *
 * The observation to make here is that we only ever jump to the right.
 * This means that if we start from the right of the array, every time we
 * will query a position to our right, that position has already be
 * determined as being GOOD or BAD. This means we don't need to recurse
 * anymore, as we will always hit the memo table.
 * @param {*} numbers 
 */
function dpBottomUpJumpGame(numbers) {
    const goodCells = new Array(numbers.length).fill(null);
    goodCells[goodCells.length - 1] = true;

    for (let cIndex = numbers.length - 2; cIndex >= 0; cIndex--) {
        const max = Math.min(numbers[cIndex], numbers.length - 1 - cIndex);
        for (let jump = max; jump > 0; jump--) {
            const next = cIndex + jump;
            if (goodCells[next] === true) {
                goodCells[cIndex] = true;
                break;
            }
        }
    }
    return goodCells[0] === true;
}