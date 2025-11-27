/*
703. Kth Largest Element in a Stream
You are part of a university admissions office and need to keep track of the kth highest test score from 
applicants in real-time. This helps to determine cut-off marks for interviews and admissions dynamically 
as new applicants submit their scores.You are tasked to implement a class which, for a given integer k, 
maintains a stream of test scores and continuously returns the kth highest test score after a new score 
has been submitted. More specifically, we are looking for the kth highest score in the sorted list of all scores.

Implement the KthLargest class:
KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of test scores nums.
int add(int val) Adds a new test score val to the stream and returns the element representing the kth largest 
element in the pool of test scores so far.
Example 1:
    Input:
    ["KthLargest", "add", "add", "add", "add", "add"]
    [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
    Output: [null, 4, 5, 5, 8, 8]
    Explanation:
    KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    kthLargest.add(3); // return 4
    kthLargest.add(5); // return 5
    kthLargest.add(10); // return 5
    kthLargest.add(9); // return 8
    kthLargest.add(4); // return 8
Example 2:
    Input:
    ["KthLargest", "add", "add", "add", "add"]
    [[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]
    Output: [null, 7, 7, 7, 8]
    Explanation:
    KthLargest kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3]);
    kthLargest.add(2); // return 7
    kthLargest.add(10); // return 7
    kthLargest.add(9); // return 7
    kthLargest.add(9); // return 8
Constraints:
    0 <= nums.length <= 104
    1 <= k <= nums.length + 1
    -104 <= nums[i] <= 104
    -104 <= val <= 104
    At most 104 calls will be made to add.
*//**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = [];

    // Build initial heap with nums
    for (let n of nums) {
        this.add(n);
    }
};

// ----- Helper functions for min-heap -----
KthLargest.prototype._swap = function(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
};

KthLargest.prototype._bubbleUp = function() {
    let i = this.heap.length - 1;
    while (i > 0) {
        let p = Math.floor((i - 1) / 2);
        if (this.heap[p] <= this.heap[i]) break;
        this._swap(p, i);
        i = p;
    }
};

KthLargest.prototype._bubbleDown = function() {
    let i = 0, n = this.heap.length;

    while (true) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let smallest = i;

        if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
        if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;

        if (smallest === i) break;
        this._swap(i, smallest);
        i = smallest;
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    // Push new value into heap
    this.heap.push(val);
    this._bubbleUp();

    // If heap is larger than k → remove smallest
    if (this.heap.length > this.k) {
        // Remove root (smallest)
        this._swap(0, this.heap.length - 1);
        this.heap.pop();
        this._bubbleDown();
    }

    // The root is k-th largest element
    return this.heap[0];
};
