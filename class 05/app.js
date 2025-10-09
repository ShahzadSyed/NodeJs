import express from "express"
import fs from "fs"
import { json } from "stream/consumers"

const app = express()
const PORT = 5000

//body parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    res.send("Server up!")
})



app.post("/createuser", (req,res)=>{
    const tempArr =[]
    tempArr.push(req.body)
    console.log(tempArr,"tempARR")
    fs.writeFileSync("users.txt", JSON.stringify(tempArr))
    res.send("User Created!")
})


app.listen(PORT , ()=>console.log(`server is running on PORT : ${PORT}`))