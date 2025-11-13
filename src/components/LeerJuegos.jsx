import {useState, useEffect} from 'react';
import {TarjetaJuego} from './TarjetaJuego.jsx';

export function LeerJuegos() {
    const [juegos, setJuegos] = useState([]);

    useEffect(() => {
        fetch("/juegos.json")
            .then((res)=>res.json())
            .then((data)=>setJuegos(data))
            .catch((error)=>console.error("Error al cargar los juegos:", error));
            
    }, []);

    return (
        <section className='listaJuegos'>
            {juegos.map((juego)=>(
                <TarjetaJuego key={juego._id} juego={juego} />
            ))}
        </section>
    );
}

