// Nomor 1 
console.log("Looping Pertama")
var data = 0
while (data < 20) {
    data += 2
    console.log(data + "- I love coding")
}
console.log("Looping Kedua")    
while (data > 0) {
    data -= 2
    console.log(data + "- I love coding")
}

// Nomor 2
for (var angka = 1; angka <= 20; angka++) {
    if (angka % 2 == 0) {
        console.log(angka + ' - Berkualitas');
    } else {
        if (angka % 3 == 0) {
            console.log(angka + ' - I Love Coding');
        } else {
            console.log(angka + ' - Santai');
        }
    }

}

// Nomor 3
function makeRectangle(panjang, lebar) {
    for (var p = 1; p <= lebar; p++) {
        var pagar = ""
        for (var j = 1; j <= panjang; j++) {
            pagar += "#"
        }
        console.log(pagar)
    }
}
makeRectangle(44,4)

// Nomor 4
function makeLadder(sisi) {
    for (var t = sisi; t >= 1; t--) {
        var baris1 = ""
        for (var r = t; r <= sisi; r++) {
            baris1 += "#"
        }
        console.log(baris1)
    }
}

makeLadder(10)