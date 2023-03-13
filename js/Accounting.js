let tableEl = document.getElementById("table");
let tableEl2 = document.getElementById("tbody");
let tableEl3 = document.getElementById("tfoot");

allNamNew=[];
let objArray

function getData() {
    let retrievedArr = localStorage.getItem('information');
   objArray = JSON.parse(retrievedArr);
    console.log("after getting from LS ", objArray) // array of obje
   
}
getData();

let sumAdministration = 0
let sumSalAdministration = 0;
let sumMarketing = 0
let sumSalMarketing = 0;
let sumDevelopment = 0;
let sumSalDevelopment = 0;
let sumFinance = 0;
let sumSalFinance = 0;

for (let i = 0; i < objArray.length; i++) {
    if (objArray[i]["department"] == "administration") {
        sumAdministration++;
        sumSalAdministration += objArray[i]["salary"]
    }
    else if (objArray[i]["department"]== "marketing") {
        sumMarketing++;
        sumSalMarketing += objArray[i]["salary"];
    } else if (objArray[i]["department"] == "development") {
        sumDevelopment++;
        sumSalDevelopment +=objArray[i]["salary"];
    } else {
        sumFinance++;
        sumSalFinance += objArray[i]["salary"];
    } {

    }
}


for (let i = 0; i < 4; i++) {
   

    let trEL = document.createElement('tr');
    tableEl2.appendChild(trEL);

    let tdEl = document.createElement('td');
    tdEl.textContent = Department(i);
    trEL.appendChild(tdEl);

    let tdEl2 = document.createElement('td');
    tdEl2.textContent = Number(i);
    trEL.appendChild(tdEl2);
    let tdEl3 = document.createElement('td');
    tdEl3.textContent = avrg(i);
    trEL.appendChild(tdEl3);

    let tdEl4 = document.createElement('td');
    tdEl4.textContent = totla(i);
    trEL.appendChild(tdEl4);
   
}
let trEL = document.createElement('tr');
tableEl3.appendChild(trEL);

let tdEl = document.createElement('td');
tdEl.textContent = "";
trEL.appendChild(tdEl);

let tdEl1 = document.createElement('td');
tdEl1.textContent = `Total number of employees= ${totlaEmpl()}`;
trEL.appendChild(tdEl1);

// Total salary for all departments

let tdEl2 = document.createElement('td');
tdEl2.textContent = `Total salary for all departments= ${totlaSal()}`
trEL.appendChild(tdEl2);
// Average salary for all departments
let tdEl3 = document.createElement('td');
tdEl3.textContent =`Average salary for all departments= ${avrSalAll()}`
trEL.appendChild(tdEl3);


 
function Department (params) {
    let arr1=["administration","marketing","development","finance"]
    return arr1[params];
}
function Number  (params) {
    let arr1=[sumAdministration,sumMarketing,sumDevelopment,sumFinance]
    return arr1[params];
}
function avrg  (params) {
    let arr1=[Math.floor(sumSalAdministration/sumAdministration),Math.floor(sumSalMarketing/sumMarketing),Math.floor(sumSalDevelopment/sumDevelopment),Math.floor(sumSalFinance/sumFinance)]
    return arr1[params];
}
function totla  (params) {
    let arr1=[sumSalAdministration,sumSalMarketing,sumSalDevelopment,sumSalFinance]
    return arr1[params];
}
function totlaEmpl() {
    let train=sumAdministration+sumMarketing+sumDevelopment+sumFinance;
    return train
}
function totlaSal  (params) {
    let train=(sumSalAdministration+sumSalMarketing+sumSalDevelopment+sumSalFinance)
 return train;
}
function avrSalAll  (params) {
    let train=Math.floor(totlaSal()/totlaEmpl())
 return train;
}
    
    
  
   
// for (let i = 0; i < objArray.length; i++) {
//         if (objArray[i]["department"] == "administration") {
//             sumAdministration++;
//             sumSalAdministration += objArray[i]["salary"]
//         }
//         else if (objArray[i]["department"]== "marketing") {
//             sumMarketing++;
//             sumSalMarketing += objArray[i]["salary"];
//         } else if (objArray[i]["department"] == "development") {
//             sumDevelopment++;
//             sumSalDevelopment +=objArray[i]["salary"];
//         } else {
//             sumFinance++;
//             sumSalFinance += objArray[i]["salary"];
//         } {

//         }
//     }





