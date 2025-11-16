import { useState, useEffect } from "react";
import Header from "../header/Header";
import { LeerJuegos } from "./LeerJuegos";
import { CrearJuego } from "./CrearJuego";
import { obtenerJuegos, crearJuego } from "../../api/juegosAPI";
import '../../styles/JuegosManager.css';

export function JuegosManager(){
    const [mostarForm, setMostrarForm] = useState(false);
    const [juegos, setJuegos] = useState([]);

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

    return(
        <>
            <section className='header'>
                <Header onAgregar={() => setMostrarForm(true)} />
            </section>

            {mostarForm && (
                <CrearJuego onCreando = {agregarJuego} onCerrar = {()=>setMostrarForm(false)} />
            )}

            <section className='juegos'>
                <div id='juegos'>
                    <LeerJuegos juegos={juegos} />
                </div>
            </section>
        
        </>
    )

}
