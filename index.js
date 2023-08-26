import bodyParser from "body-parser";
import Express from "express";
import cors from "cors";
var app = Express()
var data

app.use(cors({ origin: "*" }))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get("/", (req, res) => {
    res.end(data)
})

app.post("/api/post-something",(req,res)=>{
    data = req.params
})

app.listen(4000, () => {
    console.log("API hosted on local host 4000")
})