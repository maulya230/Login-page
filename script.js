function validateLogin() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    var errorElement = document.getElementById('loginError');
    
    
    if (email === '' || password === '') {
        errorElement.textContent = 'All fields are required';
        return;
    }

    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
        errorElement.textContent = 'Enter a valid email address';
        return;
    }


    errorElement.textContent = '';
    alert('Login successful!');
}
