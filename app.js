const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/users");

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose
  .connect(
    "mongodb://suryabhoopendranath:surya@user-shard-00-00.pqfc0.mongodb.net:27017,user-shard-00-01.pqfc0.mongodb.net:27017,user-shard-00-02.pqfc0.mongodb.net:27017/?ssl=true&replicaSet=atlas-97kf89-shard-0&authSource=admin&retryWrites=true&w=majority&appName=User"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Could not connect to MongoDB:", error));

// Routes
app.use("/api/users", userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
