import { PrismaClient } from "@prisma/client";
import { getErrorMessage } from "../lib/utils";
const prisma = new PrismaClient();

export const getAllCategories = async () => {

    try {
        const allCategories = await prisma.category.findMany();
        if(allCategories.length === 0){
            throw new Error(`There are not categories`);
        }else{
            return allCategories;
        }
    } catch (error: unknown) {
        throw new Error(getErrorMessage(error));
    }

};