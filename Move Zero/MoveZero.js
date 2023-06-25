function moveZeros(nums) {
  let index = 0; // keeps track of the current index to place non-zero elements

  // iterate through the array and move non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }

  // fill the remaining elements with zeros
  while (index < nums.length) {
    nums[index] = 0;
    index++;
  }

  return nums;
}

// Example usage:
const nums1 = [0, 1, 0, 3, 12];
console.log(moveZeros(nums1)); // Output: [1, 3, 12, 0, 0]

const nums2 = [0];
console.log(moveZeros(nums2)); // Output: [0]
