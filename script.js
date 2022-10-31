let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log(day);

for (let i = 0; i <= 50; i++) {
    console.log(i)
}
let i = 0;



while (i<150) {
    i++;
    console.log(i)
    
}


let j = 0;
do {
    console.log(j);
    j++;
} while (j<=100);


let arr = [];
for(let i = 1; i<100;i++){
    arr.push(i*i)
}
console.log(arr)
