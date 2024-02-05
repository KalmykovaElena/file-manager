import { copyFile } from "../commands/copyFile.js";
import { createFile } from "../commands/createFile.js";
import { exitFromApp } from "../commands/exitFromApp.js";
import { getOSInfo } from "../commands/getOSIinfo.js";
import { moveFile } from "../commands/moveFile.js";
import { navigate, navigateUp } from "../commands/navigate.js";
import { readFile } from "../commands/readFile.js";
import { removeFile } from "../commands/removeFile.js";
import { renameFile } from "../commands/renameFile.js";
import { showFilesList } from "../commands/showFilesList.js";

export const commandList = {
  ".exit": exitFromApp,
  cd: navigate,
  up: navigateUp,
  ls: showFilesList,
  cat: readFile,
  add: createFile,
  rn: renameFile,
  cp: copyFile,
  mv:moveFile,
  rm:removeFile,
  os:getOSInfo
};
