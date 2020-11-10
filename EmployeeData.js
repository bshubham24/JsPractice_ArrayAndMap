class EmployeeData{
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    //getter and setter
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }

    //toString
    toString(){
        return "id = "+this.id+",name = "+this.name+",salary = "+this.salary;
    }
}

let employeeData = new EmployeeData(1,"Mark",30000);
console.log(employeeData.toString());
employeeData.name = "john";
console.log(employeeData.toString());