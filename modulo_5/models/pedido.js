import mongoose from "mongoose";

const { Schema } = mongoose;

const pedidoSchema = new Schema({
    cliente: {
        nome: {
            type: String,
            required: true,
        },
        sobrenome: {
            type: String,
            required: true,
        }
    },
    pizzas: [
        {
            sabor: {
                type: String,
                required: true,
            },
            quantidade: {
                type: Number,
                required: true,
            },
            tamanho: {
                type: String,
                required: true,
                enum: ['Pequeno', 'Médio', 'Grande'],
            }
        }
    ],
    metodoDePagamento: {
        type: String,
        required: true,
        enum: ['Pix', 'Cartão de Crédito'],
    },
    valorTotal: {
        type: Number,
        required: true,
    },
    pago: {
        type: Boolean,
        default: false,
    }
});

const Pedido = mongoose.model("Pedido", pedidoSchema);

export default Pedido;
