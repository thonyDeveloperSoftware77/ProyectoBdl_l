import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: "Hello from the API!",
    });
}


//INGRESO DE DATOS
//Cada colección ”Socio” deberá contar con mínimo 10 documentos, y cada Socio deberá contar con una unidad asociada.
// Insertar socios
db.Socio.insertMany([
    {
        nombre: "Juan",
        apellido: "Perez",
        cedula: "2400032245",
        tipo_licencia: "Tipo B",
        direccion: {
            sector: "Norte",
            calle_principal: "Av. de los Shyris",
            calle_secundaria: "Naciones Unidas",
            numero: "1234"
        }
    },
    {
        nombre: "PANCHO",
        apellido: "Perez",
        cedula: "1700032245",
        tipo_licencia: "Tipo C",
        direccion: {
            sector: "Norte",
            calle_principal: "Av. de los Shyris",
            calle_secundaria: "Naciones Unidas",
            numero: "1234"
        }
    },
    {
        nombre: "Felipe",
        apellido: "Hernandez",
        cedula: "1700034245",
        tipo_licencia: "Tipo B",
        direccion: {
            sector: "Norte",
            calle_principal: "Av. Panamericana",
            calle_secundaria: "Pichincha",
            numero: "1234"
        }
    },
    {
        nombre: "Carlos",
        apellido: "Gomez",
        cedula: "2100056789",
        tipo_licencia: "Tipo A",
        direccion: {
            sector: "Sur",
            calle_principal: "Av. de los Volcanes",
            calle_secundaria: "Cotopaxi",
            numero: "5678"
        }
    },
    {
        nombre: "Laura",
        apellido: "Vega",
        cedula: "1700012345",
        tipo_licencia: "Tipo B",
        direccion: {
            sector: "Centro",
            calle_principal: "Av. Amazonas",
            calle_secundaria: "Wilson",
            numero: "9876"
        }
    },
    {
        nombre: "Gabriel",
        apellido: "Mendoza",
        cedula: "1100023456",
        tipo_licencia: "Tipo C",
        direccion: {
            sector: "Este",
            calle_principal: "Av. de los Andes",
            calle_secundaria: "Cuenca",
            numero: "5432"
        }
    },
    {
        nombre: "María",
        apellido: "Lopez",
        cedula: "1500098765",
        tipo_licencia: "Tipo A",
        direccion: {
            sector: "Oeste",
            calle_principal: "Av. Occidental",
            calle_secundaria: "Guayas",
            numero: "4321"
        }
    },
    {
        nombre: "Andrés",
        apellido: "Santana",
        cedula: "1300045678",
        tipo_licencia: "Tipo B",
        direccion: {
            sector: "Sur",
            calle_principal: "Av. del Sol",
            calle_secundaria: "Luna",
            numero: "8765"
        }
    },
    {
        nombre: "Luisa",
        apellido: "Gutierrez",
        cedula: "1800012345",
        tipo_licencia: "Tipo C",
        direccion: {
            sector: "Centro",
            calle_principal: "Av. Central",
            calle_secundaria: "Bolivar",
            numero: "9870"
        }
    },
    {
        nombre: "Ricardo",
        apellido: "Moreno",
        cedula: "1600087654",
        tipo_licencia: "Tipo A",
        direccion: {
            sector: "Norte",
            calle_principal: "Av. de las Estrellas",
            calle_secundaria: "Galaxia",
            numero: "6789"
        }
    }
]);

// Insertar unidades asociadas
db.Unidad.insertMany([
    {
        socio: "2400032245",
        numero: "1",
        chasis: "ABC123",
        motor: "XYZ789",
        caracteristicas: {
            marca: "Chevrolet",
            modelo: "Sail",
            color_original: "Blanco",
            cilindrada: "1.4"
        }
    },
    {
        socio: "1700032245",
        numero: "2",
        chasis: "DEF456",
        motor: "LMN012",
        caracteristicas: {
            marca: "Toyota",
            modelo: "Corolla",
            color_original: "Azul",
            cilindrada: "1.6"
        }
    },
    {
        socio: "1700034245",
        numero: "3",
        chasis: "GHI789",
        motor: "OPQ345",
        caracteristicas: {
            marca: "Honda",
            modelo: "Civic",
            color_original: "Rojo",
            cilindrada: "2.0"
        }
    },
    {
        socio: "2100056789",
        numero: "4",
        chasis: "JKL123",
        motor: "UVW678",
        caracteristicas: {
            marca: "Ford",
            modelo: "Focus",
            color_original: "Verde",
            cilindrada: "1.8"
        }
    },
    {
        socio: "1700012345",
        numero: "5",
        chasis: "MNO456",
        motor: "XYZ987",
        caracteristicas: {
            marca: "Nissan",
            modelo: "Sentra",
            color_original: "Negro",
            cilindrada: "1.6"
        }
    },
    {
        socio: "1100023456",
        numero: "6",
        chasis: "PQR789",
        motor: "ABC123",
        caracteristicas: {
            marca: "Volkswagen",
            modelo: "Jetta",
            color_original: "Gris",
            cilindrada: "2.0"
        }
    },
    {
        socio: "1500098765",
        numero: "7",
        chasis: "STU012",
        motor: "VWX345",
        caracteristicas: {
            marca: "Hyundai",
            modelo: "Elantra",
            color_original: "Plata",
            cilindrada: "1.8"
        }
    },
    {
        socio: "1300045678",
        numero: "8",
        chasis: "YZA234",
        motor: "BCD567",
        caracteristicas: {
            marca: "Mazda",
            modelo: "3",
            color_original: "Amarillo",
            cilindrada: "2.0"
        }
    },
    {
        socio: "1800012345",
        numero: "9",
        chasis: "EFG678",
        motor: "HIJ901",
        caracteristicas: {
            marca: "Kia",
            modelo: "Forte",
            color_original: "Morado",
            cilindrada: "1.6"
        }
    },
    {
        socio: "1600087654",
        numero: "10",
        chasis: "KLM345",
        motor: "NOP678",
        caracteristicas: {
            marca: "Subaru",
            modelo: "Impreza",
            color_original: "Naranja",
            cilindrada: "2.0"
        }
    }
]);
