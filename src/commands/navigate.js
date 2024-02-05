import path from "path";
import { cwd, chdir } from "process";

export const navigate = (directory) => {
  if (directory) {
    try {
      chdir(path.resolve(cwd(), directory));
    } catch (err) {
      console.error("Operation failed");
    }
  } else {
    console.log("Invalid input");
  }
};

export const navigateUp = () => {
  navigate("..");
};
