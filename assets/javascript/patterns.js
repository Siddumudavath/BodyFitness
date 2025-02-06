//Star Patterns
// square fill pattern
/*
let num=prompt("enter number:")

for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        document.write("* ")
    }
    document.writeln("<br>")
}

*/
//Right half pyramid
// let Star=1
// for(let i=1;i<=4;i++){
//     for(let j=1;j<=Star;j++)

//         {
//         document.write("* ")
//     }
//     document.writeln("<br>")
//     Star++
// }


//method2

// let num = prompt("enter a number:")
// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num; j++) {
//         if (i >= j) {
//             document.write("* ")
//         }
//         else {
//             document.write("&nbsp;&nbsp")
//         }
//     }
//     document.writeln("<br>")
// }


//left half pyramid

// let star=1
// let space=3
// for(let i=1;i<=4;i++){
//     for(let j=1;j<=space;j++){
//         document.writeln("&nbsp;")
//     }
//     for(let j=1;j<=star;j++){
//         document.write("*")
//     }
//     document.write("<br>")
//     star++
//     space--
// }


//hollow rectangle or square star patterns

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         if(i==1 || i==5 || j==1 || j==5 ){
//             document.write("* ")
//         }
//         else{
//             document.write("&nbsp;&nbsp;&nbsp;")
//         }
//     }
//     document.writeln("<br>")
// }

// Magic box pattern
/*
let num = prompt("Enter a number:");
for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
        document.write(i + " " + j + " ");
    }
    document.writeln("<br>");
}
    */

//write a program to print reverse right angled triangle
/*
let num=prompt("enter a number:")

for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        if(i<=j){
            document.write("*")
        }
        else{
            document.write("&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
    */

//WAP TO PRINT MIRROR IMAGE OF A RIGHT ANGLE TRIANGLE

// let num = 5

// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num; j++) {
//         if (i + j >= num + 1) {
//             document.write("*");
//         } else {
//             document.write("&nbsp;&nbsp;"); 
//         }
       
//     }
//     document.writeln("<br>");
// }


//WAP TO PRINT reverse  MIRROR IMAGE OF A RIGHT ANGLE TRIANGLE

// let num = 5

// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num; j++) {
//         if (i + j <= num + 1) {
//             document.write("*");
//         } else {
//             document.write("&nbsp;&nbsp;"); 
//         }
       
//     }
//     document.writeln("<br>");
// }


//pyramid

// let num=3

for(let i=1;i<=num;i++){
    for(let j=1;j<=2*num;j++){
        if(i+j>=num+1 && j-i<num){
            document.write("*")
        }
        else {
            document.write("&nbsp;&nbsp")
        }
    }
    document.writeln("<br>")
}



//reverse pyramid

// let num=3
// for(let i=1;i<=num;i++){
//     for(let j=1;j<2*num;j++){
//         if(i+j<=num*2 && i<=j){
//             document.write("*")
//         }
//         else{
//             document.write("&nbsp;&nbsp;")
//         }
//     }
//     document.writeln("<br>")
// }


//cross mark X

// let num = 5;

// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num; j++) {
//         if (i === j || i + j === num + 1) {
//             document.write("*");
//         } else {
//             document.write("&nbsp;&nbsp;");
//         }
//     }
//     document.writeln("<br>");
// }


//k pattern
// let num = 5;


// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num; j++) {
//         if (i + j <= num + 1) {
//             document.write("*");
//         } else {
//             document.write("&nbsp;&nbsp;");
//         }
//     }
//     document.writeln("<br>");
// }

// for (let i = 2; i <= num; i++) {
//     for (let j = 1; j <= num; j++) {
//         if (i >= j) {
//             document.write("*");
//         } else {
//             document.write("&nbsp;&nbsp;");
//         }
//     }
//     document.writeln("<br>");
// }
//k-pattern method two
// let num=5
// for (let i = 1; i <2*num; i++) {
//     for (let j = 1; j <= num; j++) {
//         if ((i + j <= num + 1 && i<=num) || (i>=num && i-j>4)) {
//             document.write("*");
//         } else {
//             document.write("&nbsp;&nbsp;");
//         }
//     }
//     document.writeln("<br>");
// } 

//Fibonacci series
/*
let n = prompt(" enter a number:"); 
let a = 0, b = 1;


for (let i = 1; i <= n; i++) {
    console.log(a); 
    let nextTerm = a + b;
    a = b;
    b = nextTerm;
   
}
*/


//Factorial of a number
/*
let num=prompt(" enter a number:")

let Factorial=1
for(let i=1;i<=num;i++){
    Factorial *=i
}
console.log(Factorial)

*/


//Strong number

/*
let num=prompt("enter a number:")
let sum=0
let temp=num
while(num>0){
    let rem=num%10
    let fact=1
    num=Math.floor(num/10)

    for(let i=1;i<=rem;i++){
        fact *=i
    }
    sum=sum+fact
}
if(sum==temp){
    console.log("strong")
}
else{
    console.log("not a strong")
}
    */

// Daimond
/*
let num=7

for(let i=1;i<=num;i++){
    for(let j=1;j<=2*num;j++){
        if((i+j>=num+1 && j-i<num)&&(i+j<=num*2 && i<=j)){
            document.write("*")
        }
        else {
            document.write("&nbsp;&nbsp")
        }
    }
    document.writeln("<br>")
}
*/
//hallow right angle triangle
// let num=5
// for(let i=1;i<=num;i++){
//     for(j=1;j<=num;j++){
//         if(i==5 ||j==1 || i==j){
//             document.write("*")
//         }
//         else{
//             document.write("&nbsp;&nbsp;")
//         }
//     }
//     document.writeln("<br>")
// }

//ohm shape

// let num = 5;
// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num; j++) {
//         if ((i == 3 && j == 3) || (i == 1 && j <= 3) || (j == 1 && i >= 3) || (j == 5 && i <= 3) || (i == 5 && j >= 3)) {
//             document.write("*");
//         } else {
//             document.write("&nbsp;");
//         }
//     }
//     document.write("<br>");
// }
