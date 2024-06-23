//  1-masala


    // const erkakIsmlari = ["Akmal", "Bekzod", "Dilshod", "Elyor", "Farhod"];
    // const ayolIsmlari = ["Anora", "Bibisora", "Dilnoza", "Elvira", "Feruza"];
// 
// function mrMs() {
    // const nameInput = prompt("Ismingizni kiriting:");
    // let result = '';
// 
    // if (erkakIsmlari.includes(nameInput)) {
        // result = 'Janob ${nameInput}';
    // } else if (ayolIsmlari.includes(nameInput)) {
        // result = 'Honim ${nameInput}';
    // } else {
        // result = 'Ism topilmadi: ${nameInput}';
    // }
// 
    // document.getElementById('result').innerText = result;
    // console.log(result)
// }
// 


// 3-masala

// Kvadrat perimetr topish funksiyasi
function Kvadrat(tomoni) {
    return 4 * tomoni;
}

// To'rtburchak perimetr topish funksiyasi
function Tortburchak(uzunlik, kenglik) {
    return 2 * (uzunlik + kenglik);
}

// Aylana  perimetr topish funksiyasi
function Aylana(radius) {
    return 2 * Math.PI * radius;
}


console.log (Kvadrat)
console.log (Tortburchak)
console.log (Aylana)