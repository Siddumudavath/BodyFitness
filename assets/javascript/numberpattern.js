//numer pattern right anglre triangle

//  let num=5
//  for(let i=1;i<=num;i++){
//     for(let j=1;j<=i;j++){
//         document.write(j+" ")
//     }
//     document.writeln("<br>")
//  }

//METHOD TWO
/*
let num=5
for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        if(i>=j){
            document.write(j+" ")
        }
        else{
            document.write("&nbsp;")
        }
    }
    document.writeln("<br>")
}
    */

//NUMER PATTERN USING RIGHT ANGLE TRIANGLE

// let num=5
// for(let i=1;i<=num;i++){
//     for(let j=1;j<=num;j++){
//         if(i>=j){
//             document.write(i+" ")
//         }
//         else{
//             document.write("&nbsp;")
//         }
//     }
//     document.writeln("<br>")
// }

//SQUARE PATTERN WITH NUMBER:

// let num=5
// for(let i=1;i<=num;i++){
//     for(let j=1;j<=num;j++){
//         document.write(j+" ")
//     }
//     document.writeln("<br>")
// }

//PATTERN5

// let num=4,n=1
// for(let i=1;i<=num;i++){
//     for(j=1;j<=num;j++){
//         document.write(n+" ")
//         n++
//     }
//     document.write("<br>")

// }


//PATTERN 6

// let num=4,n=1
// for(let i=1;i<=num;i++){
//     for(let j=1;j<=num;j++){
//         if(i>=j){
//             document.write(n+" ")
//             n=n*2
//         }
//         else{
//             document.write("&nbsp;")
//         }
//     }
//     document.write("<br>")
// }


//PATTERN 7

// let star=5,n=1
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=star;j++){
//         document.write(j+" ")
//         n--
//     }
//     document.write("<br>")
//     star--
// }



//PATTERN 8
/*
let star = 1, space = 2
for (let i = 1; i <= 5; i++) {
    let n=1
    for (let j = 1; j <= space; j++) {
        document.writeln("&nbsp;")
    }
    for (let j = 1; j <=star; j++) {
        if(j<star/2){
            document.write(n++)
        }
        else{
            document.write(n--)
        }
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
// method2
//left arrow
/*
let star=1
for(let i=1;i<=5;i++){
    for(let j=1;j<=3;j++){
        if(i>=2 && i<=4){
            document.write("* ")
        }
        else{
            document.writeln("&nbsp;&nbsp;")
        }
    }
    for(let j=1;j<=star;j++){
        document.write("* ")
    }
    if(i<3){
        star++
    }
    else{
        star--
    }
    document.writeln("<br>")
}

*/
/*
let n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = n; j >= 1; j--) {
        if (j <= i) {
            document.write(j);
        } else {
            document.write("&nbsp; ");
        }
    }
    for (let k = 2; k <= i; k++) {
        document.write(k);
    }
    document.writeln("<br>")
}

*/




//<=
/*
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 6; j++) {
        if (j == 3 || i == 3 || (i == 2 && (j >= 2 && j <= 6)) || (i == 4 && (j >= 2 && j <= 6))) {
            document.write("* ")
        } else {
            document.write("&nbsp;&nbsp; ")
        }
    }
    document.write("<br>")
}
//


document.write("<br>")
*/

//double <==>
    /*
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 9; j++) {
        if (j == 3 || j == 7 || i == 3 || (i == 2 && (j > 1 && j <= 8)) || (i == 4 && (j > 1 && j <= 8)) || (i == 2 && (j > 1 && j <= 8))) {
            document.write("* ")
        } else {
            document.write("&nbsp;&nbsp; ")
        }
    }
    document.write("<br>")
} 

*/


/*

let star = 1, space = 2;

for (let i = 1; i <= 5; i++) {
    var n = 1;

    // Print spaces
    for (let j = 1; j <= space; j++) {
        document.write("&nbsp;");
    }

    // Print numbers (increasing then decreasing)
    for (let j = 1; j <= star; j++) {
        if (j <= star / 2) {
            document.write(n++);
            
        } else {
            document.write(n--);
            console.log(n)
        }
    }

    // Adjust star and space for next row
    if (i < 3) {
        star += 2;
        space--;
    } else {
        star -= 2;
        space++;
    }

    // Move to the next line after each row
    document.write("<br>");
}

*/
//BINARY NUMBER TO DECIMAL NUMBER

// let num = "101011010101010101011"; 
// let num2 = parseInt(num, 2); 

// console.log(num2)

//DECIMAL NUMBER TO BINARY

let num=11
let num2=num.toString(2)
console.log(num2)

