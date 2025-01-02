document.addEventListener('DOMContentLoaded', function () {
    const services = {
        101: `
        <h3 class="text-primary">Consultoría en Transformación Digital</h3>
        <img src="img/consultoria.jpg" alt="Consultoría" class="img-fluid rounded mb-3">

        <h4>Descripción del Servicio</h4>
        <p>Ayudamos a las empresas a integrarse en el ecosistema digital mediante un enfoque estratégico y personalizado. 
        La transformación digital no solo consiste en adoptar tecnología, sino también en cambiar la cultura organizacional para maximizar el valor de las herramientas tecnológicas.
        Nuestro objetivo es lograr que las empresas sean más competitivas y resilientes en un mercado en constante evolución.</p>

        <h5>Beneficios Clave</h5>
        <ol class="list-unstyled" >
        <li><strong>Automatización de procesos:</strong> Implementamos soluciones que eliminan tareas repetitivas, reduciendo errores y ahorrando tiempo.</li>
        <li><strong>Reducción de costos operativos:</strong> Optimizamos recursos mediante herramientas tecnológicas que generan mayor rentabilidad.</li>
        <li><strong>Mayor eficiencia en la toma de decisiones:</strong> Proveemos acceso a datos en tiempo real para identificar oportunidades y riesgos de manera oportuna.</li>
        <li><strong>Adaptabilidad al cambio:</strong> Preparamos a las organizaciones para responder rápidamente a las demandas del mercado.</li>
        </ol>

        <h5>Metodología</h5>
        <p>Nuestro enfoque se basa en los siguientes pasos:</p>
        <ol>
        <li><strong>Diagnóstico inicial:</strong> Analizamos la situación actual de la empresa para identificar oportunidades y desafíos.</li>
        <li><strong>Estrategia personalizada:</strong> Diseñamos un plan adaptado a las necesidades específicas del negocio.</li>
        <li><strong>Implementación:</strong> Acompañamos a la empresa en la adopción de herramientas tecnológicas y el cambio cultural.</li>
        <li><strong>Seguimiento y mejora continua:</strong> Garantizamos que los procesos implementados evolucionen según las necesidades del mercado.</li>
        </ol>
      `,
        102: `
        <h3 class="text-primary">Gestión de Datos y Analítica</h3>
        <img src="img/gestion-datos.jpg" alt="Gestión de Datos y Analítica" class="img-fluid rounded mb-3">

        <h4>Descripción del Servicio</h4>
        <p>En la era digital, los datos son el recurso más valioso para las empresas. 
        Ofrecemos soluciones avanzadas para recopilar, almacenar, analizar y visualizar datos, 
        transformándolos en información procesable para la toma de decisiones estratégicas. 
        Nuestro objetivo es empoderar a las empresas con una visión clara de su rendimiento
         y oportunidades de crecimiento.</p>

        <h5 >Beneficios Clave</h5>
        <ol class="list-unstyled">
        <li class="mb-3">
            <i class="bi bi-graph-up-arrow text-primary me-2"></i>
            <strong>Toma de decisiones basada en datos:</strong> Proveemos insights precisos para respaldar decisiones críticas.
        </li>
        <li class="mb-3">
            <i class="bi bi-bar-chart-line text-success me-2"></i>
            <strong>Optimización de recursos:</strong> Identificamos áreas donde se pueden mejorar la eficiencia y reducir costos.
        </li>
        <li class="mb-3">
            <i class="bi bi-lightbulb text-warning me-2"></i>
            <strong>Predicción de tendencias:</strong> Utilizamos análisis predictivos para anticiparnos a las necesidades del mercado.
        </li>
        <li class="mb-3">
            <i class="bi bi-layout-text-sidebar text-info me-2"></i>
            <strong>Mayor visibilidad:</strong> Diseñamos dashboards personalizados para un monitoreo continuo de KPIs clave.
        </li>
        </ol>


        <h5>Metodología</h5>
        <p>Implementamos un enfoque integral para la gestión de datos:</p>
        <ol>
        <li><strong>Auditoría de datos:</strong> Evaluamos las fuentes y calidad de los datos actuales para detectar oportunidades de mejora.</li>
        <li><strong>Centralización:</strong> Diseñamos soluciones de almacenamiento que unifican y estructuran los datos en una sola plataforma.</li>
        <li><strong>Análisis avanzado:</strong> Aplicamos herramientas de analítica para identificar patrones, tendencias y oportunidades.</li>
        <li><strong>Visualización:</strong> Creamos reportes y dashboards interactivos que facilitan la comprensión de los datos.</li>
        </ol>
      `,
        103:  `
        <h3 class="text-primary">Capacitacion y Cambio cultural</h3>
        <img src="img/gestion-datos.jpg" alt="Gestión de Datos y Analítica" class="img-fluid rounded mb-3">

        <h4>Descripción del Servicio</h4>
        <p>En la era digital, los datos son el recurso más valioso para las empresas. 
        Ofrecemos soluciones avanzadas para recopilar, almacenar, analizar y visualizar datos, 
        transformándolos en información procesable para la toma de decisiones estratégicas. 
        Nuestro objetivo es empoderar a las empresas con una visión clara de su rendimiento
         y oportunidades de crecimiento.</p>

        <h5 >Beneficios Clave</h5>
        <ol class="list-unstyled">
        <li class="mb-3">
            <i class="bi bi-graph-up-arrow text-primary me-2"></i>
            <strong>Toma de decisiones basada en datos:</strong> Proveemos insights precisos para respaldar decisiones críticas.
        </li>
        <li class="mb-3">
            <i class="bi bi-bar-chart-line text-success me-2"></i>
            <strong>Optimización de recursos:</strong> Identificamos áreas donde se pueden mejorar la eficiencia y reducir costos.
        </li>
        <li class="mb-3">
            <i class="bi bi-lightbulb text-warning me-2"></i>
            <strong>Predicción de tendencias:</strong> Utilizamos análisis predictivos para anticiparnos a las necesidades del mercado.
        </li>
        <li class="mb-3">
            <i class="bi bi-layout-text-sidebar text-info me-2"></i>
            <strong>Mayor visibilidad:</strong> Diseñamos dashboards personalizados para un monitoreo continuo de KPIs clave.
        </li>
        </ol>


        <h5>Metodología</h5>
        <p>Implementamos un enfoque integral para la gestión de datos:</p>
        <ol>
        <li><strong>Auditoría de datos:</strong> Evaluamos las fuentes y calidad de los datos actuales para detectar oportunidades de mejora.</li>
        <li><strong>Centralización:</strong> Diseñamos soluciones de almacenamiento que unifican y estructuran los datos en una sola plataforma.</li>
        <li><strong>Análisis avanzado:</strong> Aplicamos herramientas de analítica para identificar patrones, tendencias y oportunidades.</li>
        <li><strong>Visualización:</strong> Creamos reportes y dashboards interactivos que facilitan la comprensión de los datos.</li>
        </ol>
      `,
      201:  `
        <h3 class="text-primary">Desarrollo de aplicaciones web</h3>
        <img src="img/gestion-datos.jpg" alt="Gestión de Datos y Analítica" class="img-fluid rounded mb-3">

        <h4>Descripción del Servicio</h4>
        <p>
        El desarrollo de aplicaciones web se centra en crear plataformas que sean funcionales, escalables y atractivas,
        adaptadas a las necesidades únicas de cada cliente. Estas aplicaciones pueden ser páginas informativas, tiendas en línea,
        sistemas de gestión, o soluciones personalizadas que potencian los procesos empresariales. A través del uso de tecnologías modernas como Angular, React, Node.js y bases de datos escalables,
        se asegura que las aplicaciones sean rápidas, seguras y fáciles de usar. Además, se optimizan para ofrecer una experiencia excepcional en dispositivos móviles y de escritorio.
        </p>

        <h5>Beneficios Clave</h5>
        <ol class="list-unstyled">
        <li class="mb-3">
            <i class="bi bi-person-lines-fill text-primary me-2"></i>
            <strong>Experiencia de Usuario Mejorada:</strong> Interfaces intuitivas que optimizan la interacción del usuario.
        </li>
        <li class="mb-3">
            <i class="bi bi-bar-chart text-success me-2"></i>
            <strong>Personalización:</strong> Soluciones a medida para satisfacer necesidades específicas.
        </li>
        <li class="mb-3">
            <i class="bi bi-lightning-fill text-warning me-2"></i>
            <strong>Interactividad:</strong> Uso de frameworks modernos para construir experiencias dinámicas.
        </li>
        <li class="mb-3">
            <i class="bi bi-arrows-angle-expand text-info me-2"></i>
            <strong>Escalabilidad:</strong> Diseñadas para crecer junto con tu negocio.
        </li>
        </ol>

        <h5>Metodología</h5>
        <p>Implementamos un enfoque integral para la gestión de datos:</p>
        <ol class="list-unstyled">
        <li>
            <i class="bi bi-repeat text-secondary me-2"></i>
            <strong>Agile:</strong> Entregas iterativas y priorización de funcionalidades según necesidades del cliente.
        </li>
        <li>
            <i class="bi bi-palette-fill text-primary me-2"></i>
            <strong>Diseño UX/UI:</strong> Investigación y prototipos para crear experiencias centradas en el usuario.
        </li>
        <li>
            <i class="bi bi-shield-check text-success me-2"></i>
            <strong>Pruebas Automatizadas:</strong> Asegurar calidad y evitar errores en producción.
        </li>
        </ol>

      `,
      202:  `
        <h3 class="text-primary">Modernización de Software</h3>
        <img src="img/gestion-datos.jpg" alt="Gestión de Datos y Analítica" class="img-fluid rounded mb-3">

        <h4>Descripción del Servicio</h4>
        <p>La modernización de software es esencial para empresas que operan con sistemas heredados que limitan la agilidad y productividad. 
        Este servicio identifica puntos débiles en aplicaciones existentes y los transforma utilizando arquitecturas modernas como microservicios, 
        tecnologías basadas en la nube y bases de datos actualizadas. El objetivo es extender la vida útil del software, 
        reducir los costos asociados a tecnologías antiguas y preparar el sistema para futuras innovaciones.</p>

        <h5 >Beneficios Clave</h5>
        <ol class="list-unstyled">
        <li class="mb-3">
            <i class="bi bi-graph-up-arrow text-primary me-2"></i>
            <strong>Aumento de Seguridad:</strong> Protección contra vulnerabilidades presentes en tecnologías antiguas.
        </li>
        <li class="mb-3">
            <i class="bi bi-bar-chart-line text-success me-2"></i>
            <strong>Integración Simplificada:</strong> Compatible con herramientas y plataformas actuales.
        </li>
        <li class="mb-3">
            <i class="bi bi-lightbulb text-warning me-2"></i>
            <strong>Optimización del Rendimiento:</strong> Mejora la velocidad y estabilidad del software.
        </li>
        <li class="mb-3">
            <i class="bi bi-layout-text-sidebar text-info me-2"></i>
            <strong>Mayor visibilidad:</strong> Diseñamos dashboards personalizados para un monitoreo continuo de KPIs clave.
        </li>
        </ol>


        <h5>Metodología</h5>
        <p>Implementamos un enfoque integral para la gestión de datos:</p>
        <ol>
        <li><strong>Evaluación de Impacto:</strong> Identificar módulos críticos que requieren atención inmediata.</li>
        <li><strong>Migración Gradual:</strong> Dividir la modernización en fases para minimizar interrupciones.</li>
        <li><strong>Reingeniería de Software:</strong> Rediseñar componentes obsoletos utilizando patrones actuales.</li>
        </ol>
      `,
      203:  `
        <h3 class="text-primary">Integración de Sistemas</h3>
        <img src="img/gestion-datos.jpg" alt="Gestión de Datos y Analítica" class="img-fluid rounded mb-3">

        <h4>Descripción del Servicio</h4>
        <p>La integración de sistemas permite a las empresas conectar diferentes herramientas y plataformas para trabajar de manera armónica. 
        Este servicio facilita la comunicación entre aplicaciones, eliminando silos de información y mejorando la colaboración. 
        Por ejemplo, un sistema de inventarios puede sincronizarse con una plataforma de ventas y un ERP para automatizar procesos, 
        reduciendo errores y maximizando la eficiencia. Se utilizan tecnologías como APIs, ETLs (Extract, Transform, Load) y 
        middleware para garantizar una integración fluida y confiable.</p>

        <h5 >Beneficios Clave</h5>
        <ol class="list-unstyled">
        <li class="mb-3">
            <i class="bi bi-gear text-primary me-2"></i>
            <strong>Mayor Eficiencia Operativa:</strong> Los sistemas trabajan de manera coordinada.
        </li>
        <li class="mb-3">
            <i class="bi bi-box-arrow-up-right text-success me-2"></i>
            <strong>Escalabilidad:</strong> Permite añadir nuevos sistemas sin complicaciones.
        </li>
        <li class="mb-3">
            <i class="bi bi-check-circle text-warning me-2"></i>
            <strong>Reducción de Errores:</strong> Minimiza la duplicación de datos y fallos de integración.
        </li>
        </ol>


        <h5>Metodología</h5>
        <p>Implementamos un enfoque integral para la gestión de datos:</p>
        <ol>
        <li><strong>Mapeo de Procesos:</strong> Identificar cómo los datos deben fluir entre sistemas.</li>
        <li><strong>APIs RESTful::</strong> Desarrollar interfaces estándar para conectar sistemas.</li>
        <li><strong>Middleware:</strong> Implementar soluciones intermediarias para facilitar la integración.</li>
        </ol>
      `,
      204:  `
        <h3 class="text-primary">Soporte y Mantenimiento</h3>
        <img src="img/gestion-datos.jpg" alt="Gestión de Datos y Analítica" class="img-fluid rounded mb-3">

        <h4>Descripción del Servicio</h4>
        <p>El soporte y mantenimiento garantiza que el software esté siempre operativo, seguro y actualizado. 
        Este servicio incluye tareas como monitoreo continuo, resolución de problemas, optimización de rendimiento y 
        actualizaciones periódicas para adaptarse a las nuevas necesidades del cliente. También abarca la gestión de incidentes, 
        garantizando tiempos de respuesta rápidos y soluciones efectivas. Se presta especial atención a mantener la seguridad del sistema, 
        aplicando parches de seguridad y realizando auditorías periódicas.</p>

        <h5 >Beneficios Clave</h5>
        <ol class="list-unstyled">
        <li class="mb-3">
            <i class="bi bi-tools text-primary me-2"></i>
            <strong>Maximiza la Disponibilidad:</strong> Rápida solución de problemas para minimizar tiempos de inactividad.
        </li>
        <li class="mb-3">
            <i class="bi bi-arrow-repeat text-success me-2"></i>
            <strong>Actualización Constante:</strong> Adaptación a nuevas necesidades y tecnologías.
        </li>
        <li class="mb-3">
            <i class="bi bi-shield-lock text-warning me-2"></i>
            <strong>Seguridad Reforzada:</strong> Corrección de vulnerabilidades de manera proactiva.
        </li>
        <li class="mb-3">
            <i class="bi bi-people text-info me-2"></i>
            <strong>Relación a Largo Plazo:</strong> Asistencia personalizada para garantizar satisfacción del cliente.
        </li>
        </ol>


        <h5>Metodología</h5>
        <p>Implementamos un enfoque integral para la gestión de datos:</p>
        <ol>
        <li><strong>Monitoreo Proactivo:</strong> Uso de herramientas para identificar y prevenir problemas antes de que ocurran.</li>
        <li><strong>SLA (Acuerdo de Nivel de Servicio):</strong> Definir tiempos y prioridades en la atención de incidentes.</li>
        <li><strong>Automatización de Mantenimiento:</strong> Scripts y procesos que reduzcan la intervención manual.</li>
        </ol>
      `,
      301:  `
        <h3 class="text-primary">Migración a la Nube</h3>
        <img src="img/gestion-datos.jpg" alt="Gestión de Datos y Analítica" class="img-fluid rounded mb-3">

        <h4>Descripción del Servicio</h4>
        <p>
        La migración a la nube implica trasladar datos, aplicaciones, y procesos desde infraestructuras locales o tradicionales a un entorno de computación en la nube. 
        Este servicio puede ser crítico para organizaciones que buscan modernizar sus sistemas y mejorar la escalabilidad, flexibilidad y resiliencia.
        </p> 

        <h5>Beneficios Clave</h5>
        <ol class="list-unstyled">
        <li class="mb-3">
            <i class="bi bi-person-lines-fill text-primary me-2"></i>
            <strong>Modernización de Sistemas:</strong> Infraestructuras actualizadas para soportar nuevas tecnologías.
        </li>
        <li class="mb-3">
            <i class="bi bi-bar-chart text-success me-2"></i>
            <strong>Reducción de Costos Operativos:</strong> Elimina la necesidad de mantener hardware propio.
        </li>
        <li class="mb-3">
            <i class="bi bi-lightning-fill text-warning me-2"></i>
            <strong>Rendimiento Mejorado:</strong> Acceso rápido y sin interrupciones a nivel mundial.
        </li>
        <li class="mb-3">
            <i class="bi bi-arrows-angle-expand text-info me-2"></i>
            <strong>Mayor Resiliencia:</strong> Recuperación ante fallos y copias de seguridad integradas.
        </li>
        </ol>

        <h5>Metodología</h5>
        <p>Implementamos un enfoque integral para la gestión de datos:</p>
        <ol class="list-unstyled">
        <li>
            <i class="bi bi-repeat text-secondary me-2"></i>
            <strong>Estrategia Lift-and-Shift:</strong> Migración directa de aplicaciones y datos a la nube con mínima alteración.
        </li>
        <li>
            <i class="bi bi-palette-fill text-primary me-2"></i>
            <strong>Reingeniería de Aplicaciones:</strong> Optimización de sistemas para aprovechar características específicas de la nube.
        </li>
        <li>
            <i class="bi bi-shield-check text-success me-2"></i>
            <strong>Gestión del Cambio:</strong> Entrenamiento para equipos internos sobre el uso de la nube.
        </li>
        </ol>

      `,
      302:  `
        <h3 class="text-primary">Optimización de Costos en la Nube</h3>
        <img src="img/gestion-datos.jpg" alt="Gestión de Datos y Analítica" class="img-fluid rounded mb-3">

        <h4>Descripción del Servicio</h4>
        <p>La optimización de costos en la nube garantiza que las empresas usen los recursos de manera eficiente, 
        reduciendo gastos sin comprometer el rendimiento o la escalabilidad.</p>

        <h5 >Beneficios Clave</h5>
        <ol class="list-unstyled">
        <li class="mb-3">
            <i class="bi bi-graph-up-arrow text-primary me-2"></i>
            <strong>Aumento de Seguridad:</strong> Protección contra vulnerabilidades presentes en tecnologías antiguas.
        </li>
        <li class="mb-3">
            <i class="bi bi-bar-chart-line text-success me-2"></i>
            <strong>Integración Simplificada:</strong> Compatible con herramientas y plataformas actuales.
        </li>
        <li class="mb-3">
            <i class="bi bi-lightbulb text-warning me-2"></i>
            <strong>Optimización del Rendimiento:</strong> Mejora la velocidad y estabilidad del software.
        </li>
        <li class="mb-3">
            <i class="bi bi-layout-text-sidebar text-info me-2"></i>
            <strong>Mayor visibilidad:</strong> Diseñamos dashboards personalizados para un monitoreo continuo de KPIs clave.
        </li>
        </ol>


        <h5>Metodología</h5>
        <p>Implementamos un enfoque integral para la gestión de datos:</p>
        <ol>
        <li><strong>Evaluación de Impacto:</strong> Identificar módulos críticos que requieren atención inmediata.</li>
        <li><strong>Migración Gradual:</strong> Dividir la modernización en fases para minimizar interrupciones.</li>
        <li><strong>Reingeniería de Software:</strong> Rediseñar componentes obsoletos utilizando patrones actuales.</li>
        </ol>
      `,
      303:  `
        <h3 class="text-primary">Integración de Sistemas</h3>
        <img src="img/gestion-datos.jpg" alt="Gestión de Datos y Analítica" class="img-fluid rounded mb-3">

        <h4>Descripción del Servicio</h4>
        <p>La integración de sistemas permite a las empresas conectar diferentes herramientas y plataformas para trabajar de manera armónica. 
        Este servicio facilita la comunicación entre aplicaciones, eliminando silos de información y mejorando la colaboración. 
        Por ejemplo, un sistema de inventarios puede sincronizarse con una plataforma de ventas y un ERP para automatizar procesos, 
        reduciendo errores y maximizando la eficiencia. Se utilizan tecnologías como APIs, ETLs (Extract, Transform, Load) y 
        middleware para garantizar una integración fluida y confiable.</p>

        <h5 >Beneficios Clave</h5>
        <ol class="list-unstyled">
        <li class="mb-3">
            <i class="bi bi-gear text-primary me-2"></i>
            <strong>Mayor Eficiencia Operativa:</strong> Los sistemas trabajan de manera coordinada.
        </li>
        <li class="mb-3">
            <i class="bi bi-box-arrow-up-right text-success me-2"></i>
            <strong>Escalabilidad:</strong> Permite añadir nuevos sistemas sin complicaciones.
        </li>
        <li class="mb-3">
            <i class="bi bi-check-circle text-warning me-2"></i>
            <strong>Reducción de Errores:</strong> Minimiza la duplicación de datos y fallos de integración.
        </li>
        </ol>


        <h5>Metodología</h5>
        <p>Implementamos un enfoque integral para la gestión de datos:</p>
        <ol>
        <li><strong>Mapeo de Procesos:</strong> Identificar cómo los datos deben fluir entre sistemas.</li>
        <li><strong>APIs RESTful::</strong> Desarrollar interfaces estándar para conectar sistemas.</li>
        <li><strong>Middleware:</strong> Implementar soluciones intermediarias para facilitar la integración.</li>
        </ol>
      `,
      304:  `
        <h3 class="text-primary">Soporte y Mantenimiento</h3>
        <img src="img/gestion-datos.jpg" alt="Gestión de Datos y Analítica" class="img-fluid rounded mb-3">

        <h4>Descripción del Servicio</h4>
        <p>El soporte y mantenimiento garantiza que el software esté siempre operativo, seguro y actualizado. 
        Este servicio incluye tareas como monitoreo continuo, resolución de problemas, optimización de rendimiento y 
        actualizaciones periódicas para adaptarse a las nuevas necesidades del cliente. También abarca la gestión de incidentes, 
        garantizando tiempos de respuesta rápidos y soluciones efectivas. Se presta especial atención a mantener la seguridad del sistema, 
        aplicando parches de seguridad y realizando auditorías periódicas.</p>

        <h5 >Beneficios Clave</h5>
        <ol class="list-unstyled">
        <li class="mb-3">
            <i class="bi bi-tools text-primary me-2"></i>
            <strong>Maximiza la Disponibilidad:</strong> Rápida solución de problemas para minimizar tiempos de inactividad.
        </li>
        <li class="mb-3">
            <i class="bi bi-arrow-repeat text-success me-2"></i>
            <strong>Actualización Constante:</strong> Adaptación a nuevas necesidades y tecnologías.
        </li>
        <li class="mb-3">
            <i class="bi bi-shield-lock text-warning me-2"></i>
            <strong>Seguridad Reforzada:</strong> Corrección de vulnerabilidades de manera proactiva.
        </li>
        <li class="mb-3">
            <i class="bi bi-people text-info me-2"></i>
            <strong>Relación a Largo Plazo:</strong> Asistencia personalizada para garantizar satisfacción del cliente.
        </li>
        </ol>


        <h5>Metodología</h5>
        <p>Implementamos un enfoque integral para la gestión de datos:</p>
        <ol>
        <li><strong>Monitoreo Proactivo:</strong> Uso de herramientas para identificar y prevenir problemas antes de que ocurran.</li>
        <li><strong>SLA (Acuerdo de Nivel de Servicio):</strong> Definir tiempos y prioridades en la atención de incidentes.</li>
        <li><strong>Automatización de Mantenimiento:</strong> Scripts y procesos que reduzcan la intervención manual.</li>
        </ol>
      `,
      401:  `
        <h3 class="text-primary">Desarrollo de aplicaciones web</h3>
        <img src="img/gestion-datos.jpg" alt="Gestión de Datos y Analítica" class="img-fluid rounded mb-3">

        <h4>Descripción del Servicio</h4>
        <p>
        El desarrollo de aplicaciones web se centra en crear plataformas que sean funcionales, escalables y atractivas,
        adaptadas a las necesidades únicas de cada cliente. Estas aplicaciones pueden ser páginas informativas, tiendas en línea,
        sistemas de gestión, o soluciones personalizadas que potencian los procesos empresariales. A través del uso de tecnologías modernas como Angular, React, Node.js y bases de datos escalables,
        se asegura que las aplicaciones sean rápidas, seguras y fáciles de usar. Además, se optimizan para ofrecer una experiencia excepcional en dispositivos móviles y de escritorio.
        </p>

        <h5>Beneficios Clave</h5>
        <ol class="list-unstyled">
        <li class="mb-3">
            <i class="bi bi-person-lines-fill text-primary me-2"></i>
            <strong>Experiencia de Usuario Mejorada:</strong> Interfaces intuitivas que optimizan la interacción del usuario.
        </li>
        <li class="mb-3">
            <i class="bi bi-bar-chart text-success me-2"></i>
            <strong>Personalización:</strong> Soluciones a medida para satisfacer necesidades específicas.
        </li>
        <li class="mb-3">
            <i class="bi bi-lightning-fill text-warning me-2"></i>
            <strong>Interactividad:</strong> Uso de frameworks modernos para construir experiencias dinámicas.
        </li>
        <li class="mb-3">
            <i class="bi bi-arrows-angle-expand text-info me-2"></i>
            <strong>Escalabilidad:</strong> Diseñadas para crecer junto con tu negocio.
        </li>
        </ol>

        <h5>Metodología</h5>
        <p>Implementamos un enfoque integral para la gestión de datos:</p>
        <ol class="list-unstyled">
        <li>
            <i class="bi bi-repeat text-secondary me-2"></i>
            <strong>Agile:</strong> Entregas iterativas y priorización de funcionalidades según necesidades del cliente.
        </li>
        <li>
            <i class="bi bi-palette-fill text-primary me-2"></i>
            <strong>Diseño UX/UI:</strong> Investigación y prototipos para crear experiencias centradas en el usuario.
        </li>
        <li>
            <i class="bi bi-shield-check text-success me-2"></i>
            <strong>Pruebas Automatizadas:</strong> Asegurar calidad y evitar errores en producción.
        </li>
        </ol>

      `,
      402:  `
        <h3 class="text-primary">Modernización de Software</h3>
        <img src="img/gestion-datos.jpg" alt="Gestión de Datos y Analítica" class="img-fluid rounded mb-3">

        <h4>Descripción del Servicio</h4>
        <p>La modernización de software es esencial para empresas que operan con sistemas heredados que limitan la agilidad y productividad. 
        Este servicio identifica puntos débiles en aplicaciones existentes y los transforma utilizando arquitecturas modernas como microservicios, 
        tecnologías basadas en la nube y bases de datos actualizadas. El objetivo es extender la vida útil del software, 
        reducir los costos asociados a tecnologías antiguas y preparar el sistema para futuras innovaciones.</p>

        <h5 >Beneficios Clave</h5>
        <ol class="list-unstyled">
        <li class="mb-3">
            <i class="bi bi-graph-up-arrow text-primary me-2"></i>
            <strong>Aumento de Seguridad:</strong> Protección contra vulnerabilidades presentes en tecnologías antiguas.
        </li>
        <li class="mb-3">
            <i class="bi bi-bar-chart-line text-success me-2"></i>
            <strong>Integración Simplificada:</strong> Compatible con herramientas y plataformas actuales.
        </li>
        <li class="mb-3">
            <i class="bi bi-lightbulb text-warning me-2"></i>
            <strong>Optimización del Rendimiento:</strong> Mejora la velocidad y estabilidad del software.
        </li>
        <li class="mb-3">
            <i class="bi bi-layout-text-sidebar text-info me-2"></i>
            <strong>Mayor visibilidad:</strong> Diseñamos dashboards personalizados para un monitoreo continuo de KPIs clave.
        </li>
        </ol>


        <h5>Metodología</h5>
        <p>Implementamos un enfoque integral para la gestión de datos:</p>
        <ol>
        <li><strong>Evaluación de Impacto:</strong> Identificar módulos críticos que requieren atención inmediata.</li>
        <li><strong>Migración Gradual:</strong> Dividir la modernización en fases para minimizar interrupciones.</li>
        <li><strong>Reingeniería de Software:</strong> Rediseñar componentes obsoletos utilizando patrones actuales.</li>
        </ol>
      `,
      403:  `
        <h3 class="text-primary">Integración de Sistemas</h3>
        <img src="img/gestion-datos.jpg" alt="Gestión de Datos y Analítica" class="img-fluid rounded mb-3">

        <h4>Descripción del Servicio</h4>
        <p>La integración de sistemas permite a las empresas conectar diferentes herramientas y plataformas para trabajar de manera armónica. 
        Este servicio facilita la comunicación entre aplicaciones, eliminando silos de información y mejorando la colaboración. 
        Por ejemplo, un sistema de inventarios puede sincronizarse con una plataforma de ventas y un ERP para automatizar procesos, 
        reduciendo errores y maximizando la eficiencia. Se utilizan tecnologías como APIs, ETLs (Extract, Transform, Load) y 
        middleware para garantizar una integración fluida y confiable.</p>

        <h5 >Beneficios Clave</h5>
        <ol class="list-unstyled">
        <li class="mb-3">
            <i class="bi bi-gear text-primary me-2"></i>
            <strong>Mayor Eficiencia Operativa:</strong> Los sistemas trabajan de manera coordinada.
        </li>
        <li class="mb-3">
            <i class="bi bi-box-arrow-up-right text-success me-2"></i>
            <strong>Escalabilidad:</strong> Permite añadir nuevos sistemas sin complicaciones.
        </li>
        <li class="mb-3">
            <i class="bi bi-check-circle text-warning me-2"></i>
            <strong>Reducción de Errores:</strong> Minimiza la duplicación de datos y fallos de integración.
        </li>
        </ol>


        <h5>Metodología</h5>
        <p>Implementamos un enfoque integral para la gestión de datos:</p>
        <ol>
        <li><strong>Mapeo de Procesos:</strong> Identificar cómo los datos deben fluir entre sistemas.</li>
        <li><strong>APIs RESTful::</strong> Desarrollar interfaces estándar para conectar sistemas.</li>
        <li><strong>Middleware:</strong> Implementar soluciones intermediarias para facilitar la integración.</li>
        </ol>
      `,
      404:  `
        <h3 class="text-primary">Soporte y Mantenimiento</h3>
        <img src="img/gestion-datos.jpg" alt="Gestión de Datos y Analítica" class="img-fluid rounded mb-3">

        <h4>Descripción del Servicio</h4>
        <p>El soporte y mantenimiento garantiza que el software esté siempre operativo, seguro y actualizado. 
        Este servicio incluye tareas como monitoreo continuo, resolución de problemas, optimización de rendimiento y 
        actualizaciones periódicas para adaptarse a las nuevas necesidades del cliente. También abarca la gestión de incidentes, 
        garantizando tiempos de respuesta rápidos y soluciones efectivas. Se presta especial atención a mantener la seguridad del sistema, 
        aplicando parches de seguridad y realizando auditorías periódicas.</p>

        <h5 >Beneficios Clave</h5>
        <ol class="list-unstyled">
        <li class="mb-3">
            <i class="bi bi-tools text-primary me-2"></i>
            <strong>Maximiza la Disponibilidad:</strong> Rápida solución de problemas para minimizar tiempos de inactividad.
        </li>
        <li class="mb-3">
            <i class="bi bi-arrow-repeat text-success me-2"></i>
            <strong>Actualización Constante:</strong> Adaptación a nuevas necesidades y tecnologías.
        </li>
        <li class="mb-3">
            <i class="bi bi-shield-lock text-warning me-2"></i>
            <strong>Seguridad Reforzada:</strong> Corrección de vulnerabilidades de manera proactiva.
        </li>
        <li class="mb-3">
            <i class="bi bi-people text-info me-2"></i>
            <strong>Relación a Largo Plazo:</strong> Asistencia personalizada para garantizar satisfacción del cliente.
        </li>
        </ol>


        <h5>Metodología</h5>
        <p>Implementamos un enfoque integral para la gestión de datos:</p>
        <ol>
        <li><strong>Monitoreo Proactivo:</strong> Uso de herramientas para identificar y prevenir problemas antes de que ocurran.</li>
        <li><strong>SLA (Acuerdo de Nivel de Servicio):</strong> Definir tiempos y prioridades en la atención de incidentes.</li>
        <li><strong>Automatización de Mantenimiento:</strong> Scripts y procesos que reduzcan la intervención manual.</li>
        </ol>
      `,
    };

    const serviceItems = document.querySelectorAll('.service-item');
    const serviceContent = document.getElementById('service-details-content');

    serviceItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const serviceId = this.getAttribute('data-service');
            const serviceDetails = services[serviceId];
            if (serviceDetails) {
                serviceContent.innerHTML = serviceDetails;
            }
        });
    });
});
