import bodyParser from "body-parser";
import Express from "express";
var app = Express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get("/",(req,res)=>{
    res.end()
})

app.post("/", (req, res)=>{
    
})

app.listen(4000,()=>{
    console.log("API hosted on local host 4000")
})