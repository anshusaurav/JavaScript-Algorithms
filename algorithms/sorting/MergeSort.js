
/**
 * First divide the list into the smallest unit (1 element), then compare each 
 * element with the adjacent list to sort and merge the two adjacent lists. 
 * Finally all the elements are sorted and merged.
 * @param {*} originalArray 
 */
function mergeSort(originalArray) {
    if (originalArray.length <= 1) {
        return originalArray;
    }

    const mid = Math.floor(originalArray.length / 2);
    const left = originalArray.slice(0, mid);
    const right = originalArray.slice(mid, originalArray.length);
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
    return mergeSortedArrays(leftSorted, rightSorted);
}

function mergeSortedArrays(leftArray, rightArray) {
    let res = [];
    while (leftArray.length && rightArray.length) {
        let minElem = null;
        if (leftArray[0] < rightArray[0]) {
            minElem = leftArray.shift();
        } else {
            minElem = rightArray.shift();
        }
        res.push(minElem);
    }
    if (leftArray.length)
        res = res.concat(leftArray);

    if (rightArray.length)
        res = res.concat(rightArray);
    return res;
}