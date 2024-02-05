import fs, { createReadStream, createWriteStream, constants } from "fs";
import path from "path";
import { cwd } from "process";
import { pipeline } from "stream/promises";

export const copyFile = async (pathToSourceFile, pathToTargetDirectory) => {
  const sourcePath = path.resolve(cwd(), pathToSourceFile);
  const fileName = path.basename(pathToSourceFile);
  const targetPath = path.resolve(pathToTargetDirectory, fileName);

//   if (
//     !existsSync(sourcePath) ||
//     existsSync(targetPath) ||
//     !existsSync(pathToTargetDirectory)
//   ) {
//     throw new Error("Operation failed");
//   }
    fs.access(fullPath, constants.F_OK, (err) => {
      if (!err) {
        console.error("Operation failed, such a file already exists");
        return;
      }
    });
  await pipeline(createReadStream(sourcePath), createWriteStream(targetPath));
};
