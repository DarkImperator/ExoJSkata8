//                      Fundamentals / Logic / Number Niveau __ :

// node Exo_WCS_AP_codewar_N_N4.js

// Exo 1 :

// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

// function breakChocolate(n,m) {
//     return 0;
// }

console.log(breakChocolate(5, 5)); // 24
console.log(breakChocolate(1, 1)); // 0
console.log(breakChocolate(0, 0)); // 0
console.log(breakChocolate("a","b")); // 0
console.log(breakChocolate(100, 100)); // 9999
console.log(breakChocolate(3, 6)); // 0
console.log(breakChocolate(9, 3)); // 0
console.log(breakChocolate(3, 4)); // 0
console.log(breakChocolate(7895, 9300)); // 0

//  <=============================== Soluce l.50 ===============================>
























// Ma soluce :
// function breakChocolate(n,m) {
//   if (n == null || n <= 0 || n == null || m <= 0) {
//     return 0;
//   } else {
//     return (n*m)-1;
//   }
// }

// Ma soluce avec ternaire :
// function breakChocolate(n,m) {
//   return (n == null || n <= 0 || n == null || m <= 0) ?  0 : (n*m)-1;
// }  


//   Autres soluces : 
//   1)   return (n*m === 0) ? 0 : n * m - 1;
//   2)   var breakChocolate = function(n, m) {
//          return Math.max(0, m*n - 1);
//        };
//   3)   
//   4)   
