class MaxHeap extends Heap {
    /**
     * 
     *  Checks if pair of heap elements is in correct order.
     *  For MaxHeap the first element must be always bigger or equal.
     * 
     * @param {*} firElem 
     * @param {*} secElem 
     */
    pairInCorrectOrder(firElem, secElem) {
        return (this.compare.largerThan(firElem, secElem) || this.compare.equal(firElem, secElem));
    }
}