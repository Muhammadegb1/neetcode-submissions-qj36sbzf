class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const em = new Set();

        for (const email of emails) {
            let [local, domain] = email.split("@");

            local = local.split("+")[0].replaceAll(".", "");

            em.add(local + domain);
        }

        return em.size;
    }
}
