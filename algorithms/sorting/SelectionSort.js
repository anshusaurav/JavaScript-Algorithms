/**
 * Selection sort is a sorting algorithm, specifically an in-place comparison 
 * sort. It has O(n^2) time complexity.
 * @param {*} originalArr 
 */
function selectionSort(originalArr) {
    const array = [...originalArr];
    for (let i = 0; i < array.length - 1; i++) {
        let index = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[index]) {
                index = j;
            }
        }
        if (index !== i) {
            [array[i], array[index]] = [array[index], array[i]];
        }
    }
    return array;

}