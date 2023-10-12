// <===========================================================================================================>
// <================================       Soluce       =======================================================>
// <===========================================================================================================>

//exo 1 :
// console.log(nomDeMaFonction(On remplace le paramètre par ce qu'on désire)) // 

// const sommeMultiplier = (a,b) => {
//     return (a*b);
// }
// console.log(sommeMultiplier(65, 20));
//                                      <=================>

//exo 2 :
// const monTableau = [28,32,48,99];

// const premier = (montab) => {
//     return montab.slice(0,1)
// }
// console.log(premier(monTableau)) // 1 / Version "longue"
// //                    <=======>
// const poulet = [10, 56, 96,118,332];

// const premier = () => {
//     return poulet.slice(0,1)
// }
// console.log(premier(poulet)); // Version "courte"
//                                      <=================>

//exo 3 :
// const suppDer = () => {
//     const monTableau = [1, 2, 3]
//     monTableau.pop()
//     return monTableau
// }
// console.log(suppDer(monTableau= [1, 2, 3])) // [1, 2]
//                                      <=================>

//exo 4 :
//const monTableau = [1, 2, 3]
// const monTableau = [156, 265, 333]
// const somTab = () => {
//     let tabSom = 0
//     for (let i = 0; i < monTableau.length; i++) {
//         tabSom = tabSom + monTableau[i]
//     }
//     return tabSom
// }
// console.log(somTab(monTableau))
//                                      <=================>

//exo 5 :
// const invString = (string) => {
//     //const maString = "Hello"
//     //const monTableau = maString.split("")
//     const monTableau = string.split("")
//     //console.log(monTableau) // ["H", "e", "l", "l", "o"]
//     const monTableauInverse = monTableau.reverse()
//     //console.log(monTableauInverse) // ["o", "l", "l", "e", "H"]
//     const tabJoin = monTableauInverse.join() // <======== oublie de mettre ("")
//     return tabJoin
// }
// console.log(invString(string))   //  =======> 1er essai !

//        Consolidation :
// const string = "LiliANA_AureliA";

// const stringInvert = (string) => {
//     const convStr = string.split("");
//     const invStr = convStr.reverse()
//     string = invStr.join("")
//     return string
// }
// console.log(stringInvert(string))   //  =======> Consolidé !
//                                      <=================>

//exo 6 :
// //const monTableau = [1, 2, 3]
// const monTableau = [655, 1024, 6066, -12532]
// const plusGrand = () => {
//     let plsGd = Math.max(...monTableau)
//     return plsGd
// }

// console.log(plusGrand(monTableau)) // 3
//                                      <=================>

//exo 7 :
// const monTableau = [655, 1024, 6066, -12532, -16789,-16789.00001]
// const plsPt = (gloubi) => {
//     const pete = Math.min(...gloubi)
//     return pete
// }
// console.log(plsPt(monTableau))
//                                      <=================>

//exo 8 :
// const boulbo = "LilIANA_AurElia"
// const sansVoyL = (dark) => {
//     const convDark = dark.split("")
//     const ssVl = convDark.filter((light) => {
//         return light !== "a" && light !== "A" && light !== "e" && light !== "E" && light !== "i" && light !== "I" && light !== "o" && light !== "O" && light !== "u" && light !== "U" && light !== "y" && light !== "Y"
//         })
//     const convSsVl = ssVl.join("")
//     return convSsVl
// }
// console.log(sansVoyL(boulbo))

// Variante :
// const ssVl = convDark.filter((light) => (light !== "a" && light !== "A" && light !== "e" && light !== "E" && light !== "i" && light !== "I" && light !== "o" && light !== "O" && light !== "u" && light !== "U" && light !== "y" && light !== "Y"
// //         ))
//                                      <=================>

//exo 9 :
// //const monTableau = [1, 3, 2]
// //const monTableau = [655, 1024, 6066, -12532, -16789,-16789.00001]
// const monTableau = [1, 3, 2, 6, 4, 5, 50]

// const triCroiss = (ahahah) => {
//     const tri = ahahah.sort()
//     return tri
// }
// console.log(triCroiss(monTableau))
//                                      <=================>

//exo 10 :
// //const string = "Hello"
// const string = "Liliana"

// let allRot = []
// const allRotation = () => {
//     for (let i = 0; i <= string.length; i++) {
//         const stringRotate = string.substring(i) + string.substring(0, i)
//         allRot.push(stringRotate)
//     }
// return allRot
// }
// console.log(allRotation(string))
//	                              <===> V2 <===>
// const maString = "Hello"
// const monTableau = []
// for (let i = 0; i < maString.length; i++) {
//   const maStringRotate = maString.substring(i) + maString.substring(0, i)
//   monTableau.push(maStringRotate)
// }
// console.log(monTableau) // ["Hello", "elloH", "lloHe", "loHel", "oHell"]

