

document.getElementById('submit-button').addEventListener('click', function () {

    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    const pTag = document.getElementById('p-tag');
    userEmail.value = '';
    userPassword.value = ''
    if (userEmail == 'abc' && userPassword == 'ab') {
        window.location.href = 'banking.html'
    } else {
        pTag.style.display = 'block'
    }

})