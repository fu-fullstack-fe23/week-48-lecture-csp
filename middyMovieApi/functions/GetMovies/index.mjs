import { movies } from "../../data/movies.mjs";
import { sendResponse } from "../../responses/index.mjs";
import { validateKey } from "../../middlewares/validateKey.mjs";
import { errorHandler } from "../../middlewares/errorHandler.mjs";
import middy from '@middy/core';

export const handler = middy(async (event) => {
  return sendResponse(200, movies);
}).use(validateKey())
  .use(errorHandler());
