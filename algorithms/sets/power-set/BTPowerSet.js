/**
 * In backtracking approach we're constantly trying to add next element of the 
 * set to the subset, memorizing it and then removing it and try the same with 
 * the next element.
 * @param {*} set 
 */
function btPowerSet(set) {
    return btRecursivePowerSet(set);
}

function btRecursivePowerSet(set, allSubsets = [[]], currentSubSet = [],
    start = 0) {
    for (let i = start; i < set.length; i++) {
        currentSubSet.push(set[i]);
        allSubsets.push([...currentSubSet]);
        btRecursivePowerSet(set, allSubsets, currentSubSet, i + 1);
        currentSubSet.pop();
    }
    return allSubsets;
}