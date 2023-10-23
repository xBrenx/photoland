import { PrismaClient } from "@prisma/client";
import { getErrorMessage } from "../lib/utils";
import { Error, User } from "../lib/datatypes";
const prisma = new PrismaClient();

export const getAllUsers = async () => {

    try {
        const AllUsers = await prisma.user.findMany();
        if (AllUsers.length === 0) {
            return `There are no users in the database`;
        }else{
            return AllUsers;
        }
    } catch (error: unknown) {
        throw new Error(getErrorMessage(error));
    }

};

export const createNewUser = async (email: string, name: string, userName: string): Promise<User> => {

    try{
        
        if (typeof email === "undefined" || email.trim() === "" || typeof name === "undefined" || name.trim() === "" || typeof userName === "undefined" || userName.trim() === ""){
            throw Error("Missing data!");
        } else  {
            const newUser = await prisma.user.create({
                data: {
                    email: email,
                    name: name,
                    userName: userName,
                }
            });
            return newUser;
         }
        
    } catch ( error: unknown ){
        console.log(error)
     throw Error(getErrorMessage(error));

    }
};

export const deleteAllUsers = async (id: string) => {

    try {
        const deleteUser = await prisma.user.delete({
            where: { id: id},
        });
        return deleteUser;
    } catch ( error: unknown) {
        throw new Error(getErrorMessage(error));
    }
};