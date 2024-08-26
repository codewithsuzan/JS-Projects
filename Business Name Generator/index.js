let randomNumber=Math.random()*100
let first,second,third
// console.log(randomNumber)
//Let's generate the first word:
randomNumber=Math.random()*100
if(randomNumber<=33){
    first="Crazy"
}else if(randomNumber>33 && randomNumber<=66){
    first="Amazing"
}else{
    first="Fire"
}
//Let's generate the second word:
randomNumber=Math.random()*100
if(randomNumber<=33){
    second="Engine"
}else if(randomNumber>33 && randomNumber<=66){
    second="Foods"
}else{
    second="Garments"
}
//Let's generate the third word:
randomNumber=Math.random()*100
if(randomNumber<=33){
    third="Bros"
}else if(randomNumber>33 && randomNumber<=66){
    third="Limited"
}else{
    third="Hub"
}

console.log(`${first} ${second} ${third}`)