#!/usr/bin/env node

const fs = require("fs");
const process = require("process");

fs.readdir(process.cwd(), (err, fileNames) => {
  if (err) {
    throw new Error(err);
  }
  console.log(fileNames);
});
