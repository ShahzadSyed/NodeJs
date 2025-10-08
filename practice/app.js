// console.log("Hello Wolrd")

// import add from "./utils.js"

// add(20,40)

import fs from "fs"

const createFile = (fileName , content)=>{
    fs.writeFileSync(fileName, content)
    console.log("File created")
}
createFile("example.txt","File content written here again!")

const readFile = (fileName)=>{
    const content = fs.readFileSync(fileName,"utf-8")
    console.log(content)
}

readFile("example.txt")

const updateFile = (path,content)=>{
    fs.appendFileSync(path,content)
}

updateFile("./example.txt", "\n New Content goes here \n")

readFile("example.txt")

const deleteFile = (path)=>{
    fs.unlinkSync(path)
    console.log("File deleted Succesfully!")
}

deleteFile("./example.txt")

