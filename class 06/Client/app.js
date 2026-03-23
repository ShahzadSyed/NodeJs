fetch("http://localhost:5000/getusers")
.then(res => res.json()) //res convert into JSOn
.then((users)=>{ //success
    console.log("users", users)
})
.catch((error) =>{ //error
    console.log("error", error)
})