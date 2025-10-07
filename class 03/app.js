import express, { urlencoded } from "express"

const app = express()
const PORT = 5000

//Allow body
app.use(express.json())
app.use(express.urlencoded({extended : true}))

var userArr = []

app.get("/",(request , response)=>{
    response.send("Server Created!")
})

app.post("/createuser",(request , response)=>{
    console.log("request", request.body)
    userArr.push(request.body)
    response.send("User Created!")
})

app.post("/updateuser",(request , response)=>{
    response.send("User Updated!")
})


app.get("/getuser",(request , response)=>{
    console.log(userArr)
    response.send(userArr)
})

app.post("/deleteuser",(request , response)=>{
    response.send("user deleted!")
})

app.listen(PORT,()=> console.log(`Server Machine is running throgh express-nodemon on http://localhost:${PORT}`))
