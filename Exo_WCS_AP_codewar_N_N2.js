//                      Number Niveau 2 :

// node codewar_N_N2.js

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example :
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
//     // your code here
//   }

//  <=============================== Soluce l.50 ===============================>



































// Ma soluce :
//   function countPositivesSumNegatives(input) {
//     let needReturn = [];
//     let countPos = 0;
//     let addNeg = 0;
//     for (i in input){
//       if (input[i]>0) {
//         countPos += input[i]/input[i];
//       }      
//     }
//     const selectInput = input.filter (inp => inp<0);
//     addNeg = selectInput.reduce((a, b) => a+b)
//         return needReturn = [countPos, addNeg]
//   }
//   console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

  function countPositivesSumNegatives(input) {  // Ma soluce avec aide chatGPT pour le if du début ...
    let needReturn = [];
    let countPos = 0;

    if (!input || input.length === 0)  {
        return [] || console.log(input);
    } else {        
        for (i in input){
            if (input[i]>0) {
                countPos += input[i]/input[i];
            }      
        }
        const selectInput = input.filter (inp => inp<0);
        let addNeg = selectInput.reduce((a, b) => a+b,0);
        return needReturn = [countPos, addNeg]
    }
  }
    console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
    console.log(countPositivesSumNegatives([]));
    console.log(countPositivesSumNegatives([+0,+0]));
    console.log(countPositivesSumNegatives([+0,-0]));
    console.log(countPositivesSumNegatives([0]));
    console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
    console.log(countPositivesSumNegatives([[0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]]));

// Autres soluces :
// 1)  
// function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0)
//       return [];
    
//     var positive = 0;
//     var negative = 0;
    
//     for (var i=0, l=input.length; i<l; ++i)
//     {
//       if (input[i] > 0)
//         ++ positive;
//       else
//         negative += input[i];
//     }
    
//     return [positive, negative];
// }
//      <======================================================>
// 2)  
// function countPositivesSumNegatives(input) {
//     if (!Array.isArray(input) || !input.length) return [];
//     return input.reduce((arr, n) => {
//       if (n > 0) arr[0]++;
//       if (n < 0) arr[1] += n;
//       return arr;
//     }, [0, 0]);
//   }
//      <======================================================>
// 3)  
// function countPositivesSumNegatives(input) {
//     if (!input || input.length == 0) return [];
//     var sum = 0, count = 0;
//     input.forEach(function(el){ if (el > 0) count++; else sum+=el});
//     return [count, sum];
//   }
//      <======================================================>
// 4)  
// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }
//      <======================================================>
// 5)  chatGPT seul ...
// function countPositivesSumNegatives(arr) {
//     if (!arr || arr.length === 0) {
//       return [];
//     }
  
//     let positiveCount = 0;
//     let negativeSum = 0;
  
//     arr.forEach((num) => {
//       if (num > 0) {
//         positiveCount++;
//       } else if (num < 0) {
//         negativeSum += num;
//       }
//     });
  
//     return [positiveCount, negativeSum];
//   }
//      <======================================================>