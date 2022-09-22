"use strict";

var _soal = require("./libs/soal");

var myArgs = process.argv.slice(2);
var command = myArgs[0];
var value = myArgs.slice(1);

switch (command) {
  case "register":
    (0, _soal.registerKaryawan)(value);
    break;

  case "login":
    (0, _soal.loginAkun)(value);
    break;

  case "addSiswa":
    (0, _soal.addSiswa)(value);
    break;

  default:
    break;
}