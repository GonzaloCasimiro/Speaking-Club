import { useState } from 'react';
import responderForm from './service';
const Formulario = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        motivo: 'Quiero ser miembro',
        mensaje: ''
    });
    const [enviado, setEnviado] = useState('inactivo'); //para controlar
    const formCambios = (e) => {
        //console.log("Escribiendo..", e.target.name)
        //console.log("valor",e.target.value)
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value)
    }; // manejar y captura los cambios del formulario

    const formularioEnviado = async (e) => {
        e.preventDefault();
        console.log("se envio el form");
        setEnviado('cargando');
        try {
            await responderForm(datos); //responder el contacto mediante emailjs
            setEnviado('exito');
            setDatos({
                nombre: '',
                email: '',
                motivo: 'Quiero ser miembro',
                mensaje: ''
            }); //para reiniciar el form
        } catch (error) {
            console.error("Error al enviar el form", error);
            setEstadoEnvio('error');
        } finally {
            setTimeout(() => setEnviado(false), 1500);   // para quitar el "enviado"
        }


    }
    return (
        <div className="card h-100 shadow-sm border-0 p-5 rounded-5" style={{ backgroundColor: '#f1f5f9' }}>
            <h4 className='mb-4 text-primary fw-bold'>Dejanos un mensaje</h4>
            {enviado === "exito" && (
                <div className="alert alert-success" role="alert" >
                    Mensaje enviado! Se respondera lo mas pronto posible.
                </div>
            )}

            <form onSubmit={formularioEnviado}>
                <div>
                    <label
                        htmlFor="nombre"
                        className='form-label fw-bold text-secondary'
                    > Nombre Completo </label>
                    <input
                        type="text"
                        className='form-control mb-3'
                        id="nombre" name="nombre"
                        value={datos.nombre} onChange={formCambios}
                        required
                    />

                </div>
                <div>
                    <label
                        htmlFor="email"
                        className='form-label fw-bold text-secondary'>
                        Ingresar email
                    </label>
                    <input
                        type="email"
                        className="form-control mb-3"
                        id="email"
                        name="email"
                        value={datos.email}
                        onChange={formCambios}
                        required />
                </div>
                <div>
                    <label
                        htmlFor="motivo"
                        className='form-label fw-bold text-secondary'
                    > Motivo</label>
                    <select
                        className='form-select mb-3'
                        id="motivo"
                        name="motivo"
                        value={datos.motivo}
                        onChange={formCambios}
                    >
                        <option value="Quiero ser miembro">Quiero ser miembro</option>
                        <option value="Quiero ser tutor">Quiero ser tutor</option>
                        <option value="Quiero sugerir un evento">Quiero sugerir un evento</option>
                        <option value="Consulta general">Quiero hacer una consulta</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="mensaje"
                        className='form-label fw-bold text-secondary'>
                        Escribenos tu mensaje
                    </label>
                    <textarea
                        className="form-control mb-3"
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        value={datos.mensaje}
                        onChange={formCambios}
                        required></textarea>
                </div>
                <button
                    type='submit'
                    className='btn btn-primary w-100 fw-bold'>Enviar Mensaje</button>
            </form>
        </div>
    )

}
export default Formulario
