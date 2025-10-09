import express from "express"
import fs from "fs"
import { json } from "stream/consumers"
import { brotliDecompress } from "zlib"

const app = express()
const PORT = 5000

//body parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    res.send("Server up!")
})



app.post("/createuser", (req,res)=>{
    // const tempArr =[]
    // tempArr.push(req.body)
    // console.log(tempArr,"tempARR")
    // fs.writeFileSync("users.txt", JSON.stringify(tempArr))
    // res.send("User Created!")

    //--------------NOW WORKING WITH CONDITIONS TO CHECK FILE EXIST OR NOT
    //--------------IF EXSiST UPDATER ELSE CREAT----//

    const fileExist = fs.existsSync("users.txt")

    if(fileExist){
        //APPEND
        const getData = fs.readFileSync("users.txt", "utf-8")
        const parseData = JSON.parse(getData)
        parseData.push(req.body)
        fs.writeFileSync("users.txt", JSON.stringify(parseData))
        console.log("parse data" , parseData)
        
    } else{
        //CREATE NEW FILE
        const tempArr = []
        tempArr.push(req.body)
        fs.writeFileSync("users.txt", JSON.stringify(tempArr))
    }
    res.send("File created")




})


app.listen(PORT , ()=>console.log(`server is running on PORT : ${PORT}`))