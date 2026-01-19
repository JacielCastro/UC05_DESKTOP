// CÓDIGO DE LOGIN 
    document.getElementById('btnLogin').addEventListener('click', () => {
    const login = document.getElementById('login').value
    const senha = document.getElementById('senha').value
    
    if (login === " "|| senha === ' ') {
        alert ('Preencha os compos vazios')
        return
    }
    if (login === 'jaciel' || senha === '123456') {
        alert ('Login realizados com sucesso');
    }else {
        alert ('Usuario ou Senha inválidos ');
    }
})

