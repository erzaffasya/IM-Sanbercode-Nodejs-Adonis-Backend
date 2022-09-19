function kelompokAngka(arr) {
    var ganjil = []
    var genap = []
    var kelipatan3 = []
    for (var angka = 0; angka <= arr.length; angka++) {
        if (arr[angka] % 3 == 0) {
            kelipatan3.push(arr[angka])
        } else if (arr[angka] % 2 != 0) {
            if (arr[angka]) {
                ganjil.push(arr[angka])
            }
        } else {
            genap.push(arr[angka])
        }
    }

    return [ganjil, genap, kelipatan3]
}

// //Test Case
// console.log(kelompokAngka([1, 2, 3, 4, 5, 6, 7]))
// //Output:[[1,5,7],[2,4],[3,6]]
// console.log(kelompokAngka([13, 27, 11, 15]))
// //Output:[[13,11],[],[27,15]]
// console.log(kelompokAngka([]))
// //output:[[],[],[]]

function hitungVokal(string) {
    let vokal = "aeiouy";
    let jumlah = 0;

    for (let i = 0; i < string.length; i++) {

        if (vokal.includes(string[i].toLowerCase())) {
            jumlah++;
        }
    }


    return jumlah;
}

// console.log(hitungVokal("Adonis"))// Output:3
// console.log(hitungVokal("Error"))//Output:2
// console.log(hitungVokal("Eureka"))//Output:4
// console.log(hitungVokal("Rsch")) // Output: 0


function tandaiA(str) {
    var split = str.split('');
    var vokal = 'a';
    var ubah = 'x';
    var a = ''

    for (var i = 0; i < split.length; i++) {
        for (var j = 0; j < vokal.length; j++) {
            if (vokal[j] === split[i]) {
                a = a + ubah[j];
                break;
            } else if (vokal[j].toLowerCase() === split[i]) {
                a = a + ubah[j].toLowerCase();
                break;
            }
        }
        if (a.length < i + 1) a = a + split[i];
    }

    return a;

}

// Tes Cases
// console.log(tandaiA("abrakadabra")) // xbrxkxdxbrx
// console.log(tandaiA("garuda")) // gxrudx
// console.log(tandaiA("kucing")) // kucing








// "participated" bagi siswa dengan nilai < 60,
//60- 85 = completed
// diatas 85 = mastered
var arr = [
    { name: "Ahmad", score: 80, class: "Laravel" },
    { name: "Regi", score: 86, class: "Vuejs" },
    { name: "Robert", score: 59, class: "Laravel" },
    { name: "Bondra", score: 81, class: "Reactjs" }
]

function graduate(arr) {
    var output = {}
    for (var i = 0; i < arr.length; i++) {
        var current = arr[i]

        if (current.score < 60 ) {
            output[current.class] = {
                name: current.name,
                score: current.score,
                grade: "participated"
            }
        } else if (59 < current.score && current.score < 86) {
            output[current.class] = {
                name: current.name,
                score: current.score,
                grade: "completed"
            }
        } else {
            output[current.class] = {
                name: current.name,
                score: current.score,
                grade: "mastered"
            }
        }
    }
    return output
}

console.log(graduate(arr))

//Output

// {
//     Laravel: [{ name: "Ahmad", score: 80, grade: "completed" }, { name: "Robert", score: 59, grade: "participated" }],
//     Vuejs: [{ name: "Regi", score: 86, grade: "mastered" }],
//     Reactjs: [{ name: "Bondra", score: 81, grade: "completed" }]
// }