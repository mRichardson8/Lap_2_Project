let logInBtn = document.getElementById('log-in-submit')

logInBtn.addEventListener('click', async (e) => {
    try{
        let email = document.getElementById('log-in-email').value
        let password = document.getElementById('log-in-password').value
        let data = {email : email, password: password};
        const response = await fetch('https://viva-pal.herokuapp.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const tokenData = await response.json()
        localStorage.setItem('token', tokenData.token)
        const payload = jwt_decode(tokenData.token);
        localStorage.setItem('email', payload.email)
        window.location.pathname = '/static/userPage.html';

    } catch (err){
        console.log(err);
        alert('Log in Failed, please check your email and password');
        
    }
    
})

// Fix autocomplete
function fix_autocomplete() {
    setTimeout(() => {
        if ($(this).is(':-internal-autofill-selected')) {
            var clone = $(this).clone(true, true);
            $(this).after(clone);
            $(this).remove();
        }
    }, 10);
}
$('.form-control').on('input', fix_autocomplete);