//                                      <=================>

//exo 11 :
// //const monTableau = [1, 2, 3]
// const monTableau = [3, 12, 37]

// const ajout1 = () => {
//     const aj1 = monTableau.map(frood => frood+1)
//     return aj1
// }
// console.log(ajout1(monTableau))
//	                              <===> V2 <===>
// const monTableauAddition = monTableau.map((element) => {
//   return element + 1
//                                      <=================>

//exo 12 :
// //const monTableau = ["Hello", "World"]
// const monTableau = ["Aurelia","Liliana","Kira","Merida"]
// const tabLength = []
// const longString = () => {
//     const parkTab = monTableau.map(lala => lala.length)
//     tabLength.push(parkTab)
//     return tabLength
// }
// console.log(longString(monTableau))
//	                              <===> V2 <===>
// const monTableau = ["Hello", "World"]
// const monTableauLongueur = monTableau.map((element) => {
//   return element.length
// })
//                                      <=================>

//exo 13 :
//const monTableau = ["Hello", "World"]
// const monTableau = ["Aurelia","Liliana","Kira","Merida"]
// const tabLetter = []
// const firstLetter = (cecinestpasuntableau) => {
//     const letter1 = cecinestpasuntableau.map(bidule => bidule.charAt(0))
//     tabLetter.push(letter1)
//     return tabLetter
// }
// console.log(firstLetter(monTableau))
//	                              <===> V2 <===>
// const monTableau = ["Hello", "World"]
// const monTableauPremiereLettre = monTableau.map((element) => {
//   return element.charAt(0)
// })
//                                      <=================>

//exo 14 :
// //const monTableau = ["Hello", "World"]
// const monTableau = ["Aurelia","Liliana","Kira","Merida","anticonstitutionnellement"]
// const lastLet = []
// const lastLetter = () => {
//     lstLtr = monTableau.map(chiffre => chiffre.charAt(chiffre.length-1))
//     return lstLtr
// }
// console.log(lastLetter(monTableau))
//                                      <=================>

//exo n 15 :
// const val = ["Hello", "World","Test", "Salut", "Yo"];
// 	const elemcompa = val.filter(elem => elem.length>=5);
// console.log(elemcompa)
// const compa5 = () => {
// const valeur = ["Hello", "World","Test", "Salut", "Yo"];
// 	const elemcompa = valeur.filter(elem => elem.length>=5);
// 	return elemcompa
// }
// console.log(compa5())
//                                      <=================>

//exo 16 :
// //const monTableau = [1, 2, 3]
// const monTableau = [156, 265, 333]
// const initialValue = 0;
// const sommReduce = () => {
// 	const somRed = monTableau.reduce((accumulateur, element) => 
// 		accumulateur + element, initialValue)
// 		return somRed
// }
// console.log(sommReduce(monTableau))
//	                              <===> V2 <===>
// const addTab = () => {
// //const monTableau = [1, 2, 3];
// const monTableau = [156, 265, 333];
// const somme = monTableau.reduce((accumulateur, element) => accumulateur + element, 1200)
//   return somme
// }
// console.log(addTab())
//                                      <=================>

//exo n 17 :
// const concat = () => {
// 	const monTableauConcat = monTableau1.concat(monTableau2);	
// 	return monTableauConcat;
// }
// console.log(concat());
//                                      <=================>

//exo n 18 :
// const montab = ["Poulet", "Chat", "Chien", "Cheval", "canard", "lion", "élan", "tortue"];
// const contientE = () => {
// 	const test = montab.filter(elem => elem.includes("e"))
// 	return test;
// }
// console.log(contientE());
//                                      <=================>

//exo n 19 :
// const pairCroissant = () => {
// 	const monTab = [ 2, 9, 6, 5, 6];
// 	const monTab1 = monTab.sort();
// 	const monTab2 = monTab1.filter(elem => (elem % 2 === 0))
// 	return monTab2;
// }
// console.log(pairCroissant())
//                                      <=================>

//exo n 20 :

	//const string = "Prachett is the best author in the world" // 2
	//const string = "The quick brown fox jumps over the lazy dog" // 3

// const plusPetit = (string) => {
// 	const monTabloTrans = string.split(" ");
// 	const monTabMap = monTabloTrans.map(mot => mot.length);
// 	const monTabSort = monTabMap.sort();
// 	return monTabSort[0]
// }
// console.log(plusPetit(monTablo1))

