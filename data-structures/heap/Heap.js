class Heap {
    constructor(comparatorFunction) {
        this.content = [];
        this.comparator = new Comparator(comparatorFunction);
    }
    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }
    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }
    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.content.length;
    }
    hasRightChild(parentNode) {
        return this.getRightChildIndex(parentIndex) < this.content.length;
    }
    leftChild(parentIndex) {
        return this.content[this.getLeftChildIndex(parentIndex)];
    }
    rightChild(parentIndex) {
        return this.content[this.getRightChildIndex(parentIndex)]
    }
    parent(childIndex) {
        return this.content[this.getParentIndex(childIndex)];
    }
    swap(indexOne, indexTwo) {
        const temp = this.content[indexTwo];
        this.content[indexTwo] = this.content[indexOne];
        this.content[indexOne] = tmp;
    }
    peek() {
        if (this.content.length == 0)
            return null;
        return this.content[0];
    }
    poll() {
        if (this.content.length == 0)
            return null;
        if (this.content.length == 1) {
            return this.content.pop();

        }
        const item = this.content[0];
        this.content[0] = this.content.pop();
        this.heapifyDown();
        return item;
    }
    add(item) {
        this.content.push(item);
        this.heapifyUp();
        return this;
    }

}