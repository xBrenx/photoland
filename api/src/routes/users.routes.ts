import { Router, Request, Response } from "express";
import { getAllUsers, createNewUser, deleteAllUsers } from "../controllers/users";
import { createUserProfile } from "../controllers/UsersProfile";
const router = Router();

router.get("/", async ( req: Request, res: Response ) => {

    try {
        const result =  await getAllUsers();
        return res.json(result);

    } catch (error: unknown) {
        res.status(404).send(error);
    }

});

router.post("/", async ( req: Request, res: Response ) => {
    const {email, name, userName} = req.body;

    try {
        const newUser = await createNewUser(email, name, userName);//create user
        const newUserProfile = await createUserProfile(newUser.id)//create profile user

        res.status(200).send([newUser, newUserProfile]);

    } catch (error: unknown) {
        res.status(404).send(error);
    }

});

router.delete("/:id", async ( req: Request, res: Response ) => {
    const { id } = req.params;

   try {
    const deleteUser = await deleteAllUsers(id);
    res.status(200).send(deleteUser);
    
   } catch (error: unknown) {
    res.status(404).send(error);
   } 

});


export default router;