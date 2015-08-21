function drawer(price, cash, cid) {
  var string_to_number = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00,
  };
  var change_arr = [];
  var change_due = cash - price;
  var total_drawer = cid.reduce(function(prev, curr, index) {
    return prev + curr[1];
  }, 0.00);

  console.log(total_drawer);

  if(total_drawer < change_due) {
    return "Insufficient Funds";
  } else if( total_drawer === change_due) {
    return "Closed";
  } else {
    cid.reverse();
    cid = cid.map(function(unit) {
      var initial_amount = unit[1];
      if(change_due / string_to_number[unit[0]] >= 1) {
        var count = 0.00;
        while(change_due / string_to_number[unit[0]] >= 1 && initial_amount > 0) {
          change_due = +(change_due).toFixed(2);
          change_due -= string_to_number[unit[0]];
          initial_amount -= string_to_number[unit[0]];
          count++;
        }
        change_arr.push([unit[0], (string_to_number[unit[0]]*count)]);
        return [unit[0], initial_amount];
      } else {
        return [unit[0], unit[1]];
      }
    });

  }

  return change_arr;
}


var x = drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
console.log(x);
