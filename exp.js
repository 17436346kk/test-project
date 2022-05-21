const express = require("express")
const app = express();
const path = require("path");
const port = 80
//for serving html static files
app.use("/static" , express.static("static"));
//for setting pug
app.set("view engine","pug");
//setting directory foldder for pug
app.set("views",path.join(__dirname,'views'));
//creating endpoin for pug

app.get("/demo",(req,res) =>{
res.render('demo',{title:'Hey',message:'Hello there'});
});


app.get("/",(req,res) =>{
    res.send("This is about page");
});

app.get("/home",(req,res) =>{
    res.send("This is home  page");
});

app.post("/home",(req,res) =>{
    res.send("This is home  page");
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});