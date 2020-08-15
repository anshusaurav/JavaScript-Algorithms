/**
 * Each number in binary representation in a range from 0 to 2^n does exactly 
 * what we need: it shows by its bits (0 or 1) whether to include related 
 * element from the set or not.
 * @param {*} set 
 */
function bwPowerSet(set) {
    const subsets = [];

    const num = 2 ** set.length;

    for (let i = 0; i < num; i++) {
        const subset = [];
        for (let j = 0; j < set.length; j++) {
            if (i & (1 << j))
                subset.push(set[j])
        }
        subsets.push(subset);
    }
    return subsets;

}