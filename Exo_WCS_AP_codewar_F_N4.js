//                      Fundamentals Niveau 4 :

// node Exo_WCS_AP_codewar_F_N4.js

// Exo 1 :

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     return 0;
// }

// console.log(getCount("abracadabra"));
// console.log(getCount("Liliana"));
// console.log(getCount("LILIANA"));
// console.log(getCount("12345"));
// console.log(getCount(""));
// console.log(getCount("o a kak ushakov lil vo kashu kakao")); // 13
// console.log(getCount("my pyx")); // 0

//            < = = = = = = = >

// Exo 2 :

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output
//The middle character(s) of the word represented as a string.

// function getMiddle(s)
// {
//   //Code goes here!
// }

// console.log(getMiddle("abracadabra"));
// console.log(getMiddle("Liliana"));
// console.log(getMiddle("123456"));
// console.log(getMiddle(""));
// console.log(getMiddle("anticonstitutionnellements"));
// console.log(getMiddle("Betelgeuse"));
// console.log(getMiddle("TITAN"));

//  <=============================== Soluce l.70 ===============================>















// Exo 1 :
// Ma soluce 1 :
// function getCount(str) {
//     const vowels = "aeiou";
//     let vowelCount = 0;

//     for(let i=0; i<str.length; i++) {
//         if(vowels.includes(str[i])) {
//             vowelCount++;
//         }
//     }
//     return vowelCount;
// }

// Ma soluce 2 :
// function getCount(str) {
//     const regex = /[aeiou]/g;
//     vowelCount = str.match(regex);
//     return vowelCount ? vowelCount.length : 0
// }

// autre soluces :
// 1)   function getCount(str) {
//          return (str.match(/[aeiou]/ig)||[]).length;
//      }
// 2)   function getCount(str) {
//          return str.split('').filter(c => "aeiou".includes(c)).length;
//      }
// 3)   function getCount(str) {
//          var vowelsCount = 0;
//          str.split("").forEach(function(x){
//              if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
//                  vowelsCount += 1;
//              }
//          });  
//   return vowelsCount;
// }

// Exo 2 :
// Ma soluce :
// function getMiddle(s) {
//   sLength = s.length;
//   if (sLength % 2 !== 0) {
//     const div = Math.round(sLength/2);
//     // console.log("div = " + div);
//     return middle = s.substring(div-1,div);
//   } else {
//     const div = Math.round(sLength/2);
//     // console.log("div = " + div);
//     return middle = s.substring(div-1,div+1);
//   }
// }

// Ma soluce 2 avec ternaire :
// function getMiddle(s) {
//     sLength = s.length;
//     const div = Math.round(sLength/2);
    
//     return sLength % 2 !== 0 ? s.substring(div-1,div) : s.substring(div-1,div+1);
//   }

// autre soluces :
// 1)   function getMiddle(string) {
    //      var middleIndex = string.length / 2;
    //          if (string.length % 2 == 0) {
    //                  return string.slice(middleIndex - 1, middleIndex + 1);
    //              } else {
    //                  return string.charAt(middleIndex);
    //             }
    //  }
// 2)   function getMiddle(s) {             <== Belle variante !!
//          return s.substring(Math.ceil(s.length/2)-1, Math.floor(s.length/2)+1)
//      }
