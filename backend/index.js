const express=require('express');
const path=require('path')
const app=express();
const PORT = process.env.PORT || 4000;
app.use(express.json())
app.use(express.urlencoded())
const mytodo = [{
     title: "test api",
     description: "this is a test",
     srno: 1
 },
 {
     title: "test api 2",
     description: "this is a test 2222222",
     srno: 2
 }
 ]
app.use(express.static(path.join(__dirname, '../build')));
app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.send("connected")
  });
app.get("/api",(req,res)=>{
    res.json(mytodo)
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

app.listen(PORT,()=>console.log("server is running"))