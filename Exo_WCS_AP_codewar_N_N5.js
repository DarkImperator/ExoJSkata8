//                      Number Niveau 5 :

// node Exo_WCS_AP_codewar_N_N5.js

// Exo 1 :
// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.
// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// function SeriesSum(n)
// {
//   // Happy Coding ^_^
// }

// const SeriesSum =(n) => {
//   if(n === 0) {
//     return "0.00"
//   } else if(n === 1) {
//     return "1.00"
//   } else if ( n>2 ) {
//     const baz = 1 +1/4;
//   for(i=2; i<n.length; i++) {
//     const nthTerm[i] = baz += 
//   }
//   } 
// }

const SeriesSum =(n) => {
  let somme = 0;
    for (let i = 0; i < n; i++) {
        somme += 1 / (1 + i * 3);
    }
    return somme.toFixed(2);
}

console.log("0 : ", SeriesSum(0));
console.log("1 : ", SeriesSum(1));
console.log("2 : ", SeriesSum(2));
console.log("35 : ", SeriesSum(5));
console.log("15 : ", SeriesSum(15));
console.log("32 : ", SeriesSum(32));
console.log("65 : ", SeriesSum(65));
console.log("1500 : ", SeriesSum(1500));

//  <=============================== Soluce l.50 ===============================>






































// Ma soluce :
// Exo 1 :


// Exo 2 :


//   Autres soluces : 
//   1)   
//   2)   
//   3)   
//   4)   
