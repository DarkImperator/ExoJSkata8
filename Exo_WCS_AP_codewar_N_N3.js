//                      Number Niveau 3 :

// node codewar_N_N3.js

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// function invert(array) {
//     return ;
//  }

//  <=============================== Soluce l.50 ===============================>



































// Ma soluce :
//          <== V1 ==>
// function invert(array) {
//     const newArray = array.map(arr => {
//         let inv = 0;
//         inv -= arr;
//       return inv;
//     })
//      return newArray;
//   }
// console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
// console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
// console.log(invert([]), []);
// console.log(invert([0]), [0]);

//          <== V2 ==>
// Ma soluce, simplifiée avec aide correction codewars :
// function invert(array) {
//     return array.map(arr => 0-arr);
//   }
// console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
// console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
// console.log(invert([]), []);
// console.log(invert([0]), [0]);

  //   Autre soluce (tirée de "codewar_N1F.js") : 
//   1)    return arr > 0 ? -arr : Math.abs(arr);
//   2)    return -arr;
//   3)    return arr * (-1);
//   4)    return arr-arr*2;
//   5)    function invert(array) {
            //   var newArr = [];
            //   for(var i = 0; i < array.length; i++){
            //     newArr.push(-array[i]);
            //   }
            //   return newArr;
            //   }