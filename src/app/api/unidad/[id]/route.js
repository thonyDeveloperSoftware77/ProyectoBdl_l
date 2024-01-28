import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Unidad from "@/models/Unidad";

//GET  ID 
connectDB();

export async function GET(request, { params }) {

    const unidad = await Unidad.findById(params.id);
    if (!unidad) {
        return NextResponse.json({
            message: "Error: Unidad no encontrado.",
        });
    }
    return NextResponse.json(unidad);
}


//PUT

export async function PUT(request, { params }) {
    try {
        const data = await request.json();
        const unidad = await Unidad.findOneAndUpdate({ _id: params.id }, data, {
            new: true,
        });

        if (!unidad) {
            return NextResponse.json({
                message: "Error: Unidad no encontrado.",
            });
        }
        return NextResponse.json({
            message: "Unidad Actualizada",
        });
    } catch (error) {
        if (error.code === 11000) {
            return NextResponse.json({
                message: "Error",
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
        const unidad = await Unidad.findOneAndDelete({ _id: params.id });
        if (!unidad) {
            return NextResponse.json({
                message: "Error: Unidad no encontrado.",
            });
        }
        return NextResponse.json({
            message: "Unidad Eliminado",
        });
        
    } catch (error) {
        return NextResponse.json({
            message: "Error desconocido.",
        });
    }
}