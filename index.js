
import "dotenv/config";
import connectDB from "./database.js";
import app from "./app.js";

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.log("Server failed:", error.message);
        process.exit(1);
    }
};

startServer();

