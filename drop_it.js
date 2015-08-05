function drop(arr, func) {
  var len = arr.length;
  var org_arr = arr.slice(0);
  for(var i = 0; i < len; i++) {
    if(func(org_arr[i])) {
      return arr;
    } else {
      arr.shift();
    }
  }
  return arr;
}
drop([1, 2, 3], function(n) {return n < 3; });