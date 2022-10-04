// **********Numbers*********
// The story

let apple = 5.0
let carrot = 8.0
console.log("hello good evening! how much cost an apple and a carrot?")
console.log("Good evening Madam! Both cost are " + (carrot + apple));
console.log("Oh, thank you!")

// How to increase +1 and -1 
apple++;
apple = apple + 1;
apple += 1;
// -1 version
apple--;
apple -= 1;
// If you wanna muliply then
apple *= 10;
// Bölme işlemi
apple /= 2;
// Mod(kalan) bulma tek mi çift mi?
console.log(14 % 3) // cevap = 2 
// üst alma
console.log(2 ** 4) // 2 üssü 4 = 16
// Aşşağı yuvarlama -> Math.floor
console.log(Math.floor(24.18))
// Yukarı yuvarlama -> Math.ceil
console.log(Math.ceil(89.52))
// Yakina yuvarlama ->Math.round
console.log(Math.round(4.49))

// Eğer string bir number gelirse onu Number() ile yeni bir ^let^ çevirmen gerekir
let stringNumber = "13" //String number
let newNumber = Number(stringNumber); // Number constractor ile bir numara ya dönüşüyor