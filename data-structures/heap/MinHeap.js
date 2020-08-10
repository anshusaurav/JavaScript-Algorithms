class MinHeap extends Heap {
    /**
     * Checks if pair of heap elements is in correct order.
     * For MinHeap the first element must be always smaller or equal.
     * @param {*} firElem 
     * @param {*} secElem 
     */
    pairInCorrectOrder(firElem, secElem) {
        return (this.compare.smallerThan(firElem, secElem) || this.compare.equal(firElem, secElem));
    }
}