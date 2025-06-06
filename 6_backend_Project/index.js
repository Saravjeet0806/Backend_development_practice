const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs"); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  fs.readdir(`./files`, function(err, files){
        res.render("index", {files : files});    //file read hone ke baad index.ejs render hoga
  })  
  
})

app.listen(3000)