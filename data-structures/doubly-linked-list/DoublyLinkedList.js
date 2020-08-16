class DoublyLinkedList {

    constructor(comparator) {
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(comparator);
    }

    prepend(value) {
        const newNode = new DoublyLinkedListNode(value, this.head);
        if (this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    }

    append(value) {
        const newNode = new DoublyLinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    delete(value) {

        if (!this.head) {
            return null;
        }

        let nodeToBeDeleted = null;

        let curr = this.head;

        while (curr) {
            if (this.compare.equal(curr.value, value)) {
                nodeToBeDeleted = curr;

                if (nodeToBeDeleted === this.head) {
                    this.head = nodeToBeDeleted.next;
                    if (this.head) {
                        this.head.prev = null;
                    }
                }
                else if (nodeToBeDeleted === this.tail) {
                    this.tail = nodeToBeDeleted.prev;
                    this.tail.next = null;
                }
                else {
                    const prevNode = nodeToBeDeleted.prev;
                    const nextNode = nodeToBeDeleted.next;
                    prevNode.next = nextNode;
                    nextNode.prev = prevNode;
                }
            }
            curr = curr.next;
        }
        return nodeToBeDeleted;
    }

    find({ value = undefined, callback = undefined }) {

        let curr = this.head;
        while (curr) {
            if (callback && callback(curr.value)) {
                return curr;
            }
            if (value !== undefined && this.compare.equal(curr.value, value))
                return curr;
            curr = curr.next;
        }
        return null;
    }

    deleteTail() {
        if (!this.tail)
            return null;

        if (this.head === this.tail) {
            const nodeToBeDeleted = this.tail;
            this.head = null;
            this.tail = null;
            return nodeToBeDeleted;
        }

        const nodeToBeDeleted = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        return nodeToBeDeleted;
    }

    deleteHead() {
        if (!this.head)
            return null;

        const nodeToBeDeleted = this.head;

        if (this.head.next) {
            this.head = this.head.next;
            this.head.prev = null;
        }
        else {
            this.head = null;
            this.tail = null;
        }
        return nodeToBeDeleted;

    }


    toArray() {
        const res = [];

        let curr = this.head;

        while (curr) {
            res.push(curr);
            curr = curr.next;
        }
        return res;
    }

    toString(cb) {
        return this.toArray().map((elem) => elem.toString(cb)).join(' ');
    }


    reverse() {
        let curr = this.head;
        let prevNode = null;
        let nextNode = null;

        while (curr) {
            nextNode = curr.next;
            prevNode = curr.prev;

            curr.next = prevNode;
            curr.prev = nextNode;

            prevNode = curr;
            curr = nextNode;
        }
        this.tail = this.head;
        this.head = prevNode;
        return this;
    }
}