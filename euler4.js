/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

var largestPalindrome = function() {
  
  var bigPalindrome = 0;

  for ( var a = 999; a >= 100; a-- ) {
    for ( var b = 999; b >= 100; b-- ) {

      var num = a * b;

      if ( isPalindrome(num)) {
        if ( num > bigPalindrome ) {
          bigPalindrome = num;
        }
      }

    }
  }

  console.log(bigPalindrome);

}

var isPalindrome = function(n) {

  var s = n.toString(); // convert to string
  var newString = reverse(s); // reverse the string

  // convert back to ints
  var oldNum = parseInt(s);
  var newNum = parseInt(newString);
  
  // are they the same?
  if ( oldNum === newNum ) {
    return true;
  }
  else {
    return false;
  }

}

var reverse = function(s){
  return s.split("").reverse().join("");
}

largestPalindrome();
