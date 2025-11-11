const mongoose = require("mongoose");

const juego = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "El nombre del juego es obligatorio"],
            trim: true,
        },
        
        publisher: {
            type: String,
            default: "Desconocido",
            trim: true,
        },
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "TipoJuego",
            required: [true, "El tipo de juego es obligatorio"],
        },
        imagen: {
            type: String,
            default: "",
            trim: true,
        },
    },
    {timestamps: true}
);

const Juego = mongoose.model("Juego", juego);
module.exports = Juego;