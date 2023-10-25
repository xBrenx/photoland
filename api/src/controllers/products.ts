import { PrismaClient } from "@prisma/client";
import { getErrorMessage } from "../lib/utils";
import router from "../routes/users.routes";
const prisma = new PrismaClient();

export const getAllProducts = async () => {

    try {
        const allPorducts = await prisma.product.findMany();
        if (allPorducts.length === 0) {
            throw new Error(`There are no products`);
        }else{
            return allPorducts;
        }
    } catch (error: unknown) {
        throw new Error(getErrorMessage(error));
    }

};

export const getNewProductsFilter = async () => {
    
    try {
        const newProducts = await prisma.product.findMany({
            where: {isNew: true }
        });
        if (newProducts.length === 0) {
            throw new Error(`There are no new products`);
        }else{
            return newProducts;
        }
    } catch (error: unknown) {
        throw new Error(getErrorMessage(error));
    }

};

export default router;