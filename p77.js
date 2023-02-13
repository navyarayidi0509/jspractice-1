const arr1=[1,3,2,4]
const arr2=[1,3,2,4]
const result = JSON.stringify(arr1) == JSON.stringify(arr2)
    if(result) {
        console.log('The arrays have the same elements.');
    }
    else {
        console.log('The arrays have different elements.');
    }