//                      Fundamentals Niveau 5 :

// node Exo_WCS_AP_codewar_F_N6.js

// Exo 1 :
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// function findOdd(A) {
//     //happy coding!
//     return 0;
//   }

function findOdd(A) {
    // const newTab = [];
    const newArr = A.sort((a,b) => {return a-b})
    console.log("newArr", newArr);
    for(i=0; i <=newArr.length; i++) {
      if(newArr[0] % newArr[i] === 2) {
        console.log("newArr[0]", newArr[0]);
        return newArr[1];
      }
    }
    return newArr;
  }

  console.log(findOdd([7])); // ===> 7
  console.log(findOdd([0])); // ===> 0
  // console.log(findOdd([1,1,2])); // ===> 2
  // console.log(findOdd([0,1,0,1,0])); // ===> 0
  // console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])); // ===> 4

// Exo 2 :


//  <=============================== Soluce l.50 ===============================>






































// Ma soluce :
// Exo 1 :


// Exo 2 :


//   Autres soluces : 
//   1)   
//   2)   
//   3)   
//   4)   
