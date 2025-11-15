export function TarjetaJuego({juego}){
    return(
        <div className='tarjeta_juego'>
            <h3>{juego.name}</h3>
            <img src={juego.imagen} alt={juego.name} />
            <p>Publicado por: {juego.publisher}</p>
            <p>Tipo: {juego.type}</p>
            <p>Estado: {juego.status}</p>
            <p>Horas jugadas: {juego.hoursPlayed}</p>
            <p>Rating: {juego.rating}</p>
        </div>
    );
}