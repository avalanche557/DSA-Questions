/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1 ;
    while(l < r) {
        let c1 = s[l].toLowerCase()
        let c2 = s[r].toLowerCase()
        if((c1 >= 'a' && c1 <= 'z') || (c1 >= "0" && c1 <= "9")) {
            if((c2 >= 'a' && c2 <= 'z') || (c2 >= "0" && c2 <= "9")) {
                if(c1 === c2) {
                    l++;
                    r--;
                } else {
                    return false
                }
               
            } else {
             r--;
            }
        } else {
        	l++
        }
    }
    return true;
};