import { TarjetaJuego } from './TarjetaJuego.jsx';
import '../../styles/LeerJuegos.css';

export function LeerJuegos({ juegos, onEditar, onEliminar }) {
    return (
        <section className='listaJuegos'>
            {juegos.map((juego) => (
                <TarjetaJuego key={juego._id} juego={juego} onEditar={onEditar} onEliminar={onEliminar} />  
            ))}
        </section>
    );
}
