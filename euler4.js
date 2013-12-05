/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

var largestPalindrome = function() {
  
  for (var n1=999; n1>0; n1--) {
    
    for (var n2=999; n2>0; n2--) {
    
      var product = n1 * n2;
      var productString = product.toString();
      var stringLength = productString.length;
      

    }

  }

  console.log(stringLength);
  console.log(n1*n2);
}

largestPalindrome();
