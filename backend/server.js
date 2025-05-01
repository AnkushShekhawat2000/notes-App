const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

// Import routes
const authRoutes = require("./routes/auth");
const noteRoutes = require("./routes/note"); // ✅ Correct name
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Sucessfully connected to MongoDB!!! ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`MongoDB connection failed!!! ${error}`);
    }
};
connectDB();


app.listen(PORT, () => {
    console.log(
        `Server running on port:${process.env.PORT}`

    );
});

