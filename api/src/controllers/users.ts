import { PrismaClient } from "@prisma/client";
import { getErrorMessage } from "../lib/utils";
const prisma = new PrismaClient();

export const getAllUsers = async () => {

    try {
        const AllUsers = await prisma.user.findMany();
        if (AllUsers.length === 0) {
            return `There are no users in the database`;
        }else{
            return AllUsers;
        }
    } catch (error : unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

};

export const createNewUser = async (email: string, name: string) => {

    try{
        
        if (typeof email === "undefined" || email.trim() === "" || typeof name === "undefined" || name.trim() === ""){
            return "Missing data!";
        } else  {
            const newUser = await prisma.user.create({
                data: {
                    email: email,
                    name: name,
                }
            });
            return newUser;
         }
        
    } catch ( error: unknown ){
        return {
            error: getErrorMessage(error),
        };
    }

};
