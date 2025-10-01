alert("Hi!..");

console.log("How are you:");
console.log("Here is your data:");

var n=prompt("Enter Your Name:")
console.log("My name is:" + n);

var age=prompt("Enter Your Age:")
console.log("My age is:" + age);

var isTrue=confirm("Are you sure you want to submit?")
if (isTrue){
    console.log("Data Submitted Successfully")
}
else{
    console.log("Data not Submitted")
}

var end = "Thank You!"
console.log(end);

document.title = "JS";

document.body.style.backgroundColor = "lightblue";
