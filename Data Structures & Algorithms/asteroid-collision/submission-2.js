class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for (let a of asteroids) {

            let destroyed = false;

            while (
                stack.length > 0 &&
                stack[stack.length - 1] > 0 &&
                a < 0
            ) {
                const top = stack[stack.length - 1];

                if (Math.abs(top) < Math.abs(a)) {
                    stack.pop(); 
                } 
                else if (Math.abs(top) === Math.abs(a)) {
                    stack.pop(); 
                    destroyed = true;
                    break;
                } 
                else {
                    destroyed = true; 
                    break;
                }
            }

            if (!destroyed) {
                stack.push(a);
            }
        }

        return stack;
    }
}
