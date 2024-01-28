import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Socio from "@/models/Socio";

//GET
export async function GET() {
    connectDB();
    try {
        const socio = await Socio.aggregate([
            {
                $lookup: {
                    from: 'Unidad', // Nombre de la colección a relacionar
                    localField: 'cedula', // Nombre del campo de la colección actual
                    foreignField: 'socio', // Nombre del campo de la colección a relacionar
                    as: 'unidades' // Nombre del campo donde se insertarán todos los documentos relacionados
                }
            }
        ]);
        return NextResponse.json(socio);
    } catch (error) {
        console.error(error);
    }
}

//POST

export async function POST(request) {
    try {
        const data = await request.json();
        const newsocio = new Socio(data);
        console.log(newsocio);
        const saveSocio = await newsocio.save();
        console.log(saveSocio);
        return NextResponse.json({
            message: "Soceio Creado",
        });
    } catch (error) {
        if (error.code === 11000) {
            return NextResponse.json({
                message: "Error: La cédula ya existe en la base de datos.",
            });
        } else {
            return NextResponse.json({
                message: "Error desconocido.",
            });
        }
    }
}
