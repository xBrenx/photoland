import { Router } from "express";
import { getAllUsers } from "../controllers/users";
import { getErrorMessage } from "../lib/utils";
const router = Router();

router.get("/", async (_req, res) => {

    try {
        const result =  await getAllUsers();
        return res.json(result);
    } catch (error) {
        return `error in users route: ${getErrorMessage(error)}`
    }

});

export default router;