import {useState, useEffect} from 'react';
import {TarjetaJuego} from './TarjetaJuego.jsx';

export function LeerJuegos() {
    const [juegos, setJuegos] = useState([]);

    useEffect(() => {
        async function cargarJuegos() {
            try {
                const res = await fetch("http://localhost:3000/juegos");
                const data = await res.json();
                console.log("Datos recibidos del backend:", data);
                setJuegos(data);
            } catch (error) {
                console.error("Error al cargar los juegos:", error);
            }
        }

        cargarJuegos();
    }, []);

    return (
        <section className='listaJuegos'>
            {juegos.map((juego)=>(
                <TarjetaJuego key={juego._id} juego={juego} />
            ))}
        </section>
    );
}

