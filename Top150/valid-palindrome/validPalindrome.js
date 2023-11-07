/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
        const regex = /[^a-zA-Z0-9]/g;
    
        const cleanedString =  s.replace(regex, '').toLocaleLowerCase();
        const reversedString = cleanedString.split('').reverse().join('')
        return cleanedString == reversedString;
};  

console.log(isPalindrome('A man, a plan, a canal Panama'));