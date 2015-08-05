function steamroller(arr) {
  var answer = [];
  for(var i = 0; i < arr.length; i++) {
      // if the element is not an array just push to answer
      if(!Array.isArray(arr[i])) {
        answer.push(arr[i]);
      } else {
        // will recursively call the function until the element being looked
        // is not an array and will be pushed to answer array.
        // therefore everytime I finally get a value for tmp_array it is an
        // array of only non-array objects
        var tmp_array = steamroller(arr[i]);
        for(var j = 0; j < tmp_array.length; j++) {
          answer.push(tmp_array[j]);
        }
      }

    }
  return answer;
}

steamroller([1, [2], [3, [[4,5]]]]);

// Remember to visualize have many copies of the function are called with
// (http://www.pythontutor.com/visualize.html#mode=edit)