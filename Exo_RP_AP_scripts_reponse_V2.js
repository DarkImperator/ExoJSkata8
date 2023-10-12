// <===========================================================================================================>
// <================================       Soluce       =======================================================>
// <===========================================================================================================>

//exo 1 :
const multiplier = (a, b) => {
	return (a*b)*a;
}
const multiplierTwo = (a, b) => {
	const mult = (a*b)*a;
	return mult;
}

console.log(multiplier(2200,65));
console.log(multiplierTwo(2200,65));
//                                      <=================>

//exo 2 :
const monTab = (tab) => {
	return tab.slice(0,1);
}
const monTab1 = (arr) => {
	const tabInter = arr.slice(0,1);
	return tabInter;
}
console.log(monTab([1,2,3,4]));
console.log(monTab1([1,2,3,4]));
console.log(monTab1([4565,2369,3489,4102]));
console.log(monTab([4565,2369,3489,4102]));
//                                      <=================>

//exo 3 :
//Avec la methode "slice" :
const montab = (arr) => {
	return arr.slice(0,(arr.length)-1)
}
const montab1 = (tab) => {
	const tabInter = tab.slice(0,(tab.length)-1)
	return tabInter;
}
console.log(montab([65,706,2200,1500]));
console.log(montab1([65,706,2200,1500]));

//Avec la methode "pop", qui permet de "montrer" celui qu'on supprime ou le tableau restant :
const montab2 = (tab) => {
	const tabInter = tab.pop();
	return tabInter;
}
const montab3 = (arr) => {
	const newTab = arr;
	newTab.pop();
	return newTab;
}
console.log(montab2([65,706,2200,1500]));
console.log(montab3([65,706,2200,1500]));
console.log(montab2(["Betelgeuse","Bellatrix","Rigel","Saïph"]));
console.log(montab3(["Betelgeuse","Bellatrix","Rigel","Saïph"]));
//                                      <=================>

//exo 4 :
//Avec la methode "reduce", 3 exemple "identiques" dans les resultats :
const sommeTab = (arr) => {
	const tabInter = arr.reduce((poulet, bloob) => poulet + bloob)
  return tabInter;
  }
  const sommeTab1 = (arr) => {  // sommeTab1 et sommeTab2 sont identique seul, leur synthaxe diffère.
	const tabInter = arr.reduce((poulet, bloob) => poulet + bloob,10000);
  return tabInter;
  }
  const sommeTab2 = (arr) => {  // sommeTab1 et sommeTab2 sont identique seul, leur synthaxe diffère.
	const bibou= 10000;
	const tabInter = arr.reduce((poulet, bloob) => poulet + bloob,bibou)
  return tabInter;
  }
  console.log(sommeTab([65,706,2200,1500]));
  console.log(sommeTab1([65,706,2200,1500]));
  console.log(sommeTab2([65,706,2200,1500]));

//Avec un boucle "for" :
const sommeTab0 = (tab) => {
	let tabInter = 0;
	for (let i=0; i<tab.length; i++) {
	  tabInter += tab[i];  //  <=>  tabInter = tabInter + tab[i];
	}
  return tabInter;
  }
  console.log(sommeTab0([65,706,2200,1500]));
//                                      <=================>

//exo 5 :
// version "longue" :
const invString = (gloubiboulga) => {
    const splitString = gloubiboulga.split("");
    const reverseString = splitString.reverse();
    const joinString = reverseString.join("");
    return joinString;
}
// version "courte" : 
const invString2 = (str) => {
    const newString = str.split("").reverse().join("");
    return newString;
}
console.log(invString("Liliana est un bo bébé"));
console.log(invString("AntiConstitutionNellement"));
console.log(invString2("Liliana est un bo bébé"));
console.log(invString2("AntiConstitutionNellement"));
//                                      <=================>

//exo 6 :
// avec la méthode statique Math.max():
const mostBigger = (bouzouk) => {
    return Math.max(...bouzouk);
}
console.log(mostBigger([655, 1024, 6066, -12532]));

