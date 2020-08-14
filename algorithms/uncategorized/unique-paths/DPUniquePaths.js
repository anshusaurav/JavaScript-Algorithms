/**
 * Based on the approach 
 * BOARD[i][j] = BOARD[i - 1][j] + BOARD[i][j - 1]; 
 * // since we can only move down or right.
 * @param {*} width 
 * @param {*} height 
 */
function dpUniquePaths(width, height) {
    const mat = Array(height).fill(null).map(() => Array(width).fill(0));

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i === 0 || j === 0)
                mat[i][j] = 1;
        }
    }

    for (let i = 1; i < height; i++) {
        for (let j = 1; j < width; j++) {
            mat[i][j] = mat[i - 1][j] + mat[i][j - 1];
        }
    }
    return mat[height - 1][width - 1];
}