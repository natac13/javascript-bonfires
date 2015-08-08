function pairwise(arr, arg) {
  var answer_arr = [];
  for(var i = 0; i < arr.length; i++) {
    var check_for = arg - arr[i];
    if(check_for == arr[i]) {
      continue;
    }
    if(arr.indexOf(check_for) !== -1 && answer_arr.indexOf(check_for) === -1) {
      answer_arr.push(check_for);
    }
  }
  var answer = 0;
    for(var j = 0; j < answer_arr.length; j++) {
      answer += arr.indexOf(answer_arr[j]);
    }
  return answer;
}

pairwise([1,4,2,3,0,5], 7);