//Avec un boucle "for" :
const mostBigger2 = (bouzouk) => {
    let biggest = bouzouk[0]; // !!! : il faut déclarer à l'exterieur de la boucle si on veut la "return-er"
    for (let i in bouzouk) {
        if (biggest < bouzouk[i]) {  // ATTENTION à l'ordre de la modification dans l'instruction "if" !!!
            biggest = bouzouk[i];    // il faut toujours modifier la variable (ici "biggest") ...
        }                            //  ... par l'élément lu dans le tableau par la boucle for !!!
    }
    return biggest;
}
console.log(mostBigger2([655, 1024, 6066, -12532]));
// ATTENTION à l'ordre dans des attribution :
//Cette condition if ne fonctionnera pas :
// if (bouzouk[i] > biggest) {  
//     bouzouk[i] = biggest;    // <== Cette attribution ne fonctionnera pas !!!
// }
//                                      <=================>

//exo 7 :
// avec la méthode statique Math.min():
const mostSmaller = (g) => {
    return Math.min(...g);
}
console.log(mostSmaller([655, 1024, 6066, -12532.35, -12532.37]));

//Avec un boucle "for" :
const mostSmaller2 = (azerty) => {
    let smallest = azerty[0];
    for (i=0; i<azerty.length; i++) {
        if (smallest > azerty[i]) {
            smallest = azerty[i]
        }
    }
    return smallest;
}
console.log(mostSmaller2([655, 1024, 6066, -12532.35, -12532.37]));
//                                      <=================>

//exo 8 :
//Avec la methode filter sans le return :
const sansVoyL = (cecinestpasunestring) => {
    const splitString = cecinestpasunestring.split("");
    const filtersString = splitString.filter(bibou => bibou != 'a' && bibou != 'e' && bibou != 'i' && bibou != 'o' && bibou != 'u' && bibou != 'y' && bibou != 'A' && bibou != 'E' && bibou != 'I' && bibou != 'O' && bibou != 'U' && bibou != 'Y' && bibou != 'é' && bibou != 'è');
    const joinString = filtersString.join("");
    return joinString;
}
console.log(sansVoyL("Liliana est un bo bébé"));
console.log(sansVoyL("LilIanA est Un bO bébè"));
console.log(sansVoyL("AntiConstItUtionNellEment youYOU"));

//Avec la methode filter avec le return :
const sansVoyL2 = (cecinestpasunestring) => {
    const splitString = cecinestpasunestring.split("");
    const filtersString = splitString.filter((bibou) => {
        return bibou != 'a' && bibou != 'e' && bibou != 'i' && bibou != 'o' && bibou != 'u' && bibou != 'y' && bibou != 'A' && bibou != 'E' && bibou != 'I' && bibou != 'O' && bibou != 'U' && bibou != 'Y' && bibou != 'é' && bibou != 'è'});
    const joinString = filtersString.join("");
    return joinString;
}
console.log(sansVoyL2("Liliana est un bo bébé"));
console.log(sansVoyL2("LilIanA est Un bO bébè"));
console.log(sansVoyL2("AntiConstItUtionNellEment youYOU"));
//                                      <=================>
//exo 9 :
//Avec la methode sort sans la fonction de comparaison :
const triTab2 = (string) => {   // Ne pas utiliser de fonction de comparaison "marche" ...
    return string.sort();       // ... mais il ne faut pas trop gratter ...
}
console.log(triTab2([123,456,789]));
console.log(triTab2([123,1023,456,789]));

//Avec la methode sort avec la fonction de comparaison :
const triTab = (string) => {
    return string.sort(function(a,b) {      // avec l'ancienne synthaxe d'une fonction
        return a - b;
    });
}
console.log(triTab([655, 655.001, 1024, 6066, -12532.35, -12532.37]));

const triTab1 = (string) => {
    return string.sort((a,b) => {      // avec l'actuelle synthaxe d'une fonction
        return a - b;
    });
}
console.log(triTab1([655, 655.001, 1024, 6066, -12532.35, -12532.37]));

//Avec un boucle "for" et un "tri a bulle" :
const triTab3 = (pingouin) => {
	for (let i=0; i<(pingouin.length)-1; i++) {
	  for (let j=(i+1); j<pingouin.length; j++) {
		if (pingouin[i] > pingouin[j]) {
		  let valtemp = pingouin[i];
		  pingouin[i] = pingouin[j];
		  pingouin[j] = valtemp;
		}
	  }
	}
	  return pingouin; // NE SURTOUT PAS OUBLIER DE RETURN UN TRUC !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! PUTAINS !!!!!
  }
  console.log(triTab3([655, 655.001, 1024, 6066, -12532.35, -12532.37]));
//                                      <=================>

