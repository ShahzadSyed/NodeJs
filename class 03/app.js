import express from "express"

const app = express()
const PORT = 5000

app.get("/",(request , response)=>{
    response.send("Server Created!")
})

app.get("/createuser",(request , response)=>{
    response.send("User Created!")
})

app.get("/updateuser",(request , response)=>{
    response.send("User Updated!")
})


app.get("/getuser",(request , response)=>{
    response.send("User Get!")
})

app.get("/deleteuser",(request , response)=>{
    response.send("user deleted!")
})

app.listen(PORT,()=> console.log(`Server Machine is running throgh express-nodemon on http://localhost:${PORT}`))
