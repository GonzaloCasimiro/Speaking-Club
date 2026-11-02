import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Inicio from './pages/inicio';
import Eventos from './pages/eventos';
import Contacto from './pages/contacto';

function App() {
    return (
        <HashRouter >
            <Navbar />
            <div className='container mt-4'>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/eventos" element={<Eventos />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </div>
        </HashRouter>
    );
}
export default App;

