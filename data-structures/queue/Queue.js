class Queue {

    constructor() {
        this.linkedList = new LinkedList();
    }

    isEmpty() {
        return !this.linkedList.head;
    }

    peek() {
        if (!this.linkedList.head) {
            return null;
        }
        return this.linkedList.peek.value;
    }

    enqueue(value) {
        this.linkedList.append(value);
    }

    dequeue() {
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    }

    toString(cb) {
        return this.linkedList.toString(cb);
    }
}