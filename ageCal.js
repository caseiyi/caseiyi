let userInput = document.querySelector('#date');

function calAge(){
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDay();
    let m1 = birthDate.getMonth() +1 ;
    let y1 = birthDate.getFullYear();
    let today = new Date();
    let d2 = today.getDate();
    let m2 =today.getMonth()+1;
    let y2 = today.getFullYear();
    let y3,m3=0,d3=0;
    y3 =y2-y1;
    if(m2>=m1){
        m3=m2-m1 ;
    }else{
        y3--;
        m3 = 12 + (m2-m1) ;
    }
    if(d2>=d1){
        d3=d2-d1 ;
    }else{
    m3--;
    d3=monthDays(y1,m1) +(d2 -d1);
    }
    document.querySelector(".age").textContent =`you are ${y3} years ${m3}months ${d3}days old`;
    console.log(y2,m2,d2);
}

function monthDays(year,month) {
    return new Date(year,month,0).getDate();
}
let btn = document.querySelector("button");
btn.addEventListener('click',calAge);

const object = {
    name:"urmd",
    age:38,
    job:'jobless'
}
let res = Object.keys(object);
const person = {
    fname:"John",
    lname:"Doe",
    age:25
  }; 
  
  let x;
  for(x in person) {
  if(x !=='lname')
 {   console.log(x);
    let y = person[x];
    console.log(y);
    }else{ continue; }
  }

  let z = person["fname"];
  let arr = ['djf','samsu'];
  let c = arr.includes('djf')