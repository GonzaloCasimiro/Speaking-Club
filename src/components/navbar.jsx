import { Link } from "react-router-dom";
const fondo = "bg-dark";
const texto = "navbar-dark";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
            <div className="container">
                <Link className="navbar-brand text-primary fw-bold fs-4" to="/">Speaking Club</Link>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Alternar navegacion">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/eventos">Eventos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar