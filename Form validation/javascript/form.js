function validateform() {
    // input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    // error
    document.getElementById('nameerror').innerHTML = '';
    document.getElementById('mailerror').innerHTML = '';

    // validate name
    if (name === '') {
        document.getElementById('nameerror').innerHTML = 'Name is required';
        return false;
    }

    // validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('mailerror').innerHTML = 'Email is required';
        return false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('mailerror').innerHTML = 'Invalid email format';
        return false;
    }

    return true;
}
