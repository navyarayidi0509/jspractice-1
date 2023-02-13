function s(a,b){
    let s1=new Set(a)
    for (let i of b){
        s1.delete(i)
    }return s1
}
console.log(s(['a','b','w'],['w','a','f']))