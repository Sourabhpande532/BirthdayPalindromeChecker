function reverseString(string) {
  let listOfCharactor = string.split("");
  let reverseListOfCharactor = listOfCharactor.reverse();
  let concateReverseListOfChar = reverseListOfCharactor.join("");
  return concateReverseListOfChar;
}

function isPalindrome(reverseStringChar) {
  let isPalindromeString = reverseString(reverseStringChar);
  if (isPalindromeString === reverseStringChar) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("hellow"));
console.log(isPalindrome("racecar"));
