//is valid palindrom 
//solution one is remove all the space and non-apha numeric values
//reverse the string and see if the strings are equal or not
var isPalindrome = function(s) {
    let newStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    console.log(newStr)

    let revStr = newStr.split("").reverse().join("")
    if(revStr === newStr) {
        return true
    } else{
        return false
    }
}

//solution 
var isPalindrome = function(s) {
    let  i = 0
    let j = s.length - 1;
    while(i < j) {
        
        while(i < j && !isAlphaNumber(s[i])) {
            i++
        }
        while( i < j &&! isAlphaNumber(s[j])) {
            j--
        }
        console.log(s[i].toLowerCase(), s[j].toLowerCase() )
        if(s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false
        }
        i++;
        j--
        
    }
    return true
    
    
};

const isAlphaNumber = (char) => {
		console.log(char)
    if(
        ("A".charCodeAt() <= char.charCodeAt() && "Z".charCodeAt() >= char.charCodeAt()) ||
        ("a".charCodeAt() <= char.charCodeAt() && "z".charCodeAt() >= char.charCodeAt()) ||
        ("0".charCodeAt() <= char.charCodeAt() && "9".charCodeAt() >= char.charCodeAt()) 
    ) 
    {
        return true
    }
    return false
}