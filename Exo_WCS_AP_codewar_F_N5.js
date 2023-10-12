//                      Fundamentals Niveau 5 :

// node Exo_WCS_AP_codewar_F_N5.js

// Exo 1 :
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// String.prototype.toJadenCase = function () {
//   //...
// };


// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
// console.log(toJadenCase("Liliana est un trop beau bébé de amour"));
// console.log(toJadenCase("liliana est un trop beau bébé de amour"));
// console.log(toJadenCase("Betelgeuse est dans la constellation de Orion"));

// Exo 2 :
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
// 	// your code
// }

// console.log(accum("abcd"));
// console.log(accum("RqaEzty"));
// console.log(accum("cwAt"));
// console.log(accum("LiLiAna"));
// console.log(accum("Betelgeuse"));

//  <=============================== Soluce l.75 ===============================>


































// Ma soluce :
// Exo 1 :
// fonction fléchée "classique" :
// const toJadenCase = (str) => {
//   const strFirstLetterUpperCase = str.charAt(0).toUpperCase() + str.substring(1, str.length);
//   const strSplit = strFirstLetterUpperCase.split(" ");  
//   // const strChange = strSplit.map(word => word.charAt(0).toUpperCase() + word.substring(1, word.length));
//   const strChange = strSplit.map(word => word.charAt(0).toUpperCase() + word.substring(1)); // <= variation dans le substring
//   const strJoin = strChange.join(' ');
//   return strJoin;
// };

// // Adapation pour validation par ChatGPT :
// String.prototype.toJadenCase = function () {
//   const str = this.toString(); // Utilisez "this" pour obtenir la chaîne de caractères sur laquelle la méthode est appelée.
//   const strFirstLetterUpperCase = str.charAt(0).toUpperCase() + str.substring(1, str.length);
//   const strSplit = strFirstLetterUpperCase.split(" ");
//   const strChange = strSplit.map(word => word.charAt(0).toUpperCase() + word.substring(1, word.length));
//   const strJoin = strChange.join(' ');
//   return strJoin;
// };

//   Autres soluces : 
//   1)   String.prototype.toJadenCase = function () { 
//          return this.split(" ").map(function(word){
//            return word.charAt(0).toUpperCase() + word.slice(1);
//          }).join(" ");
//        }
//   2)   String.prototype.toJadenCase = function() {
//          return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
//        };
//   3)   String.prototype.toJadenCase = function () {
//          return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
//        };

// les "autres soluces" 1 et 2 sont des variations d'une même solution.

// Exo 2 :
// function accum(s) {
//   const newStr = [];
// 	for(i=0; i<s.length; i++) {
//     // console.log([i],s[i]);
//     if(i === 0) {
//       newStr.push(s[i].toUpperCase());
//     } else {
//       newStr.push("-" + s[i].toUpperCase() + s[i].toLowerCase().repeat([i]));
//     };    
//   };
//   const newStrJoin = newStr.join("");
//   return newStrJoin;
// };

// Bases :
// function accum(s) {
// 	// code des "autres solutions"
// }
//   Autres soluces : 
//   1)   return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');

