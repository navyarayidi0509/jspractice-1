let num=10
let pnum=true;
if(num ===1){
    console.log("num is may be prime or not")
}
else{
for (let i=2;i<num;i++){
    if(num%i == 0){
        pnum=false
        break
    }
}

if(pnum){
    console.log(num +" is prime")
}else{
    console.log(num+" is not prime")
}
}
