import '../../styles/TarjetaJuego.css'
import RatingEstrellasStatic from './RatingEstrellasStatic.jsx'

export function TarjetaJuego({juego, onEditar, onEliminar}){
    return(
        <div className='tarjeta_juego'>
            <div className='imagen'>
                <img src={juego.imagen} alt={juego.name} />
            </div>
            <div className='info'>
                <h3>{juego.name}</h3>
                <RatingEstrellasStatic valor={juego.rating}/>
                <p>Publicado por: {juego.publisher}</p>
                <p>Tipo: {juego.type}</p>
                <p>Estado: {juego.status ? "Terminado" : "No terminado"}</p>
                <p>Horas jugadas: {juego.hoursPlayed}</p>
                <div className='botones'>
                    <button onClick={() => onEditar(juego)}>✏️</button>
                    <button onClick={() => onEliminar(juego._id)}>🗑️</button>
                </div>
            </div>
        </div>
    );
}