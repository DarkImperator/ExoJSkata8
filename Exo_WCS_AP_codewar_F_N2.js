//                      Fundamentals Niveau 2 :

// node codewar_F_N2.js

// Exo 1 :
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples :
//  6, "I"     -> "IIIIII"
//  5, "Hello" -> "HelloHelloHelloHelloHello"

// function repeatStr (n, s) {
//     return '';
// }
// console.log(repeatStr(5,"LiLiana"));
// console.log(repeatStr(6, "I"));
// console.log(repeatStr(5, "Hello"));

//            < = = = = = = = >

// Exo 2 :
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake. Can you help her?

// function greet(name){
//     return "Hello, " + name + "!";
//     if(name === "Johnny")
//       return "Hello, my love!";
//   }

//  <=============================== Soluce l.50 ===============================>























// Exo 1 :
// Ma soluce :
// function repeatStr (n, s) {
//     return s.repeat(n);
// }

// Autre soluce :
//  1)  function repeatStr (n, s) {
    //     var str="";
    //     for(var i=0; i < n; i++)
    //       str+=s;
    //       return str;
    //   }

// Exo 2 :
// Ma soluce :
// function greet(name){
//     return "Hello, " + name + "!";
//     if(name === "Johnny")
//       return "Hello, my love!";
//  }

// autre soluces :
// 1)  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
// 2)  return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
// 3)  return `Hello, ${name === 'Johnny' ? 'my love' : name}!`;
// 4) function greet(name) {
//     if (name === 'Johnny')
//       name = 'my love';
    
//     return `Hello, ${name}!`;
