/**
 * It operates by counting the number of objects that have each distinct key 
 * value, and using arithmetic on those counts to determine the positions of 
 * each key value in the output sequence. 
 * @param {*} originalArray 
 * @param {*} smallest 
 * @param {*} largest 
 */
function countingSort(originalArray, smallest = undefined, largest = undefined) {
    let min = smallest || 0;
    let max = largest || 0;
    if (smallest === undefined || largest === undefined) {
        for (let i = 0; i < originalArray.length; i++) {
            if (originalArray[i] > max)
                max = originalArray[i];
            if (originalArray[i] < min)
                min = originalArray[i];
        }
    }
    let freq = new Array(max - min + 1).fill(0);
    for (let i = 0; i < originalArray.length; i++) {
        freq[originalArray[i] - min]++;
    }

    for (let i = 1; i < freq.length; i++) {
        freq[i] += freq[i - 1];
    }
    freq.pop();
    freq.unshift(0);

    const res = Array(originalArray.length).fill(null);
    for (let i = 0; i < originalArray.length; i++) {
        const elem = originalArray[i];
        const elemSortedPosition = freq[elem - min];
        res[elemSortedPosition] = elem;
        freq[elem - min] += 1;
    }
    return res;
}