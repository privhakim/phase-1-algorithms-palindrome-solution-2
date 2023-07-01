function isPalindrome(word) {
  // Write your algorithm here
  // writing a isPanlindrome function that returns either true or false
  //that means if the first letter is the same as the last letter
  //, and thee second letter is the same as the second to last letter,return true.
  const lowercaseWord = word.toLowerCase();
  let start = 0;
  let end = lowercaseWord.length - 1;

  while (start < end) {
    if (lowercaseWord[start] !== lowercaseWord[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

/* 
  Add your pseudocode here
  iterate from the begining to the middle 
   check each letter to the coressponding letter from the end
   if any letter dont match , return false 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
