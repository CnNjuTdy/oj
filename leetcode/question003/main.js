var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return "";
    }
    var result = "";
    for (var i = 0; i < s.length; i++) {
        var temp = getLongest(s, i);
        if (result.length < temp.length) {
            result = temp;
        }
    }
    return result;
};