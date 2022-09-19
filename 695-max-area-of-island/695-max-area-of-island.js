/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    let m = grid[0].length;
    let n = grid.length;

    for (y = 0; y < n; y++){
        for (x=0; x < m; x++){
            if (grid[y][x] === 1) {
                maxArea = Math.max(maxArea, recursFill(grid, y, x))
            }
        }
    }

    return maxArea;

    function recursFill(grid, sr, sc){
        if (grid[sr][sc] !== 1) return 0;

        grid[sr][sc] = 2;
        let area = 1;

        if (sr < n - 1) area += recursFill(grid, sr + 1, sc);
        if (sc < m - 1) area += recursFill(grid, sr, sc + 1);
        if (sr > 0) area += recursFill(grid, sr - 1, sc);
        if (sc > 0) area += recursFill(grid, sr, sc - 1);

        return area;
    }
};