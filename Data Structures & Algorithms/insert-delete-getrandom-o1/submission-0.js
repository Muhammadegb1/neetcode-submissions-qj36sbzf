class RandomizedSet {
    constructor() {
        this.numMap = new Map();
        this.arr = [];
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (this.numMap.has(val)) return false;
        this.numMap.set(val, this.arr.length);
        this.arr.push(val);
        return true;
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if (!this.numMap.has(val)) return false;
        const index = this.numMap.get(val);
        const last = this.arr[this.arr.length - 1] 
        this.arr[index] = last;

        this.numMap.set(last, index);
        this.arr.pop();
        this.numMap.delete(val);
        return true
    }

    /**
     * @return {number}
     */
    getRandom() {
        return this.arr[Math.floor(Math.random() * this.arr.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
