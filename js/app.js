'use strict';
const allName = [];

function Employee(employee_ID, fullName, department, level, image_URL) {
    this.employee_ID = employee_ID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image_URL = image_URL;
    this.salary =0;
    allName.push(this);


}
Employee.prototype.calulation = function () {
if(this.level=='Junior'){
    return Math.floor(Math.random() * (1000 - 500) ) + 500;
}
else if(this.level=='midSenior'){
    return Math.floor(Math.random() * (1500 - 1000) ) + 1000;
}
else {
    return Math.floor(Math.random() * (2000 - 1500) ) + 1500;
}
}

Employee.prototype. theNetSalary= function() {
    this.salary= this.calulation()*(1-0.075)
    console.log("hi");
};

Employee.prototype.nameAndSalary = function() {
   this.theNetSalary();
    document.write(`<h1>the name is ${this.fullName} and tha salary is ${this.salary}</h1>`);
   
};
let ghaziSamer = new Employee(
    1000,
    'ghaziSamer',
    'Administration',
    'Senior'
  );
  let lanaAli= new Employee(
    1001,
    "lanaAli",
    "finance",
    "senior"

  );
  let tamaraAyoub= new Employee(
    1002,
    "tamaraAyoub",
    "marketing",
    "senior"

  );
  let safiWalid= new Employee(
    1003,
    "safiWalid",
    "administration",
    "midSenior"

  );
   let omerZaid= new Employee(
    1004,
    "omerZaid",
    "development",
    "senior"

  );
  let ranaSaleh= new Employee(
    1005,
    "ranaSaleh",
    "development",
    "junior"

  );
  let hadiAhmad= new Employee(
    1006,
    "hadiAhmad",
    "finance",
    "midSenior"

  );

  function cale() {
    for (let i = 0; i < allName.length; i++) {
        allName[i].nameAndSalary();
    }
    
  }
  cale();
 