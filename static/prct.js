const express = require("express")
const app = express();
const path = require("path")
const fs = require("fs")
app.set("view search engine","pug")
app.set("view",path.join(__dirname,'view'))
app.use(express.urlencoded())
app.post('/',(req,res)=>{
   const params={"message":"form is submitted"}
   name = req.body.name
   name = req.body.name
   name = req.body.name
   let writew=`this is ${name}`
   fs.writeFileSync("ravi.txt",writw);
   res.render(index.pug)

});