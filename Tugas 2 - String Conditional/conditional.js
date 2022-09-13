// Soal 1 
var nama = "Junaedi"
var peran = "Werewolf"

// Output untuk Input nama = '' dan peran = ''
if (nama != "" && peran != "") {
    //Output untuk Input nama = 'John' dan peran = ''
    if (nama == "John" && peran == "") {
        console.log("Halo John, Pilih peranmu untuk memulai game!")
    }
    //Output untuk Input nama = 'Jane' dan peran 'Penyihir'
    if (nama == "Jane" && peran == "Penyihir") {
        console.log("Selamat datang di Dunia Werewolf, Jane")
        console.log("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!")
    }
    //Output untuk Input nama = 'Jenita' dan peran 'Guard'
    if (nama == "Jenita" && peran == "Guard") {
        console.log("Selamat datang di Dunia Werewolf, Jenita")
        console.log("Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.")
    }
    //Output untuk Input nama = 'Junaedi' dan peran 'Werewolf'
    if (nama == "Junaedi" && peran == "Werewolf") {
        console.log("Selamat datang di Dunia Werewolf, Junaedi")
        console.log("Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!")
    }
} else {
    console.log("Nama harus diisi!");
}


// Soal 2
var hari = 21;
var bulan = 1;
var tahun = 2201;
if (hari >= 0 && hari <= 31) {
    var tanggal = hari; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
}
else {
    var tanggal = false
    console.log("Tidak Memenuhi Keriteria")
}
if (bulan >= 1 && bulan <= 12) {
    var bulan = bulan ;  // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
}
else {
    var bulan = false
    console.log("Tidak Memenuhi Keriteria")
}
if (tahun >= 1900 && tahun <= 2200) {
    var tahun = tahun;// assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
}
else {
    var tahun = false
    console.log("Tidak Memenuhi Keriteria")
}
if(tanggal && bulan && tahun){
    switch (bulan) {
        case 1: { console.log(tanggal, 'Januari', tahun); break; }
        case 2: { console.log(tanggal, 'Februari', tahun); break; }
        case 3: { console.log(tanggal, 'Maret', tahun); break; }
        case 4: { console.log(tanggal, 'April', tahun); break; }
        case 5: { console.log(tanggal, 'Mei', tahun); break; }
        case 6: { console.log(tanggal, 'Juni', tahun); break; }
        case 7: { console.log(tanggal, 'Juli', tahun); break; }
        case 8: { console.log(tanggal, 'Agustus', tahun); break; }
        case 9: { console.log(tanggal, 'September', tahun); break; }
        case 10: { console.log(tanggal, 'Oktober', tahun); break; }
        case 11: { console.log(tanggal, 'November', tahun); break; }
        case 12: { console.log(tanggal, 'Desember', tahun); break; }
        default: { console.log('Salah Bulan'); }
    }
} else {
    console.log("Tidak Dapat Ditampilkan")
}
