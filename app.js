let signUpBtn = document.querySelector('.signinbtn');
let signInBtn = document.querySelector('.signupbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text= document.querySelector('.text');

signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight ='0px';
    title.innerHTML = 'Sign In ';
    text.innerHTML = 'Lost password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)'
});

signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight ='60px';
    title.innerHTML = 'Sign In ';
    text.innerHTML = 'Password Suggestion';

    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0px)'
});