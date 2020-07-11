// Atlas Id Tech
// Sabtu, 11 July 2020
// Basic Javascript For Automation
// Teacher Aditya Setyadi [ SDET Lead DANA Indonesia]
// Co-Teacher Fathurozaq Budi Setyawan [ SDET Lead DANA Indonesia ]
// Co-Teacher Fadly Mahendra [ QE Manager Ralali.com ]
// Co-Teacher Genta Wibowo [ Sr Manager Test Engineer Bukalapak ]

// Author: Salim Suprayogi


// function
function printingSomething(n) {
    while (n < 3) {
        console.log("hello !!")
        for (let i = 0; i < 3; i++) {
            console.log(i)
            n = n + 1;
        }
        if (n != 0) {
            console.log("nilai n tidak sama dengan 0")
        }
    }
}
console.log(printingSomething(2))

function menghitungluas(jariJari){
    return 22/7 *jariJari * jariJari
}
console.log(menghitungluas(7))