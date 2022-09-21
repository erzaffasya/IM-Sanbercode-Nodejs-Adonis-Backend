"use strict";

var _bootcamp = require("./libs/bootcamp");

var _student = require("./libs/student");

// Soal 1
var sanber = new _bootcamp.Bootcamp("sanbercode");
sanber.createClass("Laravel", "beginner", "abduh");
sanber.createClass("React", "beginner", "abdul"); // console.log(sanber.classes)

var names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"];
names.map(function (nama, index) {
  var newStud = new _student.Student(nama);
  var kelas = sanber.classes[index % 2].name;
  sanber.register(kelas, newStud);
}); // menampilkan data kelas dan student nya

sanber.funcclasses.forEach(function (kelas) {
  console.log(kelas);
});