/*
  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
  we can see that the 6th prime is 13.

  What is the 10 001st prime number?
*/


var solve = function() {

  var c = 0;
  var v = 0;

  while ( c < 10002 ) {
    v++;
    if ( isPrime(v)==true ) {
      c++;
    }
  }


  console.log(v);

}

var isPrime = function(n) {
  var prime = true;
  for (var i=n-1; i>1; i--) {
    if (n%i==0) {
      prime = false;
    }
  }
  return prime;
}

solve();