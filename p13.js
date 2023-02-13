let num=13
let pnum=true;
for (let i=2;i<num;i++){
    if(num%i ===0){
        pnum=false
        break
    }
}
if(pnum){
    console.log(num +" is prime")
}else{
    console.log(num+" is not prime")
}