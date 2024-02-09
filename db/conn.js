import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};

export default connectDB;




// import mongodb from "mongodb";

// const { MongoClient } = mongodb;

// const connectionString = process.env.ATLAS_URI || "";

// const client = new MongoClient(connectionString, { useUnifiedTopology: true });

// let conn;
// try {
//   conn = await client.connect();
// } catch (e) {
//   console.error(e);
// }

// let db = conn.db("sample_mflix");

// export default db;
