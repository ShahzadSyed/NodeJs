import express from "express"

const app = express()
const PORT = process.env.PORT || 5000

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/signup", (req, res) => {
    console.log("Request body:", req.body)
    res.status(200).json({ message: "Signup route hit successfully" })
})

app.listen(PORT, ()=>console.log(`server is running on localhost: ${PORT}`))