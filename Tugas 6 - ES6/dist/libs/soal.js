"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sapa = exports.myobj = exports.filterdata = void 0;

var sapa = function sapa(nama) {
  return "Halo Selamat pagi , ".concat(nama);
};

exports.sapa = sapa;

var myobj = function myobj(name, clas, score) {
  return {
    name: name,
    clas: clas,
    score: score
  };
};

exports.myobj = myobj;
var data = [{
  name: "Ahmad",
  kelas: "adonis"
}, {
  name: "Regi",
  kelas: "laravel"
}, {
  name: "Bondra",
  kelas: "adonis"
}, {
  name: "Iqbal",
  kelas: "vuejs"
}, {
  name: "Putri",
  kelas: "Laravel"
}];

var filterdata = function filterdata(kelas) {
  for (var i = 0; i < data.length; i++) {
    return data.filter(function (el) {
      return el['kelas'].toLowercase().includes(query.toLowercase());
    });
  }
};

exports.filterdata = filterdata;