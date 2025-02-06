

//STRINGS IN JAVASCIPT

//1. BY USING LITERAL METHOD
/*
let a="mahesh babu"
console.log(a)
console.log(typeof(a))

let a1="2589630"
console.log(a1)
console.log(typeof(a1))


*/


//2. By using string constructor 

// let b=String("hello")
// console.log(b)
// console.log(typeof(b))

// let b1=String(125)
// console.log(b1)
// console.log(typeof(b1))

// let b2=String("1478520")
// console.log(b2)
// console.log(typeof(b2))


//STRINGS BY USING CONSTRUCTOR METHODS
//1.slice()

// let c="MAHESH BABU"
// console.log(c)
// console.log(c.slice(1,2))
// console.log(c.slice(2,1))//Starting index grater then ending index it retuns an empty string
// console.log(c.slice(1,6))
// console.log(c.slice(-1,-4))
// console.log(c.slice(-1,4))
// console.log(c.slice(-7,-2))


//2.Substring() method
// let d="SIDDHARTH NAYAK"
// console.log(d.substring())
// console.log(d.substring(0))
// console.log(d.substring(1,6))
// console.log(d.substring(6,1))
// console.log(d.substring(-1,7))


// //SUBSTR()

// let e="hello javascript"
// console.log(e.substr())
// console.log(e.substr(0))
// console.log(e.substr(0,4))
// console.log(e.substr(2,8))


// //TRIM()

// let f="    MAHARSHI     "
// console.log(f)
// console.log(f.trim())


// //TRIM START()
// let f1="    MAHARSHI     "
// console.log(f)
// console.log(f.trimStart())



//padStart()
// let h="hello"
// console.log(h.padStart(7,"hi"))
// console.log(h.padStart(10,"hi"))

//padEnd()
// let i="hello"
// console.log(i.padEnd(10,"ram"))

// //replace()
// let j="he is a sofware enginer and he lives in ap"
// console.log(j.replace("he" ,"ram"))

// //replaceAll()
// let k="he is a sofware enginer and he lives in ap"
// console.log(k.replaceAll("he" ,"ram"))

// //split()
// let l="he is a sofware enginer and he lives in ap"
// console.log(l)
// console.log(l.split())
// console.log(l.split("",3))
// console.log(l.split("",50))


// //indexOf()
// let m="hello world hello world"
// console.log(m.indexOf())
// console.log(m.indexOf("hello"))
// console.log(m.indexOf("world"))
// console.log(m.indexOf("World"))
// console.log(m.indexOf("o"))
// console.log(m.indexOf("o",5))
// console.log(m.indexOf("ello",13))

// //lastIndexOf()
// let n="hello javscript hii javascript"
// console.log(n.lastIndexOf())
// console.log(n.lastIndexOf("hi",20))
// console.log(n.lastIndexOf("j"))
// console.log(n.lastIndexOf("j",25))

// //length()
// let o="hello"  //last index=4--->length-1
// console.log(o.length)


//StartsWith

// let x="super star mahesh babu"
// console.log(x.startsWith("super",0))
// console.log(x.startsWith("star",6))
// console.log(x.startsWith("babu",-1))
// console.log(x.startsWith("mahesh",0))


// //ENDS WITH

// let y="hello javascript"
// console.log(y.endsWith("hello",5))
// console.log(y.endsWith("javascript",16))//second value is length


// //touppercase

// let m="pokiri"
// console.log(m.toUpperCase())


// //toLowercase

// let n="DUKUDU"
// console.log(n.toLowerCase())


// //Interpolation

// let num=10
// let num2=20
// let sum=`sum of the two numbwe is ${num+num2}`
// console.log(sum)


//area of a triangle

// let length=10
// let breadth=10
// let area_of_a_triangle=`area of a triangle is ${0.5*length*breadth}`
// console.log(area_of_a_triangle)


// //area of a cricle

// let r=20
// let area_of_a_circle=`area of a circle is ${3.14*r*r}`
// console.log(area_of_a_circle)

// //includes()

// let sentence = "JavaScript is awesome!";
// console.log(sentence.includes("JavaScript")); // true
// console.log(sentence.includes("javascript")); // false (case-sensitive)
// console.log(sentence.includes("awesome", 5)); // true
// console.log(sentence.includes("awesome", 15)); // false



//localscope


// function myfunction(){
//     let name="khaleja"
//     console.log(name);
// }
// myfunction()


//blockscope
// using var
// if(true){
//     var name1="khaleja"
//     console.log(name1)
// }
// console.log(name1)

// // using let

// if(true){
//     let name2="seetaramaju taxi driver"
//     console.log(name2)
// }


// //using const

// if(true){
//     const name3="sadasi vasanyasi "
//     console.log(name3)
// }
// console.log(name3)



let a="10110"
let ans=parseInt(a,2)
console.log(ans)