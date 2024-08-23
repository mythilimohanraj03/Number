let a = Math.floor(Math.random()*100);
let count = 10;

function check(){
        document.getElementById('count').innerHTML = count;
    let b = document.getElementById('num');
    count--;
    if(b.value<a && count>0){
        document.getElementById('result').innerHTML = "Go with larger number";
    }
    else if(b.value>a && count>0){
        document.getElementById('result').innerHTML = "go with smaller number ";
    }
    else if(b.value==a && count>0){
       window.location.href="./won.html";
    }
    else if(count == 0){
        window.location.href="./lose.html";
    }
}


function reload(){
    location.reload();
}