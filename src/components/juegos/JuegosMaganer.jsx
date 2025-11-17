import { useState, useEffect } from "react";
import Header from "../header/Header";
import { LeerJuegos } from "./LeerJuegos";
import { CrearJuego } from "./CrearJuego";
import { obtenerJuegos, crearJuego, actualizarJuego, eliminarJuego } from "../../api/juegosAPI";
import '../../styles/JuegosManager.css';

export function JuegosManager(){
    const [mostarForm, setMostrarForm] = useState(false);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [juegos, setJuegos] = useState([]);
    const [juegoEditando, setJuegoEditando] = useState(null);

    useEffect(()=>{
        cargarJuegos();
    }, []);

    async function cargarJuegos(){
        try{
            const data = await obtenerJuegos();
            setJuegos(data);
        } catch (error) {
            console.error("Error al obtener los juegos: ", error);
        }
    }

    async function agregarJuego(nuevoJuego){
        try{
            await crearJuego(nuevoJuego);
            await cargarJuegos();
        } catch (error) {
            console.error("Error al agregar el juego: ", error);
        }
    }

    async function guardarEdicion(nuevaData){
        try{
            await actualizarJuego (juegoEditando._id, nuevaData);
            await cargarJuegos();
        } catch (error) {
            console.error("Error al editar el juego: ", error);
        }
    }

    function abrirEdicion(juego){
        setModoEdicion(true);
        setJuegoEditando(juego);
        setMostrarForm(true);
    }

    return(
        <>
            <section className='header'>
                <Header onAgregar={() => {setMostrarForm(true); setModoEdicion(false);}}/>
            </section>

            {mostarForm && (
                <CrearJuego onCreando = {modoEdicion ? guardarEdicion : agregarJuego} onCerrar = {()=>setMostrarForm(false)} juegoInicial={modoEdicion ? juegoEditando : null}/>
            )}

            <section className='juegos'>
                <div id='juegos'>
                    <LeerJuegos juegos={juegos} onEditar={abrirEdicion}/>
                </div>
            </section>
        
        </>
    )



}
