const op = "+"
const n1 = 10
const n2 = 12
let result;
if (op == '+') {
    result = n1 + n2;
}
else if (op == '-') {
    result = n1 - n2;
}
else if (op == '*') {
    result = n1 * n2;
}
else {
    result = n1 / n2;
}
console.log(`${n1} ${op} ${n2} = ${result}`);