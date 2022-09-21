export class Student{
    constructor(name){
        this._name = name
    }

    get name(){
        return this._name
    }

    set name(naming){
        this._name = naming
    }
}