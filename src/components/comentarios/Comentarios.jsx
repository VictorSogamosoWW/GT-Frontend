import { useEffect, useState } from "react";
import { obtenerComentarios, crearComentario } from "../../api/comentariosAPI";
import '../../styles/Comentarios.css';

export default function Comentarios({ idGame }) {
    const [comentarios, setComentarios] = useState([]);
    const [nuevoComentario, setNuevoComentario] = useState("");

    async function cargarComentarios() {
        try {
            const data = await obtenerComentarios(idGame);
            setComentarios(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        cargarComentarios();
    }, [idGame]);

    async function enviarComentario(e){
        e.preventDefault();
        if (!nuevoComentario.trim()) return;

        try {
            await crearComentario({
                idUser: "demoUser", // temporal
                idGame,
                text: nuevoComentario
            });
            setNuevoComentario("");
            cargarComentarios();
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className="comentarios">
            <h4>Comentarios</h4>
            <form onSubmit={enviarComentario}>
                <textarea id="Comentario" value={nuevoComentario} onChange={(e) => setNuevoComentario(e.target.value)}placeholder="Escribe un comentario..."/>
                <button type="submit">Enviar</button>
            </form>

            <div className="lista-comentarios">
                {comentarios.map(c => (
                    <div key={c._id} className="comentario">
                        <strong>{c.idUser}</strong>
                        <p>{c.text}</p>
                        <small>{new Date(c.created).toLocaleString()}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}