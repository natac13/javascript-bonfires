function binaryAgent(str) {
  var str_arr = str.split(" ");
  console.log(str_arr);
  var answer = [];
  for(var i = 0; i < str_arr.length; i++) {
    var letter = String.fromCharCode(parseInt(str_arr[i], 2));
    answer.push(letter);
  }
  return answer.join('');
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');