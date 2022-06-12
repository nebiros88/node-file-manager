import readline from "readline";
import { stdin, stdout } from "process";
import {
  getUserNameFromArgs,
  getGreetings,
  exitFromApp,
  getCurrentPath,
} from "./src/utils.js";
import { commandExecutor } from "./src/command-executor/index.js";

export const readLine = readline.createInterface(stdin, stdout);

const userName = getUserNameFromArgs(process.argv.slice(2));

getGreetings(userName);

getCurrentPath();

readLine.on("line", (input) => {
  if (input === ".exit") {
    exitFromApp(userName);
  } else {
    commandExecutor(input)
      .then(() => getCurrentPath())
      .catch((err) => console.log(err.message));
  }
});

readLine.on("SIGINT", () => {
  exitFromApp(userName);
});
