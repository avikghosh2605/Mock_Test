function firstUniqChar(s) {
    const charCount = {}; // stores the count of each character
  
    // count the occurrence of each character in the string
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
  
    // find the first character with count 1 and return its index
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCount[char] === 1) {
        return i;
      }
    }
  
    return -1; // return -1 if no non-repeating character is found
  }
  
  // Example usage:
  console.log(firstUniqChar("leetcode")); // Output: 0
  console.log(firstUniqChar("loveleetcode")); // Output: 2
  console.log(firstUniqChar("aabb")); // Output: -1
  