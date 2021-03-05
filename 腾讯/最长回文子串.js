/**
 * 最长回文子串
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
 */

 /**
 * @param {string} s
 * @return {string}
 */
/*
// 暴力求解，时间复杂度O(n3)
var running = true;
var longestPalindrome = function(s) {
    var len = s.length;
    var index = 0;
    while(index < len) {
        var res = getPalindrome(s, index, len);
        if (res) return res;
        else index++;
        if (running) console.log('running');
    }
    return s[0];
};
function getPalindrome(s, index, len) {
    for (let i=0; i<=index; i++) {
        var res = s.substr(i, len-index);
        // console.log(res);
        if (isHuiwen(res)) return res;
    }
    return false;
}

function isHuiwen(s) {
    return s.split('').reverse().join('') == s;
}
*/

var longestPalindrome = function(s) {
    let len = s.length;
    let result = '';
    let tmp = '';
    let i,j,L;
    let dp=Array(len).fill(0).map(x=>Array(len).fill(0));
    //console.log(dp);
    if(len<=1){
        return s
    }
    // 只有一个字符的情况是回文
    for(i = 0;i<len;i++){
        dp[i][i] = 1
        result = s[i]
    }

    // L是i和j之间的间隔数（因为间隔数从小到大渐增，所以大的间隔数总能包含小的间隔数）
    // i     j
    // abcdcba.length = L   所以 L = j-i+1; => j = i+L-1;
    for ( L = 2; L <= len; L++) {
        // 从0开始
        for ( i = 0; i <= len - L; i++) {
                j = i + L - 1;
            if(L == 2 && s[i] == s[j]) {
                dp[i][j] = 1;
                tmp = s.slice(i, i + L);
                if (tmp.length > result.length) result = tmp;
            }else if(s[i] == s[j] && dp[i + 1][j - 1] == 1) {
                dp[i][j] = 1
                tmp = s.slice(i, i + L);
                if (tmp.length > result.length) result = tmp;
            }

        }
    }
    //console.log(result);
    return result;
}
