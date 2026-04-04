class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        if (numRows === 0) return [];

        const arr = [];

        for (let i = 0; i < numRows; i++) {
            arr[i] = new Array(i + 1).fill(1); // כל שורה מתחילה ומסתיימת ב־1

            // חישוב הערכים שבאמצע
            for (let j = 1; j < i; j++) {
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
            }
        }
        return arr;
    }
}
