/**
 * Linear search implementation.
 * @param {*} array 
 * @param {*} elm 
 * @param {*} comparatorCallback 
 */
function linearSearch(array, elm, comparatorCallback) {
    let comparator = new Comparator(comparatorCallback);
    let res = [];
    array.forEach((elem, index) => {
        if (comparator.equal(elem, elm)) {
            res.push(index);
        }
    });
    return res;
}