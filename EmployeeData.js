class EmployeeData{
    //constructor
    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter
    get id(){
        return this._id;
    }
    set id(id){
        let idRegex = RegExp('^[1-9][0-9]{0,}$');
        if(idRegex.test(id))
            this._id = id;
        else throw 'Incorrect Id: '+id;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        let salaryRegex = RegExp("^[1-9][0-9]{0,}$");
        if(salaryRegex.test(salary))
            this._salary = salary;
        else throw 'Invalid Salary: '+salary;
    }
    get gender(){
        return this._gender;
    }
    set gender(gender){
        let genderRegex = RegExp("^[MF]$");
        if(genderRegex.test(gender))
            this._gender = gender;
        else throw "Invalid Gender: "+gender+". Choose M or F";
    }
    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name)){
            this._name = name;
        }
        else throw 'Invalid Name: '+name;
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        if(startDate.getMonth()<=(new Date()).getMonth()
           &&startDate.getDay()<=(new Date()).getDay()
           &&startDate.getFullYear()<=(new Date()).getFullYear())
            this._startDate = startDate;
        else throw "Invalid Date: "+startDate.toLocaleDateString("en-IN");
    }

    //toString
    toString(){
        const options = {year: 'numeric', month: 'numeric', day:'numeric'};
        const empDate = this.startDate == undefined ? "undefined":
                        this.startDate.toLocaleDateString("en-IN",options);
        return "id = "+this.id+",name = "+this.name+",salary = "+this.salary +",gender = "+this.gender+",start date = "+empDate;
    }
}
let employeeData = new EmployeeData(1,"Mark",30000,"M",new Date());
console.log(employeeData.toString());

try{
    employeeData.name = "john";
    console.log(employeeData.toString());
}
catch(e){
    console.error(e);
}

let newEmployeeData = new EmployeeData(1,"Terrisa",30000,"F",new Date());
console.log(newEmployeeData.toString());

let newEmployeeData2 = new EmployeeData(1,"Terr",30000,"F",new Date());
console.log(newEmployeeData2.toString());

try{
    let newEmployeeData3 = new EmployeeData(0,"Terrisa",30000,"F",new Date());
    console.log(newEmployeeData3.toString());
} catch(e){
    console.error(e);
}
try{
    let newEmployeeData4 = new EmployeeData(2,"Terrisa",-30000,"F",new Date());
    console.log(newEmployeeData4.toString());
} catch(e){
    console.error(e);
}
try{
    let newEmployeeData5 = new EmployeeData(2,"Terrisa",30000,"K",new Date());
    console.log(newEmployeeData5.toString());
} catch(e){
    console.error(e);
}
try{
    let newEmployeeData6 = new EmployeeData(2,"Terrisa",30000,"F",new Date('2025-09-21T10:20:30Z'));
    console.log(newEmployeeData6.toString());
} catch(e){
    console.log(e);
}