//exo 10 :
// version "longue" :
const allRotate = (poulet) => {
	const tabFinal = [];
	for (let i=0; i<poulet.length; i++) {
	  const oneRotat1 = poulet.substring(0,i+1);
	  const oneRotat2 = poulet.substring(i+1,poulet.length);
	  tabFinal.push(oneRotat2+oneRotat1);
	}
	return tabFinal;
  }
  console.log(allRotate("Liliana"));
  console.log(allRotate("Betelgeuse"));

// version "courte" :
const allRotate1 = (poulet) => {
	const tabFinal = [];
	for (let i=0; i<poulet.length; i++) {
	  const oneRotat = poulet.substring(i+1,poulet.length) + poulet.substring(0,i+1);
	  tabFinal.push(oneRotat);
	}
	return tabFinal;
  }
  console.log(allRotate1("Aurélia"));
  console.log(allRotate1("Alnitak"));

// version "courte" AVEC methode slice :
  const allRotate0 = (poulet) => {
	const tabFinal = [];
	for (let i=0; i<poulet.length; i++ ) {
	  const oneRotat = poulet.slice(i+1, poulet.length) + poulet.slice(0,i+1);
	  tabFinal.push(oneRotat);
	}
	return tabFinal;
  }
  console.log(allRotate0("Kira"));
  console.log(allRotate0("Mintaka"));
//                                      <=================>

//exo 11 :
//Avec la methode map sans le return dans le callback :
const addOne = (arraycibo) => {
	return arraycibo.map(number => number+1)
  }
  console.log(addOne([1912, 65, 1500, 268.10]));

//Avec la methode map avec le return dans le callback :
const addOne0 = (arraycibo) => {
	return arraycibo.map((number) => {return number+1});
  }
  console.log(addOne0([1912, 65, 1500, 268.10]));
//                                      <=================>

//exo 12 :
//Avec la methode map sans le return dans le callback :
const lenghtString = (tablox) => {
	return tablox.map(unite => unite.length);
  }
  console.log(lenghtString(["Liliana est un bo bébé"]));
  console.log(lenghtString(["Liliana", "est", "un", "bo", "bébé"]));
  console.log(lenghtString(["AntiConstItUtionNellEment youYOU"]));
  console.log(lenghtString(["AntiConstItUtionNellEment", "youYOU"]));

//Avec la methode map avec le return dans le callback :
const lenghtString1 = (tablox) => {
	return tablox.map((unite) => {return unite.length});
  };
  console.log(lenghtString1(["Liliana est un bo bébé"]));
  console.log(lenghtString1(["AntiConstItUtionNellEment", "youYOU"]));

  //Avec une boucle for // ATTENTION destruction des données du tableau !!! :
  const strLength2 = (tab) => {
    for(i in tab) {
        tab [i] = tab[i].length;
    }
    return tab;
  }
  console.log(lenghtString(["Liliana", "est", "un", "bo", "bébé"]));
//                                      <=================>

//exo 13 :
const firstLetter = (taz) => {
	const firLet = taz.map((tazeur) => {
	  return tazeur.charAt(0);
	});
	return  firLet;
  }
console.log(firstLetter(["Liliana", "est", "un", "bo", "Bébé"]));
  //                                      <=================>

//exo 14 :
// Map avec return :
const lastLetter = (zat) => {
	lasLet = zat.map((zateur) => {
	  return zateur.charAt(zateur.length-1);
	})
	return lasLet;
  }
  console.log(lastLetter(["Liliana", "est", "un", "bo", "Bébé"]));

  // Map sans return :
  const lastLetter1 = (zat) => {
	lasLet = zat.map(zateur =>  zateur.charAt(zateur.length-1));
	return lasLet;
  }
  console.log(lastLetter1(["Liliana", "est", "un", "bo", "Bébé"]));
//                                      <=================>

//exo 15 :
const stringEight = (polus) => {
	const eightAndMore = polus.filter(pol => pol.length > 5);
	return eightAndMore;
  }
  console.log(stringEight(["bateaux", "sale", "vapeur", "pie", "Titanic", "Liliana", "Kira","      "]));
//                                      <=================>

//exo 16 :
const sommeNumbers = (pasdesnombres) => {
	// const som = pasdesnombres.reduce(((acc , currentValue) => acc + currentValue), valeur_initiale); // Rappel methode reduce ().
	const som = pasdesnombres.reduce(((pasdesnombres1 , pasdesnombres2) => pasdesnombres1 + pasdesnombres2));
	return som;
  }
  console.log(sommeNumbers([1912, 65, 1500, 268.10]));
  console.log(sommeNumbers([655, 655.001, 1024, 6066, -12532.35, -12532.37]));
  
