import Formulario from "../components/formulario";
const columnaIzq = 'col-12 col-lg-6 mb-4 mb-lg-0';
const columnaDer = 'col-12 col-lg-6';
//const urlUsina = "https://maps.google.com/maps?q=Usina%20Cultural%20de%20Salta&t=&z=16&ie=UTF8&iwloc=&output=embed";
//const urlDinoSaluzzi = "https://maps.google.com/maps?q=Centro%20Cultural%20Dino%20Saluzzi%20Salta&t=&z=16&ie=UTF8&iwloc=&output=embed";
const urlUsina = "https://www.google.com/maps/search/Usina+Cultural+de+Salta/";
const urlDinoSaluzzi = "https://www.google.com/maps/search/Centro+Cultural+Dino+Saluzzi+Salta/";
const Contacto = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-primary fw-bold text-center">Ponte en Contacto</h2>
      <p className=" fs-5 text-center mb-5 " style={{ color: "#f1f5f9" }}>
        Puedes escribir tu consulta o presentarte en nuestros puntos de encuentros.
      </p>

      <div className="row align-items-stretch">

        <div className={columnaIzq}>
          <Formulario />
        </div>

        <div className={columnaDer}>
          <div
            className="card shadow-sm border-0 p-5 h-100 d-flex flex-column rounded-5"
            style={{ backgroundColor: '#f1f5f9' }}
          >
            <h4 className="mb-4 text-primary fw-bold">Nuestros Puntos de Encuentro</h4>

            <ul className="list-group list-group-flush mb-4 bg-transparent">
              <li className="list-group-item d-flex align-items-start px-0 border-0 bg-transparent mb-3">
                <a
                  href={urlUsina}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-start text-decoration-none"
                  title="Abrir en Google Maps"
                >
                  <i className="bi bi-geo-alt-fill text-primary fs-4 me-3 mt-1"></i>
                  <div>
                    <h6 className="fw-bold text-dark mb-1">Usina Cultural (Sede Principal)</h6>
                    <small className="text-secondary">España y Juramento. Para debates de cine y charlas tech.</small>
                  </div>
                </a>
              </li>
              <li className="list-group-item d-flex align-items-start px-0 border-0 bg-transparent">
                <a
                  href={urlDinoSaluzzi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-start text-decoration-none"
                  title="Abrir en Google Maps"
                >
                  <i className="bi bi-geo-alt-fill text-primary fs-4 me-3 mt-1"></i>
                  <div>
                    <h6 className="fw-bold text-dark mb-1">Centro cultural Dino Saluzzi</h6>
                    <small className="text-secondary">Avenida Independencia 973</small>
                  </div>
                </a>

              </li>

            </ul>

            <div className="flex-grow-1 mt-3" style={{ minHeight: '250px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.193994304094!2d-65.40385549999999!3d-24.788809899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3b786b2bf2d%3A0x829a9a6a2b3fa555!2sUsina%20Cultural%20de%20Salta!5e0!3m2!1ses!2sar!4v1793431911455!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Usina Cultural Salta">
              </iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Contacto;