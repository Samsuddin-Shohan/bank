const submitButton = document.getElementById('submit-button');


submitButton.addEventListener('click', function(){
    const emailField = document.getElementById('userEmail');
    const passwordField = document.getElementById('userPassword') ;
   
    const email = emailField.value;
    const password = passwordField.value;
    console.log(email,password);
    if(email === 'abc@gmail.com' && password === 'abc'){
        window.location.href = 'banking.html';
        console.log(valid);
    }
});