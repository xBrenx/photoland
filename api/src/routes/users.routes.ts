import { Router, Request, Response } from "express";
import { getAllUsers, createNewUser } from "../controllers/users";
import { getErrorMessage } from "../lib/utils";
const router = Router();

router.get("/", async (req: Request, res: Response) => {

    try {
        const result =  await getAllUsers();
        return res.json(result);

    } catch (error : unknown) {
        return `error in users route: ${getErrorMessage(error)}`
    }

});

router.post("/", async (req: Request, res: Response) => {
    
    const {email, name} = req.body;


    try {
        const newUser = await createNewUser(email, name);
        console.log(newUser);
        res.status(200).send(newUser);

    } catch (error : unknown) {
        res.status(404).send(`error in users route: ${getErrorMessage(error)}`);
    }

});

export default router;