import { getUser } from '../services/getUser.mjs';
import { comparePasswords } from '../utils/index.mjs';

export const validateLogin = () => ({
    before : async (handler) => {
        const reqUser = JSON.parse(handler.event.body);
        console.log('reqUser', reqUser);

        const user = await getUser(reqUser.username);
        console.log('user', user);

        const isEqual = await comparePasswords(reqUser.password, user.password);

        if(!isEqual) {
            console.log('Username and password dont match');
            throw new Error('Username and password dont match');
        } else {
            console.log('Vi har en matchning!');
        }
    }
});