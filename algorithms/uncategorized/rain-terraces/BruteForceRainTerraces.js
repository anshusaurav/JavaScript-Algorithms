/**
 * RUTE FORCE approach of solving Trapping Rain Water problem.
 * @param {*} terraces 
 */
function bruteForceRainTerraces(terraces) {
    let total = 0;
    for (let i = 0; i < terraces.length; i++) {

        let leftHigh = 0;
        for (let l = i - 1; l >= 0; l--)
            leftHigh = Math.max(leftHigh, terraces[l]);

        let rightHigh = 0;
        for (let r = i + 1; r < terraces.length; r++) {
            rightHigh = Math.max(rightHigh, terraces[r]);
        }

        const height = Math.min(leftHigh, rightHigh);
        if (height > terraces[i]) {
            total += height - terraces[i]
        }
    }
    return total;
}