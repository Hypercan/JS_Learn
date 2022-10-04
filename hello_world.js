// const {constant} bu değişkeni sadece birkez tanımlanır ve değiştirilemez.
// let if ile tanımlanırsa sadce oradan onun dışında değiştirilebilir.
// var değiştirilebilir global scope veya function scope c# daki private veya public gibi.

console.log("Hello World!");
let serverName = "google.com";
console.log(serverName);
var myName = "Firat Can";
console.log(myName)
console.log("Şimdi soyadını ekliyorum bakalım olacak mı.")
//  BU ilk yol
myName = myName + " Karakoc";
console.log(myName)
// Bu ikinci yol
myName += " Karakoc";
console.log(myName)