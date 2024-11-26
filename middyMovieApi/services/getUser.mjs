import { db } from './db.mjs';
import { sendResponse } from '../responses/index.mjs';

export const getUser = async (username) => {
    try {
        const { Item } = await db.get({
          TableName: 'user-db',
          Key: {
            username : username
          }
        });
        
        if(Item) {
          return Item;
        } else {
          return sendResponse(404, { message : "Username does not exist" });
        }
      } catch(error) {
        return sendResponse(404, { message : error.message });
      }
}