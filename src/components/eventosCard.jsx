const EventoCard = ({ titulo, modalidad, imagen, descripcion, linkWhatsapp }) => {
  const columnaResponsive = "col-12 col-md-6 co-lg-4 mb-4";

  return (
    <div className={columnaResponsive}>
      <div className="card h-100 shadow-sm border-0 d-flex flex-column">
        <img
          src={imagen}
          className="card-img-top"
          alt={titulo}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold text-primary">{titulo}</h5>

          <div className="mb-3">
          </div>

          <p className="card-text text-muted mb-2" style={{ fontSize: '0.9rem' }}>
            <strong> Modalidad:</strong> {modalidad}
          </p>
          <p className="card-text flex-grow-1">{descripcion}</p>

          <a
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary fw-bold px-4"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventoCard;