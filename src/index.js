import { exitFromApp } from "./commands/exitFromApp.js";
import { getUserName } from "./helpers/getUserName.js";
import readline from "readline";
import { handleCommand } from "./helpers/handleCommand.js";
import { showCurrentDir } from "./helpers/showCurrentDir.js";
import { chdir } from "process";
import { homedir } from "os";

export const user = getUserName();

console.log(`Welcome to the File Manager, ${user}!`);
chdir(homedir());

showCurrentDir();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});

rl.on("line", async (input) => {
  await handleCommand(input);
  rl.prompt();
});

rl.on("close", () => {
  exitFromApp();
});
