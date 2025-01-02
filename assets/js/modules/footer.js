// footer-component.js
class FooterComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="footer">
          <!-- Clients Section -->
          <div class="container footer-top">
            <div class="row gy-4">
              <div class="col-lg-4 col-md-6 footer-about">
                <a href="#hero" class="d-flex align-items-center">
                  <span class="sitename">Biuler</span>
                </a>
                <div class="footer-contact pt-3">
                  <p>Av. Caseros 2535, Parque Patricios</p>
                  <p>CABA, Argentina</p>
                  <p class="mt-3"><strong>Teléfono:</strong> <span>+54 9 11 3234-3567</span></p>
                  <p><strong>Email:</strong> <span>contacto@biuler.com</span></p>
                </div>
              </div>
  
              <div class="col-lg-2 col-md-3 footer-links">
                <h4>Links útiles</h4>
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <a href="https://www.biuler.com#hero">Inicio</a></li>
                  <li><i class="bi bi-chevron-right"></i> <a href="https://www.biuler.com#about">Sobre Nosotros</a></li>
                  <li><i class="bi bi-chevron-right"></i> <a>Políticas de privacidad</a></li>
                  <li><i class="bi bi-chevron-right"></i> <a>Términos del Servicio</a></li>
                </ul>
              </div>
  
              <div class="col-lg-2 col-md-3 footer-links">
                <h4>Servicios Destacados</h4>
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <a>Diseño Web</a></li>
                  <li><i class="bi bi-chevron-right"></i> <a>Desarrollo Web</a></li>
                  <li><i class="bi bi-chevron-right"></i> <a>Desarrollo Móvil</a></li>
                  <li><i class="bi bi-chevron-right"></i> <a>Cloud Computing</a></li>
                </ul>
              </div>
  
              <div class="col-lg-4 col-md-12">
                <h4>Síguenos</h4>
                <p>Conéctate con nosotros en redes y descubre cómo transformamos ideas en soluciones digitales.</p>
                <div class="social-links d-flex">
                  <a href="https://x.com" target="_blank"><i class="bi bi-twitter-x"></i></a>
                  <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com" target="_blank"><i class="bi bi-instagram"></i></a>
                  <a href="https://www.linkedin.com" target="_blank"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
  
          <div class="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong class="px-1 sitename">Biuler</strong> <span>All Rights Reserved</span></p>
          </div>
        </footer>
      `;
    }
  }
  
  // Registrar el componente
  customElements.define('footer-component', FooterComponent);