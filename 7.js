/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = 0;
    if ( x > 0 ){
        while(x !== 0){
            let digit = x % 10;
            x = Math.floor(x / 10);
            if (reverse > Math.pow(2, 31) / 10 || (reverse === Math.pow(2, 31) / 10 && digit > 7)) return 0;
            if (reverse < Math.pow(-2, 31) / 10 || (reverse === Math.pow(-2, 31) / 10 && digit < -8)) return 0;
            reverse = reverse * 10 + digit;
        }
    }
    if(x < 0){
        x = x * (-1);
        while ( x !== 0 ){
            let digit = x % 10;
            x = Math.floor(x / 10);
            if (reverse > Math.pow(2, 31) / 10 || (reverse === Math.pow(2, 31) / 10 && digit > 7)) return 0;
            if (reverse < Math.pow(-2, 31) / 10 || (reverse === Math.pow(-2, 31) / 10 && digit < -8)) return 0;
            reverse = reverse * 10 + digit;
        }
        reverse = reverse * (-1);
    }
    return reverse;
};

console.log(reverse(-123));