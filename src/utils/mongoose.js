import { connect, connection } from 'mongoose';
import Socio from '@/models/Socio';

import { MongoClient } from 'mongodb';

const conn = {
    isConnected: false,
}

export async function connectDB() {
    
    console.log('connecting to db')
    console.log(conn.isConnected)
    if (conn.isConnected) return;
    const db = await connect('mongodb://localhost:27017/Coop_Taxi')
    //Imprime los nombres de las colecciones de la base de datos
    const collections = await db.connection.db.listCollections().toArray();
    const collectionNames = collections.map(collection => collection.name);

    conn.isConnected = db.connections[0].readyState;

}

connection.on('connected', () => {
    console.log('Mongoose connected to db')
})

connection.on('error', (err) => {
    console.log(err.message)
})