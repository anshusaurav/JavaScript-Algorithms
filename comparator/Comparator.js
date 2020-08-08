class Comparator {
    constructor(compFunction) {
        this.compFunction = compFunction || Comparator.defaultCompareFunction;
    }

    /**
     * Default comparison function.
     * @param {*} a 
     * @param {*} b 
     */
    static defaultCompareFunction(a, b) {
        if (a === b)
            return 0;
        if (a < b)
            return -1;
        return 1;
    }

    /**
     * Checks if two arguments are equal
     * @param {*} a 
     * @param {*} b 
     */
    equal(a, b) {
        return this.compFunction(a, b) === 0;
    }

    /**
     * Checks if first argument is greater than second one
     * @param {*} a 
     * @param {*} b 
     */
    smallerThan(a, b) {
        return this.compFunction(a, b) < 0;
    }

    /**
     * Checks if first argument is smaller than second one
     * @param {*} a 
     * @param {*} b 
     */
    largerThan(a, b) {
        return this.compFunction(a, b) > 0;
    }

}