// Atlas Id Tech
// Sabtu, 11 July 2020
// Basic Javascript For Automation
// Teacher Aditya Setyadi [ SDET Lead DANA Indonesia]
// Co-Teacher Fathurozaq Budi Setyawan [ SDET Lead DANA Indonesia ]
// Co-Teacher Fadly Mahendra [ QE Manager Ralali.com ]
// Co-Teacher Genta Wibowo [ Sr Manager Test Engineer Bukalapak ]

// Author: Salim Suprayogi


// Equality
console.log("5 == '5' : ", 5 == "5"); // convert value lalu baru dibandingkan
console.log("5 != 5 : ", 5 != 5);

// baiknya menggunakan format yang ini
console.log("5 === '5' : ", 5 === "5"); //tidak mencoba convert/g akan di samakan value nya
hasil = 5 !== 5
console.log("5 !== '5' : ", hasil);

// logical
console.log("(5 > 3) && (13 < 35) : ", (5 > 3) && (13 < 35)); // true AND true
console.log("(5 > 3) || (130 < 35) : ", (5 > 3) || (130 < 35)); // true OR false
console.log("!(5 > 3) || (130 < 35) : ", !(5 > 3) || (130 < 35)); // NOT(true OR false), menggunakan negasi untuk mengembalikan nilai kebalikan dari kondisi tersebut
