import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        number: {
            type: String, // Change the type to String
            required: true,
            unique: true,
            maxLength: 50, // Use maxLength instead of max
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        picturePath: {
            type: String,
            default: "",
        },
        houseNo: {
            type: String,
            default: "",
        },
        location: String,
        occupation: String,
    },
    { timestamps: true }
);


const User = mongoose.model("User", UserSchema);
export default User;
