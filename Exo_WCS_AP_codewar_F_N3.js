//                      Fundamentals Niveau 3 :

// node codewar_F_N3.js

// Exo 1 :
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// function boolToWord( bool ){
//     //...
// }

//            < = = = = = = = >

// Exo 2 :
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str){
//     //You got this!
   
//    };


// console.log(removeChar("eloquent"));
// console.log(removeChar("country"));
// console.log(removeChar("person"));
// console.log(removeChar("place"));
// console.log(removeChar("ooopsss"));
// console.log(removeChar("et"));

//  <=============================== Soluce l.50 ===============================>

















// Exo 1 :
// Ma soluce :
// function boolToWord( bool ){
//     if(bool === true) {
//         return "Yes"
//     } else {
//         return "No"
//     }
//   }
// console.log(boolToWord(true));
// console.log(boolToWord(false));
// console.log(boolToWord(128));
// console.log(boolToWord());

// Ma soluce avec ternaire :
// function boolToWord( bool ){
//     return bool === true ? "Yes" : "No"    
//   }

// Exo 2 :
// Ma soluce :
// function removeChar(str){
//     if(str.length > 2) {
//         return  str.slice(1,str.length-1);
//     } else {
//         return "Are you jokking ? "
//     }
//    };

//    function removeChar(str){
//     return str.length > 2 ? str.slice(1,str.length-1) : "Are you jokking ?" // Ma version
//     return str.length > 2 ? str.slice(1,str.length-1) : ''  // La version attendue ...
//    };

// console.log(removeChar("eloquent"));
// console.log(removeChar("country"));
// console.log(removeChar("person"));
// console.log(removeChar("place"));
// console.log(removeChar("ooopsss"));
// console.log(removeChar("et"));

// autre soluces :
// 1)   return str.slice(1,-1);
// 2)  function removeChar(str){
            // str1 = str.split('');
            // str1.shift();
            // str1.pop();
            // return str1.join('');
// 3)  function removeChar(str){
            // var input_str = str;
            // var output_str = '';  
            // for (var i = 1; i < input_str.length-1; i++) {
            //     output_str += input_str[i];
            // }
            // return output_str;
// 4)   return str.substr(1,str.length-2)
// 5)   return str.replace(/^.|.$/g, '');
// 5bis)return str.replace(/^\w|\w$/g, '');
