function EorO(){
    const n=parseInt(prompt("Enter the value"));
    if(n%2==0){
        window.alert("Number is even")
    }else{
        window.alert("Number is odd")
    }
}
function PorNP(){
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}else {
    console.log("The number is not a prime number.");
}
}

function factorial(){
    const n=parseInt(prompt("Enter the value"));
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

function fibonacci()
{
    const num=parseInt(prompt("Enter the value"));
    var num1=0;
    var num2=1;
    var sum;
    var i=0;
    for (i = 0; i < num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
}

let a = Math.max(5, 10);
console.log(a);

function square(){
    for (let index = 0; index < 10; index++) {
        console.log("The square of ${index} is :",index*index);
        
    }
    
}