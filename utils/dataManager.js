import path from "path";
import fs from "fs";

const __dirname = path.resolve(path.dirname(""));

export const getDataJSON = (p = "/data/login_credential.json") => JSON.parse(fs.readFileSync(path.join(__dirname, p), "utf8"));

export const getData = (p = "/data/login_credential.json") => fs.readFileSync(path.join(__dirname, p), "utf8");

export const setDataJSON = (data, p = "/data/login_credential.json") =>
  fs.writeFileSync(path.join(__dirname, p), JSON.stringify(data, null));

export const setData = (data, p = "/data/login_credential.json") =>
  fs.writeFileSync(path.join(__dirname, p), data);