import fs from "fs";
import path from "path";
import { cwd, stdout } from "process";

export const readFile = async (filePath) => {
  const fullPath = path.resolve(cwd(), filePath);
  const readStream = fs.createReadStream(fullPath);
  readStream
    .on("error", () => {
      console.error("Operation failed");
    })
    .on("end", () => {
      stdout.write("\n");
    })
    .pipe(stdout);
};
