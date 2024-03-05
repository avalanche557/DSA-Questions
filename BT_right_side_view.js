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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(root === null) {
        return []
    }
    let res = []
    let que = [root]
    while(que.length) {
        let temp = []
        let levelSize = que.length;
        while(levelSize){
            let node = que.shift()
            if(node.left){
                que.push(node.left)
            }
            if(node.right){
                que.push(node.right)
            }
            temp.push(node.val)
            levelSize--;
        }
        res.push(temp.pop())
    }
    return res
};