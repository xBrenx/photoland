import { PrismaClient } from "@prisma/client";
import { getErrorMessage } from "../lib/utils";
const prisma = new PrismaClient();

export const getAllUsers = async () => {

    try {
        const AllUsers = await prisma.user.findMany();
        if (!AllUsers) {
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

export const createNewUser = async (data) => {

    try{
        const newUser = await prisma.user.create({
            data: {

            }
        });
        return newUser;
    } catch ( error: unknown ){
        return {
            error: getErrorMessage(error),
        };
    }

};
