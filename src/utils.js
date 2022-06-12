import { readLine } from "../index.js";
import { currentPath } from "./path.js";
import path from "path";
import os from "os";

export const getUserNameFromArgs = (args) => {
  const list = args[0].split("=");
  const errorMessage =
    "Wrong user name (please, run from cli -> npm run start -- --username=your_username)";

  if (list[0] === "--username" && list[1].length) {
    return list[1];
  }
  throw new Error(errorMessage);
};

export const getGreetings = (userName) => {
  const greetingsMessage = `Welcome to the File Manager, ${userName}!`;
  process.stdout.write(greetingsMessage);
};

export const exitFromApp = (userName) => {
  const exitMessage = `Thank you for using File Manager, ${userName}!`;
  console.log(exitMessage);
  readLine.close();
};

export const getCurrentPath = () => {
  const message = `\nYou are currently in ${currentPath.path}\n`;
  console.log(message);
};

export const getNormalizePath = (inputPath) => {
  const restoredPath = path.normalize(inputPath);

  if (path.isAbsolute(restoredPath)) {
    return restoredPath;
  }

  return path.join(currentPath.path, inputPath);
};