// const plusPetit = (string) => {
// 	const monTabloTrans = string.split(" ");
// 	const monTabMap = monTabloTrans.map(mot => mot.length);
// 	const monTabSort = monTabMap.sort();
// 	return monTabSort[0]
// }
// console.log(plusPetit(string))

// const plusPetit = (string) => {
// 	const monTabloTrans = string.split(" ").map(mot => mot.length).sort();
// 	return monTabloTrans[0];
// }
// console.log(plusPetit(string))
//                                      <=================>
//exo n 21 :
// const tab1 = "listen";
// const tab2 = "silent";

// const anagram = (tab1,tab2) => {
// 	const tabSplit1 = tab1.split("").sort().join("");
// 	const tabSplit2 = tab2.split("").sort().join("");
// 	// return tab3 = [tabSplit1,tabSplit2];
// 	return tabSplit1 === tabSplit2 ? true : false;
// }
// console.log(anagram(tab1,tab2))

//                                      <=================>
//exo n 22 :
//const string = "google"
// const string = "Hello  World!"

// const removeDoubleLetters = () => {
// 	const remSplit = string.split("");
// 	for (i=0; i<=string.length; i++) {
// 		if (remSplit[i] === remSplit[i+1]) {
// 			remSplit.splice(i+1,1)
// 		}
// 	}
// 	const remJoin = remSplit.join("")
// 	return remJoin;
// }
// console.log(removeDoubleLetters())
//					<=========================================>
// const removeDoubleLetters = () => {
// 	const remSplit = string.split("");
// 	for (i=0; i<=string.length; i++) {
// 		if (remSplit[i] === remSplit[i-1]) {
// 			remSplit.splice(i,1)
// 		}
// 	}
// 	const remJoin = remSplit.join("")
// 	return remJoin;
// }
// console.log(removeDoubleLetters()) // =================> Soluce Jerome
//

//                                      <=================>
//exo n 23 :
// // const myThab = [1,2,3,4,5,6,7,8,9,0];
// const myThab = [3,7,9,5,4,1,6,2,0,8];
// // const myThab = [31,27,96,58,48,71,66,23,40,18];

// const createPhoneNumber = (myThab) => {
// 	const partie1a = myThab.slice(0,3).join("")
// 	const partie1 = `(${partie1a}) `
// 	const partie2a = myThab.slice(3,6).join("")
// 	const partie2 = `${partie2a}-`
// 	const partie3 = myThab.slice(-4).join("")
// 	const thabFinal = `${partie1}${partie2}${partie3}`
// 	return thabFinal
// }
// console.log(createPhoneNumber(myThab))
//								<========================>
// const createPhoneNumber = (tab) => {
//     return "(" + tab.slice(0,3).join("") + ") " + tab.slice(3,6).join("") + "-" + tab.slice(6,10).join("")
// }

// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));  //   <===================== Soluce Jérome

//                                      <=================>

//exo n°24 :
//const findMissingLetter = (mytab) => {
	// 	let tabLettresManquantes = [];
	// 	for (i=0;i<mytab.length-1;i++) {
	// 		let numactuel = mytab[i].charCodeAt();
	// 		let numsuivant = mytab[i+1].charCodeAt();
	// 		if (numactuel !== numsuivant-1) {
	// 			const nToChar = String.fromCharCode(numactuel+1);
	// 			tabLettresManquantes.push(nToChar);
				
	// 			//console.log("numactuel" + numactuel+1 + "numsuivant" + numsuivant);
	// 		}
	// 		//console.log(mytab[i].charCodeAt())
	// 	}
	// 	console.log(tabLettresManquantes);
	// }
//                                      <=================>

//exo n°25 :
// const sortString = (tab) => {
//     return tab.sort((a,b) =>{
// 		return a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0);
// 	 })}; 

// console.log(sortString(["Banana", "Orange", "Apple", "Mango", "Lait", "Beurre", "Fromage", "Yaourt"]))
// console.log(sortString(["banana", "orange", "apple", "mango", "lait", "beurre", "fromage", "yaourt"]))
// console.log(sortString(["banana", "Orange", "Apple", "mango", "Lait", "beurre", "fromage", "yaourt"]))
// console.log(sortString(["banana", "orange", "Apple", "mango", "lait", "beurre", "fromage", "Yaourt"]))
//                                      <=================>
//exo n :


//                                      <=================>
//exo n :


//                                      <=================>
//exo n :


//                                      <=================>
//exo n :


//                                      <=================>
//exo n :


//                                      <=================>
