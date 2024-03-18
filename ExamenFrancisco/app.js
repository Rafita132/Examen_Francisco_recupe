var loginForm = document.getElementById('loginForm');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var modal = document.getElementById('loginModal');
var loginBtn = document.getElementById('loginBtn');
var logoutBtn = document.getElementById('logoutBtn');


fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('entradas-blog');
        const template = document.getElementById('entrada-template').content;

        data.forEach(entrada => {
            const clone = document.importNode(template, true);
            clone.querySelector('#titulo').textContent = entrada.titulo;
            clone.querySelector('#imagen').src = entrada.imagen;
            clone.querySelector('#descripcion').textContent = entrada.descripcion;
            clone.querySelector('#enlace').href = entrada.enlace;
            container.appendChild(clone);
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));


loginBtn.addEventListener('click', () => {
    console.log(",");
    modal.showModal();
});


document.querySelector("#aceptarBtn").addEventListener('click', (event) => {
    //event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === 'francisco.romero@cesurformacion.com' && password === '1234') {
        alert('Inicio de sesión exitoso');
        modal.close();
        logoutBtn.classList.remove('escondido');
        loginBtn.classList.add('escondido');
        document.querySelector("#nuevaEntrada").classList.remove('escondido');
    } else {
        alert('Correo electrónico o contraseña incorrectos');
    }
    return true;
});






