
/**
 * Sorting in place avoids unnecessary use of additional memory, but modifies 
 * input array.
 * @param {*} originalArr 
 * @param {*} lowIndex 
 * @param {*} highIndex 
 * @param {*} recursive 
 */
function quickSortInPlace(originalArr,
    lowIndex = 0,
    highIndex = originalArr.length - 1,
    recursive = false) {
    let array = recursive ? originalArr : [...originalArr];

    const partitionArr = (low, high) => {

        const swap = (left, right) => {
            const temp = array[left];
            array[left] = array[right];
            array[right] = temp;
        }
        const pivot = array[high];

        let partitionIndex = low;
        for (let i = low; i < high; i++) {
            if (array[i] < pivot) {
                swap(partitionIndex, i);
                partitionIndex++;
            }
        }
        swap(partitionIndex, high);
        return partitionIndex;
    };
    if (lowIndex < highIndex) {
        const pIndex = partitionArr(lowIndex, highIndex);
        const RECURSIVE_CALL = true;
        quickSort(array, lowIndex, pIndex - 1, RECURSIVE_CALL);
        quickSort(array, pIndex + 1, highIndex, RECURSIVE_CALL);
    }
    return array;
}

