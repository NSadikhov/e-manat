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
        btn.style.display="inline";
        numberPart.disabled=true;
    }
    return false;
}
function Add(number) {
    if(!maxValue())
    numberPart.value+=number; 
}
function Delete(){
    numberPart.value-=number;
}
var miniDatabase = {
    name:"Elgiz",
    number: "0515436745"
}