import mongoose from "mongoose";
const newmongooseconnect = "mongodb+srv://Anirudhv1997:admin123@cluster0.kapz18z.mongodb.net/?retryWrites=true&w=majority";

const dbConnect = () =>
  mongoose
    .connect(newmongooseconnect)
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.log("Database connection error", err);
    });

export default dbConnect;
