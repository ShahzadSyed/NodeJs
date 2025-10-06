import http from "http"

// creating a server
const server = http.createServer((request , response)=>{

})

// listen server
const PORT = 3000
server.listen(PORT , ()=>console.log("sever running on 3000"))