// Atlas Id Tech
// Sabtu, 11 July 2020
// Basic Javascript For Automation
// Teacher Aditya Setyadi [ SDET Lead DANA Indonesia]
// Co-Teacher Fathurozaq Budi Setyawan [ SDET Lead DANA Indonesia ]
// Co-Teacher Fadly Mahendra [ QE Manager Ralali.com ]
// Co-Teacher Genta Wibowo [ Sr Manager Test Engineer Bukalapak ]

// Author: Salim Suprayogi


// kondisi ,nilai kembalian nya adalah bolean [ benar / salah ]
let atlas = 99;

if ((atlas >= 50)) {
    console.log("pesertanya banyak");
} else {
    console.log("pesertanya sedikit")
}

// perulangan
for (let i = 1; i < 11; i++) {
    x += 1
}
console.log();
n = 0
while (n < 3) {
    console.log("berhenti3")
    n = 3
}

let n = 0

while (n < 3) {
    console.log("HHH")
    for (let i = 0; i < 3; i++) {
        console.log(i)
        n = n + 1;
    }
    if (n != 0) {
        console.log("nilsi n tidak sama dengan 0")
    }
}

// perulangan berlaku untuk colection saja, yg lain tidak bisa
let collct = [1, true, 3, "ini string", { nama: "Aditya", asal: "lampung" }, [1, 2, 3, 4]];
for (let data of collct) {
    console.log(data);
}
