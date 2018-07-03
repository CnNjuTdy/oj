/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    s = preOp(s)
    var result = "";
    for(var i=0;i<s.length;i++){
        var str = expandPalindrome(s,i);
        if(str.length>result.length){
            result = str;
        }
    }
    return result.replace(/\^/g,"");
};
var preOp = function(s){
    var result = "";
    for(var i=0;i<s.length;i++){
        result+="^"+s.charAt(i);
    }
    result+="^";
    return result;
}
var expandPalindrome = function(s,index){
    var str = s.charAt(index);
    for(var i=1;i<=index&&i<s.length-index;i++){
        if(s.charAt(index-i)==s.charAt(index+i)){
            str = s.substring(index-i,index+i+1);
        }else{
            return str;
        }
    }
    return str;
};

console.log(longestPalindrome("cabacd"));