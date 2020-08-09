/**
 * Insertion sort is a simple sorting algorithm that builds the final sorted 
 * array (or list) one item at a time. 
 * @param {*} originalArr 
 */
function insertionSort(originalArr) {
    const array = [...originalArr];
    for (let i = 0; i < array.length; i++) {
        let index = i;
        while (index >= 1 && array[index] < array[index - 1]) {
            [array[index - 1], array[index]] = [array[index], array[index - 1]];
            index--;
        }

    }
    return array;

}