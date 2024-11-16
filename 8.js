//String to Integer
/*
let char = '5';
let intValue = char.charCodeAt(0) - '0'.charCodeAt(0);
console.log(intValue); // Output: 5
*/
var myAtoii = function(s) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = Math.pow(-2, 31);
    let i = 0;
    let sign = 1;
    let result = 0;

    // Remove leading whitespace
    while (s[i] === ' ') {
        i++;
    }
    // Determine sign
    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Read integer
    while (i < s.length && /[0-9]/.test(s[i])) {
        let digit = s[i] - '0';
        if (result > (INT_MAX - digit) / 10) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        result = result * 10 + digit;
        i++;
    }

    return sign * result;
};

console.log(myAtoii('  42'));