//                      Logic Niveau 4 :

// node Exo_WCS_AP_codewar_L_N4.js

// Exo 1 :

// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.
// For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.
// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

// function inAscOrder(arr) {
//     // Code your algorithm here :)
    
//     // Hmmm ... maybe we should try our luck out ...
//     // if (Math.random() > 0.5) {
//     //  return true;
//     // } else {
//     //  return false;
//     // }
//   }

console.log(inAscOrder([1,2,4,7,19]));    // T
console.log(inAscOrder([1,2,3,4,5]));    // T
console.log(inAscOrder([1,6,10,18,2,4,20]));    // F
console.log(inAscOrder([1,6,10,18,2,4,20,3,7,0]));    // F
console.log(inAscOrder([9,8,7,6,5,4,3,2,1]));    // F
console.log(inAscOrder([-7,-3,-2.9,-1,-0.5,0,1000]));    // T


//  <=============================== Soluce l.50 ===============================>














// Ma soluce :
// Exo 1 :
// function inAscOrder(arr) {
//   // const verifTab = [];
//   let verifCount = 0;

//   for(let i=0; i< arr.length -1; i++) {
//     // console.log("arr[i] = " + arr[i]);
//     // console.log("arr[i+1] = " + arr[i+1]);
//     if(arr[i] < arr[i+1]) {
//       verifCount += 0;
//       // console.log("verifCount zero = " + verifCount);
//     } else {
//       verifCount += 1;
//       // console.log("verifCount unint = " + verifCount);
//     }
//   // console.log("verifCount unext = " + verifCount);
//   }
//   return verifCount === 0 ? true : false
// }

// Exo 1, modif chat GPT :
// function inAscOrder(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     console.log("arr[i] = " + arr[i]);
//     console.log("arr[i+1] = " + arr[i+1]);
//       if (arr[i] > arr[i + 1]) {
//         return false;
//       }
//   }
//   return true;
// }

//   Autres soluces : 
//   1)   function inAscOrder(arr) {
//          return arr.every((_,i)=>i==0||arr[i]>arr[i-1]);
//        }
//   2)   const inAscOrder = (arr) => {
//          return arr.join('') === arr.sort((a, b) => a - b).join('');
//        }
//   3)   function inAscOrder(arr) {
//          return arr.slice(1).every((x, i) => x >= arr[i]);
//        }
//   4)   const inAscOrder = (arr) => arr.length === 1 || arr.slice(1).map((el,i) => el > arr[i]).every(e=> e === true) || false 
