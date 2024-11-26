import { sendResponse } from '../responses/index.mjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
const saltRounds = 10;

export const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export const comparePasswords = async (password, storedPassword) => {
    const isEqual = await bcrypt.compare(password, storedPassword);
    return isEqual;
}

export const generateJWT = (user) => {
    const payload = {
        user : user.username, 
        isAdmin : true
    };

    const token = jwt.sign(payload, process.env.SECRET_ACCESS_KEY, { expiresIn : '1h' });

    return token;
};

export const verifyJWT = (token) => {

};
