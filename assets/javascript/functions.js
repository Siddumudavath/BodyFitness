

//FUNCTION WITH REGULSR NAME
function myFunction(){
    console.log("MAHESH BABU")
}
myFunction()


//FUNCTION WITH PARAMETERS

function myFunction1(a,b)
{
    console.log(a+b)
}
myFunction1("Siddharth"," nayak")


//FUNCTION WITH RETURN TYPE

function myFunction3(a,b){
    return a+b
}
console.log(myFunction3(20,30))


//anonymous Function

// function(){
//     console.log("hello")
// }

//FUNCTION WITH EXPRESSION

let x=function(){
    console.log("hello babu")
}
x()

//ARROW FUNCTIONS

let add=(p1,p2)=>{
    console.log(p1+p2)
}
add(20,30)


//if we have one parameter we can remove parenthensis

let sq=(a)=>a*a
console.log(sq(2))


let sq1=a=>a*a
console.log(sq1(5))


//Arity function

//1.nullary function

function sidDhu1(){
    console.log("mahesh babu")
}
sidDhu1()

//For checking no of parameters 
function s1(){
    return "siddhu"
}
console.log(s1.length)


//unary function
function s2(a){
    return a*a
}
console.log(s2.length)

//binary function

function s3(a,b){
    return a**b
}
console.log(s3.length,s3(5,5))


//tinary function

function s4(a,b,c){
    return a+b-c
}
console.log(s4.length,s4(5,5,25))



//N-nary function
function s5(a1,a2,a3,a4,a5){
    return a1+a2+a3+a4+a5
}
console.log(s5.length)
console.log(s5(10,20,30,40,50))


//CLOURES

//using with normal exmaple

function demo1(){
    let x=20
    function demo2()
    {
        console.log(x)
    }
    demo2()
}
demo1()


//by using clourse

function demo11(){
        let x=52
        function demo22(){
            console.log(x)
        }
        return demo22()
}
let res=demo11
res()


//real time example for clousre

function createCounter(){
    let count=0
    return function()
    {
        count=count+1
        return count
    }
}
let counter=createCounter()
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())