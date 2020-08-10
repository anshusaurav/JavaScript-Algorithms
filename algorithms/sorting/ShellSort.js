/**
 * It can be seen as either a generalization of sorting by exchange (bubble 
 * sort) or sorting by insertion (insertion sort). The method starts by sorting 
 * pairs of elements far apart from each other, then progressively reducing the 
 * gap between elements to be compared. Starting with far apart elements, it can
 *  move some out-of-place elements into position faster than a simple nearest 
 * neighbor exchange
 * @param {*} originalArray 
 */
function shellSort(originalArray) {
    const arr = [...originalArray];
    let interval = Math.floor(arr.length / 2);

    while (interval > 0) {
        for (let i = 0; i < arr.length - interval; i++) {
            let index = i;
            let intervalIndex = i + interval;
            while (index >= 0) {
                if (arr[intervalIndex] < arr[index]) {
                    const temp = arr[index];
                    arr[index] = arr[intervalIndex];
                    arr[intervalIndex] = temp;
                }
                intervalIndex = index;
                index -= interval;
            }
        }
        interval = Math.floor(interval / 2);
    }
    return arr;
}