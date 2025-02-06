
//conditional statement
//given number is even or odd

// let num=prompt("enter a number")

// if(num%2 == 0){
//     console.log("even")
// }else{
//     console.log("odd")
// }


//maximum of two  numbers

// let a=10,b=20

// if(a>b){
//     console.log(a +"a is maximum")
// }else{
//     console.log(b +" b is maximum")
// }

//maximum of three numbers

// let a=20,b=10,c=30

// if(a>b && a>c)
// {
// console.log(a +" a is max")
// } else if(b>c){
//     console.log(b + " b is max")
// }else{
//     console.log(c + " c is max")
// }

//numbers in between 10 and 20

// let num=prompt("enter a number:")
// // let num=8
// if(num>=10 && num<=20){
//     console.log(num + " yes the number is between 10 and 20")
// }
// else{
//     console.log(num + " number is not between 10 and 20")
// }


//teen age

// let age=prompt("enter a number:")

// if(age>=13 && age<=19){
//     console.log(age + " teenage")
// }
// else{
//     console.log(age + " not a teenage")
// }

//last digit is same or not

// let a=37,b=47


// if(a%10 == b%10)
// {
//    console.log("last digit is same")
// }
// else
// {
//     console.log("last digit is not same")
// }


//divisability of two numbers

// let num=prompt("enter a number:")

// if(num%5==0 || num%3==0){
//     console.log(num +" num is divisile by both 5 and 3")
// }
// else{
//     console.log(num +" num is not  divisile by both 5 and 3")

// }

// let day = "sunday"

// switch (day) {
//     case "sunday":
//         console.log("sunday " + 0)
//         break;
//     case "monday":
//         console.log(1)
//         break;
//     case "tuesday":
//         console.log(2)
//         break;
//     case "wednesday":
//         console.log(3)
//         break;
//     case "thruday":
//         console.log(4)
//         break;
//     case "friday":
//         console.log(5)
//         break;
//     case "saturday":
//         console.log(6)
//         break;

//     default:
//         console.log("invalid day");

//         break;
// }

// let num = 11

// switch (num) {

//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//         console.log("good morning")
//         break;
//     default:
//         console.log("invalid time")
// }


//leap year or not

// let num=prompt("enter a number:")

// if(num%4 == 0 && num%100 != 0 || num%400 == 0)
// {
//     console.log(num+ " year leap")
// }
// else{
//     console.log( num+ " not a leap year")
// }

//method 2 
// let year=2024
// if((year%4==0) && (year%100!==0))
// {
//     document.write(year + " is a leap year")
// }
// else if(year%400==0)
// {
//     document.write(year + " is a leap year")
// }
// else
// {
//     document.write(year + " is not  a leap year")
// }

//  given number is positive or negative

// let num=prompt("enter a number:")

// if(num>0)
// {
// console.log("the number is positive")
// } 
// else if(num<0)
// {
// console.log("the number is negative")
// }
// else{
//     console.log("the number is 0")
// }


// CHECK WHETHER THE CHAR IS ALPHA OR NOT

// let char=prompt("enter a char:")

// if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))
// {
//     console.log( char+ " is a character")
// }
// else{
//     console.log(char + " is not a char")
// }

//Write a js program to input angles of a triangle and check whether triangle is valid or not.
 
// let a=90,b=45,c=45
// let sum=a+b+c
// if(sum==180){
//     console.log("it is triangle:")
// }
// else{
//     console.log("it is not a triangle")
// }


//Write a JS program to input all sides of a triangle and check whether triangle is valid or not.

// let a=5,b=2,c=6
// if(a+b>c){
//     if(b+c>a){
//     }
//     if(a+c>b){
//     }
//     console.log("it is triangle")
// } 
// else{
//     console.log("it is not a triangle")
// }

//Write a JS program to input all angles of a triangle and check whether triangle is valid or not.

let a=prompt("enter a value of a:")
let b=prompt("enter a value of b:")
let c=prompt("enter a value of c:")

if(a==b && b==c){
    console.log("it is an equilateral triangle:")
}
else if(a==b || b==a || a==c){
    console.log("it is iso triangle")
}
else{
    console.log("scalean triangle")
}

//Write a JS program to calculate profit or loss.

// let selling_price=prompt("enter the sellimg_price")
// let cost_price=prompt("enter the cost_price")
// let total_amount;
// if(selling_price>cost_price)
// {
//     total_amount=selling_price-cost_price;
//     console.log(total_amount+" is profit")
// }
// else if(selling_price<cost_price)
// {
//     total_amount=cost_price-selling_price;
//     console.log(total_amount+" is loss")
// }
// else
// {
//     console.log("no profit and loss")
// }

//Write a JS program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:

let physics = 95,
    chemistry = 90,
    biology = 85,
    mathematics = 99,
    computer = 90;

let pre = (physics + chemistry + biology + mathematics + computer) / 5;
if(pre>=90){
    console.log("grade A")
}
else if(pre>=80){
    console.log("grade B")

}
 else if(pre>=70){
    console.log("grade C")

}
 else if(pre>=60){
    console.log("grade D")

}
else if(pre>=50){
    console.log("grade E")

}else{
    
        console.log("grade F")
}



// let n=5
// for(let i=1;i<=n;i++){
//     for(let j=1;i<=n;j++){
//         document.write("* ")
//     }
//     document.write("<br>")
// }