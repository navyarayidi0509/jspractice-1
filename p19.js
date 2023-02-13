const low=1
const high=100
for(let i=low;i<=high;i++){
    let n=i.toString().length
    let s=0
    let temp=i
    while(temp>0){
        let r=temp%10
        s+=r**n
        temp=temp/10
    }
    if(s==i){
        console.log(i)
    }
}