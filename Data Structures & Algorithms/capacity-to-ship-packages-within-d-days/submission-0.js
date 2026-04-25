class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let sumWeight = 0;
        let capacity = 0;
        for(let i = 0;i < weights.length ; i++){
            sumWeight += weights[i];
            capacity = Math.max(capacity, weights[i]);
        }

        let l = capacity;
        let r = sumWeight;

        while(l <= r){
            const mid = Math.floor((l + r) / 2);
            
            let current = 0;
            let requireDays = 1;
            for (let w of weights){
                if (current + w > mid){
                    requireDays++;
                    current = 0;
                }
                current += w;
            }
            if(requireDays <= days){
                r = mid - 1;
                capacity = mid;
            }else{
                l = mid + 1
            }
        }

        return capacity;
    }
}
