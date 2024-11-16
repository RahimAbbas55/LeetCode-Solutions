//Median of two sorted arrays
// class Solution {
//     public:
//         double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
//             int m = nums1.size() , n = nums2.size();
//             int totSize = m + n , counter = 0;
//             vector<int> result(totSize);
//             for ( int i = 0 ; i < m ; i++ ){
//                 result[counter++] = nums1[i];
//             }
//             for ( int i = 0 ; i < n ; i++ ){
//                 result[counter++] = nums2[i];
//             }
//             sort(result.begin() , result.end());
//             if ( totSize % 2 == 0 ){
//                 //even elements
//                 return (result[totSize / 2 - 1] + result[totSize / 2]) / 2.0;
//             }
//             else
//             {
//                 return result[totSize / 2];
//             }
//         }
    
//     };