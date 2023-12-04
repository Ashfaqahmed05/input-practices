let first = document.querySelector('#first');
let second = document.querySelector('#second');
let third = document.querySelector('#third');
const passwordInput = document.querySelector('#passwordInput');
const passwordMessage = document.querySelector('#passwordMessage');
let showpassword = document.querySelector('#img')
let emailInput = document.querySelector('#email');
let emailMessage = document.querySelector('#emailMessage')
let myform = document.querySelector('#form')

first.addEventListener('input', function () {
    second.value = first.value;
    updateThirdInput()
});
second.addEventListener('input' , ()=>{
      updateThirdInput()
})
function updateThirdInput() {
    third.value = second.value;
}

myform.addEventListener('submit', function (event) {
  event.preventDefault()
  emailchecking();
  validatePassword();
});

function emailchecking() {
  let email = emailInput.value;

  if (!email.includes('@')) {
      emailMessage.innerHTML = 'Email Format @ missing';
  } else if (!email.includes('gmail.com')) {
      emailMessage.innerHTML = 'Email Format "gmail.com" missing';
  }
}

    

showpassword.addEventListener('click', () => {
   if(passwordInput.type === 'password'){
        passwordInput.type = 'text' 
   }else{
    passwordInput.type = 'password'
   }
})

function validatePassword() {
    const password = passwordInput.value;

    const UpperCase = /[A-Z]/.test(password);
    const LowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const SpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLength = password.length >= 8;
    const StrongPassword = UpperCase && LowerCase && hasNumbers && SpecialChar && isLength;

    if (StrongPassword) {
        passwordMessage.innerText = 'Strong password!';

    } else {
        passwordMessage.innerText = 'Password should contain at least 8 characters, including uppercase, lowercase, numbers, and special characters.';
    }
}