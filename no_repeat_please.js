/**
 * In the base case temp_arr is only length one so this triggers the if block and return an 
 * array(1) but two characters inside one being the fixed and therefore the other has only
 * one spot to take up.
 *
 * **** Capatialized letters are the fixed_chars in the visual recursion tree.******
 * *** In this example the recursion goes 3 levels deep. By keeping the first letter of the string 
 * fixed each time and geting the permutations of remaining part of the string until that sting is
 * of length one at ehich case we just append it to the fixed chacter and return it as the only 
 * permutation. This is the 3 level... 
 *
 * 
 * When we get out of the base case the length of the string at this level 2 is going to be 
 * 2, so the outter loop runs again with the second value as the fixed_char. Therefore to recap, down a 
 * level in recursion and the string now is only 2 characteers long with the 'a' fixed in the higher level.
 * So the first time through the outter loop in this 2 deep level string is 'ab' and therefore we run the 
 * outter loop twice to get both Ab and Ba. These then are pushed in the 2nd level and then returned 
 * in the permutation_array up to the first level and at this point have got all the permutations 
 * with the first 'a' in the 'aab' series as the fixed character. Then it will do the same process 
 * for each charater in the first level's string.length loop.
 */


function permIt(fixed_char, string) {
  // start is the fixed value when looking at the visual recursion tree.
  if(string.length === 1) {
    return [fixed_char + string]; /// this will be temp_array on the base cases
  } else {
    var permutations_array = []; /// this is temp_array on any other case.
    for(var i = 0; i < string.length; i++) {
      var temp_array = permIt(string[i], string.substr(0,i) + string.substr(i+1));
      for(var j = 0; j < temp_array.length; j++) {
        permutations_array.push(fixed_char + temp_array[j]);
      }
    }
    return permutations_array;
  }
}
function permAlone(str) {
  return permIt('', str).filter(function(permutation) {
    if(!permutation.match(/(.)\1/g)) {
      return permutation;
    }
  }).length;

}

permAlone('aab');