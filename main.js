let navbtn1 =document.getElementById("navbtn1")
let navbtn2 =document.getElementById("navbtn2")
let navbtn3 =document.getElementById("navbtn3")
let navbtn4 =document.getElementById("navbtn4")
let navbtn5 =document.getElementById("navbtn5")
let sendmess = document.getElementById("submit")
let header= document.getElementById("header");
let thx = document.getElementById("thx");
let c = document.getElementById("c")
let jop = document.getElementById("jop")
let myjop= "web designer & web development"
let index =1;
setInterval(function(){ writtext()},100)

function writtext()
{

  jop.textContent =  myjop.slice(0,index);
   
    index++
    if(index > myjop.length){
        index =1;
    }
}



navbtn1.onclick=function () {
    scroll({
        top:0,
        behavior:"smooth" ,

    }) ; 
}
navbtn2.onclick=function () {
    scroll({
        top:528.31,
        behavior:"smooth" ,

    }) ; 
}
navbtn3.onclick=function () {
    scroll({
        top:921.2389526367188,
        behavior:"smooth" ,

    }) ; 
}
navbtn4.onclick=function () {
    scroll({
        top:1402.6549072265625,
        behavior:"smooth" ,

    }) ; 
}
navbtn5.onclick=function () {
    scroll({
        top:2846.017822265625,
        behavior:"smooth" ,

    }) ; 
}

sendmess.onclick= SendMessageShow;
c.onclick =SendMessageClose;

function SendMessageShow(){
    thx.classList.add("thxShow")
    thx.classList.remove("thx")
}
function SendMessageClose(){
    thx.classList.add("thx")
    thx.classList.remove("thxShow")
} 
setInterval(scrolly,10);
function scrolly(){

    if(scrollY > 78.76106262207031){
        header.style.backgroundColor="rgba(48, 96, 83, 0.7)";
    }
    else{
        header.style.backgroundColor="rgba(48, 96, 83, 0)";

    }
    
}