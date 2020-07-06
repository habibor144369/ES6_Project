// creat a new multipal object dynamic syestem....
class Parrant{
    constructor(){
        this.fatherName = "MagGayber"
    }
}

class Child extends Parrant{
    constructor(name){
        super();
        this.Name = name;
    }
   fullName(){
       return this.Name + " " + this.fatherName //access to property value..
    }
}
const baby = new Child("Thomas");
const baby2 = new Child("Jonathon");
console.log(baby);
console.log(baby2);

console.log(baby.fullName());  //access to property value..call
console.log(baby2.fullName());  //access to property value..call
