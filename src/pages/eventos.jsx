import EventoCard from "../components/eventosCard";
import { eventos } from "../data/eventosData";

const Eventos = () => {

    return (
        <div className="container mt-5">
            <div className="text-center mb-5">
                <h2 className="text-primary fw-bold"> Nuestros Proximos encuentros</h2>
                <p className="text-mute fs-5" style={{ color: "#f1f5f9" }}>Practica tu ingles en entornos reales y simulados. ¡Unete a nuestro proximo evento! </p>
            </div>
            <div className="row">
                {eventos.map((evento) => {
                    return <EventoCard
                        key={evento.id}
                        titulo={evento.titulo}
                        horario={evento.horario}
                        imagen={evento.imagen}
                        descripcion={evento.descripcion}
                        linkWhatsapp={evento.linkWhatsapp}
                    />
                })}

            </div>

        </div>
    )

}

export default Eventos