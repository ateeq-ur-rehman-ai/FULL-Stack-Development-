let a = prompt("Enter first number")

let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Invalid input: Please enter numeric values only.")
}

let sum = parseInt(a) + parseInt(b)

function main(){ 
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {
        console.log("An error occurred: ")
        return false
    } 
    finally{
        console.log("Execution completed.")
    }
  
}

let c = main()