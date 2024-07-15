'use server'

import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { profileSchema } from "./schemas";
import db from './db';
import { redirect } from "next/navigation";

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const user = await currentUser();
        if (!user) throw new Error('Please log in to create a profile');

        const rawData = Object.fromEntries(formData);
        const validateField = profileSchema.parse(rawData);

        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validateField
            }
        });

        await clerkClient.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true
            }
        })
    } catch (error) {
        return { message: error instanceof Error ? error.message : 'An error occurred' };
    }

    redirect('/');
}
