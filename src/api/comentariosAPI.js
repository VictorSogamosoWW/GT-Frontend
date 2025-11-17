export async function obtenerComentarios(idGame){
    try{
        const res = await fetch(`http://localhost:3000/comentarios/${idGame}`);

        if (!res.ok) throw new Error("Error al obtener los comentarios");

        const data = await res.json();
        return data;
    }catch(error){
        console.error("Error al obtener los comentarios: ", error);
        throw error;
    }
}

export async function crearComentario(comentario){
    try{
        const res = await fetch("http://localhost:3000/comentarios", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(comentario)
        });

        if (!res.ok) throw new Error("Error al crear el comentario");

        return await res.json();
    }catch(error){
        console.error("Error al crear el comentario: ", error);
        throw error;
    }
}