import { up, cd, ls } from "./commands/nav.js";

const COMMANDS = { up, cd, ls };

export const commandExecutor = async (input) => {
  const inputParams = input.trim().split(/\s+/g);
  const cmd = inputParams.shift();

  if (!COMMANDS[cmd]) throw new Error("Invalid input");
  return await COMMANDS[cmd](...inputParams);
};
