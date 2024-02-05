import fs, { writeFile, constants } from "fs";
import path from "path";
import { cwd } from "process";

export const createFile = async (fileName) => {
  const fullPath = path.resolve(cwd(), fileName);

  fs.access(fullPath, constants.F_OK, (err) => {
    if (!err) {
      console.error("Operation failed, such a file already exists");
      return;
    }
  });

  writeFile(fullPath, "", (error) => {
   if(error){
    console.error("Operation failed");
   }
  });
};
