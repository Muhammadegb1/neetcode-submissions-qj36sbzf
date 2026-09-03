class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const em = new Set();
        for (const email of emails){
            let str = "";
            let [local,domain] = email.split("@")
            for(const char of local){
                if(char === "."){
                    continue;
                }else if(char === "+"){
                    break;
                }
                str += char;
            }
            str += domain;
            em.add(str)
        }
        return em.size;
    }
}