//                                      <=================>

//exo 17 :
const fusionTabStr = (g,j) => {
	return g.concat(j);
  }
  console.log(fusionTabStr(["Liliana est", "un bo bébé !!!"], ["Un bébè parfait", "comme sa mère"], ["bloob"]));
  console.log(fusionTabStr(["AntiConstItUtionNellEment"], ["youYOU"]));

//Pour aller plus loin : concat de 3 tableaux :
  const fusionTabStr1 = (g,j,t) => {
	return g.concat(j).concat(t);
  }
  console.log(fusionTabStr1(["Liliana est", "un bo bébé !!!"], ["Un bébè parfait", "comme sa mère"], ["bloob", "bleeb"]));
  console.log(fusionTabStr1(["AntiConstItUtionNellEment"], ["youYOU"], ["le zouave"]));
  
//                                      <=================>

//exo 18 :
// Fun fact : utilisation de map pour obtenir un nouveau tableau avec true/false en fonction de la condition :
const includeSomething0 = (bat) => {  // Permet d'obtenir un true/false à la condition du map ...
	const inklud = bat.map(line => line.includes("e"));
	return inklud;
  }
  console.log(includeSomething0(["bateaux", "Liliana", "sale", "      ", "pie", "Titanic", "Kira","vapeur"]));

// filter sans return :
  const includeSomething = (bat) => {
	const inklud = bat.filter(line => line.includes("e"));
	return inklud;
  }
  console.log(includeSomething(["bateaux", "Liliana", "sale", "      ", "pie", "Titanic", "Kira","vapeur"]));

// filter avec return :
  const includeSomething1 = (bat) => {
	const inklud = bat.filter((line) => {
	  return line.includes("e")
	});
	return inklud;
  }
  console.log(includeSomething1(["bateaux", "Liliana", "sale", "      ", "pie", "Titanic", "Kira","vapeur"]));
  //                                      <=================>

//exo 19 :
// Avec la méthode sort() SANS fonction de comparaison (pour les nombres) :
const pairAndRiseNumber0 = (xour) => {
	const pairNumber = xour.filter(numbre => numbre % 2 === 0);
	const riseNumber = pairNumber.sort();
	return riseNumber;                        //Le tri n'est pas parfait si on "gratte" trop ...
  }
  console.log(pairAndRiseNumber0([2, 9, 6, 5, 6070, 265, 963, 650, 510, 677]));
  console.log(pairAndRiseNumber0([2, 9, 6, 5, 6]));

  // Avec la méthode sort() AVEC fonction de comparaison (pour les nombres) :
  const pairAndRiseNumber = (xour) => {
	const pairNumber = xour.filter(numbre => numbre % 2 === 0);
	const riseNumber = pairNumber.sort((a, b) => {return a - b;});
	return riseNumber;  					  // L'ajout d'une fonction de comparaison resout le problème.
  }
  console.log(pairAndRiseNumber([2, 9, 6, 5, 6070, 265, 963, 650, 510, 677]));

// Avec une boucle for, condition if et méthode sort() AVEC fonction de comparaison :
const pairAndRiseNumber1 = (xour) => {
	const pairNumber = [];
  for (i in xour) {
    if (xour[i] % 2 === 0) {
      pairNumber.push(xour[i])
    }    
  }
  const riseNumber = pairNumber.sort((a, b) => {return a - b;});
	return riseNumber;
  }
  console.log(pairAndRiseNumber1([2, 9, 6, 5, 6070, 265, 963, 650, 510, 677]));
//       <=======>       exo 19 bis       <=======>       :
  // Avec la méthode sort() AVEC fonction de comparaison POUR les chaine de caracteres :
  const riseCarac19bis = (xour) => {
	 xour.sort((a, b) => { return a.toLowerCase().localeCompare(b.toLowerCase())});	   // L'une ou ...
	//  xour.sort((a, b) => { return a.toUpperCase().localeCompare(b.toUpperCase())}); // l'autre fonctionne.
	 return xour;
  }
  console.log(riseCarac19bis(["avec","Aurelia","aurelia","Liliana","liposuscion","Hache"]));
  //                                      <=================>

