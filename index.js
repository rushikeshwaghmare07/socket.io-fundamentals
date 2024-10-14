import express from "express";
import http from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { Server } from "socket.io";

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
});
