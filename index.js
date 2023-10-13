const express=require("express")
const app= express();
const blogrouter=require("./router/blogRouter")
app.use("/api/main",blogrouter)



app.listen(4000,()=>{
    try{
        console.log("Server is running on port 4000")
        }
        catch(err){
            console.log('error occured during live server: ',err);
        }
})