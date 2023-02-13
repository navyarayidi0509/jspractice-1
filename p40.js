function c(str){
    const count=str.match(/[a]/gi).length
    return count
}
console.log(c("hello navya"))