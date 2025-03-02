import mongoose from "mongoose";

const { Schema } = mongoose;

const perfilSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    sobrenome: {
        type: String,
        required: true,
    },
    idade: {
        type: Number,
        required: true,
    }
});

const Perfil = mongoose.model("Perfil", perfilSchema);

export default Perfil;
