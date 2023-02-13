function p(arr,arr1){
    const p=arr.filter(x=>arr1.indexOf(x)!==-1)
    return p
}
const ar=[5,6,3,8]
const ar1=[1,2,3,4]
const res=p(ar,ar1)
console.log(res)