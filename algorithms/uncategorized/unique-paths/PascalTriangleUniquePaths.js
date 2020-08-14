/**
 * Based on the fact that this problem is another form of Pascal triangle
 * The corner of this rectangle is at m + n - 2 line, and at min(m, n) - 1 
 * position of the Pascal's Triangle.
 * @param {*} width 
 * @param {*} height 
 */
function ptUniquePaths(width, height) {
    const lineNum = width + height - 2;
    const pos = Math.min(width, height) - 1;

    return pascalTriangle(lineNum)[pos];
}