/**
 * Quicksort is a divide and conquer algorithm. Quicksort first divides a large 
 * array into two smaller sub-arrays: the low elements and the high elements. 
 * Quicksort can then recursively sort the sub-arrays
 * @param {*} originalArray 
 */
function quickSort(originalArray) {
    let res = [...originalArray];
    if (res.length <= 1) {
        return res;
    }

    const leftArr = [], rightArr = [];
    const pivot = res.shift();
    const centerArr = [pivot];

    while (res.length) {
        const currElem = res.shift();
        if (currElem === pivot) {
            centerArr.push(currElem);
        }
        else if (currElem < pivot)
            leftArr.push(currElem)
        else
            rightArr.push(currElem)
    }
    const leftSorted = quickSort(leftArr);
    const rightSorted = quickSort(rightArr);
    return leftSorted.concat(centerArr, rightSorted);
}