import { TarjetaJuego } from './TarjetaJuego.jsx';
import '../../styles/LeerJuegos.css';

export function LeerJuegos({ juegos, onEditar, onEliminar, tarjetaExpandida, setTarjetaExpandida }) {

    return (
        <section className='listaJuegos'>
            {juegos.map((juego) => (
                <TarjetaJuego key={juego._id} juego={juego} onEditar={onEditar} onEliminar={onEliminar} isExpanded={tarjetaExpandida === juego._id} toggleExpand={()=>setTarjetaExpandida(tarjetaExpandida === juego._id ? null: juego._id)} />  
            ))}
        </section>
    );
}
