//SQUARE FILL PATTERN IN JS
/*
let num=5
for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        document.write("* ")
    }
    document.write("<br>")
}
    */

//HALLOW SQUARE
/*
let num=5
for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        if((i==1 || i==5) || (j==1 || j==5)){
            document.write("*")
        }
        else{
            document.write("&nbsp;&nbsp")
        }
    }
    document.writeln("<br>")
}
    */

//RIGHT ANGLE TRIANGLE PATTERN

// METHOD ONE
// let num=5
// for(let i=1;i<=num;i++){
//     for(j=1;j<=i;j++){
//         document.write("*")
//     }
//     document.writeln("<br>")
// }
// METHOD TWO
/*
let num=5
for(let i=1;i<=num;i++){
    for(j=1;j<=num;j++){
       if(i>=j){
        document.write("* ")
       }
       else{
        document.write("&nbsp")
       }
    }
    document.writeln("<br>")
}
*/

// MIRROR IMAGE OF RIGHT ANGLE TRIANAGLE

//METHOD ONE
/*
let num=5
for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        if(i+j>=num+1){
            document.write("*")
        }
        else{
            document.write("&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
    */


//reverse mirror image of a right angle triangle
/*
let num=5
for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        if(i+j<=num+1){
            document.write("* ")
        }
        else{
            document.write("&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
    */

//REVERSE RIGHT ANGLE TRIANGLE
/*
let num=5
for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        if(i<=j){
            document.write("* ")
        }
        else{
            document.write("&nbsp;&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
    */

// let num = 5;
// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num; j++) {  
//         if (j == 1 || j == num) {  
//             document.write("* ");
//         } else {
//             document.write("&nbsp;&nbsp;");
//         }
//     }
//     document.writeln("<br>");
// }

//M pattern in javascript
/*
let num = 10;
for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
        if (j == 1 || j == num || (i == j && j <= num / 2) || (j == num - i + 1 && j > num / 2)) {
            document.write("*");
        } else {
            document.write("&nbsp;&nbsp;");
        }
    }
    document.writeln("<br>");
}
*/
//HALLOW RIGHT ANGLE TRIANGLE
/*
let num=5
for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        if(i==j || j==1 || i==5){
            document.write("* ")
        }
        else{
            document.write("&nbsp;&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
*/

//pyramid pattern
/*
let num=3
for(let i=1;i<=num;i++){
    for(let j=1;j<=num*2;j++){
        if(i+j>=num+1 && j-i<num){
            document.write("*")
        }
        else{
            document.write("&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
    */

//reverse pyramid pattern
/*
let num=3
for(let i=1;i<=num;i++){
    for(let j=1;j<=num*2;j++){
        if(i+j<=num*2 && i<=j){
            document.write("* ")
        }
        else{
            document.write("&nbsp;&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
    */

// <- pattern in js
/*
let num=6
for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++)
        {
        if((i==3 || j==3)){
            document.write("*")
        }
        else{
            document.write("&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
    */

//DAIMOND PATTERN
/*
let num=4
for(let i=1;i<=num;i++){
    for(let j=1;j<=num*2;j++){
        if(i+j>=num+1 && j-i<num){
            document.write("* ")
        }
        else{
            document.write("&nbsp;&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
for(let i=2;i<=num;i++){
    for(let j=1;j<=num*2;j++){
        if(i+j<=num*2 && i<=j){
            document.write("* ")
        }
        else{
            document.write("&nbsp;&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
    */

//LEFT PYRAMID PATTERN
/*
let num=5
for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        if(i+j>=num+1){
            document.write("* ")
        }
        else{
            document.write("&nbsp;&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
for(let i=2;i<=num;i++){
    for(let j=1;j<=num;j++){
        if(i<=j){
            document.write("* ")
        }
        else{
            document.write("&nbsp;&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
*/

// daigonal line
/*
let num=5
for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        if(i==j){
            document.write("*")
        }
        else{
            document.write("&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
    */

//CROSS MARK X PATTERN
/*
let num=5
for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        if(i==j || i+j==num+1){
            document.write("*")
        }
        else{
            document.write("&nbsp;&nbsp;")
        }
    }
    document.write("<br>")
}
    */

//"A" pattern

// let num=5
// for(let i=1;i<=num;i++){
//     for(let j=1;j<=num;j++){
//         if(j==1 || i==1 || j==5 || i==3){
//             document.write("* ")
//         }
//         else{
//             document.write("&nbsp;&nbsp;&nbsp;")
//         }
//     }
//     document.writeln("<br>")
// }


// "p" pattern
/*
let num=5
for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        if((j==1 || i==1 || i==3)|| (j==5 && i==2)){
            document.write("* ")
        }
        else{
            document.write("&nbsp;&nbsp;&nbsp;")

        }
    }
    document.writeln("<br>")
}

*/
//Hourglass Pattern 
/*
let num=3
for(let i=1;i<=num;i++){
    for(let j=1;j<=num*2;j++){
        if(i+j<=num*2 && i<=j){
            document.write("* ")
        }
        else{
            document.write("&nbsp;&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
for(let i=2;i<=num;i++){
    for(let j=1;j<=num*2;j++){
        if(i+j>=num+1 && j-i<num){
            document.write("* ")
        }
        else{
            document.write("&nbsp;&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
    */


//OM PATTERN USING JS
/*
for(let i=1;i<=5;i++)
    {
        for(let j=1;j<=5;j++)
        {
            if( i==3 || j==3 || (i==1 && j<=3) || (j==5 && i<=3) || (j==1 && i>=3) || (i==5 && j>=3))
            {
                document.write("*")
            }
            else
            {
                document.writeln("&nbsp;")
            }
        }
        document.write("<br>")
    }
*/
//DAIMOND PATTERN METHOD TWO

/*
let star = 1, space = 2
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= space; j++) {
        document.writeln("&nbsp;")
    }
    for (let j = 1; j <= star; j++) {
        document.write("*")
    }
    if (i < 3) {
        star += 2
        space--
    }
    else {
        star -= 2
        space++
    }
    document.write("<br>")
}
    */
//REVERSE PYRAMID PATTERN METHOD TWO
/*
let star=5,space=0
for(let i=1;i<=3;i++)
{
    for(let j=1;j<=space;j++)
    {
        document.writeln("&nbsp;")
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    document.write("<br>")
    star-=2
    space++
}
    */


//RIGHT ANGLE triangle PYRAMID
 /*
let num=3
for(let i=1;i<=num*2;i++){
    for(let j=1;j<=num;j++){
        if(j<=i && i+j<=num*2){
            document.write("* ")
        }
        else{
            document.write("&nbsp;")
        }
    }
    document.writeln("<br>")
}
*/
//left right angle triangle
/*
let num=3
for(let i=1;i<=num*2;i++){
    for(let j=1;j<=num;j++){
        if(i-j<num && i+j>=num+1){
            document.write("* ")
        }
        else{
            document.writeln("&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
*/
