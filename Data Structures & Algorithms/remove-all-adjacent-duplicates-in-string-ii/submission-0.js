class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    removeDuplicates(s, k) {
        
        let arr = s;

        while(true){
            let changed = false;
            for (let i = 0; i < arr.length - k + 1; i++){
                if(new Set(arr.slice(i,k + i)).size === 1){
                    arr = arr.slice(0,i) + arr.slice(k+i,);
                    changed = true;
                    break;
                }
            }

            if(!changed){
                return arr;
            }
           
        }

    }
}
