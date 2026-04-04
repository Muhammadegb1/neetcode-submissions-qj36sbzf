class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         const n = board.length; // 9
    const rows = Array.from({ length: n }, () => new Set());
    const cols = Array.from({ length: n }, () => new Set());
    const blocks = Array.from({ length: n }, () => new Set());

    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        const val = board[r][c];
        if (val === '.') continue;

        const blockIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

        // If the value already exists in row, column or block → invalid
        if (rows[r].has(val) || cols[c].has(val) || blocks[blockIndex].has(val)) {
            return false;
        }

        // Add value to corresponding sets
        rows[r].add(val);
        cols[c].add(val);
        blocks[blockIndex].add(val);
      }
    }

    return true;

    }
}
