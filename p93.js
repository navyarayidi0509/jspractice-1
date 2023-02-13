function add(){
    if(arguments.length==0){
        console.log('no arguments')
    }
    else if(arguments.length==1){
        console.log('one argument')
    }
    else{
        let res=0
        let length=arguments.length
        for(i=0;i<length;i++){
            res=res+arguments[i]
        }
        console.log(res)
    }
}
add(1,2,7,9,4,5,6,7)