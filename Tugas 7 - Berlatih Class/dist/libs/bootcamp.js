"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bootcamp = void 0;

var _kelas = require("./kelas");

var _student = require("./student");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Bootcamp = /*#__PURE__*/function () {
  function Bootcamp(nameB) {
    _classCallCheck(this, Bootcamp);

    this.name = nameB;
    this.classes = [];
  }

  _createClass(Bootcamp, [{
    key: "createClass",
    value: function createClass(name, level, mentor) {
      var newClass = new _kelas.Kelas(name, level, mentor);
      this.classes.push(newClass);
    }
  }, {
    key: "register",
    value: function register(kelas, newStud) {
      var newClass = this.classes.filter(function (objkelas) {
        return kelas === objkelas.name;
      });
      newClass.addStudents(newStud);
    }
  }, {
    key: "nameBootcamp",
    get: function get() {
      return this.name;
    },
    set: function set(nameB) {
      this.name = nameB;
    }
  }, {
    key: "funcclasses",
    get: function get() {
      return this.classes;
    },
    set: function set(classes) {
      this.classes.push(classes);
    }
  }]);

  return Bootcamp;
}();

exports.Bootcamp = Bootcamp;