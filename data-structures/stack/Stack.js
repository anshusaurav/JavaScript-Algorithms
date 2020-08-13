class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    isEmpty() {
        return !this.linkedList.head;
    }

    peek() {
        if (this.isEmpty())
            return null;
        return this.linkedList.head.value;
    }

    push(value) {
        this.linkedList.prepend(value);
    }

    pop() {
        const elemTobeRemoved = this.linkedList.deleteHead();
        return elemTobeRemoved ? elemTobeRemoved.value : null;
    }

    toArray() {
        return this.linkedList.toArray.map(elem => elem.value);
    }

    toString(cb) {
        return this.linkedList.toString(cb);
    }
}