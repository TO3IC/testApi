import bodyParser from "body-parser";
import Express from "express";
var app = Express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.post("/",()=>{
    
})

app.listen(4000,()=>{
    console.log("API hosted on local host 4000")
})