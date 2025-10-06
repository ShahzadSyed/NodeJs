// import http from "http"

// // creating a server
// const server = http.createServer((request , response)=>{

// })

// // listen server
// const PORT = 3000
// server.listen(PORT , ()=>console.log("sever running on 3000"))


import http from "http"

const PORT = 8080
const server = http.createServer((request, response)=>{
    console.log("request URL", request.url)
    if(request.url === "/"){
        response.end("Hit Root URL");
    } else if (request.url === "/about"){
        response.end("Hit About Url");
    } else if (request.url === "/profile"){
        response.end("Hit Profile URL");
    }
    
})

server.listen(PORT, ()=>console.log("Now, Server is running on PORT : 8080 http://localhost:8080"))