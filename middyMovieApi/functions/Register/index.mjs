import { errorHandler } from "../../middlewares/errorHandler.mjs";
import { validateKey } from "../../middlewares/validateKey.mjs";
import { validateRegistration } from "../../middlewares/validateRegistration.mjs";
import { sendResponse } from "../../responses/index.mjs";
import middy from '@middy/core';
import { db } from "../../services/db.mjs";
import { hashPassword } from "../../utils/index.mjs";

export const handler = middy(async (event) => {
    const user = JSON.parse(event.body);

    try {
        await db.put({
            TableName: 'user-db',
            Item: {
                username : user.username,
                password : await hashPassword(user.password)
            }
        }); 
    } catch(error) {
        return sendResponse(404, { message : 'Could not add user'});
    }

  return sendResponse(201, 'Registration successful!');
}).use(validateKey())
  .use(validateRegistration())
  .use(errorHandler());
