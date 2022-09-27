const fs = require('fs')
const { param } = require('../routes')
const path = 'data.json'

class EmployeeController {
    static register(req, res){
        fs.readFile(path, (err, data) => {
            if (err) {
                res.status(400).json({message : "File Error"})
            }else{
                let dataJSON = JSON.parse(data)
                let {name, password, role} = req.body
                let dataKaryawan = {name, password, role, isLogin:false}
                dataJSON.push(dataKaryawan)
                let result = dataJSON
                fs.writeFile(path, JSON.stringify(dataJSON), (err) => {
                    if (err){
                        res.status(400).json({message : "Dara Error"})
                    } else {
                        res.status(201).json({result})
                    }
                })
            }
        })
    }

    static karyawan(req, res){
        fs.readFile(path, (err, data) => {
            if (err) {
                res.status(400).json({message : "File Error"})
            }else{
                let dataJSON = JSON.parse(data)
                res.status(200).json({message : "Berhasil get karyawan", data : dataJSON})
            }
        })
    }

    static login(req, res){
        fs.readFile(path, (err, data) => {
            if (err) {
                res.status(400).json({message : "File Error"})
            }else{
                let dataJSON = JSON.parse(data)
                let {name, password} = req.body
                let dataKaryawan = {name, password}
                let index = dataJSON.findIndex((item) => item.name===dataKaryawan.name)
                if (index==-1){
                    res.status(401).json({message : "User/Password Salah"})
                } else {
                    if (dataJSON[index].password == dataKaryawan.password){
                        dataJSON[index].isLogin = true
                        fs.writeFile(path, JSON.stringify(dataJSON), (err) => {
                            if (err){
                                res.status(400).json({message : "Dara Error"})
                            } else {
                                res.status(201).json({message : "Berhasil Login"})
                            }
                        })
                    } else {
                        res.status(401).json({message : "User/Password Salah"})
                    }
                }                
            }
        })
    }

    static addSiswa(req, res){
        let params = req.params
        let bodyData = req.body
        fs.readFile(path, (err, data) => {
            if (err) {
                res.status(400).json({message : "File Error"})
            }else{
                let dataJSON = JSON.parse(data)
                let index = dataJSON.findIndex((item) => item.name === params.name)
                if (index==-1){
                    res.status(400).json({message : "Data trainer tidak ditemukan"})
                } else {
                    if (dataJSON[index].students==undefined){
                        dataJSON[index].students = [bodyData]
                    } else {
                        dataJSON[index].students.push(bodyData)
                    }
                }
                fs.writeFile(path, JSON.stringify(dataJSON), (err) => {
                    if (err){
                        res.status(400).json({message : "Dara Error"})
                    } else {
                        res.status(201).json(dataJSON[index])
                    }
                })
            }
        })
    }
}

module.exports = EmployeeController