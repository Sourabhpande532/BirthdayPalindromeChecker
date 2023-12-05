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

const date = {
  day: 6,
  month: 9,
  year: 2020,
};

function convertDateNumberToString(date) {
  let stringFormateDate = { day: "", month: "", year: "" };
  date.day < 10
    ? (stringFormateDate.day = "0" + date.day)
    : (stringFormateDate.day = date.day.toString());
  date.month < 10
    ? (stringFormateDate.month = "0" + date.month)
    : (stringFormateDate.month = date.month.toString());
  stringFormateDate.year = date.year.toString();
  return stringFormateDate;
}

console.log(convertDateNumberToString(date));
