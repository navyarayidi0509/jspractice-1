const arr=[1,2,3,4]
const arr1=[1,2,3,4,1,2,2]
const arr2=arr.concat(arr1)
const res=[...new Set(arr2)]
console.log(res)
