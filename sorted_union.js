function unite(arr1, arr2, arr3) {
  answer = [];
  for(var j = 0; j < arguments.length; j++) {
    for(var i = 0; i < arguments[j].length; i++) {
      if(answer.indexOf(arguments[j][i]) === -1) {
        answer.push(arguments[j][i]);
      }
    }
  }
  return answer;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);



function unite(arr1, arr2, arr3) {
  return Array.prototype.slice.call(arguments).reduce(function(prev_arr, curr_arr, index) {
    return prev_arr.concat(curr_arr.filter(function(num) {
      return prev_arr.indexOf(num) === -1;
    }));
  }, []);
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
