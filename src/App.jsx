import { LeerJuegos } from './components/leerJuegos'
import './styles/App.css'

function App() {

  return (
    <>
      <head>
        <title>Game Tracker</title>
      </head>

      <body>

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
            <LeerJuegos juegos={juegos} />
          </div>
        </section>

      </body>
    </>
  )
}

export default App
