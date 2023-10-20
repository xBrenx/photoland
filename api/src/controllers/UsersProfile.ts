import { PrismaClient } from "@prisma/client";
import { getErrorMessage } from "../lib/utils";
import { User } from "../lib/datatypes";
const prisma = new PrismaClient();

export const createUserProfile = async (id : string,) => {

    try {
        const newUserProfile = await prisma.userProfile.create({
            data : {
                user : {
                    connect : {
                        id : id,
                    }
                }
            }
        });

        return newUserProfile;

    } catch( error: unknown ) {
       throw Error(getErrorMessage(error));
    
    }
};