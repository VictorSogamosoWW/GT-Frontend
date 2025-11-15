export default function Header({onAgregar}){

    function handleAgregar(){
        onAgregar();
    }

    return(
        <div id='header'>
            <div>
                <h1>Game Tracker</h1>
                <p>Tu registro personal de juegos</p>
            </div>
            <div id="header_boton">
                <button name='agregar_juego' onClick={handleAgregar}>Boton de agregar juego</button>
            </div>
        </div>
    )
}