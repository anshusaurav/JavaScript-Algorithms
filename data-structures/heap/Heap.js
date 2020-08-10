class Heap {
    constructor(comparatorFunction) {
        this.content = [];
        this.compare = new Comparator(comparatorFunction);
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
    hasRightChild(parentIndex) {
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
        this.content[indexOne] = temp;
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

    remove(item, comparator = this.compare) {
        const numRemove = this.find(item, comparator).length;

        for (let i = 0; i < numRemove; i++) {
            const indexToRemove = this.find(item, comparator).pop();
            if (indexToRemove === (this.content.length - 1)) {
                this.content.pop();
            }
            else {
                this.content[indexToRemove] = this.content.pop();
                const parentIndex = this.parent(indexToRemove);
                if (this.hasLeftChild(indexToRemove) &&
                    (!parentIndex || this.pairInCorrectOrder(parentIndex,
                        this.content[indexToRemove]))) {
                    this.heapifyDown(indexToRemove);
                }
                else {
                    this.heapifyUp(indexToRemove);
                }
            }
        }
        return this;
    }
    find(item, comparator = this.compare) {
        const foundIndices = [];
        for (i = 0; i < this.content.length; i++) {
            if (comparator.equal(item, this.content[i])) {
                foundIndices.push(i);
            }
        }
        return foundIndices;
    }
    isEmpty() {
        return !this.content.length;
    }

    toString() {
        return this.content.toString();
    }
    heapifyUp(customStartIndex) {
        let index = customStartIndex || this.content.length - 1;
        while (this.hasParent(index) &&
            !this.pairInCorrectOrder(this.parent(index), this.content[index])) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    heapifyDown(customStartIndex = 0) {
        let index = customStartIndex;
        let nextIndex = null;
        while (this.hasLeftChild(index)) {
            if (this.hasRightChild(index) &&
                this.pairInCorrectOrder(this.rightChild(index),
                    this.leftChild(index))) {
                nextIndex = this.getRightChildIndex(index);
            }
            else {
                nextIndex = this.getLeftChildIndex(index);
            }
            if (this.pairInCorrectOrder(this.content[index], this.content[nextIndex]))
                break;
        }
        this.swap(index, nextIndex);
        index = nextIndex;
    }

    pairInCorrectOrder(firstElem, secondElem) {
        throw new Error('Need to implement pair comparison method')
    }
}