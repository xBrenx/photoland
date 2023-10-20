import express from 'express';
import { Request, Response } from 'express';
const app = express();
import { PrismaClient } from '@prisma/client';
import users from './src/routes/users.routes.ts';

const PORT = 3001;

const prisma = new PrismaClient();

app.use(express.json()); //middleware que transforma req.body en json

app.get("/", (req : Request , res : Response) => { 
    res.send("pong");
 });

 app.use("/users", users);

app.listen(PORT, () => console.log(`Server running on port ${PORT} ^3^`));