/**
 * 106. 从中序与后序遍历序列构造二叉树
根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    let post_idx = postorder.length - 1;
    const map = new Map();
    inorder.forEach((val, idx) => {
        map.set(val, idx);
    })

    function helper(in_left, in_right) {
        if (in_left > in_right) {
            return null;
        }

        const root_val = postorder[post_idx];
        const root = new TreeNode(root_val);

        const index = map.get(root_val);
        post_idx--;

        root.right = helper(index+1, in_right);
        root.left = helper(in_left, index-1);
        return root;
    }

    return helper(0, inorder.length - 1);
};