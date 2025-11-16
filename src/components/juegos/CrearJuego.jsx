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
        let valor = e.target.value;

        if(e.target.name === "rating" || e.target.name === "hoursPlayed"){
            valor = Number(valor)
        }

        if (e.target.name === "status"){
            valor = valor === "true";
        }

        setNuevoJuego({
            ...nuevoJuego,
            [e.target.name]: valor
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

               <label htmlFor="name">Nombre del juego:</label>
               <input
               type="text"
               name="name"
               placeholder="Nombre del juego"
               value={nuevoJuego.name}
               onChange={actualizarValor}
               />

               <label htmlFor="publisher">Desarrollador:</label>
               <input 
               type="text"
               name="publisher"
               placeholder="Desarrollador"
               value={nuevoJuego.publisher}
               onChange={actualizarValor}
               />

               <label htmlFor="type">Tipo:</label>
               <input
                    type="text"
                    name="type"
                    placeholder="Tipo"
                    value={nuevoJuego.type}
                    onChange={actualizarValor}
                />

               <label htmlFor="imagen">URL de la imagen:</label>
                <input
                    type="text"
                    name="imagen"
                    placeholder="URL de la imagen"
                    value={nuevoJuego.imagen}
                    onChange={actualizarValor}
                />

                <label htmlFor="hoursPlayed">Horas jugadas:</label>
                 <input
                    type="text"
                    inputMode="numeric"
                    name="hoursPlayed"
                    placeholder="Horas jugadas"
                    value={nuevoJuego.hoursPlayed}
                    onChange={actualizarValor}
                />

                <label htmlFor="rating">Calificación:</label>
                <select
                    name="rating"
                    value={nuevoJuego.rating}
                    onChange={actualizarValor}
                    >
                    <option value={1}>1/5</option>
                    <option value={2}>2/5</option>
                    <option value={3}>3/5</option>
                    <option value={4}>4/5</option>
                    <option value={5}>5/5</option>
                </select>

                <label htmlFor="status">Estado:</label>
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