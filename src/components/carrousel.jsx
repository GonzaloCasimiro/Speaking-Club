import { Link } from 'react-router-dom'
const Carrousel = () => {
  return (
    <div id="carouselExampleContent" className="carousel slide mb-5" data-bs-ride="carousel">
      <div className="carousel-inner rounded-5 shadow-sm">
        <div className="carousel-item active">
          <div
            className="d-flex flex-column justify-content-center p-5 rounded-5 border-0"
            style={{ minHeight: '320px', backgroundColor: '#f1f5f9' }}
          >
            <h3 className="text-primary fw-bold">Quiénes somos</h3>
            <p className="text-secondary mb-0 fs-5 w-75">
              Somos una comunidad dedicada al aprendizaje colaborativo del idioma inglés en Salta Capital. Nuestro objetivo es conectar a estudiantes, profesionales y entusiastas en un ambiente relajado y seguro, diseñado para practicar la conversación real y superar las barreras del idioma.
            </p>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="d-flex flex-column justify-content-center  p-5 rounded-5" style={{ minHeight: '320px', backgroundColor: "#f1f5f9" }}>
            <h3 className="text-primary fw-bold">Domina el inglés hablando</h3>
            <p className="text-secondary mb-4 fs-5 w-75">
              Desarrolla tu fluidez conversacional mediante prácticas semanales. Nuestro enfoque se centra en la comunicación real, permitiéndote perder el miedo a hablar y aplicar el idioma de forma natural desde el primer encuentro.
            </p>
            <div>
              <Link to="/contacto" className="btn btn-primary fw-bold px-4">
                ¡Quiero unirme!
              </Link>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="d-flex flex-column justify-content-center  p-5 rounded-5" style={{ minHeight: '320px', backgroundColor: "#f1f5f9" }}>
            <h3 className="text-primary fw-bold">Práctica inmersiva y guiada</h3>
            <p className="text-secondary mb-4 fs-5 w-75">
              Mejora tu pronunciación y amplía tu vocabulario con el acompañamiento de nuestros moderadores. Ofrecemos espacios de práctica estructurados para diferentes niveles, garantizando un aprendizaje adaptado a tu ritmo y conocimientos.            </p>
            <div>
              <a href="#tutores" className="btn btn-primary fw-bold">
                Conocer a los tutores
              </a>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="d-flex flex-column justify-content-center   p-5 rounded-5" style={{ minHeight: '320px', backgroundColor: "#f1f5f9" }}>
            <h3 className="text-primary fw-bold">Encuentros y Networking</h3>
            <p className="text-secondary mb-4 fs-5 w-75">
              Forma parte de una comunidad activa de estudiantes y profesionales. Además de las prácticas regulares, organizamos reuniones de intercambio cultural y actividades presenciales en distintos puntos estratégicos de Salta Capital.            </p>
            <div>
              <Link to="/eventos" className="btn btn-primary fw-bold">
                Ver próximos eventos
              </Link>
            </div>
          </div>
        </div>

      </div>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn btn-outline-secondary btn-sm rounded-circle" type="button" data-bs-target="#carouselExampleContent" data-bs-slide="prev" style={{ width: '40px', height: '40px' }}>
          <i className="bi bi-chevron-left"></i>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="btn btn-outline-secondary btn-sm rounded-circle" type="button" data-bs-target="#carouselExampleContent" data-bs-slide="next" style={{ width: '40px', height: '40px' }}>
          <i className="bi bi-chevron-right"></i>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  )
}

export default Carrousel