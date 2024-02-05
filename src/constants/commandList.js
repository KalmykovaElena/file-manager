import { copyFile } from "../commands/copyFile.js";
import { createFile } from "../commands/createFile.js";
import { exitFromApp } from "../commands/exitFromApp.js";
import { calculateHash } from "../commands/calculateHash.js";
import { getOSInfo } from "../commands/getOSIinfo.js";
import { moveFile } from "../commands/moveFile.js";
import { navigate, navigateUp } from "../commands/navigate.js";
import { readFile } from "../commands/readFile.js";
import { removeFile } from "../commands/removeFile.js";
import { renameFile } from "../commands/renameFile.js";
import { showFilesList } from "../commands/showFilesList.js";
import { compressFile } from "../commands/compressFile.js";
import { decompressFile } from "../commands/decompressFile.js";

export const commandList = {
  ".exit": exitFromApp,
  cd: navigate,
  up: navigateUp,
  ls: showFilesList,
  cat: readFile,
  add: createFile,
  rn: renameFile,
  cp: copyFile,
  mv: moveFile,
  rm: removeFile,
  os: getOSInfo,
  hash: calculateHash,
  compress: compressFile,
  decompress: decompressFile
};
