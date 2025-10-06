// console.log("Hello world1");

// using type module
// import add from "./utils.js"; 


// without using type module
// const add = require('./utils.js')
// add(200,400)

import { log } from "console";
import fs from "fs";

// 1. To Create File
const createFile = (fileName, content) => {
  fs.writeFileSync(fileName, content);
  console.log("File created successfully!");
};
// createFile("example.txt", "Node.js is a free, open-source JavaScript runtime that runs on Windows, Mac, Linux, and more.");

// 2. To read existing file
const readFile = (fileName) =>{
    const content = fs.readFileSync(fileName ,"utf-8");
    console.log(content);
}

// readFile("example.txt")


// 3. To update Existing File!
const updateFile = (path, fileName)=>{
    fs.appendFileSync(path,fileName);
}
// updateFile("./example.txt" , "\n Hello Node js \n");

// 5. To Delete File
const DeleteFile = (path) =>{
    fs.unlinkSync(path);
    console.log("File Deleted!")
}

DeleteFile("./example.txt");

