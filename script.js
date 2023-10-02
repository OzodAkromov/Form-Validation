const text = document.querySelector('#text')
const number = document.querySelector('#num')
const email = document.querySelector('#mail')
const active_input = document.querySelector('.input-box.number')
const active_input_2 = document.querySelector('.input-box.email')
const button = document.querySelector('.type')

// name
text.addEventListener('input', () => {
    const value = text.value.length

    if (value >= 3 && value < 16) {
        text.parentElement.classList.remove('invalid')
        text.parentElement.classList.add('valid')
        active_input.classList.add('active')
    } else {
        text.parentElement.classList.remove('valid')
        text.parentElement.classList.add('invalid')
        active_input.classList.remove('active')
    }

    if (value === 0) text.parentElement.classList.remove('valid', 'invalid')
})

// number
number.addEventListener('keypress', (e) => {

    if (e.keyCode >= 97 && e.keyCode <= 122) {
        e.preventDefault()
        number.parentElement.classList.remove('valid')
        number.parentElement.classList.add('invalid')
        active_input_2.classList.remove('active')
    }
    else {
        active_input_2.classList.add('active')
        number.parentElement.classList.remove('invalid')
        number.parentElement.classList.add('valid')
    }
})

number.addEventListener('input', () => {
    const value = number.value.length

    if (value === 0) number.parentElement.classList.remove('valid', 'invalid')
})

// email

email.addEventListener("input", () => {
    const regex = email.getAttribute("pattern")

    if (email.value.match(regex)) {
        email.parentElement.classList.remove('invalid')
        email.parentElement.classList.add('valid')
        button.style.display = 'block'
    } else {
        email.parentElement.classList.remove('valid')
        email.parentElement.classList.add('invalid')
        button.style.display = 'none'
    }

    if (email.value.length === 0) email.parentElement.classList.remove('valid', 'invalid')
})


function formatPhoneNumber(value){
  
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 9) return phoneNumber;
    if (phoneNumberLength < 7) {
        return ` (${phoneNumber.slice(0, 2)}) ${phoneNumber.slice (5)}`;
    }
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 5)}-${phoneNumber.slice(5, 9)}`;
    
}
function phoneNumberFormatter(){
    
    const inputField = document.querySelector('.number_1');
    const formattedInputValue = formatPhoneNumber(inputField.value);
    inputField.value = formattedInputValue;
}