function reverseTraversalRecursive(node, cb) {
    if (node) {
        reverseTraversalRecursive(node.next, cb);
        cb(node.value);
    }
}

function reverseTraversal(linkedList, cb) {
    reverseTraversalRecursive(linkedList.head, cb);
}