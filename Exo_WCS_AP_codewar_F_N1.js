//                      Fundamentals Niveau 1 :

// node codewar_F_N1.js

// Exo 1 :
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function evenOrOdd(number) {
  
// }

function evenOrOdd(number) {
    if(Number.isInteger(number)) {
        if(number%2 === 0) {
          return "Even";
          } else {
            return "Odd";
            }
      } else {
        return "Morron, it's not AN interger !!!"
      }
  }

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(3.5));
console.log(evenOrOdd(-12));
console.log(evenOrOdd(-37));

// Exo 2 :
//   Very simple, given an integer or a floating-point number, find its opposite.
// Examples:
//     1: -1
//     14: -14
//     -34: 34

// function opposite(number) {
//   //your code here
// }


//  <=============================== Soluce l.50 ===============================>






























// Ma soluce :
// Exo 1 :
// function evenOrOdd(number) {
//     if(Number.isInteger(number)) {
//         if(number%2 === 0) {
//           return "Even";
//           } else {
//             return "Odd";
//             }
//       } else {
//         return "Morron, it's not AN interger !!!"
//       }
//   }

// Exo 2 :
// ========>  V1 : Trop long par rapport a ce qui est possible ! :
//   function opposite0(number) {
//     let inv = 0;
//     if(number > 0) {
//       inv = inv - number;
//     } else {
//       inv = inv - number;
//     }
//     return inv;
//   }
//   console.log(opposite0(2));
//   console.log(opposite0(3));
//   console.log(opposite0(3.50));
//   console.log(opposite0(-12));
//   console.log(opposite0(-37));
//   console.log(opposite0(-37.25333));

//  ========>  Variante V1 avec ternaire :
//   function opposite1(number) {
//     let inv = 0;
//     return number > 0 ? inv = inv - number : inv = inv - number;
//   }
//   console.log(opposite1(2));
//   console.log(opposite1(3));
//   console.log(opposite1(3.50));
//   console.log(opposite1(-12));
//   console.log(opposite1(-37));
//   console.log(opposite1(-37.25333));
//   console.log(opposite1("a"));

//  ========>  V2 : Better ! :
//   function opposite(number) {
//     let inv = 0;
//       inv = inv - number;
//     return inv;
// }
// console.log(opposite(2));
// console.log(opposite(3));
// console.log(opposite(3.50));
// console.log(opposite(-12));
// console.log(opposite(-37));
// console.log(opposite(-37.25333));

//   Autre soluce : 
//   1)   return number > 0 ? -number : Math.abs(number);
//   2)    return -number;
//   3)    return number * (-1);
//   4)     return n-n*2;