function destroyer(arr) {
  // Remove all the values
  var answerArray = arguments[0];
  for(var i = 1; i < arguments.length; i++) {
    var target = arguments[i];
    answerArray = answerArray.filter(function(num) {
      return num !== target;
      });
  }
  return answerArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);