/* 

*/

function hammingWeight(num) {
    if (num === 0) {
        return [0];
    }
    let binaryArray = [];
    //converting num => binary Array
    while (num > 0) {
        let remainder = num % 2;
        binaryArray.unshift(remainder);
        num = Math.floor(num / 2);
    }
    //counting number of 1's
    let noOfOneBits = 0;
    for ( let i = 0 ; i < binaryArray.length ; i++ ){
        if ( binaryArray[i] === 1 ){
            noOfOneBits++;
        }
    }
    return noOfOneBits
}
console.log(hammingWeight(2147483645));