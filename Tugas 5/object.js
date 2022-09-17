// Soal No 1
function arrayToObject(arr) {
    for (var i = 0; i < arr.length; i++) {
        var thisYear = (new Date()).getFullYear();
        var personArr = arr[i];
        var objPerson = {
            firstName: personArr[0],
            lastName: personArr[1],
            gender: personArr[2],
        }
        if (!personArr[3] || personArr[3] > thisYear) {
            objPerson.age = "Invalid Birth Year"
        } else {
            objPerson.age = thisYear - personArr[3]
        }
        var fullName = objPerson.firstName + " " + objPerson.lastName
        console.log(`${i + 1} . ${fullName} : `, objPerson)
    }
}


var people = [["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"]]
var people2 = [["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023]]

arrayToObject(people)
arrayToObject(people2) 

// Soal No 2 
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var output = []
    for (var j = 0; j < arrPenumpang.length; j++) {
        var PenumpangSekarang = arrPenumpang[j]
        var obj = {
            penumpang: PenumpangSekarang[0],
            naikDari: PenumpangSekarang[1],
            tujuan: PenumpangSekarang[2]
        }

        var bayar = (rute.indexOf(PenumpangSekarang[2]) - rute.indexOf(PenumpangSekarang[1])) * 2000
        obj.bayar = bayar
        output.push(obj)
    }
    return output
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));

// Soal No 3 
function nilaiTertinggi(siswa) {
    var output = {};
    for (var i = 0; i < siswa.length; i++) {
        var current = siswa[i]
        if (!output[current.class]) {
            output[current.class] = {
                name: siswa[i].name,
                score: siswa[i].score,
            }
        } else if (current.score > output[current.class].score) {
            output[current.class] = {
                name: siswa[i].name,
                score: siswa[i].score,
            };
        }
    }
    return output;
}


console.log(nilaiTertinggi([
    {
        name: 'Asep',
        score: 90,
        class: 'adonis'
    },
    {
        name: 'Ahmad',
        score: 85,
        class: 'vuejs'
    },
    {
        name: 'Regi',
        score: 74,
        class: 'adonis'
    },
    {
        name: 'Afrida',
        score: 78,
        class: 'reactjs'
    }
]));

console.log(nilaiTertinggi([
    {
        name: 'Bondra',
        score: 100,
        class: 'adonis'
    },
    {
        name: 'Putri',
        score: 76,
        class: 'laravel'
    },
    {
        name: 'Iqbal',
        score: 92,
        class: 'adonis'
    },
    {
        name: 'Tyar',
        score: 71,
        class: 'laravel'
    },
    {
        name: 'Hilmy',
        score: 80,
        class: 'vuejs'
    }
]));