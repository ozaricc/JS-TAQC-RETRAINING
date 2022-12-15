//TASK1
/* let x = 1;
let y = 2;
let data = String(y);
let res1 = x + data;
console.log(res1);
console.log(typeof res1); */

/* let x = 1;
let y = 2;
let data = Boolean(x);
let data2 = String(y);
let res2 = data + data2;
console.log(res2);
console.log(typeof res2); */

/* let x = 1;
let y = 2;
let res3 = 1 < 2;
console.log(res3);
console.log(typeof res3); */

/* let x = 1;
let y = "asc";
let res4 = x / y;
console.log(res4);
console.log(typeof res4); */

//TASK 2
//a
/* let number = prompt("Type a number");
if ((number % 2 == 0) & (number > 0)) {
  console.log(number);
} else {
 console.log("Number is incorrect");
}  */

//b
/* let number = prompt("Type a number");
if (number % 7 == 0) {
  console.log(number);
} else {
  console.log("Number is incorrect");
} */

//TASK 3
//const arr = [9, "love", '&&', null];

/* //5)
console.log(arr.length); */

/* //6)
let number = prompt("Type any number");
arr[4] = number;
console.log (arr); */

/* //7)
let number = prompt("Type any number");
arr[4] = number;
console.log (arr[4]); */

/* //8)
arr.shift();
console.log(arr); */

/* //TASK 4
let cities = ["Rome", "Lviv", "Warsaw"]; 
let str = cities.join('*');
console.log(str); */

/* //Task 5
let data = false;
while (data !== true) {
  var age = prompt("Вам вже виповнилось 18 років? Якщо так впишіть Y, ні - N");
  let isAdult = age;
  if (isAdult == "Y") {
    alert("Ви досягли повнолітнього віку");
    data = true;
  } else if (isAdult == "N") {
    alert("Ви ще надто молоді");
    data = true;
  } else {
    alert("Внесіть коректні дані");
  }
} */

//Task 6(NOT COMPLETED)

/* const side1str = parseInt(prompt("Enter side1: "));
//const side1 = Number(side1str);
const side2str = parseInt(prompt("Enter side2: "));
//const side2 = Number(side2str);
const side3str = parseInt(prompt("Enter side3: ")); 
//const side3 = Number(side3str);

if (side1str < side2str && side2str < side3str && side3str < side1str) {
 alert("Incorrect data");
}

/* var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area); */

/*//Task 7
let current = new Date();
let curTime = Number(current.getHours());

if ((curTime) => 23 && curTime <= 4) {
  console.log("Доброї ночі");
} else if (curTime >= 5 && curTime <= 10) {
  console.log("Доброго ранку");
} else if (curTime >= 11 && curTime <= 16) {
  console.log("Доброго дня");
} else if (curTime >= 17 && curTime <= 22) {
  console.log("Доброго вечора"); 
} */
