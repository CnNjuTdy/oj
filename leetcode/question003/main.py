class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        def getLength(s, index):
            i = index+1
            while i < len(s):
                str = s[index:i]
                c = s[i]
                if c in str:
                    return i-index
                else:
                    i = i+1
                    continue
            return len(s)-index
        result = 0
        for index in range(len(s)):
            temp = getLength(s, index)
            result = result if result > temp else temp
        return result
