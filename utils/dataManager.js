import path from "path";
import fs from "fs";

const __dirname = path.resolve(path.dirname(""));
const dataPath = path.join(__dirname, "/data/data.json");

export const getData = () => JSON.parse(fs.readFileSync(dataPath, "utf8"));

export const setData = (data) =>
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 4));