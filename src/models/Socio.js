import mongoose, { connect, connection, Schema } from 'mongoose';

const DireccionSchema = new Schema({
  sector: { type: String, required: true,  trim: true },
  calle_principal: { type: String, required: true,  trim: true },
  calle_secundaria: { type: String, required: true,  trim: true },
  numero: { type: String, required: true,  trim: true }
}, { _id: false });

const SocioSchema = new Schema({
  nombre: { type: String, required: true,   trim: true },
  apellido: { type: String, required: true,  trim: true },
  cedula: { type: String, required: true,  unique: true, trim: true },
  tipo_licencia: { type: String, required: true,  trim: true },
  direccion: DireccionSchema
}, { collection: 'Socio' });

let Socio;

try {
  Socio = mongoose.model('Socio');
} catch (error) {
  Socio = mongoose.model('Socio', SocioSchema);
}

export default Socio;
