import fs, { constants } from "fs";
import path from "path";
import { cwd } from "process";
import { createHash } from "crypto";

export const calculateHash = (pathToFile) => {
    const filePath = path.resolve(cwd(), pathToFile);
     fs.access(filePath, constants.F_OK, (err) => {
       if (err) {
         console.error("Operation failed, such a file does not exist");
         return;
       }
       const readStream = fs.createReadStream(filePath);
       const hash = createHash("sha256").setEncoding("hex");
       hash.on("finish", () => console.log(hash.read()));
       readStream.pipe(hash);
     });
};
