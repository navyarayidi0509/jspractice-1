const emp={
    fname:"navya",
    lname:"rayidi",
    empid:"5"
}
console.log(emp)
const c={...emp}
console.log(c)
c.empid='591'
console.log(c.empid)
console.log(emp.empid)