
// Soal 1 

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(data) {
    for (var a = 0; a < data.length; a++) {
        console.log("Nomor ID: ", data[a][0])
        console.log("Nama: ", data[a][1])
        console.log("TTL: ", data[a][2], " ", data[a][3])
        console.log("Hobi ", data[a][4])
        console.log("")
    }
}
dataHandling(input)

// Soal 2 
function balikKata(data) {
    var hasil = ""
    var panjangData = data.length
    for (var a = panjangData - 1; a >= 0; a--) {
        hasil += data[a]
    }
    return hasil
}

console.log(balikKata("SanberCode")) 

console.log(balikKata("racecar")) 

console.log(balikKata("kasur rusak"))

console.log(balikKata("haji ijah"))

console.log(balikKata("I am Sanbers"))