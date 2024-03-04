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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if(root === null) {
        return 0
    }
    let lHeight = getHeight(root.left);
    let rHieght = getHeight(root.right);
    let lDiameter = diameterOfBinaryTree(root.left);
    let rDiamter = diameterOfBinaryTree(root.right)
    let maxDiamter = Math.max(lHeight+rHieght, Math.max(lDiameter, rDiamter))
    return maxDiamter
};

var getHeight = function(root, res=1) {
    if(root === null){
        return 0
    }
    res = res + Math.max(getHeight(root.left, res), getHeight(root.right, res))
    
    
    return res
}
