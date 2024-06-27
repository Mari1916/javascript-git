let hours = 18;
const bomDia = hours >= 6 && hours <= 11
const boaTarde = hours >= 12 && hours <= 17 

//if(hours < 12) {
  //  console.log("Bom dia!");
//}else if (hours < 18) {
   // console.log("Boa tarde!");
//}else if (hours >= 18) {
  //  console.log("Boa noite!");
//}

if (bomDia) {
    console.log("Bom dia!!");
}else if (boaTarde){
    console.log("Boa tarde!!");
}else {
    console.log("Boa noite!!")
}