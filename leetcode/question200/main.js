/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    revertToNum(grid);
    var count = 0;
    while (has1(grid)) {
        removeLand(grid);
        count++;
    }
    return count;
};

var removeLand = function(grid) {
    var height = grid.length;
    var width = grid[0].length
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            if (grid[i][j]) {
                remove(grid, i, j);
                return;
            }
        }
    }
}

var remove = function(grid, m, n) {
    var height = grid.length;
    var width = grid[0].length
    var stack = [];
    stack.push({ x: m, y: n });
    while (stack.length != 0) {
        var o = stack.pop();
        if (grid[o.x][o.y]) {
            grid[o.x][o.y] = 0;
            //上一个
            if (o.x != 0) {
                stack.push({ x: o.x - 1, y: o.y });
            }
            //下一个
            if (o.x != height - 1) {
                stack.push({ x: o.x + 1, y: o.y });
            }
            //右一个
            if (o.y != width - 1) {
                stack.push({ x: o.x, y: o.y + 1 });
            }
            //左一个
            if (o.y != 0) {
                stack.push({ x: o.x, y: o.y - 1 });
            }
        }
    }
}

var has1 = function(grid) {
    var height = grid.length;
    if (height == 0) {
        return false;
    }
    var width = grid[0].length
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            if (grid[i][j]) {
                return true;
            }
        }
    }
    return false;
}

var revertToNum = function(grid) {
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == "0") {
                grid[i][j] = 0
            } else {
                grid[i][j] = 1
            }
        }
    }
}