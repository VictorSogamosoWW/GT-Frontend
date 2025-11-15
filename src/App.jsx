import { LeerJuegos } from './components/juegos/LeerJuegos.jsx'
import './styles/App.css'
import './styles/TarjetaJuego.css'
import Header from './components/header/Header.jsx'

function App() {

  return (
    <>
        <section className='header'>
          <Header onAgregar={() => console.log("Agregar juego")} />
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
