function traversal(linkedList, callback) {
    let tmpNode = linkedList.head;

    while (tmpNode) {
        callback(tmpNode.value);
        tmpNode = tmpNode.next;
    }
}