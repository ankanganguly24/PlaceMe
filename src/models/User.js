import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    imageUrl: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    roles: {
        type: Array,
        default: ["user"],
    },
    permissions: {
        type: Number,
        default: 1,
    },
    bio: {
        type: String,
    },
    department: {
        type: String,
    },
    joinedAt: {
        type: Date,
    },
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
