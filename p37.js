const employee=new Object();
employee.fname="navya"
employee.lname="rayidi"
employee.empid="5"
let t=""
delete employee["fname"]
for (let x in employee){
    t=t+employee[x]+" "

}console.log(t)