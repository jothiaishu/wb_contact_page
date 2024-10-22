function isPalindrome(num) {
    let str = num.toString();
    let revStr = str.split("").reverse().join("");
    return str === revStr;
}
for (let i = 1; i <= 100; i++) {
    if (isPalindrome(i) && (i >= 10)) {
        console.log(i + " is a palindrome");
    }
}