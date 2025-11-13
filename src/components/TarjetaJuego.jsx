export function TarjetaJuego({juego}){
    return(
        <div className='tarjeta_juego'>
            <img src={juego.imagen} alt={juego.name} />

            <h3>{juego.name}</h3>
            <p>{juego.publisher}</p>
            <p>{juego.type}</p>
            <p>{juego.status}</p>
            <p>{juego.hours} horas jugadas</p>
            <p>{juego.rating} estrellas</p>
        </div>
    );
}