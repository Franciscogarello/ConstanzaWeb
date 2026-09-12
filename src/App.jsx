import { useEffect } from "react"

const services = [
  {
    category: "Gestión mensual",
    title: "Publicidad estratégica para crecer con orden",
    description:
      "Para negocios, marcas y profesionales que quieren delegar la gestión de su publicidad y contar con una estrategia detrás de cada campaña.",
    details:
      "Analizo el negocio y la oferta, defino la estrategia publicitaria, planifico y configuro las campañas en Meta Ads, desarrollo los mensajes y ángulos de comunicación, hago seguimiento de los resultados y optimizo de forma continua.",
    focus:
      "No se trata solamente de activar anuncios: analizo qué está funcionando, qué necesita mejorar y qué decisiones tomar para que la inversión tenga sentido para el negocio.",
    ideal:
      "Ideal si querés dejar de improvisar con tu publicidad y contar con gestión estratégica, seguimiento y decisiones basadas en datos.",
    button: "Quiero gestionar mi publicidad",
    featured: true,
  },
  {
    category: "Diagnóstico y plan",
    title: "Diagnóstico estratégico de publicidad",
    description:
      "Para negocios, marcas personales y profesionales que quieren empezar a invertir con una estrategia clara o que ya invierten y no saben qué está funcionando.",
    details:
      "Analizo tu negocio, oferta, comunicación, recorrido del cliente y situación actual de tus campañas. Detecto oportunidades, errores y puntos críticos para definir qué deberías priorizar antes de seguir invirtiendo.",
    focus:
      "Te llevás una mirada externa y estratégica sobre tu publicidad, junto con un plan de acción concreto para saber qué hacer, qué mejorar y dónde poner el foco.",
    ideal:
      "Ideal si querés ordenar tu publicidad, entender qué está pasando y tomar decisiones con criterio antes de seguir poniendo presupuesto.",
    button: "Quiero mi diagnóstico estratégico",
    featured: false,
  },
]

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      "section, .service-option, .work-step",
    )

    elements.forEach((element) => {
      element.classList.add("reveal")
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
      },
    )

    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main id="inicio">
      {/* BARRA DE NAVEGACIÓN */}

      <nav className="navbar">
        <a href="#inicio" className="logo">
          CG<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#metodo" className="nav-link">
            Cómo trabajo
          </a>

          <a href="#servicios" className="nav-link">
            Servicios
          </a>

          <a
            href="https://wa.me/5493425140309?text=Hola%20Constanza%2C%20quiero%20agendar%20una%20reuni%C3%B3n."
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            Agendar reunión <span>↗</span>
          </a>

          <a href="#contacto" className="nav-link">
            Contacto
          </a>
        </div>
      </nav>

      {/* PORTADA */}

      <section className="hero">
        <p className="hero-label">
          <span></span>
          Estrategia digital & Meta Ads
        </p>

        <h1>
          Soy Constanza
          <br />
          <span>Garello.</span>
        </h1>

        <div className="hero-information">
          <p className="profession">
            Project Manager, Ingeniera
            <br />y Publicista Digital
          </p>

          <p className="description">
            Ayudo a negocios y marcas personales a invertir en publicidad
            digital de forma{" "}
            <strong>estratégica, ordenada y rentable.</strong>
          </p>
        </div>
      </section>

      {/* MI FORMA DE TRABAJAR */}

      <section className="work-method" id="metodo">
        <p className="section-label">Mi forma de trabajar</p>

        <h2 className="work-title">
          Antes de invertir en publicidad,
          <span> entiendo el negocio.</span>
        </h2>

        <div className="work-content">
          <div className="work-introduction">
            <p>
              Analizo el negocio, la oferta, el mensaje, el público y el
              recorrido que hace una persona desde que conoce la marca hasta
              que se convierte en cliente.
            </p>

            <p>
              Mi mirada combina{" "}
              <strong>gestión, análisis y publicidad digital</strong> para que
              cada inversión en pauta tenga una estrategia detrás.
            </p>

            <div className="work-highlight">
              Mi trabajo no es solamente configurar campañas. Es ayudarte a
              tomar mejores decisiones sobre tu publicidad.
            </div>
          </div>

          <div className="work-steps">
            <article className="work-step">
              <span>1</span>

              <div>
                <h3>Entiendo el negocio y sus objetivos</h3>

                <p>
                  Analizo qué vendés, cómo funciona tu negocio, cuál es tu
                  oferta y qué objetivo tiene sentido perseguir con publicidad.
                </p>
              </div>
            </article>

            <article className="work-step">
              <span>2</span>

              <div>
                <h3>Analizo la oferta y el mensaje</h3>

                <p>
                  Trabajo sobre qué comunicamos, a quién, por qué deberían
                  elegirte y qué objeciones pueden aparecer antes de la compra.
                </p>
              </div>
            </article>

            <article className="work-step">
              <span>3</span>

              <div>
                <h3>Diseño la estrategia antes de lanzar</h3>

                <p>
                  Defino objetivos, campañas, públicos, mensajes y el recorrido
                  del cliente antes de invertir presupuesto en anuncios.
                </p>
              </div>
            </article>

            <article className="work-step">
              <span>4</span>

              <div>
                <h3>Mido, optimizo y tomo decisiones</h3>

                <p>
                  Analizo los datos, detecto oportunidades de mejora y tomo
                  decisiones basadas en resultados.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}

      <section className="services" id="servicios">
        <div className="services-heading">
          <p className="section-label">Servicios</p>

          <h2>
            Dos formas de trabajar juntos,
            <span> según lo que tu negocio necesite hoy.</span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className={`service-option ${
                service.featured ? "service-featured" : ""
              }`}
              key={service.category}
            >
              <p className="service-category">{service.category}</p>

              <h3>{service.title}</h3>

              <p className="service-description">{service.description}</p>

              <p>{service.details}</p>

              <p className="service-focus">{service.focus}</p>

              <p className="service-ideal">{service.ideal}</p>

              <a href="#contacto" className="service-button">
                {service.button} <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>
{/* CONTACTO */}

<section className="contact-section" id="contacto">
  <p className="contact-label">Hablemos de tu proyecto</p>

  <h2>
    ¿Querés dejar de improvisar
    <span> con tu publicidad?</span>
  </h2>

  <p className="contact-description">
    Conversemos sobre tu negocio, tus objetivos y qué estrategia publicitaria
    tiene sentido para vos.
  </p>

  <div className="contact-actions">
    <a
      href="https://wa.me/5493425140309?text=Hola%20Constanza%2C%20quiero%20consultarte%20por%20tus%20servicios."
      target="_blank"
      rel="noreferrer"
      className="contact-primary"
    >
      Hablar por WhatsApp <span>↗</span>
    </a>

    <a
      href="https://www.instagram.com/cg.publicidaddigital/"
      target="_blank"
      rel="noreferrer"
      className="contact-secondary"
    >
      Ver Instagram <span>↗</span>
    </a>
  </div>
</section>

{/* PIE DE PÁGINA */}

<footer className="footer">
  <a href="#inicio" className="logo">
    CG<span>.</span>
  </a>

  <p>© 2026 Constanza Garello</p>

  <a
    href="https://www.instagram.com/cg.publicidaddigital/"
    target="_blank"
    rel="noreferrer"
  >
    @cg.publicidaddigital
  </a>
</footer>
    </main>
  )
}

export default App