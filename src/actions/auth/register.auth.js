
"use server"
import UserModel from "@/models/user.model";
import connectDb from "@/db/connectDb";

const RegisterUser = async (previousState, formData) => {
    await connectDb()
    const userData = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        password: formData.get("password"),
        gender: formData.get("gender"),
        dateOfBirth: formData.get("dateOfBirth"),
        consent: formData.get("consent") === "on" ? true : false,

    }

    if (userData.consent === false) {
        return { error: 'You must agree to the terms, cutie 🥺❤️' };
    } else {
        await UserModel.create(userData)
        return { success: 'Registration successful! Welcome aboard!' };

    }

}

export default RegisterUser;