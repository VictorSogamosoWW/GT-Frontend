import '../../styles/TarjetaJuego.css'

export function TarjetaJuego({juego}){
    return(
        <div className='tarjeta_juego'>
            <div className='imagen'>
                <img src={juego.imagen} alt={juego.name} />
            </div>
            <div className='info'>
                <h3>{juego.name}</h3>
                <p>Rating: {juego.rating}</p>
                <p>Publicado por: {juego.publisher}</p>
                <p>Tipo: {juego.type}</p>
                <p>Estado: {juego.status}</p>
                <p>Horas jugadas: {juego.hoursPlayed}</p>
            </div>
        </div>
    );
}