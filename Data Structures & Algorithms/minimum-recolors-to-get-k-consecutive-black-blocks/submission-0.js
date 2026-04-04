class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {

    let n = blocks.length;
    let countW = 0;
    for (let i = 0; i < k; i++) {
        if (blocks[i] === 'W') countW++;
    }

    let minOps = countW;

    for (let i = k; i < n; i++) {
        if (blocks[i] === 'W') countW++;
        if (blocks[i - k] === 'W') countW--;

        minOps = Math.min(minOps, countW);
    }

    return minOps;

    }
}
