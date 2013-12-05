var bigNumber = 603;

var isPrime = function(n) {
  var prime = true;
  for (var i=n-1; i>1; i--) {
    if (n%i==0) {
      prime = false;
    }
  }
  return prime;
}

/*
console.log(isPrime(bigNumber));
*/

var isFactor = function(n, p) {
  var factor = false;
  if (n%p==0) {
    factor = true;
  }
  return factor;
}

/*
console.log(isFactor(10,3));
*/

var largestPrimeFactor = function(n) {
  var lpf = 0;
  var found = false;
  for (var i=2; i<n; i++) {
    if (isFactor(n,i) && isPrime(n/i)) {
      if (n/i > lpf) {
        lpf = n/i;
      }
    }
  }
  return lpf;  
}

console.log(largestPrimeFactor(bigNumber));
