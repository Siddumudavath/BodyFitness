//Harshad number------->123

// let num=prompt("enter a number:")
// let sum=0
// let temp=num
// while(num>0){
//     let rem=num%10;
//     sum +=rem
//     num=Math.floor(num/10)
// }
// if(temp%sum==0){
//     console.log(temp+" is an harshed number")
// }
// else{
//     console.log(temp+ " not a harshed number")
// }



//armstrong number:--------->153
// let num = prompt("Enter a number:");
// let sum = 0;
// let temp = num;
// let count = 0;
// while (num > 0) {
//     num = Math.floor(num / 10);
//     count++;
// }
// num = temp;

// while (num > 0) {
//     let rem = num % 10;
//     sum += rem ** count;
//     num = Math.floor(num / 10);
// }

// if (sum === temp) {
//     console.log("Armstrong");
// } else {
//     console.log("Not an Armstrong");
// }

//1.	WAP to print even numbers from 1 to 10.


// let num=prompt("enter a number:")

// for(let i=1;i<=num;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }


// 1.	WAP to print  sum of even numbers from 1 to 10
/*
let num=prompt("enter a number:")
let sum=0
for(let i=1;i<=num;i++){
    if(i%2==0){
        sum=sum+i
    }
}
console.log(sum)
*/

//WAP to print odd numbers from 1 to 10
/*
let num=prompt("enter a number:")
for(let i=1;i<=num;i++){
    if(i%2==1){
        console.log(i)
    }
}
*/

//WAP to print product of odd numbers from 1 to 10.

/*
let num=prompt("enter a  number:")
let product=1
for(let i=1;i<=num;i++)
{
    if(i%2==1){
        product=product*i
    }
}
console.log(product)
*/


//WAP to print sum of the reverse value
/*
let num=prompt("enter a number:")
let sum=0
while(num>0){
    let rem=num%10
    num=Math.floor(num/10)
    sum=sum+rem
}
console.log(sum)
*/

//WAP to print sum of reverse value with only even values
/*
let num=prompt("enter a number:")
let sum=0
while(num>0){
    let rem=num%10
    if(rem%2==0){
        sum=sum+rem
    }
    num=Math.floor(num/10)
}
console.log(sum)
*/

//WAP to print whether the given number is  prime number or not.
/*
let num=prompt("enter a number:")

let fact=0
for(let i=1;i<=num;i++){
    if(num%i==0){
        fact++
    }
}
if(fact==2){
    console.log("it is an prime number:")
}
else{
    console.log("not a prime number")
}
    */


//	WAP to print whether the given number is  palindrome number or not.
/*
let num=prompt("enter a number:")
let rev=0
let temp=num
while(num>0){
    let rem=num%10
    rev=rev*10+rem
    num=Math.floor(num/10)
}
if(rev==temp){
    console.log("it is a palindrome:")
}
else{
    console.log("it is not a palindrome")
}
*/

// 9.	WAP to print whether the given number is  spy number or not.

/*
let num = prompt("Enter a number:");
let sum = 0;
let product = 1;

while (num > 0) {
    let rem = num % 10;
    sum = sum + rem;
    product = product * rem;
    num = Math.floor(num / 10);
}

if (sum == product) {
    console.log("Spy number");
} else {
    console.log("Not a spy number");
}
*/

//WAP to print the given number is perfect number or not.
/*
let num=prompt("enter a number:")
let sum=0
for(let i=1;i<=num/2;i++){
    if(num%i==0){
        sum=sum+i
    }
}
if(sum==num){
    console.log("prefect number:")
}
else{
    console.log("not a prefect number")
}
    */

//factorial number
/*
let num=prompt("enter a number:")

let factorial=1
for(let i=1;i<=num;i++){
    factorial=factorial*i
}
console.log(factorial)
*/


//STRING NUMBER

let num=145
let sum=0
let temp=num
while(temp>0){
    let digit=temp%10
    let fact=1
    for(let i=1;i<=digit;i++){
        fact=fact*i
    }
    sum=sum+fact
    temp=Math.floor(temp/10)
}
if(sum==num){
    console.log("strong")
}
else{
    console.log("not a strong")
}