import Carrousel from "../components/carrousel";
import TutorCard from "../components/tutoresCard";
import { traerTutores } from "../hooks/apiTutores";

const Inicio = () => {

    const { tutores, cargando } = traerTutores();
    return (
        <div className="container mt-4">
            <Carrousel />

            <div id="tutores" className="mt-5 pt-4">
                <h2 className="fw-bold display-6 text-center text-primary mb-2">Conoce a nuestros tutores</h2>
                <p className="fs-5 text-center mb-5" style={{ color: "#f1f5f9" }}>
                    Hablantes nativos y expertos bilingües listos para guiar tu aprendizaje.
                </p>

                {cargando ? (
                    <div className="d-flex justify-content-center my-5">
                        <div className="spinner-border text-primary" role="status">
                        </div>
                    </div>
                ) : (
                    <div className="row g-4">

                        {tutores.map((tutor, index) => (
                            <div className="col-12 col-md-4" key={index}>
                                <TutorCard tutor={tutor} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )

};
export default Inicio;