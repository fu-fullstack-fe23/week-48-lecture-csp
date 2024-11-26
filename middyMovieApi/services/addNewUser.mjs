import { sendResponse } from '../responses/index.mjs';
import { db } from './db.mjs';
import { v4 as uuid } from 'uuid';

export const addNewUser = async (user) => {
    const id = uuid().substring(0, 5);

    try {
        await db.put({
            TableName: 'users-db',
            Item: {
                id : id,
                username : user.username,
                password : user.password
            }
        });        
        console.log('hej');
    } catch(error) {
        console.log('error:', error);
        return sendResponse(404, { message : 'Could not add user' });
    }
}