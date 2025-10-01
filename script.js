const a= 5;
const b=10;

result = a+b;
console.log(result);

let text = "coding";
let num = "10";
let rnum = 10;
console.log(typeof(text));
console.log(typeof(num));
console.log(typeof(num));

console.log(text,num);

console.log(typeof(text+num));


let fruits = ['mango','apple','guava'];
console.log(fruits)
fruits.push('grapes');
console.log("Total Fruits",fruits.length)

console.log(fruits);

let student = {
    Name: "WEB DEV",
    Age:20,
    Couse:"Computer Science",
    isEnrolled: true
}

console.log(student);
console.log(student.Name);


//arithmatic operators
let x = 2;
console.log("Addition : x + 3 =",x+3);
console.log("Subtraction : x - 3 =",x-3);
console.log("Multiplication: x * 3 =",x*5)
console.log("Power : x ** 3 = ",x**3)

//
console.log("Increment ++ x ++ 3 =",++x)
console.log("Decrement -- x -- 3 =",--x)

//
console.log("Division x / 3 =",x/3)
console.log("Modulus x $ 3 =",x%3)

let y = 2;
y++;
z=y;

console.log(y);
console.log(z);


//COMPARISON OPREATORS
x= 5 
y = 10

console.log("x == to y:",x==y);

x= 0 ; y = 10;
console.log("x === to y:",x===y);

x= 5 ; y = 2;
console.log("x != to y:",x!=y);

console.log("x !== to y:",x!==y);
console.log("X > y",x>y)
console.log("X < y",x<y)
console.log("X >= y",x>=y)
console.log("X <= y",x<=y);

//logical operators
let numa = 3;
console.log((numa<5)&&(numa>0));
console.log((numa>5)&&(numa<0));

console.log((numa>4)||(numa>0));
console.log((numa>3)||(numa<0));

console.log(!(numa==5));
console.log(!(numa>5));


//if contidional 
let age = 19;
text = "You can not drive";

if(age>=18){
    text="You can Drive"
}
console.log(text);

//if else
    let hour =11;
if(hour <12){
    Greeting = "Good Morning";
}else{
    Greeting="Good Day"
}
console.log(Greeting)

//delta 9 rool

let marks = 65

if(marks>90){

    output = "Grade A"
    
}else if (marks >=75 && marks<=90) {

    output = "Grade B"

}else if (marks>=50 && marks <75){

    output = "Grade C"

}else {
    output = "Grade  F"

}

console.log(output)


// swith  case 
let trafficlight = "Yellow";
let message= " ";
 switch(trafficlight){
    case "Red":
        message="Stop";
        break;
    
    case "Yellow":
        message="Prepare to Stop"
break;    
    case "Green":
        message="Proceed To continue driving"
    break;
    default:
        message="Invalid traffic light color"
 }
 console.log(message)


 // question swithc case

num = 4;

switch(num){
    case 1:
        day='Monday'
        break;
    case 2:
        day='Tuesday'
        break;
    case 3:
        day='wednesday'
        break;
    case 4:
        day='Thursday'
        break;
    case 5:
        day='Friday'
        break;
    case 6:
        day = 'Saturday'
        break;
    case 7:
        day= 'Sunday'
        break;
    default:
        day='Invalid input'
}
console.log(day)