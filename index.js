function reverseString(string) {
  let listOfCharactor = string.split("");
  let reverseListOfCharactor = listOfCharactor.reverse();
  let concateReverseListOfChar = reverseListOfCharactor.join("");
  return concateReverseListOfChar;
}
console.log(reverseString("hellow"));
