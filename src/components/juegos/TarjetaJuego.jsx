import '../../styles/TarjetaJuego.css'
import { useState } from 'react';
import RatingEstrellasStatic from './RatingEstrellasStatic.jsx'
import Comentarios from '../comentarios/Comentarios.jsx'

export function TarjetaJuego({juego, onEditar, onEliminar}) {
    if (!juego) return null;

    const [expandida, setExpandida] = useState(false);

    function toggleExpansion(e) {
        if(e.target.closest("button") || e.target.closest("textarea")) return;
        setExpandida(!expandida);
    }

    return (
        <div className={'tarjeta_juego ' + (expandida ? 'expandida' : '')} onClick={toggleExpansion}>
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

            {expandida && (
                <div className='comentarios_expandida' onClick={(e)=> e.stopPropagation()}>
                    <button className="cerrar" onClick={() => setExpandida(false)}>X</button>
                    <Comentarios idGame={juego._id} />
                </div>
            )}
        </div>
    );
}