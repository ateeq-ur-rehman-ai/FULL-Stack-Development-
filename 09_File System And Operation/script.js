const fs = require('fs');

fs.writeFile("node.txt","I am learning Backend development.", function(err){
    if(err)
        console.log("Error..!");
    else
        console.log("Done..!");
});

fs.appendFile("node.txt","With JavaScript (Node.Js,Express.Js and Mongo DB).", function(err){
    if(err)
        console.log("Error..!");
    else
        console.log("Done..!");
});

fs.rename("node.txt","backend.txt",function(err){
    if(err)
        console.log("Error..!");
    else
        console.log("Done..!");
});

fs.copyFile("backend.txt","./copyfile/backendcopy.txt",function(err){
    if(err)
        console.error(err.message);
    else
        console.log("Done..!");
});


fs.unlink("backend.txt",function(err){
    if(err)
        console.error(err.message);
    else
        console.log("Deleted..!");
});

fs.rm("./copyfile",{recursive:true},function(err){
    if(err)
        console.error(err.message);
    else
        console.log("Deleted..!") ;  
});

fs.readFile("node.txt", "utf8", function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log("File content:\n" + data);
  }
});