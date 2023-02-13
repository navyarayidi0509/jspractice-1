const cards=["spades","diamonds","club","heart"]
const nums=["ace","1","2","3","4","5","6","7","8","9","10","jack","king","queen"]
let l=[]
for(let i=0;i<cards.length;i++){
    for(let j=0;j<nums.length;j++){
        let card={nums:nums[j],cards:cards[i]}
        l.push(card)
    }
}
for(let i=l.length-1;i>0;i--){
    let j=Math.floor(Math.random()*i)
    let temp=l[i]
    l[i]=l[j]
    l[j]=temp;
}
for(let i=0;i<30;i++)
console.log(`${l[i].nums} of ${l[i].cards}`)
