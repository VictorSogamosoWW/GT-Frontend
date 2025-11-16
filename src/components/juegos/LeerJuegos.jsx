import { TarjetaJuego } from './TarjetaJuego.jsx';
import '../../styles/LeerJuegos.css';

export function LeerJuegos({ juegos }) {
    return (
        <section className='listaJuegos'>
            {juegos.map((juego) => (
                <TarjetaJuego key={juego._id} juego={juego} />
            ))}
        </section>
    );
}
