//                      Logic Niveau 2 :

// node codewar_L_N2.js

// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.
// 39.99 becomes $39.99
// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).
// Examples:
//     3 needs to become $3.00
//     3.1 needs to become $3.10
// Good luck! Your team knows they can count on you!

// function formatMoney(amount){
//     // your formatting code here
//   }

//  <=============================== Soluce l.50 ===============================>
































// Ma soluce :
// function formatMoney(amount){
//   return `${"$"+amount.toFixed(2)}`
// }
// console.log(formatMoney(39.99));
// console.log(formatMoney(3));
// console.log(formatMoney(3.1));

//   Variante de ma soluce : 
//   1)     return '$' + amount.toFixed(2);
//   2)     let formatMoney = (amount) => `$${amount.toFixed(2)}`
//   3)     return `$${amount.toFixed(2)}`;

//   Autre soluce : 
//   1) function formatMoney(amount){
//        const usd = new Intl.NumberFormat('en-US', {
//        style: 'currency',
//        currency: 'USD',
//        minimumFractionDigits: 2,
//        useGrouping: false
//   });
//   return usd.format(amount);
// }

//   2)     function hasCents(num) {
      //     return /\./.test(num);
      // }

      // function centsLength(numStr) {
      //     var cents = numStr.match(/\.\d+/);
      //     return cents[0].length - 1;
      // }

      // // Imperative solution using if...else, explicit block syntax
      // function formatMoney(num) {
      //     var numStr = '$' + num.toString();
      //     if (!hasCents(numStr)) {
      //         return numStr + '.00';
      //     } else if (centsLength(numStr) < 2) {
      //         return numStr + '0';
      //     } else {
      //         return numStr;
      //     }
      // }

      // // Imperative solution, implicit else, compressed syntax
      // function formatMoney(num) {
      //     var numStr = '$' + num.toString();
      //     if (!hasCents(numStr)) return numStr + '.00';
      //     if (centsLength(numStr) < 2) return numStr + '0';
      //     return numStr;
      // }


      // // Declarative solution using ES3 toFixed()
      // function formatMoney(num){
      //     return '$' + num.toFixed(2);
      // }

      // // Declarative solution, ES6 const, let, and arrow function
      // // const formatMoney = num => '$' + num.toFixed(2);
      // var formatMoney = num => '$' + num.toFixed(2);
