class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function lowestCommonAncestor(root, p, q) {

    // Base case
    if (root === null) {
        return null;
    }

    if (
        root.value === p ||
        root.value === q
    ) {
        return root;
    }

    // Search left subtree
    let left =
        lowestCommonAncestor(
            root.left,
            p,
            q
        );

    // Search right subtree
    let right =
        lowestCommonAncestor(
            root.right,
            p,
            q
        );

    // If both found
    if (left && right) {
        return root;
    }

    // Return non-null side
    return left || right;
}


let root = new TreeNode(3);

root.left = new TreeNode(5);
root.right = new TreeNode(1);

root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);

root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

root.left.right.left =
    new TreeNode(7);

root.left.right.right =
    new TreeNode(4);

let ans =
    lowestCommonAncestor(
        root,
        7,
        4
    );

console.log(
    "LCA =",
    ans.value
);