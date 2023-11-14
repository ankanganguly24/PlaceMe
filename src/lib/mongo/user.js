import { db } from ".";
import { User } from "../../models/User";

/**
 * @param {object} user - user object
 * @param {string} user.email - user's email
 * @param {string} user.username - user's username
 * @param {string} user.userId - user's id
 * @param {string} user.imageUrl - user's image url
 */
export async function createUser(user) {
    const { email, imageUrl, userId, username } = user;

    await db.connect();

    const newUser = await User.create({
        email,
        imageUrl,
        userId,
        username,
    });

    await db.disconnect();
    return newUser;
}

/**
 * @param {string} email - user's email
 */
export async function findUserByEmail(email) {
    await db.connect();

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        await db.disconnect();
        return null;
    }

    await db.disconnect();
    return existingUser;
}

/**
 * @param {string} username - user's username
 */
export async function findUserByUsername(username) {
    await db.connect();

    const existingUser = User.findOne({ username });
    if (!existingUser) {
        await db.disconnect();
        return null;
    }

    await db.disconnect();
    return existingUser;
}

/**
 * @param {string} userId - user's id
 */
export async function findUserById(userId) {
    await db.connect();

    const existingUser = User.findById(userId);
    if (!existingUser) {
        await db.disconnect();
        return null;
    }

    await db.disconnect();
    return existingUser;
}

/**
 * @param {object} user - user object
 * @param {string} user.username - user's username
 * @param {string} user.imageUrl - user's image url
 * @param {string} user.id - user's id
 */
export async function updateUser(user) {
    const { id, username, imageUrl } = user;

    await db.connect();

    const updatedUser = await User.findOneAndUpdate(
        { userId: id },
        { username, imageUrl },
        { new: true }
    );

    await db.disconnect();
    return updatedUser;
}

/**
 * @param {string} userId - user's id
 */
export async function deleteUser(userId) {
    await db.connect();

    const deletedUser = await User.findByIdAndDelete(userId);

    await db.disconnect();
    return deletedUser;
}

export async function getAllUsers() {
    await db.connect();

    const users = await User.find();

    await db.disconnect();
    return users;
}
