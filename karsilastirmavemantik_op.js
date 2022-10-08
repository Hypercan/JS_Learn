// KARŞILAŞTIRMA OPERATÖRLERİ
// Eşitse * == *
var a = 10;
var b = "10";
console.log(a == b) //cevap true

// === hem değeri hemde türü eşitse yani string === string, int === int
var c = 25;
var d = "25";
console.log(c === d); //cevap false çünkü var c int , var d ise string

//  =! eşit değilse işareti 
// eğer a ile b eşit degilse true ver
console.log(a != b) // false çünkü eşit 
console.log(a !== b) //burda kontrol ettiği hem türü hem değeri cevap ->  true çünkü rakam aynı fakat türü farklı 
console.log(a != c) // burda direk true geliyor çünkü değer farklı

// < küçük işareti 
console.log(a < b) // false
console.log(a < c) //true

// <= küçük veya eşitse
// > büyükse >= büyükse veya eşitse

// MANTIKSAL OPERATÖRLER
//  && VE
console.log(a < c && c != b) // cevap true 

// || veya 
console.log(c === a || d > a) // cevap true çünkü 2nci kısım true 

// ! değil ise (!(a >= c)) nin tersini vermesidir.