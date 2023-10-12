//                      Logic Niveau 5 :

// node Exo_WCS_AP_codewar_L_N5.js

// Exo 1 :
// You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?
// Your Task :
// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.
// Rules :
// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg
// we assume, that the water is boiling all the time (no time to heat up)
// for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
// Example (Input --> Output)
// 0 --> 0
// 5 --> 5
// 10 --> 10

function cookingTime(eggs) {
    // const eggNumber = parseInt(prompt("Combien d'oeuf voulez-vous faire cramer pour vous remplir le gerard colon ?"))
    // if(eggNumber<0) {
    //     return("Asshole, pas de nombre negatif !");
    // }
    // if(eggNumber === 0) {
    //     return 0;
    // }
    // const eggTime = eggNumber/8;         ====> faire avec un prompt !!!!!

    if(eggs<0) {
        return("Not !!");
    }
    if(eggs === 0) {
        return 0;
    }
    const eggTime = Math.ceil(eggs/8);
    const eggtimeEnd = eggTime*5;
    console.log("number of eggs " + eggs);
    return eggtimeEnd;
}

  console.log(cookingTime(-1));
  console.log(cookingTime(0));
  console.log(cookingTime(1));
  console.log(cookingTime(8));
  console.log(cookingTime(12));
  console.log(cookingTime(19));
  console.log(cookingTime(30));
  console.log(cookingTime(38));
  console.log(cookingTime(380));
  console.log(cookingTime(1500));
  console.log(cookingTime(1000000000));
  console.log(cookingTime(9000000000));













//  <=============================== Soluce l.50 ===============================>






































// Ma soluce :
// Exo 1 :
function cookingTime(eggs) {
if(eggs<0) {
  return("Not !!");
}
if(eggs === 0) {
  return 0;
}
  const eggTime = Math.ceil(eggs/8);
  const eggtimeEnd = eggTime*5;
  console.log("number of eggs " + eggs);
  return eggtimeEnd;
}
// Base : 
// function cookingTime(eggs) {
//   code "Autres soluces";
// }
//   Autres soluces : 
//   1)   return 5 * Math.ceil(eggs / 8);
//   2)   function cookingTime(eggs) {
          //   var min = 0;
          //   for (var i = 0; i < eggs; i += 8)
          //     min += 5;
          //   return min;
          // }
//   3)   
//   4)   
