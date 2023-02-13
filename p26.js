function s(n){
    if(n==1){
        return 1;
    }
    return n+s(n-1)
}
console.log(s(13))