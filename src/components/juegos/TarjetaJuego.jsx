import '../../styles/TarjetaJuego.css'
import RatingEstrellasStatic from './RatingEstrellasStatic.jsx'
import Comentarios from '../comentarios/Comentarios.jsx'

export function TarjetaJuego({juego, onEditar, onEliminar, isExpanded, toggleExpand}) {
    if (!juego) return null;

    function handleClick(e) {
        if (e.target.closest("button") || e.target.closest("textarea")) return;
        toggleExpand();
    }

    return (
        <div className={'tarjeta_juego ' + (isExpanded ? 'expandida' : '')} onClick={handleClick}>
            <div className='imagen'>
                {juego?.imagen && (
                    <img src={juego.imagen} alt="img" />
                )}
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

            {isExpanded && (
                <div className='comentarios_expandida' onClick={(e)=> e.stopPropagation()}>
                    <p>Reseña: {juego.review}</p>
                    <button className="cerrar" onClick={toggleExpand}>X</button>
                    <Comentarios idGame={juego._id} />
                </div>
            )}
        </div>
    );
}