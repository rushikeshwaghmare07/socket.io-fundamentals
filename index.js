import express from "express";
import dotenv from "dotenv"
import http from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { Server } from "socket.io";

dotenv.config({
  path: "./.env",
});

const app = express();
const PORT = process.env.PORT || 8001;
const server = http.createServer(app);
const io = new Server(server);

// Serving HTML file
const _dirname = dirname(fileURLToPath(import.meta.url));
app.get("/", (req, res) => res.sendFile(join(_dirname, "index.html")));

app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
});
