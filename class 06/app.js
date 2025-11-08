import express from "express"
import fs from "fs"
import { json } from "stream/consumers"
import { brotliDecompress } from "zlib"
import { v4 as uuidv4 } from 'uuid';
import { parse } from "path";

const app = express()
const PORT = 5000

//body parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//get API
app.get("/", (req, res)=>{
    res.send("Server up!")
})


//Create user API
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
        parseData.push({...req.body, id : uuidv4() })
        fs.writeFileSync("users.txt", JSON.stringify(parseData ))
        console.log("parse data" , parseData)
        
    } else{
        //CREATE NEW FILE
        const tempArr = []
        tempArr.push({...req.body, id : uuidv4()})
        fs.writeFileSync("users.txt", JSON.stringify(tempArr))
    }
    res.send("File created")
})
//get users API
app.get("/getusers", (req,res)=>{
    const users = fs.readFileSync("users.txt", "utf-8")
    res.send(users)

})

//update users with the help of param (/:id) API
app.post("/updateusers/:id", (req,res)=>{
    const param = req.params
    console.log(param.id, "params")

    const getData = fs.readFileSync("users.txt", "utf-8")
    const parseData = JSON.parse(getData)
    // console.log("parseData", parseData)

    const newArr = parseData.map(user=>{
        console.log("user", user)
        if(user.id === param.id)
        {
            return req.body
        }
        else{
            return user
        }
    })
    console.log(newArr, "newArr")
    fs.writeFileSync("users.txt",JSON.stringify(newArr))
    res.send("files updated!")
})

//delete user by param - API
app.post("/deleteuser/:userid" , (req , res) =>{
    // console.log("param" , req.params.userid) //showing user ID
    
    const getData = fs.readFileSync("users.txt", "utf-8") //get All user details & Store
    // console.log("getDate", getData) //Showing ALL user details

    const parseData = JSON.parse(getData) //Convert data into JSON format
    // console.log("parseData", parseData) //Showing data in JSON format

    //get user by id
    const indexNumber = parseData.findIndex((user)=>{
        if(user.id === req.params.userid)
        {
            console.log("return", user)
            return user
        }
       
        
        // console.log("parseData", parseData)
        
    })
     //using splice method remove data
     parseData.splice(indexNumber , 1)
     console.log("parseData", parseData) //check data remove or not
     
     //update record after deleting data
     fs.writeFileSync("users.txt", JSON.stringify(parseData))
     res.send("USER DELETED!")
})

app.listen(PORT , ()=>console.log(`server is running on PORT : ${PORT}`))