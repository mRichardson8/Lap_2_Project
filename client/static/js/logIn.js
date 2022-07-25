let logInBtn = document.getElementById('log-in-submit')

logInBtn.addEventListener('click', async (e) => {
    try{
        let email = document.getElementById('log-in-email').value
        let password = document.getElementById('log-in-password').value
        let data = {email : email, password: password};
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        localStorage.setItem('token', data.token)
        const payload = jwt_decode(data.token);
        localStorage.setItem('username', payload.username)
        localStorage.setItem('email', payload.email)
        // window.location.href = 'http://127.0.0.1:5500/client/static/userPage.html'
        window.location.pathname = '/client/static/userPage.html';

    } catch (err){
        console.log(err);
        alert('Log in Failed, please check your email and password');
        
    }
    
})
