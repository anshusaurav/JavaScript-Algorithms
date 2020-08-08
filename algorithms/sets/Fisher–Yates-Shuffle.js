/**
 * This algorithm shuffles the sequence
 * @param {*} array 
 */
function fisherYates(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const randIndex = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[randIndex];
        array[randIndex] = temp;
        console.log(randIndex, array)
    }
    return array;
}