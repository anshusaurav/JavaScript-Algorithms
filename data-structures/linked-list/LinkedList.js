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

    find({ value = undefined, callback = undefined }) {
        if (!this.head) {
            return null;
        }
        let tmpNode = this.head;

        while (tmpNode) {
            if (callback && callback(tmpNode.value)) {
                return tmpNode;
            }
            if (value !== undefined && this.compare.equal(tmpNode.value, value)) {
                return tmpNode;
            }
            tmpNode = tmpNode.next;
        }
        return null;
    }

    deleteTail() {
        const nodeToBeDeleted = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return nodeToBeDeleted;
        }

        let tmpNode = this.head;
        while (tmpNode.next) {
            if (!tmpNode.next.next) {
                tmpNode.next = null;
            }
            else {
                tmpNode = tmpNode.next;
            }
        }
        this.tail = tmpNode;
        return nodeToBeDeleted;
    }

    deleteHead() {
        if (!this.head)
            return null;

        const nodeToBeDeleted = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        }
        else {
            this.head = null;
            this.tail = null;
        }
        return nodeToBeDeleted;
    }

    fromArray(values) {
        values.forEach(elem => this.append(elem));
        return this;
    }

    toArray() {
        let res = [];
        let tmpNode = this.head;
        while (tmpNode) {
            res.push(tmpNode);
            tmpNode = tmpNode.next;
        }
        return res;
    }

    toString(cb) {
        return this.toAraay().map(elem => elem.toString(cb)).join(' ');
    }

    reverse() {
        let tmpNode = this.head;
        let prev = null;
        let next = null;
        while (tmpNode) {
            next = tmpNode.next;
            tmpNode.next = prev;

            prev = tmpNode;
            tmpNode = next;
        }
        this.tail = this.head;
        this.head = prev;
        return this;
    }
}