function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  // the (?=) is to mathc somethings but not to include it in the capture group
  // therefore if the regex matches the capture group which is a lower case
  // followed by a upper case, then adds the '-' after the capture group which
  // which because of the (?=) is only the lower case letter
  str = str.replace(/\s|_|([a-z](?=[A-Z]))/g, '$1-').toLowerCase();
  return str;
}

spinalCase('This Is Spinal Tap');