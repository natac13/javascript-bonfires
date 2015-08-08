function sym(args) {
  var arrs = Array.prototype.slice.call(arguments);

  var x = arrs.reduce(function(a, b) {
    return a.filter(function(num) {
      return b.indexOf(num) === -1;
    }).concat(b.filter(function(num) {
      return a.indexOf(num) === -1;
    }));
  });


  return x.filter(function(num, index, arr) {
    return arr.indexOf(num) === index;
  });
}

sym([1, 2, 3], [5, 2, 1, 4]);
