import { createReadStream, createWriteStream, existsSync } from "fs";
import { createBrotliDecompress } from "node:zlib";
import { pipeline } from "stream/promises";
import path from "path";
import { cwd } from "process";

export const decompressFile = async (compressedFile, decompressPath) => {
  const sourcePath = path.resolve(cwd(), compressedFile);
  const targetPath = path.resolve(cwd(), decompressPath);

  if (!existsSync(sourcePath) || existsSync(targetPath)) {
    console.error("Operation failed");
  }

  await pipeline(
    createReadStream(sourcePath),
    createBrotliDecompress(),
    createWriteStream(targetPath)
  );
};
