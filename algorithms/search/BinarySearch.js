/**
 * Also known as half-interval search, logarithmic search, or binary chop, 
 * is a search algorithm that finds the position of a target value within a 
 * sorted array
 * @param {*} sortedArray 
 * @param {*} elm 
 * @param {*} comparatorCallback 
 */
function binarySearch(sortedArray, elm, comparatorCallback) {
    let comparator = new Comparator(comparatorCallback);
    if (!sortedArray)
        return -1;
    let low = 0;
    let high = sortedArray.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (comparator.equal(sortedArray[mid], elm))
            return mid;
        if (comparator.smallerThan(sortedArray[mid], elm)) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}