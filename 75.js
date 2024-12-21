/*
    461. Hamming Distance
    The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
    Given two integers x and y, return the Hamming distance between them.

    Example 1:
        Input: x = 1, y = 4
        Output: 2
        Explanation:
        1   (0 0 0 1)
        4   (0 1 0 0)
            ↑   ↑
        The above arrows point to positions where the corresponding bits are different.
    Example 2:
        Input: x = 3, y = 1
        Output: 1
*/
var hammingDistance = function(x, y) {
<<<<<<< HEAD
    // for smaller numbers
    //let hammingDistance = 0;
    //const binary1 = x.toString(2) , binary2 = y.toString(2);
    //const maxLength = Math.max(binary1 , binary2);
    //const paddedBinary1 = binary1.padStart(maxLength , '0');
    //const paddedBinary2 = binary2.padStart(maxLength , '0');
    //for ( let i = 0 ; i < maxLength ; i++ ){
      //  if ( paddedBinary1[i] !== paddedBinary2[i] ){
        //    hammingDistance++;
        //}
    //}
    //return hammingDistance;
    // for higher numbers
=======
    // let hammingDistance = 0;
    // const binary1 = x.toString(2) , binary2 = y.toString(2);
    // const maxLength = Math.max(binary1 , binary2);
    // const paddedBinary1 = binary1.padStart(maxLength , '0');
    // const paddedBinary2 = binary2.padStart(maxLength , '0');
    // for ( let i = 0 ; i < maxLength ; i++ ){
    //     if ( paddedBinary1[i] !== paddedBinary2[i] ){
    //         hammingDistance++;
    //     }
    // }
    // return hammingDistance;

    // XOR the two numbers to find differing bits
>>>>>>> ae2c0bc (Leetcode Problem 463 and 461 Fix)
    let xor = x ^ y;
    let distance = 0;
    
    // Count the number of 1s in the XOR result
    while (xor > 0) {
        distance += xor & 1; // Increment if the least significant bit is 1
        xor = xor >> 1;      // Right-shift to check the next bit
    }
    
    return distance;
};
console.log(hammingDistance(1 , 4));
console.log(hammingDistance(3 , 1))
