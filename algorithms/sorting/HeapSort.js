/**
 * Simple sorting algorithm that repeatedly steps through the list to be sorted,
 * compares each pair of adjacent items and swaps them if they are in the wrong 
 * order (ascending or descending arrangement)
 * @param {*} originalArr 
 */
function heapSort(originalArr) {
    const array = [];
    const minHeap = new MinHeap();
    console.log('HERE');
    for (let i = 0; i < originalArr.length; i++) {
        minHeap.add(originalArr[i]);
        console.log(minHeap);
    }
    while (!minHeap.isEmpty()) {
        const nextSmallestElem = minHeap.poll();
        console.log(nextSmallestElem);
        array.push(nextSmallestElem);
    }

    return array;

}