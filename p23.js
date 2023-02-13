function hcf(num1,num2){
    let m=Math.min(num1,num2)
    for(let i=m;i>=1;i--){
        if(num1%i==0 && num2%i==0){
            return i
        }
    }
    return 1
}
console.log(hcf(12,20))