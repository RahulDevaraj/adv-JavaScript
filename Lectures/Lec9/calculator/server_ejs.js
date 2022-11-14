const express = require("express");
const app = express();

app.set("view engine", "ejs")
app.set("views", __dirname+"/views")

app.get("/", (req,res)=>{
    const rand = Math.floor(Math.random()*10)
    res.render('index.ejs', {rand})
})



app.listen(3000, ()=>{
    console.log("The server is up and running on 3000")
})