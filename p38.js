function c(str,l){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)==l){
            count=count+1
        }
    }return count
}
const str="hello world"
const l='l'
const res=c(str,l)
console.log(res)