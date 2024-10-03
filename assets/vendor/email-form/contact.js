(function () {
  "use strict";

  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('contact-status');
  const statusMessage = document.getElementById('form-message');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        statusMessage.textContent = "¡Mensaje enviado con éxito!";
        statusDiv.className = "alert alert-success alert-dismissible fade show";
        form.reset();
      } else {
        statusMessage.textContent = "Hubo un problema al enviar el mensaje.";
        statusDiv.className = "alert alert-danger alert-dismissible fade show";
      }
    } catch (error) {
      statusMessage.textContent = "Error de red al intentar enviar el mensaje.";
      statusDiv.className = "alert alert-danger alert-dismissible fade show";
    }

    statusDiv.classList.remove('d-none');

    setTimeout(() => {
      statusDiv.classList.add('d-none');
    }, 5000);
  });

})();