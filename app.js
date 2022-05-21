const express = require("express")
const app = express();
const path = require("path");
const fs = require("fs");
const port =process.env.PORT|| 80
//for serving html static files
app.use("/static" , express.static("static"));
//for setting pug
app.set("view engine","pug");
//setting directory foldder for pug
app.set("views",path.join(__dirname,'views'));
//creating endpoin for pug
//for saving the data 
app.use(express.urlencoded())
app.get('/',(req,res) =>{
    const cntet = 'hello this is first time we r using pug'
    const params={'title':'this is pug tut','content':cntet}
    res.render("index.pug",params);
});
app.post('/',(req,res) =>{
    nme = req.body.name
    age =  req.body.age
    Gender = req.body.Gender
    address= req.body.address
    about = req.body.about
    let OutputToWrite= `the name of client is ${nme},${age} years old,${Gender},resides in ${address}, and more is ${about}`
    fs.writeFileSync('output.txt',OutputToWrite)
    const params={'message':'The form have submitted sucessfull'}
    res.render("index.pug",params);
});
//listening to server

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});