export class Kelas{
    constructor(name, level, mentor){
        this._name = name
        this.students = []
        this._level = level
        this._mentor = mentor
    }


    get name(){
        return this._name
    }

    get studentsList(){
        return this.students
    }

    get level(){
        return this._level
    }

    get mentor(){
        return this._mentor
    }

    set name(newName){
        this._name = newName
    }

    set studentsList(newStud){
        console.log("Pass");
        this.students.push(newStud)
    }

    addStudents(stud){
        this.students.push(stud)
    }

    set level(lvl) {
        this._level = lvl
    }

    set mentor(mentorName){
        this._mentor = mentorName
    }
}