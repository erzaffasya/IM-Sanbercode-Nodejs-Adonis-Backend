import { Kelas } from "./kelas"
import { Student } from "./student"

export class Bootcamp {
    constructor(nameB) {
        this.name = nameB
        this.classes = []
    }

    createClass(name, level, mentor){
        var newClass = new Kelas(name, level, mentor)
        this.classes.push(newClass)
    }

    register(kelas, newStud) {
        let newClass = this.classes.find((objkelas) => kelas === objkelas.name)
        newClass.addStudents(newStud)
    }

    get nameBootcamp(){
        return this.name
    }

    get funcclasses(){
        return this.classes
    }

    set nameBootcamp(nameB){
        this.name = nameB
    }

    set funcclasses(classes){
        this.classes.push(classes)

    }
    
}

