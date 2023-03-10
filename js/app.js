'use strict';
const allName = [];

let form = document.getElementById("form");
let carde=document.getElementById("card");
let deve

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
  
  return getRndInteger(500, 1000);
}
else if(this.level=='midSenior'){
  return getRndInteger(1000, 1500);
}
else {
  return getRndInteger(1500, 2000);
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
}

Employee.prototype. theNetSalary= function() {
    this.salary= this.calulation()*(1-0.075)
    
};
Employee.prototype.nameAndSalary = function() {
  this.theNetSalary();
  const card = document.createElement("div");
  card.classList.add("employee-card"); // add class "employee-card" to the card
  carde.appendChild(card);

  let imgE1 = document.createElement("img")
  imgE1.src = this.image_URL;
  card.appendChild(imgE1);

  let infoE1 = document.createElement("p")
  infoE1.textContent =`Name: ${this.fullName} -ID: ${this.employee_ID }  `
  card.appendChild(infoE1)

  let infoE2 = document.createElement("p")
  infoE2.textContent =`Department: ${this.department} -Level: ${this.level }  `
  card.appendChild(infoE2)

  let infoE3 = document.createElement("p")
  infoE3.textContent =`${this.salary} `
  card.appendChild(infoE3)
};




  let ghaziSamer = new Employee(1000,'ghaziSamer','Administration','Senior',"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true" );
  let lanaAli= new Employee(1001,"lanaAli", "finance","senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Lana.jpg?raw=true" );
  let tamaraAyoub= new Employee(1002,"tamaraAyoub","marketing","senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true");
  let safiWalid= new Employee(1003,"safiWalid","administration","midSenior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Safi.jpg?raw=true");
  let omerZaid= new Employee(1004,"omerZaid","development","senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Omar.jpg?raw=true" );
  let ranaSaleh= new Employee(1005,"ranaSaleh","development","junior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Rana.jpg?raw=true" );
  let hadiAhmad= new Employee(1006,"hadiAhmad","finance","midSenior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true");

  form.addEventListener("submit",submitHandler);
  let counter = 1006;
function submitHandler(event){
  event.preventDefault();
  console.log(event);

let theName = event.target.fullname.value;
let thePhoto = event.target.img.value;
let theDepartment = event.target.Department.value;
let theLevle = event.target.level.value;
counter++;
let newInfo = new Employee(counter,theName,theDepartment,theLevle,thePhoto)



newInfo.nameAndSalary();

}


  function cale() {
    for (let i = 0; i < allName.length; i++) {
        allName[i].nameAndSalary();
    }
    
  }
  cale();
 