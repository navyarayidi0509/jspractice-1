function lcm(num1,num2){
    let m=Math.max(num1,num2)
    for(let i=m; ;i++){
        if(i%num1==0 && i%num2==0){
            return i
        }
    }
}
console.log(lcm(12,20))