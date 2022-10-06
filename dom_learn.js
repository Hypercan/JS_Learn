// innerHTML ile js den html dpsyası çağırırken sadcee o html dosyasını alır.
// *******Önemli ******* 
// getElement kullanırsan elementin kendisi id, class, name vs gibi çağırır.
let top1 = document.getElementById("topic")
console.log(top1)


// Burada queryselectoryün işlevini görüyorsun
let link = document.querySelector("#benimLink")
link.innerHTML += " lorem ipsum dolor sit amet"
// Ayrıca linkin renkgini style a ulaşıp değiştirebilirsin 
link.style.color = "red";