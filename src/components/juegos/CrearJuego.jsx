import { useState } from "react";

export function CrearJuego({ onCerrar, onCreando}){
    const [nuevoJuego, setNuevoJuego] = useState({
        name: "",
        publisher: "",
        type: "",
        status: "",
        hoursPlayed: 0,
        rating: 0,
    });

    function actualizarValor(e){
        setNuevoJuego({
            ...nuevoJuego,
            [e.target.name]: e.target.value
        });
    }

    async function guardarJuego(e){
        e.preventDefault();

        try{
            await onCreando(nuevoJuego);

            setNuevoJuego({
                name: "",
                publisher: "",
                type: "",
                status: false,
                hoursPlayed: 0,
                rating: 0,
                imagen: ""
            });

            onCerrar();
        } catch(error){
            console.error("Error al crear el juego:", error);
        }  
    }

    return (
        <div className="crearJuego">

            <h2>Agregar nuevo juego</h2>

            <form onSubmit={guardarJuego}>

               <input
               type="text"
               name="name"
               placeholder="Nombre del juego"
               value={nuevoJuego.name}
               onChange={actualizarValor}
               />

               <input 
               type="text"
               name="publisher"
               placeholder="Desarrollador"
               value={nuevoJuego.publisher}
               onChange={actualizarValor}
               />

               <input
                    type="text"
                    name="type"
                    placeholder="Tipo"
                    value={nuevoJuego.type}
                    onChange={actualizarValor}
                />

                <input
                    type="text"
                    name="imagen"
                    placeholder="URL de la imagen"
                    value={nuevoJuego.imagen}
                    onChange={actualizarValor}
                />

                 <input
                    type="number"
                    name="hoursPlayed"
                    placeholder="Horas jugadas"
                    value={nuevoJuego.hoursPlayed}
                    onChange={actualizarValor}
                />

                <input
                    type="number"
                    name="rating"
                    placeholder="Calificación"
                    value={nuevoJuego.rating}
                    onChange={actualizarValor}
                />

                <select
                    name="status"
                    value={nuevoJuego.status}
                    onChange={actualizarValor}
                >
                    <option value={false}>No terminado</option>
                    <option value={true}>Terminado</option>
                </select>

                <button type="submit">Guardar</button>
                <button type="button" onClick={onCerrar}>Cancelar</button>

            </form>
        </div>
    );
}