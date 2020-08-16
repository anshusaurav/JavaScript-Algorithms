const defaultSize = 32;
class HashTable {

    constructor(hashTableSize = defaultSize) {
        this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList())
        this.keys = {};
    }

    hash(key) {
        const hash = Array.from(key).reduce((acc, elem) => {
            acc += elem.charCodeAt(0);
            return acc;
        });
        return hash % this.buckets.length;

    }

    set(key, value) {
        const keyHash = this.hash(key);
        this.keys[key] = keyHash;

        const bucketLinkedLit = this.buckets[keyHash];

        const node = bucketLinkedLit.find({ callback: (nodeValue) => nodeValue.key === key })

        if (!node) {
            bucketLinkedLit.append({ key, value });
        } else {
            node.value.value = value;
        }
    }

    delete(key) {
        const keyHash = this.hash(key);
        delete this.keys[key];

        const bucketLinkedLit = this.buckets[keyHash];
        const node = bucketLinkedLit.find({ callback: (nodeValue) => nodeValue.key === key })

        if (node)
            return bucketLinkedLit.delete(node.value)

        return null;
    }

    get(key) {
        const bucketLinkedLit = this.buckets[this.hash(key)];

        const node = bucketLinkedLit.find({ callback: (nodeValue) => nodeValue.key === key });

        return node ? node.value.value : undefined
    }

    has(key) {
        return Object.hasOwnProperty.call(this.keys, key);
    }

    getKeys() {
        return Object.keys(this.keys);
    }
}