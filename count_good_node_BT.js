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
var goodNodes = function(root, maxValue = -Infinity, count=[0]) {
    if(root === null){
        return 0
    }
    if(maxValue <= root.val) {
        count[0]++
    } 
    maxValue = Math.max(root.val, maxValue)
    goodNodes(root.left, maxValue, count)
    goodNodes(root.right, maxValue, count)
    
    return count[0]
};