//exo 20 :
// Avec methodes map et math.min :
const findSmallestWord = (str) => {
  const splitString = str.split(" ");
  console.log(splitString);
  const lengthString = splitString.map(choz => choz.length)
  const smallString = Math.min(...lengthString)
  return smallString;
}
console.log(findSmallestWord("Liliana est un bo bébé"));
console.log(findSmallestWord("Titanic sinked this night"));

// Avec methodes map et sort() :
const findSmallestWord1 = (str) => {
  const splitString = str.split(" ");
  const lengthString = splitString.map(choz => choz.length)
  const smallString = lengthString.sort((a,b) => {return a - b})
  return smallString[0];
}
console.log(findSmallestWord1("Liliana est un bo bébé"));
console.log(findSmallestWord1("Titanic sinked this night"));

// Avec boucle for et methode sort() :
const findSmallestWord2 = (str) => {
  const splitString = str.split(" ");
  const tabString = [];
  for (poulet in splitString) {
      tabString.push(splitString[poulet].length)
  };
  tabString.sort((a,b) => {return a-b});
  return tabString[0];
}
console.log(findSmallestWord2("Liliana est un bo bébé"));
console.log(findSmallestWord2("Titanic sinked this night"));

//                                      <=================>

//exo 21 :
//Avec la methode sort() et condition ifMAIS sensible à la casse :
const anagram = (string, tablo) => {
  const stringSplit = string.split("");
  // const stringSort = stringSplit.sort((a,b) => {return a.toUpperCase().localeCompare(b.toUpperCase())});
  const stringSort = stringSplit.sort((a,b) => {return a.toUpperCase().localeCompare(b.toUpperCase())});
  // const stringSort = stringSplit.sort();
  const stringJoin = stringSort.join("");

    const tabloSplit = tablo.split("");
  const tabloSort = tabloSplit.sort((a,b) => {return a.toUpperCase().localeCompare(b.toUpperCase())});
  // const tabloSort = tabloSplit.sort();
  const tabloJoin = tabloSort.join("");
  
  if (stringJoin == tabloJoin) {
      return true;
  } else {
      return false;
  }
}
console.log(anagram("liliana","analili"));
console.log(anagram("Liliana","Analili")); // => Me renvoie false à cause de la casse ...
console.log(anagram("biboo","bibou"));

//Avec la methode sort() sans condition ET insensible à la casse :
const anagram1 = (string, tablo) => {
  const stringSplit = string.split("");
  const stringSort = stringSplit.sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));
  const stringJoin = stringSort.join("");
  
  const tabloSplit = tablo.split("");
  const tabloSort = tabloSplit.sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));
  const tabloJoin = tabloSort.join("");
 
  return stringJoin.toLowerCase() === tabloJoin.toLowerCase();
}
console.log(anagram1("liliana","analili"));
console.log(anagram1("Liliana","Analili"));
console.log(anagram1("biboo","bibou"));

//                                      <=================>

//exo 22 :
colle ici
//                                      <=================>

//exo 23 :
colle ici
//                                      <=================>

//exo 24 :
colle ici
//                                      <=================>

//exo 25 :
colle ici
//                                      <=================>

//exo 26 :
colle ici
//                                      <=================>

//exo 27 :
colle ici
//                                      <=================>

//exo 28 :
colle ici
//                                      <=================>

//exo 29 :
colle ici
//                                      <=================>

//exo 30 :
colle ici
//                                      <=================>
//<=====>
// exo WCS:
// function computeClosestToZero(ts) {  
//   if (!ts || ts.length === 0) {
//       return NaN; 
//     }   
//   let low = ts[0];

//   for (let i in ts) {
//     if (Math.abs(low) > Math.abs(ts[i])) {
//       low =ts[i];
//     } else if (Math.abs(ts[i]) === Math.abs(low)) {
//       low = Math.max(low, ts[i]);
//     }
//   }

//   return low;
// }

// console.log(computeClosestToZero([]));                          // NaN
// console.log(computeClosestToZero([7, 5, 9, 1, 4]));             // 1
// console.log(computeClosestToZero([-273]));                      // -273
// console.log(computeClosestToZero([5526]));                      // 5526
// console.log(computeClosestToZero([-15, -7, -9, -14, -12]))      // -7
// console.log(computeClosestToZero([-15, -7, -9, 0.5, -14, -12])) // 0.5
// console.log(computeClosestToZero([-10, -10]));                  // -10
// console.log(computeClosestToZero([15, -7, 9, 14, 7, 12]));     // 7