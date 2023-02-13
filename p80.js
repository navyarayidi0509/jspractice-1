function p(arr,s){
    for(let i=0;i<arr.length;i++){
    let arr1=arr.slice(i, i+s)
    console.log(arr1)
}
}
const arr1=[2,3,5,8,0]
const s1=3
const res=p(arr1,s1)
console.log(res)
export { arr1,s1 };