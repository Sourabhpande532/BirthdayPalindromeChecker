function reverseString(string) {
  let listOfCharactor = string.split("");
  let reverseListOfCharactor = listOfCharactor.reverse();
  let concateReverseListOfChar = reverseListOfCharactor.join("");
  return concateReverseListOfChar;
}

/* check isPalindrome or not */
function isPalindrome(reverseStringChar) {
  let isPalindromeString = reverseString(reverseStringChar);
  if (isPalindromeString === reverseStringChar) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("racecar"));

const date = {
  day: 20,
  month: 2,
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

function getAllDateFormate(date) {
  let dateString = convertDateNumberToString(date);
  let ddmmyyyy = dateString.day + dateString.month + dateString.year;
  let mmddyyyy = dateString.month + dateString.day + dateString.year;
  let yyyymmdd = dateString.year + dateString.year + dateString.day;
  let ddmmyy = dateString.day + dateString.month + dateString.year.slice(-2);
  let mmddyy = dateString.month + dateString.day + dateString.year.slice(-2);
  let yymmdd = dateString.year.slice(-2) + dateString.month + dateString.day;
  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}
console.log(getAllDateFormate(date));


function checkIsPalindromeForAllDateFormats(date){
let listOfPalindromDate = getAllDateFormate(date);
let isThis = false;
for(let i = 0; i<listOfPalindromDate.length; i++){
  if(isPalindrome(listOfPalindromDate[i])){
    isThis = true;
    break;
  }
}
return isThis;
}

console.log(checkIsPalindromeForAllDateFormats(date));