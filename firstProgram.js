console.log('This is my first program')
console.log('Welcome john your salary is 5000')



const num1= 6;
const num2= 6;
const sum= num1 + num2;
console.log('Sum of '+num1+' and '+num2+' is: '+ sum);




const number = parseInt(prompt("Enter a number: "));

if(number>0){
    console.log("The number is zero");
}
else if(number ==0){
    console.log("the number is zero");
}
else{
    console.log("The number is negative");
}


const numbers =[10,5,4];
const operator = promt ("choose an operator: +,-,*,/ :").trim();

if(operator=='+'){
    result=0;
    for(let i = 0; i< numbers.length; i++){
        result += numbers[i];
    }
}else if(operator=='-'){
    result= numbers[0];
    for(let i=1; i<numbers.length; i++){
        result -= numbers[i];
    }
}else if(operator=='*'){
    result=1;
    for(let i=1; i<numbers.length; i++){
        result *= numbers[i];
    }
}else{
    console.log("Invalid input");
}
console.log('the result is: '+result);
