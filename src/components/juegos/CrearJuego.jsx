import { useState, useEffect } from "react";
import '../../Styles/CrearJuego.css'

export function CrearJuego({ onCerrar, onCreando, juegoInicial }) {
    const [nuevoJuego, setNuevoJuego] = useState(juegoInicial || {
        name: "",
        publisher: "",
        type: "",
        status: false,
        hoursPlayed: 0,
        rating: 0,
        imagen: ""
    });

    useEffect(() => {
        if (juegoInicial) {
            setNuevoJuego(juegoInicial);
        }
    }, [juegoInicial]);

    function actualizarValor(e) {
        let valor = e.target.value;

        if (e.target.name === "rating" || e.target.name === "hoursPlayed") {
            valor = Number(valor);
        }

        if (e.target.name === "status") {
            valor = valor === "true";
        }

        setNuevoJuego({
            ...nuevoJuego,
            [e.target.name]: valor,
        });
    }

    async function guardarJuego(e) {
        e.preventDefault();
        try {
            await onCreando(nuevoJuego);
            onCerrar();
        } catch (error) {
            console.error("Error al crear el juego:", error);
        }
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">

                <button className="cerrar" onClick={onCerrar}>X</button>

                <h2>{juegoInicial ? "Editar juego" : "Agregar nuevo juego"}</h2>

                <form onSubmit={guardarJuego}>
                    <label>Nombre:</label>
                    <input name="name" value={nuevoJuego.name} onChange={actualizarValor} />

                    <label>Desarrollador:</label>
                    <input name="publisher" value={nuevoJuego.publisher} onChange={actualizarValor} />

                    <label>Tipo:</label>
                    <input name="type" value={nuevoJuego.type} onChange={actualizarValor} />

                    <label>Imagen (URL):</label>
                    <input name="imagen" value={nuevoJuego.imagen} onChange={actualizarValor} />

                    <label>Horas jugadas:</label>
                    <input name="hoursPlayed" inputMode="numeric" value={nuevoJuego.hoursPlayed} onChange={actualizarValor} />

                    <label>Calificación:</label>
                    <select name="rating" value={nuevoJuego.rating} onChange={actualizarValor}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>

                    <label>Estado:</label>
                    <select name="status" value={String(nuevoJuego.status)} onChange={actualizarValor}>
                        <option value="false">No terminado</option>
                        <option value="true">Terminado</option>
                    </select>

                    <button type="submit" className="btn-guardar">Guardar</button>
                </form>

            </div>
        </div>
    );
}