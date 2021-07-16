function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    let root = null;
    let newNode = {};
    return {
        insert(data) {
            newNode = new Node(data);
            if (root === null) {
                root = newNode;
            } else {
                this.insertNode(root, newNode);
            }
        },
        insertNode(node, newNode) {
            if (newNode.data < node.data) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    this.insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    this.insertNode(node.right, newNode);
                }
            }
        },
        root() {
            return root;
        }
    };
}

const binary = new BinarySearchTree();

binary.insert(3);
binary.insert(2);
binary.insert(1);
binary.insert(4);
console.log(binary.root());
