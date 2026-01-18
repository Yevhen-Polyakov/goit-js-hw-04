const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

input.addEventListener('input', inputValue)

function inputValue(e){
    const value = e.target.value.trim()
    span.textContent = value || "Anonymous"
}

