import '../../styles/Header.css'

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
                <button className='agregar_juego' onClick={handleAgregar}> ╋ Agregar Juego</button>
            </div>
        </div>
    )
}