/*
    551. Student Attendance Record I
        You are given a string s representing an attendance record for a student where each character signifies 
        whether the student was absent, late, or present on that day. The record only contains the following three characters:
        'A': Absent.
        'L': Late.
        'P': Present.
        The student is eligible for an attendance award if they meet both of the following criteria:
            The student was absent ('A') for strictly fewer than 2 days total.
            The student was never late ('L') for 3 or more consecutive days.
        Return true if the student is eligible for an attendance award, or false otherwise.
    Example 1:
        Input: s = "PPALLP"
        Output: true
        Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.
    Example 2:
        Input: s = "PPALLL"
        Output: false
        Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.
    Constraints:
        1 <= s.length <= 1000
        s[i] is either 'A', 'L', or 'P'
*/
var checkRecord = function(s) {
    // Loop approach runtime = 1ms & Beats 47.01%

    // let absentCount = 0 , arr = s.split('');
    // let leaveCount = s.includes('LLL');
    // for ( let i = 0 ; i < arr.length ; i++ ){
    //     if ( arr[i] === 'A' ) absentCount++
    // }
    // return !leaveCount && absentCount < 2;

    // Efficient approach runtime = 0ms & beats 100%
    
    const checkAbsent = s.split('A').length - 1;
    const checkLeaves = s.includes('LLL');
    return (!checkLeaves) && checkAbsent <= 1;
};
console.log(checkRecord('PPALLP'));
console.log(checkRecord('PPALLL'));
