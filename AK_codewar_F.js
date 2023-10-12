//                      Fundamentals :

// node AK_codewar_F.js

// Exo 1 :
//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
  
// }

// function arrayDiff(a, b) {
//     let newTab = [];
//         for (let i = 0; i <= a.length; i++) {
//             if (!b.includes(a[i])) {
//                 console.log("inv de b " + (!b.includes(a[i])));
//                 newTab.push(a[i]);
//             }
//         }
//         return newTab;
//     }

// function arrayDiff(a, b) {
//     return a.filter(row => row != b);
// }

// function arrayDiff(a, b) {
//     return a.filter((row) => {
//         row != b.map(value => value)
//     })
// }

// function arrayDiff(a, b) {
//     let newTab = [];
//     for (i in a) {
//         for (j in b) {
//             if (i == j) {
//                 null;
//             } else {
//                 newTab.push(i);
//             }
//         }
//     }
//     return newTab;
// }

// const arrayDiff = (a, b)  => {
//     let newTab = [];
//     console.log("a = " + a);
//     console.log("b = " + b);
//         for (let i = 0; i <= a.length; i++) {
//             for (let j = 0; j <= b.length; j++) {
//                 // if (i > 0 && j > 0) {
//                     if (a[i] != b[j]) {
//                         // newTab.push(a[i]);                        
//                         console.log("i = " + a[i]);
//                         console.log("j = " + b[j]);
//                     }
//                 // }
//             }
//         }
//     return newTab;
// }

// const arrayDiff = (a, b)  => {
//     let newTab = [];
//     console.log("valuze a = " + a);
//     console.log("valuze b = " + b);
//         for (let i = 0; i < a.length; i++) {
//             console.log("a = " + a[i]);
//             for (let j = 0; j < b.length; j++) {
//                 console.log("b = " + b[j]);
//                 if ((a[i]) != (b[j]) && (a[i]) != (b[j+1])) {
//                     console.log(a[i] != b[j]);
//                     console.log(a[i] != b[j+1]);
//                     console.log(a[i] !== b[j] && a[i] !== b[j+1]);
//                     newTab.push(a[i])
//                 }
//             }
//         }
//     return newTab;
// }

// soluce chat :
const arrayDiff = (a, b) => {
    let newTab = [];
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            newTab.push(a[i]);
        }
    }
    return newTab;
}

console.log(arrayDiff([], [1,2]));          // => []
console.log(arrayDiff([1,2], [1]));         // => [2]
console.log(arrayDiff([1,2,2], []));        // => [1,2,2]
console.log(arrayDiff([1,2,2], [1]));       // => [2,2]
console.log(arrayDiff([1,2,2], [2]));       // => [1]
console.log(arrayDiff([1,2,3], [2]));     // => [1,3]
console.log(arrayDiff([3,4,5], [3,4]));     // => [5]
console.log(arrayDiff([1,2,2,2,3],[2]));  // => [1,3]

// Exo 2 :


// Exo 3 :


// Exo 4 :


// Exo 5 :


// Exo 6 :


// Exo 7 :


// Exo 8 :


// Exo 9 :


// Exo 10 :


