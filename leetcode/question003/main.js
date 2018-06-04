/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var temp = getLength(s, i);
        result = result > temp ? result : temp;
    }
    return result;
};

var getLength = function (s, index) {
    for (var i = index + 1; i < s.length; i++) {
        var str = s.substring(index, i);
        var c = s.charAt(i);
        if (str.indexOf(c) >= 0) {
            return i - index;
        } else {
            continue;
        }
    }
    return s.length - index;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
