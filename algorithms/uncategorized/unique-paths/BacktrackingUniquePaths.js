/**
 * BACKTRACKING approach of solving Unique Paths problem.
 * we need to build a decision tree where D means moving down and R means moving
 * right.
 * @param {*} width 
 * @param {*} height 
 * @param {*} steps 
 * @param {*} uniqueSteps 
 */
function backtrackingUniquePaths(width, height, steps = [[0, 0]], uniqueSteps = 0) {
    const currPos = steps[steps.length - 1];

    if (currPos[0] === width - 1 && currPos[1] === height - 1) {
        return uniqueSteps + 1;
    }

    let rightSteps = 0;
    let downSteps = 0;

    if (currPos[0] < width - 1) {
        steps.push([currPos[0] + 1, currPos[1]]);
        rightSteps = backtrackingUniquePaths(width, height, steps, uniqueSteps);
        steps.pop();
    }

    if (currPos[1] < height - 1) {
        steps.push([currPos[0], currPos[1] + 1]);
        downSteps = backtrackingUniquePaths(width, height, steps, uniqueSteps);
        steps.pop();
    }

    return rightSteps + downSteps;
}