import { exitFromApp } from "../commands/exitFromApp.js";
import { navigate, navigateUp } from "../commands/navigate.js";
import { showFilesList } from "../commands/showFilesList.js";

export const commandList = {
  ".exit": exitFromApp,
  cd: navigate,
  up: navigateUp,
  ls: showFilesList,
};
