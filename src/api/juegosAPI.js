export async function obtenerJuegos(){
    try{
        const res = await fetch("http://localhost:3000/juegos");

        if (!res.ok) throw new Error("Error al obtener los juegos");

        const data = await res.json();
        return data;
    }catch(error){
        console.error("Error al obtener los juegos: ", error);
        throw error;
    }
}

export async function crearJuego(juego){
    try{
        const res = await fetch("http://localhost:3000/juegos",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(juego),
        });

        if (!res.ok) throw new Error("Error al crear el juego");

        return await res.json();
    }catch(error){
        console.error("Error al crear el juego: ", error);
        throw error;
    }
}