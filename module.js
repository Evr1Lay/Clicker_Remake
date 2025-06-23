const counter = document.getElementById("count")
const button = document.getElementById("main_button")

function add(numberOne, numberTwo) 
{
    if (typeof numberOne == "number" && typeof numberTwo == "number")
    {   
        const result = numberOne + numberTwo
        console.log("Answer:", result)
    }
    else
    {
        window.alert("error")
    }
}

let value = 0

function click() {
    value += 1
    counter.innerText = value
}

button.addEventListener('click', click)