//                      Logic Niveau 3 :

// node codewar_L_N3.js

// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.
// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.
// Note : 1 Dollar = 100 Cents

// function fuelPrice(litres, pricePerLitre) {
//     // your code here
//     // Good luck with it!
//   }


// verif exo kata :
console.log(fuelPrice(5, 1.23));
console.log(fuelPrice(350, 8.06));
console.log(fuelPrice(8, 2.5));
console.log(fuelPrice(5, 5.6));
// verif cas -2l :
console.log(fuelPrice(1,4));
console.log(fuelPrice(1.99,4));
// verif cas -4l :
console.log(fuelPrice(3,4));
console.log(fuelPrice(3,4.33));
// verif cas -6l :
console.log(fuelPrice(5,4));
console.log(fuelPrice(5.99,4));
// verif cas -8l :
console.log(fuelPrice(7,4));
console.log(fuelPrice(7.99,4));
// verif cas -10l :
console.log(fuelPrice(9,4));
console.log(fuelPrice(9.99,4));
// verif cas +10l :
console.log(fuelPrice(11,4));
console.log(fuelPrice(11.99,4));
console.log(fuelPrice(25,4));
// verif cas avec float :
console.log(fuelPrice(15.9999998,12.546325978));
// verif litre neg ou inexistant :
console.log(fuelPrice());
console.log(fuelPrice("a","b"));
console.log(fuelPrice(-12,12));

































//  <=============================== Soluce l.100 ===============================>

// // Ma soluce, seul :
// function fuelPrice(litres, pricePerLitre) {
//     if (!litres || litres < 0)  {
//         return []; 
//     }
//     if(litres >= 2 && litres < 4) {
//         return Number((litres*(pricePerLitre-0.05)).toFixed(2));
//     } else if(litres >= 4 && litres < 6) {
//         return Number((litres*(pricePerLitre-0.10)).toFixed(2));
//     } else if(litres >= 6 && litres < 8) {
//        return Number((litres*(pricePerLitre-0.15)).toFixed(2));
//     } else if(litres >= 8 && litres < 10) {
//       return Number((litres*(pricePerLitre-0.20)).toFixed(2));
//     } else if(litres >= 10) {
//       return Number((litres*(pricePerLitre-0.25)).toFixed(2));
//     } else {      
//       return Number((litres*pricePerLitre).toFixed(2));
//     }
// }

// // Ma soluce adaptée ecrite par ChatGPT :
// function fuelPrice(litres, pricePerLitre) {
//     let totalCost = litres * pricePerLitre;
//     if (!litres || litres < 0)  {
//         return [];
//     }
  
//     if (litres >= 2 && litres < 4) {
//         return Number((totalCost -= litres * 0.05).toFixed(2));
//     } else if (litres >= 4 && litres < 6) {
//         return Number((totalCost -= litres * 0.10).toFixed(2));
//     } else if (litres >= 6 && litres < 8) {
//         return Number((totalCost -= litres * 0.15).toFixed(2));
//     } else if (litres >= 8 && litres < 10) {
//         return Number((totalCost -= litres * 0.20).toFixed(2));
//     } else if (litres >= 10 ) {
//         return Number((totalCost -= litres * 0.25).toFixed(2));
//     }  else {
//         return Number(totalCost.toFixed(2));
//     }
// }

//   Autre soluce : 
//   1)  function fuelPrice(litres, pricePerLiter) {
            // for (var i = 2; i <= 10; i +=2) { //discount loop
            //     if (litres >= i) {
            //     pricePerLiter -= 0.05;
            //     }
            // }
            // return Math.round(litres * pricePerLiter * 100) / 100;;
            // }   
//   2)   function fuelPrice(litres, pricePerLitre) {  
            // if (litres > 0 && litres < 2) {
            //     return +(litres * pricePerLitre).toFixed(2);
            // }  
            // if (litres >= 2 && litres < 4) {
            //     return +(litres * (pricePerLitre - 0.05)).toFixed(2);
            // }    
            // if (litres >= 4 && litres < 6) {
            //     return +(litres * (pricePerLitre - 0.1)).toFixed(2);
            // }    
            // if (litres >= 6 && litres < 8) {
            //     return +(litres * (pricePerLitre - 0.15)).toFixed(2);
            // }
            // if (litres >= 8 && litres < 10) {
            //     return +(litres * (pricePerLitre - 0.2)).toFixed(2);
            // }
            // if (litres >= 10) {
            //     return +(litres * (pricePerLitre - 0.25)).toFixed(2);
            // }  
        // }  
//   3)   function fuelPrice(litres, pricePerLiter) {
        //     var discount = Math.min(Math.floor(litres/2) * 0.05, 0.25);
        //     var price = litres * (pricePerLiter - discount);
        //     return Math.round(price*100) / 100;
        // }  
//   4)      function fuelPrice(l, p) {
            //     return Math.round(100 * l * Math.max(p - 0.05 * ~~(l / 2), p - 0.25)) / 100;
            // } 
//   5)     
