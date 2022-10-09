var money = 40;
var canBuy =
    (money < 17) ? "Satın alamazsın.." :
        (money > 30) ? "Satın alabilirsin.." :
            "Para miktarını girmen gerekmektedir..";

console.log(canBuy) // "Satın alabilirsin.."
let boolean;

const isBooleanTrue = boolean ? true : false;

console.log(isBooleanTrue)
    >> false

console.log(boolean)