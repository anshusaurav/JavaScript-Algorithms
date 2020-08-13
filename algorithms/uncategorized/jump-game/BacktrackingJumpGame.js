/**
 * In this solution we try every single jump
 * pattern that takes us from the first position to the last.
 * We start from the first position and jump to every index that
 * is reachable. We repeat the process until last index is reached.
 * When stuck, backtrack.
 * @param {*} numbers 
 * @param {*} startIndex 
 * @param {*} jumps 
 */
function backtrackingJumpGame(numbers, start = 0, jumps = []) {
    if (start === numbers.length - 1) {
        return true;
    }
    const max = Math.min(numbers[start], numbers.length - 1 - start);

    for (let i = max; i > 0; i--) {
        const next = start + i;
        jumps.push(next);
        const isCorrect = backtrackingJumpGame(numbers, next, jumps);

        if (isCorrect)
            return true;
        jumps.pop();
    }
    return false;

}