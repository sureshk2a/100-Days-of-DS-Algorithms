// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

var longestPalindrome = function(s) {
    var finalLst = []
    var plinList = []

    var isPalinfrome = function(l) {
        if(l.reverse() == l){
            return true;
        }
    }

    for(var i=0;i<s.length;i++){
        plinList.push(s[i])
    }
};