const express =require("express");
const app =express();
// console.log(app)
const books=require("./books.json")
app.get("/books", (req,res)=>{
    console.log("rahul Libraries");
    // res.send("Rahul libraries warm welcome to all readers");
    res.send({ books : books });
})

app.listen(2345,()=>{
    console.log("listining to port 2345");
})