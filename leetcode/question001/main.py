class Solution(object):
    def twoSum(self, nums, target):
        size = len(nums)
        for i in range(size):
            for j in range(size):
                if(nums[i]+nums[j]==target and i!=j):
                    return [i,j]

def main():
    solution = Solution()
    print(solution.twoSum([3,2,4], 6))

if __name__ == '__main__':
    main()

