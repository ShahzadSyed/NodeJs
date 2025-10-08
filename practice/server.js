import http from "http"

const PORT =3000
const server = http.createServer((request, response)=>{
    
})

server.listen(PORT,()=>console.log("now server is running on 3000 PORT"))