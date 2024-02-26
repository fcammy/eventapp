import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) {
    console.log("Using existing MongoDB connection");
    return cached.conn;
  }

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is missing');
  }

  console.log("Creating new MongoDB connection");

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'event',
    bufferCommands: false,
  })

  cached.conn = await cached.promise;

  console.log("MongoDB connection established");

  return cached.conn;
}