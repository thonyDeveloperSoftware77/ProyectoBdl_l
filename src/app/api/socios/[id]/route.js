import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Socio from "@/models/Socio";

//GET  ID 
connectDB();

export async function GET(request, { params }) {

    const socio = await Socio.findById(params.id);
    if (!socio) {
        return NextResponse.json({
            message: "Error: Socio no encontrado.",
        });
    }
    return NextResponse.json(socio);
}


//PUT

export async function PUT(request, { params }) {
    try {
        const data = await request.json();
        const socio = await Socio.findOneAndUpdate({ _id: params.id }, data, {
            new: true,
        });

        if (!socio) {
            return NextResponse.json({
                message: "Error: Socio no encontrado.",
            });
        }
        return NextResponse.json({
            message: "Socio Actualizado",
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

//DELETE

export async function DELETE(request, { params }) {

    try {
        const socio = await Socio.findOneAndDelete({ _id: params.id });
        if (!socio) {
            return NextResponse.json({
                message: "Error: Socio no encontrado.",
            });
        }
        return NextResponse.json({
            message: "Socio Eliminado",
        });
        
    } catch (error) {
        return NextResponse.json({
            message: "Error desconocido.",
        });
    }
}