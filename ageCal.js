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
    if(d1>=d2 && m1>=m2 && y1==y2 || y1>y2||(m1>m2 && y1==y2)){
        document.querySelector(".age").textContent =`You are not old enough to use this feature`;
    }
    else{
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
    document.querySelector(".age").textContent =`You are ${y3} years ${m3}months ${d3}days old`;
    console.log(y2,m2,d2);}
}

function monthDays(year,month) {
    return new Date(year,month,0).getDate();
}
let btn = document.querySelector("button");
btn.addEventListener('click',calAge);
