import { createReadStream, createWriteStream, existsSync } from "fs";
import { createBrotliCompress } from "node:zlib";
import { pipeline } from "stream/promises";
import path from "path";
import { cwd } from "process";

export const compressFile = async (filePath, destination) => {
  const sourcePath = path.resolve(cwd(), filePath);
  const targetPath = path.resolve(cwd(), destination);
  if (!existsSync(sourcePath) || existsSync(targetPath)) {
    console.error("Operation failed");
  }
  await pipeline(
    createReadStream(sourcePath),
    createBrotliCompress(),
    createWriteStream(targetPath)
  );
};
