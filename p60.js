function p(year){
    if((year%4==0) && (year%100!=0)||(year%400==0)){
        console.log("leap yr")
    }else{
        console.log("not leap year")
    }
}p(2000)