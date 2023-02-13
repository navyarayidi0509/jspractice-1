function f(n){
    if(n<=1)
    return n
    return f(n-1)+f(n-2)
}
for(let i=0;i<=4;i++)
console.log(f(i))