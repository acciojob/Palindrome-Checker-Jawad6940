// complete the given function

function palindrome(str){
 str = str.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase();
    return str == str.split('').reverse().join('');
}
module.exports = palindrome
