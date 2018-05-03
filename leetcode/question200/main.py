class Solution(object):
    def numIslands(self, grid):
        def remove(i,j):
            if 0 <= i < len(grid) and 0 <= j < len(grid[i]) and grid[i][j] == '1':
                grid[i][j]='0'
                map(remove,[i-1,i+1,i,i],[j,j,j-1,j+1])
                return 1
            return 0
        return sum(remove(i, j) for i in range(len(grid)) for j in range(len(grid[i])))