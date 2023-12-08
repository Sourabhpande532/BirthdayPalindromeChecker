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
  day: 31,
  month: 12,
  year: 2021,
};

/* Convert Date Number to string */
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

/* Structure of all date formate */
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

/* check is isPalindrome date or not like: rececar === racecar if true o.w false */
function checkIsPalindromeForAllDateFormats(date) {
  let listOfPalindromDate = getAllDateFormate(date);
  let isThis = false;
  for (let i = 0; i < listOfPalindromDate.length; i++) {
    if (isPalindrome(listOfPalindromDate[i])) {
      isThis = true;
      break;
    }
  }
  return isThis;
}

console.log(checkIsPalindromeForAllDateFormats(date));

/* find the next palindrome date, also how many days are in between */

/* check Leap year weather is or not */
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}
// console.log(isLeapYear(2016));

/* Let check next date from now, e.g tommarow */
function getNextDate(date) {
  let day = date.day + 1;
  let month = date.month;
  let year = date.year;
  let lastDaysInMonth = [30, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  /* Check for Feb  */
  if (month === 2) {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month++;
      }
    } else {
      if (day > 28) {
        day = 1;
        month++;
      }
    }
    /* check for remaining month  */
  } else {
    if (day > lastDaysInMonth[month - 1]) {
      day = 1;
      month++;
    }
  }
  /* check for month if cross 12 to 13 */
  if (month > 12) {
    month = 1;
    year++;
  }

  return {
    day: day,
    month: month,
    year: year,
  };
}

console.log(getNextDate(date));

/* Now,time has come to know know next palindrome date & how far it is from now */
function getNextPalindromeDateFar(date) {
  let count = 0;
  let nextDate = getNextDate(date);
  while (1) {
    count++;
    let isNextPalindromDate =
      checkIsPalindromeForAllDateFormats(nextDate);
    if (isNextPalindromDate) {
      break;
    }
    nextDate = getNextDate(nextDate);
    // console.log(nextDate);
  }
  return [count, nextDate];
}
console.log(getNextPalindromeDateFar(date));


