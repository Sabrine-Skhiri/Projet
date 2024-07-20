const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log("Database connected");
    } catch (error) {
        console.error("Could not connect to database:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
