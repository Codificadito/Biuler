(function () {
  "use strict";

  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterStatusDiv = document.getElementById('newsletter-status');
  const newsletterMessage = document.getElementById('newsletter-message');

  newsletterForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(newsletterForm);

    try {
      const response = await fetch(newsletterForm.action, {
        method: newsletterForm.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        newsletterMessage.textContent = "¡Te has suscrito con éxito!";
        newsletterStatusDiv.className = "alert alert-success alert-dismissible fade show";
        newsletterForm.reset();
      } else {
        newsletterMessage.textContent = "Hubo un problema con la suscripción.";
        newsletterStatusDiv.className = "alert alert-danger alert-dismissible fade show";
      }
    } catch (error) {
      newsletterMessage.textContent = "Error de red al intentar suscribirse.";
      newsletterStatusDiv.className = "alert alert-danger alert-dismissible fade show";
    }

    newsletterStatusDiv.classList.remove('d-none');
  });

})();  