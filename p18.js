let n=153
let s=0
let temp=n
while(temp>0){
    let r=temp%10
    s=s+r*r*r
    temp=temp/10
}
if (s==n){
    console.log(`${n} is an armstrong number`)
}
else{
    console.log(`${n} is not an amstrong`)
}