import { useState, useEffect } from 'react'
export const traerTutores = () => {
    const [tutores, setTutores] = useState([])
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerTutores = async () => {
            try {
                const res = await fetch('https://randomuser.me/api/?nat=MX&results=6');
                const datos = await res.json();
                setTutores(datos.results);
                console.log(datos);
            } catch (error) {
                console.error('no funca el api');
                console.log(error);
            } finally {
                setCargando(false);
            }
        };
        obtenerTutores();
    }, []);
    return { tutores, cargando }
}