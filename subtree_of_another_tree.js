/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(subRoot === null) {
        return true
    }
    if(root === null){
        return false
    }
    if(sameTree(root, subRoot)) {
        return true
    }

    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
};

var sameTree = (p,q) => {
    if(p=== null && q === null) {
        return true
    }

    if(p=== null || q === null) {
        return false
    }

    if(p.val === q.val && sameTree(p.left, q.left) && sameTree(p.right, q.right)) {
        return true
    }
    return false
}