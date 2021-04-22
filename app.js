const express=require("express");
const app= express();
app.use(express.static('public'));
app.listen(8080,error=>{
    if(error){
        console.log(error);
    }
    console.log("server is running on port"+8080);
});
app.get("/",(req,res)=>{
    res.redirect("/home");
})
app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/public/home/home.html");
});
app.get("/basics",(req,res)=>{
    res.sendFile(__dirname+"/public/basics/basics.html")
})
app.get("/crud",(req,res)=>{
    res.sendFile(__dirname+"/public/crud/crud.html")
})
app.get("/installingNode",(req,res)=>{
    res.sendFile(__dirname+"/public/installingNode/installingNode.html")
})
app.get("/loops",(req,res)=>{
    res.sendFile(__dirname+"/public/loops/loops.html")
})
app.get("/functions",(req,res)=>{
    res.sendFile(__dirname+"/public/functions/functions.html")
})
app.get("/objects",(req,res)=>{
    res.sendFile(__dirname+"/public/objects/objects.html")
})
app.get("/pages",(req,res)=>{
    res.sendFile(__dirname+"/public/pages/pages.html")
})
app.get("/server",(req,res)=>{
    res.sendFile(__dirname+"/public/server/server.html")
})
app.get("/arrays",(req,res)=>{
    res.sendFile(__dirname+"/public/arrays/arrays.html")
})

