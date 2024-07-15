'use server'

import { profileSchema } from "./schemas";

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const rawData = Object.fromEntries(formData);
        const validateField = profileSchema.parse(rawData);
        console.log(validateField);
        return { message: 'Profile created successfully' };
    } catch (error) {
        console.log(error);
        return { message: 'There was an error' };
    }
}
