/**
 * This comes out as an optimisation of DYNAMIC PROGRAMMING BOTTOM_UP approach.
 * 
 * Once we have our code in the bottom-up state, we can make one final,
 * important observation. From a given position, when we try to see if
 * we can jump to a GOOD position, we only ever use one - the first one.
 * In other words, the left-most one. If we keep track of this left-most
 * GOOD position as a separate variable, we can avoid searching for it
 * in the array. Not only that, but we can stop using the array altogether.
 * @param {*} numbers 
 */
function greedyJumpGame(numbers) {
    let left = numbers.length - 1;
    for (i = numbers.length - 2; i >= 0; i--) {
        const max = i + numbers[i];
        if (max >= left)
            left = i;
    }
    return left === 0;
}