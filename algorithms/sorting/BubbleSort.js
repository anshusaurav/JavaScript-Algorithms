/**
 * Simple sorting algorithm that repeatedly steps through the list to be sorted,
 * compares each pair of adjacent items and swaps them if they are in the wrong 
 * order (ascending or descending arrangement)
 * @param {*} originalArr 
 */
function bubbleSort(originalArr) {
    const array = [...originalArr];
    for (let i = 1; i < array.length - 1; i++) {
        let index = i;
        let done = true;
        for (let j = 0; j < array.length - i; j++) {
            if (array[j + 1] < array[j]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                done = false;
            }
        }
        if (done)
            return array;
    }
    return array;

}