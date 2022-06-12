import path from "path";
import { access, readdir } from "node:fs/promises";
import { currentPath } from "../../path.js";
import { getCurrentPath, getNormalizePath } from "../../utils.js";
import os from "os";

export const up = () => {
  currentPath.path = path.join(currentPath.path, "..");
};

export const cd = async (...params) => {
  const [receivedPath] = params;
  if (!receivedPath || params.length > 1) throw new Error("Invalid input");
  try {
    const newPath = getNormalizePath(receivedPath);
    await access(newPath);
    currentPath.path = newPath;
  } catch {
    throw new Error("Operation failed");
  }
};

export const ls = async () => {
  try {
    const filesList = await readdir(
      !currentPath.path ? os.homedir() : currentPath.path
    );
    for (const file of filesList) {
      console.log(file);
    }
  } catch (err) {
    throw new Error("Operation failed");
  }
};
