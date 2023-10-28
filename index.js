let button = document.querySelector("button")
button.addEventListener('click',display)
function display(){
    let value = document.querySelector("#input")
    let output = document.querySelector("#output")
    let output1 = input.options[input.selectedIndex].value
    output.innerHTML = output1
}