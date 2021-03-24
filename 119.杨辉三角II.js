/**
 * 119. 杨辉三角 II
给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 3
输出: [1,3,3,1]
进阶：

你可以优化你的算法到 O(k) 空间复杂度吗？
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var obj = {
     1: [1],
     2: [1,1]
 };
 var getRow = function(rowIndex) {
     if (!obj[rowIndex+1]) generate(rowIndex+1);
    return obj[rowIndex+1];
};

 var generate = function(numRows) {
     var res = [];
    for (var i=0; i<numRows; i++) {
        res.push(helper(i+1));
    }
    return res;
};

function helper(num) {
    if (obj[num]) return obj[num];
    var arr = [];
    arr[0] = 1;
    arr[num-1] = 1;
    for (var i=1; i<num-1; i++) {
        var pre;
        if (!obj[num]) obj[num] = helper(num - 1);
        var pre = obj[num]
        arr[i] = pre[i-1] + pre[i];
    }
    obj[num] = arr;
    return arr;
}

/**
 * 线性递推
 * 由组合数公式 
 *   m         n!
 * C    =  ----------  , 可以得到同一行相邻组合数的关系 
 *   n      m!(n-m)!
 * 
 *   m       m-1        n - m + 1
 * C    =  C       *  -------------
 *   n       n              m
 * 
 *      0
 * 由于C   = 1, 利用上述公式在线性时间计算出第n行的所有组合数
 *      n
 */

var getRow = function(rowIndex) {
    var row = new Array(rowIndex+1).fill(0);
    row[0] = 1;
    for (var i = 1; i <= rowIndex; ++i) {
        row[i] = row[i-1] * (rowIndex - i + 1) / i;
    }
    return row;
}

var getRow = function(rowIndex) {
    const row = new Array(rowIndex + 1).fill(0);
    row[0] = 1;
    for (let i = 1; i <= rowIndex; ++i) {
        row[i] = row[i - 1] * (rowIndex - i + 1) / i;
    }
    return row;
};