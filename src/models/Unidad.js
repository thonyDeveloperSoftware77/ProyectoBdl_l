import mongoose, { connect, connection, Schema } from 'mongoose';

const unidadSchema = new Schema({
  socio: {
    type: String,
    required: true,
    trim: true
  },
  numero: {
    type: String,
    required: true,
    trim: true
  },
  chasis: {
    type: String,
    required: true,
    trim: true
  },
  motor: {
    type: String,
    required: true,
    trim: true
  },
  caracteristicas: {
    marca: {
      type: String,
      required: true,
      trim: true
    },
    modelo: {
      type: String,
      required: true,
      trim: true
    },
    color_original: {
      type: String,
      required: true,
      trim: true
    },
    cilindrada: {
      type: String,
      required: true,
      trim: true
    }
  }
}, {
  collection: 'Unidad'
});

let Unidad;

try {
  Unidad = mongoose.model('Unidad');
} catch (error) {
  Unidad = mongoose.model('Unidad', unidadSchema);
}

export default Unidad;




