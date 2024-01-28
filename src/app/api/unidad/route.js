import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Unidad from "@/models/Unidad";

//GET

export async function GET() {
    connectDB();
    try {
        const unidad = await Unidad.find({});
        return NextResponse.json(unidad);
    } catch (error) {
        console.error(error);
    }
}

//POST

export async function POST(request) {
    try {
        const data = await request.json();
        const newunidad = new Unidad(data);
        console.log(newunidad);
        const saveUnidad = await newunidad.save();
        console.log(saveUnidad);
        return NextResponse.json({
            message: "Unidad Creado",
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
