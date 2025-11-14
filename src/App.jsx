import { LeerJuegos } from './components/leerJuegos'
import './styles/App.css'
import './styles/TarjetaJuego.css'

function App() {

  return (
    <>
        <section className='header'>
          <div id='header'>
            <h1>Game Tracker</h1>
            <p>Tu registro personal de juegos</p>
          </div>
          <div id="header_boton">
            <h6>Boton de agregar juego</h6>
          </div>
        </section>

        <section className='juegos'>
          <div id='juegos'>
            <LeerJuegos/>
          </div>
        </section>
    </>
  )
}

export default App
