/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const oldColor = image[sr][sc];    
    const spread = (r, c) => {
        if(image[r] && image[r][c] === oldColor){
            image[r][c] = color;
            spread(r + 1, c);
            spread(r - 1, c);
            spread(r, c + 1);
            spread(r, c - 1);
        }
    }
    oldColor != color && spread(sr, sc)
    return image;
};