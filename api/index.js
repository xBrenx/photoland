const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
import users from "./src/routes/users";

const PORT = 3001;

const prisma = new PrismaClient();

app.use(express.json()); //middleware que transforma req.body en json

app.get("/", (req, res) => { 
    res.send("pong");
 });

 app.use("/users", users);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));