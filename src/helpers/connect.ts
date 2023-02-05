import mongoose from "mongoose";

type Connection = {
    isConnected?: mongoose.ConnectionStates | undefined
}

const connection: Connection = {};

export const connect = async () => {

    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.MONGO_URI as string);

    connection.isConnected = db.connections[0]?.readyState;
};