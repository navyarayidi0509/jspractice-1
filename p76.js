function p(arr,p){
    let res=arr.map(item=>item[p])
    return res
}
const obj=[{name:"navya",age:24},{name:"navu",age:22}]
console.log(p(obj,'age'))