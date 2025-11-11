const mongoose = require("mongoose");

const tipoJuego = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "El nombre del tipo de juego es obligatorio"],
            unique: true,
            trim: true,
        },
        description: {
            type: String,
            default: "Desconocida",
            trim: true,
        },
    },
    {timestamps: true}
);

const TipoJuego = mongoose.model("TipoJuego", tipoJuego);
module.exports = TipoJuego;
