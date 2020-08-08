function jumpSearch(sortedArray, elm, comparatorCallback) {
    let comparator = new Comparator(comparatorCallback);
    if (!sortedArray)
        return -1;
    let jump = Math.sqrt(sortedArray.length);
    let start = 0;
    let end = jump;
    while (true) {
        if (comparator.smallerThan(elm, sortedArray[Math.min(jump, sortedArray.length) - 1])) {
            break;
        }
        if (end > sortedArray.length)
            return -1;
        start = end;
        end += jump;
    }

    let index = start;
    while (true) {
        if (comparator.equal(elm, sortedArray[index]))
            return index;
        index++;
    }
    return -1;

}