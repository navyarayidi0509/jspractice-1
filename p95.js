function add(){
    return 'hello world'
}
function n(user,f){
    const x=f()
    console.log(`${x} ${user}`)
}
n('navya',add)