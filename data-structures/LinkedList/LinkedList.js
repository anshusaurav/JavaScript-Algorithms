class LinkedList {
    constructor(comparator) {
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(comparator);
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    }

    append(value) {
        const newNode = new LinkedListNode(value);

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
        if (!this.head)
            return null;

        let nodeToBeDeleted = null;

        while (this.head && this.compare.equal(this.head.value, value)) {
            nodeToBeDeleted = this.head;
            this.head = this.head.next;
        }

        let tmpNode = this.head;

        if (tmpNode !== null) {
            while (tmpNode.next) {
                if (this.compare.equal(tmpNode.next.value, value)) {
                    nodeToBeDeleted = tmpNode.next;
                    tmpNode.next = tmpNode.next.next;
                }
                else {
                    tmpNode = tmpNode.next;
                }
            }
        }

        if (this.compare.equal(this.tail.value, value)) {
            this.tail = tmpNode;
        }
        return nodeToBeDeleted;

    }
}