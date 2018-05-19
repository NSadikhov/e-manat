// var f=[45,65,76,88];
// function search(array,callback){
//     var emptyArray= [];
//     for(i in array){
//         if(callback( array[i])){
//             emptyArray.push(array[i]);
//         }
//     }
//     return emptyArray;
// }
// function nk(number){
//     if(number>60)return true; else return false;
// }
// search(f,nk); 

function maxValue(){
    if(numberPart.disabled==true || numberPart.disabled=="disabled") return true;
    if(numberPart.value.length==9){
        btnGo.style.visibility="visible";
        numberPart.disabled=true;
    }
    return false;
}
function Add(number) {
    if(!maxValue())
    numberPart.value+=number; 
    btnDelete.disabled=false;
    localStorage.numberPart = numberPart.value;
}
function Clear(){
    if (numberPart.disabled==true && btnGo.style.visibility=="visible") {
        numberPart.disabled=false;
        btnGo.style.visibility="hidden";
    }
    numberPart.value=0;
}
function Delete(){
    if(numberPart.value.length==1){
        btnDelete.disabled=true;
    }
    else{
        var delete_value=numberPart.value.substring(0,numberPart.value.length-1);
        numberPart.value=delete_value;
    }
    if (numberPart.disabled==true && btnGo.style.visibility=="visible") {
        numberPart.disabled = false;
        btnGo.style.visibility = "hidden";
    }
}
function Input(){
    document.getElementById("payPart").value = localStorage.numberPart;
}

function Last(){
    document.getElementById("mk").innerText = "Hormetli  "+localStorage.numberPart+" nomerli istifadeci balansiniza "+localStorage.color+" azn daxil edildi.";
}
function color1(){
    colorOne.style.background="red";
    localStorage.color=1;
}
function color2(){
    colorTwo.style.background="red";
    localStorage.color=5;
}
function color3(){
    colorThree.style.background="red";
    localStorage.color=10;
}
function color4(){
    colorFour.style.background="red";
    localStorage.color=20;
}
function color5(){
    colorFive.style.background="red";
    localStorage.color=50;
}
function color6(){
    colorSix.style.background="red";
    localStorage.color=100;
}
var miniDatabase = {
    name:"Cavid",
    number: "0557788978"
}
