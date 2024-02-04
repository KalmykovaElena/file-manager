import fs, { stat } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { cwd } from "process";

export const showFilesList = async () => {
  const dir = await fs.promises.readdir(cwd(), {
    withFileTypes: true,
  });
  console.table(
    dir
      .map((item) => ({
        name: item.name,
        type: item.isDirectory() ? "directory" : "file",
      }))
      .sort((a, b) => {
        if (a.type > b.type) {
          return 1;
        } else if (a.type < b.type) {
          return -1;
        } else {
          return (a.name > b.name) * 2 - 1;
        }
      })
  );
};
