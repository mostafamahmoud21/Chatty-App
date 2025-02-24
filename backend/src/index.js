import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { authRouter } from "./routes/auth.route.js";
import { connectdb } from "./lib/db.js";
import { messageRouter } from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/",(req,res)=>{
    res.send("hello")
})
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

server.listen(port, async () => {
    console.log("server is running on PORT:" + port);
    await connectdb();
});
