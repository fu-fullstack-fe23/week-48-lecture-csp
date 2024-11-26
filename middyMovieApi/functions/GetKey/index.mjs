import { sendResponse } from "../../responses/index.mjs";
import { keys } from '../../data/keys.mjs';

export const handler = async (event) => {
  return sendResponse(200, keys[Math.floor(Math.random() * keys.length)]);
};
