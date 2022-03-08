const express =require("express");
const app =express();
// console.log(app)

app.get("/home", (req,res)=>{
    console.log("hello");
    res.send("hello world form rahul");
})

app.listen(4000,()=>{
    console.log("listining to port 4000");
})