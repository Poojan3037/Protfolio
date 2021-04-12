
let htag=document.getElementById("h1");
let str="Hello,I am a front-end web developer.";

let index=0;
function show(){
    htag.innerHTML=`${str.slice(0,index)}|`;

    index++;

    if(index>str.length){
        index=0;
    }
}

setInterval(show, 300);