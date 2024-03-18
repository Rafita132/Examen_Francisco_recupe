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

  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const modal = document.getElementById('loginModal');
  const cancelarBtn = document.getElementById('cancelarBtn'); 
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const addEntryBtn = document.getElementById('addEntryBtn');
  
  loginBtn.addEventListener('click', () => {
      modal.style.display = 'block';
  });
  
  closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });
  
  cancelarBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });
  
  loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (email === 'francisco.romero@cesurformacion.com' && password === '1234') {
          alert('Inicio de sesión exitoso');
          modal.style.display = 'none';
  
          logoutBtn.classList.remove('oculto');
          loginBtn.classList.add('oculto');
      } else {
          alert('Correo electrónico o contraseña incorrectos');
      }
  });
  
  logoutBtn.addEventListener('click', () => {
      logoutBtn.classList.add('oculto');
      loginBtn.classList.remove('oculto');
  });
  
  addEntryBtn.addEventListener('click', () => {
      alert('¡Botón para agregar una nueva entrada!');
  });
  

logoutBtn.addEventListener('click', () => {
    logoutBtn.classList.add('oculto');
    loginBtn.classList.remove('oculto');
});

addEntryBtn.addEventListener('click', () => {
    alert('¡Botón para agregar una nueva entrada');
});


