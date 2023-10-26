import { Router, Request, Response } from "express";
import { getAllProducts, getNewProductsFilter } from "../controllers/products";
const router = Router();

router.get("/", async ( req: Request, res: Response ) => {
    
    try {
        const allProducts = await getAllProducts();
        res.status(200).send(allProducts);
    } catch (error: unknown) {
        res.status(400).send(error);
    }

});

router.get("/news", async ( req: Request, res: Response ) => {

    try {
        const newProducts = await getNewProductsFilter();
        res.status(200).send(newProducts);
    } catch (error: unknown) {
        res.status(400).send(error);
    }

});