const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");

const PORT = 3001;

const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req, res) => { 
    res.send("pong");
 });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));