/**
 *  We store the maximum heights upto a point using 2 iterations of O(n) each. We finally update answer using the stored
 *  values in O(n).
 * @param {*} terraces 
 */
function dpRainTerraces(terraces) {

    let total = 0;
    let leftMaxArr = new Array(terraces.length).fill(0);
    let rightMaxArr = new Array(terraces.length).fill(0);

    leftMaxArr[0] = terraces[0];
    for (let i = 1; i < terraces.length; i++) {
        leftMaxArr[i] = Math.max(terraces[i], leftMaxArr[i - 1]);
    }

    rightMaxArr[terraces.length - 1] = terraces[terraces.length - 1];
    for (let i = terraces.length - 2; i >= 0; i--) {
        rightMaxArr[i] = Math.max(terraces[i], rightMaxArr[i + 1]);
    }

    for (let i = 0; i < terraces.length; i++) {
        const maxHeight = Math.min(leftMaxArr[i], rightMaxArr[i]);
        // console.log(leftMaxArr[i], rightMaxArr[i], maxHeight, terraces[i])
        if (maxHeight > terraces[i])
            total += maxHeight - terraces[i];
    }
    return total;
}