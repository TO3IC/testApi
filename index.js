import bodyParser from "body-parser";
import Express from "express";
import cors from "cors";
var app = Express()

app.use(cors({ origin: "https://test-api-alpha.vercel.app/" }))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get("/", (req, res) => {
    res.end()
})

app.post("/", (req, res) => {

})

app.listen(4000, () => {
    console.log("API hosted on local host 4000")
})