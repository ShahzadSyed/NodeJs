import express from "express"

const app = express()
const PORT = 5000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

var userArr = []

app.get("/",(request , response)=>{
    response.send("server Created")
})

app.post("/createuser",(request , response)=>{
    console.log("request", request.body)
    userArr.push(request.body)
    response.send("user  Created")
})

app.post("/updateuser",(request , response)=>{
    response.send("updateuser Created")
})

app.get("/getuser",(request , response)=>{
     console.log(userArr)
    response.send(userArr)
})
app.post("/deleteuser",(request , response)=>{
    response.send("deleteuser Created")
})

app.listen(PORT, ()=>console.log(`server is running on PORT : ${PORT}`))