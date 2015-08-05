function smallestCommons(arr) {
  var start = Math.min(arr[0], arr[1]);
  var stop = Math.max(arr[0], arr[1]);
  var a = start;
  for(var i = start; i < stop; i++) {
    var b = i+1;
    var c = a;
    while (a && b) { 
        if(a > b) {
          a %= b;
        } else {
          b = b % a;
        }
      } 
      
      a = Math.abs(c*(i+1))/(a+b);
  }
  return a;
}

smallestCommons([1,4]);