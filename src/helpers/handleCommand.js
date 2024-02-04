import { commandList } from "../constants/commandList.js";
import { getCommandData } from "./getCommandData.js";
import { showCurrentDir } from "./showCurrentDir.js";

export const handleCommand = async (data) => {
  const [key, ...params] = getCommandData(data);
  if (commandList[key]) {
    try {
      await commandList[key](...params);
    } catch {
      console.log("Operation failed");
    } finally {
      showCurrentDir();
    }
  } else {
    console.log("Invalid input");
  }
};
