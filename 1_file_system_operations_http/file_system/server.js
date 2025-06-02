const fs = require('fs'); //use cjs 
//use callback api (not synchronous)

fs.writeFile("file.text", "hello world this is my file", function(err){
    if(err){
        console.log("cannot write in file")
    }
    console.log("write in file done")
})


fs.appendFile("file.text", " this is my appended text", function(err){
    if(err){
        console.log(err);
    }
    console.log("append done")
})


fs.readFile("newfile.txt", "utf-8", function(err,data){
    if(err) {
     console.log(err);
     return
    }
    console.log(data)
})


fs.rename("file.text", "file1.txt", function(err){
    if(err) console.log(err)
    else console.log("rename done")    
})


fs.copyFile("file1.txt", "copyfile.txt", function(err){
    if(err) console.log(err.message);
    else console.log("file copied")
    
})


fs.unlink("copyfile.txt", function(err){ //used for deleting a file
    if(err) console.log(err.message);
    else console.log("file deleted");    
})

fs.rm("./newdir", {recursive : true}, function(err){ //use recursive == true if directory not empty
    if(err) console.log(err.message)
    else console.log("directory removed");
        
})