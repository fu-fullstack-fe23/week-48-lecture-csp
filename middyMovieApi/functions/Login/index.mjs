import { errorHandler } from "../../middlewares/errorHandler.mjs";
import { validateKey } from "../../middlewares/validateKey.mjs";
import { validateLogin } from "../../middlewares/validateLogin.mjs";
import { sendResponse, sendResponseWithHeaders } from "../../responses/index.mjs";
import middy from '@middy/core';
import { generateJWT } from "../../utils/index.mjs";

export const handler = middy(async (event) => {
  const token = generateJWT(JSON.parse(event.body));
  console.log('token', token);
  return sendResponseWithHeaders(201, {
    message : 'Login successful'
  }, token);
}).use(validateKey())
  .use(validateLogin())
  .use(errorHandler());
