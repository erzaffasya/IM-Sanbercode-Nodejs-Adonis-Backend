"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Kelas = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Kelas = /*#__PURE__*/function () {
  function Kelas(name, level, mentor) {
    _classCallCheck(this, Kelas);

    this._name = name;
    this.students = [];
    this._level = level;
    this._mentor = mentor;
  }

  _createClass(Kelas, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(newName) {
      this._name = newName;
    }
  }, {
    key: "studentsList",
    get: function get() {
      return this.students;
    },
    set: function set(newStud) {
      console.log("Pass");
      this.students.push(newStud);
    }
  }, {
    key: "level",
    get: function get() {
      return this._level;
    },
    set: function set(lvl) {
      this._level = lvl;
    }
  }, {
    key: "mentor",
    get: function get() {
      return this._mentor;
    },
    set: function set(mentorName) {
      this._mentor = mentorName;
    }
  }, {
    key: "addStudents",
    value: function addStudents(stud) {
      this.students.push(stud);
    }
  }]);

  return Kelas;
}();

exports.Kelas = Kelas;