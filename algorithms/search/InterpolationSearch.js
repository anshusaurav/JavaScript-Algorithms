
/**
 * The Interpolation Search is an improvement over Binary Search for instances, 
 * where the values in a sorted array are uniformly distributed. Binary Search 
 * always goes to the middle element to check. On the other hand, interpolation 
 * search may go to different locations according to the value of the key being 
 * searched.
 * @param {*} sortedArray 
 * @param {*} elm 
 */
function interPolationSearch(sortedArray, elm) {
    if (!sortedArray)
        return -1;
    let low = 0;
    let high = sortedArray.length - 1;
    while (low <= high) {
        const dVal = sortedArray[high] - sortedArray[low];
        const dInd = high - low;
        const dElem = elm - sortedArray[low];

        if (dElem < 0)
            return -1;

        if (dVal <= 0) {
            return sortedArray[low] === elm ? low : -1;
        }
        const mid = low + Math.floor((dElem * dInd) / dVal);
        if (sortedArray[mid] === elm)
            return mid;
        if (sortedArray[mid] < elm) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}