function p(str){
    const arr=str.split('')
    const rarr=arr.reverse()
    const res=rarr.join('')
    if(str==res){
        console.log("palindrome")
    }
    else{
        console.log("not palindrome")
    }
}
p('amma')
p("navu")