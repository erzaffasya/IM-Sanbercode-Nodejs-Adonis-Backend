import fspromise from 'fs/promises'
const path = "data.json"
const fs = require("fs")

export const registerKaryawan = (param) =>{
    let arrKaryawan = param.join("").split(",")
    let objKaryawan = {
        name : arrKaryawan[0],
        password : arrKaryawan[1],
        role : arrKaryawan[2],
        isLogin : false
    }
    fs.readFile(path, "utf-8", function(err, data) {
        if (err){
            console.log(err);
        } else {
            console.log("Hullaee");
            let realData = JSON.parse(data)
            console.log(realData);
            realData.push(objKaryawan)
            fs.writeFile(path, JSON.stringify(realData), (err) =>{
                if (err){console.log(err);}
                console.log("Data berhasil dimasukkan");
                console.log(data);
            })
        }
    })
}

export const loginAkun = (param) => {
    let dataParam = param.join("").split(",")
    let username = dataParam[0]
    let password = dataParam[1]
    // Read Files
    fspromise.readFile(path)
        .then((data) => {
            let realData = JSON.parse(data)
            // Cari username
            let indexAkun = realData.findIndex((item) => item.name === username)
            if (indexAkun==-1){
                console.log("Username tidak ditemukan");
            } else {
                if(realData[indexAkun].password == password){
                    // Ubah status login menjadi true
                    realData[indexAkun].isLogin = true
                    return fspromise.writeFile(path, JSON.stringify(realData))
                } else {
                    return "Password yang dimasukkan salah"
                }
            }
        })
        .then((data) => {
            if (data==undefined){
                console.log("Akun Berhasil Login")
            } else {
                console.log(data);
            }
        })
        .catch((err) => console.log(err))
}

export const addSiswa = async (param) => {
    let dataParam = param.join("").split(",")
    let namaSiswa = dataParam[0]
    let namaMentor = dataParam[1]
    let data = await fspromise.readFile(path)
    let realData = JSON.parse(data)
    // Get index mentor
    let indexMentor = realData.findIndex(item => item.name===namaMentor)
    // Add student
    if (realData[indexMentor].students===undefined){
        // Siswa pertama
        realData[indexMentor].students = [namaSiswa]
    }else {
        realData[indexMentor].students.push(namaSiswa)
    }
    
    await fspromise.writeFile(path, JSON.stringify(realData))
    console.log("Data Siswa Berhasil Ditambahkan");
}